import { useEffect, useMemo, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ASSUNTO_POR_ID } from '@/content/conteudo';
import { AREA_POR_ID } from '@/content/areas';
import { useProgresso } from '@/lib/progresso';
import { useDitado } from '@/lib/voz';
import { pontosChave } from '@/engine/feynman';
import { Botao, BotaoLink, Destaque, Trilha, Vazio } from '@/design/Primitivos';
import { CabecalhoPagina } from '@/design/Pagina';
import { definirTitulo } from '@/lib/titulo';
import s from './Feynman.module.css';

/**
 * Modo Feynman: explicar um assunto de memória, como para um amigo que nunca
 * estudou aquilo, e só depois conferir o que ficou de fora.
 *
 * Decisão deliberada, coerente com a redação: nenhuma IA lê ou corrige o
 * texto. O aluno é quem julga, contra os pontos-chave que o próprio conteúdo
 * já lista — e o resultado dessa autoavaliação não vira número de domínio,
 * porque autoavaliação não é a mesma coisa que acerto medido.
 */
export function Feynman() {
  const { topicId } = useParams<{ topicId: string }>();
  const { registrarExplicacao } = useProgresso();

  const [texto, setTexto] = useState('');
  const [etapa, setEtapa] = useState<'explicar' | 'conferir' | 'feito'>('explicar');
  const [marcados, setMarcados] = useState<Set<string>>(new Set());
  const [avisoVozAberto, setAvisoVozAberto] = useState(false);

  const ditado = useDitado((trecho) => {
    setTexto((atual) => (atual.trim() ? `${atual.trim()} ${trecho}` : trecho));
  });

  const assunto = topicId ? ASSUNTO_POR_ID.get(topicId) : undefined;

  useEffect(() => {
    if (assunto) definirTitulo(`Explicar: ${assunto.titulo}`, 'Modo Feynman — explique de memória.');
    setTexto('');
    setEtapa('explicar');
    setMarcados(new Set());
    setAvisoVozAberto(false);
    window.scrollTo(0, 0);
  }, [assunto]);

  // Para o microfone ao trocar de etapa ou sair da página — ditar durante a
  // conferência dos pontos-chave não faz sentido e deixaria o mic ligado.
  useEffect(() => {
    if (etapa !== 'explicar') ditado.parar();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [etapa]);

  const pontos = useMemo(() => (assunto ? pontosChave(assunto.conteudo) : []), [assunto]);

  if (!assunto || !topicId) {
    return (
      <div className="page">
        <div className="container">
          <div className="secao">
            <Vazio
              titulo="Assunto não encontrado"
              acao={<BotaoLink to="/areas">Ver todas as áreas</BotaoLink>}
            >
              <p>Pode ser um assunto ainda não escrito.</p>
            </Vazio>
          </div>
        </div>
      </div>
    );
  }

  const area = AREA_POR_ID[assunto.areaId];
  const idAssunto = assunto.id;

  function alternarMarcado(id: string) {
    setMarcados((atual) => {
      const proximo = new Set(atual);
      if (proximo.has(id)) proximo.delete(id);
      else proximo.add(id);
      return proximo;
    });
  }

  function concluir() {
    registrarExplicacao({
      topicId: idAssunto,
      texto: texto.trim(),
      pontosCobertos: marcados.size,
      totalPontos: pontos.length,
    });
    setEtapa('feito');
  }

  function comecarADitar() {
    setAvisoVozAberto(false);
    ditado.iniciar();
  }

  return (
    <div className="page" data-area={area.id}>
      <CabecalhoPagina
        areaId={area.id}
        rotulo="Modo Feynman"
        titulo={`Explicar: ${assunto.titulo}`}
        descricao="Explique como se fosse para um amigo que nunca estudou isso. Escreva ou dite — sem consultar o conteúdo."
        acima={
          <Trilha
            itens={[
              { rotulo: 'Início', para: '/' },
              { rotulo: assunto.titulo, para: `/assunto/${assunto.id}` },
              { rotulo: 'Explicar' },
            ]}
          />
        }
      />

      <div className="container">
        {etapa === 'explicar' && (
          <section className="secao" aria-labelledby="explicar-titulo">
            <div className="secao-cabecalho">
              <h2 id="explicar-titulo" className="secao-titulo">
                Sua explicação
              </h2>
            </div>

            <div className={s.campo}>
              <textarea
                className={s.textarea}
                value={texto}
                onChange={(e) => setTexto(e.target.value)}
                placeholder="Comece explicando a ideia central, sem jargão técnico…"
                rows={8}
                aria-label="Sua explicação do assunto"
              />
              {ditado.parcial && <p className={s.parcial}>{ditado.parcial}</p>}
            </div>

            {ditado.suportado && (
              <div className={s.vozLinha}>
                {!ditado.ouvindo ? (
                  <Botao
                    variante="secundario"
                    onClick={() => setAvisoVozAberto(true)}
                    aria-label="Ditar explicação por voz"
                  >
                    <IconeMicrofone /> Ditar por voz
                  </Botao>
                ) : (
                  <Botao variante="secundario" onClick={ditado.parar}>
                    <IconeMicrofone /> Parar de ditar
                  </Botao>
                )}
                {ditado.ouvindo && (
                  <span className={s.ouvindoIndicador} role="status">
                    Ouvindo…
                  </span>
                )}
              </div>
            )}

            {ditado.erro && (
              <p className={s.erroVoz} role="alert">
                {ditado.erro}
              </p>
            )}

            {avisoVozAberto && (
              <div style={{ marginTop: 'var(--e-2x)' }}>
                <Destaque variante="nota" titulo="Antes de ligar o microfone">
                  <p>
                    O reconhecimento de voz deste navegador envia o áudio para servidores externos
                    (no Chrome, do Google) para transcrever — diferente do resto do site, em que
                    nada sai do seu aparelho. Só use se estiver de acordo com isso.
                  </p>
                  <div className="acoes" style={{ marginTop: 'var(--e-2x)' }}>
                    <Botao onClick={comecarADitar}>Ativar microfone e começar a falar</Botao>
                    <Botao variante="terciario" onClick={() => setAvisoVozAberto(false)}>
                      Cancelar
                    </Botao>
                  </div>
                </Destaque>
              </div>
            )}

            <div className="acoes">
              <Botao onClick={() => setEtapa('conferir')} disabled={texto.trim().length === 0}>
                Revelar pontos-chave
              </Botao>
            </div>
          </section>
        )}

        {etapa === 'conferir' && (
          <>
            <section className="secao" aria-labelledby="sua-explicacao-titulo">
              <div className="secao-cabecalho">
                <h2 id="sua-explicacao-titulo" className="secao-titulo">
                  O que você escreveu
                </h2>
              </div>
              <blockquote className={s.recapitulacao}>{texto}</blockquote>
              <div className="acoes">
                <Botao variante="terciario" onClick={() => setEtapa('explicar')}>
                  Voltar e completar
                </Botao>
              </div>
            </section>

            <section className="secao" aria-labelledby="pontos-titulo">
              <div className="secao-cabecalho">
                <h2 id="pontos-titulo" className="secao-titulo">
                  Você cobriu isso?
                </h2>
                <span className="secao-meta">
                  {marcados.size} de {pontos.length}
                </span>
              </div>
              <p className="subtitulo">
                Marque só o que você de fato disse, de memória — não o que parece óbvio agora que
                está lendo.
              </p>
              <ul className={s.checklist}>
                {pontos.map((p) => (
                  <li key={p.id}>
                    <label className={s.itemChecklist}>
                      <input
                        type="checkbox"
                        checked={marcados.has(p.id)}
                        onChange={() => alternarMarcado(p.id)}
                      />
                      <span>{p.texto}</span>
                    </label>
                  </li>
                ))}
              </ul>

              <div className="acoes">
                <Botao onClick={concluir}>Concluir explicação</Botao>
              </div>
            </section>
          </>
        )}

        {etapa === 'feito' && (
          <section className="secao" aria-labelledby="feito-titulo">
            <div className="secao-cabecalho">
              <h2 id="feito-titulo" className="secao-titulo">
                Registrado
              </h2>
            </div>
            <p className="subtitulo">
              Você cobriu {marcados.size} de {pontos.length} pontos-chave desta vez. Isso não vira
              nota de domínio — é autoavaliação, e vale como lembrete do que revisar, não como
              medida exata.
            </p>
            <div className="acoes">
              <BotaoLink to={`/assunto/${assunto.id}`} variante="secundario">
                Voltar para o assunto
              </BotaoLink>
              <BotaoLink to="/">Ver plano de hoje</BotaoLink>
            </div>
          </section>
        )}
      </div>
    </div>
  );
}

function IconeMicrofone() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="16"
      height="16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      style={{ marginRight: '6px', verticalAlign: '-3px' }}
    >
      <rect x="9" y="2" width="6" height="11" rx="3" />
      <path d="M5 10a7 7 0 0 0 14 0" />
      <path d="M12 17v4" />
      <path d="M8 21h8" />
    </svg>
  );
}
