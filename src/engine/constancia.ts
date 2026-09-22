/**
 * Constância — em quantos dias recentes houve alguma atividade.
 *
 * Não é campo novo de storage: um dia "ativo" é qualquer dia em que já
 * existe rastro em outro lugar do progresso — resposta a uma questão, item
 * do plano marcado como concluído, assunto estudado, explicação do Modo
 * Feynman ou redação registrada. Guardar de novo duplicaria dado que já
 * está salvo, e passaria a poder divergir dele.
 */
import type { Progresso } from '@/storage/schema';
import { hoje, somarDias, type DiaISO } from './datas';

/** Todos os dias em que há algum rastro de atividade no progresso. */
export function diasComAtividade(progresso: Progresso): Set<DiaISO> {
  const dias = new Set<DiaISO>();

  for (const r of progresso.respostas) dias.add(r.em);

  // Um dia só entra se sobrou pelo menos um item marcado — o aluno pode
  // marcar e desmarcar, e o dia não vira "ativo" por um clique desfeito.
  for (const [dia, itens] of Object.entries(progresso.planoConcluido)) {
    if (itens.length > 0) dias.add(dia);
  }

  for (const estado of Object.values(progresso.assuntos)) {
    if (estado.ultimoEstudo) dias.add(estado.ultimoEstudo);
  }

  for (const e of progresso.explicacoes) dias.add(e.em);
  for (const p of progresso.redacao.producoes) dias.add(p.em);

  return dias;
}

/** Os últimos `n` dias terminando em `ate` (padrão hoje), do mais antigo ao mais recente. */
export function ultimosDias(n: number, ate: DiaISO = hoje()): DiaISO[] {
  return Array.from({ length: n }, (_, i) => somarDias(ate, i - (n - 1)));
}

/**
 * Sequência de dias ativos seguidos, terminando hoje.
 *
 * Se hoje ainda não teve atividade, conta a partir de ontem — abrir o site
 * de manhã, antes de estudar, não pode zerar a sequência de ontem à noite.
 * Só zera de fato quando passa um dia inteiro sem nenhum rastro.
 */
export function sequenciaAtual(dias: Set<DiaISO>, referencia: DiaISO = hoje()): number {
  let cursor = dias.has(referencia) ? referencia : somarDias(referencia, -1);
  let n = 0;
  while (dias.has(cursor)) {
    n++;
    cursor = somarDias(cursor, -1);
  }
  return n;
}
