import type { Assunto, AssuntoPlanejado, AreaId, Questao } from './tipos';
import { ASSUNTOS_MATEMATICA } from './topicos/matematica';
import { ASSUNTOS_LINGUAGENS } from './topicos/linguagens';
import { ASSUNTOS_HUMANAS } from './topicos/humanas';
import { ASSUNTOS_NATUREZA } from './topicos/natureza';
import { QUESTOES_MATEMATICA } from './questoes/matematica';
import { QUESTOES_LINGUAGENS } from './questoes/linguagens';
import { QUESTOES_HUMANAS } from './questoes/humanas';
import { QUESTOES_NATUREZA } from './questoes/natureza';
import { SECOES_REDACAO } from './redacao/secoes';

export const ASSUNTOS: Assunto[] = [
  ...ASSUNTOS_LINGUAGENS,
  ...ASSUNTOS_HUMANAS,
  ...ASSUNTOS_NATUREZA,
  ...ASSUNTOS_MATEMATICA,
];

export const QUESTOES: Questao[] = [
  ...QUESTOES_LINGUAGENS,
  ...QUESTOES_HUMANAS,
  ...QUESTOES_NATUREZA,
  ...QUESTOES_MATEMATICA,
];

export { SECOES_REDACAO };

/**
 * Assuntos mapeados na especificação (docs/ETAPA-1-ESPECIFICACAO.md §3.2) e
 * ainda não escritos.
 *
 * Eles aparecem na navegação com estado honesto — "ainda não escrito" — em vez
 * de virarem páginas de três linhas só para preencher o site. Esta lista é, ao
 * mesmo tempo, o roteiro de continuação do projeto.
 */
export const ASSUNTOS_PLANEJADOS: AssuntoPlanejado[] = [
  // Linguagens
  { id: 'ling-modernismo', areaId: 'linguagens', titulo: 'Modernismo brasileiro', prioridade: 'importante', resumo: 'Semana de 22, as três fases e a ruptura com o academicismo.' },
  { id: 'ling-realismo', areaId: 'linguagens', titulo: 'Realismo, Naturalismo e Machado de Assis', prioridade: 'importante', resumo: 'Crítica social e análise psicológica na virada do século XIX.' },
  { id: 'ling-artes', areaId: 'linguagens', titulo: 'Artes, corpo e movimento', prioridade: 'importante', resumo: 'Movimentos artísticos e a área de Educação Física dentro de Linguagens.' },
  { id: 'ling-tic', areaId: 'linguagens', titulo: 'Tecnologias da informação e comunicação', prioridade: 'importante', resumo: 'Gêneros digitais, desinformação e leitura crítica de mídia.' },
  // Humanas
  { id: 'hum-sociologia', areaId: 'humanas', titulo: 'Cultura, identidade e desigualdade', prioridade: 'importante', resumo: 'Conceitos centrais de Sociologia aplicados ao Brasil contemporâneo.' },
  { id: 'hum-colonia', areaId: 'humanas', titulo: 'Brasil Colônia: escravidão e resistência', prioridade: 'importante', resumo: 'Trabalho compulsório, quilombos e herança da estrutura colonial.' },
  { id: 'hum-campo', areaId: 'humanas', titulo: 'Campo brasileiro e conflitos por terra', prioridade: 'importante', resumo: 'Estrutura fundiária, agronegócio e movimentos sociais rurais.' },
  { id: 'hum-guerra-fria', areaId: 'humanas', titulo: 'Guerra Fria e ordem mundial', prioridade: 'importante', resumo: 'Bipolaridade, conflitos periféricos e a reorganização pós-1991.' },
  { id: 'hum-energia', areaId: 'humanas', titulo: 'Matriz energética brasileira', prioridade: 'importante', resumo: 'Fontes, impactos e o debate sobre transição energética.' },
  // Natureza
  { id: 'cn-cinematica', areaId: 'natureza', titulo: 'Cinemática e leis de Newton', prioridade: 'importante', resumo: 'Movimento, força e as três leis aplicadas a situações do cotidiano.' },
  { id: 'cn-metabolismo', areaId: 'natureza', titulo: 'Fotossíntese e respiração celular', prioridade: 'importante', resumo: 'As duas vias que sustentam o fluxo de energia na biosfera.' },
  { id: 'cn-acidos', areaId: 'natureza', titulo: 'Ácidos, bases e pH', prioridade: 'importante', resumo: 'Escala de pH, neutralização e aplicações ambientais.' },
  { id: 'cn-ondas', areaId: 'natureza', titulo: 'Ondas e óptica', prioridade: 'importante', resumo: 'Som, luz, espectro eletromagnético e fenômenos ondulatórios.' },
  { id: 'cn-evolucao', areaId: 'natureza', titulo: 'Evolução e biotecnologia', prioridade: 'importante', resumo: 'Seleção natural, evidências e aplicações da engenharia genética.' },
  { id: 'cn-termologia', areaId: 'natureza', titulo: 'Termologia e calorimetria', prioridade: 'importante', resumo: 'Calor, temperatura, trocas térmicas e mudanças de estado.' },
  // Matemática
  { id: 'mat-quadratica', areaId: 'matematica', titulo: 'Função quadrática', prioridade: 'importante', resumo: 'Parábola, raízes, vértice e problemas de máximo e mínimo.' },
  { id: 'mat-probabilidade', areaId: 'matematica', titulo: 'Probabilidade', prioridade: 'importante', resumo: 'Espaço amostral, eventos e probabilidade condicional em contextos reais.' },
  { id: 'mat-contagem', areaId: 'matematica', titulo: 'Contagem e princípio multiplicativo', prioridade: 'importante', resumo: 'Arranjos, combinações e o raciocínio de contagem sem decorar fórmulas.' },
  { id: 'mat-financeira', areaId: 'matematica', titulo: 'Matemática financeira', prioridade: 'importante', resumo: 'Juros simples e compostos, parcelamento e comparação de propostas.' },
  { id: 'mat-trigonometria', areaId: 'matematica', titulo: 'Trigonometria e semelhança', prioridade: 'importante', resumo: 'Triângulo retângulo, semelhança e aplicações em medidas indiretas.' },
  { id: 'mat-progressoes', areaId: 'matematica', titulo: 'Progressões aritméticas e geométricas', prioridade: 'importante', resumo: 'Reconhecer padrões de crescimento constante e proporcional.' },
];

/* ------------------------------------------------------------------ */
/* Índices                                                             */
/* ------------------------------------------------------------------ */

export const ASSUNTO_POR_ID = new Map(ASSUNTOS.map((a) => [a.id, a]));
export const QUESTAO_POR_ID = new Map(QUESTOES.map((q) => [q.id, q]));
export const SECAO_REDACAO_POR_ID = new Map(SECOES_REDACAO.map((s) => [s.id, s]));

export function assuntosDaArea(areaId: AreaId): Assunto[] {
  return ASSUNTOS.filter((a) => a.areaId === areaId);
}

export function planejadosDaArea(areaId: AreaId): AssuntoPlanejado[] {
  return ASSUNTOS_PLANEJADOS.filter((a) => a.areaId === areaId);
}

export function questoesDoAssunto(topicId: string): Questao[] {
  return QUESTOES.filter((q) => q.topicId === topicId);
}

export function questoesDoConceito(conceito: string): Questao[] {
  return QUESTOES.filter((q) => q.conceito === conceito);
}

/** Questão-irmã: mesmo conceito, contexto diferente, ainda não respondida. */
export function proximaIrma(questao: Questao, jaRespondidas: string[]): Questao | undefined {
  const candidatas = [
    ...(questao.irmas ?? []).map((id) => QUESTAO_POR_ID.get(id)),
    ...questoesDoConceito(questao.conceito).filter((q) => q.id !== questao.id),
  ].filter((q): q is Questao => Boolean(q));

  const inedita = candidatas.find((q) => !jaRespondidas.includes(q.id));
  return inedita ?? candidatas[0];
}

/** Contagem por procedência — usada na página de fontes. */
export function contagemPorProcedencia() {
  return {
    oficial: QUESTOES.filter((q) => q.procedencia === 'oficial').length,
    adaptada: QUESTOES.filter((q) => q.procedencia === 'adaptada').length,
    autoral: QUESTOES.filter((q) => q.procedencia === 'autoral').length,
    total: QUESTOES.length,
  };
}
