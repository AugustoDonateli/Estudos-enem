/**
 * Registro de imagens.
 *
 * O site trata imagem como trata questão: nada entra sem procedência. Cada
 * entrada declara de onde a imagem veio, e `Figura` imprime isso junto dela —
 * não num rodapé de créditos que ninguém lê.
 *
 * Há dois tipos, e eles não se confundem:
 *
 * - **Fotografia** (`gerada` ausente ou falsa). Registro do mundo. Exige
 *   autor, fonte e licença; sem os três, não renderiza.
 * - **Ilustração gerada por IA** (`gerada: true`). Não é registro de nada, e
 *   o rótulo diz isso com todas as letras. Exige a ferramenta em `fonte`.
 *
 * A distinção existe porque uma ilustração gerada num espaço reservado a foto
 * de dia de prova seria um documento falso. Aqui ela entra declarada como
 * desenho, que é o que ela é.
 *
 * Os arquivos ficam em `public/imagens/` e são servidos por URL, não
 * empacotados pelo bundler: assim o site compila e roda com qualquer
 * subconjunto delas presente. Ver `public/imagens/README.md`.
 */

export interface Imagem {
  /** Nome do arquivo em `public/imagens/`. */
  arquivo: string;
  /** Descrição para quem não vê a imagem. Nunca o crédito. */
  alt: string;
  /** Quem fez. Em ilustração gerada, fica vazio — não há autor. */
  autor: string;
  /** Acervo da foto, ou a ferramenta que gerou a ilustração. */
  fonte: string;
  /** Licença da foto. Ilustração gerada não usa este campo. */
  licenca?: string;
  /** Verdadeiro quando a imagem é desenho gerado por IA, não registro. */
  gerada?: boolean;
  /** Página de origem, para conferência. */
  url?: string;
}

export const IMAGENS = {
  diaDeProva: {
    arquivo: 'dia-de-prova.png',
    alt: 'Ilustração de uma sala de aplicação do exame: fileiras de carteiras, cartões-resposta e um relógio de parede.',
    autor: '',
    fonte: 'Recraft V4.1 via Higgsfield',
    gerada: true,
  },
  redacao: {
    arquivo: 'redacao.png',
    alt: 'Ilustração de uma folha pautada com uma caneta apoiada e cinco barras crescentes ao lado.',
    autor: '',
    fonte: 'Recraft V4.1 via Higgsfield',
    gerada: true,
  },
} satisfies Record<string, Imagem>;

export type ChaveImagem = keyof typeof IMAGENS;

/**
 * Uma imagem só é exibível quando a procedência está completa — e o que
 * conta como completa depende do tipo.
 */
export function creditada(imagem: Imagem): boolean {
  if (imagem.gerada) return imagem.fonte.trim() !== '';
  return (
    imagem.autor.trim() !== '' &&
    imagem.fonte.trim() !== '' &&
    (imagem.licenca ?? '').trim() !== ''
  );
}

/** A linha de crédito impressa sobre a imagem. */
export function creditoDe(imagem: Imagem): string {
  if (imagem.gerada) return `Ilustração gerada por IA · ${imagem.fonte}`;
  return [imagem.autor, imagem.fonte, imagem.licenca].filter(Boolean).join(' · ');
}
