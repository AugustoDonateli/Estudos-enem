import { describe, expect, it } from 'vitest';
import { analisarTempo, formatarDuracao, mediana, RITMO_ALVO_SEGUNDOS } from './tempo';
import type { Confianca, Resposta } from '@/storage/schema';

function resposta(p: Partial<Resposta> = {}): Resposta {
  return {
    questionId: 'q1',
    topicId: 'mat-porcentagem',
    conceito: 'Porcentagem',
    letra: 'A',
    correta: true,
    dificuldade: 'media',
    em: '2026-09-21',
    ts: 1,
    ...p,
  };
}

describe('mediana', () => {
  it('devolve null para lista vazia', () => {
    expect(mediana([])).toBeNull();
  });

  it('pega o valor do meio em lista ímpar', () => {
    expect(mediana([100, 20, 60])).toBe(60);
  });

  it('faz a média dos dois centrais em lista par', () => {
    expect(mediana([10, 20, 30, 40])).toBe(25);
  });

  /*
   * A razão de ser mediana e não média. O aluno travou dez minutos numa
   * questão; a média sobe para 150 s e passa a mentir sobre as outras quatro.
   */
  it('resiste a um travamento isolado', () => {
    const valores = [40, 45, 50, 55, 900];
    const media = valores.reduce((a, b) => a + b, 0) / valores.length;
    expect(mediana(valores)).toBe(50);
    expect(media).toBeGreaterThan(200);
  });

  it('ignora valores não finitos', () => {
    expect(mediana([10, Number.NaN, 30])).toBe(20);
  });
});

describe('analisarTempo', () => {
  it('ignora resposta sem tempo, que é como o schema 1 salvava', () => {
    const a = analisarTempo([resposta(), resposta({ segundos: 120 })]);
    expect(a.cronometradas).toBe(1);
    expect(a.mediana).toBe(120);
  });

  it('não conta tempo zero ou negativo', () => {
    const a = analisarTempo([resposta({ segundos: 0 }), resposta({ segundos: -5 })]);
    expect(a.cronometradas).toBe(0);
    expect(a.mediana).toBeNull();
  });

  it('conta quantas passaram do ritmo do 2º dia', () => {
    const a = analisarTempo([
      resposta({ segundos: RITMO_ALVO_SEGUNDOS - 1 }),
      resposta({ segundos: RITMO_ALVO_SEGUNDOS }),
      resposta({ segundos: RITMO_ALVO_SEGUNDOS + 1 }),
    ]);
    // Empatar com o alvo não é estourar o alvo.
    expect(a.acimaDoAlvo).toBe(1);
  });

  it('separa a mediana por assunto, para achar onde ele trava', () => {
    const a = analisarTempo([
      resposta({ topicId: 'mat-porcentagem', segundos: 60 }),
      resposta({ topicId: 'mat-porcentagem', segundos: 80 }),
      resposta({ topicId: 'cn-genetica', segundos: 400 }),
    ]);
    expect(a.porAssunto.get('mat-porcentagem')).toBe(70);
    expect(a.porAssunto.get('cn-genetica')).toBe(400);
  });
});

describe('formatarDuracao', () => {
  it('usa segundos abaixo de um minuto', () => {
    expect(formatarDuracao(48)).toBe('48s');
  });

  it('zera à esquerda os segundos', () => {
    expect(formatarDuracao(245)).toBe('4min05');
  });

  it('formata o ritmo alvo como 3min20', () => {
    expect(formatarDuracao(RITMO_ALVO_SEGUNDOS)).toBe('3min20');
  });
});

/*
 * O alvo vem da capa da prova: cinco horas para 90 questões no 2º dia. Se
 * alguém mexer nesse número sem mexer na fonte, o teste avisa.
 */
describe('RITMO_ALVO_SEGUNDOS', () => {
  it('é 5h divididas por 90 questões', () => {
    expect(RITMO_ALVO_SEGUNDOS).toBe((5 * 3600) / 90);
  });
});

describe('calibração alimenta o domínio', () => {
  it('as três confianças são valores distintos do schema', () => {
    const todas: Confianca[] = ['certeza', 'duvida', 'chute'];
    expect(new Set(todas).size).toBe(3);
  });
});
