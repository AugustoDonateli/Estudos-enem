/**
 * Code 39.
 *
 * Os cadernos de prova do ENEM trazem, no alto de cada página, uma tarja
 * como `*010175AZ10*`. Ela não é ornamento: os PDFs oficiais de 2024 e 2025
 * deste repositório embutem a fonte `C39HrP36DlTt` — C39 de Code 39, HrP de
 * *human readable* — e os asteriscos são os delimitadores de início e fim
 * previstos pela própria codificação.
 *
 * Este módulo gera Code 39 de verdade, a partir da tabela padrão. O que ele
 * codifica é sempre um identificador deste site (o id de um assunto, de uma
 * questão), nunca um código de caderno oficial: a tarja é um artefato da
 * linguagem visual da prova, e não uma imitação de documento do INEP.
 *
 * Cada caractere ocupa nove elementos, alternando barra e espaço a partir de
 * uma barra, dos quais exatamente três são largos. Entre caracteres vai um
 * espaço estreito.
 */

/** Tabela padrão: nove elementos por caractere, `w` onde o elemento é largo. */
const TABELA: Record<string, string> = {
  '0': 'nnnwwnwnn', '1': 'wnnwnnnnw', '2': 'nnwwnnnnw', '3': 'wnwwnnnnn',
  '4': 'nnnwwnnnw', '5': 'wnnwwnnnn', '6': 'nnwwwnnnn', '7': 'nnnwnnwnw',
  '8': 'wnnwnnwnn', '9': 'nnwwnnwnn',
  A: 'wnnnnwnnw', B: 'nnwnnwnnw', C: 'wnwnnwnnn', D: 'nnnnwwnnw',
  E: 'wnnnwwnnn', F: 'nnwnwwnnn', G: 'nnnnnwwnw', H: 'wnnnnwwnn',
  I: 'nnwnnwwnn', J: 'nnnnwwwnn', K: 'wnnnnnnww', L: 'nnwnnnnww',
  M: 'wnwnnnnwn', N: 'nnnnwnnww', O: 'wnnnwnnwn', P: 'nnwnwnnwn',
  Q: 'nnnnnnwww', R: 'wnnnnnwwn', S: 'nnwnnnwwn', T: 'nnnnwnwwn',
  U: 'wwnnnnnnw', V: 'nwwnnnnnw', W: 'wwwnnnnnn', X: 'nwnnwnnnw',
  Y: 'wwnnwnnnn', Z: 'nwwnwnnnn',
  '-': 'nwnnnnwnw', '.': 'wwnnnnwnn', ' ': 'nwwnnnwnn',
  $: 'nwnwnwnnn', '/': 'nwnwnnnwn', '+': 'nwnnnwnwn', '%': 'nnnwnwnwn',
  '*': 'nwnnwnwnn',
};

export const ALFABETO_CODE39 = Object.keys(TABELA).filter((c) => c !== '*');

/** Troca o que não é codificável por hífen, e caixa alta. Code 39 não tem minúscula. */
export function normalizarCode39(texto: string): string {
  return texto
    .toUpperCase()
    .split('')
    .map((c) => (c in TABELA && c !== '*' ? c : '-'))
    .join('');
}

export interface Barra {
  /** Deslocamento a partir da esquerda, em módulos estreitos. */
  x: number;
  /** Largura em módulos estreitos: 1 para estreita, 3 para larga. */
  largura: number;
}

export interface Simbolo {
  barras: Barra[];
  /** Largura total do símbolo, em módulos estreitos. */
  largura: number;
  /** O texto efetivamente codificado, entre os delimitadores. */
  texto: string;
}

const LARGURA_LARGA = 3;

/**
 * Converte um texto no conjunto de barras a desenhar.
 *
 * Devolve posições em módulos estreitos em vez de pixels: quem desenha
 * escolhe a escala, e o SVG sai sem número mágico.
 */
export function code39(texto: string): Simbolo {
  const conteudo = normalizarCode39(texto);
  const completo = `*${conteudo}*`;

  const barras: Barra[] = [];
  let x = 0;

  for (let i = 0; i < completo.length; i++) {
    const padrao = TABELA[completo[i]!]!;
    for (let e = 0; e < padrao.length; e++) {
      const largura = padrao[e] === 'w' ? LARGURA_LARGA : 1;
      // Elementos de índice par são barra; os ímpares são espaço.
      if (e % 2 === 0) barras.push({ x, largura });
      x += largura;
    }
    // Espaço estreito separando caracteres, inclusive depois do último.
    if (i < completo.length - 1) x += 1;
  }

  return { barras, largura: x, texto: completo };
}

/** Só para o teste: expõe a tabela sem deixá-la mutável fora daqui. */
export function padraoDe(caractere: string): string | undefined {
  return TABELA[caractere];
}
