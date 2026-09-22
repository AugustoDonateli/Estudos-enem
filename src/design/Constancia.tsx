import { diasComAtividade, sequenciaAtual, ultimosDias } from '@/engine/constancia';
import { deDiaISO, hoje, type DiaISO } from '@/engine/datas';
import type { Progresso } from '@/storage/schema';
import s from './Constancia.module.css';

/* Duas semanas: cabe em duas linhas de sete, como um calendário de parede, e
   é o horizonte em que "sequência" ainda diz algo. Em 30 dias a grade vira
   parede de quadradinhos sem leitura — o mesmo limite que a contagem
   regressiva já usa para parar de desenhar dia a dia. */
const JANELA = 14;

/**
 * Faixa de constância: quantos dos últimos 14 dias tiveram alguma atividade.
 *
 * Tom deliberado: informação, não culpa. Nada de "você perdeu sua
 * sequência" nem chama de fogo — o texto diz um número e para. Um aluno que
 * pulou terça não precisa ser lembrado disso todo dia; precisa ver que ainda
 * são 12 dos últimos 14.
 */
export function FaixaConstancia({ progresso, referencia = hoje() }: { progresso: Progresso; referencia?: DiaISO }) {
  const dias = diasComAtividade(progresso);
  if (dias.size === 0) return null;

  const janela = ultimosDias(JANELA, referencia);
  const ativos = janela.filter((d) => dias.has(d)).length;
  const sequencia = sequenciaAtual(dias, referencia);

  return (
    <div className={s.faixa}>
      <div className={s.numeros}>
        <p className={s.frase}>
          <strong>{ativos}</strong> {ativos === 1 ? 'dia' : 'dias'} dos últimos {JANELA} com
          atividade
        </p>
        {sequencia >= 2 && <p className={s.sequencia}>{sequencia} dias seguidos até agora</p>}
      </div>

      <div className={s.grade} role="img" aria-label={`${ativos} dos últimos ${JANELA} dias com atividade`}>
        {janela.map((dia) => {
          const semana = deDiaISO(dia).getDay();
          return (
            <span
              key={dia}
              className={`${s.celula} ${dias.has(dia) ? s.ativa : ''} ${
                semana === 0 || semana === 6 ? s.fimDeSemana : ''
              } ${dia === referencia ? s.hoje : ''}`}
            />
          );
        })}
      </div>
    </div>
  );
}
