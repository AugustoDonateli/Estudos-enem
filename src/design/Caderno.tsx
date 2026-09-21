import type { ReactNode } from 'react';
import { code39 } from './code39';
import s from './Caderno.module.css';

/**
 * Linguagem visual do caderno de prova.
 *
 * O objeto que o aluno realmente segura no dia do ENEM não é um portal de
 * governo: é um caderno impresso, com faixa de cor na capa, tarja de código
 * de barras no alto de cada página, questões numeradas em grotesca e texto
 * justificado em coluna estreita. Esses componentes trazem essa gramática
 * para a tela.
 *
 * O limite é rígido e vale para todos eles: a moldura imita o caderno, o
 * conteúdo nunca se disfarça de oficial. Uma questão autoral jamais recebe
 * numeração de prova, e o código de barras codifica identificador deste site
 * — nunca um código de caderno do INEP.
 */

/**
 * Tarja Code 39, como a que abre cada página dos cadernos oficiais.
 *
 * O desenho sai da codificação de verdade: um leitor de código de barras lê
 * o que está escrito embaixo. É essa honestidade que separa o artefato da
 * textura decorativa que ele substituiu.
 */
export function Tarja({
  valor,
  altura = 28,
  className = '',
}: {
  valor: string;
  altura?: number;
  className?: string;
}) {
  const simbolo = code39(valor);
  return (
    <div className={`${s.tarja} ${className}`}>
      <svg
        className={s.tarjaSvg}
        viewBox={`0 0 ${simbolo.largura} ${altura}`}
        height={altura}
        preserveAspectRatio="xMinYMid meet"
        aria-hidden="true"
        focusable="false"
      >
        {simbolo.barras.map((b) => (
          <rect key={b.x} x={b.x} y="0" width={b.largura} height={altura} fill="currentColor" />
        ))}
      </svg>
      <span className={s.tarjaTexto}>{simbolo.texto}</span>
    </div>
  );
}

/**
 * Faixa de capa: `1º DIA · CADERNO 1 | AZUL`.
 *
 * A capa das provas de 2025 deste repositório traz exatamente essa linha, e a
 * cor nomeia o caderno. Só aparece onde há um caderno real para nomear — a
 * composição de cada dia de prova e o cabeçalho de questão oficial.
 */
export function FaixaCaderno({
  dia,
  caderno,
  nota,
  className = '',
}: {
  dia: 1 | 2;
  caderno?: string;
  nota?: string;
  className?: string;
}) {
  return (
    <p className={`${s.faixaCaderno} ${className}`}>
      <span className={s.faixaDia}>{dia}º DIA</span>
      {caderno && (
        <>
          <span className={s.faixaBarra} aria-hidden="true" />
          <span className={s.faixaCad}>CADERNO {caderno.toUpperCase()}</span>
        </>
      )}
      {nota && (
        <>
          <span className={s.faixaBarra} aria-hidden="true" />
          <span className={s.faixaNota}>{nota}</span>
        </>
      )}
    </p>
  );
}

/**
 * Bloco de instruções, no formato da página 1 do caderno.
 *
 * A prova abre com "LEIA ATENTAMENTE AS INSTRUÇÕES SEGUINTES" e uma lista
 * numerada em grotesca estreita. É o formato mais reconhecível do exame e
 * serve bem a qualquer tela que explique uma regra do site.
 */
export function Instrucoes({
  titulo = 'Leia atentamente as instruções seguintes',
  itens,
}: {
  titulo?: string;
  itens: ReactNode[];
}) {
  return (
    <section className={s.instrucoes} aria-label={titulo}>
      <h2 className={s.instrucoesTitulo}>{titulo}</h2>
      <ol className={s.instrucoesLista}>
        {itens.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ol>
    </section>
  );
}
