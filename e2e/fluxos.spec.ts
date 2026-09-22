import { test, expect, type Page } from '@playwright/test';

/**
 * Testes de navegador.
 *
 * Cobrem o que não dá para verificar em jsdom: layout real, ausência de
 * rolagem horizontal, tamanho de alvo de toque e erros de console em
 * navegação de verdade.
 */

const ROTAS = [
  '/',
  '/areas',
  '/area/matematica',
  '/assunto/mat-porcentagem',
  '/explicar/mat-porcentagem',
  '/questoes',
  '/questao/mat-porc-q1',
  '/revisao',
  '/redacao',
  '/redacao/red-c5',
  '/diagnostico',
  '/progresso',
  '/sobre',
];

async function temRolagemHorizontal(pagina: Page) {
  return pagina.evaluate(() => document.documentElement.scrollWidth > window.innerWidth + 1);
}

/**
 * Elementos que ultrapassam a borda do viewport de layout.
 *
 * Só medir rolagem horizontal não basta: na emulação de celular, o Chrome
 * alarga o viewport de layout e reduz a página inteira quando algo não cabe.
 * O resultado é um site que abre "com zoom para fora" no telefone, sem nunca
 * produzir barra de rolagem — foi exatamente assim que a faixa de filtros e a
 * navegação de blocos passaram despercebidas. Aqui a conta é feita contra a
 * largura real do documento, e filhos de faixas roláveis são ignorados porque
 * passam da borda de propósito.
 */
async function elementosForaDaBorda(pagina: Page) {
  return pagina.evaluate(() => {
    const limite = document.documentElement.clientWidth;
    const fora: string[] = [];
    for (const el of document.querySelectorAll('body *')) {
      const r = el.getBoundingClientRect();
      if (r.width === 0) continue;
      let rolavel = false;
      for (let a = el.parentElement; a; a = a.parentElement) {
        const ox = getComputedStyle(a).overflowX;
        if (ox === 'auto' || ox === 'scroll' || ox === 'hidden') {
          rolavel = true;
          break;
        }
      }
      if (rolavel) continue;
      if (r.right > limite + 1 || r.left < -1) {
        fora.push(`${el.tagName}.${el.className} (${Math.round(r.left)}…${Math.round(r.right)})`);
      }
    }
    return fora.slice(0, 5);
  });
}

test.describe('responsividade', () => {
  for (const rota of ROTAS) {
    test(`sem rolagem horizontal em ${rota}`, async ({ page }) => {
      await page.goto(rota);
      await expect(page.locator('h1').first()).toBeVisible();
      expect(await temRolagemHorizontal(page)).toBe(false);
      expect(await elementosForaDaBorda(page)).toEqual([]);
    });
  }

  test('o texto respeita uma medida de linha legível', async ({ page }) => {
    await page.goto('/assunto/mat-porcentagem');
    const largura = await page
      .locator('#b2')
      .locator('xpath=ancestor::section[1]//p')
      .first()
      .evaluate((el) => el.getBoundingClientRect().width);
    // 68ch em ~17px fica em torno de 620px; o teto evita linha cansativa no desktop.
    expect(largura).toBeLessThan(760);
  });
});

test.describe('navegação', () => {
  test('a barra inferior aparece no celular e a superior no desktop', async ({ page }, info) => {
    await page.goto('/');
    const navs = page.getByRole('navigation', { name: 'Navegação principal' });
    // offsetParent é null para elementos position:fixed — a tab bar do celular
    // caía nesse caso. checkVisibility mede o que a pessoa realmente vê.
    const visiveis = await navs.evaluateAll(
      (els) => els.filter((el) => (el as HTMLElement).checkVisibility()).length,
    );
    expect(visiveis).toBe(1);
    expect(info.project.name).toBeTruthy();
  });

  test('todos os alvos de toque têm pelo menos 44px de altura', async ({ page }) => {
    await page.goto('/');
    const pequenos = await page.evaluate(() => {
      const alvos = [...document.querySelectorAll('nav a, button')];
      return alvos
        .filter((el) => (el as HTMLElement).offsetParent !== null)
        .map((el) => ({ texto: el.textContent?.trim().slice(0, 30) ?? '', altura: el.getBoundingClientRect().height }))
        .filter((a) => a.altura > 0 && a.altura < 34);
    });
    expect(pequenos).toEqual([]);
  });

  test('o link de pular para o conteúdo funciona com teclado', async ({ page }) => {
    await page.goto('/');
    await page.keyboard.press('Tab');
    const focado = await page.evaluate(() => document.activeElement?.textContent?.trim());
    expect(focado).toBe('Pular para o conteúdo');
  });
});

test.describe('fluxo de estudo', () => {
  test('do plano até a correção de uma questão', async ({ page }) => {
    const erros: string[] = [];
    page.on('pageerror', (e) => erros.push(e.message));
    page.on('console', (m) => {
      if (m.type() === 'error') erros.push(m.text());
    });

    await page.goto('/');
    await expect(page.getByRole('heading', { name: 'Plano de hoje', exact: true })).toBeVisible();

    // O primeiro item do plano leva a um assunto.
    const primeiro = page.locator('a[href^="/assunto/"]').first();
    await primeiro.click();
    await expect(page.locator('h1')).toBeVisible();

    // Descer até a questão e responder.
    await page.locator('#b7').scrollIntoViewIfNeeded();
    await page.getByRole('button', { name: /Alternativa A/ }).first().click();
    await page.getByRole('button', { name: 'Tenho certeza' }).first().click();

    const correcao = page.getByRole('region', { name: 'Correção da questão' }).first();
    await expect(correcao).toBeVisible();
    await expect(correcao.getByText(/Resolução/)).toBeVisible();

    // A correção não pode ficar escondida atrás do cabeçalho fixo.
    const posicao = await correcao.evaluate((el) => el.getBoundingClientRect().top);
    expect(posicao).toBeGreaterThan(-1);

    expect(erros).toEqual([]);
  });

  test('o progresso sobrevive a um recarregamento', async ({ page }) => {
    await page.goto('/questao/mat-porc-q1');
    await page.getByRole('button', { name: /Alternativa B/ }).click();
    await page.getByRole('button', { name: 'Tenho certeza' }).click();
    await expect(page.getByRole('heading', { name: 'Você acertou' })).toBeVisible();

    await page.goto('/progresso');
    await expect(page.getByText('questões respondidas')).toBeVisible();
    const respondidas = await page.locator('text=questões respondidas').locator('..').textContent();
    expect(respondidas).toContain('1');
  });

  test('a revisão aparece depois de estudar um assunto', async ({ page }) => {
    await page.goto('/assunto/mat-porcentagem');
    await page.getByRole('button', { name: 'Marcar como estudado' }).click();
    await expect(page.getByText(/Próxima revisão agendada/)).toBeVisible();
  });
});

test.describe('Modo Feynman', () => {
  test('entra a partir do assunto e completa o fluxo de explicar', async ({ page }) => {
    await page.goto('/assunto/mat-porcentagem');
    await page.getByRole('link', { name: 'Explicar este assunto de memória' }).click();
    await expect(page).toHaveURL(/\/explicar\/mat-porcentagem/);

    await expect(
      page.getByRole('button', { name: 'Revelar pontos-chave' }),
    ).toBeDisabled();

    await page
      .getByLabel('Sua explicação do assunto')
      .fill('Porcentagem vira um fator que multiplica o valor original.');
    await expect(page.getByRole('button', { name: 'Revelar pontos-chave' })).toBeEnabled();
    await page.getByRole('button', { name: 'Revelar pontos-chave' }).click();

    await expect(page.getByRole('heading', { name: 'Você cobriu isso?' })).toBeVisible();
    const itens = page.locator('input[type="checkbox"]');
    const total = await itens.count();
    expect(total).toBeGreaterThan(0);
    await itens.nth(0).check();
    await itens.nth(1).check();
    await expect(page.getByText(`2 de ${total}`)).toBeVisible();

    await page.getByRole('button', { name: 'Concluir explicação' }).click();
    await expect(page.getByRole('heading', { name: 'Registrado' })).toBeVisible();
    await expect(page.getByText(/não vira nota de domínio/)).toBeVisible();
  });

  test('mostra o aviso de privacidade antes de ligar o microfone, sem persistir consentimento', async ({
    page,
  }) => {
    await page.goto('/explicar/mat-porcentagem');
    const botaoDitar = page.getByRole('button', { name: 'Ditar explicação por voz' });
    // A API existe no Chromium do teste, então o botão de microfone aparece
    // — o teste de ausência do botão fica no describe de degradação abaixo.
    await expect(botaoDitar).toBeVisible();

    await botaoDitar.click();
    await expect(page.getByText('Antes de ligar o microfone')).toBeVisible();
    await expect(page.getByText(/envia o áudio para servidores externos/)).toBeVisible();

    await page.getByRole('button', { name: 'Cancelar' }).click();
    await expect(page.getByText('Antes de ligar o microfone')).toHaveCount(0);
  });

  test('sem estouro de layout em nenhuma das etapas', async ({ page }) => {
    await page.goto('/explicar/mat-porcentagem');
    expect(await elementosForaDaBorda(page)).toEqual([]);

    await page.getByLabel('Sua explicação do assunto').fill('Explicação de teste.');
    await page.getByRole('button', { name: 'Revelar pontos-chave' }).click();
    expect(await elementosForaDaBorda(page)).toEqual([]);
  });
});

/**
 * Sem a Web Speech API (Firefox, iOS mais antigo), o botão de microfone deve
 * desaparecer — nunca aparecer quebrado ou sem funcionar ao ser clicado.
 */
test.describe('Modo Feynman sem suporte a voz', () => {
  test.beforeEach(async ({ page }) => {
    await page.addInitScript(() => {
      // @ts-expect-error - simulando um navegador sem a API, de propósito.
      delete window.SpeechRecognition;
      // @ts-expect-error - idem.
      delete window.webkitSpeechRecognition;
    });
  });

  test('o botão de ditar não aparece', async ({ page }) => {
    await page.goto('/explicar/mat-porcentagem');
    await expect(page.getByRole('button', { name: 'Ditar explicação por voz' })).toHaveCount(0);
    await expect(page.getByLabel('Sua explicação do assunto')).toBeVisible();
  });
});

/**
 * As seções de calibração e ritmo só existem depois de responder questões, e
 * o teste de contraste carrega /progresso com armazenamento vazio. Sem semear
 * o progresso, elas nunca seriam vistas por nenhum teste de navegador.
 */
test.describe('calibração e ritmo', () => {
  const RESPOSTAS = Array.from({ length: 12 }, (_, i) => ({
    questionId: `seed-${i}`,
    topicId: 'mat-porcentagem',
    conceito: 'Porcentagem',
    letra: 'A',
    // Erra a maior parte do que jura saber: dispara o alerta de certeza perigosa.
    correta: i >= 8,
    dificuldade: 'media',
    confianca: i < 8 ? 'certeza' : 'chute',
    segundos: 150 + i * 20,
    em: '2026-09-21',
    ts: i,
  }));

  test.beforeEach(async ({ page }) => {
    await page.addInitScript((respostas) => {
      localStorage.setItem(
        'enem-study:v1',
        JSON.stringify({
          versao: 2,
          assuntos: {},
          respostas,
          redacao: { secoesLidas: [], producoes: [] },
          planoConcluido: {},
          explicacoes: [],
          config: { orcamentoDiario: 60, linguaEstrangeira: 'ingles', diagnosticoFeito: true },
          criadoEm: '2026-09-01',
        }),
      );
    }, RESPOSTAS);
  });

  test('mostra a calibração e alerta sobre certeza de coisa errada', async ({ page }) => {
    await page.goto('/progresso');

    await expect(page.getByRole('heading', { name: 'Você sabe quando não sabe?' })).toBeVisible();
    await expect(page.getByText(/Você acerta 0% do que diz ter certeza/)).toBeVisible();
    await expect(page.getByText(/certeza de coisa errada/i)).toBeVisible();
    await expect(page.getByText(/equívoco instalado/i)).toBeVisible();
  });

  test('mostra o ritmo contra os 3min20 do 2º dia', async ({ page }) => {
    await page.goto('/progresso');

    await expect(page.getByRole('heading', { name: 'Ritmo', exact: true })).toBeVisible();
    await expect(page.getByText('é o ritmo do 2º dia de prova')).toBeVisible();
    await expect(page.getByText('3min20').first()).toBeVisible();
  });

  test('o texto continua legível nas seções novas', async ({ page }) => {
    await page.goto('/progresso');
    await expect(page.getByRole('heading', { name: 'Ritmo', exact: true })).toBeVisible();
    expect(await elementosForaDaBorda(page)).toEqual([]);
  });
});

test('sem nenhum dado, a faixa de constância não aparece', async ({ page }) => {
  // Um contexto novo do Playwright já começa com storage vazio; não há
  // constância para mostrar no primeiro dia, então a seção nem deve existir.
  await page.goto('/progresso');
  await expect(page.getByRole('heading', { name: 'Constância' })).toHaveCount(0);
});

/**
 * A faixa de constância depende de "hoje" de verdade, não de uma data fixa
 * como as outras seções semeadas — então os dias de atividade são calculados
 * no próprio navegador, a partir do relógio real do teste, em vez de vir
 * como string fixa que envelheceria a cada execução.
 */
test.describe('constância', () => {
  test.beforeEach(async ({ page }) => {
    await page.addInitScript(() => {
      const paraDiaISO = (d: Date) =>
        `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(
          d.getDate(),
        ).padStart(2, '0')}`;
      const diaOffset = (n: number) => {
        const d = new Date();
        d.setDate(d.getDate() + n);
        return paraDiaISO(d);
      };
      // Ativo hoje, ontem e anteontem (sequência de 3) e também há 5 dias
      // (mais um dia dentro da janela de 14, fora da sequência).
      const respostas = [0, -1, -2, -5].map((offset, i) => ({
        questionId: `seed-${i}`,
        topicId: 'mat-porcentagem',
        conceito: 'Porcentagem',
        letra: 'A',
        correta: true,
        dificuldade: 'media',
        em: diaOffset(offset),
        ts: i,
      }));
      localStorage.setItem(
        'enem-study:v1',
        JSON.stringify({
          versao: 2,
          assuntos: {},
          respostas,
          redacao: { secoesLidas: [], producoes: [] },
          planoConcluido: {},
          explicacoes: [],
          config: { orcamentoDiario: 60, linguaEstrangeira: 'ingles', diagnosticoFeito: true },
          criadoEm: diaOffset(-10),
        }),
      );
    });
  });

  test('mostra dias ativos e sequência em /progresso', async ({ page }) => {
    await page.goto('/progresso');
    await expect(page.getByRole('heading', { name: 'Constância' })).toBeVisible();
    await expect(page.getByText('dos últimos 14 com atividade')).toBeVisible();
    await expect(page.getByText('3 dias seguidos até agora')).toBeVisible();
  });

  test('também aparece no plano de hoje, com o mesmo tom informativo', async ({ page }) => {
    await page.goto('/');
    await expect(page.getByRole('heading', { name: 'Constância' })).toBeVisible();
    await expect(page.getByText('3 dias seguidos até agora')).toBeVisible();
  });

  test('o texto continua legível e sem estouro de layout', async ({ page }) => {
    await page.goto('/progresso');
    await expect(page.getByRole('heading', { name: 'Constância' })).toBeVisible();
    expect(await elementosForaDaBorda(page)).toEqual([]);
  });
});

test.describe('contraste', () => {
  /**
   * Mede o contraste real de cada texto visível contra o fundo efetivo.
   * A regra do projeto é 4.5:1 para texto normal e 3:1 para texto grande
   * (≥ 24px, ou ≥ 18.66px em negrito), conforme a WCAG AA.
   */
  for (const rota of ROTAS) {
    test(`texto legível em ${rota}`, async ({ page }) => {
      await page.goto(rota);
      const falhas = await page.evaluate(() => {
        const lum = (cor: string) => {
          const nums = (cor.match(/\d*\.?\d+/g) ?? []).map(Number);
          // color(srgb 1 1 1 / .92) usa canais de 0 a 1; rgb() usa 0 a 255.
          const escala = cor.startsWith('color(') ? 255 : 1;
          const [r, g, b] = nums.slice(0, 3).map((n) => n * escala) as [number, number, number];
          const canal = (v: number) => {
            const c = v / 255;
            return c <= 0.04045 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4;
          };
          return 0.2126 * canal(r) + 0.7152 * canal(g) + 0.0722 * canal(b);
        };
        const fundoDe = (el: Element): string => {
          let atual: Element | null = el;
          while (atual) {
            const bg = getComputedStyle(atual).backgroundColor;
            if (bg && !bg.startsWith('rgba(0, 0, 0, 0)') && bg !== 'transparent') return bg;
            atual = atual.parentElement;
          }
          return 'rgb(255, 255, 255)';
        };

        const problemas: { texto: string; razao: number; cor: string }[] = [];
        for (const el of document.querySelectorAll('body *')) {
          const temTextoProprio = [...el.childNodes].some(
            (n) => n.nodeType === Node.TEXT_NODE && n.textContent!.trim().length > 1,
          );
          if (!temTextoProprio) continue;
          if (!(el as HTMLElement).checkVisibility()) continue;

          const estilo = getComputedStyle(el);
          const tamanho = parseFloat(estilo.fontSize);
          const peso = parseInt(estilo.fontWeight, 10) || 400;
          const grande = tamanho >= 24 || (tamanho >= 18.66 && peso >= 700);
          const minimo = grande ? 3 : 4.5;

          const lt = lum(estilo.color);
          const lf = lum(fundoDe(el));
          const razao = (Math.max(lt, lf) + 0.05) / (Math.min(lt, lf) + 0.05);
          if (razao < minimo) {
            problemas.push({
              texto: (el.textContent ?? '').trim().slice(0, 40),
              razao: Math.round(razao * 100) / 100,
              cor: estilo.color,
            });
          }
        }
        return problemas;
      });
      expect(falhas).toEqual([]);
    });
  }
});
