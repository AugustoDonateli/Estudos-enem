import type { SecaoRedacaoMeta } from '../tipos';

/**
 * Índice leve das seções de redação.
 *
 * Mesma razão do catálogo de assuntos: o dashboard e o hub de redação só
 * precisam de título, tipo e duração. O conteúdo de uma seção só é baixado
 * quando ela é aberta.
 *
 * scripts/validar-conteudo.ts garante que este índice não divirja de secoes.ts.
 */
export const SECOES_REDACAO_META: SecaoRedacaoMeta[] = [
  { id: 'red-como-e-avaliada', titulo: 'Como a redação é avaliada', tipo: 'fundamento', minutosEstimados: 12, resumo: 'O que é oficialmente exigido, quanto vale cada competência e o que diferencia este critério de todos os outros da prova.' },
  { id: 'red-estrutura', titulo: 'Estrutura do texto', tipo: 'fundamento', minutosEstimados: 15, resumo: 'Uma arquitetura de quatro parágrafos que cabe em 30 linhas e atende às cinco competências.' },
  { id: 'red-c1', titulo: 'Competência 1 — norma escrita formal', tipo: 'competencia', competencia: 1, minutosEstimados: 14, resumo: 'Onde se perdem pontos de gramática e o que realmente compensa revisar com o tempo que você tem.' },
  { id: 'red-c2', titulo: 'Competência 2 — tema e repertório', tipo: 'competencia', competencia: 2, minutosEstimados: 15, resumo: 'Não fugir do tema, manter o tipo textual e usar repertório que realmente sustenta o argumento.' },
  { id: 'red-c3', titulo: 'Competência 3 — projeto de texto', tipo: 'competencia', competencia: 3, minutosEstimados: 15, resumo: 'A competência mais decisiva: demonstrar que o texto foi planejado, e não improvisado parágrafo a parágrafo.' },
  { id: 'red-c4', titulo: 'Competência 4 — coesão', tipo: 'competencia', competencia: 4, minutosEstimados: 12, resumo: 'Conectar as partes do texto com variedade e precisão — e parar de repetir os mesmos três conectivos.' },
  { id: 'red-c5', titulo: 'Competência 5 — proposta de intervenção', tipo: 'competencia', competencia: 5, minutosEstimados: 15, resumo: 'Os cinco elementos que tornam a proposta completa — e o erro que zera esta competência.' },
  { id: 'red-repertorio', titulo: 'Repertório: um banco pequeno e confiável', tipo: 'fundamento', minutosEstimados: 15, resumo: 'Poucos repertórios que você domina valem mais que uma lista decorada que você não sabe explicar.' },
  { id: 'red-planejamento', titulo: 'Planejar em 10 minutos', tipo: 'pratica', minutosEstimados: 12, resumo: 'O roteiro que evita o texto que muda de direção no meio e sobra sem espaço para a conclusão.' },
  { id: 'red-nota-zero', titulo: 'O que leva à nota zero', tipo: 'fundamento', minutosEstimados: 8, resumo: 'As situações que anulam a redação inteira — conhecer esta lista é obrigatório.' },
  { id: 'red-treino', titulo: 'Treino cronometrado e autoavaliação', tipo: 'pratica', minutosEstimados: 90, resumo: 'Escrever uma redação por semana e conferir contra os cinco critérios — o que realmente faz a nota subir.' },
];
