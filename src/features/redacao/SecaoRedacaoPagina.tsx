import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { SECAO_REDACAO_POR_ID, SECOES_REDACAO } from '@/content/conteudo';
import { useProgresso } from '@/lib/progresso';
import { hoje } from '@/engine/datas';
import { Blocos, Botao, BotaoLink, Tag, Trilha, Vazio } from '@/design/Primitivos';
import { CabecalhoPagina } from '@/design/Pagina';
import { definirTitulo } from '@/lib/titulo';
import type { AutoavaliacaoRedacao } from '@/storage/schema';
import s from './Redacao.module.css';

export function SecaoRedacaoPagina() {
  const { secaoId } = useParams<{ secaoId: string }>();
  const { progresso, marcarSecaoRedacao } = useProgresso();
  const [marcados, setMarcados] = useState<number[]>([]);

  const secao = secaoId ? SECAO_REDACAO_POR_ID.get(secaoId) : undefined;
  const indice = SECOES_REDACAO.findIndex((x) => x.id === secaoId);
  const proxima = indice >= 0 ? SECOES_REDACAO[indice + 1] : undefined;

  useEffect(() => {
    if (secao) definirTitulo(`${secao.titulo} · Redação`, secao.resumo);
    setMarcados([]);
    window.scrollTo(0, 0);
  }, [secao]);

  if (!secao) {
    return (
      <div className="page">
        <div className="container">
          <div className="secao">
            <Vazio
              titulo="Seção não encontrada"
              acao={<BotaoLink to="/redacao">Voltar para Redação</BotaoLink>}
            />
          </div>
        </div>
      </div>
    );
  }

  const lida = progresso.redacao.secoesLidas.includes(secao.id);

  return (
    <div className="page" data-area="redacao">
      <CabecalhoPagina
        areaId="redacao"
        rotulo={secao.competencia ? `Competência ${secao.competencia}` : 'Redação'}
        titulo={secao.titulo}
        descricao={secao.resumo}
        acima={
          <Trilha
            itens={[
              { rotulo: 'Início', para: '/' },
              { rotulo: 'Redação', para: '/redacao' },
              { rotulo: secao.titulo },
            ]}
          />
        }
        abaixo={
          <div className="linha-meta" style={{ marginBottom: 0 }}>
            {secao.competencia && <Tag>Competência {secao.competencia}</Tag>}
            <Tag>{secao.minutosEstimados} min</Tag>
            {lida && <Tag>Lida</Tag>}
          </div>
        }
      />

      <div className="container">
        <div className="secao">
          <div className={`${s.conteudo} prose`}>
            <Blocos blocos={secao.conteudo} />
          </div>
        </div>

        {secao.checklist && (
          <section className="secao" aria-labelledby="checklist">
            <div className="secao-cabecalho">
              <h2 id="checklist" className="secao-titulo">
                Checklist
              </h2>
              <span className="secao-meta">
                {marcados.length}/{secao.checklist.length}
              </span>
            </div>
            <div className={s.checklist}>
              {secao.checklist.map((item, i) => (
                <label key={i} className={s.checkItem}>
                  <input
                    type="checkbox"
                    checked={marcados.includes(i)}
                    onChange={() =>
                      setMarcados((atual) =>
                        atual.includes(i) ? atual.filter((x) => x !== i) : [...atual, i],
                      )
                    }
                  />
                  <span>{item}</span>
                </label>
              ))}
            </div>
            <p className={s.avisoChecklist}>
              Este checklist é uma ferramenta de conferência da sessão — ele não é salvo entre
              visitas, porque serve para o texto que você está escrevendo agora.
            </p>
          </section>
        )}

        {secao.exercicio && (
          <section className="secao" aria-labelledby="exercicio">
            <div className="secao-cabecalho">
              <h2 id="exercicio" className="secao-titulo">
                Exercício
              </h2>
              <span className="secao-meta">{secao.exercicio.minutos} min</span>
            </div>
            <div className={s.exercicio}>
              <p className={s.exercicioTitulo}>{secao.exercicio.titulo}</p>
              <p className={s.exercicioInstrucao}>{secao.exercicio.instrucao}</p>
              <div className={s.criterios}>
                <span className={s.criteriosRotulo}>Critérios para conferir</span>
                <ul>
                  {secao.exercicio.criterios.map((crit, i) => (
                    <li key={i}>{crit}</li>
                  ))}
                </ul>
              </div>
            </div>
          </section>
        )}

        {secao.id === 'red-treino' && <RegistrarProducao />}

        <div className="acoes">
          {!lida && <Botao onClick={() => marcarSecaoRedacao(secao.id)}>Marcar como lida</Botao>}
          {proxima && (
            <BotaoLink to={`/redacao/${proxima.id}`} variante={lida ? 'primario' : 'secundario'}>
              Próxima: {proxima.titulo}
            </BotaoLink>
          )}
          <BotaoLink to="/redacao" variante="terciario">
            Voltar ao módulo
          </BotaoLink>
        </div>
      </div>
    </div>
  );
}

/**
 * Registro de autoavaliação.
 *
 * O site não dá nota automática — um corretor heurístico de C1 a C5 produziria
 * um número com aparência de autoridade e conteúdo duvidoso. O que fica
 * registrado é a autoavaliação do próprio aluno, útil para comparar semanas e
 * identificar qual competência está travando.
 */
function RegistrarProducao() {
  const { registrarProducao } = useProgresso();
  const [tema, setTema] = useState('');
  const [minutos, setMinutos] = useState(90);
  const [observacao, setObservacao] = useState('');
  const [notas, setNotas] = useState<AutoavaliacaoRedacao>({ c1: 120, c2: 120, c3: 120, c4: 120, c5: 120 });
  const [salvo, setSalvo] = useState(false);

  const total = notas.c1 + notas.c2 + notas.c3 + notas.c4 + notas.c5;

  function enviar(e: React.FormEvent) {
    e.preventDefault();
    if (!tema.trim()) return;
    registrarProducao({
      em: hoje(),
      tema: tema.trim(),
      minutos,
      autoavaliacao: notas,
      ...(observacao.trim() ? { observacao: observacao.trim() } : {}),
    });
    setSalvo(true);
    setTema('');
    setObservacao('');
  }

  return (
    <section className="secao" aria-labelledby="registrar">
      <div className="secao-cabecalho">
        <h2 id="registrar" className="secao-titulo">
          Registrar autoavaliação
        </h2>
        <span className="secao-meta">Total: {total} / 1000</span>
      </div>

      <form className={s.form} onSubmit={enviar}>
        <label className={s.campo}>
          <span className={s.rotulo}>Tema da redação</span>
          <input
            className={s.input}
            value={tema}
            onChange={(e) => setTema(e.target.value)}
            placeholder="Ex.: desafios da mobilidade urbana nas grandes cidades"
            required
          />
        </label>

        <label className={s.campo}>
          <span className={s.rotulo}>Tempo gasto (minutos)</span>
          <input
            className={s.input}
            type="number"
            min={10}
            max={300}
            value={minutos}
            onChange={(e) => setMinutos(Number(e.target.value))}
          />
        </label>

        <fieldset style={{ border: 0, padding: 0, margin: 0 }}>
          <legend className={s.rotulo}>Sua nota por competência (0 a 200)</legend>
          <div className={s.competencias}>
            {(['c1', 'c2', 'c3', 'c4', 'c5'] as const).map((chave) => (
              <label key={chave}>
                <span className={s.rotulo}>{chave.toUpperCase()}</span>
                <select
                  className={s.select}
                  value={notas[chave]}
                  onChange={(e) => setNotas({ ...notas, [chave]: Number(e.target.value) })}
                >
                  {[0, 40, 80, 120, 160, 200].map((n) => (
                    <option key={n} value={n}>
                      {n}
                    </option>
                  ))}
                </select>
              </label>
            ))}
          </div>
          <p className={s.dica}>
            Os seis valores correspondem aos seis níveis de desempenho descritos pelo INEP para
            cada competência. Seja rigoroso — uma autoavaliação generosa não mede nada.
          </p>
        </fieldset>

        <label className={s.campo}>
          <span className={s.rotulo}>O que falhou nesta redação (uma linha)</span>
          <input
            className={s.input}
            value={observacao}
            onChange={(e) => setObservacao(e.target.value)}
            placeholder="Ex.: proposta de intervenção sem detalhamento"
          />
        </label>

        <Botao type="submit">Registrar</Botao>
        {salvo && (
          <p className={s.dica} role="status" style={{ marginTop: 'var(--e-baseh)' }}>
            Registrado. O histórico aparece na página de Redação.
          </p>
        )}
      </form>
    </section>
  );
}
