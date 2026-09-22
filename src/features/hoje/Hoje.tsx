import { useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { AREAS } from '@/content/areas';
import { CATALOGO, SECOES_REDACAO_META, assuntosDaArea } from '@/content/indice';
import { useProgresso } from '@/lib/progresso';
import { gerarPlano, type ItemPlano } from '@/engine/planoDiario';
import { analisarErros, EXPLICACAO_TIPO_ERRO } from '@/engine/erros';
import { revisoesVencidas } from '@/engine/revisao';
import { diasComAtividade } from '@/engine/constancia';
import { DESCRICAO_FASE, PROVA_DIA_1, diasAteProva, hoje as hojeISO } from '@/engine/datas';
import { faixaDeDominio, ROTULO_FAIXA } from '@/engine/dominio';
import { BarraDominio, BotaoLink, Vazio } from '@/design/Primitivos';
import { HeroEscuro } from '@/design/Pagina';
import { ContagemRegressiva } from '@/design/Contagem';
import { FaixaConstancia } from '@/design/Constancia';
import { definirTitulo } from '@/lib/titulo';
import s from './Hoje.module.css';

const ROTULO_TIPO: Record<ItemPlano['tipo'], string> = {
  revisao: 'Revisão',
  erro: 'Refazer',
  novo: 'Estudar',
  redacao: 'Redação',
  pratica: 'Praticar',
};

export function Hoje() {
  const { progresso, concluirItemPlano, atualizarConfig } = useProgresso();
  const dia = hojeISO();

  useEffect(() => {
    definirTitulo(
      'Plano de hoje',
      'O que estudar hoje, com tempo estimado e o motivo de cada item.',
    );
  }, []);

  const plano = useMemo(
    () =>
      gerarPlano({
        assuntos: CATALOGO,
        progresso,
        dia,
        secoesRedacao: SECOES_REDACAO_META.map((sec) => ({
          id: sec.id,
          titulo: sec.titulo,
          minutosEstimados: sec.minutosEstimados,
        })),
      }),
    [progresso, dia],
  );

  const padrao = useMemo(() => analisarErros(progresso.respostas), [progresso.respostas]);
  const pendentes = useMemo(
    () => revisoesVencidas(progresso.assuntos, dia),
    [progresso.assuntos, dia],
  );
  const temAtividade = useMemo(() => diasComAtividade(progresso).size > 0, [progresso]);

  const dias = diasAteProva(dia);
  const fase = DESCRICAO_FASE[plano.fase];
  const comecou = progresso.config.diagnosticoFeito || progresso.respostas.length > 0;
  const restantes = plano.itens.filter((i) => !i.concluido);

  return (
    <div className="page">
      <HeroEscuro
        rotulo={`Fase de ${fase.rotulo.toLowerCase()}`}
        titulo="Plano de hoje"
        descricao={
          comecou
            ? 'Cada item abaixo diz por que está aí. Comece pelo primeiro.'
            : 'Faça o diagnóstico rápido e o plano passa a priorizar o que você realmente não domina.'
        }
        aside={
          <ContagemRegressiva
            ate={PROVA_DIA_1}
            rotulo={dias === 1 ? 'dia até a prova' : 'dias até a prova'}
          />
        }
        abaixo={
          /* Os três números do dia numa linha só. Depois da contagem em
             escala de cartaz, repetir o formato de métrica grande faria a
             faixa inteira gritar — e aí nada grita. */
          <p className={s.resumoDia}>
            <span>
              <strong>{restantes.length}</strong>{' '}
              {restantes.length === 1 ? 'item no plano' : 'itens no plano'}
            </span>
            <span aria-hidden="true" className={s.resumoBarra} />
            <span>
              <strong>{plano.minutosPlanejados}</strong> min planejados
            </span>
            <span aria-hidden="true" className={s.resumoBarra} />
            <span>
              <strong>{pendentes.length}</strong>{' '}
              {pendentes.length === 1 ? 'revisão vencida' : 'revisões vencidas'}
            </span>
          </p>
        }
      />

      <div className="container">
        <section className="secao" aria-label="Itens do plano de hoje">
          <div className={s.barraOrcamento}>
            <span className={s.orcamentoRotulo}>Quanto tempo você tem hoje?</span>
            <div className={s.orcamento} role="group" aria-label="Tempo disponível hoje">
              {([30, 60, 90] as const).map((m) => (
                <button
                  key={m}
                  type="button"
                  className={`${s.orcamentoBotao} ${
                    progresso.config.orcamentoDiario === m ? s.orcamentoAtivo : ''
                  }`}
                  aria-pressed={progresso.config.orcamentoDiario === m}
                  onClick={() => atualizarConfig({ orcamentoDiario: m })}
                >
                  {m} min
                </button>
              ))}
            </div>
          </div>

          {!comecou && (
            <div className={s.convite}>
              <div>
                <p className={s.conviteTitulo}>Ainda não sei o que você já sabe</p>
                <p className={s.conviteTexto}>
                  Sem o diagnóstico, o plano abaixo é um chute razoável. São cerca de 2 minutos,
                  e depois dele a fila passa a priorizar o que você realmente não domina.
                </p>
              </div>
              <div className={s.conviteAcoes}>
                <BotaoLink to="/diagnostico">Fazer o diagnóstico</BotaoLink>
                <BotaoLink to="/areas" variante="secundario">
                  Escolher sozinho
                </BotaoLink>
              </div>
            </div>
          )}

          {plano.itens.length === 0 ? (
            <Vazio
              titulo="Nada planejado para hoje"
              acao={<BotaoLink to="/areas">Escolher um assunto</BotaoLink>}
            >
              <p>
                Você já cobriu o que estava na fila. Escolher um assunto novo por conta própria
                é uma boa alternativa.
              </p>
            </Vazio>
          ) : (
            <>
              <ul className={s.plano}>
                {plano.itens.map((item, i) => (
                  <li
                    key={item.id}
                    className={`${s.item} ${i === 0 && !item.concluido ? s.itemPrincipal : ''} ${
                      item.concluido ? s.itemConcluido : ''
                    }`}
                    style={{ animationDelay: `${Math.min(i, 5) * 50}ms` }}
                  >
                    <button
                      type="button"
                      className={`${s.marcar} ${item.concluido ? s.marcarFeito : ''}`}
                      onClick={() => concluirItemPlano(item.id)}
                      aria-pressed={item.concluido}
                      aria-label={
                        item.concluido
                          ? `Desmarcar ${item.titulo} como concluído`
                          : `Marcar ${item.titulo} como concluído`
                      }
                    >
                      <span className={s.marcarCirculo} aria-hidden="true">
                        {item.concluido && (
                          <svg viewBox="0 0 16 16" width="14" height="14">
                            <path
                              d="M3 8.5l3.5 3.5L13 5"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2.4"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        )}
                      </span>
                    </button>

                    <div className={s.corpo}>
                      <div className={s.itemTopo}>
                        <span className={s.itemTipo}>{ROTULO_TIPO[item.tipo]}</span>
                        {item.subtitulo && (
                          <span className={s.itemSubtitulo}>{item.subtitulo}</span>
                        )}
                      </div>
                      <Link to={item.href} className={s.itemTitulo}>
                        {item.titulo}
                      </Link>
                      <p className={s.motivo}>{item.motivo}</p>
                    </div>

                    <span className={s.minutos}>{item.minutos} min</span>
                  </li>
                ))}
              </ul>

              <p className={s.resumoPlano}>
                <span>
                  {restantes.length > 0
                    ? `${plano.minutosPlanejados} de ${plano.orcamento} min planejados · ${restantes.length} ${
                        restantes.length === 1 ? 'item restante' : 'itens restantes'
                      }`
                    : 'Tudo concluído hoje. Bom trabalho.'}
                </span>
                {plano.revisoesAdiadas > 0 && (
                  <span>
                    {plano.revisoesAdiadas}{' '}
                    {plano.revisoesAdiadas === 1 ? 'revisão adiada' : 'revisões adiadas'} para
                    caber no seu tempo
                  </span>
                )}
              </p>

              <p className={s.faseTexto}>{fase.explicacao}</p>
            </>
          )}
        </section>

        {temAtividade && (
          <section className="secao" aria-labelledby="constancia-titulo">
            <div className="secao-cabecalho">
              <h2 id="constancia-titulo" className="secao-titulo">
                Constância
              </h2>
              <Link to="/progresso" className="secao-meta">
                Ver detalhes
              </Link>
            </div>
            <FaixaConstancia progresso={progresso} referencia={dia} />
          </section>
        )}

        {pendentes.length > 0 && (
          <section className="secao" aria-labelledby="revisao-titulo">
            <div className="secao-cabecalho">
              <h2 id="revisao-titulo" className="secao-titulo">
                Revisão pendente
              </h2>
              <span className="secao-meta">
                {pendentes.length} {pendentes.length === 1 ? 'assunto' : 'assuntos'}
              </span>
            </div>
            <p className="subtitulo">
              Revisar no dia certo é o que impede que o estudo desta semana evapore em duas.
            </p>
            <div className="acoes">
              <BotaoLink to="/revisao">Ver a fila de revisão</BotaoLink>
            </div>
          </section>
        )}

        {padrao.frase && padrao.dominante && (
          <section className="secao" aria-labelledby="erros-titulo">
            <div className="secao-cabecalho">
              <h2 id="erros-titulo" className="secao-titulo">
                Padrão nos seus erros
              </h2>
            </div>
            <div className={s.diagnostico}>
              <p className={s.diagnosticoFrase}>{padrao.frase}</p>
              <p className={s.diagnosticoTexto}>{EXPLICACAO_TIPO_ERRO[padrao.dominante]}</p>
            </div>
          </section>
        )}

        <section className="secao" aria-labelledby="dominio-titulo">
          <div className="secao-cabecalho">
            <h2 id="dominio-titulo" className="secao-titulo">
              Seu domínio por área
            </h2>
            <Link to="/progresso" className="secao-meta">
              Ver detalhes
            </Link>
          </div>
          <div className={s.areas}>
            {AREAS.filter((a) => a.id !== 'redacao').map((area) => {
              const assuntos = assuntosDaArea(area.id);
              const avaliados = assuntos
                .map((a) => progresso.assuntos[a.id]?.dominio)
                .filter((d): d is number => typeof d === 'number');
              const media =
                avaliados.length > 0
                  ? avaliados.reduce((acc, d) => acc + d, 0) / assuntos.length
                  : null;
              return (
                <Link
                  key={area.id}
                  to={`/area/${area.id}`}
                  className={s.areaLinha}
                  data-area={area.id}
                >
                  <span className={s.areaMarca} aria-hidden="true" />
                  <span className={s.areaCorpo}>
                    <span className={s.areaTopo}>
                      <span className={s.areaNome}>{area.nomeCurto}</span>
                      <span className={s.areaFaixa}>
                        {media === null
                          ? 'Não avaliado'
                          : `${ROTULO_FAIXA[faixaDeDominio(media)]} · ${avaliados.length}/${assuntos.length} assuntos`}
                      </span>
                    </span>
                    <BarraDominio dominio={media} rotulo={area.nomeCurto} />
                  </span>
                </Link>
              );
            })}
          </div>
        </section>

        {comecou && (
          <div className="acoes">
            <BotaoLink to="/diagnostico" variante="secundario">
              Refazer diagnóstico
            </BotaoLink>
          </div>
        )}
      </div>
    </div>
  );
}
