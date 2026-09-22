import { useEffect, useMemo, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { AREAS } from '@/content/areas';
import { CATALOGO, assuntosDaArea } from '@/content/indice';
import { useProgresso } from '@/lib/progresso';
import {
  analisarErros,
  analisarCalibracao,
  ROTULO_TIPO_ERRO,
  EXPLICACAO_TIPO_ERRO,
} from '@/engine/erros';
import { analisarTempo, formatarDuracao, RITMO_ALVO_SEGUNDOS } from '@/engine/tempo';
import { diasComAtividade } from '@/engine/constancia';
import { ROTULO_CONFIANCA } from '@/storage/schema';
import { faixaDeDominio, ROTULO_FAIXA } from '@/engine/dominio';
import { exportarJSON, importarJSON } from '@/storage/persist';
import { BarraDominio, Botao, BotaoLink, Destaque, Vazio } from '@/design/Primitivos';
import { CabecalhoPagina, Metricas } from '@/design/Pagina';
import { FaixaConstancia } from '@/design/Constancia';
import { definirTitulo } from '@/lib/titulo';
import s from './Progresso.module.css';

export function Progresso() {
  const { progresso, substituirProgresso, reiniciar } = useProgresso();
  const [mensagem, setMensagem] = useState<{ texto: string; ok: boolean } | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    definirTitulo('Progresso', 'Domínio por assunto, padrão de erros e backup dos seus dados.');
  }, []);

  const padrao = useMemo(() => analisarErros(progresso.respostas, 200), [progresso.respostas]);
  const calibracao = useMemo(() => analisarCalibracao(progresso.respostas), [progresso.respostas]);
  const tempo = useMemo(() => analisarTempo(progresso.respostas), [progresso.respostas]);
  const temAtividade = useMemo(() => diasComAtividade(progresso).size > 0, [progresso]);

  const totais = useMemo(() => {
    const respostas = progresso.respostas;
    const estudados = CATALOGO.filter((a) => progresso.assuntos[a.id]?.lido).length;
    const acertos = respostas.filter((r) => r.correta).length;
    return {
      estudados,
      respondidas: respostas.length,
      acertos,
      redacoes: progresso.redacao.producoes.length,
    };
  }, [progresso]);

  function baixar() {
    const blob = new Blob([exportarJSON(progresso)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `estudos-enem-${progresso.criadoEm}.json`;
    a.click();
    URL.revokeObjectURL(url);
    setMensagem({ texto: 'Backup baixado.', ok: true });
  }

  async function importar(arquivo: File) {
    const texto = await arquivo.text();
    const resultado = importarJSON(texto);
    if (resultado.ok) {
      substituirProgresso(resultado.progresso);
      setMensagem({ texto: 'Progresso restaurado a partir do arquivo.', ok: true });
    } else {
      setMensagem({ texto: resultado.erro, ok: false });
    }
  }

  return (
    <div className="page">
      <CabecalhoPagina
        rotulo="Acompanhamento"
        titulo="Progresso"
        descricao="O número que importa aqui não é porcentagem de acertos — é domínio por conceito, que é o que a prova realmente mede."
        abaixo={
          <Metricas
            itens={[
              { numero: totais.estudados, rotulo: `assuntos estudados de ${CATALOGO.length}` },
              { numero: totais.respondidas, rotulo: 'questões respondidas' },
              { numero: totais.acertos, rotulo: 'acertos acumulados' },
              { numero: totais.redacoes, rotulo: 'redações registradas' },
            ]}
          />
        }
      />

      <div className="container">
        {temAtividade && (
          <section className="secao" aria-labelledby="constancia">
            <div className="secao-cabecalho">
              <h2 id="constancia" className="secao-titulo">
                Constância
              </h2>
            </div>
            <FaixaConstancia progresso={progresso} />
          </section>
        )}

        {padrao.frase && padrao.dominante && (
          <div className="secao">
            <Destaque variante="atencao" titulo="O que seus erros dizem">
              <p>{padrao.frase}</p>
              <p style={{ marginTop: 'var(--e-base)' }}>{EXPLICACAO_TIPO_ERRO[padrao.dominante]}</p>
            </Destaque>
          </div>
        )}

        {/* Calibração: o aluno sabe quando não sabe? É o único diagnóstico
            aqui que não fala de conteúdo, e sim de autoconhecimento. */}
        {calibracao.total > 0 && (
          <section className="secao" aria-labelledby="calibracao">
            <div className="secao-cabecalho">
              <h2 id="calibracao" className="secao-titulo">
                Você sabe quando não sabe?
              </h2>
              <span className="secao-meta">{calibracao.total} respostas com confiança</span>
            </div>

            {calibracao.frase && <p className="subtitulo">{calibracao.frase}</p>}

            {!calibracao.confiavel && (
              <p className="subtitulo">
                Responda mais algumas questões: com poucas respostas, estas porcentagens mudam a
                cada questão e não dizem nada.
              </p>
            )}

            <ul className={s.erros}>
              {calibracao.faixas.map((faixa) => (
                <li key={faixa.confianca} className={s.erroLinha}>
                  <span className={s.erroNome}>{ROTULO_CONFIANCA[faixa.confianca]}</span>
                  <span className={s.erroBarra} aria-hidden="true">
                    <span
                      className={s.erroPreenchida}
                      style={{
                        width: `${(faixa.taxa ?? 0) * 100}%`,
                        background:
                          faixa.confianca === 'certeza' ? 'var(--azul-70)' : 'var(--cinza-40)',
                      }}
                    />
                  </span>
                  <span className={s.erroValor}>
                    {faixa.taxa === null
                      ? '—'
                      : `${Math.round(faixa.taxa * 100)}% de ${faixa.total}`}
                  </span>
                </li>
              ))}
            </ul>

            {calibracao.certezaPerigosa && (
              <div style={{ marginTop: 'var(--e-3x)' }}>
                <Destaque variante="atencao" titulo="Atenção: certeza de coisa errada">
                  <p>
                    Você erra com frequência justamente onde diz ter certeza. Isso não é
                    desconhecimento — é um equívoco instalado, e é mais perigoso, porque quem
                    está errado com convicção não volta para conferir. Nas questões que você
                    marcou como certeza e errou, leia o diagnóstico da alternativa inteiro.
                  </p>
                </Destaque>
              </div>
            )}
          </section>
        )}

        {/* Ritmo: o ENEM reprova por tempo, não só por conteúdo. */}
        {tempo.cronometradas > 0 && tempo.mediana !== null && (
          <section className="secao" aria-labelledby="ritmo">
            <div className="secao-cabecalho">
              <h2 id="ritmo" className="secao-titulo">
                Ritmo
              </h2>
              <span className="secao-meta">{tempo.cronometradas} questões cronometradas</span>
            </div>
            <Metricas
              itens={[
                { numero: formatarDuracao(tempo.mediana), rotulo: 'por questão, na mediana' },
                {
                  numero: formatarDuracao(RITMO_ALVO_SEGUNDOS),
                  rotulo: 'é o ritmo do 2º dia de prova',
                },
                { numero: tempo.acimaDoAlvo, rotulo: 'questões acima desse ritmo' },
              ]}
            />
            <p className="subtitulo" style={{ marginTop: 'var(--e-3x)' }}>
              O 2º dia tem cinco horas para 90 questões, o que dá {formatarDuracao(RITMO_ALVO_SEGUNDOS)}{' '}
              cada — está impresso na capa do caderno. O 1º dia não entra nesta conta porque suas
              5h30 incluem a redação, e quanto reservar para ela é escolha sua.
            </p>
          </section>
        )}

        {padrao.porTipo.length > 0 && (
          <section className="secao" aria-labelledby="tipos">
            <div className="secao-cabecalho">
              <h2 id="tipos" className="secao-titulo">
                Erros por tipo
              </h2>
              <span className="secao-meta">{padrao.total} erros registrados</span>
            </div>
            <ul className={s.erros}>
              {padrao.porTipo.map((t) => (
                <li key={t.tipo} className={s.erroLinha}>
                  <span className={s.erroNome}>Erro de {ROTULO_TIPO_ERRO[t.tipo]}</span>
                  <span className={s.erroBarra} aria-hidden="true">
                    <span
                      className={s.erroPreenchida}
                      style={{ width: `${(t.quantidade / padrao.total) * 100}%` }}
                    />
                  </span>
                  <span className={s.erroValor}>{t.quantidade}</span>
                </li>
              ))}
            </ul>
            <div className="acoes">
              <BotaoLink to="/questoes?erradas=1" variante="secundario">
                Praticar os conceitos que errei
              </BotaoLink>
            </div>
          </section>
        )}

        <section className="secao" aria-labelledby="dominio">
          <div className="secao-cabecalho">
            <h2 id="dominio" className="secao-titulo">
              Domínio por assunto
            </h2>
            <span className="secao-meta">quatro áreas objetivas</span>
          </div>

          {totais.respondidas === 0 && totais.estudados === 0 ? (
            <Vazio
              titulo="Nada registrado ainda"
              acao={<BotaoLink to="/diagnostico">Fazer o diagnóstico</BotaoLink>}
            >
              <p>
                O domínio aparece aqui conforme você estuda e responde questões.
              </p>
            </Vazio>
          ) : (
            AREAS.filter((a) => a.id !== 'redacao').map((area) => {
              const assuntos = assuntosDaArea(area.id);
              const avaliados = assuntos
                .map((a) => progresso.assuntos[a.id]?.dominio)
                .filter((d): d is number => typeof d === 'number');
              const media =
                avaliados.length > 0
                  ? avaliados.reduce((acc, d) => acc + d, 0) / assuntos.length
                  : null;
              return (
                <div key={area.id} className={s.areaBloco} data-area={area.id}>
                  <div className={s.areaTopo}>
                    <span className={s.areaNome}>{area.nomeCurto}</span>
                    <span className="secao-meta">{ROTULO_FAIXA[faixaDeDominio(media)]}</span>
                  </div>
                  <BarraDominio dominio={media} rotulo={area.nomeCurto} />
                  <ul className={s.assuntos}>
                    {assuntos.map((assunto) => {
                      const d = progresso.assuntos[assunto.id]?.dominio ?? null;
                      return (
                        <li key={assunto.id} className={s.assunto}>
                          <Link to={`/assunto/${assunto.id}`} className={s.assuntoNome}>
                            {assunto.titulo}
                          </Link>
                          <span className={s.assuntoBarra}>
                            <BarraDominio dominio={d} rotulo={assunto.titulo} />
                          </span>
                          <span className={s.assuntoFaixa}>{ROTULO_FAIXA[faixaDeDominio(d)]}</span>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              );
            })
          )}
        </section>

        <section className="secao" aria-labelledby="dados">
          <div className="secao-cabecalho">
            <h2 id="dados" className="secao-titulo">
              Seus dados
            </h2>
            <span className="secao-meta">armazenados só neste navegador</span>
          </div>
          <div className={s.dados}>
            <p>
              Todo o seu progresso fica salvo apenas neste navegador, sem conta e sem servidor.
              Isso é bom para privacidade e ruim para acidentes: limpar os dados do navegador
              apaga tudo. Baixe um backup de vez em quando.
            </p>
            <div className="acoes">
              <Botao onClick={baixar} variante="secundario">
                Baixar backup
              </Botao>
              <Botao onClick={() => inputRef.current?.click()} variante="secundario">
                Restaurar de um arquivo
              </Botao>
              <input
                ref={inputRef}
                type="file"
                accept="application/json,.json"
                className="visually-hidden"
                onChange={(e) => {
                  const arquivo = e.target.files?.[0];
                  if (arquivo) void importar(arquivo);
                  e.target.value = '';
                }}
              />
            </div>
            {mensagem && (
              <p
                className={`${s.mensagem} ${mensagem.ok ? s.mensagemOk : s.mensagemErro}`}
                role="status"
              >
                {mensagem.texto}
              </p>
            )}

            <div className={s.perigo}>
              <p className={s.perigoAviso}>
                A ação abaixo é definitiva e não tem desfazer.
              </p>
              <Botao
                variante="terciario"
                onClick={() => {
                  if (
                    window.confirm(
                      'Isso apaga todo o seu progresso neste navegador e não pode ser desfeito. Continuar?',
                    )
                  ) {
                    reiniciar();
                    setMensagem({ texto: 'Progresso reiniciado.', ok: true });
                  }
                }}
              >
                Apagar todo o progresso
              </Botao>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
