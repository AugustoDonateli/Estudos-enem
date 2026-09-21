import type { AreaId } from '@/content/tipos';
import s from './MarcaArea.module.css';

/**
 * Marca geométrica de cada área do exame.
 *
 * Desenhadas à mão, e não geradas, por uma razão técnica antes de estética:
 * elas pintam com `currentColor` e com `var(--acento-fundo)`, então cada uma
 * assume sozinha a cor da sua área pelo mesmo `[data-area]` que já governa o
 * resto do site. Ilustração gerada vem com hexadecimal cozido dentro e
 * precisaria de cinco arquivos para fazer o que aqui um componente faz.
 *
 * São desenhos, não ícones: vivem grandes, em marca-d'água no canto do
 * cartão ou na abertura da área. Cada uma aponta para o objeto de estudo da
 * área, sem virar charada.
 */

const TRACO = 4;

function Linguagens() {
  return (
    <>
      {/* Duas aspas de abertura: o texto citado, que é o material da área. */}
      <path
        d="M14 38c0-9 5-16 13-19l2 5c-6 3-9 7-9 12h8v14H14V38Zm24 0c0-9 5-16 13-19l2 5c-6 3-9 7-9 12h8v14H38V38Z"
        fill="var(--acento-fundo)"
      />
      <path
        d="M14 38c0-9 5-16 13-19l2 5c-6 3-9 7-9 12h8v14H14V38Zm24 0c0-9 5-16 13-19l2 5c-6 3-9 7-9 12h8v14H38V38Z"
        fill="none"
        stroke="currentColor"
        strokeWidth={TRACO}
        strokeLinejoin="round"
      />
    </>
  );
}

function Humanas() {
  return (
    <>
      {/* Camadas: o tempo histórico e o relevo lidos como estratos. */}
      <path d="M8 44h48v12H8z" fill="var(--acento-fundo)" />
      <path
        d="M8 44c8-4 14-4 22 0s16 4 26 0"
        fill="none"
        stroke="currentColor"
        strokeWidth={TRACO}
        strokeLinecap="round"
      />
      <path
        d="M8 32c8-4 14-4 22 0s16 4 26 0"
        fill="none"
        stroke="currentColor"
        strokeWidth={TRACO}
        strokeLinecap="round"
        opacity="0.55"
      />
      <path
        d="M8 20c8-4 14-4 22 0s16 4 26 0"
        fill="none"
        stroke="currentColor"
        strokeWidth={TRACO}
        strokeLinecap="round"
        opacity="0.3"
      />
    </>
  );
}

function Natureza() {
  return (
    <>
      {/* Núcleo e órbita: o recorte comum a física, química e biologia. */}
      <circle cx="32" cy="32" r="9" fill="var(--acento-fundo)" />
      <circle cx="32" cy="32" r="9" fill="none" stroke="currentColor" strokeWidth={TRACO} />
      <ellipse
        cx="32"
        cy="32"
        rx="24"
        ry="11"
        fill="none"
        stroke="currentColor"
        strokeWidth={TRACO}
        transform="rotate(-28 32 32)"
      />
      <circle cx="51" cy="21" r="4.5" fill="currentColor" />
    </>
  );
}

function Matematica() {
  return (
    <>
      {/* Construção geométrica sobre eixo: a figura mais elementar da área. */}
      <path d="M12 52 52 52 52 12Z" fill="var(--acento-fundo)" />
      <path
        d="M12 52h40V12"
        fill="none"
        stroke="currentColor"
        strokeWidth={TRACO}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 52C12 30 30 12 52 12"
        fill="none"
        stroke="currentColor"
        strokeWidth={TRACO}
        strokeLinecap="round"
      />
      <circle cx="12" cy="52" r="4.5" fill="currentColor" />
    </>
  );
}

function Redacao() {
  return (
    <>
      {/* Folha pautada e o traço da caneta: as 30 linhas do exame. */}
      <path d="M14 10h30l8 8v36H14z" fill="var(--acento-fundo)" />
      <path
        d="M14 10h30l8 8v36H14z"
        fill="none"
        stroke="currentColor"
        strokeWidth={TRACO}
        strokeLinejoin="round"
      />
      <path
        d="M22 26h22M22 34h22M22 42h13"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        opacity="0.55"
      />
    </>
  );
}

const DESENHOS: Record<AreaId, () => JSX.Element> = {
  linguagens: Linguagens,
  humanas: Humanas,
  natureza: Natureza,
  matematica: Matematica,
  redacao: Redacao,
};

export function MarcaArea({
  area,
  className = '',
}: {
  area: AreaId;
  className?: string;
}) {
  const Desenho = DESENHOS[area];
  return (
    <svg
      className={`${s.marca} ${className}`}
      viewBox="0 0 64 64"
      fill="none"
      aria-hidden="true"
      focusable="false"
    >
      <Desenho />
    </svg>
  );
}
