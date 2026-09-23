import { useEffect, useRef, useState } from 'react';
import { deDiaISO, diferencaEmDias, hoje, PROVA_DIA_1, PROVA_DIA_2, somarDias, type DiaISO } from '@/engine/datas';
import s from './PainelPreparacao.module.css';

/**
 * Painel de preparação: a contagem regressiva desenhada como calendário.
 *
 * O número de dias sozinho é abstrato — "46" não diz se é muito ou pouco.
 * Aqui ele vem acompanhado da forma desse tempo: uma bolha por dia, sete por
 * linha começando no domingo, de amanhã até o segundo domingo de prova. O
 * aluno vê o número e, logo abaixo, o tamanho dele: seis linhas e meia.
 *
 * Duas decisões de desenho:
 *
 *  - bolha, não quadrado. É a forma do cartão-resposta, a mesma do grafismo e
 *    da marca — o tempo aparece como algo a ser preenchido;
 *  - os dois dias de prova são marcados na posição real que ocupam no
 *    calendário, em amarelo. Não é legenda solta: é a data no lugar dela.
 */

const LIMITE_GRADE = 84; // 12 semanas: acima disso a grade vira parede de pontos

function formatarData(dia: DiaISO): string {
  const [, mes, d] = dia.split('-');
  return `${d}/${mes}`;
}

/** Conta de 0 até `valor` uma vez, na entrada. Estático com reduced-motion. */
function useContagemAnimada(valor: number): number {
  const [atual, setAtual] = useState(valor);
  const jaRodou = useRef(false);

  useEffect(() => {
    if (jaRodou.current) {
      setAtual(valor);
      return;
    }
    jaRodou.current = true;

    const reduzido = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
    if (reduzido || valor <= 0) {
      setAtual(valor);
      return;
    }

    const duracao = 620;
    const inicio = performance.now();
    let frame = 0;
    const passo = (agora: number) => {
      const t = Math.min(1, (agora - inicio) / duracao);
      // Desacelera no fim: o número "assenta" em vez de parar seco.
      const suave = 1 - Math.pow(1 - t, 3);
      setAtual(Math.round(valor * suave));
      if (t < 1) frame = requestAnimationFrame(passo);
    };
    setAtual(0);
    frame = requestAnimationFrame(passo);
    return () => cancelAnimationFrame(frame);
  }, [valor]);

  return atual;
}

export function PainelPreparacao({ de = hoje() }: { de?: DiaISO }) {
  const dias = diferencaEmDias(de, PROVA_DIA_1);
  const diasAnimados = useContagemAnimada(Math.max(0, dias));
  const total = diferencaEmDias(de, PROVA_DIA_2);

  // Uma célula por dia daqui até o 2º domingo, incluindo os dois de prova.
  const mostrarGrade = total > 0 && total <= LIMITE_GRADE;
  const celulas = mostrarGrade
    ? Array.from({ length: total }, (_, i) => {
        const dia = somarDias(de, i + 1);
        return {
          dia,
          semana: deDiaISO(dia).getDay(),
          prova1: dia === PROVA_DIA_1,
          prova2: dia === PROVA_DIA_2,
        };
      })
    : [];
  const vazias = celulas.length > 0 ? celulas[0]!.semana : 0;

  return (
    <div className={s.painel}>
      <div className={s.topo}>
        <span className={s.rotulo}>Faltam</span>
        <div className={s.numeroLinha}>
          <span className={s.numero}>{dias > 0 ? diasAnimados : '—'}</span>
          <span className={s.unidade}>
            {dias === 1 ? 'dia' : 'dias'}
            <span className={s.unidadeSub}>até o 1º dia</span>
          </span>
        </div>
      </div>

      {mostrarGrade && (
        <div className={s.grade} role="img" aria-label={`${dias} dias até o primeiro dia de prova`}>
          {Array.from({ length: vazias }, (_, i) => (
            <span key={`v${i}`} className={s.vazia} />
          ))}
          {celulas.map((c, i) => (
            <span
              key={c.dia}
              className={[
                s.celula,
                c.semana === 0 || c.semana === 6 ? s.fimDeSemana : '',
                c.prova1 ? s.prova1 : '',
                c.prova2 ? s.prova2 : '',
              ]
                .filter(Boolean)
                .join(' ')}
              /* Cascata curta: 8 ms por bolha, teto de 520 ms. Mais que isso e
                 a grade demora a existir; menos e não se percebe a ordem. */
              style={{ animationDelay: `${Math.min(i * 8, 520)}ms` }}
            />
          ))}
        </div>
      )}

      <div className={s.legenda}>
        <span className={s.legendaItem}>
          <span className={`${s.legendaMarca} ${s.legendaProva1}`} aria-hidden="true" />
          1º dia <strong>{formatarData(PROVA_DIA_1)}</strong>
        </span>
        <span className={s.legendaItem}>
          <span className={`${s.legendaMarca} ${s.legendaProva2}`} aria-hidden="true" />
          2º dia <strong>{formatarData(PROVA_DIA_2)}</strong>
        </span>
      </div>
    </div>
  );
}
