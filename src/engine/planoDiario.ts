import type { Assunto } from '@/content/tipos';
import type { Progresso } from '@/storage/schema';
import { priorizar } from './prioridade';
import { revisoesVencidas } from './revisao';
import { conceitosFrageis } from './erros';
import { faseDoPlano, diasAteProva, type DiaISO } from './datas';

/**
 * Gerador do "Plano de hoje" (§4.4 da especificação).
 *
 * Duas propriedades que o plano precisa ter e que quase nenhuma ferramenta
 * genérica tem:
 *
 *  1. É determinístico por dia. Recarregar a página não embaralha o plano.
 *     Um plano que muda sozinho deixa de ser um plano.
 *  2. Todo item diz por que está ali. Sem o motivo, o aluno passa a ignorar a
 *     recomendação e o produto inteiro perde a razão de existir.
 */

export type TipoItem = 'revisao' | 'erro' | 'novo' | 'redacao' | 'pratica';

export interface ItemPlano {
  /** Estável dentro do dia — usado para marcar concluído. */
  id: string;
  tipo: TipoItem;
  titulo: string;
  subtitulo?: string;
  motivo: string;
  minutos: number;
  href: string;
  concluido: boolean;
}

export interface PlanoDiario {
  dia: DiaISO;
  fase: ReturnType<typeof faseDoPlano>;
  diasRestantes: number;
  orcamento: number;
  minutosPlanejados: number;
  itens: ItemPlano[];
  /** Revisões que não couberam hoje — transbordam em vez de punir. */
  revisoesAdiadas: number;
}

const TETO_REVISAO = 0.4;
const TETO_ERROS = 0.25;

export interface EntradaPlano {
  assuntos: Assunto[];
  progresso: Progresso;
  dia: DiaISO;
  /** Seções de redação, na ordem pedagógica. */
  secoesRedacao: { id: string; titulo: string; minutosEstimados: number }[];
}

export function gerarPlano({ assuntos, progresso, dia, secoesRedacao }: EntradaPlano): PlanoDiario {
  const orcamento = progresso.config.orcamentoDiario;
  const fase = faseDoPlano(dia);
  const diasRestantes = diasAteProva(dia);
  const concluidos = new Set(progresso.planoConcluido[dia] ?? []);
  const porId = new Map(assuntos.map((a) => [a.id, a]));

  const itens: ItemPlano[] = [];
  let usado = 0;
  const cabe = (m: number) => usado + m <= orcamento;

  /* 1. Revisões vencidas — até 40% do orçamento. */
  const vencidas = revisoesVencidas(progresso.assuntos, dia);
  let minutosRevisao = 0;
  let revisoesAdiadas = 0;
  for (const item of vencidas) {
    const assunto = porId.get(item.topicId);
    if (!assunto) continue;
    const minutos = Math.max(5, Math.round(assunto.minutosEstimados * 0.4));
    if (minutosRevisao + minutos > orcamento * TETO_REVISAO || !cabe(minutos)) {
      revisoesAdiadas += 1;
      continue;
    }
    minutosRevisao += minutos;
    usado += minutos;
    itens.push({
      id: `revisao:${assunto.id}`,
      tipo: 'revisao',
      titulo: assunto.titulo,
      subtitulo: 'Revisão rápida + questão',
      motivo: item.motivo,
      minutos,
      href: `/assunto/${assunto.id}?modo=revisao`,
      concluido: concluidos.has(`revisao:${assunto.id}`),
    });
  }

  /* 2. Refazer conceitos errados — até 25%. */
  const frageis = conceitosFrageis(progresso.respostas);
  let minutosErro = 0;
  for (const c of frageis) {
    const assunto = porId.get(c.topicId);
    if (!assunto) continue;
    if (itens.some((i) => i.id === `revisao:${assunto.id}`)) continue;
    const minutos = 8;
    if (minutosErro + minutos > orcamento * TETO_ERROS || !cabe(minutos)) break;
    minutosErro += minutos;
    usado += minutos;
    itens.push({
      id: `erro:${c.topicId}:${c.conceito}`,
      tipo: 'erro',
      titulo: c.conceito,
      subtitulo: assunto.titulo,
      motivo:
        c.erros === 1
          ? 'Você errou uma questão desse conceito e ainda não reacertou.'
          : `Você errou ${c.erros} questões desse conceito.`,
      minutos,
      href: `/questoes?conceito=${encodeURIComponent(c.conceito)}`,
      concluido: concluidos.has(`erro:${c.topicId}:${c.conceito}`),
    });
  }

  /* 3. Assunto novo — no máximo 2, e nenhum na revisão final. */
  if (fase !== 'revisao-final' && fase !== 'prova' && fase !== 'encerrado') {
    const fila = priorizar(assuntos, progresso.assuntos, dia).filter((p) => {
      const estado = progresso.assuntos[p.assunto.id];
      const jaNoPlano = itens.some((i) => i.href.includes(`/assunto/${p.assunto.id}`));
      return !jaNoPlano && (!estado?.lido || (estado.dominio ?? 0) < 65);
    });
    const limite = orcamento >= 90 ? 2 : 1;
    for (const p of fila.slice(0, limite)) {
      const minutos = p.assunto.minutosEstimados;
      if (!cabe(minutos)) break;
      usado += minutos;
      const estado = progresso.assuntos[p.assunto.id];
      itens.push({
        id: `novo:${p.assunto.id}`,
        tipo: 'novo',
        titulo: p.assunto.titulo,
        subtitulo: estado?.lido ? 'Retomar e praticar' : 'Estudar pela primeira vez',
        motivo: p.motivo,
        minutos,
        href: `/assunto/${p.assunto.id}`,
        concluido: concluidos.has(`novo:${p.assunto.id}`),
      });
    }
  }

  /* 4. Redação — um bloco por semana, em dia fixo, e prática semanal. */
  const proxima = secoesRedacao.find((s) => !progresso.redacao.secoesLidas.includes(s.id));
  const diaDaSemana = new Date(dia + 'T12:00:00').getDay();
  const ehDiaDeRedacao = diaDaSemana === 3 || diaDaSemana === 6; // quarta e sábado
  if (proxima && ehDiaDeRedacao && cabe(proxima.minutosEstimados)) {
    usado += proxima.minutosEstimados;
    itens.push({
      id: `redacao:${proxima.id}`,
      tipo: 'redacao',
      titulo: proxima.titulo,
      subtitulo: 'Redação',
      motivo: 'Critério público e fechado: é o maior retorno por minuto da prova.',
      minutos: proxima.minutosEstimados,
      href: `/redacao/${proxima.id}`,
      concluido: concluidos.has(`redacao:${proxima.id}`),
    });
  }

  /* 5. Sobrou tempo: prática solta no assunto mais frágil já estudado. */
  const sobra = orcamento - usado;
  if (sobra >= 10) {
    const estudados = priorizar(assuntos, progresso.assuntos, dia).filter(
      (p) => progresso.assuntos[p.assunto.id]?.lido,
    );
    const alvo = estudados[0];
    if (alvo && !itens.some((i) => i.id === `pratica:${alvo.assunto.id}`)) {
      const minutos = Math.min(sobra, 15);
      usado += minutos;
      itens.push({
        id: `pratica:${alvo.assunto.id}`,
        tipo: 'pratica',
        titulo: `Praticar: ${alvo.assunto.titulo}`,
        subtitulo: 'Questões avulsas',
        motivo: 'Sobrou tempo no orçamento de hoje — prática no que está mais frágil.',
        minutos,
        href: `/questoes?assunto=${alvo.assunto.id}`,
        concluido: concluidos.has(`pratica:${alvo.assunto.id}`),
      });
    }
  }

  return {
    dia,
    fase,
    diasRestantes,
    orcamento,
    minutosPlanejados: itens.reduce((s, i) => s + i.minutos, 0),
    itens,
    revisoesAdiadas,
  };
}
