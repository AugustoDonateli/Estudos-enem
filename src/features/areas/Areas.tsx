import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AREAS } from '@/content/areas';
import { assuntosDaArea, planejadosDaArea } from '@/content/indice';
import { useProgresso } from '@/lib/progresso';
import { faixaDeDominio, ROTULO_FAIXA } from '@/engine/dominio';
import { PROVA_DIA_1, PROVA_DIA_2 } from '@/engine/datas';
import { BarraDominio } from '@/design/Primitivos';
import { CabecalhoPagina } from '@/design/Pagina';
import { FaixaCaderno } from '@/design/Caderno';
import { GradeProva } from '@/design/GradeProva';
import { Figura } from '@/design/Figura';
import { definirTitulo } from '@/lib/titulo';
import type { AreaId } from '@/content/tipos';
import s from './Areas.module.css';

const SIGLA: Record<AreaId, string> = {
  linguagens: 'LC',
  humanas: 'CH',
  natureza: 'CN',
  matematica: 'MT',
  redacao: 'RD',
};

function dataLonga(iso: string) {
  const [, mes, dia] = iso.split('-');
  const meses = ['', 'jan', 'fev', 'mar', 'abr', 'mai', 'jun', 'jul', 'ago', 'set', 'out', 'nov', 'dez'];
  return `${dia} de ${meses[Number(mes)]}`;
}

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
      <CabecalhoPagina
        rotulo="Estrutura do exame"
        titulo="Áreas do ENEM"
        descricao="Quatro provas objetivas de 45 questões e a redação, distribuídas em dois domingos consecutivos."
        abaixo={<GradeProva />}
      />

      {/* Faixa fotográfica: a única coisa no site que sangra de borda a
          borda. Não renderiza enquanto não houver arquivo com crédito. */}
      <Figura nome="diaDeProva" proporcao="21 / 9" />

      <div className="container">
        {/* Composição por dia de prova: é assim que o exame chega ao aluno. */}
        <section className="secao" aria-labelledby="dias-titulo">
          <div className="secao-cabecalho">
            <h2 id="dias-titulo" className="secao-titulo">
              Como a prova se divide
            </h2>
            <span className="secao-meta">180 questões objetivas + redação</span>
          </div>

          <div className={s.dias}>
            {([1, 2] as const).map((numeroDia) => {
              const doDia = AREAS.filter((a) => a.dia === numeroDia);
              const total = doDia.reduce((soma, a) => soma + (a.questoes ?? 0), 0);
              return (
                <div key={numeroDia} className={s.dia}>
                  {/* A duração está impressa na capa de cada caderno: o 1º dia
                      tem cinco horas e trinta minutos; o 2º, cinco horas. */}
                  <FaixaCaderno
                    dia={numeroDia}
                    nota={numeroDia === 1 ? '5h30 de prova' : '5h de prova'}
                    className={s.diaFaixa}
                  />
                  <div className={s.diaTopo}>
                    <span className={s.diaNumero}>
                      {dataLonga(numeroDia === 1 ? PROVA_DIA_1 : PROVA_DIA_2)}
                    </span>
                    <span className={s.diaData}>{total} questões</span>
                  </div>
                  <ul className={s.diaLista}>
                    {doDia.map((area) => (
                      <li key={area.id} className={s.diaItem} data-area={area.id}>
                        <span className={s.diaMarca} aria-hidden="true" />
                        <span className={s.diaNome}>{area.nomeCurto}</span>
                        <span className={s.diaQtd}>
                          {area.questoes ? `${area.questoes} questões` : 'até 30 linhas'}
                        </span>
                      </li>
                    ))}
                  </ul>
                  {/* O 2º dia divide certo: 300 minutos para 90 questões dão
                      3min20 cada. O 1º dia não divide, porque as 5h30 incluem
                      a redação — e quanto reservar para ela é escolha do
                      aluno, não dado do exame. */}
                  <p className={s.diaTotal}>
                    <span>{numeroDia === 1 ? 'Inclui a redação' : 'Por questão'}</span>
                    <span>{numeroDia === 1 ? '5h30 no total' : '3min20'}</span>
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        <section className="secao" aria-labelledby="areas-titulo">
          <div className="secao-cabecalho">
            <h2 id="areas-titulo" className="secao-titulo">
              As cinco áreas
            </h2>
            <span className="secao-meta">O bloco em destaque é leitura pedagógica</span>
          </div>

          <div className={s.grelha}>
            {AREAS.map((area, i) => {
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
                <Link
                  key={area.id}
                  to={destino}
                  className={s.cartaoArea}
                  data-area={area.id}
                  style={{ animationDelay: `${i * 60}ms` }}
                >
                  <div className={s.areaTopoCartao}>
                    <span className={s.areaSigla} aria-hidden="true">
                      {SIGLA[area.id]}
                    </span>
                    <span className={s.areaMeta}>
                      {area.questoes ? `${area.questoes} questões` : 'Redação'}
                      <br />
                      {area.dia === 1 ? '1º dia' : '2º dia'}
                    </span>
                  </div>

                  <span className={s.nome}>{area.nome}</span>
                  <span className={s.descricao}>{area.descricao}</span>

                  <span className={s.comoCai}>
                    <span className={s.rotuloAnalise}>Análise · como essa prova cobra</span>
                    {area.comoCai}
                  </span>

                  {area.id !== 'redacao' && (
                    <span className={s.progressoArea}>
                      <BarraDominio dominio={media} rotulo={area.nomeCurto} />
                      <span className={s.faixaRotulo}>
                        {assuntos.length}{' '}
                        {assuntos.length === 1 ? 'assunto escrito' : 'assuntos escritos'}
                        {planejados.length > 0 && ` · ${planejados.length} planejados`}
                        {media !== null && ` · ${ROTULO_FAIXA[faixaDeDominio(media)]}`}
                      </span>
                    </span>
                  )}
                </Link>
              );
            })}
          </div>
        </section>
      </div>
    </div>
  );
}
