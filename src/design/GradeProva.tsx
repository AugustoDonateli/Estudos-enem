import { AREAS } from '@/content/areas';
import s from './GradeProva.module.css';

/**
 * As 180 questões da prova, uma célula cada.
 *
 * Ornamento que é informação. Ler "180 questões objetivas, 45 por área" é
 * uma frase; ver 180 quadrados em quatro blocos de cor dá a escala da coisa
 * — e mostra, sem uma linha de texto, que nenhuma área pesa mais que outra
 * na contagem de itens.
 *
 * A numeração é a real: as questões de 1 a 90 caem no primeiro domingo e as
 * de 91 a 180 no segundo, na ordem impressa nos cadernos de 2025 que estão
 * neste repositório.
 */
export function GradeProva() {
  const comQuestoes = AREAS.filter(
    (a): a is typeof a & { questoes: number } => typeof a.questoes === 'number',
  );

  return (
    <figure className={s.figura}>
      <div className={s.grade} aria-hidden="true">
        {comQuestoes.map((area) => (
          <div key={area.id} className={s.bloco} data-area={area.id}>
            {Array.from({ length: area.questoes }, (_, i) => (
              <span key={i} className={s.celula} />
            ))}
          </div>
        ))}
      </div>
      <figcaption className={s.legenda}>
        {comQuestoes.map((area) => (
          <span key={area.id} className={s.item} data-area={area.id}>
            <span className={s.marca} aria-hidden="true" />
            {area.nomeCurto} <strong>{area.questoes}</strong>
          </span>
        ))}
      </figcaption>
    </figure>
  );
}
