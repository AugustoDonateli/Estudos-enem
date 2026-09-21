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
];
