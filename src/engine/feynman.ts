import type { ConteudoAssunto } from '@/content/tipos';

/**
 * Pontos-chave do Modo Feynman.
 *
 * Não é conteúdo novo: reaproveita o cartão de 30 segundos (`revisaoRapida`)
 * e o nome de cada conceito formal (`conceitos[].termo`) que o assunto já
 * tem. O aluno explica de memória e depois confere sozinho quais destes ele
 * cobriu — é autoavaliação, então o resultado não alimenta o domínio.
 */
export interface PontoChave {
  id: string;
  texto: string;
}

export function pontosChave(conteudo: ConteudoAssunto): PontoChave[] {
  const doCartao = conteudo.revisaoRapida.map((texto, i) => ({ id: `cartao-${i}`, texto }));
  const dosConceitos = conteudo.conceitos.map((c, i) => ({ id: `conceito-${i}`, texto: c.termo }));
  return [...doCartao, ...dosConceitos];
}
