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
 * **Sobre o nome do arquivo:** o registro guarda só o nome-base, sem extensão
 * e sem tamanho. Quem resolve o resto é `npm run imagens`, que gera as três
 * larguras em WebP, e `Figura`, que monta o `srcset`. Isso não é detalhe de
 * organização: a primeira versão guardava `'dia-de-prova.png'`, chegou um
 * arquivo chamado `dia-de-prova.webp`, e a imagem simplesmente não apareceu.
 * Nome-base não tem como divergir do que está no disco.
 */

export interface Imagem {
  /** Nome-base, sem extensão e sem largura. Ex.: `dia-de-prova`. */
  base: string;
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
  /**
   * Ponto da imagem que a faixa deve manter em vista. Vai direto para
   * `object-position`, então aceita qualquer valor válido — inclusive
   * percentuais, que é o que costuma resolver.
   *
   * Por que percentual e não `'topo' | 'centro' | 'base'`: a faixa tem altura
   * fixa e largura de tela inteira, então quanto mais larga a janela, mais o
   * `cover` amplia e menos da altura da imagem cabe. Numa tela de 2000px
   * sobra menos de um terço da altura — e três rótulos não têm precisão para
   * escolher qual terço.
   */
  foco?: string;
  /** Página de origem, para conferência. */
  url?: string;
}

export const IMAGENS = {
  diaDeProva: {
    base: 'dia-de-prova',
    alt: 'Ilustração de uma sala de aplicação do exame: fileiras de carteiras, cartões-resposta e um relógio de parede.',
    autor: '',
    fonte: 'Recraft V4.1 via Higgsfield',
    gerada: true,
    // O assunto da ilustração são as cabeças inclinadas sobre os
    // cartões-resposta, que ficam na faixa de 45% a 90% da altura. Com o topo
    // sobravam só as janelas; com o centro, só troncos e mesas.
    foco: 'center 68%',
  },
  redacao: {
    base: 'redacao',
    alt: 'Ilustração de uma folha pautada com uma caneta apoiada e cinco barras crescentes ao lado.',
    autor: '',
    fonte: 'Recraft V4.1 via Higgsfield',
    gerada: true,
  },
} satisfies Record<string, Imagem>;

export type ChaveImagem = keyof typeof IMAGENS;

/** As larguras que `scripts/otimizar-imagens.ts` gera. */
export const LARGURAS_IMAGEM = [640, 1280, 1920] as const;

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
