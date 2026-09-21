import { describe, expect, it } from 'vitest';
import { ALFABETO_CODE39, code39, normalizarCode39, padraoDe } from './code39';

/**
 * A tabela do Code 39 foi digitada à mão, e um `n` trocado por um `w` passaria
 * despercebido a olho nu — o desenho continuaria parecendo um código de
 * barras. Estes testes verificam a regra que dá nome à codificação: cada
 * caractere tem nove elementos, dos quais exatamente três são largos — dois
 * entre as cinco barras e um entre os quatro espaços.
 */
describe('tabela Code 39', () => {
  const todos = [...ALFABETO_CODE39, '*'];

  it('cobre dígitos, letras e os sete símbolos da codificação', () => {
    expect(todos).toHaveLength(44);
  });

  for (const c of ['0', '9', 'A', 'Z', '-', '.', ' ', '$', '/', '+', '%', '*']) {
    it(`codifica ${JSON.stringify(c)} com nove elementos e três largos`, () => {
      const padrao = padraoDe(c)!;
      expect(padrao).toHaveLength(9);
      expect([...padrao].filter((e) => e === 'w')).toHaveLength(3);
    });
  }

  /*
   * A distribuição dos três elementos largos tem duas formas válidas: os 40
   * caracteres alfanuméricos usam duas barras largas e um espaço largo; os
   * quatro símbolos de deslocamento ($ / + %) usam três espaços largos e
   * nenhuma barra larga. Qualquer outra combinação é erro de digitação.
   */
  it('distribui os três elementos largos em uma das duas formas válidas', () => {
    for (const c of todos) {
      const padrao = padraoDe(c)!;
      const barras = [...padrao].filter((_, i) => i % 2 === 0);
      const espacos = [...padrao].filter((_, i) => i % 2 === 1);
      expect(barras).toHaveLength(5);
      expect(espacos).toHaveLength(4);

      const largasBarra = barras.filter((e) => e === 'w').length;
      const largasEspaco = espacos.filter((e) => e === 'w').length;
      const forma = `${largasBarra}+${largasEspaco}`;
      expect(['2+1', '0+3'], `distribuição de ${JSON.stringify(c)}`).toContain(forma);
      expect('$/+%'.includes(c), `${JSON.stringify(c)} na forma 0+3`).toBe(forma === '0+3');
    }
  });

  it('não repete padrão entre caracteres', () => {
    const padroes = todos.map((c) => padraoDe(c)!);
    expect(new Set(padroes).size).toBe(padroes.length);
  });
});

describe('code39()', () => {
  it('delimita com asterisco, como manda a codificação', () => {
    expect(code39('MAT').texto).toBe('*MAT*');
  });

  it('sobe para caixa alta e troca o que não é codificável', () => {
    expect(normalizarCode39('mat-porc-q1')).toBe('MAT-PORC-Q1');
    expect(normalizarCode39('redação')).toBe('REDA--O');
  });

  it('desenha cinco barras por caractere, incluindo os delimitadores', () => {
    const s = code39('AB');
    expect(s.barras).toHaveLength(4 * 5);
  });

  it('separa caracteres por um módulo estreito e não sobrepõe barras', () => {
    const { barras } = code39('ENEM ESTUDOS');
    for (let i = 1; i < barras.length; i++) {
      const anterior = barras[i - 1]!;
      expect(barras[i]!.x).toBeGreaterThanOrEqual(anterior.x + anterior.largura + 1);
    }
  });

  it('cresce de forma previsível com o tamanho do texto', () => {
    // Cada caractere ocupa 15 módulos: 6 elementos estreitos e 3 largos de 3.
    // `*A*` são três caracteres e dois espaços de separação.
    expect(code39('A').largura).toBe(15 * 3 + 2);
    expect(code39('AB').largura).toBe(15 * 4 + 3);
  });
});
