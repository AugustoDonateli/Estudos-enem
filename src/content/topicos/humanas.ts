import type { ConteudoAssunto } from '../tipos';

/**
 * Conteúdo pedagógico dos assuntos desta área — os 9 blocos de cada um.
 *
 * Fica separado dos metadados (src/content/catalogo.ts) porque o motor de
 * estudo e o dashboard só precisam dos metadados. Essa separação mantém o
 * bundle inicial pequeno: o texto de um assunto só é baixado quando ele é
 * aberto.
 */
export const CONTEUDOS_HUMANAS: Record<string, ConteudoAssunto> = {
  'hum-vargas': {
    precisaSaber: [
      'O período se divide em Governo Provisório (1930-34), Constitucional (1934-37) e Estado Novo (1937-45).',
      'O Estado Novo foi uma ditadura: Congresso fechado, censura e centralização.',
      'Direitos trabalhistas foram concedidos pelo Estado e acompanhados de tutela sobre os sindicatos.',
      'Houve forte investimento em indústria de base e uso sistemático da propaganda estatal.',
    ],
    explicacao: [
      {
        tipo: 'p',
        texto:
          'Vargas chega ao poder em 1930 rompendo com o arranjo político da Primeira República, que era dominado por oligarquias estaduais. O que ele constrói no lugar é um Estado central mais forte, com capacidade de intervir na economia e nas relações de trabalho.',
      },
      {
        tipo: 'p',
        texto:
          'A parte que mais cai no exame é a ambivalência dessa construção. O governo amplia direitos do trabalhador urbano e, ao mesmo tempo, coloca os sindicatos sob tutela do Estado e reprime a organização autônoma. Os direitos aparecem como dádiva, não como conquista — o que cria um vínculo direto entre trabalhador e governante.',
      },
      {
        tipo: 'p',
        texto:
          'A partir de 1937, com o Estado Novo, o regime se torna abertamente ditatorial: Congresso fechado, censura à imprensa, propaganda oficial organizada e centralização das decisões. É nesse contexto que se consolida a legislação trabalhista e se investe em indústria de base.',
      },
    ],
    conceitos: [
      { termo: 'Corporativismo', definicao: 'Modelo em que o Estado organiza e arbitra os interesses de patrões e trabalhadores, absorvendo o conflito em vez de deixá-lo livre.' },
      { termo: 'Trabalhismo', definicao: 'Política de concessão de direitos trabalhistas associada à construção de legitimidade popular para o governante.' },
      { termo: 'Estado Novo', definicao: 'Regime ditatorial instaurado em 1937, com Congresso fechado, censura e centralização do poder no Executivo.' },
      { termo: 'Populismo (uso historiográfico)', definicao: 'Conceito usado para descrever a relação direta entre líder e massas urbanas. É objeto de disputa entre historiadores — o exame costuma cobrá-lo como leitura, não como fato.' },
      { termo: 'Industrialização por substituição de importações', definicao: 'Estratégia de produzir internamente o que antes era importado, com apoio estatal e proteção tarifária.' },
    ],
    exemplo: {
      enunciado:
        'Como analisar a afirmação: "a legislação trabalhista da Era Vargas foi uma conquista dos trabalhadores"?',
      passos: [
        {
          titulo: 'O que é verdadeiro na afirmação',
          texto:
            'Havia mobilização operária desde as primeiras décadas do século, e as pautas atendidas vinham dessa história de luta.',
        },
        {
          titulo: 'O que ela omite',
          texto:
            'Os direitos foram concedidos em um arranjo que subordinava os sindicatos ao Estado e reprimia a organização independente.',
        },
        {
          titulo: 'Como o exame trata',
          texto:
            'A resposta correta costuma ser a que segura os dois lados: ampliação de direitos com restrição de autonomia.',
        },
      ],
      conclusao:
        'Nem "dádiva do governante" nem "conquista autônoma": a formulação mais precisa reconhece a pressão social e a forma tutelada como ela foi atendida.',
    },
    noEnem: {
      texto:
        'O item costuma trazer um trecho de lei, um cartaz de propaganda, uma charge ou um texto historiográfico, e pedir a interpretação do processo — quase nunca uma data. O eixo cobrado é compreender fenômenos e construir argumentação a partir de documento.',
      eixos: ['fenomenos', 'argumentacao'],
      sinais: [
        'O documento associa o governante a conquistas dos trabalhadores',
        'O texto menciona sindicato, CLT, Ministério do Trabalho',
        'Aparece propaganda oficial ou censura',
        'O comando pede a "relação entre" direitos e controle',
      ],
    },
    erros: [
      {
        erro: 'Ler o período apenas como ditadura ou apenas como avanço social',
        porque: 'As duas coisas ocorreram simultaneamente, e a alternativa correta quase sempre articula ambas.',
      },
      {
        erro: 'Supor que os direitos alcançaram igualmente o trabalhador rural',
        porque: 'A legislação do período teve foco urbano-industrial; a extensão ao campo é muito posterior.',
      },
      {
        erro: 'Confundir Estado Novo com o período todo',
        porque: 'O Estado Novo é a fase ditatorial a partir de 1937. Antes dela houve inclusive um período constitucional.',
      },
      {
        erro: 'Tratar "populismo" como fato consensual',
        porque:
          'É uma categoria de análise disputada entre historiadores. Alternativas que a apresentam como explicação única costumam simplificar demais.',
      },
    ],
    questoes: ['hum-vargas-q1', 'hum-vargas-q2'],
    revisaoRapida: [
      '1930-34 provisório · 1934-37 constitucional · 1937-45 Estado Novo (ditadura).',
      'Direitos concedidos + sindicato tutelado = corporativismo.',
      'Censura e propaganda oficial caminharam juntas.',
      'Investimento em indústria de base e centralização do Estado.',
    ],
  },
  'hum-ditadura': {
    precisaSaber: [
      'O regime se instala em 1964 e se sustenta por atos institucionais que concentram poder no Executivo.',
      'O AI-5 (1968) marca a fase mais repressiva: Congresso fechado, cassações, fim do habeas corpus para crimes políticos.',
      'Houve crescimento econômico acelerado no fim dos anos 1960 e início dos 1970, acompanhado de concentração de renda.',
      'A abertura foi lenta e negociada; a eleição presidencial de 1985 ainda foi indireta.',
      'A Constituição de 1988 consolidou a redemocratização.',
    ],
    explicacao: [
      {
        tipo: 'p',
        texto:
          'O regime militar brasileiro não suspendeu formalmente todas as instituições: manteve Congresso, eleições e partidos, mas esvaziou seu poder por meio de atos institucionais que se sobrepunham à ordem constitucional.',
      },
      {
        tipo: 'p',
        texto:
          'Essa forma — manter a aparência institucional enquanto se remove o conteúdo — é o que o exame mais cobra. Por isso os itens costumam apresentar o texto de um ato e pedir o efeito dele sobre o equilíbrio entre os poderes e sobre as garantias individuais.',
      },
      {
        tipo: 'p',
        texto:
          'A saída do regime combinou pressão social ampla com negociação entre setores do regime e da oposição. O resultado é uma transição sem ruptura: parte das estruturas e dos atores permaneceu, e o acerto de contas com o período foi limitado.',
      },
    ],
    conceitos: [
      { termo: 'Ato institucional', definicao: 'Norma editada pelo regime com força superior à Constituição, usada para concentrar poder no Executivo.' },
      { termo: 'Habeas corpus', definicao: 'Garantia jurídica contra prisão ilegal. Sua suspensão para crimes políticos retirou o controle judicial sobre prisões por motivação política.' },
      { termo: 'Bipartidarismo imposto', definicao: 'Redução forçada do sistema partidário a um partido de apoio ao governo e um de oposição consentida.' },
      { termo: 'Milagre econômico', definicao: 'Fase de crescimento acelerado do PIB no fim dos anos 1960 e início dos 1970, acompanhada de concentração de renda e endividamento externo.' },
      { termo: 'Transição negociada', definicao: 'Mudança de regime conduzida por acordo entre elites do regime e da oposição, sem ruptura institucional.' },
    ],
    exemplo: {
      enunciado:
        'Um item traz o texto de um ato que autoriza o Executivo a cassar mandatos e suspender direitos políticos sem apreciação judicial. Como analisar sem lembrar a data?',
      passos: [
        { titulo: 'Identifique quem ganha poder', texto: 'O Executivo passa a decidir sozinho sobre mandatos parlamentares.' },
        { titulo: 'Identifique o que se perde', texto: 'O controle judicial sobre o ato — ou seja, some o freio institucional.' },
        {
          titulo: 'Conclua pelo efeito',
          texto: 'Concentração de poder e supressão de garantias, independentemente do ano em que isso ocorreu.',
        },
      ],
      conclusao:
        'A análise do conteúdo do ato basta para responder. Datas ajudam a contextualizar, mas raramente são o que está sendo cobrado.',
    },
    noEnem: {
      texto:
        'Os itens trazem trechos de atos institucionais, charges da época, letras de música censuradas ou textos de historiadores. O comando pede o efeito político de uma medida, a caracterização do regime ou o sentido da transição — quase nunca uma cronologia pura.',
      eixos: ['fenomenos', 'argumentacao'],
      sinais: [
        'Aparece o texto de um ato normativo',
        'O documento é uma charge, canção ou cartaz censurado',
        'O comando pergunta sobre relação entre os poderes',
        'O texto trata de anistia, abertura ou eleições indiretas',
      ],
    },
    erros: [
      {
        erro: 'Supor que o regime fechou todas as instituições desde o início',
        porque:
          'Congresso, eleições e partidos continuaram existindo, esvaziados. Entender isso é entender o modo de operação do regime.',
      },
      {
        erro: 'Tratar o crescimento econômico como prova de bem-estar generalizado',
        porque: 'O crescimento veio acompanhado de concentração de renda e de arrocho salarial.',
      },
      {
        erro: 'Descrever a redemocratização como ruptura total',
        porque: 'A transição foi negociada e manteve continuidades institucionais e de pessoal político.',
      },
      {
        erro: 'Confundir a mobilização pelas diretas com a eleição de 1985',
        porque: 'A mobilização foi massiva, mas a eleição presidencial seguinte ainda foi indireta.',
      },
    ],
    questoes: ['hum-dit-q1', 'hum-dit-q2'],
    revisaoRapida: [
      'Atos institucionais concentram poder no Executivo.',
      'AI-5 (1968): fase mais dura; fim do habeas corpus para crimes políticos.',
      'Crescimento econômico com concentração de renda.',
      'Transição negociada; 1985 indireta; CF/88 consolida a redemocratização.',
    ],
  },
  'hum-cidadania': {
    precisaSaber: [
      'Direitos civis (liberdades), políticos (participação) e sociais (saúde, educação, trabalho) formam dimensões distintas da cidadania.',
      'Direitos sociais exigem prestação positiva do Estado, não apenas não interferência.',
      'Igualdade formal é tratamento idêntico na lei; igualdade material busca equiparar condições reais.',
      'A CF/88 é o marco da redemocratização e consolidou direitos sociais no Brasil.',
    ],
    explicacao: [
      {
        tipo: 'p',
        texto:
          'Cidadania não é um bloco único. Ela costuma ser analisada em dimensões: direitos civis (ir e vir, expressar-se, ter propriedade), políticos (votar, ser votado, organizar-se) e sociais (saúde, educação, trabalho, previdência).',
      },
      {
        tipo: 'p',
        texto:
          'A diferença prática entre elas é o que o Estado precisa fazer. Um direito civil exige sobretudo que ninguém interfira. Um direito social exige que o Estado forneça algo — hospital, escola, política pública. Por isso direitos sociais aparecem associados a orçamento e a política pública nas questões.',
      },
      {
        tipo: 'p',
        texto:
          'A distinção decisiva para argumentar bem é entre igualdade formal e material. Tratar todos igualmente diante de desigualdades históricas pode preservar a desigualdade; por isso existem políticas que tratam situações diferentes de modo diferente, com o objetivo de equiparar condições.',
      },
    ],
    conceitos: [
      { termo: 'Direitos civis', definicao: 'Liberdades individuais: ir e vir, expressão, crença, propriedade, devido processo legal.' },
      { termo: 'Direitos políticos', definicao: 'Participação no poder: votar, ser votado, associar-se, manifestar-se politicamente.' },
      { termo: 'Direitos sociais', definicao: 'Condições materiais para exercer os demais: educação, saúde, trabalho, moradia, previdência.' },
      { termo: 'Igualdade formal', definicao: 'Todos são iguais perante a lei; a norma se aplica do mesmo modo a todos.' },
      { termo: 'Igualdade material', definicao: 'Busca equiparar condições reais de exercício de direitos, admitindo tratamento diferenciado para situações desiguais.' },
      { termo: 'Universalidade', definicao: 'Característica de um direito garantido a todos independentemente de contribuição, renda ou condição — como o acesso à saúde pública na CF/88.' },
    ],
    exemplo: {
      enunciado:
        'Uma política reserva vagas em concursos para pessoas com deficiência. Como justificar isso sem contradizer a igualdade?',
      passos: [
        {
          titulo: 'Reconheça a objeção',
          texto: 'Do ponto de vista da igualdade formal, reservar vagas trata candidatos de modo diferente.',
        },
        {
          titulo: 'Identifique a desigualdade prévia',
          texto:
            'Barreiras de acessibilidade, de transporte e de escolarização reduzem as condições de competir em pé de igualdade.',
        },
        {
          titulo: 'Aplique a igualdade material',
          texto: 'O tratamento diferenciado existe para equiparar condições, não para criar privilégio.',
        },
      ],
      conclusao:
        'O argumento não nega a igualdade: sustenta que ela precisa considerar o ponto de partida. É a estrutura argumentativa que o exame valoriza.',
    },
    noEnem: {
      texto:
        'Aparece em Sociologia, Filosofia e História, e o comando costuma pedir o fundamento de uma política pública ou a natureza de um direito. O eixo mais cobrado é o de elaborar propostas — o mesmo que a Competência 5 da redação exige.',
      eixos: ['argumentacao', 'propostas'],
      sinais: [
        'O texto cita um artigo constitucional ou uma política pública',
        'O comando pergunta o que fundamenta determinada medida',
        'Há debate entre tratamento igual e tratamento diferenciado',
        'O tema envolve acesso a serviço público',
      ],
    },
    erros: [
      {
        erro: 'Tratar direito social como favor ou benefício',
        porque:
          'Direito social é dever do Estado e não depende de contrapartida. Confundir isso muda completamente a resposta.',
      },
      {
        erro: 'Confundir igualdade formal com igualdade material',
        porque: 'É o eixo de muitos itens. Sem a distinção, políticas afirmativas parecem contradição.',
      },
      {
        erro: 'Achar que universalidade significa proibir a oferta privada',
        porque:
          'Garantir acesso público a todos não implica vedar outros arranjos. Alternativas com "exclusivamente" e "integralmente" costumam exagerar.',
      },
      {
        erro: 'Citar dispositivos constitucionais de memória na redação',
        porque:
          'Repertório errado prejudica mais do que ajuda. Use o que você tem certeza — princípios amplos são mais seguros que números de artigo.',
      },
    ],
    questoes: ['hum-cid-q1', 'hum-cid-q2'],
    revisaoRapida: [
      'Civis (liberdade) · políticos (participação) · sociais (condições materiais).',
      'Direito social exige prestação do Estado.',
      'Formal = mesma lei para todos. Material = equiparar condições.',
      'CF/88: marco da redemocratização e dos direitos sociais.',
    ],
  },
  'hum-filosofia-politica': {
    precisaSaber: [
      'Contratualismo explica a origem do poder político por um acordo, real ou hipotético.',
      'Hobbes: sem Estado há guerra de todos contra todos; o contrato garante segurança e o soberano é forte.',
      'Locke: há direitos naturais antes do Estado; o governo é limitado e pode ser destituído.',
      'Rousseau: a soberania está na vontade geral; a desigualdade nasce com a propriedade.',
      'Montesquieu: o poder só se limita por outro poder — freios e contrapesos.',
    ],
    explicacao: [
      {
        tipo: 'p',
        texto:
          'Os contratualistas respondem a uma mesma pergunta: por que devemos obedecer a um poder político? A resposta comum é que existe um acordo que o legitima. A diferença entre eles está no que se ganha e no que se perde com esse acordo.',
      },
      {
        tipo: 'p',
        texto:
          'Em Hobbes, o problema é a insegurança: sem um poder comum, a vida é perigosa. O contrato troca liberdade por segurança e cria um soberano forte, a quem não cabe resistir. Em Locke, o problema é a falta de um árbitro imparcial: já existem direitos naturais, e o governo é criado para protegê-los — se ele os viola, perde a legitimidade.',
      },
      {
        tipo: 'p',
        texto:
          'Em Rousseau, o problema é a perda da liberdade com o surgimento da propriedade e da desigualdade. O contrato legítimo é o que devolve a liberdade por meio da vontade geral, em que o povo é o soberano. Montesquieu acrescenta a peça institucional: dividir o poder para que uma parte contenha a outra.',
      },
    ],
    conceitos: [
      { termo: 'Estado de natureza', definicao: 'Situação hipotética anterior ao poder político, usada para explicar por que ele se justifica.' },
      { termo: 'Contrato social', definicao: 'Acordo, real ou hipotético, que institui a autoridade política e define seus limites.' },
      { termo: 'Direitos naturais (Locke)', definicao: 'Vida, liberdade e propriedade — anteriores ao Estado, que existe para protegê-los.' },
      { termo: 'Vontade geral (Rousseau)', definicao: 'Interesse comum do corpo político, distinto da soma dos interesses particulares.' },
      { termo: 'Freios e contrapesos', definicao: 'Arranjo em que cada poder dispõe de meios institucionais para conter os demais.' },
      { termo: 'Legitimidade', definicao: 'Reconhecimento da autoridade como justificada — diferente de simples capacidade de impor obediência pela força.' },
    ],
    exemplo: {
      enunciado:
        'Um texto defende que o governo perde autoridade quando viola sistematicamente direitos que existiam antes dele. Qual autor sustenta isso?',
      passos: [
        {
          titulo: 'Localize a premissa',
          texto: 'Existem direitos ANTES do Estado — isso já elimina Hobbes, em quem o direito pleno nasce com o soberano.',
        },
        {
          titulo: 'Localize a conclusão',
          texto: 'O governo pode perder autoridade, ou seja, há direito de resistência.',
        },
        { titulo: 'Junte as duas', texto: 'Direitos naturais anteriores mais direito de resistência caracterizam Locke.' },
      ],
      conclusao:
        'Identificar autor pela estrutura do argumento é mais confiável do que pela memória de frases soltas.',
    },
    noEnem: {
      texto:
        'Os itens trazem um trecho do autor ou uma descrição da posição e pedem a identificação ou a aplicação a uma situação atual. O eixo dominante é construção de argumentação: o que importa é reconhecer a estrutura do raciocínio.',
      eixos: ['argumentacao'],
      sinais: [
        'Aparece "estado de natureza", "contrato" ou "soberania"',
        'O trecho discute a origem ou o limite do poder',
        'O comando pede a qual autor a posição corresponde',
        'Uma situação atual precisa ser lida por meio de um conceito clássico',
      ],
    },
    erros: [
      {
        erro: 'Trocar Locke por Rousseau',
        porque:
          'Ambos limitam o poder, mas Locke centra em direitos naturais e propriedade, enquanto Rousseau centra na vontade geral e critica a propriedade como origem da desigualdade.',
      },
      {
        erro: 'Atribuir a Hobbes a defesa da tirania',
        porque:
          'Hobbes defende um soberano forte para evitar a guerra generalizada. É uma justificativa da autoridade, com argumentação própria — e não um elogio ao arbítrio.',
      },
      {
        erro: 'Confundir Maquiavel com contratualista',
        porque: 'Maquiavel analisa a conquista e a manutenção do poder, não a sua origem por acordo.',
      },
      {
        erro: 'Achar que soberania popular dispensa controle institucional',
        porque:
          'Origem do poder e controle do poder são questões distintas — é exatamente o que Montesquieu acrescenta ao debate.',
      },
    ],
    questoes: ['hum-filo-q1', 'hum-filo-q2'],
    revisaoRapida: [
      'Hobbes: insegurança → soberano forte, sem resistência.',
      'Locke: direitos naturais → governo limitado, com resistência.',
      'Rousseau: liberdade perdida → vontade geral, soberania popular.',
      'Montesquieu: o poder freia o poder.',
    ],
  },
  'hum-globalizacao': {
    precisaSaber: [
      'Globalização intensifica fluxos de mercadorias, capitais, informação e pessoas — mas de forma desigual.',
      'Divisão internacional do trabalho: países ocupam posições distintas na cadeia produtiva.',
      'Blocos econômicos têm graus: preferência tarifária, livre comércio, união aduaneira, mercado comum, união monetária.',
      'A circulação de capital e mercadoria é muito mais livre do que a de pessoas.',
    ],
    explicacao: [
      {
        tipo: 'p',
        texto:
          'Globalização é a intensificação da integração entre territórios por meio de fluxos: mercadorias, capitais, informação, tecnologia e pessoas. O ponto que o exame mais cobra não é a integração em si — é a desigualdade dela.',
      },
      {
        tipo: 'p',
        texto:
          'Essa desigualdade aparece na divisão internacional do trabalho. Alguns países concentram pesquisa, marca e tecnologia; outros, montagem; outros, extração de matéria-prima. Como o valor se concentra nas etapas de maior conteúdo tecnológico, a posição na cadeia determina quanto cada país captura do que é produzido.',
      },
      {
        tipo: 'p',
        texto:
          'Os blocos econômicos são tentativas de ganhar força nesse jogo, e formam uma escada de integração: cada degrau acrescenta uma exigência ao anterior. Note uma assimetria constante: mercadoria e capital circulam com muito mais liberdade que trabalhadores.',
      },
    ],
    conceitos: [
      { termo: 'Divisão internacional do trabalho', definicao: 'Especialização dos países em diferentes etapas da produção mundial, com captura desigual de valor.' },
      { termo: 'Valor agregado', definicao: 'Valor incorporado ao produto em cada etapa. Concentra-se em pesquisa, tecnologia e marca, não na extração.' },
      { termo: 'Primarização da pauta exportadora', definicao: 'Aumento do peso de produtos primários nas exportações de um país.' },
      { termo: 'Escala de integração', definicao: 'Preferência tarifária → zona de livre comércio → união aduaneira → mercado comum → união econômica e monetária.' },
      { termo: 'Multipolaridade', definicao: 'Configuração em que vários polos disputam influência, em contraste com a bipolaridade da Guerra Fria.' },
    ],
    exemplo: {
      enunciado:
        'Um celular é projetado em um país, tem componentes fabricados em outros e é montado em um terceiro, com minérios extraídos em um quarto. Onde fica o valor?',
      passos: [
        { titulo: 'Extração', texto: 'Alto impacto ambiental e social, baixo valor capturado.' },
        { titulo: 'Montagem', texto: 'Muitos empregos, margens estreitas, forte concorrência por custo.' },
        { titulo: 'Projeto e marca', texto: 'Poucos empregos, altíssimo valor capturado.' },
      ],
      conclusao:
        'A cadeia é global, mas o valor não se distribui igualmente por ela. Essa é a ideia central da divisão internacional do trabalho.',
    },
    noEnem: {
      texto:
        'Os itens trazem mapas, tabelas de comércio, textos sobre acordos ou notícias sobre conflitos e pedem a interpretação do padrão. Dificilmente pedem memorização de siglas; pedem o conceito que explica o arranjo descrito.',
      eixos: ['fenomenos'],
      sinais: [
        'Há tabela de pauta de exportação e importação',
        'O texto descreve características de um acordo entre países',
        'Aparece um mapa de fluxos',
        'O comando fala em "inserção" de um país no comércio mundial',
      ],
    },
    erros: [
      {
        erro: 'Confundir zona de livre comércio com união aduaneira',
        porque: 'A tarifa externa comum é o que distingue as duas. É a pegadinha mais frequente do tópico.',
      },
      {
        erro: 'Tratar globalização como processo homogêneo',
        porque:
          'A integração é seletiva: regiões e grupos são incluídos de formas muito distintas, e alguns são excluídos.',
      },
      {
        erro: 'Supor livre circulação de pessoas equivalente à de capitais',
        porque: 'A assimetria entre os dois fluxos é um dos temas centrais das questões sobre migração.',
      },
      {
        erro: 'Ler exportação alta como sinal automático de desenvolvimento',
        porque: 'Importa o que se exporta. Volume grande de produto primário não equivale a captura alta de valor.',
      },
    ],
    questoes: ['hum-glob-q1', 'hum-glob-q2'],
    revisaoRapida: [
      'Globalização = fluxos intensos e desiguais.',
      'Valor se concentra em tecnologia e marca, não em extração.',
      'Escada: preferência → livre comércio → união aduaneira → mercado comum → união monetária.',
      'Capital circula mais livremente que pessoas.',
    ],
  },
  'hum-urbanizacao': {
    precisaSaber: [
      'A urbanização brasileira foi rápida e concentrada na segunda metade do século XX.',
      'O crescimento das cidades superou a oferta de moradia regular, saneamento e transporte.',
      'Segregação socioespacial: a desigualdade social se inscreve no território.',
      'Transição demográfica: queda da natalidade e da mortalidade, envelhecimento da população.',
      'Crescimento vegetativo = natalidade − mortalidade.',
    ],
    explicacao: [
      {
        tipo: 'p',
        texto:
          'Em poucas décadas, o Brasil deixou de ser majoritariamente rural. Esse deslocamento foi puxado pela industrialização, pela mecanização do campo e pela concentração fundiária, e se dirigiu sobretudo às grandes cidades.',
      },
      {
        tipo: 'p',
        texto:
          'A velocidade é o dado decisivo. Como a população urbana cresceu muito mais rápido que a infraestrutura, formou-se um padrão em que a moradia acessível ficou distante do emprego, frequentemente em áreas de risco ou sem saneamento. A isso se dá o nome de segregação socioespacial.',
      },
      {
        tipo: 'p',
        texto:
          'Em paralelo, o perfil demográfico mudou: a natalidade caiu fortemente e a expectativa de vida subiu. O país envelhece, o que altera a demanda por saúde, a estrutura da previdência e a proporção entre população em idade ativa e dependente.',
      },
    ],
    conceitos: [
      { termo: 'Êxodo rural', definicao: 'Deslocamento de população do campo para as cidades, intensificado pela mecanização agrícola e pela concentração de terras.' },
      { termo: 'Conurbação', definicao: 'Fusão da malha urbana de municípios vizinhos, formando uma mancha urbana contínua.' },
      { termo: 'Segregação socioespacial', definicao: 'Distribuição desigual de infraestrutura e serviços no território, associada à renda dos moradores.' },
      { termo: 'Transição demográfica', definicao: 'Passagem de natalidade e mortalidade altas para natalidade e mortalidade baixas.' },
      { termo: 'Crescimento vegetativo', definicao: 'Diferença entre natalidade e mortalidade, sem considerar migração.', formula: 'CV = natalidade − mortalidade' },
      { termo: 'Janela demográfica', definicao: 'Período em que a população em idade ativa é proporcionalmente maior que a dependente.' },
    ],
    exemplo: {
      enunciado:
        'Uma pirâmide etária passa de base larga e topo estreito para base estreita e corpo alargado. O que mudou?',
      passos: [
        { titulo: 'Base estreitou', texto: 'Menos nascimentos: a natalidade caiu.' },
        { titulo: 'Topo alargou', texto: 'Mais idosos: expectativa de vida maior.' },
        {
          titulo: 'Implicação',
          texto: 'Menor demanda por vagas escolares, maior pressão sobre saúde e previdência.',
        },
      ],
      conclusao:
        'A leitura da pirâmide se faz por partes: base indica natalidade, topo indica longevidade, corpo indica população em idade ativa.',
    },
    noEnem: {
      texto:
        'Aparece com pirâmide etária, tabela de indicadores, mapa de densidade ou texto sobre mobilidade urbana. O comando pede o processo que os dados indicam ou a consequência dele — raramente um número isolado.',
      eixos: ['fenomenos'],
      sinais: [
        'Há pirâmide etária ou série histórica de natalidade',
        'O texto trata de moradia, saneamento ou transporte',
        'Aparecem dois momentos para comparar',
        'O comando pede a "consequência" de um processo demográfico',
      ],
    },
    erros: [
      {
        erro: 'Confundir queda da natalidade com crescimento populacional negativo',
        porque:
          'Enquanto a natalidade for maior que a mortalidade, a população ainda cresce — só que mais devagar.',
      },
      {
        erro: 'Concluir sobre campo e cidade a partir de dados apenas demográficos',
        porque:
          'Natalidade e mortalidade não informam distribuição espacial. É preciso um dado de população urbana e rural.',
      },
      {
        erro: 'Tratar favela e periferia como sinônimos',
        porque:
          'São conceitos distintos: um se refere à forma de ocupação e regularização; o outro, à posição no território.',
      },
      {
        erro: 'Supor que envelhecimento significa população menor',
        porque: 'Envelhecer é mudar a proporção entre faixas etárias — o total pode continuar crescendo.',
      },
    ],
    questoes: ['hum-urb-q1', 'hum-urb-q2'],
    revisaoRapida: [
      'Urbanização rápida + infraestrutura lenta = segregação socioespacial.',
      'Transição demográfica: natalidade cai, expectativa de vida sobe.',
      'CV = natalidade − mortalidade (ainda positivo mesmo em queda).',
      'Pirâmide: base = natalidade · topo = longevidade.',
    ],
  },
  'hum-trabalho': {
    precisaSaber: [
      'Taylorismo: fragmentação e cronometragem das tarefas, separação entre quem planeja e quem executa.',
      'Fordismo: produção em massa, linha de montagem, estoque alto, trabalhador especializado.',
      'Toyotismo: produção flexível, estoque mínimo, trabalhador polivalente, hierarquia enxuta.',
      'Precarização: perda de garantias sem perda da subordinação.',
      'Gerenciamento algorítmico: controle exercido por plataformas digitais.',
    ],
    explicacao: [
      {
        tipo: 'p',
        texto:
          'A Revolução Industrial não mudou apenas a técnica: mudou quem controla o ritmo do trabalho. O artesão decidia como e quando produzir; na fábrica, esse controle passa para a máquina e para a gerência.',
      },
      {
        tipo: 'p',
        texto:
          'O taylorismo leva isso ao limite, separando quem pensa de quem executa e cronometrando cada gesto. O fordismo acrescenta a linha de montagem e a produção em massa padronizada. O toyotismo inverte parte da lógica: produz conforme a demanda, reduz estoque e exige um trabalhador que opere várias funções.',
      },
      {
        tipo: 'p',
        texto:
          'O trabalho por plataforma acrescenta um capítulo: a jornada é escolhida pelo trabalhador, mas remuneração, distribuição de tarefas e avaliação são definidas por algoritmos. Autonomia formal e controle efetivo convivem — e é exatamente essa combinação que as questões cobram.',
      },
    ],
    conceitos: [
      { termo: 'Taylorismo', definicao: 'Organização científica do trabalho: fragmentação de tarefas, cronometragem e separação entre planejamento e execução.' },
      { termo: 'Fordismo', definicao: 'Produção em massa padronizada, linha de montagem, estoques elevados, trabalhador especializado em uma tarefa.' },
      { termo: 'Toyotismo', definicao: 'Produção flexível sob demanda, estoque mínimo (just in time), trabalhador polivalente e hierarquia enxuta.' },
      { termo: 'Precarização', definicao: 'Perda de garantias associadas ao vínculo formal sem que a subordinação desapareça.' },
      { termo: 'Gerenciamento algorítmico', definicao: 'Controle da atividade por sistemas automatizados que distribuem tarefas, definem preços e avaliam desempenho.' },
      { termo: 'Divisão social do trabalho', definicao: 'Separação entre quem concebe e quem executa — o eixo que permite comparar todos os modelos acima.' },
    ],
    exemplo: {
      enunciado:
        'Compare um operário de linha de montagem dos anos 1950 e um entregador de aplicativo hoje quanto à autonomia.',
      passos: [
        {
          titulo: 'Operário fordista',
          texto: 'Jornada fixa e ritmo imposto pela esteira, mas com vínculo formal, férias e previdência.',
        },
        {
          titulo: 'Entregador de aplicativo',
          texto: 'Escolhe o horário, mas não define preço, rota nem critério de avaliação — e não tem vínculo.',
        },
        {
          titulo: 'O que mudou',
          texto: 'A autonomia de jornada aumentou; a proteção diminuiu; a subordinação mudou de forma, não de existência.',
        },
      ],
      conclusao:
        'Comparar modelos pelo par autonomia × proteção é mais produtivo do que decorar a ordem cronológica deles.',
    },
    noEnem: {
      texto:
        'O item costuma descrever uma reorganização produtiva ou uma situação de trabalho atual e pedir o modelo correspondente ou a consequência social. Aparece também em textos sobre tecnologia, automação e desemprego.',
      eixos: ['fenomenos', 'argumentacao'],
      sinais: [
        'O texto descreve mudança na organização da produção',
        'Aparecem estoque, linha de montagem, polivalência, just in time',
        'O tema é trabalho por aplicativo ou terceirização',
        'O comando pede a consequência para o trabalhador',
      ],
    },
    erros: [
      {
        erro: 'Confundir taylorismo com toyotismo',
        porque:
          'Taylorismo especializa ao extremo; toyotismo exige polivalência. São opostos nesse ponto específico.',
      },
      {
        erro: 'Ler flexibilidade como sinônimo de liberdade',
        porque:
          'Flexibilidade pode significar transferência de risco e de custo para o trabalhador, e não mais autonomia real.',
      },
      {
        erro: 'Supor que ausência de vínculo formal elimina subordinação',
        porque: 'Quem define pagamento, tarefa e avaliação exerce controle, independentemente do contrato.',
      },
      {
        erro: 'Tratar automação como causa única do desemprego',
        porque:
          'O efeito depende de política pública, formação e estrutura econômica. Alternativas deterministas costumam ser distratores.',
      },
    ],
    questoes: ['hum-trab-q1', 'hum-trab-q2'],
    revisaoRapida: [
      'Taylorismo: fragmenta e cronometra. Fordismo: massa e estoque.',
      'Toyotismo: flexível, estoque mínimo, polivalente.',
      'Precarização = menos garantia, mesma subordinação.',
      'Plataforma: autonomia de horário + controle algorítmico.',
    ],
  },
};
