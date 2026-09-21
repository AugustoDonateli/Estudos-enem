import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import type { Letra, Questao } from '@/content/tipos';
import { ASSUNTO_POR_ID, proximaIrma } from '@/content/conteudo';
import { useProgresso } from '@/lib/progresso';
import { EXPLICACAO_TIPO_ERRO, ROTULO_TIPO_ERRO } from '@/engine/erros';
import { Blocos, Botao, BotaoLink, SeloProcedencia, Tag } from '@/design/Primitivos';
import { FaixaCaderno, Tarja } from '@/design/Caderno';
import { useCronometro } from '@/lib/cronometro';
import { RITMO_ALVO_SEGUNDOS, formatarDuracao } from '@/engine/tempo';
import { ROTULO_CONFIANCA, type Confianca } from '@/storage/schema';
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
  const [segundosGastos, setSegundosGastos] = useState<number | null>(null);
  const resultadoRef = useRef<HTMLDivElement>(null);
  const cronometro = useCronometro(questao.id);

  // Trocar de questão reinicia o estado — sem isso, a resposta anterior vazaria
  // para a questão-irmã oferecida logo depois.
  useEffect(() => {
    setEscolhida(null);
    setRespondida(false);
    setSegundosGastos(null);
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

  function responder(confianca: Confianca) {
    if (!escolhida || !alternativaEscolhida) return;
    const segundos = cronometro.segundos();
    setSegundosGastos(segundos);
    setRespondida(true);
    registrarResposta({
      questionId: questao.id,
      topicId: questao.topicId,
      conceito: questao.conceito,
      letra: escolhida,
      correta: alternativaEscolhida.correta,
      dificuldade: questao.dificuldade,
      segundos,
      confianca,
      ...(alternativaEscolhida.tipoErro ? { tipoErro: alternativaEscolhida.tipoErro } : {}),
    });
    // Leva o foco para a correção: sem isso, quem usa leitor de tela ou teclado
    // não percebe que algo novo apareceu abaixo do botão.
    window.setTimeout(() => resultadoRef.current?.focus(), 60);
  }

  // Só questão oficial com número de prova recebe numeração de caderno.
  const referencia = questao.procedencia === 'oficial' ? questao.referencia : undefined;
  const oficial = referencia !== undefined && referencia.numero !== undefined;

  return (
    <article className={s.questao} {...(assunto ? { 'data-area': assunto.areaId } : {})}>
      {/* Marginália: o código é o identificador desta questão no site, nunca
          um código de caderno do INEP. A tarja é linguagem visual da prova;
          a procedência ao lado diz de onde o item realmente veio. */}
      <div className={s.marginalia}>
        <Tarja valor={questao.id} altura={22} />
        <SeloProcedencia procedencia={questao.procedencia} />
      </div>

      <header className={s.cabecalho}>
        {oficial ? (
          <>
            <span className={s.numero}>QUESTÃO {String(referencia.numero).padStart(2, '0')}</span>
            <FaixaCaderno
              dia={referencia.prova.includes('2º') ? 2 : 1}
              {...(referencia.caderno ? { caderno: referencia.caderno } : {})}
              nota={`ENEM ${referencia.ano}`}
            />
          </>
        ) : (
          <span className={s.numero}>QUESTÃO</span>
        )}
        <span className={s.conceito}>{questao.conceito}</span>
        <div className={s.etiquetas}>
          <Tag>
            {questao.dificuldade === 'facil'
              ? 'Fácil'
              : questao.dificuldade === 'media'
                ? 'Média'
                : 'Difícil'}
          </Tag>
        </div>
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
        /*
          Três botões no lugar de um "Confirmar resposta".
          O número de toques é o mesmo, e a informação nova sai de graça: sem
          ela, acertar por sorte e acertar por saber entram idênticos no
          modelo de domínio. Um seletor separado com valor padrão não serviria
          — todo mundo deixaria no padrão, que é justamente o que não se quer.
        */
        <div className={s.rodape}>
          {escolhida ? (
            <fieldset className={s.confianca}>
              <legend className={s.confiancaRotulo}>
                Confirmar a alternativa {escolhida} — com que confiança?
              </legend>
              <div className={s.confiancaBotoes}>
                {(['certeza', 'duvida', 'chute'] as const).map((nivel) => (
                  <button
                    key={nivel}
                    type="button"
                    className={`${s.botaoConfianca} ${s[nivel]}`}
                    onClick={() => responder(nivel)}
                  >
                    {ROTULO_CONFIANCA[nivel]}
                  </button>
                ))}
              </div>
            </fieldset>
          ) : (
            <p className={s.aguardando}>Escolha uma alternativa</p>
          )}
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
          <div className={`${s.resultadoFaixa} ${acertou ? s.resultadoCerto : s.resultadoErrado}`}>
            <svg
              className={s.resultadoIcone}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.4"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              {acertou ? <path d="m4 12 5.5 5.5L20 7" /> : <path d="M18 6 6 18M6 6l12 12" />}
            </svg>
            <div className={s.resultadoTexto}>
              <h3 className={s.resultadoTitulo}>{acertou ? 'Você acertou' : 'Você errou'}</h3>
              {segundosGastos !== null && segundosGastos > 0 && (
                <p className={s.tempo}>
                  {formatarDuracao(segundosGastos)}
                  <span className={s.tempoAlvo}>
                    {' · '}o ritmo do 2º dia é {formatarDuracao(RITMO_ALVO_SEGUNDOS)} por questão
                  </span>
                </p>
              )}
            </div>
          </div>

          <div className={s.resultadoCorpo}>
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
                  <p style={{ marginTop: 'var(--e-base)' }}>
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
        </div>
      )}
    </article>
  );
}
