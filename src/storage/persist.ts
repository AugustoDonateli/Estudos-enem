import { CHAVE_STORAGE, progressoInicial, VERSAO_SCHEMA, type Progresso } from './schema';
import { hoje } from '@/engine/datas';

/**
 * Persistência local.
 *
 * Toda leitura e escrita é tolerante a falha: em aba anônima, com storage
 * desabilitado ou com cota estourada, o app continua funcionando — apenas sem
 * salvar — em vez de quebrar a tela.
 */

export function carregar(): Progresso {
  try {
    const bruto = localStorage.getItem(CHAVE_STORAGE);
    if (!bruto) return progressoInicial(hoje());
    const dados = JSON.parse(bruto) as Progresso;
    return migrar(dados);
  } catch {
    return progressoInicial(hoje());
  }
}

export function salvar(progresso: Progresso): boolean {
  try {
    localStorage.setItem(CHAVE_STORAGE, JSON.stringify(progresso));
    return true;
  } catch {
    return false;
  }
}

export function limpar(): void {
  try {
    localStorage.removeItem(CHAVE_STORAGE);
  } catch {
    /* sem storage, nada a limpar */
  }
}

/**
 * Migração de schema. Hoje só existe a versão 1; a função existe para que a
 * primeira mudança de formato não custe o histórico de ninguém.
 */
function migrar(dados: Partial<Progresso>): Progresso {
  const base = progressoInicial(dados.criadoEm ?? hoje());
  if (!dados || typeof dados !== 'object') return base;
  return {
    ...base,
    ...dados,
    versao: VERSAO_SCHEMA,
    assuntos: dados.assuntos ?? base.assuntos,
    respostas: Array.isArray(dados.respostas) ? dados.respostas : [],
    redacao: {
      secoesLidas: dados.redacao?.secoesLidas ?? [],
      producoes: dados.redacao?.producoes ?? [],
    },
    planoConcluido: dados.planoConcluido ?? {},
    config: { ...base.config, ...dados.config },
  };
}

export function exportarJSON(progresso: Progresso): string {
  return JSON.stringify(progresso, null, 2);
}

export type ResultadoImportacao =
  | { ok: true; progresso: Progresso }
  | { ok: false; erro: string };

export function importarJSON(texto: string): ResultadoImportacao {
  try {
    const dados = JSON.parse(texto) as Partial<Progresso>;
    if (typeof dados !== 'object' || dados === null) {
      return { ok: false, erro: 'O arquivo não contém um objeto válido.' };
    }
    if (!('assuntos' in dados) && !('respostas' in dados)) {
      return { ok: false, erro: 'Este arquivo não parece ser um backup do Estudos ENEM.' };
    }
    return { ok: true, progresso: migrar(dados) };
  } catch {
    return { ok: false, erro: 'Não foi possível ler o arquivo: JSON inválido.' };
  }
}
