import { useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { ASSUNTO_META_POR_ID } from '@/content/indice';
import { AREA_POR_ID } from '@/content/areas';
import { useProgresso } from '@/lib/progresso';
import { INTERVALOS, revisoesVencidas } from '@/engine/revisao';
import { diferencaEmDias, hoje, PROVA_DIA_1 } from '@/engine/datas';
import { BotaoLink, Destaque, Vazio } from '@/design/Primitivos';
import { definirTitulo } from '@/lib/titulo';
import s from './Revisao.module.css';

export function Revisao() {
  const { progresso } = useProgresso();
  const dia = hoje();

  useEffect(() => {
    definirTitulo('Revisão', 'O que precisa ser revisado hoje e por quê.');
  }, []);

  const vencidas = useMemo(() => revisoesVencidas(progresso.assuntos, dia), [progresso.assuntos, dia]);

  const agendadas = useMemo(() => {
    return Object.entries(progresso.assuntos)
      .filter(([, e]) => e?.proximaRevisao && diferencaEmDias(e.proximaRevisao, dia) < 0)
      .map(([id, e]) => ({ id, quando: e!.proximaRevisao!, caixa: e!.caixa }))
      .sort((a, b) => a.quando.localeCompare(b.quando));
  }, [progresso.assuntos, dia]);

  const diasRestantes = diferencaEmDias(dia, PROVA_DIA_1);

  return (
    <div className="page">
      <header className="cabecalho-pagina">
        <h1>Revisão</h1>
        <p className="subtitulo">
          Revisar no dia certo é o que impede que o que você estudou esta semana desapareça em
          duas. Os intervalos são de {INTERVALOS[1]}, {INTERVALOS[2]}, {INTERVALOS[3]} e{' '}
          {INTERVALOS[4]} dias — e nenhum deles é agendado para depois da prova.
        </p>
      </header>

      {diasRestantes > 0 && diasRestantes <= 14 && (
        <Destaque variante="atencao" titulo="Reta final">
          <p>
            Faltam {diasRestantes} dias. Revisões que não caberiam num novo ciclo foram
            reagendadas para a véspera da prova e aparecem marcadas como revisão final.
          </p>
        </Destaque>
      )}

      <section className="secao" aria-labelledby="vencidas">
        <div className="secao-cabecalho">
          <h2 id="vencidas" className="secao-titulo">
            Para revisar agora
          </h2>
          <span className="secao-meta">{vencidas.length}</span>
        </div>

        {vencidas.length === 0 ? (
          <Vazio
            titulo="Nada vencido"
            acao={<BotaoLink to="/">Ver o plano de hoje</BotaoLink>}
          >
            <p style={{ margin: '0 auto' }}>
              Sua fila de revisão está em dia. Quando você estudar um assunto novo ou errar uma
              questão, ele aparece aqui na data certa.
            </p>
          </Vazio>
        ) : (
          <ul className={s.lista}>
            {vencidas.map((item) => {
              const assunto = ASSUNTO_META_POR_ID.get(item.topicId);
              if (!assunto) return null;
              const area = AREA_POR_ID[assunto.areaId];
              return (
                <li key={item.topicId} className={s.item}>
                  <div className={s.corpo}>
                    <span className={s.area}>{area.nomeCurto}</span>
                    <br />
                    <Link to={`/assunto/${assunto.id}?modo=revisao`} className={s.titulo}>
                      {assunto.titulo}
                    </Link>
                    <p className={`${s.motivo} ${item.revisaoFinal ? s.final : ''}`}>
                      {item.motivo}
                    </p>
                  </div>
                  <BotaoLink to={`/assunto/${assunto.id}?modo=revisao`} variante="secundario">
                    Revisar
                  </BotaoLink>
                </li>
              );
            })}
          </ul>
        )}
      </section>

      {agendadas.length > 0 && (
        <section className="secao" aria-labelledby="agenda">
          <div className="secao-cabecalho">
            <h2 id="agenda" className="secao-titulo">
              Agendado para os próximos dias
            </h2>
            <span className="secao-meta">{agendadas.length}</span>
          </div>
          <ul className={s.agenda}>
            {agendadas.map((a) => {
              const assunto = ASSUNTO_META_POR_ID.get(a.id);
              if (!assunto) return null;
              const emDias = -diferencaEmDias(a.quando, dia);
              return (
                <li key={a.id} className={s.agendaItem}>
                  <Link to={`/assunto/${assunto.id}`}>{assunto.titulo}</Link>
                  <span className={s.agendaData}>
                    {emDias === 1 ? 'amanhã' : `em ${emDias} dias`}
                  </span>
                </li>
              );
            })}
          </ul>
        </section>
      )}
    </div>
  );
}
