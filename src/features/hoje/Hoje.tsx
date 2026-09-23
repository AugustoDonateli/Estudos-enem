import { useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { AREAS } from '@/content/areas';
import { CATALOGO, SECOES_REDACAO_META, assuntosDaArea } from '@/content/indice';
import { useProgresso } from '@/lib/progresso';
import { gerarPlano, type ItemPlano } from '@/engine/planoDiario';
import { analisarErros, EXPLICACAO_TIPO_ERRO } from '@/engine/erros';
import { revisoesVencidas } from '@/engine/revisao';
import { diasComAtividade } from '@/engine/constancia';
import { DESCRICAO_FASE, PROVA_DIA_1, PROVA_DIA_2, diasAteProva, hoje as hojeISO } from '@/engine/datas';
import { faixaDeDominio, ROTULO_FAIXA } from '@/engine/dominio';
import { BarraDominio, BotaoLink, Vazio } from '@/design/Primitivos';
import { HeroEscuro } from '@/design/Pagina';
import { PainelPreparacao } from '@/design/PainelPreparacao';
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

/* Os cinco tipos de item viram três gestos de estudo. A contagem por gesto
   diz o que a sessão vai exigir — ler, resolver ou recuperar — que é uma
   informação diferente de "4 itens". */
const GESTO: Record<ItemPlano['tipo'], 'estudar' | 'praticar' | 'revisar'> = {
  novo: 'estudar',
  redacao: 'estudar',
  pratica: 'praticar',
  erro: 'praticar',
  revisao: 'revisar',
};

const ROTULO_GESTO = {
  estudar: { um: 'estudo', varios: 'estudos' },
  praticar: { um: 'prática', varios: 'práticas' },
  revisar: { um: 'revisão', varios: 'revisões' },
} as const;

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
  const proximo = restantes[0];

  const gestos = useMemo(() => {
    const conta = { estudar: 0, praticar: 0, revisar: 0 };
    for (const item of restantes) conta[GESTO[item.tipo]] += 1;
    return conta;
  }, [restantes]);

  // Domínio por área, incluindo Redação — que não tem domínio calculado e é
  // medida pelo que de fato existe: seções do módulo lidas.
  const areas = useMemo(() => {
    const lidas = new Set(progresso.redacao.secoesLidas);
    return AREAS.map((area) => {
      if (area.id === 'redacao') {
        const total = SECOES_REDACAO_META.length;
        const feitas = SECOES_REDACAO_META.filter((sec) => lidas.has(sec.id)).length;
        return {
          id: area.id,
          nome: area.nomeCurto,
          dominio: feitas === 0 ? null : (feitas / total) * 100,
          detalhe: `${feitas}/${total} seções lidas`,
          para: '/redacao',
        };
      }
      const assuntos = assuntosDaArea(area.id);
      const avaliados = assuntos
        .map((a) => progresso.assuntos[a.id]?.dominio)
        .filter((d): d is number => typeof d === 'number');
      const media =
        avaliados.length > 0
          ? avaliados.reduce((acc, d) => acc + d, 0) / assuntos.length
          : null;
      return {
        id: area.id,
        nome: area.nomeCurto,
        dominio: media,
        detalhe:
          media === null
            ? 'Não avaliado'
            : `${ROTULO_FAIXA[faixaDeDominio(media)]} · ${avaliados.length}/${assuntos.length} assuntos`,
        para: `/area/${area.id}`,
      };
    });
  }, [progresso]);

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
        aside={<PainelPreparacao de={dia} />}
        acao={
          /* O hero respondia "quantos dias faltam" e deixava metade da faixa
             vazia. Esta é a outra pergunta de quem abre o site: por onde
             começo agora. Vem do mesmo plano da seção abaixo — não é um
             segundo plano, é o primeiro item dele em tamanho de chamada. */
          <>
            {proximo && (
            <Link to={proximo.href} className={s.proximo}>
              <span className={s.proximoRotulo}>Comece por</span>
              <span className={s.proximoTitulo}>{proximo.titulo}</span>
              <span className={s.proximoMeta}>
                {ROTULO_TIPO[proximo.tipo]} · {proximo.minutos} min
                <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
                  <path
                    d="M5 12h13M13 6l6 6-6 6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </Link>
            )}

            {/* Os três números do dia. Ficam aqui, e não numa faixa própria
                abaixo, porque pertencem ao mesmo assunto da chamada: o que
                este dia pede. */}
            <dl className={s.resumoDia}>
              <div>
                <dt>{restantes.length === 1 ? 'item no plano' : 'itens no plano'}</dt>
                <dd>{restantes.length}</dd>
              </div>
              <div>
                <dt>min planejados</dt>
                <dd>{plano.minutosPlanejados}</dd>
              </div>
              <div>
                <dt>{pendentes.length === 1 ? 'revisão vencida' : 'revisões vencidas'}</dt>
                <dd>{pendentes.length}</dd>
              </div>
            </dl>
          </>
        }
      />

      <div className="container">
        {/* 1. O que fazer hoje ------------------------------------------ */}
        <section className="secao" aria-labelledby="plano-titulo">
          <div className="secao-cabecalho">
            <h2 id="plano-titulo" className="secao-titulo">
              Seu plano de hoje
            </h2>
            <span className="secao-meta">
              {plano.minutosPlanejados} de {plano.orcamento} min
            </span>
          </div>

          <div className={s.barraOrcamento}>
            <div className={s.gestos}>
              {(['estudar', 'praticar', 'revisar'] as const).map((g) =>
                gestos[g] > 0 ? (
                  <span key={g} className={s.gesto} data-gesto={g}>
                    <strong>{gestos[g]}</strong>{' '}
                    {gestos[g] === 1 ? ROTULO_GESTO[g].um : ROTULO_GESTO[g].varios}
                  </span>
                ) : null,
              )}
              {restantes.length === 0 && (
                <span className={s.gesto}>Tudo concluído hoje</span>
              )}
            </div>

            <div className={s.orcamentoCampo}>
              <span className={s.orcamentoRotulo}>Tempo de hoje</span>
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
              {/* Sequência, não pilha: a trilha vertical liga um item ao
                  seguinte e o número diz a ordem sugerida. O plano tem ordem
                  — o desenho antes não mostrava isso. */}
              <ol className={s.plano}>
                {plano.itens.map((item, i) => (
                  <li
                    key={item.id}
                    className={`${s.item} ${i === 0 && !item.concluido ? s.itemPrincipal : ''} ${
                      item.concluido ? s.itemConcluido : ''
                    }`}
                    style={{ animationDelay: `${Math.min(i, 5) * 50}ms` }}
                  >
                    <div className={s.trilha} aria-hidden="true">
                      <span className={s.trilhaOrdem}>{i + 1}</span>
                      <span className={s.trilhaLinha} />
                    </div>

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
                      </span>
                    </button>

                    <div className={s.corpo}>
                      <div className={s.itemTopo}>
                        <span className={s.itemTipo} data-gesto={GESTO[item.tipo]}>
                          {ROTULO_TIPO[item.tipo]}
                        </span>
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
              </ol>

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

        {/* 2. Onde estou ------------------------------------------------ */}
        <section className="secao" aria-labelledby="dominio-titulo">
          <div className="secao-cabecalho">
            <h2 id="dominio-titulo" className="secao-titulo">
              Sua preparação
            </h2>
            <span className="secao-meta">
              {comecou && (
                <>
                  <Link to="/diagnostico">Refazer diagnóstico</Link>
                  <span aria-hidden="true"> · </span>
                </>
              )}
              <Link to="/progresso">Ver detalhes</Link>
            </span>
          </div>
          <div className={s.areas}>
            {areas.map((area, i) => (
              <Link
                key={area.id}
                to={area.para}
                className={s.areaLinha}
                data-area={area.id}
                style={{ animationDelay: `${i * 60}ms` }}
              >
                <span className={s.areaMarca} aria-hidden="true" />
                <span className={s.areaCorpo}>
                  <span className={s.areaTopo}>
                    <span className={s.areaNome}>{area.nome}</span>
                    <span className={s.areaFaixa}>{area.detalhe}</span>
                  </span>
                  <BarraDominio dominio={area.dominio} rotulo={area.nome} />
                </span>
              </Link>
            ))}
          </div>
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
          <Link to="/revisao" className={s.aviso}>
            <span className={s.avisoMarca} aria-hidden="true" />
            <span className={s.avisoTexto}>
              <strong>
                {pendentes.length} {pendentes.length === 1 ? 'revisão venceu' : 'revisões venceram'}
              </strong>
              Revisar no dia certo é o que impede que o estudo desta semana evapore em duas.
            </span>
            <span className={s.avisoAcao}>Ver a fila</span>
          </Link>
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

        {/* 3. Para onde vai: as duas datas ------------------------------ */}
        <section className="secao" aria-labelledby="datas-titulo">
          <div className="secao-cabecalho">
            <h2 id="datas-titulo" className="secao-titulo">
              Os dois domingos
            </h2>
            <span className="secao-meta">
              {dias > 0 ? `faltam ${dias} dias para o 1º` : 'aplicação em curso'}
            </span>
          </div>
          <ol className={s.datas}>
            {([1, 2] as const).map((numero) => {
              const data = numero === 1 ? PROVA_DIA_1 : PROVA_DIA_2;
              const doDia = AREAS.filter((a) => a.dia === numero);
              const questoes = doDia.reduce((acc, a) => acc + (a.questoes ?? 0), 0);
              const [ano, mes, d] = data.split('-');
              return (
                <li key={numero} className={s.data}>
                  <div className={s.dataCabecalho}>
                    <span className={s.dataNumero}>{numero}º dia</span>
                    <span className={s.dataDia}>
                      {d}
                      <span className={s.dataMes}>/{mes}</span>
                    </span>
                    <span className={s.dataAno}>domingo · {ano}</span>
                  </div>
                  <ul className={s.dataAreas}>
                    {doDia.map((a) => (
                      <li key={a.id} data-area={a.id}>
                        <span className={s.dataAreaMarca} aria-hidden="true" />
                        {a.nomeCurto}
                        {a.questoes && <span className={s.dataAreaQtd}>{a.questoes} questões</span>}
                      </li>
                    ))}
                  </ul>
                  <p className={s.dataTotal}>
                    {questoes} questões objetivas
                    {numero === 1 ? ' e a redação · 5h30' : ' · 5h'}
                  </p>
                </li>
              );
            })}
          </ol>
        </section>

      </div>
    </div>
  );
}
