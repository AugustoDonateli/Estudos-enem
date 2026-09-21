import type { AssuntoMeta } from './tipos';

/**
 * Catálogo de assuntos — apenas metadados.
 *
 * É o que o motor de estudo precisa para priorizar, agendar revisão e montar o
 * plano diário. O conteúdo de cada assunto (os 9 blocos) mora em
 * src/content/topicos/ e só é carregado quando o assunto é aberto, o que mantém
 * o bundle inicial enxuto mesmo com o conteúdo crescendo.
 *
 * scripts/validar-conteudo.ts garante que catálogo e conteúdo não divirjam.
 */

export const META_MATEMATICA: AssuntoMeta[] = [
  {
    id: 'mat-porcentagem',
    areaId: 'matematica',
    titulo: 'Porcentagem, acréscimos e descontos',
    resumo: 'Traduzir percentual em fator multiplicativo e encadear aumentos e descontos sem errar a base.',
    prioridade: 'essencial',
    justificativa:
      'É a ferramenta que aparece em mais contextos diferentes da prova: preço, população, energia, desmatamento, votação. Custa uma sessão para dominar e destrava leitura de dados nas quatro áreas.',
    prerequisitos: [],
    minutosEstimados: 22,
    eixos: ['problemas', 'fenomenos'],
  },
  {
    id: 'mat-proporcao',
    areaId: 'matematica',
    titulo: 'Razão, proporção e regra de três',
    resumo: 'Decidir se as grandezas são direta ou inversamente proporcionais antes de montar a conta.',
    prioridade: 'essencial',
    justificativa:
      'É pré-requisito silencioso de muita coisa: escala em mapas, densidade, velocidade média, concentração de soluções em Química e rendimento em Física. Errar o sentido da proporção erra a questão inteira, mesmo com a conta certa.',
    prerequisitos: [],
    minutosEstimados: 22,
    eixos: ['problemas'],
  },
  {
    id: 'mat-graficos',
    areaId: 'matematica',
    titulo: 'Leitura de gráficos e tabelas',
    resumo: 'Extrair o dado certo e separar o que o gráfico mostra do que ele apenas sugere.',
    prioridade: 'essencial',
    justificativa:
      'É a habilidade mais transversal do exame inteiro: aparece em Matemática, mas também em Geografia, Biologia, Química e Sociologia. Melhorar aqui melhora a nota nas quatro áreas ao mesmo tempo.',
    prerequisitos: ['mat-porcentagem'],
    minutosEstimados: 20,
    eixos: ['fenomenos', 'argumentacao'],
  },
  {
    id: 'mat-media',
    areaId: 'matematica',
    titulo: 'Média, mediana e moda',
    resumo: 'Escolher a medida que representa bem os dados — e saber quando a média engana.',
    prioridade: 'essencial',
    justificativa:
      'Custo baixíssimo e retorno alto: as três definições cabem em dez minutos, e o exame costuma cobrar justamente a escolha entre elas, que é uma decisão de interpretação, não de cálculo.',
    prerequisitos: ['mat-graficos'],
    minutosEstimados: 18,
    eixos: ['problemas', 'argumentacao'],
  },
  {
    id: 'mat-grandezas',
    areaId: 'matematica',
    titulo: 'Grandezas, unidades e conversões',
    resumo: 'Usar a unidade como guia da operação e não errar a conversão no último passo.',
    prioridade: 'essencial',
    justificativa:
      'Destrava questões de Física, Química e Geografia além das de Matemática. Além disso, é a fonte de um tipo de erro caro e evitável: chegar ao raciocínio certo e perder a questão numa conversão de unidade.',
    prerequisitos: ['mat-proporcao'],
    minutosEstimados: 20,
    eixos: ['problemas'],
  },
  {
    id: 'mat-funcao-afim',
    areaId: 'matematica',
    titulo: 'Função afim (1º grau)',
    resumo: 'Reconhecer a estrutura "valor fixo + taxa por unidade" e ler os coeficientes em qualquer formato.',
    prioridade: 'essencial',
    justificativa:
      'É o modelo matemático mais usado nas situações do exame — tarifa, salário com comissão, consumo, depreciação. Também é a base para entender qualquer outra função, o que a torna pré-requisito de quase todo o resto.',
    prerequisitos: ['mat-proporcao'],
    minutosEstimados: 25,
    eixos: ['problemas', 'fenomenos'],
  },
  {
    id: 'mat-area',
    areaId: 'matematica',
    titulo: 'Áreas de figuras planas',
    resumo: 'Calcular áreas por composição e subtração, e entender o efeito de ampliar as dimensões.',
    prioridade: 'essencial',
    justificativa:
      'Aplicação direta e barata: as fórmulas cabem num cartão e o contexto é sempre concreto — piso, pintura, terreno, plantio. O ponto conceitual que vale mais é o efeito quadrático da ampliação, que também aparece em Biologia e Física.',
    prerequisitos: ['mat-grandezas'],
    minutosEstimados: 22,
    eixos: ['problemas'],
  },
  {
    id: 'mat-volume',
    areaId: 'matematica',
    titulo: 'Volume e capacidade',
    resumo: 'Área da base vezes altura, mais a conversão entre metro cúbico e litro sem erro de zeros.',
    prioridade: 'essencial',
    justificativa:
      'Contexto sempre concreto (caixa d’água, piscina, embalagem, reservatório) e conta curta. O custo de aprender é baixo porque reaproveita as fórmulas de área, e o efeito cúbico da ampliação fecha o raciocínio iniciado em áreas.',
    prerequisitos: ['mat-area'],
    minutosEstimados: 20,
    eixos: ['problemas'],
  },
];

export const META_LINGUAGENS: AssuntoMeta[] = [
  {
    id: 'ling-interpretacao',
    areaId: 'linguagens',
    titulo: 'Interpretação e inferência',
    resumo: 'Ler o comando primeiro, encontrar o que o texto sustenta e eliminar o que ele só sugere.',
    prioridade: 'essencial',
    justificativa:
      'Não é um conteúdo entre outros: é a habilidade que a prova inteira cobra, nas quatro áreas. Melhorar aqui melhora até a nota de Matemática, porque a maior parte dos erros em questões contextualizadas é de leitura, não de conta.',
    prerequisitos: [],
    minutosEstimados: 25,
    eixos: ['linguagens', 'argumentacao'],
  },
  {
    id: 'ling-funcoes',
    areaId: 'linguagens',
    titulo: 'Funções da linguagem',
    resumo: 'Identificar qual elemento da comunicação o texto coloca em primeiro plano.',
    prioridade: 'essencial',
    justificativa:
      'Conteúdo de custo baixíssimo — seis definições — e aplicação direta: reconhecida a função, a questão inteira costuma se resolver. Também organiza a leitura de propaganda, campanha e texto jornalístico.',
    prerequisitos: ['ling-interpretacao'],
    minutosEstimados: 18,
    eixos: ['linguagens'],
  },
  {
    id: 'ling-variacao',
    areaId: 'linguagens',
    titulo: 'Variação linguística e preconceito linguístico',
    resumo: 'Entender que variedades são adequadas ou não a situações — nunca certas ou erradas em si.',
    prioridade: 'essencial',
    justificativa:
      'É um dos eixos temáticos mais estáveis da área, e a posição que o exame adota é consistente: valoriza a diversidade e trata como distrator toda alternativa que classifica variedade popular como erro. Saber isso resolve questões mesmo sem dominar a terminologia.',
    prerequisitos: [],
    minutosEstimados: 20,
    eixos: ['linguagens', 'argumentacao'],
  },
  {
    id: 'ling-generos',
    areaId: 'linguagens',
    titulo: 'Gêneros textuais e propósito comunicativo',
    resumo: 'Reconhecer o gênero é reconhecer o que o texto quer fazer com quem lê.',
    prioridade: 'essencial',
    justificativa:
      'A prova apresenta textos de gêneros muito variados — charge, infográfico, propaganda, verbete, postagem, manual. Reconhecer o gênero dá de imediato o propósito, e o propósito elimina alternativas antes mesmo da leitura detalhada.',
    prerequisitos: ['ling-interpretacao'],
    minutosEstimados: 20,
    eixos: ['linguagens'],
  },
  {
    id: 'ling-figuras',
    areaId: 'linguagens',
    titulo: 'Figuras de linguagem',
    resumo: 'Reconhecer o recurso e, principalmente, explicar o efeito de sentido que ele produz.',
    prioridade: 'essencial',
    justificativa:
      'Custo baixo e aplicação imediata. O ponto importante é que o exame quase nunca pede o nome da figura pelo nome: pede o efeito. Estudar orientado ao efeito rende muito mais do que decorar a lista.',
    prerequisitos: ['ling-interpretacao'],
    minutosEstimados: 18,
    eixos: ['linguagens'],
  },
  {
    id: 'ling-estrangeira',
    areaId: 'linguagens',
    titulo: 'Leitura estratégica em língua estrangeira',
    resumo: 'Cinco questões garantidas que se resolvem com técnica de leitura, não com fluência.',
    prioridade: 'essencial',
    justificativa:
      'São 5 dos 45 itens da área, e o retorno por minuto de estudo é altíssimo porque a competência cobrada é leitura, não domínio do idioma. Quem treina técnica de localização e negação melhora rápido, mesmo sem vocabulário amplo.',
    prerequisitos: ['ling-interpretacao'],
    minutosEstimados: 20,
    eixos: ['linguagens'],
  },
];

export const META_HUMANAS: AssuntoMeta[] = [
  {
    id: 'hum-vargas',
    areaId: 'humanas',
    titulo: 'Era Vargas (1930–1945)',
    resumo: 'Centralização do Estado, trabalhismo e a relação entre concessão de direitos e controle político.',
    prioridade: 'essencial',
    justificativa:
      'É o nó da história republicana brasileira: explica a formação do Estado moderno, a legislação trabalhista e um padrão político que reaparece em todo o século XX. Entender este período barateia o estudo de quase tudo que vem depois.',
    prerequisitos: [],
    minutosEstimados: 28,
    eixos: ['fenomenos', 'argumentacao'],
  },
  {
    id: 'hum-ditadura',
    areaId: 'humanas',
    titulo: 'Ditadura militar e redemocratização',
    resumo: 'Como o regime concentrou poder, como se sustentou e por que a transição foi negociada.',
    prioridade: 'essencial',
    justificativa:
      'É o período que explica diretamente a Constituição de 1988 e os debates atuais sobre direitos e instituições. Também é onde o exame mais cobra a leitura de atos normativos — uma habilidade que se aprende uma vez e serve para vários contextos.',
    prerequisitos: ['hum-vargas'],
    minutosEstimados: 28,
    eixos: ['fenomenos', 'argumentacao'],
  },
  {
    id: 'hum-cidadania',
    areaId: 'humanas',
    titulo: 'Cidadania, direitos humanos e a Constituição de 1988',
    resumo: 'As gerações de direitos, a diferença entre igualdade formal e material e o papel do Estado.',
    prioridade: 'essencial',
    justificativa:
      'Rende duas vezes: resolve questões de Humanas e fornece o repertório mais seguro para a Competência 2 e a Competência 5 da redação. Conceitos verificáveis, aplicáveis a muitos temas e de aprendizado rápido.',
    prerequisitos: ['hum-ditadura', 'hum-filosofia-politica'],
    minutosEstimados: 25,
    eixos: ['argumentacao', 'propostas'],
  },
  {
    id: 'hum-filosofia-politica',
    areaId: 'humanas',
    titulo: 'Filosofia política: contratualistas e democracia',
    resumo: 'Hobbes, Locke e Rousseau, e por que o poder precisa ser limitado por instituições.',
    prioridade: 'essencial',
    justificativa:
      'Três autores explicam a maior parte dos itens de Filosofia política, e os conceitos que eles fornecem — legitimidade, limite do poder, soberania popular — sustentam argumentação em Humanas e na redação. Custo baixo, uso amplo.',
    prerequisitos: [],
    minutosEstimados: 24,
    eixos: ['argumentacao'],
  },
  {
    id: 'hum-globalizacao',
    areaId: 'humanas',
    titulo: 'Globalização e geopolítica contemporânea',
    resumo: 'Fluxos, blocos econômicos, divisão internacional do trabalho e desigualdade entre territórios.',
    prioridade: 'essencial',
    justificativa:
      'É o chapéu conceitual de grande parte da Geografia cobrada: comércio, tecnologia, migração, meio ambiente e conflitos. Um conjunto pequeno de conceitos explica muitos itens diferentes.',
    prerequisitos: [],
    minutosEstimados: 25,
    eixos: ['fenomenos', 'argumentacao'],
  },
  {
    id: 'hum-urbanizacao',
    areaId: 'humanas',
    titulo: 'Urbanização, migrações e demografia do Brasil',
    resumo: 'Como o país se tornou urbano, o que isso produziu no território e o que a mudança da pirâmide etária implica.',
    prioridade: 'essencial',
    justificativa:
      'Conecta Geografia, Sociologia e leitura de dados — três coisas que a prova cobra junto. Além disso, é o tópico que mais aparece em forma de gráfico e tabela, o que treina simultaneamente a habilidade transversal de interpretação.',
    prerequisitos: [],
    minutosEstimados: 25,
    eixos: ['fenomenos'],
  },
  {
    id: 'hum-trabalho',
    areaId: 'humanas',
    titulo: 'Trabalho: da Revolução Industrial à uberização',
    resumo: 'Como a organização do trabalho mudou e o que cada modelo faz com a autonomia de quem trabalha.',
    prioridade: 'essencial',
    justificativa:
      'É um eixo que atravessa História, Geografia e Sociologia ao mesmo tempo, e fornece argumentação para redações sobre tecnologia, desigualdade e direitos. Um único estudo rende em três frentes.',
    prerequisitos: [],
    minutosEstimados: 25,
    eixos: ['fenomenos', 'argumentacao'],
  },
];

export const META_NATUREZA: AssuntoMeta[] = [
  {
    id: 'cn-ecologia',
    areaId: 'natureza',
    titulo: 'Ecologia: cadeias, ciclos e impactos',
    resumo: 'Fluxo de energia, ciclagem de matéria e por que poluentes se concentram no topo da cadeia.',
    prioridade: 'essencial',
    justificativa:
      'É a parte da prova em que mais se lê e menos se calcula, e conecta Biologia a Geografia e Química. Poucos conceitos — fluxo de energia, ciclo biogeoquímico, acumulação — explicam uma quantidade enorme de itens.',
    prerequisitos: [],
    minutosEstimados: 25,
    eixos: ['fenomenos'],
  },
  {
    id: 'cn-corpo-humano',
    areaId: 'natureza',
    titulo: 'Corpo humano e saúde',
    resumo: 'Como os sistemas se integram para manter o equilíbrio interno — e o que acontece quando algo falha.',
    prioridade: 'essencial',
    justificativa:
      'Contexto sempre concreto e de leitura acessível: saúde pública, doenças, medicamentos, nutrição. O conceito de homeostase organiza o assunto inteiro e é reaproveitável em muitas questões diferentes.',
    prerequisitos: [],
    minutosEstimados: 25,
    eixos: ['fenomenos'],
  },
  {
    id: 'cn-genetica',
    areaId: 'natureza',
    titulo: 'Genética mendeliana',
    resumo: 'Genótipo, fenótipo e probabilidade — um padrão de resolução fechado e treinável.',
    prioridade: 'essencial',
    justificativa:
      'É o conteúdo de Biologia com o método mais previsível: poucas regras resolvem quase todos os itens. Para quem tem pouco tempo, treinar um procedimento fechado tem retorno maior do que acumular informação nova.',
    prerequisitos: [],
    minutosEstimados: 28,
    eixos: ['problemas'],
  },
  {
    id: 'cn-estequiometria',
    areaId: 'natureza',
    titulo: 'Mol, massa molar e estequiometria',
    resumo: 'A rotina massa → mol → proporção → massa, que resolve a maior parte da Química quantitativa.',
    prioridade: 'essencial',
    justificativa:
      'É o pré-requisito de praticamente toda a Química calculada do exame, incluindo soluções, gases e rendimento. Dominar um procedimento único e repetível é o melhor investimento de tempo da área.',
    prerequisitos: ['mat-proporcao'],
    minutosEstimados: 30,
    eixos: ['problemas'],
  },
  {
    id: 'cn-solucoes',
    areaId: 'natureza',
    titulo: 'Soluções e concentração',
    resumo: 'Concentração comum, molaridade e diluição em contextos de saúde, ambiente e cotidiano.',
    prioridade: 'essencial',
    justificativa:
      'Aplicação muito direta — soro, medicamento, agrotóxico, efluente, produto de limpeza — e conta curta. Reaproveita a rotina de mol e a ideia de proporção, então o custo marginal de estudar é baixo.',
    prerequisitos: ['cn-estequiometria'],
    minutosEstimados: 22,
    eixos: ['problemas'],
  },
  {
    id: 'cn-organica',
    areaId: 'natureza',
    titulo: 'Química orgânica: reconhecer funções',
    resumo: 'Identificar o grupo funcional e ligar a estrutura às propriedades e aos usos cotidianos.',
    prioridade: 'essencial',
    justificativa:
      'A maior parte dos itens de orgânica no exame é de reconhecimento, não de mecanismo. Uma tabela de grupos funcionais e o princípio "semelhante dissolve semelhante" resolvem a maioria — excelente retorno para pouco tempo de estudo.',
    prerequisitos: [],
    minutosEstimados: 22,
    eixos: ['linguagens', 'fenomenos'],
  },
  {
    id: 'cn-energia',
    areaId: 'natureza',
    titulo: 'Energia, trabalho e conservação',
    resumo: 'Transformações de energia, rendimento e por que energia nunca se perde — apenas se dissipa.',
    prioridade: 'essencial',
    justificativa:
      'É o conceito mais central da Física no exame e o que mais aparece em contextos de sustentabilidade, transporte e geração elétrica. Entender conservação e dissipação explica dezenas de situações diferentes com pouca matemática.',
    prerequisitos: ['mat-grandezas'],
    minutosEstimados: 25,
    eixos: ['fenomenos', 'problemas'],
  },
  {
    id: 'cn-eletricidade',
    areaId: 'natureza',
    titulo: 'Eletricidade: potência e consumo',
    resumo: 'Ler a conta de luz, calcular consumo em kWh e comparar eficiência de aparelhos.',
    prioridade: 'essencial',
    justificativa:
      'Contexto do dia a dia, conta curta e alta aplicabilidade. Também reforça o conceito de rendimento e as conversões de unidade, o que faz este tópico consolidar dois outros ao mesmo tempo.',
    prerequisitos: ['cn-energia'],
    minutosEstimados: 22,
    eixos: ['problemas', 'fenomenos'],
  },
];

export const CATALOGO: AssuntoMeta[] = [
  ...META_LINGUAGENS,
  ...META_HUMANAS,
  ...META_NATUREZA,
  ...META_MATEMATICA,
];
