import type { Questao } from '../tipos';

/**
 * Questões oficiais do ENEM.
 *
 * Transcritas dos cadernos de prova publicados pelo INEP. Cada item traz a
 * referência completa — ano, dia, caderno e número — porque o ENEM embaralha a
 * numeração entre cadernos: "questão 140" só identifica um item quando o
 * caderno é informado junto.
 *
 * IMPORTANTE, sobre o gabarito. Os cadernos de questões foram transcritos a
 * partir dos PDFs oficiais, mas os gabaritos oficiais não estavam disponíveis
 * quando estes itens foram incluídos. A alternativa marcada como correta foi
 * determinada por resolução, e só entraram aqui itens cuja resposta é
 * verificável por cálculo ou por leitura direta do texto-base. Ao conferir
 * contra o gabarito do INEP, qualquer divergência deve ser corrigida aqui.
 *
 * Itens que dependem de figura, gráfico ou imagem não foram incluídos, porque
 * o texto sozinho não permitiria resolvê-los.
 */
export const QUESTOES_OFICIAIS: Questao[] = [
  /* ---------------------------------------------------------------- */
  /* Matemática                                                        */
  /* ---------------------------------------------------------------- */
  {
    id: 'of-2025-mt-140',
    topicId: 'mat-porcentagem',
    conceito: 'Porcentagem com referência fixa',
    procedencia: 'oficial',
    referencia: { ano: 2025, prova: 'ENEM 2025 — 2º dia', numero: 140, caderno: '7 (azul)' },
    dificuldade: 'dificil',
    eixo: 'problemas',
    minutos: 5,
    enunciado: [
      {
        tipo: 'p',
        texto:
          'Em um laboratório, um recipiente contém 10 litros de uma solução composta apenas pelas substâncias S₁ e S₂. Dessa solução, 99,95% é de S₁. Uma quantidade de S₁ será retirada dessa solução, mantendo a quantidade inicial de S₂, de modo que 99,90% da nova solução seja de S₁.',
      },
      { tipo: 'p', texto: 'Qual é a quantidade de S₁, em litro, que será retirada?' },
    ],
    alternativas: [
      {
        letra: 'A',
        texto: '0,0050',
        correta: false,
        diagnostico:
          'Esta é a quantidade de S₂ (0,05% de 10 L). Ela é justamente o que NÃO muda na operação — é o ponto de apoio da resolução, não a resposta.',
        tipoErro: 'conceito',
      },
      {
        letra: 'B',
        texto: '0,0100',
        correta: false,
        diagnostico:
          'Corresponde a 0,10% de 10 litros: você aplicou o novo percentual de S₂ sobre o volume ANTIGO. O novo percentual vale sobre o volume novo, que é o que se quer descobrir.',
        tipoErro: 'conceito',
      },
      {
        letra: 'C',
        texto: '0,5000',
        correta: false,
        diagnostico:
          'Escorregão de casa decimal: 0,5 L é 5% de 10 L. A diferença entre os percentuais é de 0,05 ponto percentual, não de 5%.',
        tipoErro: 'calculo',
      },
      {
        letra: 'D',
        texto: '4,9775',
        correta: false,
        diagnostico:
          'Valor próximo do correto, obtido operando sobre a quantidade de S₁ (9,995 L). O caminho curto é o oposto: acompanhar S₂, que permanece constante.',
        tipoErro: 'conceito',
      },
      {
        letra: 'E',
        texto: '5,0000',
        correta: true,
        diagnostico:
          'Correto. S₂ vale 0,005 L e não muda. Se ela passa a representar 0,10% da nova solução, o volume novo é 0,005 ÷ 0,001 = 5 L. Foram retirados 10 − 5 = 5 litros.',
      },
    ],
    explicacao: [
      {
        tipo: 'p',
        texto:
          'O item parece ser sobre S₁, mas quem resolve é S₂. A regra geral: quando uma quantidade é retirada e outra permanece, acompanhe a que permanece.',
      },
      {
        tipo: 'formula',
        latexLike:
          'S₂ = 0,05% de 10 L = 0,005 L   (constante)\nna nova solução, S₂ = 0,10% do volume V\n0,005 = 0,001 · V  →  V = 5 L\nretirado = 10 − 5 = 5 litros',
      },
      {
        tipo: 'destaque',
        variante: 'atencao',
        titulo: 'Por que o resultado surpreende',
        texto:
          'Mudar a concentração em apenas 0,05 ponto percentual exigiu retirar METADE do recipiente. Quando um componente é quase tudo, pequenas variações no percentual dele significam variações enormes no volume total.',
      },
    ],
    irmas: ['mat-porc-q1'],
  },
  {
    id: 'of-2025-mt-158',
    topicId: 'mat-porcentagem',
    conceito: 'Acréscimo percentual em composição de custos',
    procedencia: 'oficial',
    referencia: { ano: 2025, prova: 'ENEM 2025 — 2º dia', numero: 158, caderno: '7 (azul)' },
    dificuldade: 'media',
    eixo: 'problemas',
    minutos: 5,
    enunciado: [
      {
        tipo: 'p',
        texto:
          'Um estacionamento possui 120 vagas para veículos, e todas essas vagas estão ocupadas. Cada cliente paga uma mensalidade para utilizar uma vaga, que é calculada com base nas despesas mensais do estacionamento e no lucro pretendido. As despesas mensais do estacionamento são: R$ 14 240,00 com manutenção mais R$ 36,00 de seguro por veículo. O lucro do estacionamento é determinado pela diferença do valor arrecadado com as mensalidades pelas despesas efetuadas.',
      },
      {
        tipo: 'p',
        texto:
          'A partir do mês seguinte, o valor do seguro por veículo aumentará em 20%, e as despesas com manutenção permanecerão sem alterações. Com isso, o dono do estacionamento reajustará as mensalidades para obter um lucro mensal de R$ 10 000,00. Apesar desse reajuste, todas as vagas continuarão ocupadas.',
      },
      { tipo: 'p', texto: 'O valor, em real, da mensalidade reajustada será' },
    ],
    alternativas: [
      {
        letra: 'A',
        texto: '185,60.',
        correta: false,
        diagnostico:
          'Você aplicou os 20% sobre TODAS as despesas (18 560 × 1,20 = 22 272) e ainda esqueceu de somar o lucro pretendido. O aumento vale só para o seguro.',
        tipoErro: 'conceito',
      },
      {
        letra: 'B',
        texto: '226,09.',
        correta: false,
        diagnostico:
          'Multiplicada pelas 120 vagas, esta mensalidade arrecada cerca de R$ 27 131,00 e deixa um lucro de aproximadamente R$ 7 707,00 — abaixo dos R$ 10 000,00 exigidos.',
        tipoErro: 'calculo',
      },
      {
        letra: 'C',
        texto: '245,20.',
        correta: true,
        diagnostico:
          'Correto. Seguro novo: 36 × 1,20 = 43,20 por veículo, ou 5 184 no total. Despesas: 14 240 + 5 184 = 19 424. Arrecadação necessária: 19 424 + 10 000 = 29 424. Dividido por 120: R$ 245,20.',
      },
      {
        letra: 'D',
        texto: '268,93.',
        correta: false,
        diagnostico:
          'Você aplicou o aumento de 20% sobre o total das despesas, e não apenas sobre o seguro: (18 560 × 1,20 + 10 000) ÷ 120. A manutenção não sofreu reajuste.',
        tipoErro: 'leitura',
      },
      {
        letra: 'E',
        texto: '285,60.',
        correta: false,
        diagnostico:
          'Você calculou a mensalidade com o seguro antigo (R$ 238,00) e depois aplicou os 20% sobre a mensalidade inteira. O percentual incide sobre o seguro, não sobre o que o cliente paga.',
        tipoErro: 'conceito',
      },
    ],
    explicacao: [
      {
        tipo: 'lista',
        ordenada: true,
        itens: [
          'Reajuste só no seguro: 36 × 1,20 = R$ 43,20 por veículo.',
          'Seguro total: 43,20 × 120 = R$ 5 184,00.',
          'Despesas: 14 240 + 5 184 = R$ 19 424,00.',
          'Arrecadação = despesas + lucro = 19 424 + 10 000 = R$ 29 424,00.',
          'Mensalidade = 29 424 ÷ 120 = R$ 245,20.',
        ],
      },
      {
        tipo: 'destaque',
        variante: 'nota',
        titulo: 'O que o item testa de verdade',
        texto:
          'Não é a conta de porcentagem — é identificar sobre QUAL parcela o percentual incide. Três das quatro alternativas erradas nascem de aplicar os 20% na base errada.',
      },
    ],
    irmas: ['mat-porc-q1', 'of-2025-mt-140'],
  },
  {
    id: 'of-2025-mt-150',
    topicId: 'mat-proporcao',
    conceito: 'Regra de três composta',
    procedencia: 'oficial',
    referencia: { ano: 2025, prova: 'ENEM 2025 — 2º dia', numero: 150, caderno: '7 (azul)' },
    dificuldade: 'media',
    eixo: 'problemas',
    minutos: 4,
    enunciado: [
      {
        tipo: 'p',
        texto:
          'Uma fábrica de tijolos ecológicos com 3 funcionários, cada um trabalhando 6 horas diárias, produz 720 unidades por dia. Para atender ao crescimento da demanda por esse tipo de tijolo, essa fábrica passou a ter 5 funcionários, cada um trabalhando 9 horas por dia, aumentando, assim, sua capacidade de produção. Todos os funcionários produzem igual quantidade de tijolos a cada hora, independentemente de trabalharem 6 ou 9 horas diárias.',
      },
      {
        tipo: 'p',
        texto: 'O número de tijolos fabricados diariamente após o aumento da capacidade de produção é',
      },
    ],
    alternativas: [
      {
        letra: 'A',
        texto: '800.',
        correta: false,
        diagnostico:
          'Você multiplicou pelo aumento de funcionários (5/3) e DIVIDIU pelo aumento de horas (6/9), tratando as horas como inversamente proporcionais. Mais horas produzem mais tijolos, não menos.',
        tipoErro: 'conceito',
      },
      {
        letra: 'B',
        texto: '1 080.',
        correta: false,
        diagnostico:
          'Você ajustou só as horas: 720 × 9/6. O número de funcionários também mudou, de 3 para 5.',
        tipoErro: 'leitura',
      },
      {
        letra: 'C',
        texto: '1 200.',
        correta: false,
        diagnostico:
          'Você ajustou só os funcionários: 720 × 5/3. A jornada também mudou, de 6 para 9 horas.',
        tipoErro: 'leitura',
      },
      {
        letra: 'D',
        texto: '1 800.',
        correta: true,
        diagnostico:
          'Correto. As duas grandezas são diretamente proporcionais à produção: 720 × (5/3) × (9/6) = 1 800 tijolos.',
      },
      {
        letra: 'E',
        texto: '2 520.',
        correta: false,
        diagnostico:
          'Você somou a produção antiga com a nova (720 + 1 800). O comando pede a produção depois do aumento, não o acumulado.',
        tipoErro: 'leitura',
      },
    ],
    explicacao: [
      {
        tipo: 'p',
        texto:
          'Há um caminho mais seguro que a regra de três composta: reduzir tudo a uma unidade comum, a hora-funcionário.',
      },
      {
        tipo: 'formula',
        latexLike:
          'antes: 3 funcionários × 6 h = 18 horas-funcionário → 720 tijolos\ntaxa: 720 ÷ 18 = 40 tijolos por hora-funcionário\ndepois: 5 × 9 = 45 horas-funcionário\nprodução = 45 × 40 = 1 800 tijolos',
      },
      {
        tipo: 'destaque',
        variante: 'nota',
        titulo: 'Por que reduzir à unidade é melhor',
        texto:
          'Na regra de três composta é preciso decidir o sentido de cada grandeza separadamente, e cada decisão é uma chance de errar. Calculando a taxa por hora-funcionário, o sentido fica óbvio e sobra uma multiplicação só.',
      },
    ],
    irmas: ['mat-prop-q1'],
  },
  {
    id: 'of-2025-mt-142',
    topicId: 'mat-media',
    conceito: 'Mediana de um conjunto de dados',
    procedencia: 'oficial',
    referencia: { ano: 2025, prova: 'ENEM 2025 — 2º dia', numero: 142, caderno: '7 (azul)' },
    dificuldade: 'media',
    eixo: 'problemas',
    minutos: 4,
    enunciado: [
      {
        tipo: 'p',
        texto:
          'Uma empresa de tecnologia vai padronizar a velocidade de conexão de internet que oferece a seus clientes em dez cidades. A direção da empresa decide que seu novo padrão de velocidade de referência será a mediana dos valores das velocidades de referência de conexões nessas dez cidades. Esses valores, em megabyte por segundo (MB/s), são apresentados no quadro.',
      },
      {
        tipo: 'tabela',
        cabecalho: ['Cidade', 'Velocidade de referência (MB/s)'],
        linhas: [
          ['C1', '390'],
          ['C2', '380'],
          ['C3', '320'],
          ['C4', '390'],
          ['C5', '340'],
          ['C6', '380'],
          ['C7', '390'],
          ['C8', '400'],
          ['C9', '350'],
          ['C10', '360'],
        ],
        legenda: 'Quadro reproduzido do caderno de prova.',
      },
      {
        tipo: 'p',
        texto:
          'A velocidade de referência, em megabyte por segundo, a ser adotada por essa empresa é',
      },
    ],
    alternativas: [
      {
        letra: 'A',
        texto: '360.',
        correta: false,
        diagnostico:
          'Você fez a média dos dois valores centrais SEM ordenar a lista antes: na ordem original, o 5º e o 6º são 340 e 380. Ordenar faz parte da definição de mediana.',
        tipoErro: 'conceito',
      },
      {
        letra: 'B',
        texto: '370.',
        correta: false,
        diagnostico:
          'Esta é a MÉDIA aritmética (3 700 ÷ 10 = 370), não a mediana. O comando pede especificamente a mediana.',
        tipoErro: 'leitura',
      },
      {
        letra: 'C',
        texto: '380.',
        correta: true,
        diagnostico:
          'Correto. Ordenando: 320, 340, 350, 360, 380, 380, 390, 390, 390, 400. Com 10 valores, a mediana é a média do 5º e do 6º: (380 + 380) ÷ 2 = 380.',
      },
      {
        letra: 'D',
        texto: '390.',
        correta: false,
        diagnostico:
          'Esta é a MODA — o valor que mais se repete (três vezes). Moda e mediana só coincidem por acaso.',
        tipoErro: 'conceito',
      },
      {
        letra: 'E',
        texto: '400.',
        correta: false,
        diagnostico: 'Este é o valor máximo do conjunto, não uma medida de tendência central.',
        tipoErro: 'leitura',
      },
    ],
    explicacao: [
      {
        tipo: 'p',
        texto:
          'Este item é quase um mapa das confusões possíveis: cada alternativa errada é uma medida diferente do mesmo conjunto.',
      },
      {
        tipo: 'tabela',
        cabecalho: ['Medida', 'Valor', 'Alternativa'],
        linhas: [
          ['Mediana (o que se pede)', '380', 'C'],
          ['Média aritmética', '370', 'B'],
          ['Moda', '390', 'D'],
          ['Máximo', '400', 'E'],
          ['"Centro" sem ordenar', '360', 'A'],
        ],
      },
      {
        tipo: 'destaque',
        variante: 'atencao',
        titulo: 'A regra que resolve',
        texto:
          'Ordene sempre. Com quantidade par de valores, a mediana é a média dos dois centrais — e pode não ser nenhum dos valores da lista.',
      },
    ],
    irmas: ['mat-med-q2'],
  },
  {
    id: 'of-2024-mt-151',
    topicId: 'mat-area',
    conceito: 'Escala aplicada a áreas',
    procedencia: 'oficial',
    referencia: { ano: 2024, prova: 'ENEM 2024 — 2º dia', numero: 151, caderno: '7 (azul)' },
    dificuldade: 'dificil',
    eixo: 'problemas',
    minutos: 5,
    enunciado: [
      {
        tipo: 'p',
        texto:
          'O arquiteto Renzo Piano exibiu a maquete da nova sede do Museu Whitney de Arte Americana, um prédio assimétrico que tem um vão aberto para a galeria principal, cuja medida da área é 1 672 m². Considere que a escala da maquete exibida é 1 : 200.',
      },
      {
        tipo: 'citacao',
        texto: 'Época, n. 682, jun. 2011 (adaptado).',
        fonte: 'Referência reproduzida do caderno de prova.',
      },
      {
        tipo: 'p',
        texto: 'A medida da área do vão aberto nessa maquete, em centímetro quadrado, é',
      },
    ],
    alternativas: [
      {
        letra: 'A',
        texto: '4,18.',
        correta: false,
        diagnostico:
          'A divisão pela escala de áreas está certa, mas a conversão de m² para cm² usou 10³ em vez de 10⁴. Lembre: 1 m² = 10 000 cm².',
        tipoErro: 'calculo',
      },
      {
        letra: 'B',
        texto: '8,36.',
        correta: false,
        diagnostico:
          'Aqui está o erro central que o item testa: você dividiu por 200, a escala LINEAR. Áreas se reduzem pelo quadrado da escala, ou seja, por 200² = 40 000.',
        tipoErro: 'conceito',
      },
      {
        letra: 'C',
        texto: '41,80.',
        correta: false,
        diagnostico: 'Resultado correto dividido por 10 — um passo a menos na conversão de unidade.',
        tipoErro: 'calculo',
      },
      {
        letra: 'D',
        texto: '83,60.',
        correta: false,
        diagnostico:
          'Combina os dois erros anteriores: escala linear no lugar da escala de áreas, mais uma casa perdida na conversão.',
        tipoErro: 'calculo',
      },
      {
        letra: 'E',
        texto: '418,00.',
        correta: true,
        diagnostico:
          'Correto. 1 672 m² = 16 720 000 cm². Como a escala de áreas é 1 : 200² = 1 : 40 000, a área na maquete é 16 720 000 ÷ 40 000 = 418 cm².',
      },
    ],
    explicacao: [
      {
        tipo: 'formula',
        latexLike:
          'escala linear = 1 : 200\nescala de áreas = 1 : 200² = 1 : 40 000\n1 672 m² × 10 000 = 16 720 000 cm²\n16 720 000 ÷ 40 000 = 418 cm²',
      },
      {
        tipo: 'p',
        texto:
          'É o mesmo princípio de sempre: multiplicando toda dimensão linear por k, a área é multiplicada por k² e o volume por k³. Numa maquete 200 vezes menor, cada metro quadrado real vira 1/40 000 de metro quadrado na maquete.',
      },
      {
        tipo: 'destaque',
        variante: 'atencao',
        titulo: 'Dois quadrados na mesma questão',
        texto:
          'Este item cobra o quadrado duas vezes: na escala (200²) e na conversão de unidade (100² = 10 000). Errar qualquer um dos dois leva a uma alternativa preparada para recebê-lo.',
      },
    ],
    irmas: ['mat-area-q2', 'mat-prop-q2'],
  },
  {
    id: 'of-2024-mt-157',
    topicId: 'mat-funcao-afim',
    conceito: 'Parte fixa e parte variável em função afim',
    procedencia: 'oficial',
    referencia: { ano: 2024, prova: 'ENEM 2024 — 2º dia', numero: 157, caderno: '7 (azul)' },
    dificuldade: 'media',
    eixo: 'problemas',
    minutos: 4,
    enunciado: [
      {
        tipo: 'p',
        texto:
          'Uma doceira vende e entrega, em seu bairro, porções de 100 g de docinhos de aniversário. Atualmente, a taxa única de entrega é R$ 10,00, e o valor cobrado por uma porção é R$ 25,00. Por uma estratégia de vendas, a partir da próxima semana, a taxa única de entrega será R$ 15,00, e um novo valor será cobrado por uma porção, de maneira que o valor total a ser pago por um cliente na compra de 5 porções permaneça o mesmo.',
      },
      {
        tipo: 'p',
        texto: 'A partir da próxima semana, qual será o novo valor cobrado, em real, por uma porção?',
      },
    ],
    alternativas: [
      {
        letra: 'A',
        texto: '12,50',
        correta: false,
        diagnostico:
          'Com esse preço, o cliente pagaria 15 + 5 × 12,50 = R$ 77,50, bem longe dos R$ 135,00 que o enunciado manda manter.',
        tipoErro: 'calculo',
      },
      {
        letra: 'B',
        texto: '20,00',
        correta: false,
        diagnostico:
          'Você subtraiu do preço da porção os R$ 5,00 inteiros de aumento da taxa. Esse aumento precisa ser distribuído pelas 5 porções — R$ 1,00 em cada uma.',
        tipoErro: 'conceito',
      },
      {
        letra: 'C',
        texto: '24,00',
        correta: true,
        diagnostico:
          'Correto. Total atual: 10 + 5 × 25 = R$ 135,00. Mantendo esse total: 15 + 5x = 135, logo 5x = 120 e x = R$ 24,00.',
      },
      {
        letra: 'D',
        texto: '30,00',
        correta: false,
        diagnostico:
          'Você somou os R$ 5,00 ao preço da porção. Como a taxa subiu, o preço da porção precisa CAIR para o total ficar igual.',
        tipoErro: 'conceito',
      },
      {
        letra: 'E',
        texto: '37,50',
        correta: false,
        diagnostico: 'Com esse preço o total subiria para 15 + 5 × 37,50 = R$ 202,50.',
        tipoErro: 'calculo',
      },
    ],
    explicacao: [
      {
        tipo: 'formula',
        latexLike:
          'f(x) = taxa + preço · x\natual:  10 + 25 × 5 = 135\nnovo:   15 + 5x = 135\n5x = 120  →  x = 24',
      },
      {
        tipo: 'destaque',
        variante: 'nota',
        titulo: 'O atalho elegante',
        texto:
          'A taxa subiu R$ 5,00 e são 5 porções. Para o total não mudar, cada porção precisa baixar exatamente R$ 1,00: 25 − 1 = 24. Reconhecer isso resolve o item em cinco segundos.',
      },
    ],
    irmas: ['mat-afim-q1'],
  },

  /* ---------------------------------------------------------------- */
  /* Ciências da Natureza                                              */
  /* ---------------------------------------------------------------- */
  {
    id: 'of-2025-cn-131',
    topicId: 'cn-estequiometria',
    conceito: 'Estequiometria com reagente em excesso',
    procedencia: 'oficial',
    referencia: { ano: 2025, prova: 'ENEM 2025 — 2º dia', numero: 131, caderno: '7 (azul)' },
    dificuldade: 'dificil',
    eixo: 'problemas',
    minutos: 6,
    enunciado: [
      {
        tipo: 'p',
        texto:
          'O Brasil é o maior produtor mundial de nióbio (massa molar = 93 g/mol), metal utilizado na fabricação de vários tipos de aço: automotivos, estruturais e inoxidáveis. O processo utilizado na produção do nióbio é a redução aluminotérmica de Nb₂O₅ com excesso de 10% de Al (massa molar = 27 g/mol), em relação à quantidade estequiométrica da reação, representada pela equação química:',
      },
      { tipo: 'formula', latexLike: '3 Nb₂O₅ (s) + 10 Al (s) → 6 Nb (s) + 5 Al₂O₃ (s)' },
      {
        tipo: 'p',
        texto:
          'Uma engenheira metalúrgica estimou a massa de alumínio necessária para produzir 9,3 kg de nióbio, nas condições descritas, para a produção de um lote de peças de aço encomendado por uma indústria, considerando um rendimento de 100%.',
      },
      {
        tipo: 'p',
        texto:
          'A massa de alumínio, em quilograma, estimada pela engenheira é mais próxima de',
      },
    ],
    alternativas: [
      {
        letra: 'A',
        texto: '2,7 kg.',
        correta: false,
        diagnostico:
          'Você usou proporção 1 : 1 entre Nb e Al, ignorando os coeficientes 6 e 10 da equação. A proporção correta é 10 mol de Al para cada 6 mol de Nb.',
        tipoErro: 'conceito',
      },
      {
        letra: 'B',
        texto: '3,0 kg.',
        correta: false,
        diagnostico:
          'Mesmo erro de proporção da alternativa A, agora com os 10% de excesso acrescentados. Acertar o excesso não compensa errar a estequiometria.',
        tipoErro: 'conceito',
      },
      {
        letra: 'C',
        texto: '4,1 kg.',
        correta: false,
        diagnostico:
          'Você dividiu por 1,10 em vez de multiplicar: tratou os 4,5 kg como se já incluíssem o excesso. Excesso se soma, não se desconta.',
        tipoErro: 'calculo',
      },
      {
        letra: 'D',
        texto: '4,5 kg.',
        correta: false,
        diagnostico:
          'Esta é a massa estequiométrica exata — e é a armadilha do item. O enunciado pede a massa com 10% de excesso de alumínio.',
        tipoErro: 'leitura',
      },
      {
        letra: 'E',
        texto: '5,0 kg.',
        correta: true,
        diagnostico:
          'Correto. 9,3 kg de Nb equivalem a 100 mol. Pela proporção 10 Al : 6 Nb, são necessários 166,7 mol de Al, ou 4,5 kg. Com 10% de excesso: 4,5 × 1,10 = 4,95 kg ≈ 5,0 kg.',
      },
    ],
    explicacao: [
      {
        tipo: 'lista',
        ordenada: true,
        itens: [
          'Massa para mol: 9 300 g ÷ 93 g/mol = 100 mol de Nb.',
          'Proporção da equação, sempre em mol: 10 Al para 6 Nb, logo 100 × 10/6 ≈ 166,7 mol de Al.',
          'Mol para massa: 166,7 × 27 ≈ 4 500 g = 4,5 kg.',
          'Excesso de 10%: 4,5 × 1,10 = 4,95 kg, mais próximo de 5,0 kg.',
        ],
      },
      {
        tipo: 'destaque',
        variante: 'atencao',
        titulo: 'Duas armadilhas empilhadas',
        texto:
          'A alternativa D pune quem esquece o excesso; as alternativas A e B punem quem ignora os coeficientes. Só quem acerta as duas coisas chega em E — é assim que um item difícil é construído.',
      },
    ],
    irmas: ['cn-est-q1'],
  },
  {
    id: 'of-2025-cn-122',
    topicId: 'cn-eletricidade',
    conceito: 'Corrente induzida e efeito Joule',
    procedencia: 'oficial',
    referencia: { ano: 2025, prova: 'ENEM 2025 — 2º dia', numero: 122, caderno: '7 (azul)' },
    dificuldade: 'media',
    eixo: 'fenomenos',
    minutos: 4,
    enunciado: [
      {
        tipo: 'p',
        texto:
          'O aquecimento em fogões por indução utiliza bobinas para produzir um campo magnético variável. Essa bobina se localiza abaixo do vidro cerâmico sobre o qual a panela se apoia. O mecanismo aquece apenas a panela que se encontra na zona de cozimento, o que é uma das principais vantagens em relação ao uso do fogão a gás ou de resistência elétrica.',
      },
      { tipo: 'p', texto: 'O uso do campo magnético variável tem a finalidade de' },
    ],
    alternativas: [
      {
        letra: 'A',
        texto: 'imantar o material da panela por indução.',
        correta: false,
        diagnostico:
          'Imantar não aquece. Alinhar domínios magnéticos não dissipa a energia necessária para cozinhar — quem faz isso é a corrente elétrica induzida.',
        tipoErro: 'conceito',
      },
      {
        letra: 'B',
        texto: 'movimentar os átomos de ferro concentrados no fundo da panela.',
        correta: false,
        diagnostico:
          'Descrição sem mecanismo. O que se movimenta são elétrons livres, formando corrente elétrica; são eles que aquecem o metal por efeito Joule.',
        tipoErro: 'conceito',
      },
      {
        letra: 'C',
        texto: 'emitir radiação eletromagnética, aquecendo a panela através do vidro cerâmico.',
        correta: false,
        diagnostico:
          'Se o aquecimento viesse de radiação atravessando o vidro, o próprio vidro e qualquer objeto sobre ele também aqueceriam — e o enunciado diz que só a panela aquece.',
        tipoErro: 'distrator',
      },
      {
        letra: 'D',
        texto: 'induzir corrente elétrica na parte inferior da panela, aquecendo-a por efeito Joule.',
        correta: true,
        diagnostico:
          'Correto. O campo magnético variável induz correntes no fundo metálico da panela, e a resistência do metal converte essa energia elétrica em calor — efeito Joule.',
      },
      {
        letra: 'E',
        texto:
          'gerar um fluxo de corrente de convecção no ar contido entre a região da bobina e o vidro cerâmico.',
        correta: false,
        diagnostico:
          'Convecção no ar aqueceria tudo ao redor, e de forma ineficiente. O enunciado destaca justamente que o aquecimento fica restrito à panela.',
        tipoErro: 'conceito',
      },
    ],
    explicacao: [
      {
        tipo: 'p',
        texto:
          'Um campo magnético que varia no tempo induz corrente elétrica em um condutor próximo. No fogão de indução, esse condutor é o fundo da panela — por isso ela precisa ser de material ferromagnético.',
      },
      {
        tipo: 'p',
        texto:
          'A corrente induzida encontra resistência no metal e dissipa energia na forma de calor. É o mesmo efeito Joule do chuveiro e do ferro elétrico, com uma diferença importante: aqui o calor nasce DENTRO da panela, e não numa resistência externa.',
      },
      {
        tipo: 'destaque',
        variante: 'nota',
        titulo: 'A pista está no próprio enunciado',
        texto:
          '"Aquece apenas a panela" elimina sozinha as alternativas C e E, que descrevem mecanismos que aqueceriam também o vidro e o ar. Ler o que o texto garante costuma eliminar metade das alternativas.',
      },
    ],
    irmas: ['cn-elet-q1', 'cn-ener-q2'],
  },

  /* ---------------------------------------------------------------- */
  /* Ciências Humanas                                                  */
  /* ---------------------------------------------------------------- */
  {
    id: 'of-2025-ch-076',
    topicId: 'hum-cidadania',
    conceito: 'Historicidade dos direitos humanos',
    procedencia: 'oficial',
    referencia: { ano: 2025, prova: 'ENEM 2025 — 1º dia', numero: 76, caderno: '1 (azul)' },
    dificuldade: 'media',
    eixo: 'argumentacao',
    minutos: 4,
    enunciado: [
      {
        tipo: 'citacao',
        texto:
          'Os direitos do homem constituem uma classe variável, como a história destes últimos séculos demonstra suficientemente. O elenco dos direitos do homem se modificou, e continua a se modificar, com a mudança das condições históricas, ou seja, dos carecimentos e dos interesses, das classes no poder, dos meios disponíveis para a realização dos mesmos, das transformações técnicas. Direitos que foram declarados absolutos no final do século XVIII foram submetidos a radicais limitações nas declarações contemporâneas; direitos que as declarações do século XVIII nem sequer mencionavam, como os direitos sociais, são agora proclamados com grande ostentação nas recentes declarações.',
        fonte: 'BOBBIO, N. A era dos direitos. Rio de Janeiro: Elsevier, 2004.',
      },
      {
        tipo: 'p',
        texto:
          'Os argumentos apresentados no texto sustentam que os direitos humanos são variáveis porque os considera como',
      },
    ],
    alternativas: [
      {
        letra: 'A',
        texto: 'fenômenos espontâneos.',
        correta: false,
        diagnostico:
          'Espontâneo é o oposto do que o texto descreve. Ele lista causas deliberadas — interesses, classes no poder, meios disponíveis —, e não um surgimento natural.',
        tipoErro: 'conceito',
      },
      {
        letra: 'B',
        texto: 'conquistas atemporais.',
        correta: false,
        diagnostico:
          'É exatamente o que o texto nega: "direitos que foram declarados absolutos no final do século XVIII foram submetidos a radicais limitações". Atemporal seria o contrário de variável.',
        tipoErro: 'leitura',
      },
      {
        letra: 'C',
        texto: 'convenções coletivas.',
        correta: true,
        diagnostico:
          'Correto. Se os direitos mudam conforme condições históricas e são "proclamados" em declarações, é porque resultam de acordos construídos socialmente — convenções, e não essências fixas.',
      },
      {
        letra: 'D',
        texto: 'resquícios religiosos.',
        correta: false,
        diagnostico: 'O texto não menciona religião em momento algum. É informação inexistente no trecho.',
        tipoErro: 'leitura',
      },
      {
        letra: 'E',
        texto: 'imposições políticas.',
        correta: false,
        diagnostico:
          'Imposição sugere ato unilateral de quem manda. O texto descreve um processo mais amplo, em que carecimentos, interesses e transformações técnicas se combinam nas declarações.',
        tipoErro: 'distrator',
      },
    ],
    explicacao: [
      {
        tipo: 'p',
        texto:
          'A tese do trecho é a historicidade dos direitos: eles não são descobertos prontos na natureza humana, são construídos e reconstruídos conforme a sociedade muda.',
      },
      {
        tipo: 'p',
        texto:
          'Repare na estrutura do item: as cinco alternativas são cinco naturezas possíveis para os direitos (naturais, eternos, convencionais, religiosos, impostos). A resposta é a única compatível com "se modificou, e continua a se modificar".',
      },
      {
        tipo: 'destaque',
        variante: 'nota',
        titulo: 'Bom repertório de redação',
        texto:
          'A historicidade dos direitos sustenta argumentos sobre por que uma pauta social vira lei, e por que conquistas podem retroceder. Serve a muitos temas de cidadania e inclusão.',
      },
    ],
    irmas: ['hum-cid-q1', 'hum-cid-q2'],
  },
  {
    id: 'of-2024-ch-070',
    topicId: 'hum-globalizacao',
    conceito: 'Meio técnico e dinamização dos fluxos',
    procedencia: 'oficial',
    referencia: { ano: 2024, prova: 'ENEM 2024 — 1º dia', numero: 70, caderno: '1 (azul)' },
    dificuldade: 'media',
    eixo: 'fenomenos',
    minutos: 4,
    enunciado: [
      {
        tipo: 'citacao',
        texto:
          'Cada objeto é, em si mesmo, um sistema funcionando sistemicamente. Um grande supermercado ou shopping center seria incapaz de existir se não fossem servidos por vias rápidas, estacionamentos adequados e acessíveis, sistemas de transportes públicos com horários regulares e conhecidos e se, no seu próprio interior, as atividades não estivessem subordinadas a uma coordenação. Esse é o caso dos armazéns, dos silos etc. Os portos, a rede rodoviária de um país e, sobretudo, a rede ferroviária são exemplos de objetos complexos e sistêmicos.',
        fonte:
          'SANTOS, M. A natureza do espaço: técnica, tempo, razão e emoção. São Paulo: Hucitec, 1996 (adaptado).',
      },
      {
        tipo: 'p',
        texto:
          'De acordo com o texto, o território torna-se cada vez mais dotado de objetos com a finalidade de intensificar a',
      },
    ],
    alternativas: [
      {
        letra: 'A',
        texto: 'desindustrialização da economia.',
        correta: false,
        diagnostico:
          'O texto não trata da perda de peso da indústria. Todos os exemplos citados são infraestruturas de circulação.',
        tipoErro: 'conceito',
      },
      {
        letra: 'B',
        texto: 'desregulamentação do mercado.',
        correta: false,
        diagnostico:
          'É o inverso do que o trecho enfatiza: ele fala em atividades "subordinadas a uma coordenação" — ou seja, mais organização, não menos regra.',
        tipoErro: 'leitura',
      },
      {
        letra: 'C',
        texto: 'concentração da produção.',
        correta: false,
        diagnostico:
          'Vias, estacionamentos, portos e ferrovias servem para deslocar, não para concentrar o que é produzido num ponto.',
        tipoErro: 'conceito',
      },
      {
        letra: 'D',
        texto: 'distribuição de renda.',
        correta: false,
        diagnostico: 'Renda não aparece no texto. É uma conclusão trazida de fora.',
        tipoErro: 'leitura',
      },
      {
        letra: 'E',
        texto: 'dinamização dos fluxos.',
        correta: true,
        diagnostico:
          'Correto. Todos os objetos listados — vias rápidas, transporte público, armazéns, silos, portos, ferrovias — existem para que pessoas, mercadorias e informações circulem mais e mais rápido.',
      },
    ],
    explicacao: [
      {
        tipo: 'p',
        texto:
          'O trecho descreve o que a Geografia chama de meio técnico-científico-informacional: um território cada vez mais equipado com objetos que existem para servir à circulação.',
      },
      {
        tipo: 'p',
        texto:
          'Há um método aplicável a qualquer item desse tipo: liste os exemplos que o texto dá e pergunte o que eles têm em comum. Aqui, todos são infraestrutura de transporte, armazenagem ou coordenação — e a resposta segue direto daí.',
      },
      {
        tipo: 'destaque',
        variante: 'nota',
        titulo: 'Fixos e fluxos',
        texto:
          'Os objetos do território são os fixos; o que circula por eles são os fluxos. A globalização se apoia justamente em multiplicar fixos para acelerar fluxos.',
      },
    ],
    irmas: ['hum-glob-q1'],
  },

  /* ---------------------------------------------------------------- */
  /* Linguagens                                                        */
  /* ---------------------------------------------------------------- */
  {
    id: 'of-2024-lc-014',
    topicId: 'ling-variacao',
    conceito: 'Variedades regionais como parte do português brasileiro',
    procedencia: 'oficial',
    referencia: { ano: 2024, prova: 'ENEM 2024 — 1º dia', numero: 14, caderno: '1 (azul)' },
    dificuldade: 'media',
    eixo: 'linguagens',
    minutos: 4,
    enunciado: [
      {
        tipo: 'citacao',
        texto:
          'Maranhenses que moram longe matam a saudade da terra natal usando expressões próprias do estado. Se o maranhês impressiona e desperta a curiosidade de quem mora no próprio Maranhão, imagine de quem vem de outros estados e países? A variedade linguística local é enorme e o modo de falar tão próprio e característico dos maranhenses vem conquistando muita gente e inspirando títulos e muito conteúdo digital com a criação de podcasts, blogs, perfis na internet, além de estampar diversos tipos de produtos e serviços de empresas locais.\n\nCom saudades do Maranhão, morando há 16 anos no Rio de Janeiro, um fotógrafo maranhense criou um perfil na internet no qual compartilha a culinária, brincadeiras e o “dicionário” maranhês. “A primeira vez que fui a uma padaria no Rio, na inocência, pedi 3 reais de ‘pães misturados’. Quando falei isso, as pessoas pararam e me olharam de uma forma bem engraçada, aí já fiquei ‘encabulado, ó’ e o atendente sorriu e explicou que lá não existia pão misturado e, sim, pão francês e suíço. Depois foi a minha vez de explicar sobre os pães ‘massa grossa e massa fina’”, contou o fotógrafo, com humor.',
        fonte: 'Disponível em: https://oimparcial.com.br. Acesso em: 1 nov. 2021 (adaptado).',
      },
      {
        tipo: 'p',
        texto: 'A vivência relatada no texto evidencia que as variedades linguísticas',
      },
    ],
    alternativas: [
      {
        letra: 'A',
        texto: 'impedem o entendimento mútuo.',
        correta: false,
        diagnostico:
          'No relato o entendimento se resolve: o atendente explica, e depois o próprio fotógrafo explica de volta. Houve negociação de sentido, não impedimento.',
        tipoErro: 'leitura',
      },
      {
        letra: 'B',
        texto: 'enaltecem o português do Maranhão.',
        correta: false,
        diagnostico:
          'O texto valoriza a variedade, mas não afirma que ela seja superior às outras. Alternativas que transformam valorização em superioridade costumam ser distratores.',
        tipoErro: 'distrator',
      },
      {
        letra: 'C',
        texto: 'são constitutivas do português brasileiro.',
        correta: true,
        diagnostico:
          'Correto. O maranhês aparece como parte do português do Brasil — com dicionário próprio, circulação digital e uso comercial —, e não como desvio de uma língua "verdadeira".',
      },
      {
        letra: 'D',
        texto: 'exigem a dicionarização dos termos usados.',
        correta: false,
        diagnostico:
          'O "dicionário" maranhês citado é um perfil na internet, feito com humor. O texto não defende que os termos precisem ser oficializados para existirem.',
        tipoErro: 'distrator',
      },
      {
        letra: 'E',
        texto: 'são restritas a situações coloquiais de comunicação.',
        correta: false,
        diagnostico:
          'O próprio texto mostra o contrário: a variedade aparece em podcasts, blogs, títulos e em produtos e serviços de empresas.',
        tipoErro: 'leitura',
      },
    ],
    explicacao: [
      {
        tipo: 'p',
        texto:
          'A posição que o exame adota é consistente: variedades linguísticas são formas legítimas da língua, não erros nem curiosidades pitorescas.',
      },
      {
        tipo: 'p',
        texto:
          'Repare que o episódio da padaria poderia sustentar a leitura oposta — houve estranhamento. Mas o texto conta o episódio até o fim, e no fim há compreensão mútua. Ler o desfecho, e não só o conflito, é o que separa a alternativa A da C.',
      },
      {
        tipo: 'destaque',
        variante: 'nota',
        titulo: 'Filtro rápido para esta área',
        texto:
          'Alternativas que dizem que uma variedade impede a comunicação, é inferior, ou precisa ser corrigida para valer quase sempre são distratores nesta área do exame.',
      },
    ],
    irmas: ['ling-var-q1', 'ling-var-q2'],
  },
];
