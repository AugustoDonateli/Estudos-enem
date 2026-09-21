import { useEffect, useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { AREAS } from '@/content/areas';
import { ASSUNTO_POR_ID, QUESTOES } from '@/content/conteudo';
import { useProgresso } from '@/lib/progresso';
import { conceitosFrageis } from '@/engine/erros';
import { Botao, BotaoLink, Vazio } from '@/design/Primitivos';
import { CabecalhoPagina } from '@/design/Pagina';
import { PlayerQuestao } from './PlayerQuestao';
import { definirTitulo } from '@/lib/titulo';
import type { AreaId } from '@/content/tipos';
import s from './Praticar.module.css';

/**
 * Prática livre com filtros.
 *
 * Uma questão por vez, e não uma lista rolável: quem estuda com pouco tempo
 * precisa responder, entender o erro e seguir — a lista longa convida a passar
 * o olho sem responder nada.
 */
export function Praticar() {
  const [params, setParams] = useSearchParams();
  const { progresso } = useProgresso();
  const [indice, setIndice] = useState(0);

  const areaFiltro = params.get('area') as AreaId | null;
  const assuntoFiltro = params.get('assunto');
  const conceitoFiltro = params.get('conceito');
  const soErradas = params.get('erradas') === '1';
  const soOficiais = params.get('oficiais') === '1';

  useEffect(() => {
    definirTitulo('Praticar', 'Questões com correção explicada e questão-irmã do mesmo conceito.');
  }, []);

  useEffect(() => {
    setIndice(0);
  }, [areaFiltro, assuntoFiltro, conceitoFiltro, soErradas, soOficiais]);

  const questoes = useMemo(() => {
    const frageis = new Set(conceitosFrageis(progresso.respostas).map((c) => c.conceito));
    return QUESTOES.filter((q) => {
      const assunto = ASSUNTO_POR_ID.get(q.topicId);
      if (areaFiltro && assunto?.areaId !== areaFiltro) return false;
      if (assuntoFiltro && q.topicId !== assuntoFiltro) return false;
      if (conceitoFiltro && q.conceito !== conceitoFiltro) return false;
      if (soErradas && !frageis.has(q.conceito)) return false;
      if (soOficiais && q.procedencia !== 'oficial') return false;
      return true;
    });
  }, [areaFiltro, assuntoFiltro, conceitoFiltro, soErradas, soOficiais, progresso.respostas]);

  function alternarFiltro(chave: string, valor: string | null) {
    const proximos = new URLSearchParams(params);
    if (valor === null || proximos.get(chave) === valor) proximos.delete(chave);
    else proximos.set(chave, valor);
    setParams(proximos, { replace: true });
  }

  const questao = questoes[indice];
  const assuntoAtual = assuntoFiltro ? ASSUNTO_POR_ID.get(assuntoFiltro) : undefined;

  const oficiais = questoes.filter((q) => q.procedencia === 'oficial').length;

  return (
    <div className="page">
      <CabecalhoPagina
        rotulo="Prática dirigida"
        titulo="Praticar"
        descricao="Uma questão por vez, com correção explicada. Errar aqui é barato — é exatamente para isso que serve."
      />

      <div className={s.barraFiltros}>
        <div className={`container ${s.filtrosInterno}`}>
          <span className={s.filtrosRotulo} aria-hidden="true">
            Filtrar
          </span>
          <div className={s.filtros} role="group" aria-label="Filtros de questões">
            <button
              type="button"
              className={`${s.filtro} ${
                !areaFiltro && !assuntoFiltro && !conceitoFiltro && !soErradas && !soOficiais
                  ? s.filtroAtivo
                  : ''
              }`}
              onClick={() => setParams({}, { replace: true })}
            >
              Todas
            </button>
            {AREAS.filter((a) => a.id !== 'redacao').map((area) => (
              <button
                key={area.id}
                type="button"
                className={`${s.filtro} ${areaFiltro === area.id ? s.filtroAtivo : ''}`}
                aria-pressed={areaFiltro === area.id}
                onClick={() => alternarFiltro('area', area.id)}
              >
                {area.nomeCurto}
              </button>
            ))}
            <button
              type="button"
              className={`${s.filtro} ${soErradas ? s.filtroAtivo : ''}`}
              aria-pressed={soErradas}
              onClick={() => alternarFiltro('erradas', '1')}
            >
              Só os conceitos que errei
            </button>
            <button
              type="button"
              className={`${s.filtro} ${soOficiais ? s.filtroAtivo : ''}`}
              aria-pressed={soOficiais}
              onClick={() => alternarFiltro('oficiais', '1')}
            >
              Só questões oficiais
            </button>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="secao">
          {(assuntoAtual || conceitoFiltro) && (
            <p className={s.filtroAplicado}>
              <span>
                Filtrando por{' '}
                {assuntoAtual ? `assunto: ${assuntoAtual.titulo}` : `conceito: ${conceitoFiltro}`}
              </span>
              <Botao variante="terciario" onClick={() => setParams({}, { replace: true })}>
                Limpar filtro
              </Botao>
            </p>
          )}

          {questoes.length === 0 ? (
            <Vazio
              titulo={soErradas ? 'Nenhum conceito pendente' : 'Nenhuma questão com esses filtros'}
              acao={
                <Botao onClick={() => setParams({}, { replace: true })}>Ver todas as questões</Botao>
              }
            >
              <p>
                {soErradas
                  ? 'Você não tem conceitos em que tenha errado mais do que acertado. Isso é uma boa notícia.'
                  : soOficiais
                    ? 'Não há questão oficial com esses filtros. Tente ampliar a área selecionada.'
                    : 'Tente remover algum filtro.'}
              </p>
            </Vazio>
          ) : (
            <>
              <div className={s.regua}>
                <span className={s.reguaTexto}>
                  Questão {indice + 1} de {questoes.length}
                </span>
                <span className={s.reguaMeta}>
                  {oficiais > 0
                    ? `${oficiais} ${oficiais > 1 ? 'oficiais' : 'oficial'} nesta seleção`
                    : 'seleção sem questão oficial'}
                </span>
              </div>
              <div className={s.reguaTrilho} aria-hidden="true">
                <span
                  className={s.reguaPreenchida}
                  style={{ width: `${((indice + 1) / questoes.length) * 100}%` }}
                />
              </div>

              {questao && (
                <PlayerQuestao
                  questao={questao}
                  rotuloAvancar="Próxima questão"
                  {...(indice < questoes.length - 1
                    ? { aoAvancar: () => setIndice((i) => i + 1) }
                    : {})}
                />
              )}

              <div className={s.navegacao}>
                <Botao
                  variante="secundario"
                  onClick={() => setIndice((i) => Math.max(0, i - 1))}
                  disabled={indice === 0}
                >
                  Anterior
                </Botao>
                <Botao
                  variante="secundario"
                  onClick={() => setIndice((i) => Math.min(questoes.length - 1, i + 1))}
                  disabled={indice >= questoes.length - 1}
                >
                  Pular para a próxima
                </Botao>
                <BotaoLink to="/" variante="terciario">
                  Voltar ao plano de hoje
                </BotaoLink>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
