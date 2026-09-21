import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ASSUNTO_POR_ID, QUESTAO_POR_ID } from '@/content/conteudo';
import { BotaoLink, Vazio } from '@/design/Primitivos';
import { PlayerQuestao } from './PlayerQuestao';
import { definirTitulo } from '@/lib/titulo';

/** Uma questão isolada — é para onde leva o botão de questão-irmã. */
export function QuestaoPagina() {
  const { questionId } = useParams<{ questionId: string }>();
  const questao = questionId ? QUESTAO_POR_ID.get(questionId) : undefined;
  const assunto = questao ? ASSUNTO_POR_ID.get(questao.topicId) : undefined;

  useEffect(() => {
    if (questao) definirTitulo(questao.conceito, `Questão sobre ${questao.conceito}.`);
    window.scrollTo(0, 0);
  }, [questao]);

  if (!questao) {
    return (
      <div className="page">
        <Vazio titulo="Questão não encontrada" acao={<BotaoLink to="/questoes">Ir para a prática</BotaoLink>} />
      </div>
    );
  }

  return (
    <div className="page">
      {assunto && (
        <Link to={`/assunto/${assunto.id}`} className="voltar">
          ← {assunto.titulo}
        </Link>
      )}
      <header className="cabecalho-pagina">
        <h1>{questao.conceito}</h1>
        <p className="subtitulo">
          Mesmo conceito, contexto diferente. É assim que se confirma que a ideia foi
          entendida — e não só a questão anterior decorada.
        </p>
      </header>
      <PlayerQuestao questao={questao} />
      <div className="acoes">
        <BotaoLink to="/questoes" variante="secundario">
          Ir para a prática livre
        </BotaoLink>
        <BotaoLink to="/" variante="discreto">
          Voltar ao plano de hoje
        </BotaoLink>
      </div>
    </div>
  );
}
