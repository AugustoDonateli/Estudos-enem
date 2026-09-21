import type { Dificuldade, Letra, TipoErro } from '@/content/tipos';
import type { DiaISO } from '@/engine/datas';

export const VERSAO_SCHEMA = 1 as const;
export const CHAVE_STORAGE = 'enem-study:v1';

/** Caixa de repetição espaçada. 0 = nunca estudado. */
export type Caixa = 0 | 1 | 2 | 3 | 4;

/** Autoavaliação do diagnóstico rápido. */
export type NivelDeclarado = 0 | 1 | 2 | 3;

export interface EstadoAssunto {
  /** 0–100. `null` = ainda desconhecido (ver §4.2 da especificação). */
  dominio: number | null;
  caixa: Caixa;
  proximaRevisao: DiaISO | null;
  ultimoEstudo: DiaISO | null;
  /** Marca que o conteúdo foi lido até o fim, não só aberto. */
  lido: boolean;
  acertos: number;
  erros: number;
  /** Revisão agendada para o último dia possível antes da prova. */
  revisaoFinal?: boolean;
}

export interface Resposta {
  questionId: string;
  topicId: string;
  conceito: string;
  letra: Letra;
  correta: boolean;
  dificuldade: Dificuldade;
  tipoErro?: TipoErro;
  em: DiaISO;
  /** Carimbo completo, para ordenar respostas do mesmo dia. */
  ts: number;
}

export interface AutoavaliacaoRedacao {
  c1: number;
  c2: number;
  c3: number;
  c4: number;
  c5: number;
}

export interface Producao {
  em: DiaISO;
  tema: string;
  minutos: number;
  autoavaliacao: AutoavaliacaoRedacao;
  observacao?: string;
}

export interface Config {
  orcamentoDiario: 30 | 60 | 90;
  linguaEstrangeira: 'ingles' | 'espanhol';
  diagnosticoFeito: boolean;
}

export interface Progresso {
  versao: typeof VERSAO_SCHEMA;
  assuntos: Record<string, EstadoAssunto>;
  respostas: Resposta[];
  redacao: {
    secoesLidas: string[];
    producoes: Producao[];
  };
  /** Itens do plano concluídos, por dia. Mantém o plano estável ao recarregar. */
  planoConcluido: Record<DiaISO, string[]>;
  config: Config;
  criadoEm: DiaISO;
}

export function progressoInicial(dia: DiaISO): Progresso {
  return {
    versao: VERSAO_SCHEMA,
    assuntos: {},
    respostas: [],
    redacao: { secoesLidas: [], producoes: [] },
    planoConcluido: {},
    config: { orcamentoDiario: 60, linguaEstrangeira: 'ingles', diagnosticoFeito: false },
    criadoEm: dia,
  };
}

export function estadoInicialAssunto(): EstadoAssunto {
  return {
    dominio: null,
    caixa: 0,
    proximaRevisao: null,
    ultimoEstudo: null,
    lido: false,
    acertos: 0,
    erros: 0,
  };
}

/** Domínio inicial a partir da autoavaliação. Ver §4.1 da especificação. */
export const PRIOR_POR_NIVEL: Record<NivelDeclarado, number> = {
  0: 15,
  1: 35,
  2: 55,
  3: 75,
};

export const ROTULO_NIVEL: Record<NivelDeclarado, string> = {
  0: 'Nunca vi',
  1: 'Vi e não lembro',
  2: 'Sei mais ou menos',
  3: 'Sei bem',
};
