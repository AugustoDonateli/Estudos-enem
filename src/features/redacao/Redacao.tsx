import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { SECOES_REDACAO_META } from '@/content/indice';
import { useProgresso } from '@/lib/progresso';
import { Destaque, Vazio } from '@/design/Primitivos';
import { CabecalhoPagina, Metricas } from '@/design/Pagina';
import { Figura } from '@/design/Figura';
import { definirTitulo } from '@/lib/titulo';
import s from './Redacao.module.css';

const GRUPOS = [
  { tipo: 'fundamento' as const, titulo: 'Fundamentos', descricao: 'O que a prova exige e como o texto se organiza.' },
  { tipo: 'competencia' as const, titulo: 'As cinco competências', descricao: 'Uma seção para cada critério de avaliação.' },
  { tipo: 'pratica' as const, titulo: 'Prática', descricao: 'Planejar, escrever e conferir contra os critérios.' },
];

export function Redacao() {
  const { progresso } = useProgresso();
  const lidas = new Set(progresso.redacao.secoesLidas);

  useEffect(() => {
    definirTitulo(
      'Redação',
      'Critérios oficiais, as cinco competências, repertório e treino cronometrado.',
    );
  }, []);

  const producoes = [...progresso.redacao.producoes].sort((a, b) => b.em.localeCompare(a.em));

  const totalSecoes = SECOES_REDACAO_META.length;
  const totalLidas = SECOES_REDACAO_META.filter((sec) => lidas.has(sec.id)).length;

  return (
    <div className="page" data-area="redacao">
      <CabecalhoPagina
        areaId="redacao"
        rotulo="Módulo de redação"
        titulo="Redação"
        descricao="É a única parte da prova com critério público e fechado: cinco competências, de 0 a 200 pontos cada. Por isso é onde cada minuto de estudo rende mais."
        abaixo={
          <Metricas
            itens={[
              { numero: `${totalLidas}/${totalSecoes}`, rotulo: 'seções lidas' },
              { numero: 5, rotulo: 'competências avaliadas' },
              { numero: 1000, rotulo: 'pontos possíveis' },
              { numero: producoes.length, rotulo: 'redações registradas' },
            ]}
          />
        }
      />

      <Figura nome="redacao" />

      <div className="container">
        <div className="secao">
          <Destaque variante="nota" titulo="Como usar este módulo">
            <p>
              Leia os fundamentos primeiro, depois uma competência por vez. A partir daí, escreva
              uma redação por semana e confira contra os checklists — é a correção orientada por
              critério que faz a nota subir, não o volume de textos.
            </p>
          </Destaque>
        </div>

        {GRUPOS.map((grupo) => {
          const secoes = SECOES_REDACAO_META.filter((sec) => sec.tipo === grupo.tipo);
          const concluidas = secoes.filter((sec) => lidas.has(sec.id)).length;
          return (
            <section key={grupo.tipo} className="secao" aria-labelledby={`g-${grupo.tipo}`}>
              <div className="secao-cabecalho">
                <h2 id={`g-${grupo.tipo}`} className="secao-titulo">
                  {grupo.titulo}
                </h2>
                <span className="secao-meta">
                  {concluidas}/{secoes.length} lidas
                </span>
              </div>
              <p className="subtitulo" style={{ marginBottom: 'var(--e-3x)' }}>
                {grupo.descricao}
              </p>
              <ul className={s.grupo}>
                {secoes.map((sec) => (
                  <li key={sec.id} className={s.secaoItem}>
                    <Link to={`/redacao/${sec.id}`} className={s.link}>
                      <span
                        className={`${s.marca} ${lidas.has(sec.id) ? s.marcaLida : ''}`}
                        aria-hidden="true"
                      >
                        {lidas.has(sec.id) ? '✓' : (sec.competencia ?? '·')}
                      </span>
                      <span className={s.corpo}>
                        <span className={s.titulo}>{sec.titulo}</span>
                        <span className={s.resumo}>{sec.resumo}</span>
                      </span>
                      <span className={s.minutos}>{sec.minutosEstimados} min</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          );
        })}

        <section className="secao" aria-labelledby="producoes">
          <div className="secao-cabecalho">
            <h2 id="producoes" className="secao-titulo">
              Suas redações
            </h2>
            <span className="secao-meta">{producoes.length} registradas</span>
          </div>

          {producoes.length === 0 ? (
            <Vazio titulo="Nenhuma redação registrada ainda">
              <p>
                Ao terminar uma redação cronometrada, registre sua autoavaliação na seção de{' '}
                <Link to="/redacao/red-treino">treino</Link>. Comparar as autoavaliações ao longo
                das semanas mostra qual competência está travando.
              </p>
            </Vazio>
          ) : (
            <ul className={s.historico}>
              {producoes.map((p, i) => {
                const total =
                  p.autoavaliacao.c1 +
                  p.autoavaliacao.c2 +
                  p.autoavaliacao.c3 +
                  p.autoavaliacao.c4 +
                  p.autoavaliacao.c5;
                return (
                  <li key={`${p.em}-${i}`} className={s.producao}>
                    <span className={s.nota}>{total}</span>
                    <span className={s.detalhe}>
                      <span className={s.tema}>{p.tema}</span>
                      C1 {p.autoavaliacao.c1} · C2 {p.autoavaliacao.c2} · C3 {p.autoavaliacao.c3} ·
                      C4 {p.autoavaliacao.c4} · C5 {p.autoavaliacao.c5}
                      {p.observacao ? ` — ${p.observacao}` : ''}
                    </span>
                    <span className={s.data}>{formatarData(p.em)}</span>
                  </li>
                );
              })}
            </ul>
          )}
        </section>
      </div>
    </div>
  );
}

function formatarData(dia: string): string {
  const [ano, mes, d] = dia.split('-');
  return `${d}/${mes}/${ano}`;
}
