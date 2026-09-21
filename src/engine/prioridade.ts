import type { AssuntoMeta, Prioridade } from '@/content/tipos';
import type { EstadoAssunto } from '@/storage/schema';
import { lacuna } from './dominio';
import { diferencaEmDias, PROVA_DIA_1, type DiaISO } from './datas';

/**
 * Score de prioridade por assunto (§4.3 da especificação).
 *
 *   prioridade = peso_curricular × lacuna × prereq × janela × frescor
 *
 * O objetivo não é achar "o melhor assunto" — é evitar os três erros que quem
 * estuda sozinho comete: gastar tempo no que já sabe, pular pré-requisito, e
 * estudar conteúdo caro faltando dez dias.
 */

export const PESO_CURRICULAR: Record<Prioridade, number> = {
  essencial: 1.0,
  importante: 0.65,
  complementar: 0.35,
};

export interface EntradaPrioridade {
  assunto: AssuntoMeta;
  estado: EstadoAssunto | undefined;
}

export interface AssuntoPriorizado {
  assunto: AssuntoMeta;
  score: number;
  /** Uma frase curta dizendo por que este assunto está nessa posição. */
  motivo: string;
  fatores: {
    peso: number;
    lacuna: number;
    prereq: number;
    janela: number;
    frescor: number;
  };
}

/** Bloqueio de pré-requisito: assunto cujo pré-requisito ainda está frágil. */
export function prerequisitosPendentes(
  assunto: AssuntoMeta,
  estados: Record<string, EstadoAssunto | undefined>,
): string[] {
  return assunto.prerequisitos.filter((id) => {
    const e = estados[id];
    return !e || e.dominio === null || e.dominio < 50;
  });
}

function fatorPrerequisito(
  assunto: AssuntoMeta,
  todos: AssuntoMeta[],
  estados: Record<string, EstadoAssunto | undefined>,
): number {
  // Quantos assuntos ainda não dominados dependem deste.
  const dependentes = todos.filter((outro) => {
    if (!outro.prerequisitos.includes(assunto.id)) return false;
    const e = estados[outro.id];
    return !e || e.dominio === null || e.dominio < 70;
  }).length;
  return Math.min(1.5, 1 + 0.12 * dependentes);
}

function fatorJanela(prioridade: Prioridade, dia: DiaISO): number {
  const restam = diferencaEmDias(dia, PROVA_DIA_1);
  if (prioridade === 'complementar') {
    if (restam <= 14) return 0.35;
    if (restam <= 28) return 0.6;
  }
  if (prioridade === 'importante' && restam <= 7) return 0.55;
  return 1;
}

function fatorFrescor(estado: EstadoAssunto | undefined, dia: DiaISO): number {
  if (!estado?.ultimoEstudo) return 1;
  const dias = diferencaEmDias(estado.ultimoEstudo, dia);
  if (dias <= 0) return 0.35;
  if (dias === 1) return 0.6;
  return 1;
}

function motivoDe(
  assunto: AssuntoMeta,
  estado: EstadoAssunto | undefined,
  fatores: AssuntoPriorizado['fatores'],
  pendentes: string[],
  todos: AssuntoMeta[],
): string {
  if (pendentes.length > 0) {
    const nomes = pendentes
      .map((id) => todos.find((a) => a.id === id)?.titulo)
      .filter(Boolean)
      .join(', ');
    return `Depende de ${nomes} — estude esse antes.`;
  }
  if (fatores.prereq > 1.2) return 'É pré-requisito de outros assuntos que você ainda não domina.';
  if (!estado || estado.dominio === null) return 'Assunto essencial que você ainda não avaliou.';
  if (estado.dominio < 40) return 'Seu domínio aqui está frágil.';
  if (estado.dominio < 65) return 'Você começou, mas ainda não consolidou.';
  if (assunto.prioridade === 'essencial') return 'Essencial — vale manter aquecido.';
  return 'Próximo da fila por peso na prova.';
}

export function priorizar(
  assuntos: AssuntoMeta[],
  estados: Record<string, EstadoAssunto | undefined>,
  dia: DiaISO,
): AssuntoPriorizado[] {
  return assuntos
    .map((assunto) => {
      const estado = estados[assunto.id];
      const pendentes = prerequisitosPendentes(assunto, estados);
      const fatores = {
        peso: PESO_CURRICULAR[assunto.prioridade],
        lacuna: lacuna(estado?.dominio ?? null),
        prereq: fatorPrerequisito(assunto, assuntos, estados),
        janela: fatorJanela(assunto.prioridade, dia),
        frescor: fatorFrescor(estado, dia),
      };
      // Um assunto com pré-requisito pendente não é proibido, é empurrado para
      // baixo — proibir criaria becos sem saída quando o grafo não bate com o
      // que o aluno realmente já sabe.
      const penalidade = pendentes.length > 0 ? 0.3 : 1;
      const score =
        fatores.peso *
        fatores.lacuna *
        fatores.prereq *
        fatores.janela *
        fatores.frescor *
        penalidade;
      return {
        assunto,
        score: Math.round(score * 1000) / 1000,
        motivo: motivoDe(assunto, estado, fatores, pendentes, assuntos),
        fatores,
      };
    })
    .sort((a, b) => b.score - a.score || a.assunto.titulo.localeCompare(b.assunto.titulo));
}
