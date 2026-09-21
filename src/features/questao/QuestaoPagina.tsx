import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ASSUNTO_POR_ID, QUESTAO_POR_ID } from '@/content/conteudo';
import { AREA_POR_ID } from '@/content/areas';
import { BotaoLink, Trilha, Vazio } from '@/design/Primitivos';
import { CabecalhoPagina } from '@/design/Pagina';
import { PlayerQuestao } from './PlayerQuestao';
import { definirTitulo } from '@/lib/titulo';

/** Uma questão isolada — é para onde leva o botão de questão-irmã. */
export function QuestaoPagina() {
  const { questionId } = useParams<{ questionId: string }>();
  const questao = questionId ? QUESTAO_POR_ID.get(questionId) : undefined;
  const assunto = questao ? ASSUNTO_POR_ID.get(questao.topicId) : undefined;
  const area = assunto ? AREA_POR_ID[assunto.areaId] : undefined;

  useEffect(() => {
    if (questao) definirTitulo(questao.conceito, `Questão sobre ${questao.conceito}.`);
    window.scrollTo(0, 0);
  }, [questao]);

  if (!questao) {
    return (
      <div className="page">
        <div className="container">
          <div className="secao">
            <Vazio
              titulo="Questão não encontrada"
              acao={<BotaoLink to="/questoes">Ir para a prática</BotaoLink>}
            />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="page">
      <CabecalhoPagina
        {...(assunto ? { areaId: assunto.areaId } : {})}
        rotulo="Questão avulsa"
        titulo={questao.conceito}
        descricao="Mesmo conceito, contexto diferente. É assim que se confirma que a ideia foi entendida — e não só a questão anterior decorada."
        acima={
          <Trilha
            itens={[
              { rotulo: 'Início', para: '/' },
              ...(area ? [{ rotulo: area.nomeCurto, para: `/area/${area.id}` }] : []),
              ...(assunto ? [{ rotulo: assunto.titulo, para: `/assunto/${assunto.id}` }] : []),
              { rotulo: 'Questão' },
            ]}
          />
        }
      />

      <div className="container">
        <div className="secao">
          <PlayerQuestao questao={questao} />
          <div className="acoes">
            <BotaoLink to="/questoes" variante="secundario">
              Ir para a prática livre
            </BotaoLink>
            <BotaoLink to="/" variante="terciario">
              Voltar ao plano de hoje
            </BotaoLink>
          </div>
        </div>
      </div>
    </div>
  );
}
