import { useEffect, useMemo } from 'react';
import { Link, useParams } from 'react-router-dom';
import { AREA_POR_ID } from '@/content/areas';
import { CATALOGO, assuntosDaArea, planejadosDaArea } from '@/content/indice';
import { useProgresso } from '@/lib/progresso';
import { priorizar, prerequisitosPendentes } from '@/engine/prioridade';
import { faixaDeDominio, ROTULO_FAIXA } from '@/engine/dominio';
import { hoje } from '@/engine/datas';
import { BarraDominio, TagPrioridade, Tag, Trilha, Vazio, BotaoLink } from '@/design/Primitivos';
import { HeroEscuro, Metricas } from '@/design/Pagina';
import { definirTitulo } from '@/lib/titulo';
import type { AreaId } from '@/content/tipos';
import s from './Areas.module.css';

export function Area() {
  const { areaId } = useParams<{ areaId: string }>();
  const { progresso } = useProgresso();
  const area = areaId ? AREA_POR_ID[areaId as AreaId] : undefined;

  useEffect(() => {
    if (area) definirTitulo(area.nomeCurto, area.descricao);
  }, [area]);

  const ordenados = useMemo(() => {
    if (!area) return [];
    const daArea = new Set(assuntosDaArea(area.id).map((a) => a.id));
    // A priorização considera o grafo inteiro (pré-requisitos cruzam áreas),
    // mas a lista exibida é filtrada para a área aberta.
    return priorizar(CATALOGO, progresso.assuntos, hoje()).filter((p) => daArea.has(p.assunto.id));
  }, [area, progresso.assuntos]);

  if (!area) {
    return (
      <div className="page container" style={{ paddingTop: 'var(--e-6x)' }}>
        <Vazio titulo="Área não encontrada" acao={<BotaoLink to="/areas">Ver todas as áreas</BotaoLink>} />
      </div>
    );
  }

  const planejados = planejadosDaArea(area.id);
  const avaliados = ordenados
    .map((p) => progresso.assuntos[p.assunto.id]?.dominio)
    .filter((d): d is number => typeof d === 'number');
  const media =
    avaliados.length > 0 ? avaliados.reduce((a, d) => a + d, 0) / ordenados.length : null;
  const estudados = ordenados.filter((p) => progresso.assuntos[p.assunto.id]?.lido).length;

  return (
    <div className="page">
      <HeroEscuro
        areaId={area.id}
        rotulo={`${area.dia}º dia de prova${area.questoes ? ` · ${area.questoes} questões` : ''}`}
        titulo={area.nome}
        descricao={area.descricao}
        aside={
          <Metricas
            escuro
            itens={[
              { numero: ordenados.length, rotulo: 'assuntos escritos' },
              { numero: estudados, rotulo: 'já estudados' },
              { numero: media === null ? '—' : ROTULO_FAIXA[faixaDeDominio(media)], rotulo: 'domínio na área' },
              { numero: planejados.length, rotulo: 'mapeados a escrever' },
            ]}
          />
        }
      />

      <div className="container" data-area={area.id}>
        <div style={{ paddingTop: 'var(--e-4x)' }}>
          <Trilha itens={[{ rotulo: 'Áreas', para: '/areas' }, { rotulo: area.nomeCurto }]} />
        </div>

        <div className={s.comoCai} style={{ maxWidth: 'var(--largura-leitura)' }}>
          <span className={s.rotuloAnalise}>Análise · como essa prova cobra</span>
          {area.comoCai}
        </div>

        <section className="secao" aria-labelledby="assuntos-titulo">
          <div className="secao-cabecalho">
            <h2 id="assuntos-titulo" className="secao-titulo">
              Assuntos, na ordem recomendada para você
            </h2>
            <span className="secao-meta">
              A ordem considera prioridade, seu domínio e pré-requisitos
            </span>
          </div>

          <ul className={s.assuntos}>
            {ordenados.map(({ assunto, motivo }, i) => {
              const estado = progresso.assuntos[assunto.id];
              const pendentes = prerequisitosPendentes(assunto, progresso.assuntos);
              return (
                <li
                  key={assunto.id}
                  className={s.assunto}
                  style={{ animationDelay: `${Math.min(i, 8) * 40}ms` }}
                >
                  <Link to={`/assunto/${assunto.id}`} className={s.assuntoLink}>
                    <span className={s.ordem} aria-hidden="true">
                      {i + 1}
                    </span>
                    <span className={s.assuntoCorpo}>
                      <span className={s.assuntoTopo}>
                        <span className={s.assuntoTitulo}>{assunto.titulo}</span>
                        <TagPrioridade prioridade={assunto.prioridade} />
                        <Tag>{assunto.minutosEstimados} min</Tag>
                      </span>
                      <span className={s.assuntoResumo}>{assunto.resumo}</span>
                      <span className={s.assuntoRodape}>
                        <span className={s.barraAssunto}>
                          <BarraDominio dominio={estado?.dominio ?? null} rotulo={assunto.titulo} />
                        </span>
                        <span className={s.faixa}>
                          {ROTULO_FAIXA[faixaDeDominio(estado?.dominio ?? null)]}
                        </span>
                        <span className={pendentes.length > 0 ? s.aviso : s.faixa}>{motivo}</span>
                      </span>
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </section>

        {planejados.length > 0 && (
          <section className="secao" aria-labelledby="planejados-titulo">
            <div className="secao-cabecalho">
              <h2 id="planejados-titulo" className="secao-titulo">
                Mapeados, ainda não escritos
              </h2>
              <span className="secao-meta">{planejados.length}</span>
            </div>
            <p className="subtitulo" style={{ marginBottom: 'var(--e-3x)' }}>
              Estes assuntos estão no mapa de conteúdo como importantes, mas ainda não foram
              escritos. Aparecem aqui em vez de virarem páginas vazias — é mais honesto e serve
              de roteiro para a continuação.
            </p>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {planejados.map((p) => (
                <li key={p.id} className={s.planejado}>
                  <span className={s.planejadoTitulo}>{p.titulo}</span>
                  <span className={s.planejadoEstado}>Ainda não escrito</span>
                  <span className={s.planejadoResumo}>{p.resumo}</span>
                </li>
              ))}
            </ul>
          </section>
        )}
      </div>
    </div>
  );
}
