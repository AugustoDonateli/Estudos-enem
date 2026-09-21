import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import type { Bloco, Prioridade, Procedencia } from '@/content/tipos';
import { faixaDeDominio, ROTULO_FAIXA, type Faixa } from '@/engine/dominio';
import { Diagrama } from './Diagramas';
import s from './Primitivos.module.css';

/* Botão ---------------------------------------------------------------- */

type VarianteBotao = 'primario' | 'secundario' | 'discreto';

const varianteClasse: Record<VarianteBotao, string> = {
  primario: s.primario!,
  secundario: s.secundario!,
  discreto: s.discreto!,
};

interface BotaoProps {
  children: ReactNode;
  variante?: VarianteBotao;
  onClick?: () => void;
  type?: 'button' | 'submit';
  disabled?: boolean;
  largura?: boolean;
  'aria-label'?: string;
}

export function Botao({
  children,
  variante = 'primario',
  largura,
  type = 'button',
  ...rest
}: BotaoProps) {
  return (
    <button
      type={type}
      className={[s.botao, varianteClasse[variante], largura ? s.largura : '']
        .filter(Boolean)
        .join(' ')}
      {...rest}
    >
      {children}
    </button>
  );
}

export function BotaoLink({
  to,
  children,
  variante = 'primario',
  largura,
}: {
  to: string;
  children: ReactNode;
  variante?: VarianteBotao;
  largura?: boolean;
}) {
  return (
    <Link
      to={to}
      className={[s.botao, varianteClasse[variante], largura ? s.largura : '']
        .filter(Boolean)
        .join(' ')}
    >
      {children}
    </Link>
  );
}

/* Selo de procedência --------------------------------------------------- */

const SELO: Record<Procedencia, { rotulo: string; classe: string; titulo: string }> = {
  oficial: {
    rotulo: 'Oficial ENEM',
    classe: s.seloOficial!,
    titulo: 'Questão aplicada em uma prova oficial do ENEM, com referência da edição.',
  },
  adaptada: {
    rotulo: 'Adaptada',
    classe: s.seloAdaptada!,
    titulo:
      'Questão escrita para este site a partir de uma fonte externa real, citada. Não é uma questão oficial do ENEM.',
  },
  autoral: {
    rotulo: 'Autoral',
    classe: s.seloAutoral!,
    titulo:
      'Questão escrita para este site no formato do exame. Não é uma questão oficial do ENEM.',
  },
};

export function SeloProcedencia({ procedencia }: { procedencia: Procedencia }) {
  const info = SELO[procedencia];
  return (
    <span className={`${s.selo} ${info.classe}`} title={info.titulo}>
      {info.rotulo}
    </span>
  );
}

/* Etiquetas ------------------------------------------------------------- */

const CLASSE_PRIORIDADE: Record<Prioridade, string> = {
  essencial: s.tagEssencial!,
  importante: s.tagImportante!,
  complementar: s.tagComplementar!,
};

export function TagPrioridade({ prioridade }: { prioridade: Prioridade }) {
  return (
    <span className={`${s.tag} ${CLASSE_PRIORIDADE[prioridade]}`}>
      {prioridade[0]!.toUpperCase() + prioridade.slice(1)}
    </span>
  );
}

export function Tag({ children }: { children: ReactNode }) {
  return <span className={s.tag}>{children}</span>;
}

/* Destaque -------------------------------------------------------------- */

const CLASSE_DESTAQUE = {
  nota: s.destaqueNota!,
  atencao: s.destaqueAtencao!,
  oficial: s.destaqueOficial!,
};

export function Destaque({
  variante = 'nota',
  titulo,
  children,
}: {
  variante?: 'nota' | 'atencao' | 'oficial';
  titulo?: string;
  children: ReactNode;
}) {
  return (
    <aside className={`${s.destaque} ${CLASSE_DESTAQUE[variante]}`}>
      {titulo && <strong className={s.destaqueTitulo}>{titulo}</strong>}
      {children}
    </aside>
  );
}

/* Barra de domínio ------------------------------------------------------ */

const CLASSE_FAIXA: Record<Faixa, string> = {
  desconhecido: s.faixaDesconhecido!,
  fragil: s.faixaFragil!,
  construcao: s.faixaConstrucao!,
  solido: s.faixaSolido!,
  dominado: s.faixaDominado!,
};

export function BarraDominio({ dominio, rotulo }: { dominio: number | null; rotulo?: string }) {
  const faixa = faixaDeDominio(dominio);
  const largura = dominio ?? 0;
  // Domínio desconhecido não pode ser desenhado como barra cheia: em cinza,
  // uma barra de 100% lê como "concluído". A trilha vazia tracejada comunica
  // ausência de informação, que é o que de fato existe aqui.
  if (dominio === null) {
    return (
      <div
        className={`${s.barra} ${s.barraVazia}`}
        role="img"
        aria-label={`${rotulo ? rotulo + ': ' : ''}${ROTULO_FAIXA[faixa]}`}
      />
    );
  }
  return (
    <div
      role="meter"
      aria-valuenow={Math.round(largura)}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-label={`${rotulo ? rotulo + ': ' : ''}${ROTULO_FAIXA[faixa]}`}
      className={s.barra}
    >
      <div
        className={`${s.barraPreenchida} ${CLASSE_FAIXA[faixa]}`}
        style={{ width: `${Math.max(largura, 2)}%` }}
      />
    </div>
  );
}

/* Fórmula --------------------------------------------------------------- */

/**
 * Renderizador de fórmula deliberadamente simples.
 *
 * O ENEM cobra frações, potências e raízes — não integrais. Carregar KaTeX
 * (~270KB) para isso custaria mais do que o site inteiro. A notação aceita é
 * a que se escreve no caderno: `x^2`, `√(x)`, `a/b`.
 */
export function Formula({ children, legenda }: { children: string; legenda?: string }) {
  return (
    <div className={s.formula}>
      <span>{children}</span>
      {legenda && <span className={s.formulaLegenda}>{legenda}</span>}
    </div>
  );
}

/* Estado vazio ----------------------------------------------------------- */

export function Vazio({
  titulo,
  children,
  acao,
}: {
  titulo: string;
  children?: ReactNode;
  acao?: ReactNode;
}) {
  return (
    <div className={s.vazio}>
      <p className={s.vazioTitulo}>{titulo}</p>
      {children}
      {acao && <div style={{ marginTop: 'var(--s-4)' }}>{acao}</div>}
    </div>
  );
}

/* Renderizador de blocos -------------------------------------------------- */

export function Blocos({ blocos }: { blocos: Bloco[] }) {
  return (
    <>
      {blocos.map((bloco, i) => (
        <BlocoUnico key={i} bloco={bloco} />
      ))}
    </>
  );
}

function BlocoUnico({ bloco }: { bloco: Bloco }) {
  switch (bloco.tipo) {
    case 'p':
      return <p>{bloco.texto}</p>;
    case 'lista':
      return bloco.ordenada ? (
        <ol>
          {bloco.itens.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ol>
      ) : (
        <ul>
          {bloco.itens.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      );
    case 'formula':
      return <Formula legenda={bloco.legenda}>{bloco.latexLike}</Formula>;
    case 'destaque':
      return (
        <Destaque variante={bloco.variante} titulo={bloco.titulo}>
          <p>{bloco.texto}</p>
        </Destaque>
      );
    case 'tabela':
      return (
        <div>
          <div className={s.tabelaEnvolucro}>
            <table className={s.tabela}>
              <thead>
                <tr>
                  {bloco.cabecalho.map((c, i) => (
                    <th key={i} scope="col">
                      {c}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {bloco.linhas.map((linha, i) => (
                  <tr key={i}>
                    {linha.map((celula, j) => (
                      <td key={j}>{celula}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {bloco.legenda && <span className={s.legenda}>{bloco.legenda}</span>}
        </div>
      );
    case 'citacao':
      return (
        <blockquote className={s.citacao}>
          <p>{bloco.texto}</p>
          <cite className={s.citacaoFonte}>{bloco.fonte}</cite>
        </blockquote>
      );
    case 'diagrama':
      return <Diagrama nome={bloco.nome} legenda={bloco.legenda} />;
  }
}
