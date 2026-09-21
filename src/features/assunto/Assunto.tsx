import { useEffect, useMemo, useState } from 'react';
import { Link, useParams, useSearchParams } from 'react-router-dom';
import { ASSUNTO_POR_ID, QUESTAO_POR_ID } from '@/content/conteudo';
import { CATALOGO } from '@/content/indice';
import { AREA_POR_ID } from '@/content/areas';
import { useProgresso } from '@/lib/progresso';
import { prerequisitosPendentes, priorizar } from '@/engine/prioridade';
import { faixaDeDominio, ROTULO_FAIXA } from '@/engine/dominio';
import { hoje } from '@/engine/datas';
import { ROTULO_EIXO } from '@/lib/rotulos';
import {
  BarraDominio,
  Blocos,
  Botao,
  BotaoLink,
  Destaque,
  Formula,
  Tag,
  TagPrioridade,
  Vazio,
} from '@/design/Primitivos';
import { PlayerQuestao } from '@/features/questao/PlayerQuestao';
import { definirTitulo } from '@/lib/titulo';
import s from './Assunto.module.css';

const BLOCOS_NAV = [
  { id: 'b1', rotulo: 'Essencial' },
  { id: 'b2', rotulo: 'Explicação' },
  { id: 'b3', rotulo: 'Conceitos' },
  { id: 'b4', rotulo: 'Exemplo' },
  { id: 'b5', rotulo: 'No ENEM' },
  { id: 'b6', rotulo: 'Erros' },
  { id: 'b7', rotulo: 'Questões' },
  { id: 'b9', rotulo: 'Revisão' },
];

export function Assunto() {
  const { topicId } = useParams<{ topicId: string }>();
  const [params] = useSearchParams();
  const modoRevisao = params.get('modo') === 'revisao';
  const { progresso, marcarLido } = useProgresso();
  const [marcado, setMarcado] = useState(false);

  const assunto = topicId ? ASSUNTO_POR_ID.get(topicId) : undefined;

  useEffect(() => {
    if (assunto) definirTitulo(assunto.titulo, assunto.resumo);
    setMarcado(false);
    window.scrollTo(0, 0);
  }, [assunto]);

  const proximo = useMemo(() => {
    if (!assunto) return undefined;
    return priorizar(CATALOGO, progresso.assuntos, hoje()).find(
      (p) => p.assunto.id !== assunto.id,
    );
  }, [assunto, progresso.assuntos]);

  if (!assunto) {
    return (
      <div className="page">
        <Vazio
          titulo="Assunto não encontrado"
          acao={<BotaoLink to="/areas">Ver todas as áreas</BotaoLink>}
        >
          <p style={{ margin: '0 auto' }}>
            Pode ser um assunto ainda não escrito. A página da área mostra quais estão no mapa.
          </p>
        </Vazio>
      </div>
    );
  }

  const area = AREA_POR_ID[assunto.areaId];
  const estado = progresso.assuntos[assunto.id];
  const c = assunto.conteudo;
  const pendentes = prerequisitosPendentes(assunto, progresso.assuntos);
  const questoes = c.questoes.map((id) => QUESTAO_POR_ID.get(id)).filter(Boolean);

  function concluir() {
    marcarLido(assunto!.id);
    setMarcado(true);
  }

  return (
    <div className="page">
      <Link to={`/area/${area.id}`} className="voltar">
        ← {area.nomeCurto}
      </Link>

      <header className={s.cabecalho}>
        <div className={s.metaTopo}>
          <TagPrioridade prioridade={assunto.prioridade} />
          <Tag>{assunto.minutosEstimados} min</Tag>
          {assunto.eixos.map((e) => (
            <Tag key={e}>{ROTULO_EIXO[e]}</Tag>
          ))}
        </div>
        <h1>{assunto.titulo}</h1>
        <p className={s.resumo}>{assunto.resumo}</p>
        <div className={s.barraTopo}>
          <BarraDominio dominio={estado?.dominio ?? null} rotulo={assunto.titulo} />
          <span className={s.faixaRotulo}>
            {ROTULO_FAIXA[faixaDeDominio(estado?.dominio ?? null)]}
            {estado && (estado.acertos > 0 || estado.erros > 0)
              ? ` · ${estado.acertos} acertos, ${estado.erros} erros`
              : ''}
          </span>
        </div>
      </header>

      {modoRevisao && (
        <div className={s.modoRevisao}>
          <strong>Modo revisão.</strong> Comece pela revisão rápida e vá direto para a
          questão. Se travar, volte aos conceitos.
          <div className={s.modoAcoes}>
            <a href="#b9" className={s.atalho}>
              Ir para a revisão rápida
            </a>
            <a href="#b7" className={s.atalho}>
              Ir para a questão
            </a>
          </div>
        </div>
      )}

      {/*
        Navegação entre blocos: a página de um assunto é longa de propósito, e
        sem isto o aluno que só quer praticar precisa rolar por seis blocos.
      */}
      <nav className={s.blocoNav} aria-label="Blocos deste assunto">
        {BLOCOS_NAV.map((b) => (
          <a key={b.id} href={`#${b.id}`} className={s.blocoLink}>
            {b.rotulo}
          </a>
        ))}
      </nav>

      <Destaque variante="nota" titulo={`Por que este assunto é ${assunto.prioridade}`}>
        <p>{assunto.justificativa}</p>
      </Destaque>

      {pendentes.length > 0 && (
        <div style={{ marginTop: 'var(--s-4)' }}>
          <Destaque variante="atencao" titulo="Pré-requisito pendente">
            <p>
              Este assunto fica muito mais fácil depois de{' '}
              {pendentes.map((id, i) => {
                const pre = ASSUNTO_POR_ID.get(id);
                return (
                  <span key={id}>
                    {i > 0 && ', '}
                    <Link to={`/assunto/${id}`}>{pre?.titulo ?? id}</Link>
                  </span>
                );
              })}
              . Você pode continuar aqui, mas vale considerar a ordem.
            </p>
          </Destaque>
        </div>
      )}

      {/* 1 --------------------------------------------------------------- */}
      <section className={s.bloco} aria-labelledby="b1">
        <span className={s.blocoNumero}>1 · O essencial</span>
        <h2 id="b1" className={s.blocoTitulo}>
          O que você precisa saber
        </h2>
        <ul className={s.chaves}>
          {c.precisaSaber.map((item, i) => (
            <li key={i} className={s.chave}>
              <span className={s.chaveMarca} aria-hidden="true" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* 2 --------------------------------------------------------------- */}
      <section className={s.bloco} aria-labelledby="b2">
        <span className={s.blocoNumero}>2 · A ideia</span>
        <h2 id="b2" className={s.blocoTitulo}>
          Explicação simples
        </h2>
        <div className="prose">
          <Blocos blocos={c.explicacao} />
        </div>
      </section>

      {/* 3 --------------------------------------------------------------- */}
      <section className={s.bloco} aria-labelledby="b3">
        <span className={s.blocoNumero}>3 · Referência</span>
        <h2 id="b3" className={s.blocoTitulo}>
          Conceitos fundamentais
        </h2>
        <div className={s.conceitos}>
          {c.conceitos.map((conceito) => (
            <div key={conceito.termo} className={s.conceito}>
              <span className={s.conceitoTermo}>{conceito.termo}</span>
              <p>{conceito.definicao}</p>
              {conceito.formula && (
                <div className={s.conceitoFormula}>
                  <Formula>{conceito.formula}</Formula>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* 4 --------------------------------------------------------------- */}
      <section className={s.bloco} aria-labelledby="b4">
        <span className={s.blocoNumero}>4 · Na prática</span>
        <h2 id="b4" className={s.blocoTitulo}>
          Exemplo resolvido
        </h2>
        <div className={s.exemplo}>
          <p className={s.exemploEnunciado}>{c.exemplo.enunciado}</p>
          <ol className={s.passos}>
            {c.exemplo.passos.map((passo, i) => (
              <li key={i} className={s.passo}>
                <div>
                  <span className={s.passoTitulo}>{passo.titulo}</span>
                  <span>{passo.texto}</span>
                </div>
              </li>
            ))}
          </ol>
          <p className={s.exemploConclusao}>{c.exemplo.conclusao}</p>
        </div>
      </section>

      {/* 5 --------------------------------------------------------------- */}
      <section className={s.bloco} aria-labelledby="b5">
        <span className={s.blocoNumero}>5 · Reconhecimento</span>
        <h2 id="b5" className={s.blocoTitulo}>
          Como isso aparece no ENEM
        </h2>
        <p className={s.marcaAnalise}>
          Análise pedagógica deste site, não texto oficial do INEP.
        </p>
        <p>{c.noEnem.texto}</p>
        <div className={s.eixos}>
          {c.noEnem.eixos.map((e) => (
            <Tag key={e}>Eixo: {ROTULO_EIXO[e]}</Tag>
          ))}
        </div>
        <div className={s.sinais}>
          <p className={s.sinaisTitulo}>Sinais de que a questão é deste assunto</p>
          <ul>
            {c.noEnem.sinais.map((sinal, i) => (
              <li key={i}>{sinal}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* 6 --------------------------------------------------------------- */}
      <section className={s.bloco} aria-labelledby="b6">
        <span className={s.blocoNumero}>6 · Armadilhas</span>
        <h2 id="b6" className={s.blocoTitulo}>
          Erros e pegadinhas comuns
        </h2>
        <ul className={s.erros}>
          {c.erros.map((erro, i) => (
            <li key={i} className={s.erro}>
              <p className={s.erroTitulo}>{erro.erro}</p>
              <p>{erro.porque}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* 7 e 8 ------------------------------------------------------------ */}
      <section className={s.bloco} aria-labelledby="b7">
        <span className={s.blocoNumero}>7 · Teste</span>
        <h2 id="b7" className={s.blocoTitulo}>
          Questão prática
        </h2>
        <p className="subtitulo" style={{ marginBottom: 'var(--s-4)' }}>
          Ao responder, você recebe a correção explicada — o que estava sendo cobrado, por que
          a sua alternativa não funciona e que tipo de erro foi.
        </p>
        <div className={s.questoes}>
          {questoes.map((q) => q && <PlayerQuestao key={q.id} questao={q} />)}
        </div>
      </section>

      {/* 9 --------------------------------------------------------------- */}
      <section className={s.bloco} aria-labelledby="b9">
        <span className={s.blocoNumero}>9 · Para levar</span>
        <h2 id="b9" className={s.blocoTitulo}>
          Revisão rápida
        </h2>
        <div className={s.revisao}>
          <ul className={s.revisaoLista}>
            {c.revisaoRapida.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <div className={s.proximo}>
        <div className="acoes" style={{ marginTop: 0 }}>
          {!marcado && !estado?.lido ? (
            <Botao onClick={concluir}>Marcar como estudado</Botao>
          ) : (
            <Botao variante="secundario" onClick={concluir}>
              {marcado ? 'Marcado — revisão agendada' : 'Estudei de novo hoje'}
            </Botao>
          )}
          <BotaoLink to={`/questoes?assunto=${assunto.id}`} variante="secundario">
            Praticar mais
          </BotaoLink>
          {proximo && (
            <BotaoLink to={`/assunto/${proximo.assunto.id}`} variante="secundario">
              Próximo: {proximo.assunto.titulo}
            </BotaoLink>
          )}
        </div>
        {(marcado || estado?.lido) && estado?.proximaRevisao && (
          <p className="secao-meta" style={{ marginTop: 'var(--s-4)' }}>
            Próxima revisão agendada para {formatarData(estado.proximaRevisao)}
            {estado.revisaoFinal ? ' (revisão final antes da prova)' : ''}.
          </p>
        )}
      </div>
    </div>
  );
}

function formatarData(dia: string): string {
  const [ano, mes, d] = dia.split('-');
  return `${d}/${mes}/${ano}`;
}
