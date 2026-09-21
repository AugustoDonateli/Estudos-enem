import type { EstadoAssunto, Caixa } from '@/storage/schema';
import { diferencaEmDias, PROVA_DIA_1, somarDias, type DiaISO } from './datas';

/**
 * Repetição espaçada truncada pela data da prova (§4.6 da especificação).
 *
 * Caixas com intervalos 1, 3, 7 e 14 dias. A parte específica deste projeto é o
 * truncamento: em 48 dias, agendar uma revisão para depois de 08/11 é agendar
 * para o vazio. Quando o intervalo estoura a data da prova, a revisão vai para
 * o último dia possível e é marcada como revisão final.
 */

export const INTERVALOS: Record<Caixa, number> = { 0: 0, 1: 1, 2: 3, 3: 7, 4: 14 };

export interface Agendamento {
  caixa: Caixa;
  proximaRevisao: DiaISO;
  revisaoFinal: boolean;
}

export function agendar(caixaAtual: Caixa, acertou: boolean, dia: DiaISO): Agendamento {
  const caixa: Caixa = acertou
    ? (Math.min(4, caixaAtual + 1) as Caixa)
    : (Math.max(1, caixaAtual - 1) as Caixa);

  const intervalo = acertou ? INTERVALOS[caixa] : 1;
  const alvo = somarDias(dia, intervalo);
  const diasRestantes = diferencaEmDias(dia, PROVA_DIA_1);

  // Não há mais tempo para outro ciclo: agenda a revisão final na véspera.
  if (diferencaEmDias(alvo, PROVA_DIA_1) < 0) {
    const vespera = somarDias(PROVA_DIA_1, -1);
    const proximaRevisao = diasRestantes >= 1 ? vespera : dia;
    return { caixa, proximaRevisao, revisaoFinal: true };
  }
  return { caixa, proximaRevisao: alvo, revisaoFinal: false };
}

export interface ItemRevisao {
  topicId: string;
  vencidaHa: number;
  caixa: Caixa;
  revisaoFinal: boolean;
  motivo: string;
}

export function revisoesVencidas(
  estados: Record<string, EstadoAssunto | undefined>,
  dia: DiaISO,
): ItemRevisao[] {
  const itens: ItemRevisao[] = [];
  for (const [topicId, estado] of Object.entries(estados)) {
    if (!estado?.proximaRevisao) continue;
    const atraso = diferencaEmDias(estado.proximaRevisao, dia);
    if (atraso < 0) continue;
    itens.push({
      topicId,
      vencidaHa: atraso,
      caixa: estado.caixa,
      revisaoFinal: Boolean(estado.revisaoFinal),
      motivo: descreverMotivo(estado, atraso),
    });
  }
  // Mais atrasada primeiro; entre iguais, a de caixa menor (mais frágil) antes.
  return itens.sort((a, b) => b.vencidaHa - a.vencidaHa || a.caixa - b.caixa);
}

function descreverMotivo(estado: EstadoAssunto, atraso: number): string {
  if (estado.revisaoFinal) return 'Revisão final antes da prova';
  const intervalo = INTERVALOS[estado.caixa];
  if (atraso === 0) return `Revisão de ${intervalo} ${intervalo === 1 ? 'dia' : 'dias'}`;
  return `Venceu há ${atraso} ${atraso === 1 ? 'dia' : 'dias'}`;
}
