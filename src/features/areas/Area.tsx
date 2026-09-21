import { useEffect, useMemo } from 'react';
import { Link, useParams } from 'react-router-dom';
import { AREA_POR_ID } from '@/content/areas';
import { CATALOGO, assuntosDaArea, planejadosDaArea } from '@/content/indice';
import { useProgresso } from '@/lib/progresso';
import { priorizar, prerequisitosPendentes } from '@/engine/prioridade';
import { faixaDeDominio, ROTULO_FAIXA } from '@/engine/dominio';
import { hoje } from '@/engine/datas';
import { BarraDominio, TagPrioridade, Vazio, BotaoLink } from '@/design/Primitivos';
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
    return priorizar(CATALOGO, progresso.assuntos, hoje()).filter((p) =>
      daArea.has(p.assunto.id),
    );
  }, [area, progresso.assuntos]);

  if (!area) {
    return (
      <div className="page">
        <Vazio titulo="Área não encontrada" acao={<BotaoLink to="/areas">Ver todas as áreas</BotaoLink>} />
      </div>
    );
  }

  const planejados = planejadosDaArea(area.id);

  return (
    <div className="page">
      <Link to="/areas" className="voltar">
        ← Todas as áreas
      </Link>

      <header className="cabecalho-pagina">
        <h1>{area.nome}</h1>
        <p className="subtitulo">{area.descricao}</p>
      </header>

      <div className={s.comoCai}>
        <span className={s.rotuloAnalise}>Análise · como essa prova cobra</span>
        {area.comoCai}
      </div>

      <section className="secao" aria-labelledby="assuntos-titulo">
        <div className="secao-cabecalho">
          <h2 id="assuntos-titulo" className="secao-titulo">
            Assuntos, na ordem recomendada para você
          </h2>
          <span className="secao-meta">{ordenados.length} escritos</span>
        </div>

        <ul className={s.assuntos}>
          {ordenados.map(({ assunto, motivo }) => {
            const estado = progresso.assuntos[assunto.id];
            const pendentes = prerequisitosPendentes(assunto, progresso.assuntos);
            return (
              <li key={assunto.id} className={s.assunto}>
                <Link to={`/assunto/${assunto.id}`} className={s.assuntoLink}>
                  <div className={s.assuntoTopo}>
                    <span className={s.assuntoTitulo}>{assunto.titulo}</span>
                    <TagPrioridade prioridade={assunto.prioridade} />
                    <span className={s.faixa}>{assunto.minutosEstimados} min</span>
                  </div>
                  <p className={s.assuntoResumo}>{assunto.resumo}</p>
                  <div className={s.assuntoRodape}>
                    <div className={s.barraAssunto}>
                      <BarraDominio dominio={estado?.dominio ?? null} rotulo={assunto.titulo} />
                    </div>
                    <span className={s.faixa}>
                      {ROTULO_FAIXA[faixaDeDominio(estado?.dominio ?? null)]}
                    </span>
                    {pendentes.length > 0 ? (
                      <span className={s.aviso}>{motivo}</span>
                    ) : (
                      <span className={s.faixa}>{motivo}</span>
                    )}
                  </div>
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
          <p className="subtitulo" style={{ marginBottom: 'var(--s-4)' }}>
            Estes assuntos estão no mapa de conteúdo como importantes, mas ainda não foram
            escritos. Eles aparecem aqui em vez de virarem páginas vazias — é mais honesto e
            serve de roteiro para a continuação.
          </p>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            {planejados.map((p) => (
              <li key={p.id} className={s.planejado}>
                <span className={s.planejadoTitulo}>{p.titulo}</span>
                <span className={s.planejadoEstado}>Ainda não escrito</span>
                <p className={s.assuntoResumo}>{p.resumo}</p>
              </li>
            ))}
          </ul>
        </section>
      )}
    </div>
  );
}
