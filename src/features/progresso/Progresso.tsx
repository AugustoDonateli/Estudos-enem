import { useEffect, useMemo, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { AREAS } from '@/content/areas';
import { CATALOGO, assuntosDaArea } from '@/content/indice';
import { useProgresso } from '@/lib/progresso';
import { analisarErros, ROTULO_TIPO_ERRO, EXPLICACAO_TIPO_ERRO } from '@/engine/erros';
import { faixaDeDominio, ROTULO_FAIXA } from '@/engine/dominio';
import { exportarJSON, importarJSON } from '@/storage/persist';
import { BarraDominio, Botao, BotaoLink, Destaque, Vazio } from '@/design/Primitivos';
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
      <header className="cabecalho-pagina">
        <h1>Progresso</h1>
        <p className="subtitulo">
          O número que importa aqui não é porcentagem de acertos — é domínio por conceito, que
          é o que a prova realmente mede.
        </p>
      </header>

      <div className={s.resumo}>
        <div>
          <span className={s.numero}>{totais.estudados}</span>
          <span className={s.rotulo}>assuntos estudados de {CATALOGO.length}</span>
        </div>
        <div>
          <span className={s.numero}>{totais.respondidas}</span>
          <span className={s.rotulo}>questões respondidas</span>
        </div>
        <div>
          <span className={s.numero}>{totais.acertos}</span>
          <span className={s.rotulo}>acertos acumulados</span>
        </div>
        <div>
          <span className={s.numero}>{totais.redacoes}</span>
          <span className={s.rotulo}>redações registradas</span>
        </div>
      </div>

      {padrao.frase && padrao.dominante && (
        <div style={{ marginTop: 'var(--s-8)' }}>
          <Destaque variante="atencao" titulo="O que seus erros dizem">
            <p>{padrao.frase}</p>
            <p style={{ marginTop: 'var(--s-2)' }}>{EXPLICACAO_TIPO_ERRO[padrao.dominante]}</p>
          </Destaque>
        </div>
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
        </div>

        {totais.respondidas === 0 && totais.estudados === 0 ? (
          <Vazio
            titulo="Nada registrado ainda"
            acao={<BotaoLink to="/diagnostico">Fazer o diagnóstico</BotaoLink>}
          >
            <p style={{ margin: '0 auto' }}>
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
              <div key={area.id} className={s.areaBloco}>
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
            <Botao
              variante="discreto"
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
  );
}
