import { useId } from 'react';
import { Link } from 'react-router-dom';
import s from './Marca.module.css';

/**
 * Identidade visual do ENEM Estudos.
 *
 * A marca NÃO reproduz o logotipo oficial do ENEM nem do INEP: são marcas de
 * terceiros, e este é um projeto pessoal de estudo. O que existe aqui é uma
 * assinatura própria construída na mesma linguagem institucional.
 *
 * O símbolo é um monograma **E** em placa quadrada: haste vertical e três
 * braços, em que o braço do meio é a marcação amarela do cartão-resposta.
 * Três decisões, todas por legibilidade em tamanho pequeno:
 *
 *  - a haste vertical existe para que os três braços não leiam como ícone de
 *    menu — sem ela, o desenho vira hambúrguer a 16px;
 *  - o braço do meio é mais curto e amarelo: é o gesto que define a prova
 *    (marcar) e o único ponto de cor, o que dá reconhecimento imediato;
 *  - cantos quase retos, não pílula: placa institucional, não ícone de app.
 */

export function SimboloENEM({ tamanho = 40, animado = false }: { tamanho?: number; animado?: boolean }) {
  return (
    <svg
      width={tamanho}
      height={tamanho}
      viewBox="0 0 40 40"
      className={`${s.marca} ${animado ? s.marcaAnimada : ''}`}
      role="img"
      aria-label="ENEM Estudos"
    >
      <rect width="40" height="40" rx="4" fill="var(--azul-90)" />
      {/* Haste do E */}
      <rect x="10" y="10" width="4.4" height="20" fill="var(--branco)" />
      {/* Braço superior e inferior */}
      <rect x="10" y="10" width="20" height="4.4" fill="var(--branco)" />
      <rect x="10" y="25.6" width="20" height="4.4" fill="var(--branco)" />
      {/* Braço do meio: a marcação. Mais curto, e o único elemento em cor. */}
      <rect x="10" y="17.8" width="13" height="4.4" fill="var(--alerta)" className={s.marcacao} />
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
      <SimboloENEM tamanho={compacta ? 30 : 36} animado />
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
 * Retoma a grade de alternativas do cartão-resposta, em escala grande e
 * opacidade baixa. É textura, não ilustração: nunca compete com o texto.
 */
export function Grafismo({ variante = 'bolhas' }: { variante?: 'bolhas' | 'diagonais' | 'gabarito' }) {
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
          {/*
            Linha de cartão-resposta: quatro alternativas vazias e uma marcada,
            repetidas. É o grafismo mais específico do exame que cabe em padrão.
          */}
          <pattern id={`p-gabarito-${id}`} width="76" height="26" patternUnits="userSpaceOnUse">
            <circle cx="10" cy="13" r="4" fill="none" stroke="currentColor" strokeWidth="1.4" />
            <circle cx="26" cy="13" r="4" fill="currentColor" />
            <circle cx="42" cy="13" r="4" fill="none" stroke="currentColor" strokeWidth="1.4" />
            <circle cx="58" cy="13" r="4" fill="none" stroke="currentColor" strokeWidth="1.4" />
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
          opacity={variante === 'gabarito' ? 0.07 : 0.18}
        />
      </svg>
    </div>
  );
}
