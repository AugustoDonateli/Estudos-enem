/**
 * Registro de imagens.
 *
 * O site trata imagem como trata questão: nada entra sem procedência. Cada
 * entrada declara autor, fonte e licença, e o componente `Figura` imprime
 * esse crédito junto da imagem — não em um rodapé de créditos que ninguém
 * lê. Uma imagem que não puder ser creditada não entra.
 *
 * Os arquivos ficam em `public/imagens/` e são servidos por URL, não
 * empacotados pelo bundler. Isso é deliberado: assim o site compila e roda
 * com qualquer subconjunto delas presente, e `Figura` simplesmente não
 * renderiza o que estiver faltando. Ver `public/imagens/README.md`.
 */

export interface Imagem {
  /** Nome do arquivo em `public/imagens/`. */
  arquivo: string;
  /** Descrição para quem não vê a imagem. Nunca o crédito. */
  alt: string;
  autor: string;
  fonte: string;
  licenca: string;
  /** Página do acervo de onde a imagem veio, para conferência. */
  url?: string;
}

export const IMAGENS = {
  diaDeProva: {
    arquivo: 'dia-de-prova.jpg',
    alt: 'Estudantes na entrada de um local de aplicação do ENEM, antes da abertura dos portões.',
    autor: '',
    fonte: '',
    licenca: '',
  },
  redacao: {
    arquivo: 'redacao.jpg',
    alt: 'Participante escrevendo a redação durante a aplicação do ENEM.',
    autor: '',
    fonte: '',
    licenca: '',
  },
} satisfies Record<string, Imagem>;

export type ChaveImagem = keyof typeof IMAGENS;

/** Uma imagem só é exibível quando o crédito está completo. */
export function creditada(imagem: Imagem): boolean {
  return imagem.autor.trim() !== '' && imagem.fonte.trim() !== '' && imagem.licenca.trim() !== '';
}
