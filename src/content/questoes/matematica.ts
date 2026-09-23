import type { Questao } from '../tipos';

/**
 * Banco de questões de Matemática.
 *
 * Procedência: todas as questões deste arquivo são `autoral` ou `adaptada` —
 * escritas para este site no formato do exame. Nenhuma é uma questão oficial
 * do ENEM. Para adicionar questões oficiais com referência correta, ver
 * docs/ADICIONAR-QUESTOES.md.
 */
export const QUESTOES_MATEMATICA: Questao[] = [
  /* --- Porcentagem ---------------------------------------------------- */
  {
    id: 'mat-porc-q1',
    topicId: 'mat-porcentagem',
    conceito: 'Acréscimos e descontos sucessivos',
    procedencia: 'autoral',
    dificuldade: 'media',
    eixo: 'problemas',
    minutos: 3,
    enunciado: [
      {
        tipo: 'p',
        texto:
          'Uma loja anuncia que um produto de R$ 200,00 sofreu um aumento de 20% no início do mês e, na liquidação do fim do mês, recebeu desconto de 20% sobre o novo preço.',
      },
      { tipo: 'p', texto: 'O preço do produto ao fim da liquidação é de' },
    ],
    alternativas: [
      {
        letra: 'A',
        texto: 'R$ 160,00.',
        correta: false,
        diagnostico:
          'Você aplicou só o desconto, sobre o preço original (200 × 0,8). O aumento aconteceu antes e mudou a base de cálculo.',
        tipoErro: 'leitura',
      },
      {
        letra: 'B',
        texto: 'R$ 192,00.',
        correta: true,
        diagnostico:
          'Correto. 200 × 1,20 = 240, e 240 × 0,80 = 192. Cada percentual incide sobre o valor vigente no momento.',
      },
      {
        letra: 'C',
        texto: 'R$ 200,00.',
        correta: false,
        diagnostico:
          'Esta é a armadilha central da questão: 20% de aumento e 20% de desconto NÃO se anulam, porque o desconto incide sobre uma base maior (240) do que o aumento incidiu (200).',
        tipoErro: 'conceito',
      },
      {
        letra: 'D',
        texto: 'R$ 232,00.',
        correta: false,
        diagnostico:
          'Você aplicou os 20% de desconto sobre os R$ 40,00 do aumento, e não sobre o preço. Percentual sempre incide sobre o valor inteiro vigente.',
        tipoErro: 'conceito',
      },
      {
        letra: 'E',
        texto: 'R$ 240,00.',
        correta: false,
        diagnostico: 'Você parou no aumento e não aplicou a segunda etapa.',
        tipoErro: 'leitura',
      },
    ],
    explicacao: [
      { tipo: 'p', texto: 'Trabalhe com fatores multiplicativos, nunca somando percentuais.' },
      {
        tipo: 'formula',
        latexLike: '200 × 1,20 = 240        (aumento de 20%)\n240 × 0,80 = 192        (desconto de 20%)',
        legenda: 'Aumentar 20% é multiplicar por 1,20. Descontar 20% é multiplicar por 0,80.',
      },
      {
        tipo: 'p',
        texto:
          'O fator acumulado é 1,20 × 0,80 = 0,96 — ou seja, o preço final é 96% do original: há uma perda líquida de 4%, e não zero. Essa perda existe sempre que o aumento e o desconto têm o mesmo percentual.',
      },
    ],
    irmas: ['mat-porc-q2'],
  },
  {
    id: 'mat-porc-q2',
    topicId: 'mat-porcentagem',
    conceito: 'Porcentagem de uma quantidade',
    procedencia: 'autoral',
    dificuldade: 'facil',
    eixo: 'problemas',
    minutos: 2,
    enunciado: [
      {
        tipo: 'p',
        texto:
          'Uma escola tem 750 estudantes matriculados no ensino médio. Em uma pesquisa interna, 36% deles declararam fazer algum curso fora do horário escolar.',
      },
      { tipo: 'p', texto: 'O número de estudantes que declararam fazer curso fora da escola é' },
    ],
    alternativas: [
      {
        letra: 'A',
        texto: '27.',
        correta: false,
        diagnostico:
          'Escorregão de vírgula: você calculou 750 × 0,036 em vez de 750 × 0,36. 36% é 0,36, não 0,036.',
        tipoErro: 'calculo',
      },
      {
        letra: 'B',
        texto: '270.',
        correta: true,
        diagnostico: 'Correto. 750 × 0,36 = 270. Ou, mentalmente: 10% = 75, então 36% = 75 × 3,6 = 270.',
      },
      {
        letra: 'C',
        texto: '480.',
        correta: false,
        diagnostico:
          'Você calculou os 64% que NÃO fazem curso. O comando pedia os que fazem — leia o que está sendo perguntado antes de calcular.',
        tipoErro: 'leitura',
      },
      {
        letra: 'D',
        texto: '786.',
        correta: false,
        diagnostico: 'Você somou 36 ao total em vez de calcular 36% dele.',
        tipoErro: 'conceito',
      },
      {
        letra: 'E',
        texto: '2 083.',
        correta: false,
        diagnostico:
          'Você dividiu 750 por 0,36. Dividir por um número menor que 1 aumenta o resultado — o sinal de que a operação está invertida é o resultado ser maior que o total de alunos.',
        tipoErro: 'conceito',
      },
    ],
    explicacao: [
      {
        tipo: 'p',
        texto:
          'Calcular p% de um valor é multiplicar o valor por p/100. Aqui: 750 × 36/100 = 270.',
      },
      {
        tipo: 'destaque',
        variante: 'nota',
        titulo: 'Checagem de sanidade',
        texto:
          '36% é pouco mais de um terço. Um terço de 750 é 250. O resultado precisa ficar logo acima disso — 270 passa no teste, 27 e 2 083 não.',
      },
    ],
    irmas: ['mat-porc-q1'],
  },

  /* --- Razão e proporção ------------------------------------------------ */
  {
    id: 'mat-prop-q1',
    topicId: 'mat-proporcao',
    conceito: 'Regra de três inversa',
    procedencia: 'autoral',
    dificuldade: 'media',
    eixo: 'problemas',
    minutos: 3,
    enunciado: [
      {
        tipo: 'p',
        texto:
          'Em uma fábrica, 4 máquinas idênticas trabalhando juntas produzem um lote em 18 dias. A empresa recebeu um pedido urgente e passou a usar 6 máquinas iguais às anteriores, no mesmo ritmo.',
      },
      { tipo: 'p', texto: 'O lote passará a ficar pronto em' },
    ],
    alternativas: [
      {
        letra: 'A',
        texto: '9 dias.',
        correta: false,
        diagnostico:
          'Você raciocinou "mais máquinas, metade do tempo". Mas o número de máquinas aumentou 50% (de 4 para 6), não 100%.',
        tipoErro: 'conceito',
      },
      {
        letra: 'B',
        texto: '12 dias.',
        correta: true,
        diagnostico:
          'Correto. Grandezas inversamente proporcionais: 4 × 18 = 6 × x, logo x = 72/6 = 12 dias.',
      },
      {
        letra: 'C',
        texto: '13,5 dias.',
        correta: false,
        diagnostico: 'Você multiplicou 18 por 3/4 em vez de por 4/6. A razão foi montada de cabeça para baixo.',
        tipoErro: 'calculo',
      },
      {
        letra: 'D',
        texto: '24 dias.',
        correta: false,
        diagnostico: 'Você somou os valores em vez de montar a proporção.',
        tipoErro: 'conceito',
      },
      {
        letra: 'E',
        texto: '27 dias.',
        correta: false,
        diagnostico:
          'Aqui está o erro mais comum: você aplicou regra de três DIRETA (18 × 6/4 = 27). Mais máquinas não podem levar mais tempo — o próprio resultado denuncia a inversão.',
        tipoErro: 'conceito',
      },
    ],
    explicacao: [
      {
        tipo: 'p',
        texto:
          'Primeiro decida o sentido: mais máquinas, menos dias. As grandezas são inversamente proporcionais, então o produto máquinas × dias é constante.',
      },
      {
        tipo: 'formula',
        latexLike: '4 × 18 = 6 × x\n72 = 6x\nx = 12 dias',
        legenda: 'Em proporção inversa, o produto se mantém. Em proporção direta, o que se mantém é a razão.',
      },
      {
        tipo: 'destaque',
        variante: 'atencao',
        titulo: 'O teste que salva',
        texto:
          'Antes de montar qualquer regra de três, responda: aumentando uma grandeza, a outra sobe ou desce? Se desce, é inversa. Esse único segundo elimina o erro da alternativa E.',
      },
    ],
    irmas: ['mat-prop-q2'],
  },
  {
    id: 'mat-prop-q2',
    topicId: 'mat-proporcao',
    conceito: 'Escala',
    procedencia: 'autoral',
    dificuldade: 'media',
    eixo: 'problemas',
    minutos: 3,
    enunciado: [
      {
        tipo: 'p',
        texto:
          'Em um mapa rodoviário de escala 1 : 250 000, a distância em linha reta entre duas cidades mede 8 cm.',
      },
      { tipo: 'p', texto: 'A distância real entre essas cidades, em linha reta, é de' },
    ],
    alternativas: [
      {
        letra: 'A',
        texto: '2 km.',
        correta: false,
        diagnostico:
          'A conta da escala estava certa (2 000 000 cm), mas a conversão errou uma ordem de grandeza: 1 km tem 100 000 cm, não 1 000 000 cm.',
        tipoErro: 'calculo',
      },
      {
        letra: 'B',
        texto: '20 km.',
        correta: true,
        diagnostico:
          'Correto. 8 × 250 000 = 2 000 000 cm. Dividindo por 100 000 cm/km, chega-se a 20 km.',
      },
      {
        letra: 'C',
        texto: '200 km.',
        correta: false,
        diagnostico: 'Conversão de unidade com um zero a mais. Vale escrever 1 km = 10⁵ cm e conferir.',
        tipoErro: 'calculo',
      },
      {
        letra: 'D',
        texto: '2 000 000 m.',
        correta: false,
        diagnostico:
          'O número está certo, mas a unidade não: 2 000 000 é o resultado em centímetros, e você o rotulou como metros.',
        tipoErro: 'leitura',
      },
      {
        letra: 'E',
        texto: '31 250 km.',
        correta: false,
        diagnostico:
          'Você dividiu 250 000 por 8 em vez de multiplicar. Na escala 1 : n, cada 1 unidade no mapa vale n unidades no terreno — portanto multiplica.',
        tipoErro: 'conceito',
      },
    ],
    explicacao: [
      {
        tipo: 'p',
        texto:
          'Escala 1 : 250 000 significa que 1 cm no mapa corresponde a 250 000 cm no terreno.',
      },
      {
        tipo: 'formula',
        latexLike: 'distância real = 8 cm × 250 000 = 2 000 000 cm\n1 km = 100 000 cm\n2 000 000 ÷ 100 000 = 20 km',
        legenda: 'A conta da escala é simples; o que derruba é a conversão de unidade.',
      },
      {
        tipo: 'destaque',
        variante: 'nota',
        titulo: 'Atalho que evita erro',
        texto:
          'Para escalas em cm, divida o denominador por 100 000 para saber quantos km vale 1 cm. Aqui: 250 000 ÷ 100 000 = 2,5 km por centímetro. Então 8 cm = 8 × 2,5 = 20 km.',
      },
    ],
    irmas: ['mat-prop-q1'],
  },

  /* --- Gráficos e tabelas ----------------------------------------------- */
  {
    id: 'mat-prop-q3',
    topicId: 'mat-proporcao',
    conceito: 'Divisão em partes proporcionais',
    procedencia: 'autoral',
    dificuldade: 'media',
    eixo: 'problemas',
    minutos: 3,
    enunciado: [
      {
        tipo: 'p',
        texto:
          'Uma cooperativa vai distribuir R$ 4 200,00 entre três produtores, proporcionalmente ao que cada um colheu: 2, 3 e 5 toneladas.',
      },
      { tipo: 'p', texto: 'O produtor que colheu 3 toneladas receberá' },
    ],
    alternativas: [
      {
        letra: 'A',
        texto: 'R$ 420,00.',
        correta: false,
        diagnostico:
          'Você achou quanto vale uma parte (4 200 ÷ 10 = 420) e parou aí. Esse produtor tem direito a 3 partes, não a uma.',
        tipoErro: 'calculo',
      },
      {
        letra: 'B',
        texto: 'R$ 840,00.',
        correta: false,
        diagnostico:
          'Este é o valor de quem colheu 2 toneladas (2 × 420). O comando pergunta pelo de 3 toneladas.',
        tipoErro: 'leitura',
      },
      {
        letra: 'C',
        texto: 'R$ 1 260,00.',
        correta: true,
        diagnostico:
          'Correto. São 2 + 3 + 5 = 10 partes; cada parte vale 4 200 ÷ 10 = 420; o produtor de 3 toneladas recebe 3 × 420 = 1 260.',
      },
      {
        letra: 'D',
        texto: 'R$ 1 400,00.',
        correta: false,
        diagnostico:
          'Você dividiu em três partes iguais (4 200 ÷ 3). O enunciado diz proporcionalmente à colheita, e as colheitas são diferentes.',
        tipoErro: 'conceito',
      },
      {
        letra: 'E',
        texto: 'R$ 2 100,00.',
        correta: false,
        diagnostico:
          'Este é o valor de quem colheu 5 toneladas (5 × 420) — a maior parte, não a do produtor pedido.',
        tipoErro: 'leitura',
      },
    ],
    explicacao: [
      {
        tipo: 'p',
        texto:
          'Dividir proporcionalmente é repartir o total em partes iguais e entregar a cada um o número de partes que lhe cabe. O primeiro passo é sempre descobrir quanto vale uma parte.',
      },
      {
        tipo: 'formula',
        latexLike:
          'partes = 2 + 3 + 5 = 10\n1 parte = 4 200 ÷ 10 = 420\nprodutor de 3 t = 3 × 420 = 1 260',
        legenda: 'Somar os três resultados (840 + 1 260 + 2 100 = 4 200) confirma a divisão.',
      },
      {
        tipo: 'p',
        texto:
          'Conferir se as partes somam o total custa dez segundos e pega tanto erro de conta quanto alternativa marcada no produtor errado.',
      },
    ],
    irmas: ['mat-prop-q1', 'mat-prop-q2'],
  },
  {
    id: 'mat-graf-q1',
    topicId: 'mat-graficos',
    conceito: 'Variação percentual em tabela',
    procedencia: 'autoral',
    dificuldade: 'media',
    eixo: 'problemas',
    minutos: 4,
    enunciado: [
      {
        tipo: 'p',
        texto:
          'A tabela mostra a quantidade de resíduos sólidos urbanos coletados em um município, em mil toneladas.',
      },
      {
        tipo: 'tabela',
        cabecalho: ['Ano', 'Resíduos coletados (mil t)'],
        linhas: [
          ['2022', '79'],
          ['2023', '82'],
          ['2024', '86'],
        ],
        legenda: 'Dados fictícios, construídos para este exercício.',
      },
      {
        tipo: 'p',
        texto:
          'O crescimento percentual da quantidade coletada entre 2022 e 2024, aproximadamente, foi de',
      },
    ],
    alternativas: [
      {
        letra: 'A',
        texto: '4,3%.',
        correta: false,
        diagnostico:
          'Você calculou a variação de apenas um dos intervalos (2023→2024) e não o período inteiro pedido.',
        tipoErro: 'leitura',
      },
      {
        letra: 'B',
        texto: '7,0%.',
        correta: false,
        diagnostico:
          'Esse é o crescimento ABSOLUTO (86 − 79 = 7 mil toneladas), não o percentual. Variação percentual sempre precisa ser dividida pela base.',
        tipoErro: 'conceito',
      },
      {
        letra: 'C',
        texto: '8,1%.',
        correta: false,
        diagnostico:
          'Você dividiu pela base errada: usou 7/86 (valor final) em vez de 7/79 (valor inicial). A base de uma variação é sempre o ponto de partida.',
        tipoErro: 'conceito',
      },
      {
        letra: 'D',
        texto: '8,9%.',
        correta: true,
        diagnostico: 'Correto. (86 − 79)/79 = 7/79 ≈ 0,0886, ou seja, cerca de 8,9%.',
      },
      {
        letra: 'E',
        texto: '108,9%.',
        correta: false,
        diagnostico:
          'Você calculou 86/79 e esqueceu de subtrair o inteiro. 108,9% é quanto 2024 representa de 2022; o crescimento é o que passa de 100%.',
        tipoErro: 'conceito',
      },
    ],
    explicacao: [
      {
        tipo: 'formula',
        latexLike: 'variação % = (valor final − valor inicial) / valor inicial × 100\n= (86 − 79) / 79 × 100\n= 7 / 79 × 100 ≈ 8,9%',
      },
      {
        tipo: 'p',
        texto:
          'Repare que três das cinco alternativas erradas nascem da mesma confusão: variação absoluta, base errada e razão sem subtrair. Fixar a fórmula acima elimina as três de uma vez.',
      },
    ],
    irmas: ['mat-porc-q1'],
  },
  {
    id: 'mat-graf-q2',
    topicId: 'mat-graficos',
    conceito: 'Conclusão sustentada por dados',
    procedencia: 'autoral',
    dificuldade: 'media',
    eixo: 'fenomenos',
    minutos: 4,
    enunciado: [
      {
        tipo: 'p',
        texto:
          'A tabela mostra a temperatura média mensal, em °C, registrada em duas cidades ao longo de um ano.',
      },
      {
        tipo: 'tabela',
        cabecalho: ['Cidade', 'Média anual', 'Mês mais quente', 'Mês mais frio'],
        linhas: [
          ['Cidade X', '21', '28', '14'],
          ['Cidade Y', '21', '23', '19'],
        ],
        legenda: 'Dados fictícios, construídos para este exercício.',
      },
      { tipo: 'p', texto: 'Com base apenas nos dados da tabela, é correto afirmar que' },
    ],
    alternativas: [
      {
        letra: 'A',
        texto: 'a Cidade X é mais quente que a Cidade Y ao longo do ano.',
        correta: false,
        diagnostico:
          'As duas têm a mesma média anual (21 °C). A tabela não sustenta que uma seja mais quente que a outra no conjunto do ano.',
        tipoErro: 'grafico',
      },
      {
        letra: 'B',
        texto: 'a Cidade X apresenta maior amplitude térmica anual que a Cidade Y.',
        correta: true,
        diagnostico:
          'Correto. Amplitude é a diferença entre o extremo mais alto e o mais baixo: X tem 28 − 14 = 14 °C, e Y tem 23 − 19 = 4 °C.',
      },
      {
        letra: 'C',
        texto: 'a Cidade Y tem clima mais úmido que a Cidade X.',
        correta: false,
        diagnostico:
          'A tabela só traz temperatura. Umidade é outra variável — concluir sobre ela é ir além do que o dado permite.',
        tipoErro: 'distrator',
      },
      {
        letra: 'D',
        texto: 'as duas cidades têm o mesmo clima, pois têm a mesma média anual.',
        correta: false,
        diagnostico:
          'Médias iguais não significam distribuições iguais. É exatamente por isso que média sozinha é uma medida pobre — a amplitude aqui difere em mais de três vezes.',
        tipoErro: 'conceito',
      },
      {
        letra: 'E',
        texto: 'a Cidade X registra mais dias de calor extremo que a Cidade Y.',
        correta: false,
        diagnostico:
          'A tabela mostra o valor do mês mais quente, não a quantidade de dias. Número de ocorrências não está no dado.',
        tipoErro: 'grafico',
      },
    ],
    explicacao: [
      {
        tipo: 'p',
        texto:
          'Este é o tipo de item mais frequente em leitura de dados: o cálculo é trivial e a dificuldade está em separar o que o dado mostra do que ele apenas sugere.',
      },
      {
        tipo: 'destaque',
        variante: 'nota',
        titulo: 'Regra de ouro',
        texto:
          'Se a alternativa fala de uma variável que não aparece na tabela (umidade, número de dias, causa), ela já está eliminada — por mais verdadeira que pareça no mundo real.',
      },
    ],
  },

  /* --- Medidas de tendência central -------------------------------------- */
  {
    id: 'mat-graf-q3',
    topicId: 'mat-graficos',
    conceito: 'Eixo truncado',
    procedencia: 'autoral',
    dificuldade: 'media',
    eixo: 'argumentacao',
    minutos: 4,
    enunciado: [
      {
        tipo: 'p',
        texto:
          'Uma rede de lojas divulgou um gráfico de barras do próprio faturamento anual. No gráfico, o eixo vertical começa em R$ 98 milhões, e não em zero. Os valores representados são:',
      },
      {
        tipo: 'tabela',
        cabecalho: ['Ano', 'Faturamento (R$ milhões)'],
        linhas: [
          ['2023', '100'],
          ['2024', '102'],
          ['2025', '104'],
        ],
        legenda: 'Dados fictícios, construídos para este exercício.',
      },
      {
        tipo: 'p',
        texto:
          'Nesse gráfico, a barra de 2025 aparece com cerca do triplo da altura da barra de 2023. Sobre essa representação, é correto afirmar que',
      },
    ],
    alternativas: [
      {
        letra: 'A',
        texto: 'o faturamento de 2025 foi aproximadamente o triplo do de 2023.',
        correta: false,
        diagnostico:
          'Você leu a altura da barra como se fosse o valor. Com o eixo cortado em 98, a barra desenha só o que passa de 98 — e 2 contra 6 realmente dá o triplo na altura, enquanto 100 contra 104 não chega a 5%.',
        tipoErro: 'grafico',
      },
      {
        letra: 'B',
        texto:
          'o faturamento cresceu 4% no período, e o corte do eixo exagera visualmente essa diferença.',
        correta: true,
        diagnostico:
          'Correto. De 100 para 104 são 4% sobre o valor inicial. A barra triplicou de altura porque o eixo começa em 98, não porque o faturamento triplicou.',
      },
      {
        letra: 'C',
        texto: 'o gráfico está incorreto, porque todo eixo vertical precisa começar em zero.',
        correta: false,
        diagnostico:
          'Cortar o eixo não é proibido — às vezes é a única forma de enxergar variações pequenas. O problema não é a escolha, é ler a altura como se o eixo começasse em zero.',
        tipoErro: 'conceito',
      },
      {
        letra: 'D',
        texto: 'o faturamento cresceu 2% de 2023 a 2025.',
        correta: false,
        diagnostico:
          'Esse é o crescimento de um ano só (100 para 102). O período pedido vai até 2025, que fecha em 104.',
        tipoErro: 'leitura',
      },
      {
        letra: 'E',
        texto: 'não é possível calcular a variação percentual sem saber onde o eixo começa.',
        correta: false,
        diagnostico:
          'Os valores estão escritos na tabela: 100 e 104. Onde o eixo começa afeta a aparência do desenho, não a conta.',
        tipoErro: 'distrator',
      },
    ],
    explicacao: [
      {
        tipo: 'p',
        texto:
          'Eixo truncado é um gráfico cujo eixo vertical não começa em zero. Ele não mente nos números — mente na proporção entre as barras, que é o que o olho lê primeiro.',
      },
      {
        tipo: 'formula',
        latexLike:
          'variação = (104 − 100) / 100 = 0,04 = 4%\naltura desenhada 2023 = 100 − 98 = 2\naltura desenhada 2025 = 104 − 98 = 6  →  3 vezes maior',
        legenda: 'O mesmo par de números produz 4% na conta e “o triplo” no desenho.',
      },
      {
        tipo: 'destaque',
        variante: 'atencao',
        titulo: 'Onde isso cai',
        texto:
          'O ENEM costuma cobrar isso com gráfico de empresa, campanha ou pesquisa de opinião — sempre com uma alternativa que repete a impressão visual. Olhar onde o eixo começa, antes de comparar barras, elimina essa alternativa direto.',
      },
    ],
    irmas: ['mat-graf-q1', 'mat-graf-q2'],
  },
  {
    id: 'mat-graf-q4',
    topicId: 'mat-graficos',
    conceito: 'Gráfico de setores e valor absoluto',
    procedencia: 'autoral',
    dificuldade: 'facil',
    eixo: 'problemas',
    minutos: 3,
    enunciado: [
      {
        tipo: 'p',
        texto:
          'Uma escola perguntou a seus 1 200 alunos como eles chegam às aulas. O resultado foi apresentado em um gráfico de setores:',
      },
      {
        tipo: 'tabela',
        cabecalho: ['Meio de transporte', 'Percentual'],
        linhas: [
          ['Ônibus', '45%'],
          ['A pé', '25%'],
          ['Carro', '20%'],
          ['Bicicleta', '10%'],
        ],
        legenda: 'Dados fictícios, construídos para este exercício.',
      },
      {
        tipo: 'p',
        texto: 'O número de alunos que vão a pé supera o dos que vão de bicicleta em',
      },
    ],
    alternativas: [
      {
        letra: 'A',
        texto: '15 alunos.',
        correta: false,
        diagnostico:
          'Você parou na diferença entre os percentuais (25% − 10% = 15 pontos percentuais). Falta aplicar esses 15% sobre os 1 200 alunos.',
        tipoErro: 'conceito',
      },
      {
        letra: 'B',
        texto: '120 alunos.',
        correta: false,
        diagnostico:
          'Este é o número de alunos que vão de bicicleta (10% de 1 200), não a diferença entre os dois grupos.',
        tipoErro: 'leitura',
      },
      {
        letra: 'C',
        texto: '180 alunos.',
        correta: true,
        diagnostico:
          'Correto. A pé são 25% de 1 200 = 300; de bicicleta, 10% de 1 200 = 120. A diferença é 300 − 120 = 180.',
      },
      {
        letra: 'D',
        texto: '300 alunos.',
        correta: false,
        diagnostico:
          'Este é o total de alunos que vão a pé. O comando pede em quanto esse grupo supera o de bicicleta, ou seja, a diferença.',
        tipoErro: 'leitura',
      },
      {
        letra: 'E',
        texto: '420 alunos.',
        correta: false,
        diagnostico:
          'Você somou os dois grupos (300 + 120) em vez de subtrair. “Supera em” pede diferença.',
        tipoErro: 'leitura',
      },
    ],
    explicacao: [
      {
        tipo: 'p',
        texto:
          'Gráfico de setores mostra composição: cada fatia é uma parte de um total que vale 100%. Para virar quantidade, o percentual precisa ser aplicado sobre o total informado.',
      },
      {
        tipo: 'formula',
        latexLike:
          'a pé = 0,25 × 1 200 = 300\nbicicleta = 0,10 × 1 200 = 120\ndiferença = 300 − 120 = 180',
        legenda: 'Ou, direto: (0,25 − 0,10) × 1 200 = 0,15 × 1 200 = 180.',
      },
      {
        tipo: 'p',
        texto:
          'Repare que os dois caminhos dão o mesmo resultado — mas só depois de multiplicar pelo total. Parar em “15%” é o erro mais comum aqui.',
      },
    ],
    irmas: ['mat-graf-q1'],
  },
  {
    id: 'mat-med-q1',
    topicId: 'mat-media',
    conceito: 'Média versus mediana com valor extremo',
    procedencia: 'autoral',
    dificuldade: 'media',
    eixo: 'argumentacao',
    minutos: 4,
    enunciado: [
      {
        tipo: 'p',
        texto:
          'Uma pequena empresa tem cinco funcionários, com os seguintes salários mensais, em reais: 1 500, 1 600, 1 700, 1 800 e 12 000.',
      },
      {
        tipo: 'p',
        texto:
          'Um sindicato quer divulgar um valor que represente bem o salário típico dessa empresa. A medida mais adequada e seu valor são',
      },
    ],
    alternativas: [
      {
        letra: 'A',
        texto: 'a média, R$ 3 720,00.',
        correta: false,
        diagnostico:
          'A média está calculada certa, mas ela é justamente a medida inadequada aqui: nenhum funcionário ganha perto de R$ 3 720, porque o salário de R$ 12 000 puxa o valor para cima.',
        tipoErro: 'conceito',
      },
      {
        letra: 'B',
        texto: 'a média, R$ 1 650,00.',
        correta: false,
        diagnostico: 'Este valor não é a média dos cinco salários. Você parece ter usado só os quatro menores.',
        tipoErro: 'calculo',
      },
      {
        letra: 'C',
        texto: 'a mediana, R$ 1 700,00.',
        correta: true,
        diagnostico:
          'Correto. Com os dados em ordem, o valor central é 1 700. A mediana não se altera com o valor extremo e representa melhor o salário típico.',
      },
      {
        letra: 'D',
        texto: 'a mediana, R$ 1 800,00.',
        correta: false,
        diagnostico:
          'A escolha da medida está certa, mas a posição central de cinco valores ordenados é o 3º, não o 4º.',
        tipoErro: 'calculo',
      },
      {
        letra: 'E',
        texto: 'a moda, R$ 12 000,00.',
        correta: false,
        diagnostico:
          'Moda é o valor mais frequente. Aqui nenhum valor se repete, então não há moda — e R$ 12 000 é o extremo, não o mais comum.',
        tipoErro: 'conceito',
      },
    ],
    explicacao: [
      {
        tipo: 'p',
        texto:
          'Média = (1 500 + 1 600 + 1 700 + 1 800 + 12 000) / 5 = 18 600 / 5 = 3 720. Mediana = valor central dos dados ordenados = 1 700.',
      },
      {
        tipo: 'p',
        texto:
          'Quatro dos cinco funcionários ganham menos que a média. Esse é o sinal clássico de distribuição distorcida por um valor extremo — situação em que a mediana descreve melhor o caso típico.',
      },
      {
        tipo: 'destaque',
        variante: 'nota',
        titulo: 'Onde isso aparece de verdade',
        texto:
          'É o mesmo motivo pelo qual se divulga a renda MEDIANA de um país, e não só a média: poucas rendas muito altas deslocam a média para longe da realidade da maioria.',
      },
    ],
    irmas: ['mat-med-q2'],
  },
  {
    id: 'mat-med-q2',
    topicId: 'mat-media',
    conceito: 'Cálculo de mediana com número par de dados',
    procedencia: 'autoral',
    dificuldade: 'facil',
    eixo: 'problemas',
    minutos: 2,
    enunciado: [
      {
        tipo: 'p',
        texto:
          'Um professor registrou as notas de seis estudantes em uma avaliação: 7, 4, 9, 6, 8 e 5.',
      },
      { tipo: 'p', texto: 'A mediana dessas notas é' },
    ],
    alternativas: [
      {
        letra: 'A',
        texto: '6,0.',
        correta: false,
        diagnostico:
          'Com seis valores não existe um único termo central. É preciso fazer a média dos dois do meio — e 6 é apenas um deles.',
        tipoErro: 'conceito',
      },
      {
        letra: 'B',
        texto: '6,5.',
        correta: true,
        diagnostico:
          'Correto. Ordenando: 4, 5, 6, 7, 8, 9. Os dois centrais são 6 e 7, e (6 + 7)/2 = 6,5.',
      },
      {
        letra: 'C',
        texto: '6,5 apenas se as notas forem reordenadas.',
        correta: false,
        diagnostico:
          'A ordenação faz parte da definição de mediana — não é uma condição extra. O valor é 6,5.',
        tipoErro: 'distrator',
      },
      {
        letra: 'D',
        texto: '7,0.',
        correta: false,
        diagnostico: 'Você pegou o outro valor central sem fazer a média entre os dois.',
        tipoErro: 'conceito',
      },
      {
        letra: 'E',
        texto: '9,0.',
        correta: false,
        diagnostico:
          'Esse é o valor máximo, não a mediana. Foi possível chegar aqui pegando o termo central da lista SEM ordenar antes.',
        tipoErro: 'leitura',
      },
    ],
    explicacao: [
      {
        tipo: 'lista',
        ordenada: true,
        itens: [
          'Ordene sempre — sem ordenar, a mediana não existe: 4, 5, 6, 7, 8, 9.',
          'Conte quantos valores há: 6, que é par.',
          'Com n par, a mediana é a média dos dois centrais: (6 + 7)/2 = 6,5.',
        ],
      },
    ],
    irmas: ['mat-med-q1'],
  },

  /* --- Grandezas e unidades ---------------------------------------------- */
  {
    id: 'mat-med-q3',
    topicId: 'mat-media',
    conceito: 'Média ponderada',
    procedencia: 'autoral',
    dificuldade: 'media',
    eixo: 'problemas',
    minutos: 4,
    enunciado: [
      {
        tipo: 'p',
        texto:
          'Um processo seletivo calcula a nota final com pesos: prova objetiva peso 3, redação peso 2 e entrevista peso 1. Uma candidata obteve 7,0 na prova objetiva, 8,5 na redação e 6,0 na entrevista.',
      },
      { tipo: 'p', texto: 'A nota final dessa candidata é, aproximadamente,' },
    ],
    alternativas: [
      {
        letra: 'A',
        texto: '7,0.',
        correta: false,
        diagnostico:
          'Você trocou os pesos da prova objetiva e da entrevista (1 e 3). Como a nota da entrevista é a menor, inverter os pesos derruba a média.',
        tipoErro: 'leitura',
      },
      {
        letra: 'B',
        texto: '7,2.',
        correta: false,
        diagnostico:
          'Esta é a média simples das três notas (21,5 ÷ 3). Ela ignora os pesos — e o peso 3 da prova objetiva é justamente o que mais mexe no resultado.',
        tipoErro: 'conceito',
      },
      {
        letra: 'C',
        texto: '7,3.',
        correta: true,
        diagnostico:
          'Correto. (7,0 × 3 + 8,5 × 2 + 6,0 × 1) ÷ (3 + 2 + 1) = 44 ÷ 6 ≈ 7,33.',
      },
      {
        letra: 'D',
        texto: '14,7.',
        correta: false,
        diagnostico:
          'Você dividiu por 3, o número de notas, em vez de 6, a soma dos pesos. Nota maior que 10 é o sinal de que o divisor está errado.',
        tipoErro: 'calculo',
      },
      {
        letra: 'E',
        texto: '44,0.',
        correta: false,
        diagnostico:
          'Você somou nota × peso e parou. Falta dividir pela soma dos pesos — sem isso o resultado nem está na escala de 0 a 10.',
        tipoErro: 'calculo',
      },
    ],
    explicacao: [
      {
        tipo: 'p',
        texto:
          'Na média ponderada, cada nota entra repetida tantas vezes quanto o seu peso. Por isso o divisor é a soma dos pesos, não a quantidade de notas.',
      },
      {
        tipo: 'formula',
        latexLike:
          '(7,0 × 3) + (8,5 × 2) + (6,0 × 1) = 21 + 17 + 6 = 44\n44 ÷ (3 + 2 + 1) = 44 ÷ 6 ≈ 7,33',
        legenda: 'É como se a prova objetiva tivesse sido feita três vezes e a entrevista uma.',
      },
      {
        tipo: 'p',
        texto:
          'Confira sempre a escala do resultado: uma média de notas de 0 a 10 tem que cair entre a menor e a maior nota — aqui, entre 6,0 e 8,5. Qualquer coisa fora disso é erro de divisor.',
      },
    ],
    irmas: ['mat-med-q1', 'mat-med-q2'],
  },
  {
    id: 'mat-gran-q1',
    topicId: 'mat-grandezas',
    conceito: 'Grandezas compostas e conversão',
    procedencia: 'autoral',
    dificuldade: 'media',
    eixo: 'problemas',
    minutos: 3,
    enunciado: [
      {
        tipo: 'p',
        texto:
          'Um carro percorre, em média, 12 km com 1 litro de combustível. O motorista vai fazer uma viagem de 300 km e o litro do combustível custa R$ 5,80.',
      },
      { tipo: 'p', texto: 'O gasto com combustível nessa viagem será de, aproximadamente,' },
    ],
    alternativas: [
      {
        letra: 'A',
        texto: 'R$ 69,60.',
        correta: false,
        diagnostico:
          'Você multiplicou 12 × 5,80, que é o custo de rodar 12 km — não o da viagem inteira.',
        tipoErro: 'leitura',
      },
      {
        letra: 'B',
        texto: 'R$ 145,00.',
        correta: true,
        diagnostico: 'Correto. 300 ÷ 12 = 25 litros, e 25 × 5,80 = R$ 145,00.',
      },
      {
        letra: 'C',
        texto: 'R$ 174,00.',
        correta: false,
        diagnostico: 'Você usou 30 litros, o que corresponde a um consumo de 10 km/L, e não os 12 km/L do enunciado.',
        tipoErro: 'leitura',
      },
      {
        letra: 'D',
        texto: 'R$ 1 740,00.',
        correta: false,
        diagnostico:
          'Você multiplicou 300 × 5,80, tratando cada quilômetro como se custasse um litro. Falta dividir pelo rendimento.',
        tipoErro: 'conceito',
      },
      {
        letra: 'E',
        texto: 'R$ 20 880,00.',
        correta: false,
        diagnostico:
          'Você multiplicou as três grandezas. Um resultado absurdo para uma viagem de 300 km é sinal para refazer a conta antes de marcar.',
        tipoErro: 'conceito',
      },
    ],
    explicacao: [
      {
        tipo: 'p',
        texto:
          'Acompanhe as unidades e a operação aparece sozinha: km ÷ (km/L) = L, e depois L × (R$/L) = R$.',
      },
      {
        tipo: 'formula',
        latexLike: '300 km ÷ 12 km/L = 25 L\n25 L × R$ 5,80/L = R$ 145,00',
      },
      {
        tipo: 'destaque',
        variante: 'nota',
        titulo: 'Técnica geral',
        texto:
          'Escreva a unidade ao lado de cada número. Se as unidades não se cancelam até sobrar a unidade pedida, a operação escolhida está errada. Isso resolve boa parte das questões de grandezas sem decorar fórmula.',
      },
    ],
    irmas: ['mat-gran-q2'],
  },
  {
    id: 'mat-gran-q2',
    topicId: 'mat-grandezas',
    conceito: 'Conversão entre m³ e litro',
    procedencia: 'autoral',
    dificuldade: 'facil',
    eixo: 'problemas',
    minutos: 2,
    enunciado: [
      {
        tipo: 'p',
        texto:
          'Uma caixa d’água tem formato de bloco retangular com 1,5 m de comprimento, 1 m de largura e 0,8 m de altura, e está completamente cheia.',
      },
      { tipo: 'p', texto: 'A quantidade de água contida nessa caixa é de' },
    ],
    alternativas: [
      {
        letra: 'A',
        texto: '1,2 litro.',
        correta: false,
        diagnostico: 'Esse é o volume em metros cúbicos, com a unidade trocada para litro.',
        tipoErro: 'leitura',
      },
      {
        letra: 'B',
        texto: '12 litros.',
        correta: false,
        diagnostico: 'Conversão com uma casa decimal a menos. 1 m³ = 1 000 L, não 10 L.',
        tipoErro: 'calculo',
      },
      {
        letra: 'C',
        texto: '120 litros.',
        correta: false,
        diagnostico: 'Conversão incompleta: falta um fator 10 para chegar ao valor correto.',
        tipoErro: 'calculo',
      },
      {
        letra: 'D',
        texto: '1 200 litros.',
        correta: true,
        diagnostico: 'Correto. V = 1,5 × 1 × 0,8 = 1,2 m³, e 1,2 × 1 000 = 1 200 litros.',
      },
      {
        letra: 'E',
        texto: '12 000 litros.',
        correta: false,
        diagnostico:
          'Um zero a mais. Uma caixa desse tamanho comporta pouco mais de mil litros — a checagem de ordem de grandeza elimina esta alternativa.',
        tipoErro: 'calculo',
      },
    ],
    explicacao: [
      {
        tipo: 'formula',
        latexLike: 'V = 1,5 × 1 × 0,8 = 1,2 m³\n1 m³ = 1 000 L\nV = 1 200 L',
      },
      {
        tipo: 'destaque',
        variante: 'atencao',
        titulo: 'Memorize só estas três',
        texto: '1 m³ = 1 000 L · 1 L = 1 dm³ = 1 000 cm³ · 1 mL = 1 cm³. Quase toda questão de capacidade sai dessas três.',
      },
    ],
    irmas: ['mat-gran-q1', 'mat-vol-q1'],
  },

  /* --- Função afim -------------------------------------------------------- */
  {
    id: 'mat-gran-q3',
    topicId: 'mat-grandezas',
    conceito: 'Conversão de km/h para m/s',
    procedencia: 'autoral',
    dificuldade: 'facil',
    eixo: 'problemas',
    minutos: 3,
    enunciado: [
      {
        tipo: 'p',
        texto:
          'Um veículo trafega a 72 km/h em uma avenida. Para comparar essa velocidade com dados de um estudo em que todas as medidas estão em metros por segundo, é preciso convertê-la.',
      },
      { tipo: 'p', texto: 'Em metros por segundo, essa velocidade corresponde a' },
    ],
    alternativas: [
      {
        letra: 'A',
        texto: '0,02 m/s.',
        correta: false,
        diagnostico:
          'Você dividiu 72 por 3 600 (os segundos de uma hora) e esqueceu de multiplicar por 1 000 (os metros de um quilômetro). Faltou uma das duas conversões.',
        tipoErro: 'calculo',
      },
      {
        letra: 'B',
        texto: '12 m/s.',
        correta: false,
        diagnostico:
          'Você dividiu por 6 em vez de 3,6. O fator é 3,6 porque vem de 3 600 s ÷ 1 000 m.',
        tipoErro: 'calculo',
      },
      {
        letra: 'C',
        texto: '20 m/s.',
        correta: true,
        diagnostico:
          'Correto. 72 ÷ 3,6 = 20. Ou, por extenso: 72 km/h = 72 000 m ÷ 3 600 s = 20 m/s.',
      },
      {
        letra: 'D',
        texto: '259,2 m/s.',
        correta: false,
        diagnostico:
          'Você multiplicou por 3,6 em vez de dividir. A ordem de grandeza denuncia: 259 m/s é mais rápido que o som.',
        tipoErro: 'conceito',
      },
      {
        letra: 'E',
        texto: '1 200 m/s.',
        correta: false,
        diagnostico:
          'Você converteu km em metros (72 000) mas dividiu por 60, como se a hora tivesse 60 segundos. Uma hora tem 3 600.',
        tipoErro: 'conceito',
      },
    ],
    explicacao: [
      {
        tipo: 'p',
        texto:
          'O fator 3,6 não é para decorar solto: ele sai da própria definição das unidades. Um quilômetro por hora são 1 000 metros divididos por 3 600 segundos.',
      },
      {
        tipo: 'formula',
        latexLike:
          '72 km/h = 72 × 1 000 m ÷ 3 600 s\n        = 72 000 ÷ 3 600\n        = 20 m/s',
        legenda: '1 000 ÷ 3 600 = 1 ÷ 3,6 — daí o atalho de dividir por 3,6.',
      },
      {
        tipo: 'p',
        texto:
          'Confira o sentido antes de marcar: m/s é sempre um número MENOR que o mesmo valor em km/h. Se a sua conta aumentou o número, você multiplicou quando devia dividir.',
      },
    ],
    irmas: ['mat-gran-q1', 'mat-gran-q2'],
  },
  {
    id: 'mat-gran-q4',
    topicId: 'mat-grandezas',
    conceito: 'Conversão de unidades de área',
    procedencia: 'autoral',
    dificuldade: 'media',
    eixo: 'problemas',
    minutos: 4,
    enunciado: [
      {
        tipo: 'p',
        texto:
          'Um salão com 12 m² de piso será revestido com placas quadradas de 20 cm de lado, sem sobras nem recortes.',
      },
      { tipo: 'p', texto: 'O número de placas necessárias é' },
    ],
    alternativas: [
      {
        letra: 'A',
        texto: '3.',
        correta: false,
        diagnostico:
          'Você usou 1 m² = 100 cm². Área converte ao quadrado: como 1 m = 100 cm, 1 m² = 100² = 10 000 cm². Três placas de 20 cm não cobrem um salão.',
        tipoErro: 'conceito',
      },
      {
        letra: 'B',
        texto: '30.',
        correta: false,
        diagnostico:
          'Você converteu 400 cm² para 0,4 m², errando por um fator de 10. O correto é 400 ÷ 10 000 = 0,04 m².',
        tipoErro: 'calculo',
      },
      {
        letra: 'C',
        texto: '60.',
        correta: false,
        diagnostico:
          'Você dividiu a área (12 m²) pelo lado da placa (0,2 m). Isso mistura área com comprimento — o resultado nem tem unidade de contagem.',
        tipoErro: 'conceito',
      },
      {
        letra: 'D',
        texto: '300.',
        correta: true,
        diagnostico:
          'Correto. Cada placa tem 20 × 20 = 400 cm² = 0,04 m². Então 12 ÷ 0,04 = 300 placas.',
      },
      {
        letra: 'E',
        texto: '3 000.',
        correta: false,
        diagnostico:
          'Você usou 1 m² = 100 000 cm². O fator correto é 10 000 — dez vezes menor, o que explica o resultado dez vezes maior.',
        tipoErro: 'calculo',
      },
    ],
    explicacao: [
      {
        tipo: 'p',
        texto:
          'A armadilha aqui não é a divisão, é a conversão. Comprimento converte na potência 1, área na potência 2 e volume na potência 3 — sempre que a unidade tem expoente, o fator também tem.',
      },
      {
        tipo: 'formula',
        latexLike:
          '1 m = 100 cm  →  1 m² = 100² cm² = 10 000 cm²\nplaca = 20 × 20 = 400 cm² = 0,04 m²\nplacas = 12 ÷ 0,04 = 300',
        legenda: 'O mesmo cálculo em cm²: 12 m² = 120 000 cm²; 120 000 ÷ 400 = 300.',
      },
      {
        tipo: 'destaque',
        variante: 'nota',
        titulo: 'Teste de plausibilidade',
        texto:
          'Antes de marcar, estime: uma placa de 20 cm cobre pouco mais de um palmo; um salão de 12 m² é uma sala inteira. Três placas é absurdo, 3 000 também. Só duas alternativas sobrevivem a esse teste.',
      },
    ],
    irmas: ['mat-gran-q2'],
  },
  {
    id: 'mat-afim-q1',
    topicId: 'mat-funcao-afim',
    conceito: 'Função afim em situação de tarifa',
    procedencia: 'autoral',
    dificuldade: 'media',
    eixo: 'problemas',
    minutos: 3,
    enunciado: [
      {
        tipo: 'p',
        texto:
          'Em determinada cidade, a corrida de táxi é cobrada por uma parte fixa de R$ 5,50, chamada bandeirada, mais R$ 2,40 por quilômetro rodado.',
      },
      { tipo: 'p', texto: 'Um passageiro pagou R$ 33,10 por uma corrida. A distância percorrida foi de' },
    ],
    alternativas: [
      {
        letra: 'A',
        texto: '11,5 km.',
        correta: true,
        diagnostico:
          'Correto. 33,10 − 5,50 = 27,60, que é a parte variável. Dividindo por 2,40: 27,60 ÷ 2,40 = 11,5 km.',
      },
      {
        letra: 'B',
        texto: '12,0 km.',
        correta: false,
        diagnostico:
          'A montagem estava certa, mas a divisão foi arredondada sem necessidade: 27,60 ÷ 2,40 dá exatamente 11,5.',
        tipoErro: 'calculo',
      },
      {
        letra: 'C',
        texto: '13,8 km.',
        correta: false,
        diagnostico:
          'Você dividiu o valor total pelo preço do quilômetro e esqueceu de tirar a bandeirada antes. A parte fixa não é proporcional à distância.',
        tipoErro: 'conceito',
      },
      {
        letra: 'D',
        texto: '16,1 km.',
        correta: false,
        diagnostico: 'A bandeirada foi somada em vez de subtraída: (33,10 + 5,50) ÷ 2,40.',
        tipoErro: 'conceito',
      },
      {
        letra: 'E',
        texto: '27,6 km.',
        correta: false,
        diagnostico:
          'Você parou na subtração. R$ 27,60 é o valor gasto com distância, em reais — ainda falta converter em quilômetros.',
        tipoErro: 'leitura',
      },
    ],
    explicacao: [
      {
        tipo: 'p',
        texto:
          'Toda situação com uma parte fixa mais uma parte proporcional é uma função afim: f(x) = b + a·x, em que b é o valor inicial e a é a taxa de variação.',
      },
      {
        tipo: 'formula',
        latexLike: 'f(x) = 5,50 + 2,40x\n33,10 = 5,50 + 2,40x\n27,60 = 2,40x\nx = 11,5 km',
      },
      {
        tipo: 'destaque',
        variante: 'nota',
        titulo: 'Como reconhecer',
        texto:
          'Taxa fixa de adesão, franquia de plano, bandeirada, salário-base mais comissão: toda vez que o texto tiver "uma parte fixa mais tanto por unidade", é função afim.',
      },
    ],
    irmas: ['mat-afim-q2'],
  },
  {
    id: 'mat-afim-q2',
    topicId: 'mat-funcao-afim',
    conceito: 'Coeficientes da função afim a partir de tabela',
    procedencia: 'autoral',
    dificuldade: 'facil',
    eixo: 'problemas',
    minutos: 3,
    enunciado: [
      {
        tipo: 'p',
        texto:
          'Uma oficina cobra pela manutenção de bicicletas de acordo com o número de peças trocadas, conforme a tabela.',
      },
      {
        tipo: 'tabela',
        cabecalho: ['Peças trocadas', 'Valor cobrado (R$)'],
        linhas: [
          ['0', '80'],
          ['1', '95'],
          ['2', '110'],
          ['3', '125'],
        ],
        legenda: 'Dados fictícios, construídos para este exercício.',
      },
      { tipo: 'p', texto: 'Mantido esse padrão, o valor cobrado por uma manutenção com 10 peças trocadas será de' },
    ],
    alternativas: [
      {
        letra: 'A',
        texto: 'R$ 95,00.',
        correta: false,
        diagnostico: 'Você leu na tabela o valor para 1 peça, não para 10.',
        tipoErro: 'leitura',
      },
      {
        letra: 'B',
        texto: 'R$ 150,00.',
        correta: false,
        diagnostico:
          'Você calculou só a parte variável (15 × 10) e esqueceu os R$ 80,00 que já são cobrados com zero peça.',
        tipoErro: 'conceito',
      },
      {
        letra: 'C',
        texto: 'R$ 180,00.',
        correta: false,
        diagnostico:
          'A taxa por peça foi lida como R$ 10,00. Confira na tabela: de 80 para 95 são 15 reais por peça.',
        tipoErro: 'grafico',
      },
      {
        letra: 'D',
        texto: 'R$ 230,00.',
        correta: true,
        diagnostico: 'Correto. O valor inicial é 80 e cada peça acrescenta 15: f(10) = 80 + 15 × 10 = 230.',
      },
      {
        letra: 'E',
        texto: 'R$ 800,00.',
        correta: false,
        diagnostico: 'Você multiplicou o valor inicial por 10, em vez de somar a parte proporcional.',
        tipoErro: 'conceito',
      },
    ],
    explicacao: [
      {
        tipo: 'lista',
        ordenada: true,
        itens: [
          'O valor com zero peça é o coeficiente linear: b = 80.',
          'A diferença constante entre linhas seguidas é o coeficiente angular: a = 95 − 80 = 15.',
          'Monte a função: f(x) = 80 + 15x.',
          'Substitua: f(10) = 80 + 150 = 230.',
        ],
      },
      {
        tipo: 'diagrama',
        nome: 'funcao-afim',
        legenda:
          'Numa função afim, b é onde a reta corta o eixo vertical (o valor inicial) e a é quanto y sobe a cada unidade de x. Se a diferença entre linhas seguidas da tabela for constante, a função é afim.',
      },
    ],
    irmas: ['mat-afim-q1'],
  },

  /* --- Áreas --------------------------------------------------------------- */
  {
    id: 'mat-afim-q3',
    topicId: 'mat-funcao-afim',
    conceito: 'Ponto de igualdade entre dois planos',
    procedencia: 'autoral',
    dificuldade: 'dificil',
    eixo: 'problemas',
    minutos: 5,
    enunciado: [
      {
        tipo: 'p',
        texto:
          'Uma operadora oferece dois planos de telefonia. No plano A, paga-se R$ 40,00 fixos por mês mais R$ 0,50 por minuto falado. No plano B, paga-se R$ 10,00 fixos mais R$ 1,25 por minuto.',
      },
      { tipo: 'p', texto: 'Os dois planos custam o mesmo valor para um consumo mensal de' },
    ],
    alternativas: [
      {
        letra: 'A',
        texto: '24 minutos.',
        correta: false,
        diagnostico:
          'Você dividiu a diferença entre as mensalidades (30) pela tarifa do plano B (1,25). O divisor tem que ser a diferença entre as duas tarifas, porque é ela que fecha a distância a cada minuto.',
        tipoErro: 'calculo',
      },
      {
        letra: 'B',
        texto: '30 minutos.',
        correta: false,
        diagnostico:
          'Você parou na diferença entre as partes fixas (40 − 10 = 30). Esses 30 são reais, não minutos.',
        tipoErro: 'leitura',
      },
      {
        letra: 'C',
        texto: '40 minutos.',
        correta: true,
        diagnostico:
          'Correto. 40 + 0,50m = 10 + 1,25m leva a 30 = 0,75m, ou seja, m = 40. Nos dois planos, a conta fecha em R$ 60,00.',
      },
      {
        letra: 'D',
        texto: '60 minutos.',
        correta: false,
        diagnostico:
          'Você dividiu 30 pela tarifa do plano A (0,50) em vez da diferença entre as tarifas (0,75).',
        tipoErro: 'calculo',
      },
      {
        letra: 'E',
        texto: '80 minutos.',
        correta: false,
        diagnostico:
          'Você dividiu a mensalidade inteira do plano A (40) por 0,50, ignorando que o plano B também tem parte fixa.',
        tipoErro: 'conceito',
      },
    ],
    explicacao: [
      {
        tipo: 'p',
        texto:
          'Cada plano é uma função afim do tipo f(m) = b + a·m, em que b é a mensalidade fixa e a é a tarifa por minuto. Dois planos custam o mesmo onde as duas funções se cruzam.',
      },
      {
        tipo: 'formula',
        latexLike:
          'A(m) = 40 + 0,50m\nB(m) = 10 + 1,25m\n40 + 0,50m = 10 + 1,25m\n30 = 0,75m  →  m = 40 minutos\nA(40) = B(40) = R$ 60,00',
        legenda: 'A diferença de R$ 30,00 nas mensalidades é fechada a R$ 0,75 por minuto.',
      },
      {
        tipo: 'destaque',
        variante: 'nota',
        titulo: 'A pergunta seguinte, que o ENEM costuma fazer',
        texto:
          'Abaixo de 40 minutos compensa o plano B, que tem a mensalidade menor; acima de 40, compensa o A, que tem a tarifa menor. O ponto de igualdade é a fronteira entre os dois, não o plano “melhor”.',
      },
    ],
    irmas: ['mat-afim-q1', 'mat-afim-q2'],
  },
  {
    id: 'mat-area-q1',
    topicId: 'mat-area',
    conceito: 'Área por composição e subtração',
    procedencia: 'autoral',
    dificuldade: 'media',
    eixo: 'problemas',
    minutos: 3,
    enunciado: [
      {
        tipo: 'p',
        texto:
          'Uma parede retangular tem 6,0 m de comprimento por 2,8 m de altura. Nela há uma porta retangular de 0,8 m de largura por 2,1 m de altura, que não será pintada.',
      },
      { tipo: 'p', texto: 'A área que será pintada é de' },
    ],
    alternativas: [
      {
        letra: 'A',
        texto: '1,68 m².',
        correta: false,
        diagnostico: 'Você calculou a área da porta, que é justamente a parte que NÃO será pintada.',
        tipoErro: 'leitura',
      },
      {
        letra: 'B',
        texto: '13,44 m².',
        correta: false,
        diagnostico: 'A área da porta foi descontada duas vezes.',
        tipoErro: 'calculo',
      },
      {
        letra: 'C',
        texto: '15,12 m².',
        correta: true,
        diagnostico: 'Correto. 6,0 × 2,8 = 16,8 m² da parede, menos 0,8 × 2,1 = 1,68 m² da porta, dá 15,12 m².',
      },
      {
        letra: 'D',
        texto: '16,80 m².',
        correta: false,
        diagnostico:
          'Esta é a área total da parede. O enunciado diz que a porta não será pintada — faltou o desconto.',
        tipoErro: 'leitura',
      },
      {
        letra: 'E',
        texto: '18,48 m².',
        correta: false,
        diagnostico: 'A porta foi somada em vez de subtraída.',
        tipoErro: 'conceito',
      },
    ],
    explicacao: [
      {
        tipo: 'formula',
        latexLike: 'parede: 6,0 × 2,8 = 16,80 m²\nporta:  0,8 × 2,1 =  1,68 m²\npintar: 16,80 − 1,68 = 15,12 m²',
      },
      {
        tipo: 'destaque',
        variante: 'atencao',
        titulo: 'O erro que mais aparece aqui',
        texto:
          'Não é a conta de área — é ler "não será pintada" com pressa. Antes de calcular, sublinhe no enunciado o que entra e o que sai.',
      },
    ],
    irmas: ['mat-area-q2'],
  },
  {
    id: 'mat-area-q2',
    topicId: 'mat-area',
    conceito: 'Efeito da ampliação linear sobre a área',
    procedencia: 'autoral',
    dificuldade: 'media',
    eixo: 'fenomenos',
    minutos: 3,
    enunciado: [
      {
        tipo: 'p',
        texto:
          'Uma praça quadrada de 20 m de lado será ampliada, mantendo o formato quadrado, e passará a ter 40 m de lado.',
      },
      { tipo: 'p', texto: 'Em relação à área original, a área da praça ampliada terá um aumento de' },
    ],
    alternativas: [
      {
        letra: 'A',
        texto: '100%.',
        correta: false,
        diagnostico:
          'Você aplicou à área o mesmo aumento do lado. O lado dobrou (aumento de 100%), mas a área depende do lado ao quadrado.',
        tipoErro: 'conceito',
      },
      {
        letra: 'B',
        texto: '200%.',
        correta: false,
        diagnostico: 'Dobrar o percentual do lado não corresponde ao efeito sobre a área. Calcule as duas áreas e compare.',
        tipoErro: 'conceito',
      },
      {
        letra: 'C',
        texto: '300%.',
        correta: true,
        diagnostico:
          'Correto. De 400 m² para 1 600 m². O aumento é de 1 200 m² sobre 400 m², ou seja, 300%.',
      },
      {
        letra: 'D',
        texto: '400%.',
        correta: false,
        diagnostico:
          'Armadilha de linguagem: a área ficou 4 vezes MAIOR, o que corresponde a um AUMENTO de 300%. "Quatro vezes maior" e "aumento de 400%" não são a mesma coisa.',
        tipoErro: 'distrator',
      },
      {
        letra: 'E',
        texto: '1 600%.',
        correta: false,
        diagnostico: 'Você usou o valor da área final como se fosse um percentual.',
        tipoErro: 'conceito',
      },
    ],
    explicacao: [
      {
        tipo: 'formula',
        latexLike: 'área inicial: 20² = 400 m²\nárea final:   40² = 1 600 m²\naumento: (1 600 − 400) / 400 = 3 → 300%',
      },
      {
        tipo: 'p',
        texto:
          'Regra geral: se toda dimensão linear é multiplicada por k, a área é multiplicada por k² e o volume por k³. Com k = 2, a área quadruplica e o volume fica 8 vezes maior.',
      },
    ],
    irmas: ['mat-area-q1', 'mat-vol-q2'],
  },

  /* --- Volumes -------------------------------------------------------------- */
  {
    id: 'mat-area-q3',
    topicId: 'mat-area',
    conceito: 'Altura do triângulo e lado inclinado',
    procedencia: 'autoral',
    dificuldade: 'media',
    eixo: 'problemas',
    minutos: 3,
    enunciado: [
      {
        tipo: 'p',
        texto:
          'Uma placa de sinalização tem a forma de um triângulo. A base mede 6 m, o lado inclinado que parte de uma extremidade da base mede 5 m, e a altura relativa à base — o segmento perpendicular que vai da base até o vértice oposto — mede 4 m.',
      },
      { tipo: 'p', texto: 'A área dessa placa é de' },
    ],
    alternativas: [
      {
        letra: 'A',
        texto: '10 m².',
        correta: false,
        diagnostico:
          'Você multiplicou o lado inclinado pela altura (5 × 4 ÷ 2). A fórmula pede base × altura, e a base aqui é o lado de 6 m.',
        tipoErro: 'conceito',
      },
      {
        letra: 'B',
        texto: '12 m².',
        correta: true,
        diagnostico: 'Correto. 6 × 4 ÷ 2 = 12. A base é 6 m e a altura relativa a ela é 4 m.',
      },
      {
        letra: 'C',
        texto: '15 m².',
        correta: false,
        diagnostico:
          'Você usou o lado inclinado (5 m) como altura. O lado inclinado é maior que a altura justamente por ser inclinado — usá-lo infla a área.',
        tipoErro: 'conceito',
      },
      {
        letra: 'D',
        texto: '24 m².',
        correta: false,
        diagnostico:
          'Você calculou 6 × 4 e esqueceu de dividir por 2. Esse é o resultado de um retângulo de mesma base e altura — o triângulo é metade dele.',
        tipoErro: 'calculo',
      },
      {
        letra: 'E',
        texto: '30 m².',
        correta: false,
        diagnostico:
          'Você acumulou os dois erros: usou o lado inclinado no lugar da altura e não dividiu por 2.',
        tipoErro: 'calculo',
      },
    ],
    explicacao: [
      {
        tipo: 'p',
        texto:
          'Altura de um triângulo é sempre a distância perpendicular entre a base e o vértice oposto. Em triângulo que não é retângulo, ela quase nunca coincide com um dos lados — e o enunciado oferece o lado inclinado exatamente para testar isso.',
      },
      {
        tipo: 'formula',
        latexLike: 'A = base × altura ÷ 2\nA = 6 × 4 ÷ 2 = 12 m²',
        legenda: 'Os 5 m do lado inclinado não entram na conta: são dado de sobra.',
      },
      {
        tipo: 'p',
        texto:
          'Dado que não é usado incomoda, e é aí que a armadilha funciona. Antes de multiplicar, pergunte qual medida é perpendicular à base — só ela serve como altura.',
      },
    ],
    irmas: ['mat-area-q1'],
  },
  {
    id: 'mat-vol-q1',
    topicId: 'mat-volume',
    conceito: 'Volume do cilindro e capacidade',
    procedencia: 'autoral',
    dificuldade: 'media',
    eixo: 'problemas',
    minutos: 4,
    enunciado: [
      {
        tipo: 'p',
        texto:
          'Uma caixa d’água cilíndrica tem 1 m de raio da base e 1,5 m de altura. Considere π = 3.',
      },
      { tipo: 'p', texto: 'A capacidade dessa caixa, quando completamente cheia, é de' },
    ],
    alternativas: [
      {
        letra: 'A',
        texto: '450 litros.',
        correta: false,
        diagnostico: 'O volume em m³ estava certo (4,5), mas a conversão perdeu um fator 10: 1 m³ = 1 000 L.',
        tipoErro: 'calculo',
      },
      {
        letra: 'B',
        texto: '4 500 litros.',
        correta: true,
        diagnostico: 'Correto. V = π·r²·h = 3 × 1² × 1,5 = 4,5 m³, que equivale a 4 500 litros.',
      },
      {
        letra: 'C',
        texto: '9 000 litros.',
        correta: false,
        diagnostico:
          'Você usou 2π·r·h, que é a fórmula da área lateral do cilindro, e não do volume. Área e volume têm unidades diferentes — conferir a unidade do resultado evita esse erro.',
        tipoErro: 'conceito',
      },
      {
        letra: 'D',
        texto: '18 000 litros.',
        correta: false,
        diagnostico: 'O diâmetro foi usado no lugar do raio. Como o raio entra ao quadrado, o resultado fica 4 vezes maior.',
        tipoErro: 'conceito',
      },
      {
        letra: 'E',
        texto: '45 000 litros.',
        correta: false,
        diagnostico: 'Conversão com um zero a mais. Uma caixa de 1 m de raio não comporta 45 mil litros.',
        tipoErro: 'calculo',
      },
    ],
    explicacao: [
      {
        tipo: 'formula',
        latexLike: 'V = π · r² · h\nV = 3 × (1)² × 1,5 = 4,5 m³\n4,5 m³ × 1 000 = 4 500 L',
      },
      {
        tipo: 'p',
        texto:
          'Todo sólido de base plana e lados retos — cilindro, prisma, cubo — tem volume igual à área da base vezes a altura. Muda só a fórmula da base.',
      },
    ],
    irmas: ['mat-gran-q2', 'mat-vol-q2'],
  },
  {
    id: 'mat-vol-q2',
    topicId: 'mat-volume',
    conceito: 'Efeito da ampliação linear sobre o volume',
    procedencia: 'autoral',
    dificuldade: 'media',
    eixo: 'fenomenos',
    minutos: 3,
    enunciado: [
      {
        tipo: 'p',
        texto:
          'Uma empresa embala um produto em caixas cúbicas de 10 cm de aresta e vai passar a usar caixas cúbicas de 20 cm de aresta.',
      },
      { tipo: 'p', texto: 'O volume da nova caixa, comparado ao da caixa antiga, é' },
    ],
    alternativas: [
      {
        letra: 'A',
        texto: '2 vezes maior.',
        correta: false,
        diagnostico: 'Isso valeria se o volume fosse proporcional à aresta — mas ele é proporcional à aresta ao cubo.',
        tipoErro: 'conceito',
      },
      {
        letra: 'B',
        texto: '4 vezes maior.',
        correta: false,
        diagnostico: 'Esse é o fator de ampliação da ÁREA (k²), não do volume (k³).',
        tipoErro: 'conceito',
      },
      {
        letra: 'C',
        texto: '8 vezes maior.',
        correta: true,
        diagnostico: 'Correto. 10³ = 1 000 cm³ e 20³ = 8 000 cm³, ou seja, 8 vezes. Com k = 2, o volume cresce k³ = 8.',
      },
      {
        letra: 'D',
        texto: '20 vezes maior.',
        correta: false,
        diagnostico: 'Você usou a medida da aresta nova como se fosse o fator de comparação.',
        tipoErro: 'leitura',
      },
      {
        letra: 'E',
        texto: '8 000 vezes maior.',
        correta: false,
        diagnostico:
          'Você usou o volume da caixa nova em cm³ como se fosse a razão entre os volumes. O comando pede uma comparação, não uma medida.',
        tipoErro: 'leitura',
      },
    ],
    explicacao: [
      {
        tipo: 'formula',
        latexLike: 'V antigo = 10³ = 1 000 cm³\nV novo   = 20³ = 8 000 cm³\nrazão = 8 000 / 1 000 = 8',
      },
      {
        tipo: 'destaque',
        variante: 'nota',
        titulo: 'Vale para qualquer forma',
        texto:
          'Se todas as dimensões são multiplicadas por k, comprimentos crescem k vezes, áreas k² e volumes k³ — seja a forma um cubo, uma esfera ou uma pessoa. É por isso que animais grandes não são versões ampliadas dos pequenos.',
      },
    ],
    irmas: ['mat-vol-q1', 'mat-area-q2'],
  },
  {
    id: 'mat-vol-q3',
    topicId: 'mat-volume',
    conceito: 'Volume do cone',
    procedencia: 'autoral',
    dificuldade: 'media',
    eixo: 'problemas',
    minutos: 4,
    enunciado: [
      {
        tipo: 'p',
        texto:
          'Um copo descartável tem a forma de um cone com 4 cm de raio da boca e 9 cm de altura. Considere π = 3.',
      },
      { tipo: 'p', texto: 'A capacidade desse copo, cheio até a borda, é de' },
    ],
    alternativas: [
      {
        letra: 'A',
        texto: '16 cm³.',
        correta: false,
        diagnostico:
          'Você calculou apenas um terço da área da base (3 × 4² ÷ 3) e esqueceu de multiplicar pela altura de 9 cm.',
        tipoErro: 'calculo',
      },
      {
        letra: 'B',
        texto: '36 cm³.',
        correta: false,
        diagnostico:
          'Você usou 4 cm como diâmetro, e não como raio, calculando com r = 2. O enunciado dá o raio.',
        tipoErro: 'leitura',
      },
      {
        letra: 'C',
        texto: '144 cm³.',
        correta: true,
        diagnostico:
          'Correto. V = (1/3) × π × r² × h = (1/3) × 3 × 16 × 9 = 144 cm³, ou 144 mL.',
      },
      {
        letra: 'D',
        texto: '432 cm³.',
        correta: false,
        diagnostico:
          'Você calculou o cilindro de mesma base e altura (3 × 16 × 9) e esqueceu de dividir por 3. O cone é um terço desse cilindro.',
        tipoErro: 'conceito',
      },
      {
        letra: 'E',
        texto: '1 296 cm³.',
        correta: false,
        diagnostico:
          'Você multiplicou por 3 em vez de dividir. Um copo de mais de um litro e um quarto não passa no teste de plausibilidade.',
        tipoErro: 'calculo',
      },
    ],
    explicacao: [
      {
        tipo: 'p',
        texto:
          'Cone e pirâmide têm um terço do volume do cilindro ou prisma de mesma base e mesma altura. É a única diferença entre as duas fórmulas — e é onde quase todo erro acontece.',
      },
      {
        tipo: 'formula',
        latexLike:
          'V = (1/3) × π × r² × h\nV = (1/3) × 3 × 4² × 9\nV = (1/3) × 3 × 16 × 9 = 144 cm³ = 144 mL',
        legenda: 'Com π = 3, o 3 do π cancela o 3 do denominador: sobra r² × h.',
      },
      {
        tipo: 'p',
        texto:
          'Vale conferir contra o mundo: copo descartável de café tem 50 mL, de água tem 200 mL. Um resultado de 1 296 mL seria uma jarra.',
      },
    ],
    irmas: ['mat-vol-q1'],
  },
  {
    id: 'mat-vol-q4',
    topicId: 'mat-volume',
    conceito: 'Volume de bloco retangular e capacidade em litros',
    procedencia: 'autoral',
    dificuldade: 'media',
    eixo: 'problemas',
    minutos: 4,
    enunciado: [
      {
        tipo: 'p',
        texto:
          'Um reservatório tem a forma de um bloco retangular com base de 2,0 m por 1,5 m e altura de 1,2 m. No momento, a água atinge 0,8 m de altura.',
      },
      { tipo: 'p', texto: 'Para enchê-lo completamente, ainda são necessários' },
    ],
    alternativas: [
      {
        letra: 'A',
        texto: '1,2 litro.',
        correta: false,
        diagnostico:
          'Você chegou a 1,2 m³, que é o volume que falta, e leu direto como litro. 1 m³ são 1 000 litros.',
        tipoErro: 'conceito',
      },
      {
        letra: 'B',
        texto: '1 200 litros.',
        correta: true,
        diagnostico:
          'Correto. Falta encher 1,2 m de altura menos 0,8 m, ou seja, 0,4 m: 2,0 × 1,5 × 0,4 = 1,2 m³ = 1 200 L.',
      },
      {
        letra: 'C',
        texto: '2 400 litros.',
        correta: false,
        diagnostico:
          'Este é o volume de água que já está no reservatório (2,0 × 1,5 × 0,8 = 2,4 m³). O comando pede o que falta.',
        tipoErro: 'leitura',
      },
      {
        letra: 'D',
        texto: '3 600 litros.',
        correta: false,
        diagnostico:
          'Esta é a capacidade total do reservatório (2,0 × 1,5 × 1,2 = 3,6 m³). Falta descontar a água que já está lá.',
        tipoErro: 'leitura',
      },
      {
        letra: 'E',
        texto: '12 000 litros.',
        correta: false,
        diagnostico:
          'Você converteu 1,2 m³ usando 1 m³ = 10 000 L. O fator correto é 1 000.',
        tipoErro: 'calculo',
      },
    ],
    explicacao: [
      {
        tipo: 'p',
        texto:
          'A pergunta é sobre o que falta, não sobre o que há nem sobre o total. Trabalhar direto com a altura que falta encurta a conta e evita a subtração no fim.',
      },
      {
        tipo: 'formula',
        latexLike:
          'altura que falta = 1,2 − 0,8 = 0,4 m\nvolume = 2,0 × 1,5 × 0,4 = 1,2 m³\n1,2 m³ × 1 000 = 1 200 L',
        legenda: 'Conferência: 2 400 L (já tem) + 1 200 L (falta) = 3 600 L (capacidade total).',
      },
      {
        tipo: 'p',
        texto:
          'Três das cinco alternativas são números corretos respondendo a perguntas diferentes — água presente, capacidade total, volume sem converter. Reler o comando antes de marcar elimina as três.',
      },
    ],
    irmas: ['mat-vol-q1', 'mat-vol-q2'],
  },
];
