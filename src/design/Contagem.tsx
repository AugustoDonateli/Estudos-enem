import { deDiaISO, hoje, somarDias, type DiaISO } from '@/engine/datas';
import s from './Contagem.module.css';

/**
 * Contagem regressiva em escala de cartaz.
 *
 * Substitui o padrão geométrico que ocupava esta faixa. A diferença não é
 * estética: o padrão de bolinhas era textura inventada, que não significava
 * nada; a grade abaixo é o calendário real entre hoje e o primeiro domingo
 * de prova, uma célula por dia, sete por linha começando no domingo.
 *
 * O aluno vê "48 dias" e, logo abaixo, vê o tamanho de 48 dias: sete linhas
 * e pouco. É a informação mais importante do produto, desenhada em vez de
 * escrita — e é ornamento que se pode conferir num calendário de parede.
 */
export function ContagemRegressiva({
  ate,
  rotulo,
  de = hoje(),
}: {
  ate: DiaISO;
  rotulo: string;
  de?: DiaISO;
}) {
  const dias = Math.max(0, Math.round((deDiaISO(ate).getTime() - deDiaISO(de).getTime()) / 86_400_000));

  // Uma célula por dia restante, incluindo o da prova. Acima de 12 semanas a
  // grade viraria uma parede de quadradinhos sem leitura, então ela para.
  const mostrarGrade = dias > 0 && dias <= 84;
  const celulas = mostrarGrade
    ? Array.from({ length: dias }, (_, i) => {
        const dia = somarDias(de, i + 1);
        const semana = deDiaISO(dia).getUTCDay();
        return { dia, semana, ultimo: i === dias - 1 };
      })
    : [];

  // A grade começa alinhada ao dia da semana, como num calendário de verdade.
  const vazias = celulas.length > 0 ? celulas[0]!.semana : 0;

  return (
    <div className={s.contagem}>
      <div className={s.numeroLinha}>
        <span className={s.numero}>{dias > 0 ? dias : '—'}</span>
        <span className={s.rotulo}>{rotulo}</span>
      </div>

      {mostrarGrade && (
        <div className={s.grade} aria-hidden="true">
          {Array.from({ length: vazias }, (_, i) => (
            <span key={`v${i}`} className={s.vazia} />
          ))}
          {celulas.map((c) => (
            <span
              key={c.dia}
              className={`${s.celula} ${c.semana === 0 || c.semana === 6 ? s.fimDeSemana : ''} ${
                c.ultimo ? s.prova : ''
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
