import { describe, it, expect } from 'vitest';
import { atualizarDominio, faixaDeDominio, lacuna } from './dominio';
import { agendar, revisoesVencidas, INTERVALOS } from './revisao';
import { priorizar, prerequisitosPendentes } from './prioridade';
import { analisarErros, analisarCalibracao, conceitosFrageis } from './erros';
import { gerarPlano } from './planoDiario';
import { diferencaEmDias, faseDoPlano, PROVA_DIA_1, somarDias } from './datas';
import {
  estadoInicialAssunto,
  progressoInicial,
  type Confianca,
  type EstadoAssunto,
  type Resposta,
} from '@/storage/schema';
import type { AssuntoMeta, Prioridade } from '@/content/tipos';

function assuntoFake(
  id: string,
  prioridade: Prioridade = 'essencial',
  prerequisitos: string[] = [],
): AssuntoMeta {
  return {
    id,
    areaId: 'matematica',
    titulo: `Assunto ${id}`,
    resumo: 'resumo',
    prioridade,
    justificativa: 'j',
    prerequisitos,
    minutosEstimados: 20,
    eixos: ['problemas'],
    habilidades: ['H3'],
  };
}

function estado(p: Partial<EstadoAssunto>): EstadoAssunto {
  return { ...estadoInicialAssunto(), ...p };
}

describe('domínio', () => {
  it('sobe ao acertar e desce ao errar', () => {
    expect(atualizarDominio(50, true, 'media')).toBeGreaterThan(50);
    expect(atualizarDominio(50, false, 'media')).toBeLessThan(50);
  });

  it('penaliza mais errar uma fácil do que errar uma difícil', () => {
    const base = 60;
    const perdaFacil = base - atualizarDominio(base, false, 'facil');
    const perdaDificil = base - atualizarDominio(base, false, 'dificil');
    expect(perdaFacil).toBeGreaterThan(perdaDificil);
  });

  it('premia mais acertar uma difícil do que acertar uma fácil', () => {
    const base = 40;
    expect(atualizarDominio(base, true, 'dificil')).toBeGreaterThan(
      atualizarDominio(base, true, 'facil'),
    );
  });

  it('nunca sai do intervalo 0–100', () => {
    let d = 100;
    for (let i = 0; i < 30; i++) d = atualizarDominio(d, true, 'dificil');
    expect(d).toBeLessThanOrEqual(100);
    let e = 0;
    for (let i = 0; i < 30; i++) e = atualizarDominio(e, false, 'facil');
    expect(e).toBeGreaterThanOrEqual(0);
  });

  it('classifica as faixas nos limites corretos', () => {
    expect(faixaDeDominio(null)).toBe('desconhecido');
    expect(faixaDeDominio(39.9)).toBe('fragil');
    expect(faixaDeDominio(40)).toBe('construcao');
    expect(faixaDeDominio(65)).toBe('solido');
    expect(faixaDeDominio(85)).toBe('dominado');
  });

  it('trata domínio desconhecido como lacuna alta, mas não máxima', () => {
    expect(lacuna(null)).toBe(0.8);
    expect(lacuna(0)).toBe(1);
  });
});

describe('revisão espaçada', () => {
  const longe = '2026-09-21'; // 48 dias antes da prova

  it('avança de caixa ao acertar, respeitando os intervalos', () => {
    const r = agendar(1, true, longe);
    expect(r.caixa).toBe(2);
    expect(diferencaEmDias(longe, r.proximaRevisao)).toBe(INTERVALOS[2]);
  });

  it('volta uma caixa ao errar e reagenda para o dia seguinte', () => {
    const r = agendar(3, false, longe);
    expect(r.caixa).toBe(2);
    expect(diferencaEmDias(longe, r.proximaRevisao)).toBe(1);
  });

  it('nunca desce abaixo da caixa 1', () => {
    expect(agendar(1, false, longe).caixa).toBe(1);
  });

  it('trunca a revisão que cairia depois da prova para a véspera', () => {
    const perto = somarDias(PROVA_DIA_1, -3); // intervalo de 7 dias estouraria
    const r = agendar(3, true, perto);
    expect(r.revisaoFinal).toBe(true);
    expect(r.proximaRevisao).toBe(somarDias(PROVA_DIA_1, -1));
    expect(diferencaEmDias(r.proximaRevisao, PROVA_DIA_1)).toBeGreaterThanOrEqual(0);
  });

  it('lista vencidas da mais atrasada para a menos atrasada', () => {
    const vencidas = revisoesVencidas(
      {
        a: estado({ proximaRevisao: '2026-09-18', caixa: 2 }),
        b: estado({ proximaRevisao: '2026-09-20', caixa: 1 }),
        c: estado({ proximaRevisao: '2026-09-30', caixa: 3 }),
      },
      '2026-09-21',
    );
    expect(vencidas.map((v) => v.topicId)).toEqual(['a', 'b']);
    expect(vencidas[0]!.vencidaHa).toBe(3);
  });
});

describe('prioridade', () => {
  const dia = '2026-09-21';

  it('coloca essencial não dominado acima de complementar não dominado', () => {
    const fila = priorizar([assuntoFake('x', 'complementar'), assuntoFake('y', 'essencial')], {}, dia);
    expect(fila[0]!.assunto.id).toBe('y');
  });

  it('rebaixa o que já está dominado', () => {
    const fila = priorizar([assuntoFake('a'), assuntoFake('b')], { a: estado({ dominio: 95 }) }, dia);
    expect(fila[0]!.assunto.id).toBe('b');
  });

  it('empurra para baixo assunto com pré-requisito pendente', () => {
    const base = assuntoFake('base');
    const avancado = assuntoFake('avancado', 'essencial', ['base']);
    const fila = priorizar([avancado, base], {}, dia);
    expect(fila[0]!.assunto.id).toBe('base');
    expect(prerequisitosPendentes(avancado, {})).toEqual(['base']);
  });

  it('explica o motivo de todo item da fila', () => {
    const fila = priorizar([assuntoFake('a'), assuntoFake('b', 'importante')], {}, dia);
    expect(fila.every((f) => f.motivo.length > 0)).toBe(true);
  });

  it('desvaloriza complementar quando a prova está perto', () => {
    const comp = [assuntoFake('c', 'complementar')];
    const longe = priorizar(comp, {}, '2026-09-21')[0]!.score;
    const perto = priorizar(comp, {}, somarDias(PROVA_DIA_1, -10))[0]!.score;
    expect(perto).toBeLessThan(longe);
  });

  it('reduz a prioridade do que foi estudado hoje', () => {
    const hojeEstudado = priorizar([assuntoFake('a')], { a: estado({ ultimoEstudo: dia }) }, dia);
    const naoEstudado = priorizar([assuntoFake('a')], {}, dia);
    expect(hojeEstudado[0]!.score).toBeLessThan(naoEstudado[0]!.score);
  });
});

describe('análise de erros', () => {
  const resp = (i: number, correta: boolean, tipoErro?: 'leitura' | 'conceito') => ({
    questionId: `q${i}`,
    topicId: 't1',
    conceito: 'c1',
    letra: 'A' as const,
    correta,
    dificuldade: 'media' as const,
    ...(tipoErro ? { tipoErro } : {}),
    em: '2026-09-21',
    ts: i,
  });

  it('não arrisca diagnóstico com poucos erros', () => {
    expect(analisarErros([resp(1, false, 'leitura'), resp(2, false, 'leitura')]).frase).toBeNull();
  });

  it('aponta o padrão quando ele domina os erros', () => {
    const r = analisarErros([
      resp(1, false, 'leitura'),
      resp(2, false, 'leitura'),
      resp(3, false, 'leitura'),
      resp(4, false, 'conceito'),
    ]);
    expect(r.dominante).toBe('leitura');
    expect(r.frase).toContain('leitura do enunciado');
  });

  it('não inventa padrão quando os erros estão espalhados', () => {
    const r = analisarErros([
      resp(1, false, 'leitura'),
      resp(2, false, 'conceito'),
      resp(3, false, 'leitura'),
      resp(4, false, 'conceito'),
      resp(5, false, 'conceito'),
      resp(6, false, 'leitura'),
      resp(7, false, 'leitura'),
      resp(8, false, 'conceito'),
      resp(9, false, 'conceito'),
      resp(10, false, 'leitura'),
    ]);
    expect(r.dominante).toBeNull();
  });

  it('remove da lista de frágeis o conceito já reacertado', () => {
    const errado = conceitosFrageis([resp(1, false, 'conceito')]);
    expect(errado).toHaveLength(1);
    const recuperado = conceitosFrageis([resp(1, false, 'conceito'), resp(2, true), resp(3, true)]);
    expect(recuperado).toHaveLength(0);
  });
});

describe('plano diário', () => {
  const dia = '2026-09-21';
  const secoes = [{ id: 's1', titulo: 'Estrutura', minutosEstimados: 12 }];
  const assuntos = ['a', 'b', 'c', 'd'].map((id) => assuntoFake(id));

  it('respeita o orçamento de tempo', () => {
    const progresso = progressoInicial(dia);
    progresso.config.orcamentoDiario = 30;
    const plano = gerarPlano({ assuntos, progresso, dia, secoesRedacao: secoes });
    expect(plano.minutosPlanejados).toBeLessThanOrEqual(30);
  });

  it('usa a maior parte do orçamento em vez de deixar tempo ocioso', () => {
    // Regressão: no primeiro dia, o plano entregava um único assunto de 25 min
    // para um orçamento de 60 e desperdiçava mais da metade do tempo.
    for (const orcamento of [30, 60, 90] as const) {
      const progresso = progressoInicial(dia);
      progresso.config.orcamentoDiario = orcamento;
      const plano = gerarPlano({ assuntos, progresso, dia, secoesRedacao: secoes });
      expect(plano.minutosPlanejados).toBeLessThanOrEqual(orcamento);
      expect(plano.minutosPlanejados).toBeGreaterThanOrEqual(orcamento * 0.7);
    }
  });

  it('é determinístico: duas chamadas iguais produzem o mesmo plano', () => {
    const progresso = progressoInicial(dia);
    const a = gerarPlano({ assuntos, progresso, dia, secoesRedacao: secoes });
    const b = gerarPlano({ assuntos, progresso, dia, secoesRedacao: secoes });
    expect(a.itens.map((i) => i.id)).toEqual(b.itens.map((i) => i.id));
  });

  it('dá motivo a todo item do plano', () => {
    const progresso = progressoInicial(dia);
    const plano = gerarPlano({ assuntos, progresso, dia, secoesRedacao: secoes });
    expect(plano.itens.length).toBeGreaterThan(0);
    expect(plano.itens.every((i) => i.motivo.trim().length > 0)).toBe(true);
  });

  it('coloca revisão vencida antes de assunto novo', () => {
    const progresso = progressoInicial(dia);
    progresso.assuntos['a'] = estado({
      dominio: 60,
      caixa: 2,
      proximaRevisao: '2026-09-19',
      lido: true,
    });
    const plano = gerarPlano({ assuntos, progresso, dia, secoesRedacao: secoes });
    expect(plano.itens[0]!.tipo).toBe('revisao');
  });

  it('para de introduzir assunto novo na revisão final', () => {
    const vespera = somarDias(PROVA_DIA_1, -3);
    const progresso = progressoInicial(vespera);
    progresso.config.orcamentoDiario = 90;
    const plano = gerarPlano({ assuntos, progresso, dia: vespera, secoesRedacao: secoes });
    expect(plano.fase).toBe('revisao-final');
    expect(plano.itens.some((i) => i.tipo === 'novo')).toBe(false);
  });

  it('adia revisão que não cabe em vez de estourar o orçamento', () => {
    const progresso = progressoInicial(dia);
    progresso.config.orcamentoDiario = 30;
    for (const a of assuntos) {
      progresso.assuntos[a.id] = estado({
        dominio: 50,
        caixa: 1,
        proximaRevisao: '2026-09-15',
        lido: true,
      });
    }
    const plano = gerarPlano({ assuntos, progresso, dia, secoesRedacao: secoes });
    expect(plano.minutosPlanejados).toBeLessThanOrEqual(30);
    expect(plano.revisoesAdiadas).toBeGreaterThan(0);
  });
});

describe('fases do plano', () => {
  it('muda de fase conforme a prova se aproxima', () => {
    expect(faseDoPlano('2026-09-21')).toBe('construcao');
    expect(faseDoPlano(somarDias(PROVA_DIA_1, -15))).toBe('consolidacao');
    expect(faseDoPlano(somarDias(PROVA_DIA_1, -5))).toBe('revisao-final');
    expect(faseDoPlano(PROVA_DIA_1)).toBe('prova');
  });
});

/* ==================================================================
   CONFIANÇA — o que ela muda no domínio e o que ela revela
   ================================================================== */

describe('atualizarDominio com confiança declarada', () => {
  const base = 50;

  it('acertar chutando quase não é evidência de domínio', () => {
    const chutando = atualizarDominio(base, true, 'media', 'chute');
    const sabendo = atualizarDominio(base, true, 'media', 'certeza');
    expect(chutando).toBeGreaterThan(base);
    expect(chutando - base).toBeLessThan((sabendo - base) / 2);
  });

  /*
   * O caso que justifica a feature inteira. Errar tendo certeza não é
   * desconhecimento: é um equívoco instalado, e quem está errado com
   * convicção não procura a correção sozinho. Tem de doer mais.
   */
  it('errar com certeza derruba mais que errar chutando', () => {
    const comCerteza = atualizarDominio(base, false, 'media', 'certeza');
    const chutando = atualizarDominio(base, false, 'media', 'chute');
    expect(comCerteza).toBeLessThan(chutando);
    expect(base - comCerteza).toBeGreaterThan(2 * (base - chutando));
  });

  it('a dúvida é o meio-termo nos dois sentidos', () => {
    const acertos = (['chute', 'duvida', 'certeza'] as const).map((c) =>
      atualizarDominio(base, true, 'media', c),
    );
    expect(acertos[0]!).toBeLessThan(acertos[1]!);
    expect(acertos[1]!).toBeLessThan(acertos[2]!);

    const erros = (['chute', 'duvida', 'certeza'] as const).map((c) =>
      atualizarDominio(base, false, 'media', c),
    );
    expect(erros[0]!).toBeGreaterThan(erros[1]!);
    expect(erros[1]!).toBeGreaterThan(erros[2]!);
  });

  it('resposta sem confiança se comporta como dúvida', () => {
    expect(atualizarDominio(base, true, 'media')).toBe(
      atualizarDominio(base, true, 'media', 'duvida'),
    );
    expect(atualizarDominio(base, false, 'media')).toBe(
      atualizarDominio(base, false, 'media', 'duvida'),
    );
  });

  it('continua preso entre 0 e 100 no pior caso', () => {
    expect(atualizarDominio(2, false, 'facil', 'certeza')).toBeGreaterThanOrEqual(0);
    expect(atualizarDominio(99, true, 'dificil', 'certeza')).toBeLessThanOrEqual(100);
  });
});

describe('analisarCalibracao', () => {
  function r(confianca: Confianca, correta: boolean, i: number): Resposta {
    return {
      questionId: `q${i}`,
      topicId: 'mat-porcentagem',
      conceito: 'Porcentagem',
      letra: 'A',
      correta,
      dificuldade: 'media',
      confianca,
      em: '2026-09-21',
      ts: i,
    };
  }

  it('ignora respostas sem confiança, que é como o schema 1 salvava', () => {
    const semConfianca: Resposta = { ...r('certeza', true, 1) };
    delete semConfianca.confianca;
    expect(analisarCalibracao([semConfianca]).total).toBe(0);
  });

  it('não arrisca leitura com amostra pequena', () => {
    const c = analisarCalibracao([r('certeza', true, 1), r('chute', false, 2)]);
    expect(c.confiavel).toBe(false);
    expect(c.frase).toBeNull();
    expect(c.certezaPerigosa).toBe(false);
  });

  it('calcula a taxa por faixa e monta a frase', () => {
    const respostas = [
      ...Array.from({ length: 8 }, (_, i) => r('certeza', i < 6, i)),
      ...Array.from({ length: 4 }, (_, i) => r('chute', i < 1, 100 + i)),
    ];
    const c = analisarCalibracao(respostas);
    expect(c.confiavel).toBe(true);
    expect(c.faixas.find((f) => f.confianca === 'certeza')!.taxa).toBeCloseTo(0.75);
    expect(c.faixas.find((f) => f.confianca === 'chute')!.taxa).toBeCloseTo(0.25);
    expect(c.frase).toContain('75%');
    expect(c.frase).toContain('25%');
  });

  it('faixa sem nenhuma resposta tem taxa nula, não zero', () => {
    const c = analisarCalibracao(Array.from({ length: 8 }, (_, i) => r('certeza', true, i)));
    expect(c.faixas.find((f) => f.confianca === 'chute')!.taxa).toBeNull();
  });

  /* O achado que merece alarme: errar onde diz ter certeza. */
  it('acusa certeza perigosa quando ele erra o que jura saber', () => {
    const respostas = Array.from({ length: 10 }, (_, i) => r('certeza', i < 3, i));
    expect(analisarCalibracao(respostas).certezaPerigosa).toBe(true);
  });

  it('não acusa quem está bem calibrado', () => {
    const respostas = [
      ...Array.from({ length: 8 }, (_, i) => r('certeza', i < 7, i)),
      ...Array.from({ length: 4 }, (_, i) => r('chute', i < 1, 100 + i)),
    ];
    expect(analisarCalibracao(respostas).certezaPerigosa).toBe(false);
  });
});
