import type { Questao } from '../tipos';

/** Banco de questões de Ciências Humanas. Nenhuma é oficial do ENEM. */
export const QUESTOES_HUMANAS: Questao[] = [
  {
    id: 'hum-vargas-q1',
    topicId: 'hum-vargas',
    conceito: 'Trabalhismo e controle social no Estado Novo',
    procedencia: 'autoral',
    dificuldade: 'media',
    eixo: 'fenomenos',
    minutos: 3,
    enunciado: [
      {
        tipo: 'p',
        texto:
          'Durante o Estado Novo (1937–1945), o governo brasileiro consolidou a legislação trabalhista, criou o Ministério do Trabalho como instância de mediação e, ao mesmo tempo, manteve os sindicatos sob tutela estatal e reprimiu organizações operárias autônomas.',
      },
      { tipo: 'p', texto: 'Essa combinação de medidas indica que a política trabalhista do período' },
    ],
    alternativas: [
      {
        letra: 'A',
        texto: 'resultou da pressão vitoriosa dos sindicatos independentes sobre o governo.',
        correta: false,
        diagnostico:
          'O enunciado diz o contrário: as organizações autônomas foram reprimidas. Os direitos vieram por concessão do Estado, não por conquista sindical autônoma.',
        tipoErro: 'leitura',
      },
      {
        letra: 'B',
        texto: 'ampliou direitos e, simultaneamente, restringiu a autonomia de organização dos trabalhadores.',
        correta: true,
        diagnostico:
          'Correto. É a chave do período: o Estado concede direitos e, no mesmo movimento, torna-se o único canal legítimo de representação — o que amplia proteção e reduz autonomia.',
      },
      {
        letra: 'C',
        texto: 'eliminou a intervenção do Estado nas relações entre patrões e empregados.',
        correta: false,
        diagnostico:
          'A criação de um ministério mediador é exatamente o oposto de eliminar a intervenção estatal.',
        tipoErro: 'conceito',
      },
      {
        letra: 'D',
        texto: 'estendeu de imediato os mesmos direitos aos trabalhadores rurais.',
        correta: false,
        diagnostico:
          'A legislação trabalhista do período teve foco urbano-industrial. A extensão ao campo veio muito depois, e o enunciado não menciona isso.',
        tipoErro: 'distrator',
      },
      {
        letra: 'E',
        texto: 'adotou o modelo liberal clássico de não intervenção nas relações de trabalho.',
        correta: false,
        diagnostico:
          'Legislação trabalhista ampla e sindicato tutelado são o contrário do liberalismo clássico. O modelo aqui é corporativista.',
        tipoErro: 'conceito',
      },
    ],
    explicacao: [
      {
        tipo: 'p',
        texto:
          'O trabalhismo varguista é o exemplo mais cobrado de uma ideia central em Humanas: uma mesma política pode ampliar direitos e restringir autonomia ao mesmo tempo. Ler isso como contradição é perder a questão.',
      },
      {
        tipo: 'p',
        texto:
          'O Estado se apresenta como doador dos direitos, o que produz um vínculo direto entre o trabalhador e o governo — e desloca para segundo plano a organização independente. Por isso o período é descrito como corporativista, não como liberal nem como socialista.',
      },
      {
        tipo: 'destaque',
        variante: 'nota',
        titulo: 'Padrão que se repete',
        texto:
          'Sempre que o item mostrar "concessão de direito + controle da organização", a resposta correta quase certamente descreve os dois lados juntos, e não apenas um.',
      },
    ],
    irmas: ['hum-vargas-q2'],
  },
  {
    id: 'hum-vargas-q2',
    topicId: 'hum-vargas',
    conceito: 'Propaganda política e construção de legitimidade',
    procedencia: 'autoral',
    dificuldade: 'media',
    eixo: 'argumentacao',
    minutos: 3,
    enunciado: [
      {
        tipo: 'p',
        texto:
          'O Estado Novo manteve um órgão oficial encarregado de censurar a imprensa e, ao mesmo tempo, produzir e difundir programas de rádio, material escolar e imagens que associavam o chefe de governo ao progresso nacional e ao bem-estar do trabalhador.',
      },
      { tipo: 'p', texto: 'A atuação descrita revela que, no regime, a comunicação foi utilizada para' },
    ],
    alternativas: [
      {
        letra: 'A',
        texto: 'garantir o pluralismo de opiniões no debate público.',
        correta: false,
        diagnostico: 'Censura da imprensa é a negação do pluralismo. A alternativa contradiz o próprio enunciado.',
        tipoErro: 'leitura',
      },
      {
        letra: 'B',
        texto: 'substituir a repressão política por persuasão cultural.',
        correta: false,
        diagnostico:
          'Não houve substituição: censura e propaganda funcionaram juntas. "Substituir" é a palavra que torna a alternativa errada.',
        tipoErro: 'distrator',
      },
      {
        letra: 'C',
        texto: 'produzir consenso em torno do regime, controlando o que circulava e o que era exaltado.',
        correta: true,
        diagnostico:
          'Correto. Censurar e produzir conteúdo são as duas faces da mesma política: limitar o que se pode dizer e definir o que deve ser celebrado.',
      },
      {
        letra: 'D',
        texto: 'descentralizar a produção cultural entre os estados.',
        correta: false,
        diagnostico: 'Um órgão federal centralizando censura e propaganda aponta para centralização, não descentralização.',
        tipoErro: 'conceito',
      },
      {
        letra: 'E',
        texto: 'estimular a crítica jornalística ao governo como forma de aperfeiçoá-lo.',
        correta: false,
        diagnostico: 'Incompatível com a censura descrita no enunciado.',
        tipoErro: 'leitura',
      },
    ],
    explicacao: [
      {
        tipo: 'p',
        texto:
          'Regimes autoritários raramente se sustentam só pela força. Eles combinam coerção (censura, repressão) e construção de consentimento (propaganda, símbolos, celebração de conquistas).',
      },
      {
        tipo: 'p',
        texto:
          'Esse par aparece em muitos contextos do exame — não só no Brasil dos anos 1930 — e a alternativa correta costuma ser a que descreve os dois mecanismos operando juntos.',
      },
    ],
    irmas: ['hum-vargas-q1'],
  },

  {
    id: 'hum-vargas-q3',
    topicId: 'hum-vargas',
    conceito: 'Industrialização por substituição de importações',
    procedencia: 'autoral',
    dificuldade: 'media',
    eixo: 'fenomenos',
    minutos: 3,
    enunciado: [
      {
        tipo: 'p',
        texto:
          'Nas décadas de 1930 e 1940, o Estado brasileiro criou empresas em setores como siderurgia e mineração, elevou tarifas sobre produtos importados e passou a financiar diretamente a instalação de indústrias, em um contexto internacional de crise e depois de guerra, que reduziu a oferta de manufaturados vindos do exterior.',
      },
      { tipo: 'p', texto: 'Essa política produtiva é caracterizada como' },
    ],
    alternativas: [
      {
        letra: 'A',
        texto: 'liberalização comercial, pela redução das barreiras à entrada de produtos estrangeiros.',
        correta: false,
        diagnostico:
          'O enunciado diz o contrário: as tarifas sobre importados foram elevadas. Liberalização comercial reduz barreiras, e não foi isso que aconteceu.',
        tipoErro: 'leitura',
      },
      {
        letra: 'B',
        texto: 'substituição de importações, pela produção interna de bens antes comprados de fora.',
        correta: true,
        diagnostico:
          'Correto. A combinação de proteção tarifária, empresas estatais em setores de base e crédito estatal tinha como objetivo produzir dentro do país aquilo que antes era importado.',
      },
      {
        letra: 'C',
        texto: 'especialização primária, pela concentração da economia em produtos agrícolas de exportação.',
        correta: false,
        diagnostico:
          'Especialização primária é justamente o modelo que essa política buscava superar. Criar siderurgia é o oposto de concentrar a economia em produto agrícola.',
        tipoErro: 'conceito',
      },
      {
        letra: 'D',
        texto: 'desestatização, pela transferência de setores estratégicos à iniciativa privada.',
        correta: false,
        diagnostico:
          'O movimento foi o inverso: o Estado criou empresas e assumiu setores considerados estratégicos, em vez de transferi-los.',
        tipoErro: 'leitura',
      },
      {
        letra: 'E',
        texto: 'integração regional, pela formação de um mercado comum com países vizinhos.',
        correta: false,
        diagnostico:
          'Nada no enunciado menciona acordo com outros países. A política descrita é interna, voltada ao mercado nacional.',
        tipoErro: 'distrator',
      },
    ],
    explicacao: [
      {
        tipo: 'p',
        texto:
          'Substituição de importações é uma estratégia de industrialização em que o Estado protege o mercado interno e investe em setores que a iniciativa privada nacional não tinha capital ou interesse para assumir — sobretudo a indústria de base, cara e de retorno lento.',
      },
      {
        tipo: 'p',
        texto:
          'O contexto externo ajuda a explicar o timing: crise de 1929 e Segunda Guerra reduziram a oferta de manufaturados importados, e a escassez tornou economicamente viável produzir aqui o que antes se comprava pronto.',
      },
      {
        tipo: 'destaque',
        variante: 'nota',
        titulo: 'Como o ENEM costuma cobrar',
        texto:
          'O item raramente usa o nome do modelo. Ele descreve as medidas — tarifa, estatal, crédito dirigido — e pede que você reconheça a lógica por trás delas.',
      },
    ],
    irmas: ['hum-vargas-q1'],
  },
  {
    id: 'hum-vargas-q4',
    topicId: 'hum-vargas',
    conceito: 'A ruptura de 1937 e o caráter ditatorial do Estado Novo',
    procedencia: 'autoral',
    dificuldade: 'media',
    eixo: 'argumentacao',
    minutos: 3,
    enunciado: [
      {
        tipo: 'p',
        texto:
          'Em 1937, o governo fechou o Congresso Nacional, cancelou as eleições presidenciais previstas, outorgou uma nova Constituição sem participação do Legislativo e instituiu censura prévia à imprensa. O mesmo governante permaneceu no poder até 1945.',
      },
      { tipo: 'p', texto: 'O conjunto dessas medidas permite afirmar que 1937 marca' },
    ],
    alternativas: [
      {
        letra: 'A',
        texto:
          'a continuidade do período anterior, já que o governante e o projeto econômico permaneceram os mesmos.',
        correta: false,
        diagnostico:
          'Permanecer no poder não é o mesmo que permanecer no mesmo regime. O que muda em 1937 é como esse poder passa a ser exercido e de onde ele extrai legitimidade.',
        tipoErro: 'conceito',
      },
      {
        letra: 'B',
        texto:
          'a instauração de uma ditadura, pela supressão simultânea do Legislativo, das eleições e da liberdade de imprensa.',
        correta: true,
        diagnostico:
          'Correto. Fechar o Congresso, cancelar eleição, outorgar Constituição e censurar a imprensa elimina de uma vez os mecanismos de representação, de alternância e de controle público — é a definição prática de regime ditatorial.',
      },
      {
        letra: 'C',
        texto: 'o início do período constitucional, uma vez que uma nova Constituição foi promulgada.',
        correta: false,
        diagnostico:
          'A Constituição de 1937 foi outorgada, não promulgada: veio de cima, sem Assembleia Constituinte. A palavra que o enunciado usa — outorgada — é a pista decisiva.',
        tipoErro: 'leitura',
      },
      {
        letra: 'D',
        texto: 'uma transição democrática, já que a nova ordem institucional foi formalizada por escrito.',
        correta: false,
        diagnostico:
          'Ter texto constitucional não torna um regime democrático. O critério é se existe representação, eleição e controle — e os três foram suprimidos.',
        tipoErro: 'conceito',
      },
      {
        letra: 'E',
        texto: 'a descentralização do poder, com ampliação da autonomia dos estados.',
        correta: false,
        diagnostico:
          'O período foi de centralização, não de descentralização. Nada no enunciado aponta para ganho de autonomia estadual.',
        tipoErro: 'distrator',
      },
    ],
    explicacao: [
      {
        tipo: 'p',
        texto:
          'O período varguista costuma ser dividido em três fases: Governo Provisório (1930-1934), Governo Constitucional (1934-1937) e Estado Novo (1937-1945). A terceira fase se distingue das anteriores por ser abertamente ditatorial.',
      },
      {
        tipo: 'p',
        texto:
          'Uma armadilha frequente é tratar direitos trabalhistas e ditadura como incompatíveis. Não são: o mesmo Estado que consolidou a legislação do trabalho fechou o Congresso e censurou jornais. Reconhecer isso é entender o período, não relativizá-lo.',
      },
      {
        tipo: 'destaque',
        variante: 'atencao',
        titulo: 'Outorgada × promulgada',
        texto:
          'Constituição promulgada nasce de uma Assembleia Constituinte eleita. Outorgada é imposta por quem já está no poder. O ENEM usa essa distinção com frequência, tanto em 1937 quanto em 1824.',
      },
    ],
    irmas: ['hum-vargas-q2'],
  },
  {
    id: 'hum-dit-q1',
    topicId: 'hum-ditadura',
    conceito: 'AI-5 e endurecimento do regime',
    procedencia: 'autoral',
    dificuldade: 'media',
    eixo: 'fenomenos',
    minutos: 3,
    enunciado: [
      {
        tipo: 'p',
        texto:
          'Em dezembro de 1968, o Ato Institucional nº 5 autorizou o fechamento do Congresso Nacional por tempo indeterminado, a cassação de mandatos, a suspensão de direitos políticos e a supressão do habeas corpus para crimes políticos.',
      },
      { tipo: 'p', texto: 'A promulgação desse ato representou' },
    ],
    alternativas: [
      {
        letra: 'A',
        texto: 'o início do processo de abertura política do regime.',
        correta: false,
        diagnostico:
          'Inverte a cronologia e o sentido: a abertura gradual começa na década seguinte. O AI-5 é o ponto de maior fechamento.',
        tipoErro: 'conceito',
      },
      {
        letra: 'B',
        texto: 'a concentração de poder no Executivo e a suspensão de garantias fundamentais.',
        correta: true,
        diagnostico:
          'Correto. Fechar o Legislativo, cassar mandatos e suprimir o habeas corpus concentram poder e retiram as garantias que limitariam esse poder.',
      },
      {
        letra: 'C',
        texto: 'a restauração da independência entre os três poderes.',
        correta: false,
        diagnostico:
          'Fechar o Congresso por ato do Executivo é a negação direta da independência entre poderes.',
        tipoErro: 'leitura',
      },
      {
        letra: 'D',
        texto: 'a ampliação do direito de defesa dos presos políticos.',
        correta: false,
        diagnostico:
          'A supressão do habeas corpus faz exatamente o contrário: retira o instrumento jurídico central de defesa contra prisão ilegal.',
        tipoErro: 'conceito',
      },
      {
        letra: 'E',
        texto: 'a transferência do poder decisório para os governos estaduais.',
        correta: false,
        diagnostico: 'Não há nada no enunciado sobre estados; o movimento descrito é de centralização federal.',
        tipoErro: 'leitura',
      },
    ],
    explicacao: [
      {
        tipo: 'p',
        texto:
          'Mesmo sem lembrar a data, é possível resolver o item pelo conteúdo do ato: quem fecha o Legislativo e suspende o habeas corpus está concentrando poder e removendo controles.',
      },
      {
        tipo: 'p',
        texto:
          'O habeas corpus é a garantia contra prisão ilegal. Suprimi-lo para crimes políticos significa que prisões por motivo político deixam de ter controle judicial — por isso o AI-5 marca a fase mais dura do regime.',
      },
      {
        tipo: 'destaque',
        variante: 'nota',
        titulo: 'Estratégia para Humanas',
        texto:
          'Quando o enunciado descreve o CONTEÚDO de uma lei ou ato, você não precisa da data: analise o que o texto faz com o poder e com os direitos.',
      },
    ],
    irmas: ['hum-dit-q2'],
  },
  {
    id: 'hum-dit-q2',
    topicId: 'hum-ditadura',
    conceito: 'Transição negociada e redemocratização',
    procedencia: 'autoral',
    dificuldade: 'dificil',
    eixo: 'argumentacao',
    minutos: 4,
    enunciado: [
      {
        tipo: 'p',
        texto:
          'A saída do regime militar brasileiro combinou mobilização social de massa pela volta das eleições diretas com uma transição conduzida em acordo entre setores do regime e da oposição, que culminou em eleição indireta para a Presidência em 1985 e em nova Constituição em 1988.',
      },
      { tipo: 'p', texto: 'O processo descrito caracteriza-se por' },
    ],
    alternativas: [
      {
        letra: 'A',
        texto: 'ruptura revolucionária, com substituição completa das elites políticas anteriores.',
        correta: false,
        diagnostico:
          'O próprio enunciado fala em acordo entre setores do regime e da oposição — o oposto de substituição completa.',
        tipoErro: 'leitura',
      },
      {
        letra: 'B',
        texto: 'transição negociada, em que a pressão popular não se converteu imediatamente em eleição direta.',
        correta: true,
        diagnostico:
          'Correto. A mobilização foi enorme e a eleição presidencial seguinte ainda foi indireta: a pressão social existiu, mas o formato da transição foi pactuado.',
      },
      {
        letra: 'C',
        texto: 'continuidade institucional integral, sem mudança no ordenamento jurídico.',
        correta: false,
        diagnostico: 'Uma nova Constituição em 1988 é, por definição, uma mudança profunda no ordenamento jurídico.',
        tipoErro: 'leitura',
      },
      {
        letra: 'D',
        texto: 'intervenção externa decisiva na definição do novo regime.',
        correta: false,
        diagnostico: 'Nenhum ator externo é mencionado no enunciado. É uma informação acrescentada por conta própria.',
        tipoErro: 'distrator',
      },
      {
        letra: 'E',
        texto: 'imposição unilateral da oposição sobre os militares.',
        correta: false,
        diagnostico:
          '"Acordo" e "eleição indireta" indicam concessão mútua, não imposição de um lado sobre o outro.',
        tipoErro: 'conceito',
      },
    ],
    explicacao: [
      {
        tipo: 'p',
        texto:
          'Transição negociada é um conceito que o exame cobra com frequência porque explica um traço duradouro da democracia brasileira: a mudança de regime não se deu por ruptura, e parte das estruturas e dos atores anteriores permaneceu.',
      },
      {
        tipo: 'p',
        texto:
          'A tensão entre mobilização popular massiva e desfecho institucional pactuado é o núcleo do item. Alternativas que escolhem só um dos lados — só ruptura, só continuidade — erram por simplificação.',
      },
    ],
    irmas: ['hum-dit-q1', 'hum-cid-q1'],
  },

  {
    id: 'hum-dit-q3',
    topicId: 'hum-ditadura',
    conceito: 'Milagre econômico e concentração de renda',
    procedencia: 'autoral',
    dificuldade: 'media',
    eixo: 'argumentacao',
    minutos: 4,
    enunciado: [
      {
        tipo: 'p',
        texto:
          'Entre o fim dos anos 1960 e o início dos 1970, a economia brasileira registrou altas taxas de crescimento, com forte expansão da indústria e de grandes obras de infraestrutura. No mesmo período, a política de arrocho salarial limitou os reajustes dos salários mais baixos e a distância entre os rendimentos do topo e da base aumentou.',
      },
      { tipo: 'p', texto: 'Esses dados, tomados em conjunto, indicam que' },
    ],
    alternativas: [
      {
        letra: 'A',
        texto: 'o crescimento econômico e a melhora na distribuição de renda caminharam juntos.',
        correta: false,
        diagnostico:
          'O enunciado afirma o oposto sobre a distribuição: a distância entre topo e base aumentou. Crescer e distribuir são processos que podem andar em sentidos contrários.',
        tipoErro: 'leitura',
      },
      {
        letra: 'B',
        texto: 'o crescimento do produto não implicou, por si só, redução da desigualdade.',
        correta: true,
        diagnostico:
          'Correto. O período combina expansão econômica acelerada com concentração de renda — a prova histórica de que crescimento e distribuição são questões distintas.',
      },
      {
        letra: 'C',
        texto: 'houve estagnação econômica, o que explica o aumento da desigualdade.',
        correta: false,
        diagnostico:
          'Não houve estagnação: o enunciado fala em altas taxas de crescimento. A desigualdade aumentou apesar do crescimento, não por causa da falta dele.',
        tipoErro: 'leitura',
      },
      {
        letra: 'D',
        texto: 'o arrocho salarial foi consequência da queda da produção industrial.',
        correta: false,
        diagnostico:
          'A indústria estava em expansão, não em queda. O arrocho era política de contenção de custos e de inflação, não efeito de retração produtiva.',
        tipoErro: 'leitura',
      },
      {
        letra: 'E',
        texto: 'a ausência de eleições diretas impediu qualquer crescimento econômico no período.',
        correta: false,
        diagnostico:
          'A afirmação contraria o próprio enunciado, que registra crescimento elevado. Regime autoritário e crescimento econômico não são mutuamente excludentes — e reconhecer isso não é defender o regime.',
        tipoErro: 'conceito',
      },
    ],
    explicacao: [
      {
        tipo: 'p',
        texto:
          'O chamado milagre econômico é o caso brasileiro mais citado para separar duas ideias que costumam ser confundidas: o tamanho do bolo e a forma como ele é repartido. Os dois indicadores se moveram ao mesmo tempo, em direções opostas.',
      },
      {
        tipo: 'p',
        texto:
          'O item cobra leitura conjunta de dois dados. Quem lê só o crescimento marca a alternativa A; quem lê só a desigualdade marca a C. A resposta depende de sustentar as duas informações ao mesmo tempo.',
      },
    ],
    irmas: ['hum-dit-q1'],
  },
  {
    id: 'hum-dit-q4',
    topicId: 'hum-ditadura',
    conceito: 'Bipartidarismo imposto',
    procedencia: 'autoral',
    dificuldade: 'media',
    eixo: 'fenomenos',
    minutos: 3,
    enunciado: [
      {
        tipo: 'p',
        texto:
          'Em 1965, um ato institucional extinguiu os partidos políticos existentes no Brasil e estabeleceu um sistema com apenas duas legendas: uma de sustentação do governo e outra de oposição consentida, que atuava dentro dos limites fixados pelo próprio regime.',
      },
      { tipo: 'p', texto: 'Essa reorganização partidária teve como efeito principal' },
    ],
    alternativas: [
      {
        letra: 'A',
        texto: 'ampliar a representação política, ao simplificar as opções oferecidas ao eleitor.',
        correta: false,
        diagnostico:
          'Reduzir de vários partidos para dois por decisão de cima não amplia representação: elimina as correntes que não couberam em nenhuma das duas legendas.',
        tipoErro: 'conceito',
      },
      {
        letra: 'B',
        texto:
          'enquadrar a disputa política nos limites definidos pelo regime, mantendo a aparência de pluralismo.',
        correta: true,
        diagnostico:
          'Correto. A existência de uma oposição legal dava ao regime uma fachada de normalidade institucional, enquanto as regras do jogo — quem podia existir e até onde podia ir — eram fixadas pelo próprio governo.',
      },
      {
        letra: 'C',
        texto: 'restaurar o sistema partidário anterior a 1964, com os mesmos partidos e lideranças.',
        correta: false,
        diagnostico:
          'O ato extinguiu os partidos anteriores. Restauração é o oposto exato do que o enunciado descreve.',
        tipoErro: 'leitura',
      },
      {
        letra: 'D',
        texto: 'transferir ao Legislativo o controle sobre a criação e a extinção de partidos.',
        correta: false,
        diagnostico:
          'A decisão veio por ato institucional, instrumento do Executivo no regime. O período foi de esvaziamento do Legislativo, não de ampliação de seus poderes.',
        tipoErro: 'conceito',
      },
      {
        letra: 'E',
        texto: 'eliminar completamente a realização de eleições no país.',
        correta: false,
        diagnostico:
          'Eleições continuaram a existir, inclusive para o Legislativo — com regras restritivas e cassações. Regime autoritário com eleições controladas é diferente de ausência total de eleição.',
        tipoErro: 'conceito',
      },
    ],
    explicacao: [
      {
        tipo: 'p',
        texto:
          'O bipartidarismo imposto é um exemplo de como regimes autoritários preservam formas institucionais enquanto esvaziam seu conteúdo. O Congresso continuou existindo, eleições continuaram ocorrendo, partidos continuaram a existir — todos sob regras que o próprio regime escrevia.',
      },
      {
        tipo: 'p',
        texto:
          'É o mesmo raciocínio que a questão da Constituição outorgada cobra no período varguista: a existência da forma não garante a substância. O critério é sempre quem define as regras e quem pode perder.',
      },
    ],
    irmas: ['hum-dit-q1', 'hum-dit-q2'],
  },
  {
    id: 'hum-cid-q1',
    topicId: 'hum-cidadania',
    conceito: 'Direitos sociais e papel do Estado',
    procedencia: 'autoral',
    dificuldade: 'media',
    eixo: 'propostas',
    minutos: 3,
    enunciado: [
      {
        tipo: 'p',
        texto:
          'A Constituição Federal de 1988 estabeleceu a saúde como direito de todos e dever do Estado, garantido mediante políticas sociais e econômicas, com acesso universal e igualitário às ações e serviços para sua promoção, proteção e recuperação.',
      },
      { tipo: 'p', texto: 'A formulação desse dispositivo implica que o acesso à saúde pública no Brasil' },
    ],
    alternativas: [
      {
        letra: 'A',
        texto: 'depende de contribuição prévia do cidadão ao sistema.',
        correta: false,
        diagnostico:
          '"Direito de todos" com "acesso universal" exclui a exigência de contribuição prévia. Esse é o modelo contributivo da previdência, não o da saúde.',
        tipoErro: 'conceito',
      },
      {
        letra: 'B',
        texto: 'é um direito universal, não condicionado à capacidade de pagamento.',
        correta: true,
        diagnostico:
          'Correto. "De todos", "universal e igualitário" definem um direito de cidadania, não um serviço comprado.',
      },
      {
        letra: 'C',
        texto: 'restringe-se ao atendimento de emergências.',
        correta: false,
        diagnostico:
          'O texto cita promoção, proteção e recuperação — as três dimensões, e não apenas a emergência.',
        tipoErro: 'leitura',
      },
      {
        letra: 'D',
        texto: 'é responsabilidade exclusiva dos municípios.',
        correta: false,
        diagnostico: 'O dispositivo fala em "dever do Estado", sem restringir a um ente federativo.',
        tipoErro: 'leitura',
      },
      {
        letra: 'E',
        texto: 'substitui integralmente os serviços privados de saúde.',
        correta: false,
        diagnostico:
          'Garantir acesso público universal não implica proibir a oferta privada. "Integralmente" é o exagero que derruba a alternativa.',
        tipoErro: 'distrator',
      },
    ],
    explicacao: [
      {
        tipo: 'p',
        texto:
          'Direito social é aquele cujo exercício exige prestação positiva do Estado — não basta que ninguém impeça, é preciso que alguém forneça.',
      },
      {
        tipo: 'p',
        texto:
          'É por isso que a formulação do texto constitucional é tão cobrada: as expressões "de todos", "dever do Estado" e "universal e igualitário" definem juntas um modelo de cidadania. Cada uma delas elimina uma alternativa diferente.',
      },
      {
        tipo: 'destaque',
        variante: 'oficial',
        titulo: 'Repertório para a redação',
        texto:
          'Este dispositivo é um dos repertórios mais úteis para a Competência 2 em temas de saúde, desigualdade e acesso a serviços — e é verificável, o que o torna seguro de citar.',
      },
    ],
    irmas: ['hum-cid-q2'],
  },
  {
    id: 'hum-cid-q2',
    topicId: 'hum-cidadania',
    conceito: 'Igualdade formal e igualdade material',
    procedencia: 'autoral',
    dificuldade: 'dificil',
    eixo: 'argumentacao',
    minutos: 4,
    enunciado: [
      {
        tipo: 'p',
        texto:
          'Um debate recorrente sobre políticas públicas opõe dois argumentos: o primeiro sustenta que a lei deve tratar todos exatamente da mesma forma; o segundo sustenta que, diante de desigualdades históricas, tratar todos igualmente mantém a desigualdade existente.',
      },
      { tipo: 'p', texto: 'O segundo argumento fundamenta-se na distinção entre' },
    ],
    alternativas: [
      {
        letra: 'A',
        texto: 'direitos civis e direitos políticos.',
        correta: false,
        diagnostico:
          'Essa distinção separa liberdades individuais de participação política — não é sobre o modo de aplicar a igualdade.',
        tipoErro: 'conceito',
      },
      {
        letra: 'B',
        texto: 'igualdade formal e igualdade material.',
        correta: true,
        diagnostico:
          'Correto. Igualdade formal é tratamento idêntico perante a lei; igualdade material busca equiparar condições reais, o que pode exigir tratamento diferenciado.',
      },
      {
        letra: 'C',
        texto: 'esfera pública e esfera privada.',
        correta: false,
        diagnostico: 'Distinção relevante em Sociologia, mas não é a que estrutura o argumento apresentado.',
        tipoErro: 'conceito',
      },
      {
        letra: 'D',
        texto: 'democracia direta e democracia representativa.',
        correta: false,
        diagnostico: 'Trata de formas de participação, não de critérios de igualdade.',
        tipoErro: 'conceito',
      },
      {
        letra: 'E',
        texto: 'Estado de direito e estado de exceção.',
        correta: false,
        diagnostico: 'Opõe vigência e suspensão da ordem jurídica — nada a ver com o argumento do enunciado.',
        tipoErro: 'distrator',
      },
    ],
    explicacao: [
      {
        tipo: 'p',
        texto:
          'Igualdade formal: a lei é a mesma para todos. Igualdade material: o objetivo é que as pessoas tenham condições comparáveis de exercer seus direitos, o que às vezes exige tratar situações desiguais de modo desigual.',
      },
      {
        tipo: 'p',
        texto:
          'Essa distinção sustenta o debate sobre políticas de ação afirmativa, acessibilidade, licença-maternidade e desenho de programas sociais. É um dos conceitos com melhor custo-benefício da área: explica muitas questões e serve de argumento na redação.',
      },
    ],
    irmas: ['hum-cid-q1'],
  },

  {
    id: 'hum-cid-q3',
    topicId: 'hum-cidadania',
    conceito: 'As três dimensões da cidadania',
    procedencia: 'autoral',
    dificuldade: 'media',
    eixo: 'fenomenos',
    minutos: 3,
    enunciado: [
      {
        tipo: 'p',
        texto:
          'Considere três garantias previstas no ordenamento brasileiro: (I) a liberdade de expressar opinião sem censura prévia; (II) o direito de votar e de ser votado; (III) o direito ao atendimento gratuito na rede pública de saúde.',
      },
      { tipo: 'p', texto: 'Essas garantias correspondem, respectivamente, a direitos' },
    ],
    alternativas: [
      {
        letra: 'A',
        texto: 'civis, políticos e sociais.',
        correta: true,
        diagnostico:
          'Correto. Liberdade de expressão é direito civil (protege o indivíduo contra interferência); voto é direito político (participação no poder); saúde pública é direito social (exige prestação do Estado).',
      },
      {
        letra: 'B',
        texto: 'políticos, civis e sociais.',
        correta: false,
        diagnostico:
          'Você inverteu os dois primeiros. Expressar opinião é liberdade individual, não participação no poder; votar é exatamente o contrário.',
        tipoErro: 'conceito',
      },
      {
        letra: 'C',
        texto: 'sociais, políticos e civis.',
        correta: false,
        diagnostico:
          'Liberdade de expressão não é direito social: direito social envolve condições materiais garantidas pelo Estado, como saúde, educação e trabalho.',
        tipoErro: 'conceito',
      },
      {
        letra: 'D',
        texto: 'civis, sociais e políticos.',
        correta: false,
        diagnostico:
          'Você acertou o primeiro e trocou os outros dois. Votar é participação política; atendimento de saúde é prestação social.',
        tipoErro: 'conceito',
      },
      {
        letra: 'E',
        texto: 'todos classificados como direitos civis, por constarem da Constituição.',
        correta: false,
        diagnostico:
          'Estar na Constituição não define a dimensão do direito. A classificação depende do que cada garantia exige: não interferência, participação ou prestação.',
        tipoErro: 'conceito',
      },
    ],
    explicacao: [
      {
        tipo: 'p',
        texto:
          'As três dimensões se distinguem pelo que exigem do Estado. Direito civil pede que ele não interfira. Direito político pede que ele abra espaço de participação. Direito social pede que ele atue e financie.',
      },
      {
        tipo: 'lista',
        itens: [
          'Civis: liberdade de expressão, de crença, de ir e vir, propriedade, devido processo legal.',
          'Políticos: votar, ser votado, filiar-se a partido, participar de plebiscito.',
          'Sociais: saúde, educação, moradia, trabalho, previdência, assistência.',
        ],
      },
      {
        tipo: 'p',
        texto:
          'A pergunta que resolve quase todo item desse tipo: o Estado precisa gastar dinheiro para garantir isso? Se sim, é direito social. Se basta que ele não atrapalhe, é civil. Se é sobre decidir quem manda, é político.',
      },
    ],
    irmas: ['hum-cid-q1', 'hum-cid-q2'],
  },
  {
    id: 'hum-glob-q1',
    topicId: 'hum-globalizacao',
    conceito: 'Divisão internacional do trabalho',
    procedencia: 'autoral',
    dificuldade: 'media',
    eixo: 'fenomenos',
    minutos: 3,
    enunciado: [
      {
        tipo: 'tabela',
        cabecalho: ['País', 'Principal item da pauta de exportação', 'Principal item da pauta de importação'],
        linhas: [
          ['País A', 'minério e grãos', 'máquinas e equipamentos eletrônicos'],
          ['País B', 'equipamentos eletrônicos', 'minério e combustíveis'],
        ],
        legenda: 'Situação hipotética, construída para este exercício.',
      },
      { tipo: 'p', texto: 'O padrão de trocas apresentado permite concluir que' },
    ],
    alternativas: [
      {
        letra: 'A',
        texto: 'o País A possui economia mais diversificada que a do País B.',
        correta: false,
        diagnostico:
          'A pauta de A concentra-se em produtos primários — o que indica menos diversificação industrial, não mais.',
        tipoErro: 'grafico',
      },
      {
        letra: 'B',
        texto: 'o País A exporta produtos de menor valor agregado do que os que importa.',
        correta: true,
        diagnostico:
          'Correto. Minério e grãos são bens primários; máquinas e eletrônicos incorporam mais tecnologia e valor agregado.',
      },
      {
        letra: 'C',
        texto: 'não há relação de dependência entre as duas economias.',
        correta: false,
        diagnostico: 'A tabela mostra exatamente o oposto: cada país importa o que o outro exporta.',
        tipoErro: 'leitura',
      },
      {
        letra: 'D',
        texto: 'o País B depende menos do comércio internacional que o País A.',
        correta: false,
        diagnostico:
          'A tabela não traz volume nem participação do comércio no PIB. Não há como comparar grau de dependência.',
        tipoErro: 'grafico',
      },
      {
        letra: 'E',
        texto: 'ambos os países ocupam a mesma posição na divisão internacional do trabalho.',
        correta: false,
        diagnostico: 'As pautas são opostas em natureza — é justamente o que caracteriza posições diferentes.',
        tipoErro: 'conceito',
      },
    ],
    explicacao: [
      {
        tipo: 'p',
        texto:
          'Divisão internacional do trabalho é a especialização dos países em diferentes etapas da produção mundial. Quem exporta bens primários e importa manufaturados tende a captar a menor parte do valor gerado na cadeia.',
      },
      {
        tipo: 'p',
        texto:
          'O termo técnico para a concentração da pauta em produtos primários é primarização da pauta exportadora — conceito útil tanto em Geografia quanto em redação sobre desenvolvimento.',
      },
    ],
    irmas: ['hum-glob-q2'],
  },
  {
    id: 'hum-glob-q2',
    topicId: 'hum-globalizacao',
    conceito: 'Blocos econômicos e graus de integração',
    procedencia: 'autoral',
    dificuldade: 'media',
    eixo: 'fenomenos',
    minutos: 3,
    enunciado: [
      {
        tipo: 'p',
        texto:
          'Um bloco econômico adota tarifa externa comum para produtos vindos de fora, permite livre circulação de mercadorias entre os membros, mas mantém moedas nacionais distintas e não permite livre circulação de trabalhadores.',
      },
      { tipo: 'p', texto: 'Esse bloco corresponde ao estágio de integração denominado' },
    ],
    alternativas: [
      {
        letra: 'A',
        texto: 'zona de livre comércio.',
        correta: false,
        diagnostico:
          'Zona de livre comércio elimina tarifas internas, mas NÃO adota tarifa externa comum. A tarifa comum é o que diferencia o estágio seguinte.',
        tipoErro: 'conceito',
      },
      {
        letra: 'B',
        texto: 'união aduaneira.',
        correta: true,
        diagnostico:
          'Correto. Livre circulação de mercadorias mais tarifa externa comum, sem livre circulação de pessoas nem moeda única, definem a união aduaneira.',
      },
      {
        letra: 'C',
        texto: 'mercado comum.',
        correta: false,
        diagnostico:
          'Mercado comum exige livre circulação também de pessoas, serviços e capitais — o enunciado nega justamente a de trabalhadores.',
        tipoErro: 'leitura',
      },
      {
        letra: 'D',
        texto: 'união econômica e monetária.',
        correta: false,
        diagnostico: 'Esse estágio pressupõe moeda comum, e o enunciado diz que as moedas nacionais permanecem.',
        tipoErro: 'leitura',
      },
      {
        letra: 'E',
        texto: 'acordo de preferência tarifária.',
        correta: false,
        diagnostico:
          'É o estágio mais básico: apenas reduções tarifárias parciais, sem livre circulação plena nem tarifa comum.',
        tipoErro: 'conceito',
      },
    ],
    explicacao: [
      {
        tipo: 'p',
        texto:
          'Os estágios de integração formam uma escada, e cada degrau acrescenta uma exigência ao anterior:',
      },
      {
        tipo: 'lista',
        ordenada: true,
        itens: [
          'Preferência tarifária: descontos parciais nas tarifas entre os membros.',
          'Zona de livre comércio: tarifas internas eliminadas; cada país mantém sua tarifa externa.',
          'União aduaneira: acrescenta tarifa externa comum.',
          'Mercado comum: acrescenta livre circulação de pessoas, serviços e capitais.',
          'União econômica e monetária: acrescenta política econômica coordenada e, em geral, moeda comum.',
        ],
      },
      {
        tipo: 'destaque',
        variante: 'nota',
        titulo: 'Como o item costuma ser montado',
        texto:
          'O enunciado descreve características e você identifica o degrau. Cada detalhe negado no texto ("não permite", "mantém moedas") existe para eliminar um estágio específico.',
      },
    ],
    irmas: ['hum-glob-q1'],
  },

  {
    id: 'hum-glob-q3',
    topicId: 'hum-globalizacao',
    conceito: 'Assimetria entre fluxos de capital e de pessoas',
    procedencia: 'autoral',
    dificuldade: 'media',
    eixo: 'argumentacao',
    minutos: 3,
    enunciado: [
      {
        tipo: 'p',
        texto:
          'Uma empresa transfere recursos financeiros entre filiais em três países em questão de segundos, e as mercadorias que produz cruzam fronteiras sob acordos que reduzem tarifas e prazos. Os trabalhadores que fabricam essas mercadorias, para migrar legalmente a qualquer um desses países, enfrentam exigências de visto, comprovação de renda e cotas anuais.',
      },
      { tipo: 'p', texto: 'A situação descrita evidencia que a globalização' },
    ],
    alternativas: [
      {
        letra: 'A',
        texto: 'eliminou as fronteiras nacionais para todos os tipos de fluxo.',
        correta: false,
        diagnostico:
          'O próprio enunciado mostra fronteiras plenamente ativas — para pessoas. Dizer que elas foram eliminadas contradiz metade do texto.',
        tipoErro: 'leitura',
      },
      {
        letra: 'B',
        texto: 'liberalizou a circulação de capitais e mercadorias muito mais do que a de pessoas.',
        correta: true,
        diagnostico:
          'Correto. Os mesmos Estados que assinam acordos para acelerar dinheiro e carga mantêm e endurecem o controle sobre a entrada de trabalhadores. É a assimetria central do processo.',
      },
      {
        letra: 'C',
        texto: 'ampliou igualmente a mobilidade de capitais, mercadorias e trabalhadores.',
        correta: false,
        diagnostico:
          'A palavra “igualmente” não se sustenta: segundos para o capital, cotas anuais para pessoas. A questão existe justamente por causa dessa diferença.',
        tipoErro: 'leitura',
      },
      {
        letra: 'D',
        texto: 'reduziu o papel dos Estados nacionais na regulação dos fluxos internacionais.',
        correta: false,
        diagnostico:
          'Os Estados continuam decidindo quem entra, sob quais condições e em que número. O que houve foi mudança no que eles regulam com rigor, não abandono da regulação.',
        tipoErro: 'conceito',
      },
      {
        letra: 'E',
        texto: 'transferiu às empresas a competência de conceder vistos de trabalho.',
        correta: false,
        diagnostico:
          'Nada no enunciado atribui essa competência às empresas. Visto, comprovação de renda e cota são instrumentos estatais.',
        tipoErro: 'distrator',
      },
    ],
    explicacao: [
      {
        tipo: 'p',
        texto:
          'Globalização não é um processo homogêneo: ela é seletiva quanto ao que faz circular. Capital e mercadoria encontram acordos, corredores e prazos reduzidos; força de trabalho encontra visto, cota e fiscalização.',
      },
      {
        tipo: 'p',
        texto:
          'Essa assimetria é o pano de fundo de boa parte dos itens de Humanas sobre migração, xenofobia e trabalho internacional. Alternativas que falam em “fim das fronteiras” quase sempre são distratores.',
      },
    ],
    irmas: ['hum-glob-q1', 'hum-glob-q2'],
  },
  {
    id: 'hum-urb-q1',
    topicId: 'hum-urbanizacao',
    conceito: 'Transição demográfica e envelhecimento',
    procedencia: 'autoral',
    dificuldade: 'media',
    eixo: 'fenomenos',
    minutos: 4,
    enunciado: [
      {
        tipo: 'tabela',
        cabecalho: ['Indicador', 'País hipotético, 1980', 'País hipotético, 2020'],
        linhas: [
          ['Taxa de natalidade (por mil hab.)', '34', '13'],
          ['Taxa de mortalidade (por mil hab.)', '10', '7'],
          ['Expectativa de vida (anos)', '60', '76'],
          ['População com 60 anos ou mais', '6%', '15%'],
        ],
        legenda: 'Dados fictícios, construídos para este exercício.',
      },
      { tipo: 'p', texto: 'O conjunto dos dados indica um processo de' },
    ],
    alternativas: [
      {
        letra: 'A',
        texto: 'explosão demográfica, com crescimento populacional acelerado.',
        correta: false,
        diagnostico:
          'A natalidade caiu de 34 para 13. Crescimento acelerado exigiria natalidade alta com mortalidade em queda — não é o quadro apresentado.',
        tipoErro: 'grafico',
      },
      {
        letra: 'B',
        texto: 'transição demográfica, com queda da natalidade e envelhecimento da população.',
        correta: true,
        diagnostico:
          'Correto. Natalidade em forte queda, mortalidade menor, expectativa de vida maior e proporção de idosos crescendo: é a definição do processo.',
      },
      {
        letra: 'C',
        texto: 'êxodo rural, com transferência de população para as cidades.',
        correta: false,
        diagnostico:
          'Nenhum dos indicadores trata de distribuição entre campo e cidade. Não há como concluir isso da tabela.',
        tipoErro: 'grafico',
      },
      {
        letra: 'D',
        texto: 'estagnação demográfica causada pelo aumento da mortalidade.',
        correta: false,
        diagnostico: 'A mortalidade CAIU de 10 para 7. A alternativa afirma o contrário do dado.',
        tipoErro: 'grafico',
      },
      {
        letra: 'E',
        texto: 'crescimento vegetativo negativo, com mais óbitos que nascimentos.',
        correta: false,
        diagnostico:
          'A natalidade (13) ainda é maior que a mortalidade (7), então o crescimento vegetativo permanece positivo.',
        tipoErro: 'calculo',
      },
    ],
    explicacao: [
      {
        tipo: 'p',
        texto:
          'Transição demográfica é a passagem de um regime de natalidade e mortalidade altas para outro de natalidade e mortalidade baixas. O resultado é uma população que cresce mais devagar e envelhece.',
      },
      {
        tipo: 'p',
        texto:
          'Crescimento vegetativo é a diferença entre natalidade e mortalidade. Com 13 e 7, ele é positivo — mas bem menor do que era com 34 e 10. Esse detalhe elimina a alternativa E e costuma ser o ponto decisivo do item.',
      },
      {
        tipo: 'destaque',
        variante: 'nota',
        titulo: 'Consequências que o exame cobra',
        texto:
          'Pressão sobre a previdência, mudança no perfil de demanda por saúde, redução da população em idade escolar e a chamada janela de oportunidade demográfica.',
      },
    ],
    irmas: ['hum-urb-q2'],
  },
  {
    id: 'hum-urb-q2',
    topicId: 'hum-urbanizacao',
    conceito: 'Urbanização acelerada e segregação socioespacial',
    procedencia: 'autoral',
    dificuldade: 'media',
    eixo: 'fenomenos',
    minutos: 3,
    enunciado: [
      {
        tipo: 'p',
        texto:
          'Na segunda metade do século XX, o Brasil passou de majoritariamente rural a majoritariamente urbano em poucas décadas. O crescimento das cidades ocorreu em ritmo muito superior ao da oferta de moradia regular, saneamento e transporte público.',
      },
      { tipo: 'p', texto: 'Uma consequência direta do descompasso descrito é' },
    ],
    alternativas: [
      {
        letra: 'A',
        texto: 'a redução do custo da moradia nas áreas centrais das metrópoles.',
        correta: false,
        diagnostico:
          'Demanda crescendo mais rápido que a oferta pressiona os preços para cima, não para baixo.',
        tipoErro: 'conceito',
      },
      {
        letra: 'B',
        texto: 'a ocupação de áreas periféricas e de risco por população de baixa renda.',
        correta: true,
        diagnostico:
          'Correto. Sem moradia regular acessível, a ocupação se desloca para onde o solo é barato ou não tem valor de mercado — periferias distantes e áreas de risco.',
      },
      {
        letra: 'C',
        texto: 'a diminuição do tempo médio de deslocamento casa-trabalho.',
        correta: false,
        diagnostico:
          'Moradia empurrada para longe do emprego, com transporte insuficiente, aumenta o tempo de deslocamento.',
        tipoErro: 'conceito',
      },
      {
        letra: 'D',
        texto: 'a homogeneização da qualidade dos serviços urbanos entre bairros.',
        correta: false,
        diagnostico:
          'O descompasso produz o contrário: infraestrutura desigual conforme a área, que é a definição de segregação socioespacial.',
        tipoErro: 'conceito',
      },
      {
        letra: 'E',
        texto: 'a interrupção do êxodo rural na década de 1970.',
        correta: false,
        diagnostico: 'O enunciado descreve o período de intensificação da urbanização, não de interrupção.',
        tipoErro: 'leitura',
      },
    ],
    explicacao: [
      {
        tipo: 'p',
        texto:
          'O conceito-chave é segregação socioespacial: a desigualdade social se inscreve no território, e o lugar de moradia passa a determinar acesso a serviço, emprego e tempo livre.',
      },
      {
        tipo: 'p',
        texto:
          'Isso explica por que questões urbanas do exame conectam moradia, mobilidade, saneamento e meio ambiente — são faces do mesmo processo, e essa conexão rende bons argumentos na redação.',
      },
    ],
    irmas: ['hum-urb-q1'],
  },

  {
    id: 'hum-urb-q3',
    topicId: 'hum-urbanizacao',
    conceito: 'Conurbação e gestão metropolitana',
    procedencia: 'autoral',
    dificuldade: 'media',
    eixo: 'fenomenos',
    minutos: 3,
    enunciado: [
      {
        tipo: 'p',
        texto:
          'Três municípios vizinhos cresceram até que suas áreas urbanas se tornassem contínuas: não há mais espaço rural entre elas, moradores dormem em um município e trabalham em outro, e a mesma linha de ônibus cruza as três prefeituras. Cada uma mantém legislação própria de uso do solo e serviços independentes de água e limpeza.',
      },
      { tipo: 'p', texto: 'O processo descrito e o problema que ele cria são, respectivamente,' },
    ],
    alternativas: [
      {
        letra: 'A',
        texto: 'êxodo rural e o esvaziamento do campo.',
        correta: false,
        diagnostico:
          'Êxodo rural é o deslocamento do campo para a cidade. O enunciado descreve cidades que se encostaram umas nas outras, e não movimento de população vinda da zona rural.',
        tipoErro: 'conceito',
      },
      {
        letra: 'B',
        texto: 'conurbação e a necessidade de gestão integrada de serviços entre municípios.',
        correta: true,
        diagnostico:
          'Correto. Conurbação é a fusão das manchas urbanas de municípios vizinhos. Como a cidade real passa a ser única e a administração continua fragmentada, transporte, saneamento e uso do solo exigem coordenação supramunicipal.',
      },
      {
        letra: 'C',
        texto: 'segregação socioespacial e a concentração de renda no centro.',
        correta: false,
        diagnostico:
          'Segregação socioespacial trata da separação entre grupos sociais dentro do território. O enunciado não distingue grupos nem localização de renda: ele descreve a continuidade física entre cidades.',
        tipoErro: 'conceito',
      },
      {
        letra: 'D',
        texto: 'metropolização e a perda da autonomia municipal prevista em lei.',
        correta: false,
        diagnostico:
          'A autonomia municipal não é perdida — é justamente porque ela permanece que a gestão fica fragmentada. Esse é o nó do problema, não sua solução.',
        tipoErro: 'leitura',
      },
      {
        letra: 'E',
        texto: 'transição demográfica e o envelhecimento acelerado da população.',
        correta: false,
        diagnostico:
          'Transição demográfica trata de natalidade, mortalidade e estrutura etária. Nada no enunciado menciona idade ou taxas demográficas.',
        tipoErro: 'distrator',
      },
    ],
    explicacao: [
      {
        tipo: 'p',
        texto:
          'Conurbação é um fato territorial: as manchas urbanas se encontram. A consequência administrativa é que os problemas passam a ser compartilhados — enchente, ônibus, aterro, abastecimento — enquanto as competências continuam divididas por prefeitura.',
      },
      {
        tipo: 'p',
        texto:
          'É por isso que existem regiões metropolitanas e consórcios intermunicipais: são tentativas de fazer a escala da gestão alcançar a escala da cidade real.',
      },
    ],
    irmas: ['hum-urb-q2'],
  },
  {
    id: 'hum-urb-q4',
    topicId: 'hum-urbanizacao',
    conceito: 'Janela demográfica',
    procedencia: 'autoral',
    dificuldade: 'media',
    eixo: 'fenomenos',
    minutos: 4,
    enunciado: [
      {
        tipo: 'p',
        texto:
          'Em um país, a queda da natalidade reduziu a proporção de crianças, enquanto o envelhecimento ainda não elevou muito a proporção de idosos. O resultado é um período em que a parcela da população em idade de trabalhar é a maior da história desse país — situação que os dados indicam como temporária.',
      },
      { tipo: 'p', texto: 'Esse período é conhecido como janela demográfica e representa' },
    ],
    alternativas: [
      {
        letra: 'A',
        texto:
          'uma oportunidade temporária, já que a proporção de pessoas em idade produtiva sustenta menos dependentes por trabalhador.',
        correta: true,
        diagnostico:
          'Correto. Com menos crianças e ainda poucos idosos proporcionalmente, a razão de dependência cai. A oportunidade é econômica e tem prazo: o envelhecimento posterior fecha a janela.',
      },
      {
        letra: 'B',
        texto: 'um período permanente de vantagem econômica, garantido pela queda da natalidade.',
        correta: false,
        diagnostico:
          'O próprio enunciado diz que a situação é temporária. A mesma queda da natalidade que abre a janela é a que, décadas depois, a fecha por envelhecimento.',
        tipoErro: 'leitura',
      },
      {
        letra: 'C',
        texto: 'um momento de crise, causado pela redução absoluta da população total.',
        correta: false,
        diagnostico:
          'Queda da natalidade não significa, de imediato, queda da população total — e o enunciado não afirma redução absoluta. O que muda primeiro é a composição por idade.',
        tipoErro: 'conceito',
      },
      {
        letra: 'D',
        texto: 'o início do envelhecimento populacional, com predomínio de idosos sobre adultos.',
        correta: false,
        diagnostico:
          'O predomínio de idosos vem depois e caracteriza o fechamento da janela, não a janela. No período descrito, quem predomina é a população em idade de trabalhar.',
        tipoErro: 'conceito',
      },
      {
        letra: 'E',
        texto: 'uma fase de crescimento vegetativo negativo, com mais óbitos do que nascimentos.',
        correta: false,
        diagnostico:
          'O crescimento vegetativo pode continuar positivo mesmo com natalidade em queda, desde que os nascimentos superem os óbitos. O enunciado não menciona esse cruzamento.',
        tipoErro: 'conceito',
      },
    ],
    explicacao: [
      {
        tipo: 'p',
        texto:
          'A janela demográfica é consequência aritmética da transição demográfica: a natalidade cai primeiro, o contingente nascido antes da queda chega à idade adulta, e por algumas décadas a base de trabalhadores é proporcionalmente grande diante de crianças e idosos.',
      },
      {
        tipo: 'p',
        texto:
          'O ponto que o ENEM costuma cobrar é o prazo. A janela é a fase em que o país pode ampliar poupança, produtividade e cobertura previdenciária antes de a conta do envelhecimento chegar — e ela não se repete.',
      },
      {
        tipo: 'destaque',
        variante: 'atencao',
        titulo: 'Não confundir',
        texto:
          'Janela demográfica é sobre proporção entre faixas etárias. Crescimento vegetativo é a diferença entre natalidade e mortalidade. Um país pode estar na janela com crescimento vegetativo positivo, negativo ou nulo.',
      },
    ],
    irmas: ['hum-urb-q1'],
  },
  {
    id: 'hum-trab-q1',
    topicId: 'hum-trabalho',
    conceito: 'Fordismo e toyotismo',
    procedencia: 'autoral',
    dificuldade: 'media',
    eixo: 'fenomenos',
    minutos: 3,
    enunciado: [
      {
        tipo: 'p',
        texto:
          'Uma fábrica reorganiza sua produção: abandona os grandes estoques, passa a produzir conforme a demanda, reduz o número de níveis hierárquicos e exige que cada trabalhador opere várias máquinas diferentes.',
      },
      { tipo: 'p', texto: 'As mudanças descritas caracterizam a passagem para o modelo' },
    ],
    alternativas: [
      {
        letra: 'A',
        texto: 'fordista, baseado na produção em massa e no estoque elevado.',
        correta: false,
        diagnostico: 'É o modelo que está sendo ABANDONADO segundo o enunciado. Leia o sentido da mudança.',
        tipoErro: 'leitura',
      },
      {
        letra: 'B',
        texto: 'toyotista, baseado na produção flexível e no trabalhador polivalente.',
        correta: true,
        diagnostico:
          'Correto. Produção sob demanda (just in time), estoque mínimo, hierarquia enxuta e polivalência são as marcas do toyotismo.',
      },
      {
        letra: 'C',
        texto: 'artesanal, baseado na produção individual sob encomenda.',
        correta: false,
        diagnostico:
          'Produção artesanal não usa linha industrial nem múltiplas máquinas por operador; é anterior à industrialização.',
        tipoErro: 'conceito',
      },
      {
        letra: 'D',
        texto: 'taylorista, baseado na máxima especialização de cada tarefa.',
        correta: false,
        diagnostico:
          'Taylorismo fragmenta e especializa ao extremo — o oposto da polivalência descrita no enunciado.',
        tipoErro: 'conceito',
      },
      {
        letra: 'E',
        texto: 'mercantilista, baseado no acúmulo de metais preciosos.',
        correta: false,
        diagnostico: 'Mercantilismo é uma política econômica dos séculos XV a XVIII, não um modelo de organização fabril.',
        tipoErro: 'conceito',
      },
    ],
    explicacao: [
      {
        tipo: 'tabela',
        cabecalho: ['Aspecto', 'Fordismo', 'Toyotismo'],
        linhas: [
          ['Produção', 'em massa, padronizada', 'flexível, conforme a demanda'],
          ['Estoque', 'alto', 'mínimo (just in time)'],
          ['Trabalhador', 'especializado em uma tarefa', 'polivalente, opera várias máquinas'],
          ['Hierarquia', 'muitos níveis', 'enxuta'],
        ],
      },
      {
        tipo: 'p',
        texto:
          'O exame costuma cobrar a consequência social, não só a técnica: a flexibilidade aumenta a produtividade e, ao mesmo tempo, transfere mais responsabilidade e insegurança para o trabalhador.',
      },
    ],
    irmas: ['hum-trab-q2'],
  },
  {
    id: 'hum-trab-q2',
    topicId: 'hum-trabalho',
    conceito: 'Precarização e trabalho por plataforma',
    procedencia: 'autoral',
    dificuldade: 'media',
    eixo: 'argumentacao',
    minutos: 3,
    enunciado: [
      {
        tipo: 'p',
        texto:
          'Trabalhadores de aplicativos de entrega definem seus horários, mas têm a remuneração, a distribuição das tarefas e a avaliação de desempenho determinadas por algoritmos da plataforma, sem vínculo empregatício formal.',
      },
      { tipo: 'p', texto: 'A situação descrita evidencia que, nesse tipo de trabalho,' },
    ],
    alternativas: [
      {
        letra: 'A',
        texto: 'a autonomia sobre o horário coexiste com forte controle sobre as condições de trabalho.',
        correta: true,
        diagnostico:
          'Correto. O enunciado apresenta as duas faces: liberdade de jornada e determinação algorítmica de remuneração, tarefas e avaliação.',
      },
      {
        letra: 'B',
        texto: 'a ausência de vínculo formal elimina qualquer forma de subordinação.',
        correta: false,
        diagnostico:
          'A subordinação continua — mudou de forma. Quem define pagamento, tarefa e avaliação exerce controle, com ou sem carteira assinada.',
        tipoErro: 'conceito',
      },
      {
        letra: 'C',
        texto: 'o trabalhador detém o controle integral sobre sua remuneração.',
        correta: false,
        diagnostico: 'O enunciado diz explicitamente que a remuneração é determinada pela plataforma.',
        tipoErro: 'leitura',
      },
      {
        letra: 'D',
        texto: 'a tecnologia suprimiu a divisão entre quem organiza e quem executa o trabalho.',
        correta: false,
        diagnostico:
          'A divisão permanece: a plataforma organiza, o trabalhador executa. O que mudou foi o meio pelo qual a organização se impõe.',
        tipoErro: 'distrator',
      },
      {
        letra: 'E',
        texto: 'as condições descritas correspondem ao modelo fordista de produção.',
        correta: false,
        diagnostico:
          'Fordismo pressupõe vínculo estável, jornada fixa e produção em massa — o oposto do quadro apresentado.',
        tipoErro: 'conceito',
      },
    ],
    explicacao: [
      {
        tipo: 'p',
        texto:
          'O conceito que organiza o item é o de precarização: perda de garantias associadas ao vínculo formal — férias, décimo terceiro, previdência, limite de jornada — sem que a subordinação desapareça.',
      },
      {
        tipo: 'p',
        texto:
          'A novidade é o controle exercido por algoritmo, que costuma ser descrito como gerenciamento algorítmico. Ele torna o controle mais difuso e mais difícil de identificar juridicamente, embora seja tão efetivo quanto o de um supervisor.',
      },
      {
        tipo: 'destaque',
        variante: 'nota',
        titulo: 'Bom repertório de redação',
        texto:
          'Este tema conecta tecnologia, direitos trabalhistas e desigualdade — combinação que serve a muitos temas de redação sobre o mundo do trabalho.',
      },
    ],
    irmas: ['hum-trab-q1'],
  },

  {
    id: 'hum-trab-q3',
    topicId: 'hum-trabalho',
    conceito: 'Taylorismo e separação entre concepção e execução',
    procedencia: 'autoral',
    dificuldade: 'media',
    eixo: 'fenomenos',
    minutos: 3,
    enunciado: [
      {
        tipo: 'p',
        texto:
          'Em uma fábrica, engenheiros cronometram cada movimento dos operários, definem a sequência exata de gestos que deve ser seguida e distribuem essas instruções por escrito. Ao trabalhador cabe repetir a tarefa no tempo determinado; decidir como executá-la deixa de fazer parte do seu trabalho.',
      },
      { tipo: 'p', texto: 'A organização do trabalho descrita corresponde ao' },
    ],
    alternativas: [
      {
        letra: 'A',
        texto: 'taylorismo, pela separação entre quem planeja e quem executa a tarefa.',
        correta: true,
        diagnostico:
          'Correto. Cronometragem, prescrição do gesto e retirada da decisão do operário são exatamente os princípios da administração científica do trabalho.',
      },
      {
        letra: 'B',
        texto: 'toyotismo, pela exigência de polivalência e autonomia do trabalhador.',
        correta: false,
        diagnostico:
          'O toyotismo pede trabalhador que opera várias máquinas e intervém no processo. O enunciado descreve o oposto: um gesto único, prescrito por outro.',
        tipoErro: 'conceito',
      },
      {
        letra: 'C',
        texto: 'artesanato, pelo domínio completo do processo produtivo por quem o executa.',
        correta: false,
        diagnostico:
          'No trabalho artesanal quem executa também concebe. Aqui a concepção foi deliberadamente transferida para os engenheiros.',
        tipoErro: 'conceito',
      },
      {
        letra: 'D',
        texto: 'gerenciamento algorítmico, pelo controle exercido por sistemas automatizados.',
        correta: false,
        diagnostico:
          'O controle descrito é exercido por pessoas — engenheiros com cronômetro e instruções escritas —, não por plataformas digitais. A lógica de controle é parecida; a tecnologia e a época, não.',
        tipoErro: 'conceito',
      },
      {
        letra: 'E',
        texto: 'cooperativismo, pela gestão coletiva das decisões de produção.',
        correta: false,
        diagnostico:
          'Não há decisão coletiva em nenhum ponto: as instruções descem prontas de um setor para outro.',
        tipoErro: 'distrator',
      },
    ],
    explicacao: [
      {
        tipo: 'p',
        texto:
          'O taylorismo transforma o saber do ofício em procedimento escrito e o transfere para a gerência. O ganho de produtividade vem junto com a perda de controle do trabalhador sobre o próprio trabalho — e as duas coisas fazem parte do mesmo método.',
      },
      {
        tipo: 'p',
        texto:
          'Fordismo e taylorismo costumam aparecer juntos, mas não são sinônimos: o taylorismo organiza o gesto; o fordismo organiza o fluxo, com linha de montagem, produção em massa e estoque alto.',
      },
    ],
    irmas: ['hum-trab-q1'],
  },
  {
    id: 'hum-trab-q4',
    topicId: 'hum-trabalho',
    conceito: 'Precarização: perda de garantias sem perda de subordinação',
    procedencia: 'autoral',
    dificuldade: 'dificil',
    eixo: 'argumentacao',
    minutos: 4,
    enunciado: [
      {
        tipo: 'p',
        texto:
          'Uma empresa dispensa parte de seus empregados e recontrata as mesmas pessoas como prestadoras de serviço com empresa própria. As atividades, o horário de entrada, as metas e a chefia permanecem os mesmos; férias remuneradas, décimo terceiro e recolhimento previdenciário pelo contratante deixam de existir.',
      },
      { tipo: 'p', texto: 'A situação descrita caracteriza precarização porque' },
    ],
    alternativas: [
      {
        letra: 'A',
        texto: 'houve redução da jornada de trabalho sem redução proporcional da remuneração.',
        correta: false,
        diagnostico:
          'O enunciado não menciona mudança de jornada: horário e metas permanecem os mesmos. Precarização aqui não passa por tempo de trabalho.',
        tipoErro: 'leitura',
      },
      {
        letra: 'B',
        texto: 'a subordinação ao contratante permaneceu, enquanto as garantias associadas a ela foram retiradas.',
        correta: true,
        diagnostico:
          'Correto. O vínculo real de trabalho continua — mesma chefia, mesmo horário, mesmas metas —, mas a forma contratual passa a excluir os direitos que acompanham esse vínculo. Essa dissociação é o núcleo da precarização.',
      },
      {
        letra: 'C',
        texto: 'os trabalhadores passaram a ter autonomia plena sobre o próprio trabalho.',
        correta: false,
        diagnostico:
          'Autonomia plena é incompatível com manter chefia, horário e metas definidos pela empresa. A autonomia aqui é formal, e o enunciado deixa isso explícito.',
        tipoErro: 'leitura',
      },
      {
        letra: 'D',
        texto: 'a empresa ampliou o quadro de pessoal e diluiu as responsabilidades trabalhistas.',
        correta: false,
        diagnostico:
          'Não houve ampliação de quadro: são as mesmas pessoas, sob outro contrato. O que mudou foi o enquadramento jurídico, não o tamanho da equipe.',
        tipoErro: 'leitura',
      },
      {
        letra: 'E',
        texto: 'a produtividade caiu em razão da mudança no tipo de contrato.',
        correta: false,
        diagnostico:
          'Nada no enunciado trata de produtividade. A questão é sobre a relação entre subordinação e garantias, não sobre desempenho.',
        tipoErro: 'distrator',
      },
    ],
    explicacao: [
      {
        tipo: 'p',
        texto:
          'O direito do trabalho associa garantias à subordinação: quem trabalha sob ordens de outro recebe proteções que compensam essa assimetria. Precarização é o arranjo que mantém a subordinação e dispensa as proteções.',
      },
      {
        tipo: 'p',
        texto:
          'Por isso o critério usado em análises do tema não é o nome do contrato, e sim os fatos: quem define horário, quem dá ordens, quem fixa metas, quem pode ser substituído. É o mesmo raciocínio aplicado ao trabalho por plataforma.',
      },
      {
        tipo: 'destaque',
        variante: 'nota',
        titulo: 'Item de Humanas, não de Direito',
        texto:
          'O ENEM não cobra se determinado contrato é válido — isso é decisão judicial. Ele cobra a análise social: o que muda, e para quem, quando a forma do contrato se descola da relação real de trabalho.',
      },
    ],
    irmas: ['hum-trab-q2'],
  },
  {
    id: 'hum-filo-q1',
    topicId: 'hum-filosofia-politica',
    conceito: 'Contratualistas: Hobbes, Locke e Rousseau',
    procedencia: 'autoral',
    dificuldade: 'media',
    eixo: 'argumentacao',
    minutos: 3,
    enunciado: [
      {
        tipo: 'p',
        texto:
          'Um autor sustenta que, no estado de natureza, os homens já possuem direitos — entre eles o direito à vida, à liberdade e à propriedade — e que o governo é instituído para protegê-los. Se o governante viola sistematicamente esses direitos, o povo tem legitimidade para resistir.',
      },
      { tipo: 'p', texto: 'A concepção apresentada é característica do pensamento de' },
    ],
    alternativas: [
      {
        letra: 'A',
        texto: 'Thomas Hobbes, para quem o soberano deve ter poder absoluto.',
        correta: false,
        diagnostico:
          'Em Hobbes, o contrato transfere poder ao soberano justamente para evitar a guerra de todos contra todos — e o direito de resistência é o que ele quer eliminar.',
        tipoErro: 'conceito',
      },
      {
        letra: 'B',
        texto: 'John Locke, para quem o governo tem finalidade limitada e pode ser destituído.',
        correta: true,
        diagnostico:
          'Correto. Direitos naturais anteriores ao Estado, governo com finalidade limitada de protegê-los e direito de resistência são os três pilares do pensamento de Locke.',
      },
      {
        letra: 'C',
        texto: 'Nicolau Maquiavel, para quem a manutenção do poder é o critério da ação política.',
        correta: false,
        diagnostico:
          'Maquiavel analisa a conquista e a conservação do poder; não é um teórico do contrato nem dos direitos naturais.',
        tipoErro: 'conceito',
      },
      {
        letra: 'D',
        texto: 'Jean-Jacques Rousseau, para quem a soberania reside na vontade geral.',
        correta: false,
        diagnostico:
          'Rousseau é contratualista, mas seu eixo é a vontade geral e a crítica à propriedade como origem da desigualdade — não a proteção da propriedade como fim do governo.',
        tipoErro: 'distrator',
      },
      {
        letra: 'E',
        texto: 'Karl Marx, para quem o Estado expressa interesses de classe.',
        correta: false,
        diagnostico: 'Marx é posterior e critica o próprio contratualismo; não descreve estado de natureza.',
        tipoErro: 'conceito',
      },
    ],
    explicacao: [
      {
        tipo: 'tabela',
        cabecalho: ['Autor', 'Estado de natureza', 'Função do contrato', 'Consequência política'],
        linhas: [
          ['Hobbes', 'guerra de todos contra todos', 'garantir segurança', 'soberano forte, sem direito de resistência'],
          ['Locke', 'há direitos naturais, mas sem árbitro', 'proteger vida, liberdade e propriedade', 'governo limitado e direito de resistência'],
          ['Rousseau', 'liberdade perdida com a propriedade', 'recuperar a liberdade pela vontade geral', 'soberania popular'],
        ],
      },
      {
        tipo: 'p',
        texto:
          'A tabela acima resolve a maior parte dos itens sobre contratualismo. A pergunta que identifica o autor é sempre a mesma: de que o contrato serve para escapar, e o que ele autoriza depois?',
      },
    ],
    irmas: ['hum-filo-q2'],
  },
  {
    id: 'hum-filo-q2',
    topicId: 'hum-filosofia-politica',
    conceito: 'Separação de poderes e limitação do poder',
    procedencia: 'autoral',
    dificuldade: 'media',
    eixo: 'argumentacao',
    minutos: 3,
    enunciado: [
      {
        tipo: 'citacao',
        texto:
          '“Para que não se possa abusar do poder, é preciso que, pela disposição das coisas, o poder freie o poder.”',
        fonte: 'Formulação clássica do princípio da separação de poderes, atribuída a Montesquieu.',
      },
      { tipo: 'p', texto: 'O princípio enunciado fundamenta-se na ideia de que' },
    ],
    alternativas: [
      {
        letra: 'A',
        texto: 'a virtude pessoal dos governantes é suficiente para evitar o abuso.',
        correta: false,
        diagnostico:
          'O princípio existe exatamente porque a virtude pessoal NÃO é considerada garantia suficiente — por isso a limitação é institucional.',
        tipoErro: 'conceito',
      },
      {
        letra: 'B',
        texto: 'a limitação do poder deve ser institucional, e não depender da boa vontade de quem governa.',
        correta: true,
        diagnostico:
          'Correto. "Pela disposição das coisas" indica arranjo institucional: são as instituições que se controlam mutuamente.',
      },
      {
        letra: 'C',
        texto: 'o poder deve ser concentrado para ser exercido com eficiência.',
        correta: false,
        diagnostico: 'É o oposto do enunciado, que propõe justamente dividir para que uma parte contenha a outra.',
        tipoErro: 'leitura',
      },
      {
        letra: 'D',
        texto: 'a soberania popular dispensa qualquer mecanismo de controle.',
        correta: false,
        diagnostico:
          'A formulação não trata da origem do poder, e sim do seu controle. São questões independentes.',
        tipoErro: 'distrator',
      },
      {
        letra: 'E',
        texto: 'apenas o Judiciário deve exercer controle sobre os demais poderes.',
        correta: false,
        diagnostico:
          'O princípio prevê controle recíproco entre os poderes, não a supremacia de um deles sobre os outros.',
        tipoErro: 'conceito',
      },
    ],
    explicacao: [
      {
        tipo: 'p',
        texto:
          'A separação de poderes não é apenas uma divisão de tarefas: é um desenho institucional em que cada poder tem meios de conter os outros — o que se chama sistema de freios e contrapesos.',
      },
      {
        tipo: 'p',
        texto:
          'Esse princípio é o critério que o exame usa para avaliar medidas autoritárias em vários contextos históricos: quando um ato remove o controle de um poder sobre outro, ele concentra poder.',
      },
    ],
    irmas: ['hum-filo-q1', 'hum-dit-q1'],
  },
  {
    id: 'hum-filo-q3',
    topicId: 'hum-filosofia-politica',
    conceito: 'Hobbes e o estado de natureza',
    procedencia: 'autoral',
    dificuldade: 'media',
    eixo: 'argumentacao',
    minutos: 3,
    enunciado: [
      {
        tipo: 'p',
        texto:
          'Um autor sustenta que, fora da sociedade política, não existe autoridade capaz de conter os conflitos entre indivíduos igualmente capazes de se ferir, o que resulta em insegurança permanente. Para escapar dessa condição, os indivíduos transferem seu poder a um soberano, cuja autoridade não pode ser contestada sem que se retorne à desordem anterior.',
      },
      { tipo: 'p', texto: 'A concepção apresentada corresponde à de' },
    ],
    alternativas: [
      {
        letra: 'A',
        texto: 'Hobbes, para quem o contrato busca segurança e resulta em soberano forte.',
        correta: true,
        diagnostico:
          'Correto. A insegurança como ponto de partida e a transferência de poder a um soberano que não pode ser contestado são as marcas da formulação hobbesiana.',
      },
      {
        letra: 'B',
        texto: 'Locke, para quem existem direitos anteriores ao Estado e o governo é limitado.',
        correta: false,
        diagnostico:
          'Em Locke há direitos naturais antes do Estado e o governo pode ser destituído quando os viola. O texto afirma o contrário: a autoridade não pode ser contestada.',
        tipoErro: 'conceito',
      },
      {
        letra: 'C',
        texto: 'Rousseau, para quem a soberania pertence à vontade geral do povo.',
        correta: false,
        diagnostico:
          'Em Rousseau a soberania permanece com o corpo dos cidadãos, não é transferida a um soberano separado deles. O texto descreve justamente uma transferência.',
        tipoErro: 'conceito',
      },
      {
        letra: 'D',
        texto: 'Montesquieu, para quem o poder deve ser dividido entre instâncias que se limitam.',
        correta: false,
        diagnostico:
          'Montesquieu trata da organização interna do poder por freios e contrapesos, não da origem do Estado a partir do estado de natureza. O texto discute origem, não divisão.',
        tipoErro: 'conceito',
      },
      {
        letra: 'E',
        texto: 'Maquiavel, para quem a política se explica pela virtude do governante diante da fortuna.',
        correta: false,
        diagnostico:
          'Maquiavel não é contratualista: ele não explica a origem do poder por um acordo. O texto é explicitamente contratualista, o que já o elimina.',
        tipoErro: 'distrator',
      },
    ],
    explicacao: [
      {
        tipo: 'p',
        texto:
          'Os contratualistas partem de uma mesma pergunta — por que obedecer ao poder político? — e chegam a respostas diferentes, porque descrevem o estado de natureza de maneiras diferentes.',
      },
      {
        tipo: 'lista',
        itens: [
          'Hobbes: estado de natureza inseguro → contrato busca proteção → soberano forte, sem direito de resistência.',
          'Locke: há direitos naturais → contrato os protege → governo limitado, com direito de resistência.',
          'Rousseau: liberdade se perde com a propriedade → contrato devolve liberdade coletiva → soberania da vontade geral.',
        ],
      },
      {
        tipo: 'p',
        texto:
          'A distinção decisiva em prova costuma ser uma só: o que acontece quando o governante abusa? Em Hobbes, não há remédio legítimo; em Locke, há resistência; em Rousseau, o povo é o soberano e não delega isso.',
      },
    ],
    irmas: ['hum-filo-q1'],
  },
  {
    id: 'hum-filo-q4',
    topicId: 'hum-filosofia-politica',
    conceito: 'Rousseau, propriedade e vontade geral',
    procedencia: 'autoral',
    dificuldade: 'dificil',
    eixo: 'argumentacao',
    minutos: 4,
    enunciado: [
      {
        tipo: 'citacao',
        texto:
          '“O primeiro que, tendo cercado um terreno, se lembrou de dizer: isto é meu, e encontrou pessoas bastante simples para acreditá-lo, foi o verdadeiro fundador da sociedade civil.”',
        fonte: 'Formulação clássica atribuída a Rousseau, no Discurso sobre a origem da desigualdade.',
      },
      { tipo: 'p', texto: 'No conjunto do pensamento desse autor, a passagem sustenta que' },
    ],
    alternativas: [
      {
        letra: 'A',
        texto: 'a propriedade privada é a garantia primeira da liberdade individual.',
        correta: false,
        diagnostico:
          'Essa é a posição de Locke, não a de Rousseau. Aqui a propriedade aparece na origem da desigualdade, não como proteção da liberdade.',
        tipoErro: 'conceito',
      },
      {
        letra: 'B',
        texto: 'a desigualdade social tem origem histórica, e não natural.',
        correta: true,
        diagnostico:
          'Correto. Ao situar a desigualdade em um ato fundador — o cercamento aceito pelos demais —, o autor a apresenta como construção humana, e portanto transformável, não como ordem da natureza.',
      },
      {
        letra: 'C',
        texto: 'o estado de natureza era marcado pela guerra de todos contra todos.',
        correta: false,
        diagnostico:
          'A guerra de todos contra todos é a descrição hobbesiana. Em Rousseau, o conflito aparece depois, com a propriedade, e não antes dela.',
        tipoErro: 'conceito',
      },
      {
        letra: 'D',
        texto: 'a soberania deve ser transferida integralmente a um governante inconteste.',
        correta: false,
        diagnostico:
          'Rousseau defende que a soberania permanece no corpo dos cidadãos, como vontade geral. Transferência integral e irrevogável é formulação de Hobbes.',
        tipoErro: 'conceito',
      },
      {
        letra: 'E',
        texto: 'a separação entre os poderes é condição para conter o abuso de autoridade.',
        correta: false,
        diagnostico:
          'Freios e contrapesos são o tema de Montesquieu. A passagem trata da origem da desigualdade, não do arranjo institucional do poder.',
        tipoErro: 'distrator',
      },
    ],
    explicacao: [
      {
        tipo: 'p',
        texto:
          'A força do argumento está no “encontrou pessoas bastante simples para acreditá-lo”: a propriedade não se impõe por natureza, mas por reconhecimento social. O que é socialmente construído pode ser socialmente modificado — daí a carga crítica da passagem.',
      },
      {
        tipo: 'p',
        texto:
          'Por isso Rousseau é frequentemente convocado em questões sobre desigualdade, políticas redistributivas e soberania popular: a desigualdade, nele, é resultado de arranjos humanos, não destino.',
      },
      {
        tipo: 'destaque',
        variante: 'nota',
        titulo: 'Como não confundir os três',
        texto:
          'Diante de uma citação, pergunte qual é o problema que o autor quer resolver: insegurança (Hobbes), arbítrio do governante sobre direitos prévios (Locke) ou desigualdade e perda da liberdade (Rousseau).',
      },
    ],
    irmas: ['hum-filo-q1', 'hum-filo-q3'],
  },
];
