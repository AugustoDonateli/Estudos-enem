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
import { habilidade } from '@/content/matriz';
import {
  Acordeao,
  BarraDominio,
  Blocos,
  Botao,
  BotaoLink,
  Destaque,
  Formula,
  Tag,
  TagArea,
  TagPrioridade,
  Trilha,
  Vazio,
} from '@/design/Primitivos';
import { PlayerQuestao } from '@/features/questao/PlayerQuestao';
import { Tarja } from '@/design/Caderno';
import { definirTitulo } from '@/lib/titulo';
import s from './Assunto.module.css';

const BLOCOS_NAV = [
  { id: 'b1', num: '1', rotulo: 'O essencial' },
  { id: 'b2', num: '2', rotulo: 'Explicação' },
  { id: 'b3', num: '3', rotulo: 'Conceitos' },
  { id: 'b4', num: '4', rotulo: 'Exemplo' },
  { id: 'b5', num: '5', rotulo: 'No ENEM' },
  { id: 'b6', num: '6', rotulo: 'Erros' },
  { id: 'b7', num: '7', rotulo: 'Questões' },
  { id: 'b9', num: '9', rotulo: 'Revisão' },
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
          <p>
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
  const habilidades = assunto.habilidades
    .map((codigo) => habilidade(assunto.areaId, codigo))
    .filter((h): h is NonNullable<typeof h> => Boolean(h));
  const questoes = c.questoes.map((id) => QUESTAO_POR_ID.get(id)).filter(Boolean);

  function concluir() {
    marcarLido(assunto!.id);
    setMarcado(true);
  }

  return (
    <div className="page" data-area={area.id}>
      {/* Cabeçalho do assunto ---------------------------------------- */}
      <section className={s.cabecalho}>
        <div className={`container ${s.cabecalhoInterno} entrada`}>
          {/* Marginália da página: o código identifica este assunto no site.
              É a mesma posição que a tarja ocupa no caderno impresso. */}
          <Tarja valor={assunto.id} altura={20} className={s.tarjaTopo} />
          <Trilha
            itens={[
              { rotulo: 'Áreas', para: '/areas' },
              { rotulo: area.nomeCurto, para: `/area/${area.id}` },
              { rotulo: assunto.titulo },
            ]}
          />
          <div className={s.metaTopo}>
            <TagArea>{area.nomeCurto}</TagArea>
            <TagPrioridade prioridade={assunto.prioridade} />
            <Tag>{assunto.minutosEstimados} min</Tag>
            {assunto.eixos.map((e) => (
              <Tag key={e}>{ROTULO_EIXO[e]}</Tag>
            ))}
          </div>
          <div className={s.tituloBloco}>
            <h1>{assunto.titulo}</h1>
          </div>
          <p className={s.resumo}>{assunto.resumo}</p>
          <div className={s.progressoTopo}>
            <BarraDominio dominio={estado?.dominio ?? null} rotulo={assunto.titulo} />
            <span className={s.faixaRotulo}>
              {ROTULO_FAIXA[faixaDeDominio(estado?.dominio ?? null)]}
              {estado && (estado.acertos > 0 || estado.erros > 0)
                ? ` · ${estado.acertos} acertos, ${estado.erros} erros`
                : ''}
            </span>
          </div>
        </div>
      </section>

      <div className="container">
        <div className={s.layout}>
          {/* Coluna lateral ------------------------------------------ */}
          <aside className={s.lateral}>
            <nav aria-label="Blocos deste assunto">
              <p className={s.lateralTitulo}>Nesta página</p>
              <ul className={s.lateralLista}>
                {BLOCOS_NAV.map((b) => (
                  <li key={b.id}>
                    <a href={`#${b.id}`} className={s.lateralLink}>
                      <span className={s.lateralNum}>{b.num}</span>
                      {b.rotulo}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </aside>

          {/* Conteúdo ------------------------------------------------- */}
          <div>
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

            <nav className={s.navMobile} aria-label="Blocos deste assunto">
              {BLOCOS_NAV.map((b) => (
                <a key={b.id} href={`#${b.id}`} className={s.navMobileLink}>
                  {b.num}. {b.rotulo}
                </a>
              ))}
            </nav>

            <Destaque variante="nota" titulo={`Por que este assunto é ${assunto.prioridade}`}>
              <p>{assunto.justificativa}</p>
            </Destaque>

            {pendentes.length > 0 && (
              <div style={{ marginTop: 'var(--e-2x)' }}>
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

            {/* 1 ------------------------------------------------------ */}
            <section className={s.bloco} style={{ paddingTop: 'var(--e-6x)' }} aria-labelledby="b1">
              <div className={s.blocoCabecalho}>
                <span className={s.blocoNumero} aria-hidden="true">1</span>
                <div className={s.blocoTexto}>
                  <span className={s.blocoRotulo}>O essencial</span>
                  <h2 id="b1" className={s.blocoTitulo}>O que você precisa saber</h2>
                </div>
              </div>
              <ul className={s.chaves}>
                {c.precisaSaber.map((item, i) => (
                  <li key={i} className={s.chave}>
                    <span className={s.chaveMarca} aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* 2 ------------------------------------------------------ */}
            <section className={s.bloco} aria-labelledby="b2">
              <div className={s.blocoCabecalho}>
                <span className={s.blocoNumero} aria-hidden="true">2</span>
                <div className={s.blocoTexto}>
                  <span className={s.blocoRotulo}>A ideia</span>
                  <h2 id="b2" className={s.blocoTitulo}>Explicação simples</h2>
                </div>
              </div>
              <div className="prose">
                <Blocos blocos={c.explicacao} />
              </div>
            </section>

            {/* 3 ------------------------------------------------------ */}
            <section className={s.bloco} aria-labelledby="b3">
              <div className={s.blocoCabecalho}>
                <span className={s.blocoNumero} aria-hidden="true">3</span>
                <div className={s.blocoTexto}>
                  <span className={s.blocoRotulo}>Referência</span>
                  <h2 id="b3" className={s.blocoTitulo}>Conceitos fundamentais</h2>
                </div>
              </div>
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

            {/* 4 ------------------------------------------------------ */}
            <section className={s.bloco} aria-labelledby="b4">
              <div className={s.blocoCabecalho}>
                <span className={s.blocoNumero} aria-hidden="true">4</span>
                <div className={s.blocoTexto}>
                  <span className={s.blocoRotulo}>Na prática</span>
                  <h2 id="b4" className={s.blocoTitulo}>Exemplo resolvido</h2>
                </div>
              </div>
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

            {/* 5 ------------------------------------------------------ */}
            <section className={s.bloco} aria-labelledby="b5">
              <div className={s.blocoCabecalho}>
                <span className={s.blocoNumero} aria-hidden="true">5</span>
                <div className={s.blocoTexto}>
                  <span className={s.blocoRotulo}>Reconhecimento</span>
                  <h2 id="b5" className={s.blocoTitulo}>Como isso aparece no ENEM</h2>
                </div>
              </div>
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

              {/*
                As habilidades abaixo são texto oficial do INEP, reproduzido sem
                reescrita. A associação entre assunto e habilidade é deste site,
                e o validador confere que todo código citado existe mesmo.
              */}
              {habilidades.length > 0 && (
                <div className={s.habilidades}>
                  <span className={s.rotuloOficial}>
                    Oficial · Matriz de Referência do ENEM (INEP)
                  </span>
                  {/* Recolhido por padrão: é texto de consulta, e deixá-lo
                      sempre aberto empurrava as questões para longe. O rótulo
                      de procedência fica visível mesmo fechado. */}
                  <Acordeao
                    titulo={`Habilidades da matriz que este assunto atende (${habilidades.length})`}
                  >
                    <ul className={s.listaHabilidades}>
                      {habilidades.map((h) => (
                        <li key={h.codigo}>
                          <strong>{h.codigo}</strong> — {h.texto}
                        </li>
                      ))}
                    </ul>
                  </Acordeao>
                </div>
              )}
            </section>

            {/* 6 ------------------------------------------------------ */}
            <section className={s.bloco} aria-labelledby="b6">
              <div className={s.blocoCabecalho}>
                <span className={s.blocoNumero} aria-hidden="true">6</span>
                <div className={s.blocoTexto}>
                  <span className={s.blocoRotulo}>Armadilhas</span>
                  <h2 id="b6" className={s.blocoTitulo}>Erros e pegadinhas comuns</h2>
                </div>
              </div>
              <ul className={s.erros}>
                {c.erros.map((erro, i) => (
                  <li key={i} className={s.erro}>
                    <svg
                      className={s.erroIcone}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      aria-hidden="true"
                    >
                      <circle cx="12" cy="12" r="9" />
                      <path d="M15 9l-6 6M9 9l6 6" />
                    </svg>
                    <div>
                      <p className={s.erroTitulo}>{erro.erro}</p>
                      <p>{erro.porque}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </section>

            {/* 7 e 8 --------------------------------------------------- */}
            <section className={s.bloco} aria-labelledby="b7">
              <div className={s.blocoCabecalho}>
                <span className={s.blocoNumero} aria-hidden="true">7</span>
                <div className={s.blocoTexto}>
                  <span className={s.blocoRotulo}>Teste</span>
                  <h2 id="b7" className={s.blocoTitulo}>Questão prática</h2>
                </div>
              </div>
              <p className="subtitulo" style={{ marginBottom: 'var(--e-3x)' }}>
                Ao responder, você recebe a correção explicada — o que estava sendo cobrado, por
                que a sua alternativa não funciona e que tipo de erro foi.
              </p>
              <div className={s.questoes}>
                {questoes.map((q) => q && <PlayerQuestao key={q.id} questao={q} />)}
              </div>
            </section>

            {/* 9 ------------------------------------------------------ */}
            <section className={s.bloco} aria-labelledby="b9">
              <div className={s.blocoCabecalho}>
                <span className={s.blocoNumero} aria-hidden="true">9</span>
                <div className={s.blocoTexto}>
                  <span className={s.blocoRotulo}>Para levar</span>
                  <h2 id="b9" className={s.blocoTitulo}>Revisão rápida</h2>
                </div>
              </div>
              <div className={s.revisao}>
                <p className={s.revisaoTopo}>Cartão de 30 segundos</p>
                <ul className={s.revisaoLista}>
                  {c.revisaoRapida.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
              <div className="acoes">
                <BotaoLink to={`/explicar/${assunto.id}`} variante="secundario">
                  Explicar este assunto de memória
                </BotaoLink>
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
                  <BotaoLink to={`/assunto/${proximo.assunto.id}`} variante="terciario">
                    Próximo: {proximo.assunto.titulo}
                  </BotaoLink>
                )}
              </div>
              {(marcado || estado?.lido) && estado?.proximaRevisao && (
                <p className="secao-meta" style={{ marginTop: 'var(--e-3x)' }}>
                  Próxima revisão agendada para {formatarData(estado.proximaRevisao)}
                  {estado.revisaoFinal ? ' (revisão final antes da prova)' : ''}.
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function formatarData(dia: string): string {
  const [ano, mes, d] = dia.split('-');
  return `${d}/${mes}/${ano}`;
}
