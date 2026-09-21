import type { Dificuldade } from '@/content/tipos';
import type { Confianca } from '@/storage/schema';

/**
 * Modelo de domínio por assunto (0–100).
 *
 * Atualização por média móvel exponencial assimétrica: acertar uma questão
 * fácil informa pouco sobre o domínio; errar uma questão fácil informa muito.
 * É a mesma intuição do parâmetro de discriminação da TRI, em versão
 * simplificada — e o site é explícito sobre ser uma simplificação, não uma
 * estimativa de nota TRI.
 */

const GANHO: Record<Dificuldade, number> = { facil: 8, media: 14, dificil: 20 };
const PERDA: Record<Dificuldade, number> = { facil: 20, media: 14, dificil: 8 };

/**
 * A confiança declarada modula o quanto a resposta informa.
 *
 * A assimetria é o ponto. Acertar chutando quase não é evidência de domínio —
 * em cinco alternativas, uma em cada cinco dá certo por sorte. Já **errar
 * tendo certeza** é o sinal mais valioso do sistema: não é desconhecimento, é
 * um equívoco instalado, e quem está errado com convicção não procura a
 * correção sozinho. Por isso esse caso pesa mais que qualquer outro.
 *
 * Errar chutando, no extremo oposto, quase não move nada: o aluno já sabia
 * que não sabia, e o site não tem o que acrescentar a essa informação.
 */
const FATOR_ACERTO: Record<Confianca, number> = { certeza: 1, duvida: 0.75, chute: 0.3 };
const FATOR_ERRO: Record<Confianca, number> = { certeza: 1.4, duvida: 1, chute: 0.5 };

/** Domínio atribuído a quem nunca respondeu nada e não se autoavaliou. */
export const DOMINIO_DESCONHECIDO_LACUNA = 0.8;

export function atualizarDominio(
  atual: number | null,
  acertou: boolean,
  dificuldade: Dificuldade,
  /** Ausente nas respostas do schema 1: tratadas como se fossem 'duvida'. */
  confianca: Confianca = 'duvida',
): number {
  const base = atual ?? 45;
  if (acertou) {
    const ganho = GANHO[dificuldade] * ((100 - base) / 100) * FATOR_ACERTO[confianca];
    return arredondar(clamp(base + ganho));
  }
  // O fator (0.35 + 0.65 × base/100) evita que quem já está no chão pare de
  // cair — e evita que um único erro derrube alguém que já demonstrou domínio.
  const perda = PERDA[dificuldade] * (0.35 + 0.65 * (base / 100)) * FATOR_ERRO[confianca];
  return arredondar(clamp(base - perda));
}

/** Ler o conteúdo até o fim move o domínio, mas pouco: ler não é saber. */
export function dominioAposLeitura(atual: number | null): number {
  const base = atual ?? 30;
  return arredondar(clamp(base + 6 * ((100 - base) / 100)));
}

export type Faixa = 'fragil' | 'construcao' | 'solido' | 'dominado' | 'desconhecido';

export function faixaDeDominio(dominio: number | null): Faixa {
  if (dominio === null) return 'desconhecido';
  if (dominio < 40) return 'fragil';
  if (dominio < 65) return 'construcao';
  if (dominio < 85) return 'solido';
  return 'dominado';
}

export const ROTULO_FAIXA: Record<Faixa, string> = {
  desconhecido: 'Não avaliado',
  fragil: 'Frágil',
  construcao: 'Em construção',
  solido: 'Sólido',
  dominado: 'Dominado',
};

/** Lacuna normalizada, usada no score de prioridade. */
export function lacuna(dominio: number | null): number {
  if (dominio === null) return DOMINIO_DESCONHECIDO_LACUNA;
  return (100 - dominio) / 100;
}

function clamp(n: number): number {
  return Math.min(100, Math.max(0, n));
}

function arredondar(n: number): number {
  return Math.round(n * 10) / 10;
}
