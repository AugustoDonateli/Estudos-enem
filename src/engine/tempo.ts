import type { Resposta } from '@/storage/schema';

/**
 * Ritmo de prova.
 *
 * O 2º dia tem **cinco horas para 90 questões** — está impresso na capa dos
 * cadernos de 2025 que estão neste repositório. São 200 segundos por questão,
 * e é contra esse número que o ritmo do aluno é comparado.
 *
 * O 1º dia não entra na conta: suas 5h30 incluem a redação, e quanto reservar
 * para ela é escolha do aluno, não dado do exame. Dividir ali seria inventar.
 */
export const RITMO_ALVO_SEGUNDOS = 200;

/**
 * Mediana, não média.
 *
 * Uma questão em que o aluno travou dez minutos move a média o bastante para
 * mentir sobre todas as outras. A mediana ignora o extremo e responde a
 * pergunta que interessa: quanto ele leva numa questão típica.
 */
export function mediana(valores: number[]): number | null {
  const ordenados = valores.filter((v) => Number.isFinite(v)).sort((a, b) => a - b);
  if (ordenados.length === 0) return null;
  const meio = Math.floor(ordenados.length / 2);
  if (ordenados.length % 2 === 1) return ordenados[meio]!;
  return (ordenados[meio - 1]! + ordenados[meio]!) / 2;
}

export interface AnaliseTempo {
  /** Mediana geral, ou null enquanto não houver resposta cronometrada. */
  mediana: number | null;
  /** Quantas respostas passaram do ritmo alvo. */
  acimaDoAlvo: number;
  /** Quantas respostas têm tempo registrado. Respostas do schema 1 não têm. */
  cronometradas: number;
  /** Mediana por assunto, para achar onde ele trava. */
  porAssunto: Map<string, number>;
}

export function analisarTempo(respostas: Resposta[]): AnaliseTempo {
  const comTempo = respostas.filter(
    (r): r is Resposta & { segundos: number } => typeof r.segundos === 'number' && r.segundos > 0,
  );

  const porAssuntoBruto = new Map<string, number[]>();
  for (const r of comTempo) {
    const atual = porAssuntoBruto.get(r.topicId) ?? [];
    atual.push(r.segundos);
    porAssuntoBruto.set(r.topicId, atual);
  }

  const porAssunto = new Map<string, number>();
  for (const [topicId, valores] of porAssuntoBruto) {
    const m = mediana(valores);
    if (m !== null) porAssunto.set(topicId, m);
  }

  return {
    mediana: mediana(comTempo.map((r) => r.segundos)),
    acimaDoAlvo: comTempo.filter((r) => r.segundos > RITMO_ALVO_SEGUNDOS).length,
    cronometradas: comTempo.length,
    porAssunto,
  };
}

/** `245` vira `4min05`; `48` vira `48s`. */
export function formatarDuracao(segundos: number): string {
  if (segundos < 60) return `${Math.round(segundos)}s`;
  const min = Math.floor(segundos / 60);
  const resto = Math.round(segundos % 60);
  return `${min}min${String(resto).padStart(2, '0')}`;
}
