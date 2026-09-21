import type { Dificuldade, Letra, TipoErro } from '@/content/tipos';
import type { DiaISO } from '@/engine/datas';

export const VERSAO_SCHEMA = 2 as const;
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

/**
 * O quanto o aluno confiava na resposta quando confirmou.
 *
 * Sem isso, acertar por sorte e acertar por saber entram idênticos no modelo
 * de domínio — e o erro com certeza, que é o sinal mais valioso que existe,
 * some no meio dos outros.
 */
export type Confianca = 'certeza' | 'duvida' | 'chute';

export const ROTULO_CONFIANCA: Record<Confianca, string> = {
  certeza: 'Tenho certeza',
  duvida: 'Estou na dúvida',
  chute: 'Chutei',
};

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
  /** Tempo ativo até confirmar, em segundos. Ausente no schema 1. */
  segundos?: number;
  /** Ausente no schema 1, quando o campo ainda não existia. */
  confianca?: Confianca;
}

/**
 * Uma explicação escrita ou ditada pelo aluno no Modo Feynman.
 *
 * Guarda o texto e quantos pontos-chave ele marcou como cobertos. Não guarda
 * nota: é autoavaliação, e o site não finge que autoavaliação é medida.
 */
export interface Explicacao {
  topicId: string;
  em: DiaISO;
  texto: string;
  pontosCobertos: number;
  totalPontos: number;
}

/** As cinco notas do ENEM, como o aluno as informou. */
export interface NotasInformadas {
  lc: number;
  ch: number;
  cn: number;
  mt: number;
  redacao: number;
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
  explicacoes: Explicacao[];
  /**
   * Notas que o aluno digitou para comparar com o SISU. Não são calculadas
   * pelo site — ele não reproduz TRI, e dizer que reproduz seria inventar
   * autoridade que não existe.
   */
  notasInformadas?: NotasInformadas;
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
    explicacoes: [],
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
