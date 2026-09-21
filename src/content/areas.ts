import type { Area, AreaId } from './tipos';

/**
 * As cinco áreas.
 *
 * `questoes` e `dia` são fatos oficiais do formato do ENEM (INEP): quatro provas
 * objetivas de 45 questões, Linguagens e Ciências Humanas mais a redação no
 * primeiro dia, Ciências da Natureza e Matemática no segundo.
 * `comoCai` é leitura pedagógica — está marcada como análise no site.
 */
export const AREAS: Area[] = [
  {
    id: 'linguagens',
    nome: 'Linguagens, Códigos e suas Tecnologias',
    nomeCurto: 'Linguagens',
    questoes: 45,
    dia: 1,
    descricao:
      'Língua portuguesa, literatura, artes, educação física, tecnologias da informação e 5 questões de língua estrangeira.',
    comoCai:
      'Quase nenhuma questão pede nomenclatura. O que se cobra é efeito de sentido: o que este texto faz, para quem, com qual intenção.',
  },
  {
    id: 'humanas',
    nome: 'Ciências Humanas e suas Tecnologias',
    nomeCurto: 'Humanas',
    questoes: 45,
    dia: 1,
    descricao: 'História, Geografia, Filosofia e Sociologia.',
    comoCai:
      'O enunciado quase sempre traz um documento (texto, mapa, gráfico, charge) e pede que você o interprete usando um conceito. Decorar data isolada rende pouco; entender processo rende muito.',
  },
  {
    id: 'natureza',
    nome: 'Ciências da Natureza e suas Tecnologias',
    nomeCurto: 'Natureza',
    questoes: 45,
    dia: 2,
    descricao: 'Biologia, Física e Química.',
    comoCai:
      'Situação do cotidiano ou da tecnologia com um conceito escondido dentro. Boa parte das questões tem conta curta ou nenhuma — o difícil é identificar qual conceito está sendo cobrado.',
  },
  {
    id: 'matematica',
    nome: 'Matemática e suas Tecnologias',
    nomeCurto: 'Matemática',
    questoes: 45,
    dia: 2,
    descricao: 'Matemática básica aplicada a situações-problema.',
    comoCai:
      'Contexto real, dados no enunciado ou em um gráfico, e conta que cabe em poucas linhas. A dificuldade costuma estar em traduzir o texto para a operação certa.',
  },
  {
    id: 'redacao',
    nome: 'Redação',
    nomeCurto: 'Redação',
    questoes: null,
    dia: 1,
    descricao:
      'Texto dissertativo-argumentativo em até 30 linhas, avaliado em cinco competências de 0 a 200 pontos cada.',
    comoCai:
      'É a única parte da prova com critério público e fechado. Saber exatamente o que cada competência pede é o maior retorno por minuto do exame inteiro.',
  },
];

export const AREA_POR_ID: Record<AreaId, Area> = Object.fromEntries(
  AREAS.map((a) => [a.id, a]),
) as Record<AreaId, Area>;
