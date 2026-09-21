import { useId } from 'react';
import { Link } from 'react-router-dom';
import s from './Marca.module.css';

/**
 * Identidade visual do ENEM Estudos.
 *
 * A marca NÃO reproduz o logotipo oficial do ENEM nem do INEP: são marcas de
 * terceiros, e este é um projeto pessoal de estudo. O que existe aqui é uma
 * assinatura própria construída na mesma linguagem institucional — tipografia
 * Rawline, azul do governo federal e um símbolo geométrico autoral.
 *
 * O símbolo é uma linha de alternativas de cartão-resposta com uma marcada.
 * É a imagem mais reconhecível do exame e funciona bem em tamanho pequeno,
 * que é onde toda marca de cabeçalho realmente vive.
 */

export function SimboloENEM({ tamanho = 40 }: { tamanho?: number }) {
  return (
    <svg
      width={tamanho}
      height={tamanho}
      viewBox="0 0 40 40"
      className={s.marca}
      role="img"
      aria-label="Símbolo do ENEM Estudos: alternativas de cartão-resposta com uma marcada"
    >
      <rect width="40" height="40" rx="6" fill="var(--azul-90)" />
      {/* Três linhas de alternativas; a do meio tem uma resposta marcada. */}
      {[12, 20, 28].map((y, linha) => (
        <g key={y}>
          {[10, 18, 26, 34].map((x, coluna) => {
            const marcada = linha === 1 && coluna === 2;
            return (
              <circle
                key={x}
                cx={x}
                cy={y}
                r="2.6"
                fill={marcada ? 'var(--branco)' : 'none'}
                stroke="var(--azul-30)"
                strokeWidth="1.4"
                opacity={marcada ? 1 : 0.6}
                className={marcada ? s.marcaBolha : undefined}
              />
            );
          })}
        </g>
      ))}
    </svg>
  );
}

export function Assinatura({
  claro = false,
  compacta = false,
}: {
  claro?: boolean;
  compacta?: boolean;
}) {
  return (
    <Link
      to="/"
      className={`${s.assinatura} ${claro ? s.claro : ''} ${compacta ? s.compacta : ''}`}
      aria-label="ENEM Estudos — página inicial"
    >
      <SimboloENEM tamanho={compacta ? 34 : 42} />
      <span className={s.texto}>
        <span className={s.nome}>ENEM Estudos</span>
        <span className={s.qualificador}>Preparação intensiva</span>
      </span>
    </Link>
  );
}

/**
 * Grafismo de fundo das faixas institucionais.
 *
 * Retoma a grade de alternativas do símbolo, em escala grande e opacidade
 * baixa. É textura, não ilustração: nunca compete com o texto por cima.
 */
export function Grafismo({ variante = 'bolhas' }: { variante?: 'bolhas' | 'diagonais' }) {
  // A faixa, o hero e o rodapé desenham o grafismo na mesma página. Sem um id
  // por instância, os três <defs> colidiriam e a máscara de um apagaria a do
  // outro ao desmontar.
  const id = useId().replace(/:/g, '');
  return (
    <div className={s.grafismo} aria-hidden="true">
      <svg className={s.grafismoSvg} viewBox="0 0 400 200" preserveAspectRatio="xMaxYMid slice">
        <defs>
          <pattern id={`p-bolhas-${id}`} width="28" height="28" patternUnits="userSpaceOnUse">
            <circle cx="14" cy="14" r="4.5" fill="none" stroke="currentColor" strokeWidth="1.5" />
          </pattern>
          <pattern
            id={`p-diagonais-${id}`}
            width="18" height="18"
            patternUnits="userSpaceOnUse"
            patternTransform="rotate(45)"
          >
            <line x1="0" y1="0" x2="0" y2="18" stroke="currentColor" strokeWidth="1.5" />
          </pattern>
          <linearGradient id={`esvair-${id}`} x1="0" y1="0" x2="1" y2="0">
            <stop offset="0" stopColor="#fff" stopOpacity="0" />
            <stop offset="0.55" stopColor="#fff" stopOpacity="0.5" />
            <stop offset="1" stopColor="#fff" stopOpacity="1" />
          </linearGradient>
          <mask id={`m-esvair-${id}`}>
            <rect width="400" height="200" fill={`url(#esvair-${id})`} />
          </mask>
        </defs>
        <rect
          width="400"
          height="200"
          fill={`url(#p-${variante}-${id})`}
          mask={`url(#m-esvair-${id})`}
          opacity="0.18"
        />
      </svg>
    </div>
  );
}
