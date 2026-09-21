/**
 * Contrato de conteúdo.
 *
 * Estes tipos existem para transformar as regras editoriais da especificação
 * (docs/ETAPA-1-ESPECIFICACAO.md) em erro de compilação. Regras que o tipo
 * garante sozinho:
 *
 *  - uma questão `oficial` só compila com `referencia` de prova preenchida;
 *  - uma questão `adaptada` só compila com `fonte` declarada;
 *  - toda alternativa exige `diagnostico` (o motivo de ela atrair);
 *  - toda alternativa incorreta exige `tipoErro`.
 *
 * O que o tipo não consegue garantir (exatamente uma correta, grafo de
 * pré-requisitos acíclico, ids existentes) é verificado por
 * `scripts/validar-conteudo.ts`, que roda antes de todo build.
 */

export type AreaId = 'linguagens' | 'matematica' | 'humanas' | 'natureza' | 'redacao';

/** Peso no plano de estudo. Ver §3.1 da especificação. */
export type Prioridade = 'essencial' | 'importante' | 'complementar';

/** Procedência da questão. Nunca inferida, sempre declarada. */
export type Procedencia = 'oficial' | 'adaptada' | 'autoral';

export type Dificuldade = 'facil' | 'media' | 'dificil';

/** Os cinco eixos cognitivos da Matriz de Referência do ENEM (INEP). */
export type Eixo =
  | 'linguagens'
  | 'fenomenos'
  | 'problemas'
  | 'argumentacao'
  | 'propostas';

/**
 * Categoria do erro. É o que permite dizer "você não errou de matemática,
 * errou de leitura" — o feedback mais útil que o site consegue dar.
 */
export type TipoErro = 'leitura' | 'conceito' | 'calculo' | 'distrator' | 'grafico';

export type Letra = 'A' | 'B' | 'C' | 'D' | 'E';

/* ------------------------------------------------------------------ */
/* Blocos de texto rico                                                */
/* ------------------------------------------------------------------ */

export type Inline = string;

export type Bloco =
  | { tipo: 'p'; texto: Inline }
  | { tipo: 'lista'; itens: Inline[]; ordenada?: boolean }
  | { tipo: 'formula'; latexLike: string; legenda?: string }
  | { tipo: 'destaque'; variante: 'nota' | 'atencao' | 'oficial'; titulo?: string; texto: Inline }
  | { tipo: 'tabela'; cabecalho: string[]; linhas: string[][]; legenda?: string }
  | { tipo: 'citacao'; texto: Inline; fonte: string }
  | { tipo: 'diagrama'; nome: DiagramaId; legenda: string };

export type DiagramaId =
  | 'funcao-afim'
  | 'parabola'
  | 'estrutura-redacao'
  | 'proposta-intervencao'
  | 'ciclo-carbono'
  | 'fluxo-energia'
  | 'anatomia-item'
  | 'consumo-eletrico';

/* ------------------------------------------------------------------ */
/* Questões                                                            */
/* ------------------------------------------------------------------ */

export interface Alternativa {
  letra: Letra;
  texto: Inline;
  correta: boolean;
  /**
   * Por que esta alternativa atrai (se incorreta) ou por que funciona (se
   * correta). Obrigatório em todas: um distrator sem diagnóstico é um erro
   * que o aluno vai repetir.
   */
  diagnostico: Inline;
  /** Obrigatório nas incorretas — ver `validar-conteudo.ts`. */
  tipoErro?: TipoErro;
}

interface QuestaoBase {
  id: string;
  topicId: string;
  /** Conceito exato cobrado. É a chave que liga erro → revisão → questão-irmã. */
  conceito: string;
  dificuldade: Dificuldade;
  eixo: Eixo;
  enunciado: Bloco[];
  alternativas: Alternativa[];
  /** Resolução completa, mostrada depois de responder. */
  explicacao: Bloco[];
  /** Questões do mesmo conceito em outro contexto. */
  irmas?: string[];
  /** Minutos que um aluno leva, em média, para resolver. Usado no plano diário. */
  minutos: number;
}

/** Questão oficial do ENEM: exige referência completa da prova. */
export interface QuestaoOficial extends QuestaoBase {
  procedencia: 'oficial';
  referencia: { ano: number; prova: string; numero?: number; caderno?: string };
}

/** Questão construída a partir de uma fonte externa real, citada. */
export interface QuestaoAdaptada extends QuestaoBase {
  procedencia: 'adaptada';
  fonte: string;
}

/** Questão escrita para este site, no formato do exame. */
export interface QuestaoAutoral extends QuestaoBase {
  procedencia: 'autoral';
}

export type Questao = QuestaoOficial | QuestaoAdaptada | QuestaoAutoral;

/* ------------------------------------------------------------------ */
/* Assuntos                                                            */
/* ------------------------------------------------------------------ */

/** Os 9 blocos do modelo pedagógico. Ver §5 da especificação. */
export interface ConteudoAssunto {
  /** 1. 3 a 5 bullets — o que sobrevive se o aluno ler só isto. */
  precisaSaber: string[];
  /** 2. A ideia central sem jargão. */
  explicacao: Bloco[];
  /** 3. Definições precisas, fórmulas, diagramas. */
  conceitos: { termo: string; definicao: Inline; formula?: string }[];
  /** 4. Um caso resolvido com o raciocínio visível. */
  exemplo: { enunciado: Inline; passos: { titulo: string; texto: Inline }[]; conclusao: Inline };
  /** 5. O formato típico do item + qual eixo cognitivo ele cobra. */
  noEnem: { texto: Inline; eixos: Eixo[]; sinais: string[] };
  /** 6. Enganos concretos, não avisos vagos. */
  erros: { erro: string; porque: Inline }[];
  /** 7 e 8. Questões e suas explicações (ver banco de questões). */
  questoes: string[];
  /** 9. O cartão de 30 segundos. */
  revisaoRapida: string[];
}

/**
 * Metadados de um assunto — tudo de que o motor de estudo precisa para
 * priorizar, agendar revisão e montar o plano do dia.
 *
 * Fica separado do conteúdo de propósito: o dashboard carrega os metadados dos
 * 29 assuntos, mas o texto de um assunto só é baixado quando ele é aberto.
 */
export interface AssuntoMeta {
  id: string;
  areaId: AreaId;
  titulo: string;
  /** Uma linha que explica o assunto para quem está escolhendo o que estudar. */
  resumo: string;
  prioridade: Prioridade;
  /** Por que esta prioridade. Exibido na página — a priorização não é opaca. */
  justificativa: string;
  prerequisitos: string[];
  minutosEstimados: number;
  eixos: Eixo[];
}

/** Metadados + os 9 blocos. Usado apenas nas telas que exibem o conteúdo. */
export type Assunto = AssuntoMeta & { conteudo: ConteudoAssunto };

/** Assunto mapeado mas ainda não escrito. Aparece na navegação com estado honesto. */
export interface AssuntoPlanejado {
  id: string;
  areaId: AreaId;
  titulo: string;
  prioridade: Prioridade;
  resumo: string;
}

export interface Area {
  id: AreaId;
  nome: string;
  nomeCurto: string;
  /** Fato oficial: número de questões objetivas da área. */
  questoes: number | null;
  dia: 1 | 2;
  descricao: string;
  /** O que a prova dessa área realmente cobra — leitura pedagógica. */
  comoCai: string;
}

/* ------------------------------------------------------------------ */
/* Redação                                                             */
/* ------------------------------------------------------------------ */

export type SecaoRedacaoTipo = 'fundamento' | 'competencia' | 'pratica';

export interface SecaoRedacao {
  id: string;
  titulo: string;
  tipo: SecaoRedacaoTipo;
  resumo: string;
  minutosEstimados: number;
  /** Número da competência, quando a seção for de competência. */
  competencia?: 1 | 2 | 3 | 4 | 5;
  conteudo: Bloco[];
  /** Checklist autoavaliativo — o site não atribui nota automática. */
  checklist?: string[];
  exercicio?: { titulo: string; instrucao: Inline; criterios: string[]; minutos: number };
}

/** Metadados de uma seção de redação, sem o conteúdo. */
export type SecaoRedacaoMeta = Pick<
  SecaoRedacao,
  'id' | 'titulo' | 'tipo' | 'resumo' | 'minutosEstimados' | 'competencia'
>;
