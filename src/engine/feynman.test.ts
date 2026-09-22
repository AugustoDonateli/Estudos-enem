import { describe, expect, it } from 'vitest';
import { pontosChave } from './feynman';
import type { ConteudoAssunto } from '@/content/tipos';

function conteudo(p: Partial<ConteudoAssunto> = {}): ConteudoAssunto {
  return {
    precisaSaber: [],
    explicacao: [],
    conceitos: [],
    exemplo: { enunciado: '', passos: [], conclusao: '' },
    noEnem: { texto: '', eixos: [], sinais: [] },
    erros: [],
    questoes: [],
    revisaoRapida: [],
    ...p,
  };
}

describe('pontosChave', () => {
  it('junta o cartão de 30 segundos e o nome dos conceitos', () => {
    const pontos = pontosChave(
      conteudo({
        revisaoRapida: ['Subir p% = × (1 + p/100).', 'Sucessivos: multiplique os fatores.'],
        conceitos: [
          { termo: 'Fator de aumento', definicao: 'x' },
          { termo: 'Fator de desconto', definicao: 'x' },
        ],
      }),
    );
    expect(pontos.map((p) => p.texto)).toEqual([
      'Subir p% = × (1 + p/100).',
      'Sucessivos: multiplique os fatores.',
      'Fator de aumento',
      'Fator de desconto',
    ]);
  });

  it('não inventa ponto quando o assunto não tem nenhum dos dois', () => {
    expect(pontosChave(conteudo())).toEqual([]);
  });

  it('cada ponto tem um id estável, para usar como chave de checkbox', () => {
    const pontos = pontosChave(
      conteudo({ revisaoRapida: ['a'], conceitos: [{ termo: 'b', definicao: 'x' }] }),
    );
    expect(new Set(pontos.map((p) => p.id)).size).toBe(2);
  });
});
