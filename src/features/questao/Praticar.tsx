import { useEffect, useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { AREAS } from '@/content/areas';
import { ASSUNTO_POR_ID, QUESTOES } from '@/content/conteudo';
import { useProgresso } from '@/lib/progresso';
import { conceitosFrageis } from '@/engine/erros';
import { Botao, BotaoLink, Vazio } from '@/design/Primitivos';
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

  useEffect(() => {
    definirTitulo('Praticar', 'Questões com correção explicada e questão-irmã do mesmo conceito.');
  }, []);

  useEffect(() => {
    setIndice(0);
  }, [areaFiltro, assuntoFiltro, conceitoFiltro, soErradas]);

  const questoes = useMemo(() => {
    const frageis = new Set(conceitosFrageis(progresso.respostas).map((c) => c.conceito));
    return QUESTOES.filter((q) => {
      const assunto = ASSUNTO_POR_ID.get(q.topicId);
      if (areaFiltro && assunto?.areaId !== areaFiltro) return false;
      if (assuntoFiltro && q.topicId !== assuntoFiltro) return false;
      if (conceitoFiltro && q.conceito !== conceitoFiltro) return false;
      if (soErradas && !frageis.has(q.conceito)) return false;
      return true;
    });
  }, [areaFiltro, assuntoFiltro, conceitoFiltro, soErradas, progresso.respostas]);

  function alternarFiltro(chave: string, valor: string | null) {
    const proximos = new URLSearchParams(params);
    if (valor === null || proximos.get(chave) === valor) proximos.delete(chave);
    else proximos.set(chave, valor);
    setParams(proximos, { replace: true });
  }

  const questao = questoes[indice];
  const assuntoAtual = assuntoFiltro ? ASSUNTO_POR_ID.get(assuntoFiltro) : undefined;

  return (
    <div className="page">
      <header className="cabecalho-pagina">
        <h1>Praticar</h1>
        <p className="subtitulo">
          Uma questão por vez, com correção explicada. Errar aqui é barato — é exatamente
          para isso que serve.
        </p>
      </header>

      <div className={s.filtros} role="group" aria-label="Filtros de questões">
        <button
          type="button"
          className={`${s.filtro} ${!areaFiltro && !assuntoFiltro && !conceitoFiltro && !soErradas ? s.filtroAtivo : ''}`}
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
      </div>

      {(assuntoAtual || conceitoFiltro) && (
        <p className={s.contador}>
          <span>
            Filtrando por {assuntoAtual ? `assunto: ${assuntoAtual.titulo}` : `conceito: ${conceitoFiltro}`}
          </span>
          <Botao variante="discreto" onClick={() => setParams({}, { replace: true })}>
            Limpar filtro
          </Botao>
        </p>
      )}

      {questoes.length === 0 ? (
        <Vazio
          titulo={soErradas ? 'Nenhum conceito pendente' : 'Nenhuma questão com esses filtros'}
          acao={<Botao onClick={() => setParams({}, { replace: true })}>Ver todas as questões</Botao>}
        >
          <p style={{ margin: '0 auto' }}>
            {soErradas
              ? 'Você não tem conceitos em que tenha errado mais do que acertado. Isso é uma boa notícia.'
              : 'Tente remover algum filtro.'}
          </p>
        </Vazio>
      ) : (
        <>
          <p className={s.contador}>
            <span>
              Questão {indice + 1} de {questoes.length}
            </span>
          </p>

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
            <BotaoLink to="/" variante="discreto">
              Voltar ao plano de hoje
            </BotaoLink>
          </div>
        </>
      )}
    </div>
  );
}
