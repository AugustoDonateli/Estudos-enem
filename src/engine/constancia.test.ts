import { describe, expect, it } from 'vitest';
import { diasComAtividade, sequenciaAtual, ultimosDias } from './constancia';
import { estadoInicialAssunto, progressoInicial } from '@/storage/schema';
import type { Progresso } from '@/storage/schema';

function base(p: Partial<Progresso> = {}): Progresso {
  return { ...progressoInicial('2026-09-01'), ...p };
}

describe('diasComAtividade', () => {
  it('não retorna nada de um progresso vazio', () => {
    expect(diasComAtividade(base()).size).toBe(0);
  });

  it('conta o dia de uma resposta', () => {
    const p = base({
      respostas: [
        {
          questionId: 'q1',
          topicId: 'mat-porcentagem',
          conceito: 'Porcentagem',
          letra: 'A',
          correta: true,
          dificuldade: 'media',
          em: '2026-09-10',
          ts: 1,
        },
      ],
    });
    expect(diasComAtividade(p)).toEqual(new Set(['2026-09-10']));
  });

  it('ignora um dia do plano em que tudo foi desmarcado', () => {
    const p = base({ planoConcluido: { '2026-09-11': [] } });
    expect(diasComAtividade(p).size).toBe(0);
  });

  it('conta um dia do plano com pelo menos um item marcado', () => {
    const p = base({ planoConcluido: { '2026-09-11': ['item-1'] } });
    expect(diasComAtividade(p)).toEqual(new Set(['2026-09-11']));
  });

  it('conta o último estudo de um assunto', () => {
    const p = base({
      assuntos: {
        'mat-porcentagem': { ...estadoInicialAssunto(), lido: true, ultimoEstudo: '2026-09-12' },
      },
    });
    expect(diasComAtividade(p)).toEqual(new Set(['2026-09-12']));
  });

  it('conta uma explicação do Modo Feynman e uma redação registrada', () => {
    const p = base({
      explicacoes: [{ topicId: 'mat-porcentagem', em: '2026-09-13', texto: 'x', pontosCobertos: 1, totalPontos: 3 }],
      redacao: {
        secoesLidas: [],
        producoes: [
          { em: '2026-09-14', tema: 'x', minutos: 20, autoavaliacao: { c1: 0, c2: 0, c3: 0, c4: 0, c5: 0 } },
        ],
      },
    });
    expect(diasComAtividade(p)).toEqual(new Set(['2026-09-13', '2026-09-14']));
  });

  it('junta várias fontes sem duplicar o mesmo dia', () => {
    const p = base({
      respostas: [
        {
          questionId: 'q1',
          topicId: 'mat-porcentagem',
          conceito: 'Porcentagem',
          letra: 'A',
          correta: true,
          dificuldade: 'media',
          em: '2026-09-15',
          ts: 1,
        },
      ],
      planoConcluido: { '2026-09-15': ['item-1'] },
    });
    expect(diasComAtividade(p)).toEqual(new Set(['2026-09-15']));
  });
});

describe('ultimosDias', () => {
  it('devolve n dias terminando em `ate`, do mais antigo ao mais recente', () => {
    expect(ultimosDias(3, '2026-09-15')).toEqual(['2026-09-13', '2026-09-14', '2026-09-15']);
  });

  it('com n = 1 devolve só o próprio dia', () => {
    expect(ultimosDias(1, '2026-09-15')).toEqual(['2026-09-15']);
  });
});

describe('sequenciaAtual', () => {
  it('é zero sem nenhum dia ativo', () => {
    expect(sequenciaAtual(new Set(), '2026-09-15')).toBe(0);
  });

  it('conta os dias seguidos terminando hoje', () => {
    const dias = new Set(['2026-09-13', '2026-09-14', '2026-09-15']);
    expect(sequenciaAtual(dias, '2026-09-15')).toBe(3);
  });

  it('para na primeira lacuna', () => {
    const dias = new Set(['2026-09-10', '2026-09-14', '2026-09-15']);
    expect(sequenciaAtual(dias, '2026-09-15')).toBe(2);
  });

  /*
   * Abrir o site de manhã, antes de estudar, não pode zerar a sequência de
   * ontem à noite — só conta como quebrada depois de um dia inteiro em branco.
   */
  it('não zera a sequência só porque hoje ainda não teve atividade', () => {
    const dias = new Set(['2026-09-13', '2026-09-14']);
    expect(sequenciaAtual(dias, '2026-09-15')).toBe(2);
  });

  it('zera de fato quando ontem também está vazio', () => {
    const dias = new Set(['2026-09-10']);
    expect(sequenciaAtual(dias, '2026-09-15')).toBe(0);
  });
});
