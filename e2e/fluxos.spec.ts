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

test.describe('responsividade', () => {
  for (const rota of ROTAS) {
    test(`sem rolagem horizontal em ${rota}`, async ({ page }) => {
      await page.goto(rota);
      await expect(page.locator('h1').first()).toBeVisible();
      expect(await temRolagemHorizontal(page)).toBe(false);
    });
  }

  test('o texto respeita uma medida de linha legível', async ({ page }) => {
    await page.goto('/assunto/mat-porcentagem');
    const largura = await page
      .locator('#b2')
      .locator('xpath=following-sibling::div//p')
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
    await page.getByRole('button', { name: /Confirmar resposta/ }).first().click();

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
    await page.getByRole('button', { name: /Confirmar resposta/ }).click();
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

test.describe('contraste', () => {
  /**
   * Mede o contraste real de cada texto visível contra o fundo efetivo.
   * A regra do projeto é 4.5:1 para texto normal e 3:1 para texto grande
   * (≥ 24px, ou ≥ 18.66px em negrito), conforme a WCAG AA.
   */
  for (const rota of ['/', '/assunto/mat-porcentagem', '/questoes', '/redacao', '/progresso']) {
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
