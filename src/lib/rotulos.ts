import type { Eixo } from '@/content/tipos';

/**
 * Os cinco eixos cognitivos da Matriz de Referência do ENEM (INEP).
 * Os rótulos abaixo reproduzem os eixos; as descrições são paráfrase
 * explicativa deste site.
 */
export const ROTULO_EIXO: Record<Eixo, string> = {
  linguagens: 'Dominar linguagens',
  fenomenos: 'Compreender fenômenos',
  problemas: 'Enfrentar situações-problema',
  argumentacao: 'Construir argumentação',
  propostas: 'Elaborar propostas',
};

export const DESCRICAO_EIXO: Record<Eixo, string> = {
  linguagens: 'Ler e interpretar diferentes linguagens: texto, imagem, gráfico, símbolo.',
  fenomenos: 'Explicar processos naturais, sociais e tecnológicos usando conceitos.',
  problemas: 'Modelar uma situação concreta e chegar a uma solução.',
  argumentacao: 'Relacionar informações para sustentar ou avaliar um ponto de vista.',
  propostas: 'Propor intervenções que respeitem valores sociais e os direitos humanos.',
};
