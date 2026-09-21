import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { App } from '@/app/App';
import { CHAVE_STORAGE } from '@/storage/schema';

/**
 * Testes de fluxo.
 *
 * Cobrem o caminho que o aluno percorre de verdade: chegar, escolher matéria,
 * abrir conteúdo, responder questão, entender o erro e ver o progresso
 * registrado. São testes de integração — passam pelo roteador, pelo motor de
 * estudo e pela persistência, sem simular nenhum deles.
 */

function irPara(rota: string) {
  window.history.pushState({}, '', rota);
}

beforeEach(() => {
  localStorage.clear();
  irPara('/');
});

afterEach(() => {
  localStorage.clear();
});

describe('navegação', () => {
  it('abre o plano de hoje com um item que explica por que está ali', async () => {
    render(<App />);
    expect(await screen.findByRole('heading', { name: 'Plano de hoje' })).toBeInTheDocument();

    const itens = await screen.findAllByRole('listitem');
    const doPlano = itens.filter((li) => li.querySelector('a[href^="/assunto"]'));
    expect(doPlano.length).toBeGreaterThan(0);
    // A regra do produto: nenhum item do plano aparece sem motivo declarado.
    for (const item of doPlano) {
      expect(item.textContent?.trim().length).toBeGreaterThan(30);
    }
  });

  it('leva de Áreas até um assunto em dois cliques', async () => {
    const usuario = userEvent.setup();
    render(<App />);

    await usuario.click((await screen.findAllByRole('link', { name: 'Áreas' }))[0]!);
    expect(await screen.findByRole('heading', { name: 'Áreas do ENEM' })).toBeInTheDocument();

    await usuario.click(await screen.findByRole('link', { name: /Matemática e suas Tecnologias/ }));
    expect(
      await screen.findByRole('heading', { name: 'Matemática e suas Tecnologias' }),
    ).toBeInTheDocument();

    // Vários links citam este assunto (os que dependem dele avisam no motivo),
    // então a seleção é pelo destino, não pelo texto.
    const links = await screen.findAllByRole('link', { name: /Porcentagem, acréscimos e descontos/ });
    const link = links.find((a) => a.getAttribute('href') === '/assunto/mat-porcentagem')!;
    await usuario.click(link);
    expect(
      await screen.findByRole('heading', { name: 'Porcentagem, acréscimos e descontos', level: 1 }),
    ).toBeInTheDocument();
  });

  it('mostra uma página útil quando a rota não existe', async () => {
    irPara('/rota-que-nao-existe');
    render(<App />);
    expect(await screen.findByText('Esta página não existe')).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument();
  });
});

describe('página de conteúdo', () => {
  it('apresenta os nove blocos do modelo pedagógico', async () => {
    irPara('/assunto/mat-porcentagem');
    render(<App />);

    expect(await screen.findByRole('heading', { name: 'O que você precisa saber' })).toBeInTheDocument();
    for (const titulo of [
      'Explicação simples',
      'Conceitos fundamentais',
      'Exemplo resolvido',
      'Como isso aparece no ENEM',
      'Erros e pegadinhas comuns',
      'Questão prática',
      'Revisão rápida',
    ]) {
      expect(screen.getByRole('heading', { name: titulo })).toBeInTheDocument();
    }
  });

  it('exibe a justificativa da prioridade em vez de apenas rotular', async () => {
    irPara('/assunto/mat-porcentagem');
    render(<App />);
    expect(await screen.findByText('Por que este assunto é essencial')).toBeInTheDocument();
  });

  it('avisa quando há pré-requisito pendente', async () => {
    irPara('/assunto/mat-volume'); // depende de mat-area, que depende de mat-grandezas
    render(<App />);
    expect(await screen.findByText('Pré-requisito pendente')).toBeInTheDocument();
  });
});

describe('resolução de questão e correção', () => {
  it('explica o erro em vez de só dizer que errou', async () => {
    const usuario = userEvent.setup();
    irPara('/questao/mat-porc-q1');
    render(<App />);

    // C é o distrator clássico: achar que +20% e −20% se anulam.
    await usuario.click(await screen.findByRole('button', { name: /Alternativa C/ }));
    await usuario.click(screen.getByRole('button', { name: /Confirmar resposta/ }));

    expect(await screen.findByRole('heading', { name: 'Você errou' })).toBeInTheDocument();
    expect(screen.getByText('Conceito cobrado')).toBeInTheDocument();
    expect(screen.getByText('Por que a sua alternativa não funciona')).toBeInTheDocument();
    expect(screen.getByText(/Por que a alternativa B funciona/)).toBeInTheDocument();
    expect(screen.getByText('Que tipo de erro foi este')).toBeInTheDocument();
    expect(screen.getByText('O que revisar')).toBeInTheDocument();
  });

  it('oferece uma questão do mesmo conceito depois do erro', async () => {
    const usuario = userEvent.setup();
    irPara('/questao/mat-porc-q1');
    render(<App />);

    await usuario.click(await screen.findByRole('button', { name: /Alternativa C/ }));
    await usuario.click(screen.getByRole('button', { name: /Confirmar resposta/ }));

    expect(
      await screen.findByRole('link', { name: /Tentar uma questão parecida/ }),
    ).toBeInTheDocument();
  });

  it('confirma o acerto e não mostra o diagnóstico de erro', async () => {
    const usuario = userEvent.setup();
    irPara('/questao/mat-porc-q1');
    render(<App />);

    await usuario.click(await screen.findByRole('button', { name: /Alternativa B/ }));
    await usuario.click(screen.getByRole('button', { name: /Confirmar resposta/ }));

    expect(await screen.findByRole('heading', { name: 'Você acertou' })).toBeInTheDocument();
    expect(screen.queryByText('Que tipo de erro foi este')).not.toBeInTheDocument();
  });

  it('não comunica o resultado apenas por cor', async () => {
    const usuario = userEvent.setup();
    irPara('/questao/mat-porc-q1');
    render(<App />);

    await usuario.click(await screen.findByRole('button', { name: /Alternativa C/ }));
    await usuario.click(screen.getByRole('button', { name: /Confirmar resposta/ }));

    // Palavras, não só cor: leitor de tela e daltônico precisam do texto.
    expect(await screen.findByText('Correta')).toBeInTheDocument();
    expect(screen.getByText('Sua escolha')).toBeInTheDocument();
  });

  it('exige escolher uma alternativa antes de confirmar', async () => {
    irPara('/questao/mat-porc-q1');
    render(<App />);
    const botao = await screen.findByRole('button', { name: /Escolha uma alternativa/ });
    expect(botao).toBeDisabled();
  });
});

describe('registro de progresso', () => {
  it('persiste a resposta no armazenamento local', async () => {
    const usuario = userEvent.setup();
    irPara('/questao/mat-porc-q1');
    render(<App />);

    await usuario.click(await screen.findByRole('button', { name: /Alternativa B/ }));
    await usuario.click(screen.getByRole('button', { name: /Confirmar resposta/ }));
    await screen.findByRole('heading', { name: 'Você acertou' });

    const salvo = JSON.parse(localStorage.getItem(CHAVE_STORAGE)!);
    expect(salvo.respostas).toHaveLength(1);
    expect(salvo.respostas[0].questionId).toBe('mat-porc-q1');
    expect(salvo.respostas[0].correta).toBe(true);
    expect(salvo.assuntos['mat-porcentagem'].dominio).toBeGreaterThan(0);
  });

  it('classifica o tipo de erro ao errar', async () => {
    const usuario = userEvent.setup();
    irPara('/questao/mat-porc-q1');
    render(<App />);

    await usuario.click(await screen.findByRole('button', { name: /Alternativa C/ }));
    await usuario.click(screen.getByRole('button', { name: /Confirmar resposta/ }));
    await screen.findByRole('heading', { name: 'Você errou' });

    const salvo = JSON.parse(localStorage.getItem(CHAVE_STORAGE)!);
    expect(salvo.respostas[0].tipoErro).toBe('conceito');
    expect(salvo.assuntos['mat-porcentagem'].erros).toBe(1);
  });

  it('agenda revisão ao marcar um assunto como estudado', async () => {
    const usuario = userEvent.setup();
    irPara('/assunto/mat-porcentagem');
    render(<App />);

    await usuario.click(await screen.findByRole('button', { name: 'Marcar como estudado' }));

    const salvo = JSON.parse(localStorage.getItem(CHAVE_STORAGE)!);
    expect(salvo.assuntos['mat-porcentagem'].lido).toBe(true);
    expect(salvo.assuntos['mat-porcentagem'].proximaRevisao).toBeTruthy();
  });
});

describe('revisão', () => {
  it('mostra estado vazio quando não há nada vencido', async () => {
    irPara('/revisao');
    render(<App />);
    expect(await screen.findByText('Nada vencido')).toBeInTheDocument();
  });

  it('lista o assunto vencido com o motivo da revisão', async () => {
    localStorage.setItem(
      CHAVE_STORAGE,
      JSON.stringify({
        versao: 1,
        assuntos: {
          'mat-porcentagem': {
            dominio: 60,
            caixa: 2,
            proximaRevisao: '2020-01-01',
            ultimoEstudo: '2020-01-01',
            lido: true,
            acertos: 1,
            erros: 0,
          },
        },
        respostas: [],
        redacao: { secoesLidas: [], producoes: [] },
        planoConcluido: {},
        config: { orcamentoDiario: 60, linguaEstrangeira: 'ingles', diagnosticoFeito: true },
        criadoEm: '2020-01-01',
      }),
    );
    irPara('/revisao');
    render(<App />);

    const item = await screen.findByRole('link', { name: 'Porcentagem, acréscimos e descontos' });
    expect(item).toBeInTheDocument();
    const linha = item.closest('li')!;
    expect(within(linha).getByText(/Venceu há/)).toBeInTheDocument();
  });
});

describe('procedência do conteúdo', () => {
  it('marca toda questão com o selo de procedência', async () => {
    irPara('/questao/mat-porc-q1');
    render(<App />);
    expect(await screen.findByText('Autoral')).toBeInTheDocument();
  });

  it('marca a questão oficial com o selo e mostra a referência da prova', async () => {
    const usuario = userEvent.setup();
    irPara('/questao/of-2025-mt-150');
    render(<App />);

    expect(await screen.findByText('Oficial ENEM')).toBeInTheDocument();

    await usuario.click(screen.getByRole('button', { name: /Alternativa D/ }));
    await usuario.click(screen.getByRole('button', { name: /Confirmar resposta/ }));

    // A referência só faz sentido com o caderno junto: o ENEM embaralha a
    // numeração entre cadernos.
    expect(
      await screen.findByText(/ENEM 2025 — 2º dia, 2025, questão 150/),
    ).toBeInTheDocument();
  });

  it('explica na página de fontes o que é oficial e a ressalva do gabarito', async () => {
    irPara('/sobre');
    render(<App />);
    expect(await screen.findByText('O que é oficial e o que não é')).toBeInTheDocument();
    expect(screen.getByText('Sobre o gabarito das questões oficiais')).toBeInTheDocument();
  });
});

describe('matriz de referência oficial', () => {
  it('exibe as habilidades oficiais do INEP na página do assunto', async () => {
    irPara('/assunto/mat-proporcao');
    render(<App />);

    expect(
      await screen.findByText('Oficial · Matriz de Referência do ENEM (INEP)'),
    ).toBeInTheDocument();
    // H16 é a habilidade de variação direta e inversa de grandezas.
    expect(screen.getByText('H16')).toBeInTheDocument();
    expect(
      screen.getByText(/variação de grandezas, direta ou inversamente proporcionais/),
    ).toBeInTheDocument();
  });

  it('todo código de habilidade citado existe na matriz oficial da área', async () => {
    const { CATALOGO } = await import('@/content/indice');
    const { habilidade } = await import('@/content/matriz');
    const invalidos = CATALOGO.flatMap((a) =>
      a.habilidades
        .filter((codigo) => !habilidade(a.areaId, codigo))
        .map((codigo) => `${a.id}:${codigo}`),
    );
    expect(invalidos).toEqual([]);
  });
});

describe('prática com questões oficiais', () => {
  it('filtra apenas questões aplicadas em prova', async () => {
    const usuario = userEvent.setup();
    irPara('/questoes');
    render(<App />);

    await usuario.click(await screen.findByRole('button', { name: 'Só questões oficiais' }));
    expect(await screen.findByText('Oficial ENEM')).toBeInTheDocument();
    expect(screen.queryByText('Autoral')).not.toBeInTheDocument();
  });
});
