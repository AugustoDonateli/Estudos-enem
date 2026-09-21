import type { Assunto, AreaId, Questao } from './tipos';
import { CATALOGO } from './catalogo';
import { CONTEUDOS_MATEMATICA } from './topicos/matematica';
import { CONTEUDOS_LINGUAGENS } from './topicos/linguagens';
import { CONTEUDOS_HUMANAS } from './topicos/humanas';
import { CONTEUDOS_NATUREZA } from './topicos/natureza';
import { QUESTOES_MATEMATICA } from './questoes/matematica';
import { QUESTOES_LINGUAGENS } from './questoes/linguagens';
import { QUESTOES_HUMANAS } from './questoes/humanas';
import { QUESTOES_NATUREZA } from './questoes/natureza';
import { SECOES_REDACAO } from './redacao/secoes';

/**
 * Conteúdo completo.
 *
 * Este módulo é pesado por natureza — é o texto do site inteiro. Ele deve ser
 * importado apenas por telas que realmente exibem conteúdo (assunto, questão,
 * seção de redação, fontes). O dashboard, o motor de estudo e a navegação usam
 * src/content/indice.ts, que carrega só os metadados.
 */

const CONTEUDOS: Record<string, Assunto['conteudo']> = {
  ...CONTEUDOS_LINGUAGENS,
  ...CONTEUDOS_HUMANAS,
  ...CONTEUDOS_NATUREZA,
  ...CONTEUDOS_MATEMATICA,
};

export const ASSUNTOS: Assunto[] = CATALOGO.filter((meta) => CONTEUDOS[meta.id]).map((meta) => ({
  ...meta,
  conteudo: CONTEUDOS[meta.id]!,
}));

export const QUESTOES: Questao[] = [
  ...QUESTOES_LINGUAGENS,
  ...QUESTOES_HUMANAS,
  ...QUESTOES_NATUREZA,
  ...QUESTOES_MATEMATICA,
];

export { SECOES_REDACAO };

export const ASSUNTO_POR_ID = new Map(ASSUNTOS.map((a) => [a.id, a]));
export const QUESTAO_POR_ID = new Map(QUESTOES.map((q) => [q.id, q]));
export const SECAO_REDACAO_POR_ID = new Map(SECOES_REDACAO.map((s) => [s.id, s]));

export function assuntosCompletosDaArea(areaId: AreaId): Assunto[] {
  return ASSUNTOS.filter((a) => a.areaId === areaId);
}

export function questoesDoAssunto(topicId: string): Questao[] {
  return QUESTOES.filter((q) => q.topicId === topicId);
}

export function questoesDoConceito(conceito: string): Questao[] {
  return QUESTOES.filter((q) => q.conceito === conceito);
}

/** Questão-irmã: mesmo conceito, contexto diferente, de preferência inédita. */
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
