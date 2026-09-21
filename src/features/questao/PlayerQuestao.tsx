import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import type { Letra, Questao } from '@/content/tipos';
import { ASSUNTO_POR_ID, proximaIrma } from '@/content/conteudo';
import { useProgresso } from '@/lib/progresso';
import { EXPLICACAO_TIPO_ERRO, ROTULO_TIPO_ERRO } from '@/engine/erros';
import { Blocos, Botao, BotaoLink, SeloProcedencia, Tag } from '@/design/Primitivos';
import s from './PlayerQuestao.module.css';

/**
 * Player de questão.
 *
 * A correção é o coração pedagógico do produto. Ao errar, o aluno não vê
 * "errado": vê o conceito cobrado, por que a alternativa escolhida não
 * funciona, por que a correta funciona, que TIPO de erro foi aquele, o que
 * revisar — e recebe na hora uma questão do mesmo conceito em outro contexto.
 */
export function PlayerQuestao({
  questao,
  aoAvancar,
  rotuloAvancar = 'Próxima questão',
}: {
  questao: Questao;
  aoAvancar?: () => void;
  rotuloAvancar?: string;
}) {
  const { progresso, registrarResposta } = useProgresso();
  const [escolhida, setEscolhida] = useState<Letra | null>(null);
  const [respondida, setRespondida] = useState(false);
  const resultadoRef = useRef<HTMLDivElement>(null);

  // Trocar de questão reinicia o estado — sem isso, a resposta anterior vazaria
  // para a questão-irmã oferecida logo depois.
  useEffect(() => {
    setEscolhida(null);
    setRespondida(false);
  }, [questao.id]);

  const assunto = ASSUNTO_POR_ID.get(questao.topicId);
  const alternativaEscolhida = questao.alternativas.find((a) => a.letra === escolhida);
  const correta = questao.alternativas.find((a) => a.correta)!;
  const acertou = Boolean(alternativaEscolhida?.correta);

  const irma = respondida
    ? proximaIrma(
        questao,
        progresso.respostas.map((r) => r.questionId),
      )
    : undefined;

  function responder() {
    if (!escolhida || !alternativaEscolhida) return;
    setRespondida(true);
    registrarResposta({
      questionId: questao.id,
      topicId: questao.topicId,
      conceito: questao.conceito,
      letra: escolhida,
      correta: alternativaEscolhida.correta,
      dificuldade: questao.dificuldade,
      ...(alternativaEscolhida.tipoErro ? { tipoErro: alternativaEscolhida.tipoErro } : {}),
    });
    // Leva o foco para a correção: sem isso, quem usa leitor de tela ou teclado
    // não percebe que algo novo apareceu abaixo do botão.
    window.setTimeout(() => resultadoRef.current?.focus(), 60);
  }

  return (
    <article className={s.questao}>
      <header className={s.cabecalho}>
        <span className={s.conceito}>{questao.conceito}</span>
        <Tag>
          {questao.dificuldade === 'facil'
            ? 'Fácil'
            : questao.dificuldade === 'media'
              ? 'Média'
              : 'Difícil'}
        </Tag>
        <SeloProcedencia procedencia={questao.procedencia} />
      </header>

      <div className={s.enunciado}>
        <Blocos blocos={questao.enunciado} />
      </div>

      <ul className={s.alternativas}>
        {questao.alternativas.map((alt) => {
          const estaEscolhida = escolhida === alt.letra;
          const classe = respondida
            ? alt.correta
              ? s.certa
              : estaEscolhida
                ? s.errada
                : ''
            : estaEscolhida
              ? s.selecionada
              : '';
          return (
            <li key={alt.letra}>
              <button
                type="button"
                className={`${s.alternativa} ${classe}`}
                onClick={() => !respondida && setEscolhida(alt.letra)}
                disabled={respondida}
                aria-pressed={estaEscolhida}
              >
                <span className={s.letra} aria-hidden="true">
                  {alt.letra}
                </span>
                <span className={s.textoAlternativa}>
                  <span className="visually-hidden">Alternativa {alt.letra}. </span>
                  {alt.texto}
                  {respondida && (estaEscolhida || alt.correta) && (
                    <span className={s.diagnostico}>{alt.diagnostico}</span>
                  )}
                </span>
                {/* Nunca só cor: resultado sempre tem também palavra. */}
                {respondida && alt.correta && (
                  <span className={`${s.marcaResultado} ${s.marcaCerta}`}>Correta</span>
                )}
                {respondida && estaEscolhida && !alt.correta && (
                  <span className={`${s.marcaResultado} ${s.marcaErrada}`}>Sua escolha</span>
                )}
              </button>
            </li>
          );
        })}
      </ul>

      {!respondida ? (
        <div className={s.rodape}>
          <Botao onClick={responder} disabled={!escolhida}>
            {escolhida ? 'Confirmar resposta' : 'Escolha uma alternativa'}
          </Botao>
        </div>
      ) : (
        <div
          className={s.resultado}
          ref={resultadoRef}
          tabIndex={-1}
          role="region"
          aria-live="polite"
          aria-label="Correção da questão"
        >
          <h3
            className={`${s.resultadoTitulo} ${acertou ? s.resultadoCerto : s.resultadoErrado}`}
          >
            {acertou ? 'Você acertou' : 'Você errou'}
          </h3>

          {!acertou && (
            <>
              <div className={s.passo}>
                <span className={s.passoRotulo}>Conceito cobrado</span>
                <p>{questao.conceito}</p>
              </div>
              <div className={s.passo}>
                <span className={s.passoRotulo}>Por que a sua alternativa não funciona</span>
                <p>{alternativaEscolhida?.diagnostico}</p>
              </div>
              <div className={s.passo}>
                <span className={s.passoRotulo}>Por que a alternativa {correta.letra} funciona</span>
                <p>{correta.diagnostico}</p>
              </div>
              {alternativaEscolhida?.tipoErro && (
                <div className={s.passo}>
                  <span className={s.passoRotulo}>Que tipo de erro foi este</span>
                  <p>
                    <span className={s.tipoErro}>
                      Erro de {ROTULO_TIPO_ERRO[alternativaEscolhida.tipoErro]}
                    </span>
                  </p>
                  <p style={{ marginTop: 'var(--s-2)' }}>
                    {EXPLICACAO_TIPO_ERRO[alternativaEscolhida.tipoErro]}
                  </p>
                </div>
              )}
            </>
          )}

          <div className={s.passo}>
            <span className={s.passoRotulo}>Resolução</span>
            <div className={s.explicacao}>
              <Blocos blocos={questao.explicacao} />
            </div>
          </div>

          {assunto && (
            <div className={s.passo}>
              <span className={s.passoRotulo}>O que revisar</span>
              <p>
                <Link to={`/assunto/${assunto.id}`}>{assunto.titulo}</Link> — volte ao bloco
                de conceitos fundamentais e à lista de pegadinhas.
              </p>
            </div>
          )}

          {questao.procedencia === 'oficial' && questao.referencia && (
            <p className={s.referencia}>
              Questão oficial — {questao.referencia.prova}, {questao.referencia.ano}
              {questao.referencia.numero ? `, questão ${questao.referencia.numero}` : ''}.
            </p>
          )}
          {questao.procedencia === 'adaptada' && (
            <p className={s.referencia}>
              Questão adaptada a partir de: {questao.fonte}. Não é uma questão oficial do ENEM.
            </p>
          )}

          <div className={s.acoesResultado}>
            {irma && irma.id !== questao.id && (
              <BotaoLink to={`/questao/${irma.id}`}>
                {acertou ? 'Outra do mesmo conceito' : 'Tentar uma questão parecida'}
              </BotaoLink>
            )}
            {aoAvancar && (
              <Botao variante="secundario" onClick={aoAvancar}>
                {rotuloAvancar}
              </Botao>
            )}
            {assunto && (
              <BotaoLink to={`/assunto/${assunto.id}`} variante="secundario">
                Rever o conteúdo
              </BotaoLink>
            )}
          </div>
        </div>
      )}
    </article>
  );
}
