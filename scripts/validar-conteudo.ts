/**
 * Validação de conteúdo — roda antes de todo build (`npm run build`).
 *
 * O sistema de tipos já garante parte das regras editoriais (uma questão
 * oficial não compila sem referência de prova; uma alternativa não compila sem
 * diagnóstico). O que o tipo não alcança é verificado aqui:
 *
 *   - exatamente uma alternativa correta por questão;
 *   - toda alternativa incorreta tem tipo de erro classificado;
 *   - as cinco letras A–E, sem repetição;
 *   - toda questão referenciada por um assunto existe, e vice-versa;
 *   - todo pré-requisito aponta para um assunto existente;
 *   - o grafo de pré-requisitos é acíclico (senão o plano diário trava);
 *   - toda questão-irmã existe;
 *   - nenhum assunto essencial fica sem questão.
 *
 * Erros quebram o build. Avisos apenas informam.
 */
import { ASSUNTOS, QUESTOES, SECOES_REDACAO } from '../src/content/conteudo';
import { ASSUNTOS_PLANEJADOS, CATALOGO, SECOES_REDACAO_META } from '../src/content/indice';
import { habilidade } from '../src/content/matriz';

const erros: string[] = [];
const avisos: string[] = [];

const idsAssuntos = new Set(ASSUNTOS.map((a) => a.id));
const idsQuestoes = new Set(QUESTOES.map((q) => q.id));

/* --- Questões --------------------------------------------------------- */
const vistos = new Set<string>();
for (const q of QUESTOES) {
  const onde = `questão ${q.id}`;

  if (vistos.has(q.id)) erros.push(`${onde}: id duplicado.`);
  vistos.add(q.id);

  if (!idsAssuntos.has(q.topicId)) {
    erros.push(`${onde}: aponta para o assunto inexistente "${q.topicId}".`);
  }

  const corretas = q.alternativas.filter((a) => a.correta);
  if (corretas.length !== 1) {
    erros.push(`${onde}: tem ${corretas.length} alternativas corretas; deve ter exatamente 1.`);
  }

  const letras = q.alternativas.map((a) => a.letra);
  const esperadas = ['A', 'B', 'C', 'D', 'E'];
  if (letras.length !== 5 || esperadas.some((l, i) => letras[i] !== l)) {
    erros.push(`${onde}: alternativas devem ser exatamente A, B, C, D, E nessa ordem. Encontrado: ${letras.join(', ')}.`);
  }

  for (const alt of q.alternativas) {
    if (!alt.diagnostico?.trim()) {
      erros.push(`${onde}, alternativa ${alt.letra}: diagnóstico vazio.`);
    }
    if (!alt.correta && !alt.tipoErro) {
      erros.push(`${onde}, alternativa ${alt.letra}: alternativa incorreta sem tipo de erro classificado.`);
    }
    if (alt.correta && alt.tipoErro) {
      erros.push(`${onde}, alternativa ${alt.letra}: alternativa correta não deve ter tipo de erro.`);
    }
  }

  if (q.procedencia === 'oficial' && !q.referencia?.prova) {
    erros.push(`${onde}: marcada como oficial sem referência de prova.`);
  }
  if (q.procedencia === 'adaptada' && !q.fonte?.trim()) {
    erros.push(`${onde}: marcada como adaptada sem fonte declarada.`);
  }

  for (const irma of q.irmas ?? []) {
    if (!idsQuestoes.has(irma)) {
      erros.push(`${onde}: questão-irmã inexistente "${irma}".`);
    }
    if (irma === q.id) {
      erros.push(`${onde}: listada como irmã de si mesma.`);
    }
  }

  if (!q.explicacao.length) erros.push(`${onde}: sem explicação da resposta.`);
  if (q.minutos <= 0) erros.push(`${onde}: estimativa de minutos inválida.`);
}

/* --- Assuntos ---------------------------------------------------------- */
for (const a of ASSUNTOS) {
  const onde = `assunto ${a.id}`;

  for (const qid of a.conteudo.questoes) {
    if (!idsQuestoes.has(qid)) erros.push(`${onde}: referencia a questão inexistente "${qid}".`);
  }
  for (const pre of a.prerequisitos) {
    if (!idsAssuntos.has(pre)) erros.push(`${onde}: pré-requisito inexistente "${pre}".`);
    if (pre === a.id) erros.push(`${onde}: listado como pré-requisito de si mesmo.`);
  }

  if (!a.justificativa?.trim()) {
    erros.push(`${onde}: sem justificativa de prioridade (ela é exibida ao usuário).`);
  }
  if (a.minutosEstimados <= 0) erros.push(`${onde}: estimativa de minutos inválida.`);

  const c = a.conteudo;
  if (c.precisaSaber.length < 3) avisos.push(`${onde}: "o que você precisa saber" tem menos de 3 itens.`);
  if (c.precisaSaber.length > 5) avisos.push(`${onde}: "o que você precisa saber" passou de 5 itens (teto da especificação).`);
  if (c.conceitos.length > 6) avisos.push(`${onde}: mais de 6 conceitos fundamentais.`);
  if (c.erros.length < 3) avisos.push(`${onde}: menos de 3 erros/pegadinhas listados.`);
  if (!c.revisaoRapida.length) erros.push(`${onde}: sem bloco de revisão rápida.`);
  if (!c.noEnem.texto.trim()) erros.push(`${onde}: sem o bloco "como isso aparece no ENEM".`);
  if (!c.exemplo.passos.length) erros.push(`${onde}: exemplo sem passos de resolução.`);

  // Habilidades precisam existir na matriz oficial da própria área. Sem esta
  // checagem, uma citação errada da matriz passaria como se fosse oficial.
  if (a.habilidades.length === 0) {
    avisos.push(`${onde}: não declara nenhuma habilidade da matriz.`);
  }
  for (const codigo of a.habilidades) {
    if (!habilidade(a.areaId, codigo)) {
      erros.push(`${onde}: habilidade "${codigo}" não existe na matriz oficial de ${a.areaId}.`);
    }
  }

  if (a.prioridade === 'essencial' && c.questoes.length === 0) {
    erros.push(`${onde}: assunto essencial sem nenhuma questão.`);
  }

  // Palavras contadas no bloco 1, que tem teto de 60 palavras na especificação.
  const palavras = c.precisaSaber.join(' ').split(/\s+/).filter(Boolean).length;
  if (palavras > 80) avisos.push(`${onde}: bloco "precisa saber" com ${palavras} palavras (alvo: até 60).`);
}

/* --- Órfãos e duplicatas ------------------------------------------------ */
const referenciadas = new Set(ASSUNTOS.flatMap((a) => a.conteudo.questoes));
for (const q of QUESTOES) {
  if (!referenciadas.has(q.id)) {
    avisos.push(`questão ${q.id}: não aparece no bloco de questões de nenhum assunto (só via prática livre).`);
  }
}

const idsPlanejados = new Set(ASSUNTOS_PLANEJADOS.map((a) => a.id));
for (const id of idsPlanejados) {
  if (idsAssuntos.has(id)) erros.push(`assunto ${id}: está listado como planejado e como escrito ao mesmo tempo.`);
}

/* --- Ciclos nos pré-requisitos ------------------------------------------ */
const CINZA = 1;
const PRETO = 2;
const estado = new Map<string, number>();
const mapa = new Map(ASSUNTOS.map((a) => [a.id, a.prerequisitos]));

function visita(id: string, caminho: string[]): void {
  const cor = estado.get(id);
  if (cor === PRETO) return;
  if (cor === CINZA) {
    erros.push(`ciclo de pré-requisitos: ${[...caminho, id].join(' → ')}`);
    return;
  }
  estado.set(id, CINZA);
  for (const pre of mapa.get(id) ?? []) visita(pre, [...caminho, id]);
  estado.set(id, PRETO);
}
for (const a of ASSUNTOS) visita(a.id, []);

/* --- Redação ------------------------------------------------------------ */
const idsSecoes = new Set<string>();
for (const s of SECOES_REDACAO) {
  if (idsSecoes.has(s.id)) erros.push(`seção de redação ${s.id}: id duplicado.`);
  idsSecoes.add(s.id);
  if (!s.conteudo.length) erros.push(`seção de redação ${s.id}: sem conteúdo.`);
  if (s.minutosEstimados <= 0) erros.push(`seção de redação ${s.id}: estimativa de minutos inválida.`);
}
const competencias = SECOES_REDACAO.filter((s) => s.tipo === 'competencia').map((s) => s.competencia);
for (const n of [1, 2, 3, 4, 5]) {
  if (!competencias.includes(n as 1 | 2 | 3 | 4 | 5)) {
    erros.push(`redação: falta a seção da Competência ${n}.`);
  }
}

/* --- Catálogo x conteúdo ------------------------------------------------- */
/*
 * Metadados e conteúdo moram em arquivos separados para manter o bundle
 * inicial pequeno. O preço dessa separação seria o risco de divergirem — e é
 * exatamente isso que as duas checagens abaixo eliminam.
 */
for (const meta of CATALOGO) {
  if (!idsAssuntos.has(meta.id)) {
    erros.push(
      `catálogo: o assunto "${meta.id}" está em catalogo.ts mas não tem conteúdo em topicos/.`,
    );
  }
}
for (const a of ASSUNTOS) {
  if (!CATALOGO.some((m) => m.id === a.id)) {
    erros.push(`conteúdo: o assunto "${a.id}" tem conteúdo mas não está no catálogo.`);
  }
}

const metaPorId = new Map(SECOES_REDACAO_META.map((m) => [m.id, m]));
for (const s of SECOES_REDACAO) {
  const meta = metaPorId.get(s.id);
  if (!meta) {
    erros.push(`redação: a seção "${s.id}" não está no índice leve (redacao/indice.ts).`);
    continue;
  }
  if (
    meta.titulo !== s.titulo ||
    meta.tipo !== s.tipo ||
    meta.resumo !== s.resumo ||
    meta.minutosEstimados !== s.minutosEstimados ||
    meta.competencia !== s.competencia
  ) {
    erros.push(`redação: o índice leve divergiu do conteúdo na seção "${s.id}".`);
  }
}
for (const meta of SECOES_REDACAO_META) {
  if (!SECOES_REDACAO.some((s) => s.id === meta.id)) {
    erros.push(`redação: o índice lista "${meta.id}", que não existe em secoes.ts.`);
  }
}

/* --- Relatório ----------------------------------------------------------- */
const ess = ASSUNTOS.filter((a) => a.prioridade === 'essencial').length;
console.log(
  `\nConteúdo: ${ASSUNTOS.length} assuntos escritos (${ess} essenciais), ` +
    `${ASSUNTOS_PLANEJADOS.length} planejados, ${QUESTOES.length} questões, ` +
    `${SECOES_REDACAO.length} seções de redação.`,
);

if (avisos.length) {
  console.log(`\nAvisos (${avisos.length}):`);
  for (const a of avisos) console.log(`  • ${a}`);
}

if (erros.length) {
  console.error(`\nErros (${erros.length}):`);
  for (const e of erros) console.error(`  ✗ ${e}`);
  console.error('\nValidação falhou.\n');
  process.exit(1);
}

console.log('\nValidação de conteúdo: OK\n');
