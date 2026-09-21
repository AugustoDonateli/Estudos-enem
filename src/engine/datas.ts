/**
 * Datas do exame e aritmética de calendário.
 *
 * Todo o sistema trabalha com datas no formato 'AAAA-MM-DD' em horário local.
 * Usar `Date` cru para comparação de dias é a origem clássica de bugs de fuso
 * (a revisão "de amanhã" aparecendo hoje às 21h). Aqui o dia é uma string.
 */

/** Datas oficiais do ENEM 2026 (INEP). */
export const PROVA_DIA_1 = '2026-11-08';
export const PROVA_DIA_2 = '2026-11-15';

export type DiaISO = string;

export function paraDiaISO(d: Date): DiaISO {
  const ano = d.getFullYear();
  const mes = String(d.getMonth() + 1).padStart(2, '0');
  const dia = String(d.getDate()).padStart(2, '0');
  return `${ano}-${mes}-${dia}`;
}

export function deDiaISO(dia: DiaISO): Date {
  const [a, m, d] = dia.split('-').map(Number);
  return new Date(a!, (m ?? 1) - 1, d ?? 1);
}

export function hoje(): DiaISO {
  return paraDiaISO(new Date());
}

export function somarDias(dia: DiaISO, n: number): DiaISO {
  const d = deDiaISO(dia);
  d.setDate(d.getDate() + n);
  return paraDiaISO(d);
}

/** Dias inteiros de `de` até `ate`. Negativo se `ate` já passou. */
export function diferencaEmDias(de: DiaISO, ate: DiaISO): number {
  const ms = deDiaISO(ate).getTime() - deDiaISO(de).getTime();
  return Math.round(ms / 86_400_000);
}

export function diasAteProva(referencia: DiaISO = hoje()): number {
  return diferencaEmDias(referencia, PROVA_DIA_1);
}

/**
 * Fase do plano. A mudança de fase é anunciada ao aluno — um plano que muda de
 * comportamento sem avisar destrói a confiança nele.
 */
export type Fase = 'construcao' | 'consolidacao' | 'revisao-final' | 'prova' | 'encerrado';

export function faseDoPlano(dia: DiaISO = hoje()): Fase {
  const restam = diferencaEmDias(dia, PROVA_DIA_1);
  if (diferencaEmDias(dia, PROVA_DIA_2) < 0) return 'encerrado';
  if (restam <= 0) return 'prova';
  if (restam <= 7) return 'revisao-final';
  if (restam <= 21) return 'consolidacao';
  return 'construcao';
}

export const DESCRICAO_FASE: Record<Fase, { rotulo: string; explicacao: string }> = {
  construcao: {
    rotulo: 'Construção',
    explicacao:
      'Fase de aprender assunto novo. O plano introduz até dois assuntos por dia e começa a agendar revisões.',
  },
  consolidacao: {
    rotulo: 'Consolidação',
    explicacao:
      'Menos assunto novo, mais prática e revisão. Conteúdos complementares saem da fila de prioridade.',
  },
  'revisao-final': {
    rotulo: 'Revisão final',
    explicacao:
      'Última semana: o plano para de introduzir assunto novo e vira revisão do que você já viu, mais questões dos seus erros.',
  },
  prova: { rotulo: 'Semana de prova', explicacao: 'Entre os dois dias de aplicação.' },
  encerrado: { rotulo: 'Prova realizada', explicacao: 'O ciclo de 2026 terminou.' },
};
