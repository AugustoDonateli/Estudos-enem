import type { TipoErro } from '@/content/tipos';
import type { Resposta } from '@/storage/schema';

/**
 * Leitura do padrão de erros.
 *
 * A frase mais útil que este site consegue dizer não é "você acertou 6 de 10".
 * É "seus erros não são de conteúdo, são de leitura do enunciado". Para isso,
 * cada alternativa errada carrega o tipo de erro que ela representa.
 */

export const ROTULO_TIPO_ERRO: Record<TipoErro, string> = {
  leitura: 'leitura do enunciado',
  conceito: 'conceito',
  calculo: 'cálculo',
  distrator: 'armadilha da alternativa',
  grafico: 'leitura de gráfico ou tabela',
};

export const EXPLICACAO_TIPO_ERRO: Record<TipoErro, string> = {
  leitura:
    'Você entendeu o conteúdo, mas respondeu outra pergunta. Antes de calcular, sublinhe o que o comando pede.',
  conceito: 'A ideia por trás da questão ainda não está firme. Vale voltar ao conteúdo.',
  calculo: 'O raciocínio estava certo e a conta escapou. Escrever o passo intermediário resolve.',
  distrator:
    'Você caiu numa alternativa construída para parecer certa. Ler todas antes de marcar corta boa parte desses.',
  grafico:
    'O dado estava no gráfico ou na tabela e foi lido errado. Confira eixo, unidade e escala antes de interpretar.',
};

/** Mínimo de erros para arriscar um diagnóstico. Abaixo disso é ruído. */
export const MINIMO_PARA_DIAGNOSTICO = 4;

export interface PadraoErros {
  total: number;
  porTipo: { tipo: TipoErro; quantidade: number }[];
  dominante: TipoErro | null;
  /** Frase pronta para a interface, ou null se não há dados suficientes. */
  frase: string | null;
}

export function analisarErros(respostas: Resposta[], ultimas = 30): PadraoErros {
  const recentes = [...respostas].sort((a, b) => b.ts - a.ts).slice(0, ultimas);
  const erros = recentes.filter((r) => !r.correta && r.tipoErro);

  const contagem = new Map<TipoErro, number>();
  for (const e of erros) contagem.set(e.tipoErro!, (contagem.get(e.tipoErro!) ?? 0) + 1);

  const porTipo = [...contagem.entries()]
    .map(([tipo, quantidade]) => ({ tipo, quantidade }))
    .sort((a, b) => b.quantidade - a.quantidade);

  const total = erros.length;
  if (total < MINIMO_PARA_DIAGNOSTICO || porTipo.length === 0) {
    return { total, porTipo, dominante: null, frase: null };
  }

  const topo = porTipo[0]!;
  const segundo = porTipo[1]?.quantidade ?? 0;
  // Duas condições, porque uma só não basta. O tipo dominante precisa
  // responder por 40% dos erros E estar claramente à frente do segundo.
  // Sem a segunda condição, um empate 5x5 seria anunciado como "padrão" —
  // que é exatamente inventar significado em ruído.
  const concentrado = topo.quantidade / total >= 0.4;
  const destacado = topo.quantidade >= segundo * 1.5;
  if (!concentrado || !destacado) {
    return { total, porTipo, dominante: null, frase: null };
  }

  return {
    total,
    porTipo,
    dominante: topo.tipo,
    frase: `Nos seus últimos ${total} erros, ${topo.quantidade} foram de ${ROTULO_TIPO_ERRO[topo.tipo]}.`,
  };
}

export interface ConceitoFragil {
  conceito: string;
  topicId: string;
  erros: number;
  acertos: number;
  questoesErradas: string[];
}

/** Conceitos em que o aluno errou e ainda não reacertou depois. */
export function conceitosFrageis(respostas: Resposta[]): ConceitoFragil[] {
  const mapa = new Map<string, ConceitoFragil>();
  const ordenadas = [...respostas].sort((a, b) => a.ts - b.ts);

  for (const r of ordenadas) {
    const chave = `${r.topicId}::${r.conceito}`;
    const atual =
      mapa.get(chave) ??
      { conceito: r.conceito, topicId: r.topicId, erros: 0, acertos: 0, questoesErradas: [] };
    if (r.correta) {
      atual.acertos += 1;
    } else {
      atual.erros += 1;
      if (!atual.questoesErradas.includes(r.questionId)) atual.questoesErradas.push(r.questionId);
    }
    mapa.set(chave, atual);
  }

  return [...mapa.values()]
    .filter((c) => c.erros > c.acertos)
    .sort((a, b) => b.erros - a.erros || a.acertos - b.acertos);
}
