import { useId, useState, type ReactNode } from 'react';
import { Link } from 'react-router-dom';
import type { Bloco, Prioridade, Procedencia } from '@/content/tipos';
import { faixaDeDominio, ROTULO_FAIXA, type Faixa } from '@/engine/dominio';
import { Diagrama } from './Diagramas';
import s from './Primitivos.module.css';

/* ================================================================== */
/* Botões                                                              */
/* ================================================================== */

type VarianteBotao = 'primario' | 'secundario' | 'terciario' | 'contraste';

const VARIANTE: Record<VarianteBotao, string> = {
  primario: s.primario!,
  secundario: s.secundario!,
  terciario: s.terciario!,
  contraste: s.contraste!,
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
      className={[s.botao, VARIANTE[variante], largura ? s.blocoTotal : ''].filter(Boolean).join(' ')}
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
      className={[s.botao, VARIANTE[variante], largura ? s.blocoTotal : ''].filter(Boolean).join(' ')}
    >
      {children}
    </Link>
  );
}

/* ================================================================== */
/* Selos e etiquetas                                                   */
/* ================================================================== */

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
    titulo: 'Questão escrita para este site no formato do exame. Não é uma questão oficial do ENEM.',
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

/** Etiqueta que assume o acento cromático da área herdado por `data-area`. */
export function TagArea({ children }: { children: ReactNode }) {
  return <span className={`${s.tag} ${s.tagArea}`}>{children}</span>;
}

/* ================================================================== */
/* Destaques                                                           */
/* ================================================================== */

type VarianteDestaque = 'nota' | 'atencao' | 'oficial';

const CLASSE_DESTAQUE: Record<VarianteDestaque, string> = {
  nota: s.destaqueNota!,
  atencao: s.destaqueAtencao!,
  oficial: s.destaqueOficial!,
};

const ICONE_DESTAQUE: Record<VarianteDestaque, string> = {
  nota: 'M12 16v-5M12 8h.01M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0z',
  atencao: 'M12 9v4M12 17h.01M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0z',
  oficial: 'M4 4h16v13H5.5A1.5 1.5 0 0 0 4 18.5V4zM4 18.5A1.5 1.5 0 0 1 5.5 17H20v3H5.5A1.5 1.5 0 0 1 4 18.5zM8 8h8M8 12h5',
};

export function Destaque({
  variante = 'nota',
  titulo,
  children,
}: {
  variante?: VarianteDestaque;
  titulo?: string;
  children: ReactNode;
}) {
  return (
    <aside className={`${s.destaque} ${CLASSE_DESTAQUE[variante]}`}>
      <svg
        className={s.destaqueIcone}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d={ICONE_DESTAQUE[variante]} />
      </svg>
      <div className={s.destaqueCorpo}>
        {titulo && <strong className={s.destaqueTitulo}>{titulo}</strong>}
        {children}
      </div>
    </aside>
  );
}

/* ================================================================== */
/* Barra de domínio                                                    */
/* ================================================================== */

const CLASSE_FAIXA: Record<Faixa, string> = {
  desconhecido: '',
  fragil: s.faixaFragil!,
  construcao: s.faixaConstrucao!,
  solido: s.faixaSolido!,
  dominado: s.faixaDominado!,
};

export function BarraDominio({ dominio, rotulo }: { dominio: number | null; rotulo?: string }) {
  const faixa = faixaDeDominio(dominio);
  const nome = `${rotulo ? rotulo + ': ' : ''}${ROTULO_FAIXA[faixa]}`;

  // Domínio desconhecido não pode ser desenhado como barra cheia: em cinza,
  // 100% lê como "concluído". A trilha hachurada comunica ausência de dado.
  if (dominio === null) {
    return <div className={`${s.barra} ${s.barraVazia}`} role="img" aria-label={nome} />;
  }

  return (
    <div
      role="meter"
      aria-valuenow={Math.round(dominio)}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-label={nome}
      className={s.barra}
    >
      <div
        className={`${s.barraPreenchida} ${CLASSE_FAIXA[faixa]}`}
        style={{ width: `${Math.max(dominio, 2)}%` }}
      />
    </div>
  );
}

/* ================================================================== */
/* Cartão, acordeão, esqueleto, trilha                                 */
/* ================================================================== */

export function Acordeao({
  titulo,
  children,
  abertoInicial = false,
}: {
  titulo: string;
  children: ReactNode;
  abertoInicial?: boolean;
}) {
  const [aberto, setAberto] = useState(abertoInicial);
  const id = useId();
  return (
    <div className={`${s.acordeaoItem} ${aberto ? s.acordeaoAberto : ''}`}>
      <button
        type="button"
        className={s.acordeaoBotao}
        aria-expanded={aberto}
        aria-controls={id}
        onClick={() => setAberto((a) => !a)}
      >
        {titulo}
        <svg
          className={s.acordeaoSeta}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="m6 9 6 6 6-6" />
        </svg>
      </button>
      {/* Altura animada com grid 0fr→1fr: funciona sem medir o conteúdo. */}
      <div className={s.acordeaoConteudo} id={id} role="region">
        <div className={s.acordeaoInterno}>
          <div className={s.acordeaoPadding}>{children}</div>
        </div>
      </div>
    </div>
  );
}

export function Esqueleto({
  altura = 16,
  largura = '100%',
  className = '',
}: {
  altura?: number;
  largura?: string;
  className?: string;
}) {
  return (
    <div
      className={`${s.esqueleto} ${className}`}
      style={{ height: altura, width: largura }}
      aria-hidden="true"
    />
  );
}

export function Trilha({ itens }: { itens: { rotulo: string; para?: string }[] }) {
  return (
    <nav className={s.trilha} aria-label="Trilha de navegação">
      {itens.map((item, i) => (
        <span key={item.rotulo} style={{ display: 'inline-flex', gap: 'var(--e-base)' }}>
          {i > 0 && (
            <span className={s.trilhaSep} aria-hidden="true">
              ›
            </span>
          )}
          {item.para ? (
            <Link to={item.para}>{item.rotulo}</Link>
          ) : (
            <span className={s.trilhaAtual} aria-current="page">
              {item.rotulo}
            </span>
          )}
        </span>
      ))}
    </nav>
  );
}

/* ================================================================== */
/* Fórmula e estado vazio                                              */
/* ================================================================== */

/**
 * Renderizador de fórmula deliberadamente simples.
 *
 * O ENEM cobra frações, potências e raízes — não integrais. Carregar KaTeX
 * (~270 KB) para isso custaria mais que o site inteiro. A notação aceita é a
 * que se escreve no caderno: x^2, √(x), a/b.
 */
export function Formula({ children, legenda }: { children: string; legenda?: string }) {
  return (
    <div className={s.formula}>
      <span>{children}</span>
      {legenda && <span className={s.formulaLegenda}>{legenda}</span>}
    </div>
  );
}

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
      <svg
        className={s.vazioIcone}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M4 4h16v16H4zM4 9h16M9 9v11" />
      </svg>
      <p className={s.vazioTitulo}>{titulo}</p>
      {children}
      {acao && <div className="acoes" style={{ justifyContent: 'center' }}>{acao}</div>}
    </div>
  );
}

/* ================================================================== */
/* Renderizador de blocos de conteúdo                                  */
/* ================================================================== */

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
