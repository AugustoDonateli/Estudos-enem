import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AREAS } from '@/content/areas';
import { assuntosDaArea, planejadosDaArea } from '@/content/indice';
import { useProgresso } from '@/lib/progresso';
import { faixaDeDominio, ROTULO_FAIXA } from '@/engine/dominio';
import { BarraDominio } from '@/design/Primitivos';
import { definirTitulo } from '@/lib/titulo';
import s from './Areas.module.css';

export function Areas() {
  const { progresso } = useProgresso();

  useEffect(() => {
    definirTitulo(
      'Áreas do ENEM',
      'As cinco áreas do exame, o que cada prova cobra e seu domínio em cada uma.',
    );
  }, []);

  return (
    <div className="page">
      <header className="cabecalho-pagina">
        <h1>Áreas do ENEM</h1>
        <p className="subtitulo">
          Quatro provas objetivas de 45 questões e a redação, distribuídas em dois domingos.
          O bloco em destaque de cada área é leitura pedagógica, não texto oficial.
        </p>
      </header>

      <div className={s.lista}>
        {AREAS.map((area) => {
          const assuntos = assuntosDaArea(area.id);
          const planejados = planejadosDaArea(area.id);
          const avaliados = assuntos
            .map((a) => progresso.assuntos[a.id]?.dominio)
            .filter((d): d is number => typeof d === 'number');
          const media =
            avaliados.length > 0
              ? avaliados.reduce((acc, d) => acc + d, 0) / assuntos.length
              : null;

          const destino = area.id === 'redacao' ? '/redacao' : `/area/${area.id}`;

          return (
            <Link key={area.id} to={destino} className={s.area}>
              <div className={s.areaTopo}>
                <span className={s.nome}>{area.nome}</span>
                <span className={s.meta}>
                  {area.questoes ? `${area.questoes} questões · ` : ''}
                  {area.dia === 1 ? '1º dia' : '2º dia'}
                </span>
              </div>

              <p className={s.descricao}>{area.descricao}</p>

              <div className={s.comoCai}>
                <span className={s.rotuloAnalise}>Análise · como essa prova cobra</span>
                {area.comoCai}
              </div>

              {area.id !== 'redacao' && (
                <div className={s.barraArea}>
                  <BarraDominio dominio={media} rotulo={area.nomeCurto} />
                  <p className={s.meta} style={{ marginTop: 'var(--s-2)' }}>
                    {assuntos.length} {assuntos.length === 1 ? 'assunto escrito' : 'assuntos escritos'}
                    {planejados.length > 0 && ` · ${planejados.length} planejados`}
                    {media !== null && ` · ${ROTULO_FAIXA[faixaDeDominio(media)]}`}
                  </p>
                </div>
              )}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
