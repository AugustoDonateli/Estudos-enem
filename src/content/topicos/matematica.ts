import type { ConteudoAssunto } from '../tipos';

/**
 * Conteúdo pedagógico dos assuntos desta área — os 9 blocos de cada um.
 *
 * Fica separado dos metadados (src/content/catalogo.ts) porque o motor de
 * estudo e o dashboard só precisam dos metadados. Essa separação mantém o
 * bundle inicial pequeno: o texto de um assunto só é baixado quando ele é
 * aberto.
 */
export const CONTEUDOS_MATEMATICA: Record<string, ConteudoAssunto> = {
  'mat-porcentagem': {
    precisaSaber: [
      'Todo percentual vira um fator: 15% de aumento é × 1,15; 15% de desconto é × 0,85.',
      'Percentuais sucessivos se multiplicam, nunca se somam.',
      'Variação percentual é sempre dividida pelo valor INICIAL.',
      'Aumentar e depois descontar a mesma porcentagem não volta ao valor original.',
    ],
    explicacao: [
      {
        tipo: 'p',
        texto:
          'Porcentagem é uma fração de denominador 100. Dizer 36% é dizer 36/100, ou 0,36. Até aí é definição; o que resolve questão é a segunda ideia: converter todo percentual em um fator que multiplica.',
      },
      {
        tipo: 'p',
        texto:
          'Se um valor aumenta 20%, ele passa a ser o que era (100%) mais um quinto (20%), ou seja, 120% do original — multiplique por 1,20. Se ele cai 20%, sobra 80% — multiplique por 0,80. Pensar assim elimina a maior parte dos erros, porque a base de cálculo já vem embutida no fator.',
      },
      {
        tipo: 'p',
        texto:
          'É por isso que aumentos e descontos sucessivos se multiplicam: cada fator incide sobre o resultado do anterior, não sobre o valor de partida.',
      },
    ],
    conceitos: [
      { termo: 'Fator de aumento', definicao: 'Para subir p%, multiplique por (1 + p/100).', formula: 'V_final = V × (1 + p/100)' },
      { termo: 'Fator de desconto', definicao: 'Para cair p%, multiplique por (1 − p/100).', formula: 'V_final = V × (1 − p/100)' },
      {
        termo: 'Variação percentual',
        definicao: 'Quanto algo mudou em relação ao ponto de partida. A base é sempre o valor inicial.',
        formula: 'Δ% = (V_final − V_inicial) / V_inicial × 100',
      },
      {
        termo: 'Fator acumulado',
        definicao: 'Em variações sucessivas, multiplique os fatores. 1,20 × 0,80 = 0,96 significa perda líquida de 4%.',
      },
      {
        termo: 'Ponto percentual',
        definicao:
          'Diferença entre dois percentuais. De 20% para 25% são 5 pontos percentuais, mas um aumento de 25% — coisas diferentes.',
      },
    ],
    exemplo: {
      enunciado:
        'O preço de um produto caiu 10% em janeiro e subiu 10% em fevereiro. Qual foi a variação acumulada no bimestre?',
      passos: [
        { titulo: 'Escreva os fatores', texto: 'Queda de 10% → × 0,90. Aumento de 10% → × 1,10.' },
        { titulo: 'Multiplique os fatores', texto: '0,90 × 1,10 = 0,99.' },
        {
          titulo: 'Leia o fator acumulado',
          texto: 'O preço final é 99% do inicial, ou seja, 1% menor. O fator 0,99 já é a resposta.',
        },
      ],
      conclusao:
        'O preço caiu 1% no bimestre. Não voltou ao valor original, porque o aumento de 10% incidiu sobre uma base menor do que a queda.',
    },
    noEnem: {
      texto:
        'Raramente aparece uma questão que só pede "calcule x% de y". O padrão é um contexto (conta de luz, safra, cobertura vacinal, inflação) com dois ou três percentuais encadeados, ou uma tabela em que se pede a variação entre dois anos. A conta é curta; a dificuldade é escolher a base certa.',
      eixos: ['problemas'],
      sinais: [
        'Aparecem duas mudanças seguidas no mesmo valor',
        'O comando fala em "variação", "crescimento" ou "redução" percentual',
        'Há uma tabela com dois anos e o pedido é comparar',
        'A palavra "sobre o novo valor" ou "sobre o valor já reajustado" aparece no texto',
      ],
    },
    erros: [
      {
        erro: 'Somar percentuais sucessivos',
        porque:
          '+20% e −20% somados dariam zero, mas o resultado real é −4%. Percentuais sucessivos multiplicam, porque cada um incide sobre uma base diferente.',
      },
      {
        erro: 'Dividir pela base errada na variação',
        porque:
          'Variação é sempre sobre o valor inicial. Usar o valor final como base dá um percentual menor e é um distrator frequente.',
      },
      {
        erro: 'Confundir "3 vezes maior" com "aumento de 300%"',
        porque:
          'Ficar 3 vezes maior é aumentar 200%. Ficar 4 vezes maior é aumentar 300%. O aumento é o que passa do valor original.',
      },
      {
        erro: 'Confundir ponto percentual com porcentagem',
        porque:
          'Se a taxa vai de 4% para 6%, subiu 2 pontos percentuais — mas isso é um aumento de 50% na taxa. As duas leituras são corretas e dizem coisas diferentes.',
      },
    ],
    questoes: ['mat-porc-q1', 'mat-porc-q2', 'of-2025-mt-140', 'of-2025-mt-158'],
    revisaoRapida: [
      'Subir p% = × (1 + p/100). Cair p% = × (1 − p/100).',
      'Sucessivos: multiplique os fatores.',
      'Variação % = (final − inicial) / inicial.',
      '+20% depois −20% dá 0,96 do original, não 1.',
    ],
  },
  'mat-proporcao': {
    precisaSaber: [
      'Razão é a comparação de duas grandezas por divisão.',
      'Proporção direta: uma sobe, a outra sobe — a RAZÃO se mantém.',
      'Proporção inversa: uma sobe, a outra desce — o PRODUTO se mantém.',
      'Decida o sentido antes de montar a regra de três.',
      'Escala 1 : n significa que 1 no desenho vale n no real.',
    ],
    explicacao: [
      {
        tipo: 'p',
        texto:
          'Duas grandezas são diretamente proporcionais quando dobrar uma dobra a outra: quantidade de combustível e distância percorrida, número de itens e preço total. Nesse caso, a divisão entre elas é sempre a mesma.',
      },
      {
        tipo: 'p',
        texto:
          'São inversamente proporcionais quando dobrar uma reduz a outra à metade: número de trabalhadores e tempo de obra, velocidade e tempo de viagem. Aqui o que se mantém constante é a multiplicação entre elas.',
      },
      {
        tipo: 'p',
        texto:
          'A regra de três é só a aplicação disso. O passo que decide a questão não é a conta — é a pergunta que você faz antes dela: aumentando uma grandeza, a outra sobe ou desce?',
      },
    ],
    conceitos: [
      { termo: 'Razão', definicao: 'Comparação entre duas grandezas por divisão: a/b.' },
      { termo: 'Proporção direta', definicao: 'A razão entre as grandezas permanece constante.', formula: 'a₁/b₁ = a₂/b₂' },
      { termo: 'Proporção inversa', definicao: 'O produto entre as grandezas permanece constante.', formula: 'a₁ × b₁ = a₂ × b₂' },
      {
        termo: 'Escala',
        definicao: 'Razão entre a medida no desenho e a medida real. Em 1 : 250 000, cada 1 cm no mapa vale 250 000 cm no terreno.',
      },
      {
        termo: 'Densidade',
        definicao: 'Razão entre massa e volume — um exemplo clássico de grandeza construída como razão.',
        formula: 'd = m / V',
      },
    ],
    exemplo: {
      enunciado:
        'Uma torneira enche um tanque em 6 horas. Quanto tempo levariam 3 torneiras iguais, abertas ao mesmo tempo?',
      passos: [
        {
          titulo: 'Decida o sentido',
          texto: 'Mais torneiras, menos tempo. Portanto, grandezas inversamente proporcionais.',
        },
        { titulo: 'Use o produto constante', texto: '1 torneira × 6 h = 3 torneiras × t.' },
        { titulo: 'Resolva', texto: '6 = 3t, então t = 2 horas.' },
      ],
      conclusao:
        'Duas horas. Se você tivesse montado como proporção direta, chegaria a 18 horas — um resultado que o bom senso já rejeita.',
    },
    noEnem: {
      texto:
        'Aparece disfarçada em contextos de produção, consumo, mapas, receitas e misturas. Quase nunca o enunciado diz "monte uma regra de três": ele descreve uma situação e você precisa identificar que há duas grandezas relacionadas. Em Ciências da Natureza, a mesma ideia reaparece como concentração, densidade e rendimento.',
      eixos: ['problemas', 'fenomenos'],
      sinais: [
        'Duas grandezas variam juntas e uma delas é desconhecida',
        'Aparecem palavras como "ritmo", "rendimento", "por unidade", "a cada"',
        'Há uma escala, um mapa ou uma planta baixa',
        'O texto compara duas situações com os mesmos tipos de grandeza',
      ],
    },
    erros: [
      {
        erro: 'Aplicar regra de três direta em situação inversa',
        porque:
          'É o erro mais comum do tópico. O resultado costuma denunciar: mais máquinas levando mais tempo, mais velocidade levando mais horas.',
      },
      {
        erro: 'Montar a proporção com unidades diferentes',
        porque: 'Minutos de um lado e horas do outro invalidam a igualdade. Converta antes de montar.',
      },
      {
        erro: 'Dividir pela escala em vez de multiplicar',
        porque: 'Em 1 : n, o real é n vezes MAIOR que o desenho. Dividir dá um valor menor que o do mapa, o que é impossível.',
      },
      {
        erro: 'Esquecer de converter cm para km no fim da questão de escala',
        porque: 'A conta da escala costuma estar certa; a conversão é o que derruba. 1 km = 100 000 cm.',
      },
    ],
    questoes: ['mat-prop-q1', 'mat-prop-q2', 'mat-prop-q3', 'of-2025-mt-150'],
    revisaoRapida: [
      'Direta: a razão se mantém. Inversa: o produto se mantém.',
      'Pergunte sempre antes: sobe ou desce?',
      'Escala 1 : n → multiplique a medida do mapa por n.',
      '1 km = 100 000 cm.',
    ],
  },
  'mat-graficos': {
    precisaSaber: [
      'Antes de olhar as barras, leia título, eixos, unidades e escala.',
      'Correlação não é causa: dois dados que sobem juntos não provam que um causa o outro.',
      'Se a alternativa fala de uma variável que não está no gráfico, ela está eliminada.',
      'Gráfico de linha mostra tendência; de barras, comparação; de setor, composição de um total.',
    ],
    explicacao: [
      {
        tipo: 'p',
        texto:
          'A maior parte dos erros em questões de gráfico não está na conta — está em responder uma pergunta diferente da que foi feita, ou em aceitar uma conclusão que o dado não sustenta.',
      },
      {
        tipo: 'p',
        texto:
          'Existe uma rotina que resolve quase tudo: leia o título (do que se trata), os eixos (o que está em cada direção), as unidades (mil toneladas? milhões de reais? por cento?) e a escala (o eixo começa em zero?). Só depois vá ao comando.',
      },
      {
        tipo: 'p',
        texto:
          'O segundo filtro é lógico: a alternativa precisa ser sustentada APENAS pelo que está no gráfico. Afirmações verdadeiras sobre o mundo, mas não demonstradas pelo dado, são distratores clássicos.',
      },
    ],
    conceitos: [
      { termo: 'Variável independente', definicao: 'Em geral no eixo horizontal — tempo, categoria, faixa etária.' },
      { termo: 'Variável dependente', definicao: 'Em geral no eixo vertical — o valor que está sendo medido.' },
      {
        termo: 'Eixo truncado',
        definicao:
          'Eixo vertical que não começa em zero. Exagera visualmente as diferenças — é preciso ler os números, não o tamanho das barras.',
      },
      {
        termo: 'Correlação',
        definicao: 'Duas variáveis variam juntas. Não implica que uma cause a outra.',
      },
      {
        termo: 'Amplitude',
        definicao: 'Diferença entre o maior e o menor valor de um conjunto.',
        formula: 'A = máximo − mínimo',
      },
    ],
    exemplo: {
      enunciado:
        'Um gráfico mostra que, entre 2015 e 2024, cresceram tanto o número de celulares em uso quanto o número de casos de miopia em jovens. Uma alternativa afirma: "o uso de celulares causou o aumento da miopia". Ela pode ser aceita?',
      passos: [
        { titulo: 'O que o gráfico mostra', texto: 'Duas séries crescendo no mesmo período. Isso é correlação.' },
        {
          titulo: 'O que a alternativa afirma',
          texto: 'Uma relação de causa. Isso exige evidência que o gráfico não traz.',
        },
        {
          titulo: 'Teste da terceira variável',
          texto: 'No mesmo período cresceram também a urbanização e o tempo em ambientes fechados, que são explicações concorrentes.',
        },
      ],
      conclusao:
        'Não pode ser aceita. O gráfico sustenta "cresceram juntos", não "um causou o outro". Esse é um dos distratores mais recorrentes em leitura de dados.',
    },
    noEnem: {
      texto:
        'Aparece de duas formas. Na primeira, pede-se um cálculo simples a partir do dado (variação percentual, diferença, média). Na segunda — mais frequente e mais difícil — pede-se qual conclusão o gráfico permite. A segunda não tem conta nenhuma e é resolvida por eliminação lógica.',
      eixos: ['fenomenos', 'argumentacao'],
      sinais: [
        'O comando diz "de acordo com o gráfico" ou "com base apenas nos dados"',
        'As alternativas são frases, não números',
        'Há duas séries de dados no mesmo gráfico',
        'Aparecem palavras de causa: "porque", "devido a", "provoca"',
      ],
    },
    erros: [
      {
        erro: 'Aceitar causa a partir de correlação',
        porque: 'Duas curvas subindo juntas não demonstram que uma explica a outra. É o distrator preferido do exame em leitura de dados.',
      },
      {
        erro: 'Comparar barras sem olhar a escala',
        porque: 'Com eixo truncado, uma barra visualmente o dobro da outra pode representar 5% de diferença.',
      },
      {
        erro: 'Confundir variação absoluta com variação percentual',
        porque: 'Um aumento de 7 unidades sobre 79 é 8,9%; sobre 700 seria 1%. O número cru não diz nada sozinho.',
      },
      {
        erro: 'Concluir sobre variável que não está no gráfico',
        porque:
          'Se o gráfico traz temperatura, nenhuma alternativa sobre umidade, número de dias ou causa climática pode ser sustentada.',
      },
    ],
    questoes: ['mat-graf-q1', 'mat-graf-q2', 'mat-graf-q3', 'mat-graf-q4'],
    revisaoRapida: [
      'Rotina: título → eixos → unidades → escala → comando.',
      'Correlação ≠ causa.',
      'Variável fora do gráfico = alternativa eliminada.',
      'Variação percentual divide pelo valor inicial.',
    ],
  },
  'mat-media': {
    precisaSaber: [
      'Média: soma dividida pela quantidade. Sensível a valores extremos.',
      'Mediana: valor central dos dados ORDENADOS. Resistente a extremos.',
      'Moda: o valor que mais se repete. Pode não existir ou haver mais de uma.',
      'Com valor extremo na amostra, a mediana representa melhor o caso típico.',
    ],
    explicacao: [
      {
        tipo: 'p',
        texto:
          'As três medidas respondem à mesma pergunta — "qual é o valor típico deste conjunto?" — de formas diferentes, e é aí que mora a questão do ENEM.',
      },
      {
        tipo: 'p',
        texto:
          'A média distribui igualmente o total entre todos. Por isso qualquer valor muito alto ou muito baixo a puxa consigo. A mediana só olha a posição central, então um valor extremo não a desloca. A moda ignora tudo e olha só a repetição.',
      },
      {
        tipo: 'p',
        texto:
          'Quando a maioria dos dados está de um lado e poucos valores muito altos estão do outro — salários, renda, preços de imóvel — a média deixa de descrever a maioria. É o caso em que o exame pede a mediana.',
      },
    ],
    conceitos: [
      { termo: 'Média aritmética', definicao: 'Soma de todos os valores dividida pela quantidade deles.', formula: 'x̄ = (x₁ + x₂ + … + xₙ) / n' },
      {
        termo: 'Média ponderada',
        definicao: 'Cada valor tem um peso. Usada em notas escolares e índices.',
        formula: 'x̄ = (x₁p₁ + x₂p₂ + …) / (p₁ + p₂ + …)',
      },
      {
        termo: 'Mediana',
        definicao:
          'Valor central dos dados ordenados. Com n ímpar, é o termo do meio; com n par, é a média dos dois centrais.',
      },
      { termo: 'Moda', definicao: 'Valor de maior frequência. Um conjunto pode não ter moda ou ter várias.' },
      {
        termo: 'Amplitude',
        definicao: 'Diferença entre o maior e o menor valor. Mede dispersão de forma simples.',
        formula: 'A = máximo − mínimo',
      },
    ],
    exemplo: {
      enunciado:
        'Em uma turma, as notas foram 5, 6, 6, 7 e 10. Calcule média, mediana e moda e diga qual descreve melhor o desempenho típico.',
      passos: [
        { titulo: 'Média', texto: '(5 + 6 + 6 + 7 + 10) / 5 = 34 / 5 = 6,8.' },
        { titulo: 'Mediana', texto: 'Ordenados: 5, 6, 6, 7, 10. O central é o terceiro: 6.' },
        { titulo: 'Moda', texto: 'O 6 aparece duas vezes; os demais, uma. Moda = 6.' },
      ],
      conclusao:
        'Média 6,8; mediana e moda 6. A nota 10 puxou a média acima de quatro das cinco notas — mediana e moda descrevem melhor o desempenho típico da turma.',
    },
    noEnem: {
      texto:
        'Raramente é um cálculo isolado. O formato típico traz uma tabela ou lista e pede qual medida usar, ou o que acontece com as medidas quando um dado entra ou sai do conjunto. O eixo cobrado não é cálculo, é argumentação: por que essa medida e não a outra.',
      eixos: ['argumentacao', 'problemas'],
      sinais: [
        'Há um valor muito diferente dos demais na lista',
        'O comando pergunta qual medida "representa melhor"',
        'Um dado novo é acrescentado e se pergunta o efeito',
        'Aparecem salários, rendas ou preços',
      ],
    },
    erros: [
      {
        erro: 'Calcular a mediana sem ordenar os dados',
        porque: 'A ordenação faz parte da definição. Sem ela, o valor "do meio" é arbitrário.',
      },
      {
        erro: 'Com quantidade par, escolher um dos dois centrais',
        porque: 'Com n par a mediana é a média dos dois valores centrais, e pode nem existir no conjunto.',
      },
      {
        erro: 'Usar a média em distribuição com valor extremo',
        porque:
          'Um único valor muito alto desloca a média para uma região onde quase ninguém está. Esse é o ponto pedagógico do tópico.',
      },
      {
        erro: 'Supor que todo conjunto tem moda',
        porque: 'Se nenhum valor se repete, não há moda. Se dois se repetem igualmente, há duas.',
      },
    ],
    questoes: ['mat-med-q1', 'mat-med-q2', 'mat-med-q3', 'of-2025-mt-142'],
    revisaoRapida: [
      'Média: soma ÷ quantidade. Puxada por extremos.',
      'Mediana: ordene primeiro; é o centro. Resiste a extremos.',
      'Moda: a mais repetida; pode não existir.',
      'Valor extremo na amostra → a mediana representa melhor.',
    ],
  },
  'mat-grandezas': {
    precisaSaber: [
      'Escreva a unidade ao lado de cada número; ela indica a operação correta.',
      '1 m³ = 1 000 L; 1 L = 1 dm³ = 1 000 cm³; 1 mL = 1 cm³.',
      '1 km = 1 000 m = 100 000 cm.',
      'Para converter km/h em m/s, divida por 3,6; o caminho inverso multiplica.',
      'Confira a ordem de grandeza do resultado antes de marcar.',
    ],
    explicacao: [
      {
        tipo: 'p',
        texto:
          'Grandeza é tudo que se mede. Algumas são simples (comprimento, massa, tempo) e outras são construídas dividindo duas grandezas: velocidade é km por hora, densidade é massa por volume, consumo é km por litro.',
      },
      {
        tipo: 'p',
        texto:
          'Essa estrutura é útil na prova: a unidade diz a operação. Se você tem 300 km e o carro faz 12 km/L, dividir km por km/L cancela os quilômetros e sobra L — exatamente o que a pergunta pedia. Se a unidade final não bate com o que foi perguntado, a operação está errada.',
      },
      {
        tipo: 'p',
        texto:
          'O segundo cuidado é a conversão. Áreas convertem ao quadrado e volumes ao cubo: 1 m = 100 cm, mas 1 m² = 10 000 cm² e 1 m³ = 1 000 000 cm³.',
      },
    ],
    conceitos: [
      { termo: 'Grandeza derivada', definicao: 'Construída pela razão de outras duas — velocidade, densidade, consumo, concentração.' },
      {
        termo: 'Análise dimensional',
        definicao: 'Acompanhar as unidades ao longo da conta para verificar se a operação escolhida é a certa.',
      },
      { termo: 'Capacidade', definicao: 'Volume medido em litros. Um decímetro cúbico equivale exatamente a um litro.', formula: '1 m³ = 1 000 L' },
      { termo: 'Conversão de velocidade', definicao: 'De km/h para m/s, divida por 3,6.', formula: 'v(m/s) = v(km/h) / 3,6' },
      {
        termo: 'Ordem de grandeza',
        definicao: 'A potência de 10 mais próxima do valor. Serve para checar se o resultado é plausível.',
      },
    ],
    exemplo: {
      enunciado: 'Um atleta corre a 18 km/h. Qual sua velocidade em metros por segundo?',
      passos: [
        { titulo: 'Escreva a conversão', texto: '1 km = 1 000 m e 1 h = 3 600 s.' },
        { titulo: 'Monte a conta', texto: '18 km/h = 18 × 1 000 m / 3 600 s.' },
        { titulo: 'Simplifique', texto: '18 000 / 3 600 = 5 m/s — que é o atalho "dividir por 3,6".' },
      ],
      conclusao:
        '5 m/s. Reparar que 3 600/1 000 = 3,6 é o que transforma a conversão numa divisão única, sem decorar tabela.',
    },
    noEnem: {
      texto:
        'Quase nunca é o tema da questão — é o passo final dela. O enunciado dá dados em uma unidade e pergunta em outra: consumo em litros mas preço por litro, potência em watts mas conta em quilowatt-hora, distância em centímetros no mapa mas resposta em quilômetros. A questão testa se você chega até o fim sem escorregar.',
      eixos: ['problemas'],
      sinais: [
        'Os dados vêm em uma unidade e as alternativas em outra',
        'Aparecem prefixos: quilo, mili, centi, mega',
        'Há uma grandeza composta no texto (km/L, R$/kg, kWh)',
        'As alternativas diferem apenas por potências de 10',
      ],
    },
    erros: [
      {
        erro: 'Converter área ou volume como se fosse comprimento',
        porque: '1 m² não é 100 cm², é 10 000 cm². O fator de conversão entra ao quadrado nas áreas e ao cubo nos volumes.',
      },
      {
        erro: 'Ignorar as alternativas que só diferem por zeros',
        porque:
          'Quando as alternativas são 4,5 / 45 / 450 / 4 500, o exame está testando conversão, não raciocínio. Refaça só a conversão.',
      },
      {
        erro: 'Multiplicar quando deveria dividir em grandezas compostas',
        porque: 'Acompanhar a unidade resolve: se o resultado sai em km²/L, a operação está errada.',
      },
      {
        erro: 'Não checar a ordem de grandeza',
        porque:
          'Um resultado absurdo — um carro gastando R$ 20 mil numa viagem de 300 km — é um aviso gratuito de que a conta saiu do rumo.',
      },
    ],
    questoes: ['mat-gran-q1', 'mat-gran-q2', 'mat-gran-q3', 'mat-gran-q4'],
    revisaoRapida: [
      'A unidade indica a operação: acompanhe-a na conta.',
      '1 m³ = 1 000 L · 1 L = 1 000 cm³.',
      'km/h → m/s: divida por 3,6.',
      'Área converte ao quadrado, volume ao cubo.',
    ],
  },
  'mat-funcao-afim': {
    precisaSaber: [
      'f(x) = ax + b, em que b é o valor inicial e a é a taxa de variação.',
      'O gráfico é sempre uma reta; a > 0 sobe, a < 0 desce.',
      'b é onde a reta corta o eixo vertical.',
      'Em tabela: se a diferença entre linhas seguidas é constante, a função é afim e essa diferença é a.',
      'A raiz é onde f(x) = 0, ou seja, x = −b/a.',
    ],
    explicacao: [
      {
        tipo: 'p',
        texto:
          'Uma função afim descreve toda situação em que existe um valor fixo de partida e um acréscimo constante por unidade. Bandeirada mais preço por quilômetro. Assinatura mensal mais preço por gigabyte. Salário-base mais comissão por venda.',
      },
      {
        tipo: 'p',
        texto:
          'Os dois coeficientes têm significado concreto e é assim que a prova os cobra: b é quanto se paga (ou se tem) quando x é zero, e a é quanto muda a cada unidade a mais de x.',
      },
      {
        tipo: 'diagrama',
        nome: 'funcao-afim',
        legenda:
          'A reta corta o eixo vertical em b, o valor inicial. O coeficiente a é a razão entre a variação vertical e a horizontal: quanto y muda a cada unidade de x.',
      },
    ],
    conceitos: [
      { termo: 'Forma geral', definicao: 'Toda função afim se escreve assim.', formula: 'f(x) = a·x + b' },
      { termo: 'Coeficiente angular (a)', definicao: 'Taxa de variação: quanto f(x) muda quando x aumenta em 1. Define a inclinação da reta.' },
      { termo: 'Coeficiente linear (b)', definicao: 'Valor de f(x) quando x = 0. É onde a reta corta o eixo vertical.' },
      { termo: 'Raiz (zero da função)', definicao: 'Valor de x que anula a função.', formula: 'x = −b / a' },
      {
        termo: 'Função linear',
        definicao: 'Caso particular com b = 0. Aí, e só aí, as grandezas são diretamente proporcionais.',
      },
    ],
    exemplo: {
      enunciado:
        'Um plano de celular cobra R$ 40,00 fixos mais R$ 6,00 por giga extra. Quantos gigas extras foram usados numa fatura de R$ 82,00?',
      passos: [
        { titulo: 'Monte a função', texto: 'f(x) = 40 + 6x, em que x é o número de gigas extras.' },
        { titulo: 'Iguale ao valor da fatura', texto: '82 = 40 + 6x.' },
        { titulo: 'Isole x', texto: '42 = 6x, portanto x = 7.' },
      ],
      conclusao:
        'Sete gigas extras. Repare que a parte fixa precisa sair antes da divisão — dividir 82 por 6 direto é o erro que a prova espera.',
    },
    noEnem: {
      texto:
        'O item costuma dar a situação em palavras, em tabela ou em gráfico, e pedir um valor, a taxa, ou a comparação entre dois planos. Quando são dois planos, a pergunta quase sempre é a partir de quando um fica mais vantajoso — que é o ponto em que as duas funções se igualam.',
      eixos: ['problemas'],
      sinais: [
        'Há um valor fixo mais um valor "por unidade"',
        'Uma tabela mostra diferenças constantes entre linhas seguidas',
        'O gráfico é uma reta',
        'A questão compara dois planos ou duas tarifas',
      ],
    },
    erros: [
      {
        erro: 'Dividir o total pela taxa sem tirar a parte fixa',
        porque: 'A parte fixa não é proporcional a x. Ela precisa ser subtraída antes da divisão.',
      },
      {
        erro: 'Ler o coeficiente a diretamente de uma linha da tabela',
        porque: 'a é a DIFERENÇA entre linhas seguidas, não o valor de uma delas.',
      },
      {
        erro: 'Confundir função afim com função linear',
        porque:
          'Só quando b = 0 há proporcionalidade direta. Com bandeirada, dobrar a distância não dobra o preço.',
      },
      {
        erro: 'Trocar o sinal na raiz',
        porque: 'A raiz é −b/a. Em situações de depreciação (a negativo), o sinal trocado dá um valor sem sentido físico.',
      },
    ],
    questoes: ['mat-afim-q1', 'mat-afim-q2', 'mat-afim-q3', 'of-2024-mt-157'],
    revisaoRapida: [
      'f(x) = ax + b: b é o valor inicial, a é a taxa por unidade.',
      'Em tabela, a é a diferença constante entre linhas seguidas.',
      'Tire a parte fixa antes de dividir.',
      'Dois planos se igualam onde f₁(x) = f₂(x).',
    ],
  },
  'mat-area': {
    precisaSaber: [
      'Retângulo: base × altura. Triângulo: base × altura ÷ 2.',
      'Figura irregular: decomponha em figuras conhecidas e some, ou subtraia o que sobra.',
      'A altura do triângulo é perpendicular à base, não o lado inclinado.',
      'Se toda dimensão é multiplicada por k, a área é multiplicada por k².',
    ],
    explicacao: [
      {
        tipo: 'p',
        texto:
          'Quase toda questão de área do exame se resolve com quatro fórmulas e uma estratégia. As fórmulas são retângulo, triângulo, círculo e trapézio; a estratégia é decompor a figura em pedaços conhecidos.',
      },
      {
        tipo: 'p',
        texto:
          'A decomposição funciona nos dois sentidos: somar partes (um terreno em L vira dois retângulos) ou subtrair (uma parede menos a porta, um jardim menos o canteiro central). O enunciado sempre indica qual dos dois com palavras como "exceto", "descontando" ou "não será".',
      },
      {
        tipo: 'p',
        texto:
          'O conceito que rende mais além da conta é a relação quadrática: dobrar o lado não dobra a área, quadruplica. Isso explica desde preço de terreno até por que um animal muito maior não é apenas uma versão ampliada de um pequeno.',
      },
    ],
    conceitos: [
      { termo: 'Retângulo', definicao: 'Base vezes altura.', formula: 'A = b × h' },
      { termo: 'Triângulo', definicao: 'Metade do retângulo de mesma base e altura.', formula: 'A = b × h / 2' },
      { termo: 'Círculo', definicao: 'Depende do raio ao quadrado.', formula: 'A = π · r²' },
      { termo: 'Trapézio', definicao: 'Média das bases vezes a altura.', formula: 'A = (B + b) × h / 2' },
      {
        termo: 'Razão de semelhança',
        definicao: 'Se as dimensões lineares são multiplicadas por k, a área é multiplicada por k².',
        formula: 'A_nova = k² × A_antiga',
      },
    ],
    exemplo: {
      enunciado:
        'Um terreno em forma de L é formado por um retângulo de 12 m × 8 m do qual se retirou um quadrado de 4 m de lado em um dos cantos. Qual a área do terreno?',
      passos: [
        { titulo: 'Área do retângulo completo', texto: '12 × 8 = 96 m².' },
        { titulo: 'Área retirada', texto: '4 × 4 = 16 m².' },
        { titulo: 'Subtraia', texto: '96 − 16 = 80 m².' },
      ],
      conclusao:
        '80 m². Decompor por subtração costuma ser mais rápido que somar retângulos, porque envolve menos medidas.',
    },
    noEnem: {
      texto:
        'O contexto é quase sempre construção, agricultura ou design: quanto de piso comprar, quanto de tinta, qual o custo por metro quadrado. Há sempre um passo além da área — multiplicar por um preço, dividir por um rendimento — e é nesse passo que está a dificuldade real.',
      eixos: ['problemas'],
      sinais: [
        'Há uma planta baixa ou figura composta',
        'O comando fala em piso, tinta, grama, cerca ou plantio',
        'Alguma parte precisa ser descontada',
        'Aparece um preço ou rendimento por metro quadrado',
      ],
    },
    erros: [
      {
        erro: 'Usar o lado inclinado como altura do triângulo',
        porque: 'A altura é a distância perpendicular da base ao vértice oposto. O lado inclinado é maior e superestima a área.',
      },
      {
        erro: 'Esquecer de descontar a parte que não entra',
        porque: 'Portas, janelas e canteiros aparecem no enunciado justamente para isso. Sublinhe o que sai antes de calcular.',
      },
      {
        erro: 'Confundir perímetro com área',
        porque: 'Cerca e rodapé usam perímetro (metros). Piso e tinta usam área (metros quadrados). A unidade da resposta denuncia.',
      },
      {
        erro: 'Aplicar o fator de ampliação linear à área',
        porque: 'Dobrar o lado quadruplica a área. Confundir isso é o que gera as alternativas de 100% e 400%.',
      },
    ],
    questoes: ['mat-area-q1', 'mat-area-q2', 'mat-area-q3', 'of-2024-mt-151'],
    revisaoRapida: [
      'Retângulo b×h · triângulo b×h/2 · círculo πr² · trapézio (B+b)h/2.',
      'Decomponha: some partes ou subtraia o que sai.',
      'Altura do triângulo é perpendicular à base.',
      'Dimensões × k → área × k².',
    ],
  },
  'mat-volume': {
    precisaSaber: [
      'Prisma, cubo e cilindro: volume = área da base × altura.',
      'Pirâmide e cone: um terço da área da base × altura.',
      '1 m³ = 1 000 litros. 1 litro = 1 000 cm³.',
      'Se toda dimensão é multiplicada por k, o volume é multiplicado por k³.',
    ],
    explicacao: [
      {
        tipo: 'p',
        texto:
          'Todo sólido de lados retos e base constante tem o mesmo volume: a área da base multiplicada pela altura. Muda apenas a fórmula da base — retângulo no bloco, círculo no cilindro, polígono no prisma.',
      },
      {
        tipo: 'p',
        texto:
          'Sólidos que afinam até um ponto (pirâmide, cone) têm exatamente um terço do volume do sólido reto de mesma base e mesma altura. Guardar essa relação evita decorar duas fórmulas extras.',
      },
      {
        tipo: 'p',
        texto:
          'Na prática do exame, a parte que mais derruba não é a fórmula: é a conversão para litros. Um metro cúbico comporta mil litros, e essa é a relação que resolve praticamente todas as questões de capacidade.',
      },
    ],
    conceitos: [
      { termo: 'Bloco retangular', definicao: 'Também chamado paralelepípedo.', formula: 'V = comprimento × largura × altura' },
      { termo: 'Cilindro', definicao: 'Área do círculo da base vezes a altura.', formula: 'V = π · r² · h' },
      { termo: 'Prisma', definicao: 'Área da base (qualquer polígono) vezes a altura.', formula: 'V = A_base × h' },
      { termo: 'Cone e pirâmide', definicao: 'Um terço do volume do sólido reto correspondente.', formula: 'V = A_base × h / 3' },
      { termo: 'Capacidade', definicao: 'Volume expresso em litros.', formula: '1 m³ = 1 000 L' },
    ],
    exemplo: {
      enunciado:
        'Uma piscina retangular tem 8 m de comprimento, 4 m de largura e 1,5 m de profundidade. Quantos litros de água cabem nela?',
      passos: [
        { titulo: 'Volume em metros cúbicos', texto: '8 × 4 × 1,5 = 48 m³.' },
        { titulo: 'Converta', texto: '48 × 1 000 = 48 000 litros.' },
        {
          titulo: 'Confira a ordem de grandeza',
          texto: 'Uma piscina desse tamanho na casa das dezenas de milhares de litros é plausível.',
        },
      ],
      conclusao:
        '48 000 litros. Note que a checagem final não é enfeite: é ela que pega o erro de 4 800 ou 480 000.',
    },
    noEnem: {
      texto:
        'O item costuma pedir capacidade em litros, tempo de enchimento (volume dividido por vazão) ou comparação entre dois recipientes. Quando a pergunta é de tempo, entra também proporção — por isso este tópico depende de razão e proporção já estar firme.',
      eixos: ['problemas'],
      sinais: [
        'Aparecem caixa d’água, piscina, reservatório, embalagem',
        'As alternativas estão em litros e os dados em metros',
        'Há uma vazão em litros por minuto ou por hora',
        'Compara-se o volume de dois recipientes de formatos diferentes',
      ],
    },
    erros: [
      {
        erro: 'Usar o diâmetro no lugar do raio no cilindro',
        porque: 'Como o raio entra ao quadrado, o erro quadruplica o resultado — não é um deslize pequeno.',
      },
      {
        erro: 'Errar a conversão m³ → litro',
        porque:
          'São 1 000 litros por metro cúbico. Alternativas separadas por um único zero existem exatamente para pegar esse erro.',
      },
      {
        erro: 'Esquecer o terço no cone ou na pirâmide',
        porque: 'Dá exatamente o triplo do valor correto — um resultado que costuma estar entre as alternativas.',
      },
      {
        erro: 'Aplicar o fator linear ao volume',
        porque: 'Dobrar as dimensões multiplica o volume por 8, não por 2 nem por 4.',
      },
    ],
    questoes: ['mat-vol-q1', 'mat-vol-q2', 'mat-vol-q3', 'mat-vol-q4'],
    revisaoRapida: [
      'V = área da base × altura. Cone e pirâmide: ÷ 3.',
      'Cilindro: V = πr²h — cuidado com raio × diâmetro.',
      '1 m³ = 1 000 L.',
      'Dimensões × k → volume × k³.',
    ],
  },
};
