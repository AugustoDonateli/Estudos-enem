import type { Questao } from '../tipos';

/**
 * Banco de questões de Linguagens.
 *
 * Todos os textos-base foram escritos para este site, exceto quando a questão
 * declara `procedencia: 'adaptada'` e cita a fonte. Nenhuma questão é oficial
 * do ENEM.
 */
export const QUESTOES_LINGUAGENS: Questao[] = [
  {
    id: 'ling-interp-q1',
    topicId: 'ling-interpretacao',
    conceito: 'Inferência a partir do texto',
    procedencia: 'autoral',
    dificuldade: 'media',
    eixo: 'linguagens',
    minutos: 3,
    enunciado: [
      {
        tipo: 'citacao',
        texto:
          'A prefeitura instalou bancos individuais, separados por divisórias de metal, na praça central. Segundo a nota oficial, o novo mobiliário “moderniza o espaço e melhora o conforto dos usuários”. Moradores em situação de rua, que costumavam dormir nos bancos corridos, passaram a se abrigar sob a marquise do mercado municipal.',
        fonte: 'Texto escrito para este exercício.',
      },
      { tipo: 'p', texto: 'A organização das informações no texto permite inferir que' },
    ],
    alternativas: [
      {
        letra: 'A',
        texto: 'a prefeitura ampliou o número de assentos disponíveis na praça.',
        correta: false,
        diagnostico:
          'O texto não informa quantidade de assentos, apenas o formato deles. Você acrescentou um dado que não está no texto.',
        tipoErro: 'leitura',
      },
      {
        letra: 'B',
        texto: 'o novo mobiliário produz um efeito que a nota oficial não menciona.',
        correta: true,
        diagnostico:
          'Correto. O texto justapõe a justificativa oficial (conforto) e a consequência observada (o deslocamento dos moradores). Essa justaposição é o que sustenta a inferência.',
      },
      {
        letra: 'C',
        texto: 'os moradores em situação de rua preferiram a marquise do mercado.',
        correta: false,
        diagnostico:
          'O texto diz que eles "passaram a se abrigar" lá, o que indica consequência, não preferência. Trocar consequência por escolha muda o sentido.',
        tipoErro: 'distrator',
      },
      {
        letra: 'D',
        texto: 'a nota oficial mentiu sobre o objetivo da reforma.',
        correta: false,
        diagnostico:
          'O texto não afirma nem permite concluir que houve mentira. Inferência trabalha com o que o texto sustenta; acusação de intenção vai além disso.',
        tipoErro: 'distrator',
      },
      {
        letra: 'E',
        texto: 'a praça central passou a ser mais frequentada após a reforma.',
        correta: false,
        diagnostico: 'Frequência de uso não aparece no texto em momento nenhum.',
        tipoErro: 'leitura',
      },
    ],
    explicacao: [
      {
        tipo: 'p',
        texto:
          'Inferir não é adivinhar nem opinar: é concluir algo que o texto sustenta sem dizer com todas as letras.',
      },
      {
        tipo: 'p',
        texto:
          'Aqui o recurso é a ordem das informações. O texto coloca lado a lado a justificativa oficial e um efeito concreto que ela não previu. A alternativa correta é a única que descreve essa relação sem acrescentar intenção, preferência ou número que o texto não traz.',
      },
      {
        tipo: 'destaque',
        variante: 'nota',
        titulo: 'Filtro prático',
        texto:
          'Leia cada alternativa perguntando: "que trecho do texto me autoriza a dizer isso?". Se você não consegue apontar o trecho, a alternativa é distrator.',
      },
    ],
    irmas: ['ling-interp-q2'],
  },
  {
    id: 'ling-interp-q2',
    topicId: 'ling-interpretacao',
    conceito: 'Identificação do comando da questão',
    procedencia: 'autoral',
    dificuldade: 'facil',
    eixo: 'linguagens',
    minutos: 3,
    enunciado: [
      {
        tipo: 'citacao',
        texto:
          '“Não é que os jovens leiam menos. É que passaram a ler em outros suportes, com outros ritmos e outras finalidades. Chamar isso de ausência de leitura diz mais sobre quem observa do que sobre quem lê.”',
        fonte: 'Texto escrito para este exercício.',
      },
      { tipo: 'p', texto: 'A estratégia argumentativa usada no trecho consiste em' },
    ],
    alternativas: [
      {
        letra: 'A',
        texto: 'apresentar dados estatísticos sobre hábitos de leitura.',
        correta: false,
        diagnostico: 'Não há nenhum dado numérico no trecho. A alternativa descreve uma estratégia que o texto não usa.',
        tipoErro: 'leitura',
      },
      {
        letra: 'B',
        texto: 'reformular a premissa do interlocutor antes de contestá-la.',
        correta: true,
        diagnostico:
          'Correto. O texto começa negando a formulação alheia ("não é que leiam menos"), substitui por outra ("leem em outros suportes") e só então devolve a crítica a quem observa.',
      },
      {
        letra: 'C',
        texto: 'citar a opinião de especialistas em educação.',
        correta: false,
        diagnostico: 'Nenhuma autoridade é citada no trecho.',
        tipoErro: 'leitura',
      },
      {
        letra: 'D',
        texto: 'narrar um episódio pessoal para ilustrar o problema.',
        correta: false,
        diagnostico: 'Não há narrativa nem primeira pessoa relatando experiência.',
        tipoErro: 'leitura',
      },
      {
        letra: 'E',
        texto: 'defender que os jovens leem mais do que as gerações anteriores.',
        correta: false,
        diagnostico:
          'Essa comparação não é feita. O texto questiona o critério de comparação, não afirma superioridade. É um distrator que exagera a tese.',
        tipoErro: 'distrator',
      },
    ],
    explicacao: [
      {
        tipo: 'p',
        texto:
          'O comando pede a ESTRATÉGIA argumentativa, não o conteúdo da opinião. São perguntas diferentes, e quatro das cinco alternativas aqui só falham porque descrevem estratégias ausentes.',
      },
      {
        tipo: 'p',
        texto:
          'Quando o comando fala em "estratégia", "recurso" ou "procedimento", a resposta descreve o que o texto FAZ, não o que ele defende.',
      },
      {
        tipo: 'diagrama',
        nome: 'anatomia-item',
        legenda:
          'A leitura eficiente começa pelo comando: saber o que está sendo pedido muda completamente o que você procura no texto-base.',
      },
    ],
    irmas: ['ling-interp-q1'],
  },

  {
    id: 'ling-func-q1',
    topicId: 'ling-funcoes',
    conceito: 'Função conativa (apelativa)',
    procedencia: 'autoral',
    dificuldade: 'facil',
    eixo: 'linguagens',
    minutos: 2,
    enunciado: [
      {
        tipo: 'citacao',
        texto:
          '“Desligue o chuveiro enquanto passa o sabonete. Feche a torneira ao escovar os dentes. Faça a sua parte: a água que você economiza hoje é a que vai faltar menos amanhã.”',
        fonte: 'Campanha fictícia, escrita para este exercício.',
      },
      { tipo: 'p', texto: 'A função da linguagem predominante no texto é a' },
    ],
    alternativas: [
      {
        letra: 'A',
        texto: 'emotiva, pois expressa os sentimentos do emissor.',
        correta: false,
        diagnostico:
          'Não há marcas de primeira pessoa nem expressão de sentimento. A função emotiva se reconhece por "eu", interjeições e subjetividade.',
        tipoErro: 'conceito',
      },
      {
        letra: 'B',
        texto: 'referencial, pois informa dados objetivos sobre o consumo de água.',
        correta: false,
        diagnostico:
          'Não há dado objetivo algum — nenhum número, nenhuma medição. A função referencial é a do texto jornalístico e científico em 3ª pessoa.',
        tipoErro: 'conceito',
      },
      {
        letra: 'C',
        texto: 'conativa, pois busca influenciar o comportamento do receptor.',
        correta: true,
        diagnostico:
          'Correto. Os verbos no imperativo ("desligue", "feche", "faça") e o vocativo implícito em "você" são as marcas centrais da função conativa.',
      },
      {
        letra: 'D',
        texto: 'metalinguística, pois a linguagem explica a si mesma.',
        correta: false,
        diagnostico:
          'Metalinguagem é o texto falando do próprio código — dicionário, gramática, poema sobre poesia. Não é o caso.',
        tipoErro: 'conceito',
      },
      {
        letra: 'E',
        texto: 'poética, pois há preocupação com a forma da mensagem.',
        correta: false,
        diagnostico:
          'Há um leve jogo sonoro no fecho, mas ele está a serviço do apelo. Função predominante é a que organiza o texto inteiro, não a que aparece numa frase.',
        tipoErro: 'distrator',
      },
    ],
    explicacao: [
      {
        tipo: 'p',
        texto:
          'Cada função corresponde a um elemento da comunicação que fica em primeiro plano. Aqui o elemento em destaque é o receptor: o texto existe para que ELE faça algo.',
      },
      {
        tipo: 'lista',
        itens: [
          'Verbos no imperativo são a marca mais direta da função conativa.',
          'Pronomes de segunda pessoa e vocativos reforçam o apelo.',
          'Propaganda, campanha, manual de instrução e discurso político costumam ser conativos.',
        ],
      },
      {
        tipo: 'destaque',
        variante: 'atencao',
        titulo: 'Cuidado com "predominante"',
        texto:
          'Um texto quase sempre tem mais de uma função. O comando pede a que organiza o conjunto — não a que aparece em um trecho isolado.',
      },
    ],
    irmas: ['ling-func-q2'],
  },
  {
    id: 'ling-func-q2',
    topicId: 'ling-funcoes',
    conceito: 'Função metalinguística',
    procedencia: 'autoral',
    dificuldade: 'media',
    eixo: 'linguagens',
    minutos: 2,
    enunciado: [
      {
        tipo: 'citacao',
        texto:
          '“Escrevo devagar. Cada palavra que ponho no papel me obriga a explicar por que não escolhi outra. Escrever, para mim, virou isto: um texto que passa o tempo todo discutindo como deveria ter sido escrito.”',
        fonte: 'Texto escrito para este exercício.',
      },
      { tipo: 'p', texto: 'Predomina no texto a função' },
    ],
    alternativas: [
      {
        letra: 'A',
        texto: 'fática, pois procura manter o canal de comunicação aberto.',
        correta: false,
        diagnostico:
          'A função fática é a do "alô?", "entendeu?", "então tá". Ela testa o canal, não reflete sobre o código.',
        tipoErro: 'conceito',
      },
      {
        letra: 'B',
        texto: 'metalinguística, pois o texto toma a própria escrita como assunto.',
        correta: true,
        diagnostico:
          'Correto. O texto usa a linguagem para falar sobre o ato de escrever — código falando do próprio código.',
      },
      {
        letra: 'C',
        texto: 'emotiva, pois há uso da primeira pessoa.',
        correta: false,
        diagnostico:
          'Esta é a armadilha da questão: há primeira pessoa, sim, mas ela é o veículo, não o foco. O assunto do texto é a escrita, não o sentimento do autor.',
        tipoErro: 'distrator',
      },
      {
        letra: 'D',
        texto: 'conativa, pois orienta o leitor sobre como escrever.',
        correta: false,
        diagnostico: 'Não há imperativo nem apelo ao leitor. O texto relata um processo próprio, não instrui.',
        tipoErro: 'conceito',
      },
      {
        letra: 'E',
        texto: 'referencial, pois descreve objetivamente um processo.',
        correta: false,
        diagnostico: 'A descrição é subjetiva e em primeira pessoa — o oposto da impessoalidade referencial.',
        tipoErro: 'conceito',
      },
    ],
    explicacao: [
      {
        tipo: 'p',
        texto:
          'Metalinguagem é a linguagem voltada para si mesma: um dicionário que define palavras, uma gramática que explica a língua, um filme sobre fazer cinema, um poema sobre escrever poesia.',
      },
      {
        tipo: 'p',
        texto:
          'A presença de "eu" não define a função emotiva. O que define é o FOCO: se o centro é o sentimento de quem fala, é emotiva; se é o próprio código, é metalinguística.',
      },
    ],
    irmas: ['ling-func-q1'],
  },

  {
    id: 'ling-var-q1',
    topicId: 'ling-variacao',
    conceito: 'Adequação da variedade linguística à situação',
    procedencia: 'autoral',
    dificuldade: 'media',
    eixo: 'linguagens',
    minutos: 3,
    enunciado: [
      {
        tipo: 'citacao',
        texto:
          '— Doutor, o nervo do dente tá doendo direto, principalmente de madrugada.\n— O senhor está descrevendo uma pulpite irreversível. Vamos precisar fazer a terapia endodôntica.\n— Então é canal, né?\n— Exatamente. É canal.',
        fonte: 'Diálogo fictício, escrito para este exercício.',
      },
      { tipo: 'p', texto: 'O diálogo evidencia que' },
    ],
    alternativas: [
      {
        letra: 'A',
        texto: 'o paciente desconhece a norma-padrão da língua portuguesa.',
        correta: false,
        diagnostico:
          'A fala do paciente é perfeitamente adequada à situação. Confundir variedade coloquial com desconhecimento da língua é exatamente o preconceito linguístico que o tema combate.',
        tipoErro: 'conceito',
      },
      {
        letra: 'B',
        texto: 'o vocabulário técnico do dentista é incorreto do ponto de vista gramatical.',
        correta: false,
        diagnostico: 'O vocabulário técnico está correto; o que ele não é, num primeiro momento, é compreensível para o interlocutor.',
        tipoErro: 'conceito',
      },
      {
        letra: 'C',
        texto: 'falantes ajustam o registro conforme o interlocutor e a situação.',
        correta: true,
        diagnostico:
          'Correto. O dentista reformula "terapia endodôntica" como "canal" para se fazer entender — é variação de registro em função do interlocutor.',
      },
      {
        letra: 'D',
        texto: 'a linguagem técnica deve ser evitada em qualquer contexto.',
        correta: false,
        diagnostico:
          'Generalização excessiva. Entre dois dentistas, "terapia endodôntica" é o termo adequado. O problema não é o termo, é o interlocutor.',
        tipoErro: 'distrator',
      },
      {
        letra: 'E',
        texto: 'a variedade usada pelo paciente é típica da região onde ele vive.',
        correta: false,
        diagnostico:
          'O texto não traz marca regional. Você confundiu variação DIAFÁSICA (situação) com variação DIATÓPICA (lugar).',
        tipoErro: 'conceito',
      },
    ],
    explicacao: [
      {
        tipo: 'p',
        texto:
          'Toda pessoa fala de formas diferentes conforme com quem fala, onde e para quê. Isso é adequação de registro, não erro.',
      },
      {
        tipo: 'tabela',
        cabecalho: ['Tipo de variação', 'Depende de', 'Exemplo'],
        linhas: [
          ['Diatópica', 'lugar', 'mandioca / macaxeira / aipim'],
          ['Diastrática', 'grupo social ou profissional', 'gíria de skatistas, jargão jurídico'],
          ['Diafásica', 'situação e interlocutor', 'o dentista trocando "endodontia" por "canal"'],
          ['Diacrônica', 'tempo', '"vossa mercê" virando "você"'],
        ],
      },
      {
        tipo: 'destaque',
        variante: 'nota',
        titulo: 'Posição que o exame adota',
        texto:
          'Nenhuma variedade é errada ou inferior. O que existe é adequação — ou não — à situação de uso. Alternativas que tratam a variedade popular como "erro" costumam ser distratores.',
      },
    ],
    irmas: ['ling-var-q2'],
  },
  {
    id: 'ling-var-q2',
    topicId: 'ling-variacao',
    conceito: 'Preconceito linguístico',
    procedencia: 'autoral',
    dificuldade: 'media',
    eixo: 'argumentacao',
    minutos: 3,
    enunciado: [
      {
        tipo: 'citacao',
        texto:
          '“Ninguém diz que quem fala ‘pra’ em vez de ‘para’ não sabe português. Mas quem diz ‘nóis vai’ é corrigido em público. As duas são reduções previsíveis do sistema da língua; só uma delas está associada a quem tem pouca escolaridade.”',
        fonte: 'Texto escrito para este exercício.',
      },
      { tipo: 'p', texto: 'O argumento central do texto sustenta que' },
    ],
    alternativas: [
      {
        letra: 'A',
        texto: 'todas as formas linguísticas devem ser aceitas em qualquer situação.',
        correta: false,
        diagnostico:
          'O texto não trata de adequação a situações. Ele compara o tratamento social dado a dois fenômenos — não defende ausência de norma.',
        tipoErro: 'distrator',
      },
      {
        letra: 'B',
        texto: 'a reprovação de certas formas tem origem social, e não linguística.',
        correta: true,
        diagnostico:
          'Correto. O texto mostra que os dois fenômenos são equivalentes do ponto de vista do sistema, e que a diferença de reação está em quem fala cada um.',
      },
      {
        letra: 'C',
        texto: 'a escola deveria deixar de ensinar a norma-padrão.',
        correta: false,
        diagnostico: 'O texto não menciona ensino nem propõe abandonar a norma. Você inseriu uma conclusão que não está lá.',
        tipoErro: 'leitura',
      },
      {
        letra: 'D',
        texto: '“pra” e “nóis vai” são igualmente adequados em uma entrevista de emprego.',
        correta: false,
        diagnostico:
          'Adequação a contextos formais não é o assunto do trecho. Concluir isso é trocar o argumento do autor por outro.',
        tipoErro: 'distrator',
      },
      {
        letra: 'E',
        texto: 'a língua portuguesa está se degradando com o tempo.',
        correta: false,
        diagnostico:
          'É o contrário do que o texto sustenta: ele trata as duas formas como funcionamentos normais do sistema, não como degradação.',
        tipoErro: 'conceito',
      },
    ],
    explicacao: [
      {
        tipo: 'p',
        texto:
          'O texto usa uma comparação para expor uma assimetria: dois fenômenos linguísticos de mesma natureza recebem julgamentos sociais opostos. A conclusão que ele sustenta é sobre a origem desse julgamento.',
      },
      {
        tipo: 'p',
        texto:
          'Repare que três distratores aqui funcionam pelo mesmo mecanismo: radicalizam a tese ("todas as formas", "deixar de ensinar", "igualmente adequados"). Distrator que exagera a conclusão é um dos mais frequentes na área.',
      },
    ],
    irmas: ['ling-var-q1'],
  },

  {
    id: 'ling-gen-q1',
    topicId: 'ling-generos',
    conceito: 'Propósito comunicativo do gênero',
    procedencia: 'autoral',
    dificuldade: 'facil',
    eixo: 'linguagens',
    minutos: 3,
    enunciado: [
      {
        tipo: 'citacao',
        texto:
          'ATENÇÃO. Este equipamento deve ser instalado por profissional habilitado. A instalação incorreta pode causar choque elétrico e anula a garantia. Não remova a tampa traseira com o aparelho ligado à rede.',
        fonte: 'Trecho de manual fictício, escrito para este exercício.',
      },
      { tipo: 'p', texto: 'O propósito comunicativo predominante nesse texto é' },
    ],
    alternativas: [
      {
        letra: 'A',
        texto: 'convencer o consumidor a adquirir o equipamento.',
        correta: false,
        diagnostico:
          'Não há nenhum argumento de venda, nenhum atributo elogiado, nenhum preço. Esse seria o propósito de um anúncio.',
        tipoErro: 'conceito',
      },
      {
        letra: 'B',
        texto: 'orientar o uso e prevenir riscos, delimitando responsabilidades.',
        correta: true,
        diagnostico:
          'Correto. O texto instrui, alerta para o risco e informa a consequência contratual (anulação da garantia) — as três funções típicas de um aviso de manual.',
      },
      {
        letra: 'C',
        texto: 'narrar um acidente ocorrido com o equipamento.',
        correta: false,
        diagnostico: 'Não há narrativa: não há personagem, tempo nem sequência de acontecimentos.',
        tipoErro: 'conceito',
      },
      {
        letra: 'D',
        texto: 'explicar cientificamente o funcionamento do aparelho.',
        correta: false,
        diagnostico:
          'O texto não explica como o aparelho funciona — diz o que fazer e o que não fazer. Instruir e explicar são propósitos diferentes.',
        tipoErro: 'distrator',
      },
      {
        letra: 'E',
        texto: 'divulgar uma norma técnica do setor elétrico.',
        correta: false,
        diagnostico: 'Nenhuma norma é citada ou reproduzida. O texto se dirige ao usuário, não ao setor.',
        tipoErro: 'leitura',
      },
    ],
    explicacao: [
      {
        tipo: 'p',
        texto:
          'Gênero textual é uma forma social relativamente estável de usar a linguagem para atingir um propósito. Reconhecer o gênero é reconhecer o propósito.',
      },
      {
        tipo: 'tabela',
        cabecalho: ['Gênero', 'Propósito', 'Marca de reconhecimento'],
        linhas: [
          ['Manual / aviso', 'instruir e prevenir', 'imperativo, "não", destaque em maiúsculas'],
          ['Anúncio', 'convencer a consumir', 'atributos elogiados, apelo ao leitor, marca'],
          ['Notícia', 'informar um fato recente', 'lide: quem, o quê, quando, onde'],
          ['Artigo de opinião', 'defender um ponto de vista', 'tese explícita, argumentos, assinatura'],
          ['Charge', 'criticar por meio do humor', 'imagem, exagero, referência à atualidade'],
        ],
      },
    ],
    irmas: ['ling-gen-q2'],
  },
  {
    id: 'ling-gen-q2',
    topicId: 'ling-generos',
    conceito: 'Gêneros digitais e efeito de sentido',
    procedencia: 'autoral',
    dificuldade: 'media',
    eixo: 'linguagens',
    minutos: 3,
    enunciado: [
      {
        tipo: 'citacao',
        texto:
          'Publicação de perfil institucional em rede social:\n\n“Sabemos que ninguém acorda pensando em conta de luz. Mas se você acordar hoje pensando em desligar o que não está usando, a gente agradece. E o seu bolso também. 💡”',
        fonte: 'Publicação fictícia, escrita para este exercício.',
      },
      { tipo: 'p', texto: 'O efeito de sentido produzido pela escolha do registro informal é' },
    ],
    alternativas: [
      {
        letra: 'A',
        texto: 'reduzir a distância entre a instituição e o público, tornando o apelo mais aceitável.',
        correta: true,
        diagnostico:
          'Correto. O "a gente", o humor inicial e o emoji constroem proximidade, o que suaviza o que no fundo é uma orientação de comportamento.',
      },
      {
        letra: 'B',
        texto: 'demonstrar o despreparo da instituição na comunicação oficial.',
        correta: false,
        diagnostico:
          'Informalidade em rede social não é despreparo — é adequação ao suporte. O registro está ajustado ao gênero e ao canal.',
        tipoErro: 'conceito',
      },
      {
        letra: 'C',
        texto: 'informar tecnicamente o consumidor sobre o cálculo da tarifa.',
        correta: false,
        diagnostico: 'Não há nenhuma informação técnica nem cálculo no texto.',
        tipoErro: 'leitura',
      },
      {
        letra: 'D',
        texto: 'substituir a função conativa pela função referencial.',
        correta: false,
        diagnostico:
          'É o oposto: o texto continua conativo (quer que você faça algo). O que mudou foi o registro, não a função.',
        tipoErro: 'conceito',
      },
      {
        letra: 'E',
        texto: 'criticar os hábitos de consumo do público.',
        correta: false,
        diagnostico:
          'O tom é de cumplicidade, não de crítica — "sabemos que ninguém acorda pensando nisso" reconhece o hábito em vez de condená-lo.',
        tipoErro: 'distrator',
      },
    ],
    explicacao: [
      {
        tipo: 'p',
        texto:
          'Em gêneros digitais, a escolha de registro é uma estratégia, não um descuido. Perguntar "por que assim e não de outro jeito?" é o que a questão cobra.',
      },
      {
        tipo: 'p',
        texto:
          'Aqui, informalidade e humor servem para que uma instrução (economize energia) não soe como ordem de uma empresa ao cliente. A função continua sendo agir sobre o comportamento do leitor.',
      },
    ],
    irmas: ['ling-gen-q1', 'ling-func-q1'],
  },

  {
    id: 'ling-fig-q1',
    topicId: 'ling-figuras',
    conceito: 'Metáfora e metonímia',
    procedencia: 'autoral',
    dificuldade: 'media',
    eixo: 'linguagens',
    minutos: 2,
    enunciado: [
      {
        tipo: 'citacao',
        texto: '“O estádio inteiro prendeu a respiração quando ele parou diante da bola.”',
        fonte: 'Frase escrita para este exercício.',
      },
      { tipo: 'p', texto: 'A expressão “o estádio inteiro” configura' },
    ],
    alternativas: [
      {
        letra: 'A',
        texto: 'uma metáfora, pois compara o estádio a um ser vivo.',
        correta: false,
        diagnostico:
          'Não há comparação entre dois campos de sentido. O estádio não está sendo comparado a nada — está sendo usado no lugar de outra coisa.',
        tipoErro: 'conceito',
      },
      {
        letra: 'B',
        texto: 'uma metonímia, pois o lugar substitui as pessoas que estão nele.',
        correta: true,
        diagnostico:
          'Correto. Metonímia é substituição por relação de proximidade — aqui, continente pelo conteúdo: o estádio pelo público.',
      },
      {
        letra: 'C',
        texto: 'uma hipérbole, pois exagera a reação do público.',
        correta: false,
        diagnostico:
          'Há algum exagero em "prendeu a respiração", mas o comando pergunta especificamente sobre "o estádio inteiro", que é outro recurso.',
        tipoErro: 'leitura',
      },
      {
        letra: 'D',
        texto: 'uma personificação, pois atribui ação humana a um objeto.',
        correta: false,
        diagnostico:
          'Esta é a alternativa mais tentadora. Mas quem respira aqui são as pessoas do estádio, não o prédio — não há atribuição de vida ao objeto, e sim substituição de nome.',
        tipoErro: 'distrator',
      },
      {
        letra: 'E',
        texto: 'uma antítese, pois opõe silêncio e movimento.',
        correta: false,
        diagnostico: 'Não há par de opostos explicitamente contrastado na expressão indicada.',
        tipoErro: 'conceito',
      },
    ],
    explicacao: [
      {
        tipo: 'p',
        texto:
          'A diferença entre metáfora e metonímia é a natureza da relação: metáfora liga campos distintos por semelhança; metonímia liga elementos próximos por contiguidade.',
      },
      {
        tipo: 'lista',
        itens: [
          'Metáfora: "aquele menino é um foguete" — semelhança entre menino e foguete.',
          'Metonímia (continente/conteúdo): "bebi um copo d’água".',
          'Metonímia (autor/obra): "li Machado de Assis".',
          'Metonímia (parte/todo): "faltam braços na colheita".',
        ],
      },
      {
        tipo: 'destaque',
        variante: 'atencao',
        titulo: 'Leia o comando com precisão',
        texto:
          'A frase pode conter três figuras ao mesmo tempo. O comando aponta UMA expressão — é sobre ela que você responde.',
      },
    ],
    irmas: ['ling-fig-q2'],
  },
  {
    id: 'ling-fig-q2',
    topicId: 'ling-figuras',
    conceito: 'Ironia como recurso argumentativo',
    procedencia: 'autoral',
    dificuldade: 'media',
    eixo: 'argumentacao',
    minutos: 2,
    enunciado: [
      {
        tipo: 'citacao',
        texto:
          '“A nova ciclovia ficou ótima: tem 400 metros, começa numa avenida sem acostamento e termina num poste. Um convite e tanto para deixar o carro em casa.”',
        fonte: 'Texto escrito para este exercício.',
      },
      { tipo: 'p', texto: 'O efeito de sentido construído no trecho decorre do uso de' },
    ],
    alternativas: [
      {
        letra: 'A',
        texto: 'eufemismo, para suavizar uma crítica dura.',
        correta: false,
        diagnostico:
          'Eufemismo suaviza dizendo menos ("nos deixou" por "morreu"). Aqui o texto faz o contrário: elogia para criticar.',
        tipoErro: 'conceito',
      },
      {
        letra: 'B',
        texto: 'ironia, pois o elogio aparente contradiz os fatos apresentados.',
        correta: true,
        diagnostico:
          'Correto. "Ficou ótima" e "um convite e tanto" chocam-se com os fatos listados. Essa contradição intencional é a ironia.',
      },
      {
        letra: 'C',
        texto: 'pleonasmo, pela repetição desnecessária de ideias.',
        correta: false,
        diagnostico: 'Não há repetição redundante — cada informação do trecho acrescenta algo novo.',
        tipoErro: 'conceito',
      },
      {
        letra: 'D',
        texto: 'prosopopeia, pela atribuição de intenção à ciclovia.',
        correta: false,
        diagnostico: 'A ciclovia não age nem fala no texto; quem faz o "convite" é a situação descrita, por meio do sarcasmo.',
        tipoErro: 'conceito',
      },
      {
        letra: 'E',
        texto: 'gradação, pela intensificação progressiva dos argumentos.',
        correta: false,
        diagnostico:
          'Há uma lista de problemas, mas ela não está organizada em intensidade crescente — e não é isso que produz o efeito principal.',
        tipoErro: 'distrator',
      },
    ],
    explicacao: [
      {
        tipo: 'p',
        texto:
          'Ironia é dizer o contrário do que se quer dar a entender, contando com o leitor para desfazer a contradição. É por isso que ela é um recurso argumentativo, e não só um enfeite.',
      },
      {
        tipo: 'p',
        texto:
          'Na prova, a ironia quase sempre aparece em charges, crônicas e comentários, e o comando pergunta pelo EFEITO produzido — criticar, ridicularizar, denunciar — e não pelo nome da figura.',
      },
    ],
    irmas: ['ling-fig-q1'],
  },

  {
    id: 'ling-le-q1',
    topicId: 'ling-estrangeira',
    conceito: 'Leitura estratégica: ideia principal em inglês',
    procedencia: 'autoral',
    dificuldade: 'media',
    eixo: 'linguagens',
    minutos: 3,
    enunciado: [
      {
        tipo: 'citacao',
        texto:
          '“Cities that removed lanes from cars and gave them to buses and bicycles did not become more congested, as many drivers feared. Traffic did not simply move elsewhere — a share of it disappeared, because some people stopped driving altogether.”',
        fonte: 'Texto escrito para este exercício, em inglês.',
      },
      { tipo: 'p', texto: 'De acordo com o texto, a retirada de faixas destinadas a carros' },
    ],
    alternativas: [
      {
        letra: 'A',
        texto: 'aumentou o congestionamento nas cidades analisadas.',
        correta: false,
        diagnostico:
          'O texto diz exatamente o contrário: "did not become more congested". Você provavelmente leu "congested" e marcou sem ver a negação.',
        tipoErro: 'leitura',
      },
      {
        letra: 'B',
        texto: 'transferiu integralmente o trânsito para outras vias.',
        correta: false,
        diagnostico:
          '"Did not simply move elsewhere" nega justamente essa ideia. A palavra "simply" indica que há mais do que transferência.',
        tipoErro: 'leitura',
      },
      {
        letra: 'C',
        texto: 'reduziu parte do tráfego, pois algumas pessoas deixaram de dirigir.',
        correta: true,
        diagnostico:
          'Correto. "A share of it disappeared, because some people stopped driving altogether" é a informação central do trecho.',
      },
      {
        letra: 'D',
        texto: 'confirmou o receio dos motoristas quanto ao trânsito.',
        correta: false,
        diagnostico: '"As many drivers feared" aparece para dizer que o receio NÃO se confirmou.',
        tipoErro: 'leitura',
      },
      {
        letra: 'E',
        texto: 'beneficiou apenas os ciclistas, prejudicando o transporte público.',
        correta: false,
        diagnostico:
          'O texto trata ônibus e bicicletas juntos, como beneficiados. A oposição entre eles não existe no texto.',
        tipoErro: 'distrator',
      },
    ],
    explicacao: [
      {
        tipo: 'p',
        texto:
          'As 5 questões de língua estrangeira raramente exigem vocabulário raro. Elas exigem localizar a informação e, principalmente, não perder a negação.',
      },
      {
        tipo: 'lista',
        itens: [
          'Marque as negações ao ler: not, never, no longer, neither, unlikely.',
          'Marque os conectivos de contraste: but, however, although, yet, despite.',
          'Cognatos ajudam (congestion, share, traffic), mas cuidado com falsos cognatos.',
          'Leia o comando antes do texto: você vai procurar, não estudar o texto.',
        ],
      },
      {
        tipo: 'destaque',
        variante: 'atencao',
        titulo: 'Falsos cognatos que mais derrubam',
        texto:
          'actually = na verdade · eventually = por fim · pretend = fingir · parents = pais · library = biblioteca · push = empurrar · realize = perceber.',
      },
    ],
    irmas: ['ling-le-q2'],
  },
  {
    id: 'ling-le-q2',
    topicId: 'ling-estrangeira',
    conceito: 'Leitura estratégica: propósito do texto em espanhol',
    procedencia: 'autoral',
    dificuldade: 'media',
    eixo: 'linguagens',
    minutos: 3,
    enunciado: [
      {
        tipo: 'citacao',
        texto:
          '“No se trata de que los jóvenes lean menos, sino de que leen de otro modo. Exigirles el mismo tipo de lectura de hace treinta años no los convierte en mejores lectores: solo los aleja de la lectura.”',
        fonte: 'Texto escrito para este exercício, em espanhol.',
      },
      { tipo: 'p', texto: 'O autor do texto defende que' },
    ],
    alternativas: [
      {
        letra: 'A',
        texto: 'os jovens de hoje leem menos do que as gerações anteriores.',
        correta: false,
        diagnostico:
          '"No se trata de que los jóvenes lean menos" nega essa afirmação logo na primeira linha.',
        tipoErro: 'leitura',
      },
      {
        letra: 'B',
        texto: 'cobrar o modelo de leitura do passado afasta os jovens da leitura.',
        correta: true,
        diagnostico:
          'Correto. "Solo los aleja de la lectura" é a conclusão explícita do trecho.',
      },
      {
        letra: 'C',
        texto: 'a leitura digital é superior à leitura impressa.',
        correta: false,
        diagnostico:
          'O texto não compara suportes nem estabelece superioridade. Ele fala em "otro modo", não em modo melhor.',
        tipoErro: 'distrator',
      },
      {
        letra: 'D',
        texto: 'a escola deveria abandonar a exigência de leitura.',
        correta: false,
        diagnostico:
          'Criticar um tipo de exigência não é propor abandonar a leitura. É um distrator que radicaliza a tese.',
        tipoErro: 'distrator',
      },
      {
        letra: 'E',
        texto: 'os jovens de trinta anos atrás liam melhor.',
        correta: false,
        diagnostico:
          '"Hace treinta años" se refere ao TIPO de leitura exigida, não à qualidade dos leitores daquela época.',
        tipoErro: 'leitura',
      },
    ],
    explicacao: [
      {
        tipo: 'p',
        texto:
          'O espanhol é próximo do português, e essa proximidade é uma armadilha: dá confiança para ler rápido demais e perder a estrutura da frase.',
      },
      {
        tipo: 'p',
        texto:
          'Aqui, a chave está em "no se trata de… sino de…", que é uma estrutura de correção: nega a primeira formulação e propõe outra. Reconhecer esse par resolve a questão sem precisar entender cada palavra.',
      },
      {
        tipo: 'destaque',
        variante: 'atencao',
        titulo: 'Falsos cognatos do espanhol',
        texto:
          'embarazada = grávida · exquisito = delicioso · largo = comprido · rato = momento · oficina = escritório · sitio = lugar · vaso = copo.',
      },
    ],
    irmas: ['ling-le-q1'],
  },
];
