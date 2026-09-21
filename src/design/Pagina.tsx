import type { ReactNode } from 'react';
import type { AreaId } from '@/content/tipos';
import { Grafismo } from './Marca';
import s from './Pagina.module.css';

/**
 * Cabeçalhos de página.
 *
 * Duas variantes, e a escolha não é estética: a faixa escura marca o ponto de
 * entrada do produto (o plano de hoje) e as aberturas de área; o cabeçalho
 * claro serve às páginas de leitura, onde uma faixa escura roubaria atenção
 * do conteúdo.
 */

export function HeroEscuro({
  rotulo,
  titulo,
  descricao,
  areaId,
  aside,
}: {
  rotulo?: string;
  titulo: ReactNode;
  descricao?: ReactNode;
  areaId?: AreaId;
  aside?: ReactNode;
}) {
  return (
    <section className={s.heroEscuro} {...(areaId ? { 'data-area': areaId } : {})}>
      <Grafismo variante="bolhas" />
      <div className={`container ${s.heroInterno}`}>
        <div className={s.heroGrade}>
          <div className="entrada">
            {rotulo && <span className="rotulo">{rotulo}</span>}
            <h1>{titulo}</h1>
            {descricao && <div className={s.descricao}>{descricao}</div>}
          </div>
          {aside && <div className={`${s.aside} entrada-2`}>{aside}</div>}
        </div>
      </div>
    </section>
  );
}

export function CabecalhoPagina({
  rotulo,
  titulo,
  descricao,
  areaId,
  acima,
  abaixo,
}: {
  rotulo?: string;
  titulo: ReactNode;
  descricao?: ReactNode;
  areaId?: AreaId;
  acima?: ReactNode;
  abaixo?: ReactNode;
}) {
  return (
    <section className={s.heroClaro} {...(areaId ? { 'data-area': areaId } : {})}>
      <div className={`container ${s.heroClaroInterno} entrada`}>
        {acima}
        <div className={s.tituloComAcento}>
          {rotulo && <span className="rotulo">{rotulo}</span>}
          <h1>{titulo}</h1>
        </div>
        {descricao && <div className={s.descricao}>{descricao}</div>}
        {abaixo && <div className={s.abaixo}>{abaixo}</div>}
      </div>
    </section>
  );
}

/**
 * Faixa de métricas: números grandes separados por filete superior.
 * Substitui a fileira de cards de estatística, que é o clichê visual que
 * transforma qualquer produto em painel genérico.
 */
export function Metricas({
  itens,
  escuro,
}: {
  itens: { numero: ReactNode; rotulo: string }[];
  escuro?: boolean;
}) {
  return (
    <div className={s.metricas}>
      {itens.map((item) => (
        <div key={item.rotulo} className={`${s.metrica} ${escuro ? s.metricaEscura : ''}`}>
          <span className={s.metricaNumero}>{item.numero}</span>
          <span className={s.metricaRotulo}>{item.rotulo}</span>
        </div>
      ))}
    </div>
  );
}
