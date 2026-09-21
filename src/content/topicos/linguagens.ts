import type { Assunto } from '../tipos';

export const ASSUNTOS_LINGUAGENS: Assunto[] = [
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
    conteudo: {
      precisaSaber: [
        'Leia o comando antes do texto-base: você vai procurar, não estudar.',
        'Inferir é concluir o que o texto sustenta, não o que você acha provável.',
        'Se a alternativa traz informação que não está no texto, está eliminada.',
        'Distratores comuns: radicalizar a tese, trocar consequência por intenção, usar conhecimento externo.',
      ],
      explicacao: [
        {
          tipo: 'p',
          texto:
            'Existe uma diferença prática entre entender um texto e responder a uma questão sobre ele. Entender é reconstruir o sentido; responder é decidir qual das cinco frases é sustentada pelo texto. São tarefas distintas, e a segunda tem método.',
        },
        {
          tipo: 'p',
          texto:
            'O método começa pelo comando. Saber se a pergunta é sobre a tese, sobre a estratégia argumentativa, sobre o efeito de uma expressão ou sobre a função do texto muda completamente o que você procura na leitura.',
        },
        {
          tipo: 'p',
          texto:
            'Depois vem o teste de sustentação: para cada alternativa, aponte o trecho do texto que a autoriza. Se não existe trecho, a alternativa cai — ainda que ela seja verdadeira no mundo real.',
        },
        {
          tipo: 'diagrama',
          nome: 'anatomia-item',
          legenda:
            'Toda questão tem texto-base, comando e alternativas. Começar pelo comando economiza a maior parte do tempo gasto relendo o texto sem saber o que procurar.',
        },
      ],
      conceitos: [
        {
          termo: 'Informação explícita',
          definicao: 'Está escrita no texto. Basta localizar.',
        },
        {
          termo: 'Inferência',
          definicao:
            'Conclusão que o texto autoriza sem enunciar. Precisa de um apoio identificável no texto.',
        },
        {
          termo: 'Extrapolação',
          definicao:
            'Conclusão que vai além do que o texto permite. Costuma ser verdadeira no mundo e errada na questão.',
        },
        {
          termo: 'Tese',
          definicao: 'O ponto de vista que o texto defende. Nem sempre está na primeira linha.',
        },
        {
          termo: 'Estratégia argumentativa',
          definicao:
            'O que o texto FAZ para convencer: exemplificar, comparar, citar autoridade, reformular o argumento alheio, ironizar.',
        },
      ],
      exemplo: {
        enunciado:
          'Um texto afirma: "A escola fechou as portas às 17h. Os alunos do turno da noite voltaram para casa." O que se pode inferir?',
        passos: [
          {
            titulo: 'O que está explícito',
            texto: 'Dois fatos: o horário de fechamento e o retorno dos alunos.',
          },
          {
            titulo: 'O que a ordem sugere',
            texto:
              'A sequência indica relação de causa: os alunos voltaram porque a escola estava fechada. Isso é inferência legítima.',
          },
          {
            titulo: 'O que seria extrapolação',
            texto:
              'Dizer que a escola fechou por falta de professores, ou que os alunos ficaram revoltados. Nada disso está no texto.',
          },
        ],
        conclusao:
          'A inferência válida é a relação causal sugerida pela ordem dos fatos. Tudo além disso é conhecimento seu, não do texto.',
      },
      noEnem: {
        texto:
          'Praticamente todo item de Linguagens e Humanas tem essa estrutura. O comando costuma usar verbos que dizem o tipo de leitura exigida: "infere-se", "o texto sustenta", "a estratégia utilizada", "o efeito de sentido". Cada um desses pede uma operação diferente sobre o mesmo texto.',
        eixos: ['linguagens', 'argumentacao'],
        sinais: [
          'O comando usa "infere-se", "depreende-se", "permite concluir"',
          'As alternativas são frases completas, não termos soltos',
          'Há um contraste entre o que se diz e o que se observa no texto',
          'Uma ou mais alternativas são verdadeiras no mundo real, mas não estão no texto',
        ],
      },
      erros: [
        {
          erro: 'Usar conhecimento de mundo no lugar do texto',
          porque:
            'A alternativa pode ser verdadeira e ainda assim errada, porque a pergunta é sobre o texto — não sobre o assunto.',
        },
        {
          erro: 'Escolher a alternativa mais forte',
          porque:
            'Distratores costumam radicalizar: "todos", "sempre", "nunca", "deve ser abolido". Texto argumentativo raramente afirma de forma absoluta.',
        },
        {
          erro: 'Responder à pergunta errada',
          porque:
            'Quando o comando pede a ESTRATÉGIA e você responde o CONTEÚDO, todas as alternativas parecem plausíveis. Reler o comando resolve.',
        },
        {
          erro: 'Ler o texto inteiro com atenção antes de saber o que se pede',
          porque:
            'Em prova com tempo contado, isso custa caro. Ler o comando primeiro transforma a leitura numa busca dirigida.',
        },
      ],
      questoes: ['ling-interp-q1', 'ling-interp-q2'],
      revisaoRapida: [
        'Comando primeiro, texto depois.',
        'Para cada alternativa, aponte o trecho que a sustenta.',
        'Sem trecho de apoio = extrapolação = eliminada.',
        'Desconfie de alternativas absolutas.',
      ],
    },
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
    conteudo: {
      precisaSaber: [
        'Cada função destaca um elemento da comunicação.',
        'Conativa (receptor): imperativo, "você" — propaganda, campanha, manual.',
        'Referencial (referente): 3ª pessoa, objetividade — notícia, texto científico.',
        'Emotiva (emissor): 1ª pessoa, subjetividade. Poética (mensagem): forma trabalhada.',
        'Fática (canal): testa o contato. Metalinguística (código): fala da própria linguagem.',
      ],
      explicacao: [
        {
          tipo: 'p',
          texto:
            'Toda situação de comunicação tem seis elementos: quem fala (emissor), com quem (receptor), sobre o quê (referente), por qual meio (canal), em qual código e a própria mensagem. A função predominante é definida por qual desses elementos o texto coloca em primeiro plano.',
        },
        {
          tipo: 'p',
          texto:
            'Isso significa que você não precisa decorar seis definições soltas. Basta perguntar: este texto está centrado em quem fala, em quem ouve, no assunto, no contato, na própria língua ou na forma da mensagem?',
        },
      ],
      conceitos: [
        { termo: 'Referencial', definicao: 'Centrada no assunto. Linguagem objetiva, 3ª pessoa, denotativa. Notícia, relatório, verbete.' },
        { termo: 'Emotiva (expressiva)', definicao: 'Centrada no emissor. 1ª pessoa, subjetividade, interjeição. Diário, depoimento, lírica.' },
        { termo: 'Conativa (apelativa)', definicao: 'Centrada no receptor. Imperativo, vocativo, 2ª pessoa. Propaganda, campanha, manual.' },
        { termo: 'Fática', definicao: 'Centrada no canal. Testa ou mantém o contato: "alô?", "entendeu?", "tá me ouvindo?".' },
        { termo: 'Metalinguística', definicao: 'Centrada no código. A linguagem fala de si: dicionário, gramática, poema sobre poesia.' },
        { termo: 'Poética', definicao: 'Centrada na mensagem. A forma importa tanto quanto o conteúdo: rima, ritmo, jogo sonoro, ambiguidade proposital.' },
      ],
      exemplo: {
        enunciado:
          'Classifique: (1) "Compre já e ganhe 20% de desconto." (2) "A taxa de desemprego caiu 0,4 ponto no trimestre." (3) "Eu não aguento mais esse calor."',
        passos: [
          { titulo: 'Frase 1', texto: 'Imperativo dirigido ao leitor: quer que ele aja. Função conativa.' },
          { titulo: 'Frase 2', texto: '3ª pessoa, dado objetivo, sem opinião. Função referencial.' },
          { titulo: 'Frase 3', texto: '1ª pessoa expressando estado. Função emotiva.' },
        ],
        conclusao:
          'Em cada caso o teste foi o mesmo: onde está o foco — em quem ouve, no assunto ou em quem fala?',
      },
      noEnem: {
        texto:
          'Aparece com texto curto — anúncio, campanha, tirinha, trecho de crônica — e o comando pede a função predominante ou o efeito produzido por ela. O item cobra reconhecimento de intenção comunicativa, e não nomenclatura pela nomenclatura.',
        eixos: ['linguagens'],
        sinais: [
          'O texto é curto e tem finalidade clara',
          'O comando usa "função predominante" ou "predomina"',
          'Aparecem verbos no imperativo ou primeira pessoa marcada',
          'O texto é uma peça publicitária ou de campanha',
        ],
      },
      erros: [
        {
          erro: 'Confundir presença de 1ª pessoa com função emotiva',
          porque:
            'O que define é o foco, não o pronome. Um texto em 1ª pessoa que discute a própria escrita é metalinguístico.',
        },
        {
          erro: 'Escolher função poética sempre que houver rima ou jogo sonoro',
          porque:
            'Propaganda usa muito recurso sonoro — a serviço do apelo. A função predominante continua sendo conativa.',
        },
        {
          erro: 'Ignorar a palavra "predominante"',
          porque: 'Um texto quase sempre tem mais de uma função. A pergunta é qual organiza o conjunto.',
        },
        {
          erro: 'Tratar função fática como qualquer diálogo',
          porque: 'Fática é especificamente testar ou manter o canal, não conversar.',
        },
      ],
      questoes: ['ling-func-q1', 'ling-func-q2'],
      revisaoRapida: [
        'Emissor → emotiva. Receptor → conativa. Assunto → referencial.',
        'Canal → fática. Código → metalinguística. Mensagem → poética.',
        'Imperativo e "você" quase sempre indicam conativa.',
        '1ª pessoa não garante emotiva: olhe o foco.',
      ],
    },
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
    conteudo: {
      precisaSaber: [
        'Nenhuma variedade da língua é errada — existem variedades adequadas ou não a cada situação.',
        'Quatro eixos: diatópica (lugar), diastrática (grupo), diafásica (situação), diacrônica (tempo).',
        'Norma-padrão é uma variedade de prestígio, não "a língua certa".',
        'Preconceito linguístico é preconceito social disfarçado de julgamento gramatical.',
      ],
      explicacao: [
        {
          tipo: 'p',
          texto:
            'Toda língua viva varia — no espaço, entre grupos sociais, conforme a situação e ao longo do tempo. Essa variação é uma propriedade do sistema, não um defeito dos falantes.',
        },
        {
          tipo: 'p',
          texto:
            'O que existe é adequação. "Nóis vai" funciona perfeitamente numa conversa entre amigos e não funciona num documento oficial; "outrossim" funciona num parecer jurídico e soa ridículo numa mensagem para a família. Nenhuma das duas formas é melhor em si.',
        },
        {
          tipo: 'p',
          texto:
            'Quando uma forma é ridicularizada e outra igualmente irregular passa despercebida, o critério aplicado não é linguístico — é social. É isso que se chama preconceito linguístico.',
        },
      ],
      conceitos: [
        { termo: 'Variação diatópica', definicao: 'Varia com o lugar: mandioca, macaxeira, aipim; tu e você.' },
        { termo: 'Variação diastrática', definicao: 'Varia com o grupo social, a profissão ou a faixa etária: gíria, jargão técnico.' },
        { termo: 'Variação diafásica', definicao: 'Varia com a situação e o interlocutor: o mesmo falante muda de registro entre a entrevista e o churrasco.' },
        { termo: 'Variação diacrônica', definicao: 'Varia com o tempo: "vossa mercê" → "vosmecê" → "você" → "cê".' },
        {
          termo: 'Norma-padrão',
          definicao:
            'Variedade codificada em gramáticas e dicionários, associada à escrita formal e a espaços de prestígio. É uma variedade, não o conjunto da língua.',
        },
      ],
      exemplo: {
        enunciado:
          'Um texto traz a fala "os menino chegou" e pergunta o que ela revela sobre o falante. Como raciocinar?',
        passos: [
          {
            titulo: 'Reconheça o fenômeno',
            texto:
              'A marca de plural aparece uma vez, no determinante. É uma regularidade do português brasileiro popular, não um descuido aleatório.',
          },
          {
            titulo: 'Recuse o julgamento moral',
            texto:
              'A forma não indica ignorância nem desconhecimento da língua: indica a variedade que o falante usa.',
          },
          {
            titulo: 'Aponte a adequação',
            texto: 'Ela é adequada ao contexto informal e inadequada a um texto oficial escrito.',
          },
        ],
        conclusao:
          'Alternativas que digam "o falante não sabe português" ou "comete erro grave" são, quase sempre, os distratores da questão.',
      },
      noEnem: {
        texto:
          'O item costuma trazer uma tirinha, um trecho de música, um diálogo ou um texto regional e pedir o que a variedade revela, ou o efeito de sentido que ela produz. O exame trata a variação como legítima — e essa postura, sozinha, elimina alternativas.',
        eixos: ['linguagens', 'argumentacao'],
        sinais: [
          'Há fala transcrita ou marca de oralidade no texto',
          'Aparecem duas variedades em contraste no mesmo texto',
          'O comando fala em "variedade", "registro", "adequação"',
          'Alguma alternativa qualifica a fala popular como erro',
        ],
      },
      erros: [
        {
          erro: 'Marcar a alternativa que chama a variedade popular de erro',
          porque: 'É o distrator mais previsível da área. Variedade não é erro; é uso.',
        },
        {
          erro: 'Confundir variação diafásica com diatópica',
          porque:
            'Mudar de registro conforme o interlocutor é situação, não região. Sem marca regional no texto, a variação não é diatópica.',
        },
        {
          erro: 'Concluir que o exame rejeita a norma-padrão',
          porque:
            'Reconhecer a legitimidade das variedades não é abolir a norma. A redação, inclusive, é avaliada pela modalidade escrita formal na Competência 1.',
        },
        {
          erro: 'Generalizar demais na resposta',
          porque:
            'Alternativas do tipo "toda forma serve em qualquer contexto" são exageros que o exame também rejeita.',
        },
      ],
      questoes: ['ling-var-q1', 'ling-var-q2'],
      revisaoRapida: [
        'Variedade ≠ erro. O critério é adequação à situação.',
        'Diatópica (lugar) · diastrática (grupo) · diafásica (situação) · diacrônica (tempo).',
        'Norma-padrão é uma variedade de prestígio.',
        'Alternativa que chama fala popular de erro = distrator.',
      ],
    },
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
    conteudo: {
      precisaSaber: [
        'Gênero é uma forma social estável de usar a linguagem para um propósito.',
        'Cada gênero tem propósito, suporte e marcas de reconhecimento próprias.',
        'Tipo textual (narrar, descrever, argumentar, expor, instruir) é diferente de gênero.',
        'Em gêneros digitais, o registro informal costuma ser estratégia, não descuido.',
      ],
      explicacao: [
        {
          tipo: 'p',
          texto:
            'Gênero textual é a forma que a linguagem assume para cumprir um papel social reconhecível: pedir, informar, convencer, instruir, criticar, registrar. Você identifica um manual, uma charge ou uma notícia em segundos porque cada um tem marcas estáveis.',
        },
        {
          tipo: 'p',
          texto:
            'Não confunda com tipo textual. Tipo é a estrutura interna: narração, descrição, exposição, argumentação, injunção. Um mesmo gênero pode combinar vários tipos — uma reportagem narra, descreve e expõe.',
        },
        {
          tipo: 'p',
          texto:
            'Na prova, o que importa é o propósito. Identificado o propósito, alternativas que descrevem outro propósito caem imediatamente.',
        },
      ],
      conceitos: [
        { termo: 'Gênero textual', definicao: 'Forma socialmente estabilizada de texto, com propósito e marcas próprias: notícia, charge, receita, edital.' },
        { termo: 'Tipo textual', definicao: 'Estrutura interna: narrar, descrever, expor, argumentar, instruir. São cinco e combinam-se dentro dos gêneros.' },
        { termo: 'Suporte', definicao: 'Onde o texto circula: jornal, rede social, embalagem, placa. O suporte influencia o registro.' },
        { termo: 'Propósito comunicativo', definicao: 'O que o texto pretende fazer com o leitor. É o que a maioria das questões cobra.' },
        {
          termo: 'Intertextualidade',
          definicao:
            'Um texto que dialoga com outro — paródia, paráfrase, citação, referência. Comum em charges e propagandas.',
        },
      ],
      exemplo: {
        enunciado:
          'Uma charge mostra um político subindo numa escada feita de promessas de campanha, com a legenda "Obras em andamento". Como analisar?',
        passos: [
          { titulo: 'Identifique o gênero', texto: 'Charge: imagem, humor, referência à atualidade, crítica.' },
          { titulo: 'Localize o recurso', texto: 'A escada de promessas é a metáfora visual; a legenda produz ironia.' },
          {
            titulo: 'Defina o propósito',
            texto: 'Criticar o uso eleitoral de promessas não cumpridas — não informar sobre obras.',
          },
        ],
        conclusao:
          'Em charge, a resposta correta quase sempre descreve uma crítica. Alternativas que a tratam como informação neutra ignoram o gênero.',
      },
      noEnem: {
        texto:
          'O item traz o texto e pede a finalidade, o público-alvo, o efeito de um recurso ou a adequação da linguagem ao suporte. Gêneros digitais e publicitários aparecem com frequência, e o comando costuma pedir o EFEITO de uma escolha (informalidade, emoji, trocadilho), não o nome dela.',
        eixos: ['linguagens'],
        sinais: [
          'O texto tem formato visual característico (charge, infográfico, anúncio)',
          'O comando fala em "finalidade", "propósito", "público"',
          'Há mistura de linguagem verbal e não verbal',
          'O texto faz referência a outro texto conhecido',
        ],
      },
      erros: [
        {
          erro: 'Confundir gênero com tipo textual',
          porque:
            '"Narrativa" não é gênero; conto, notícia e relato são. Alternativas que trocam um pelo outro são distratores.',
        },
        {
          erro: 'Ler charge como informação neutra',
          porque: 'Charge critica. Ignorar o humor e a crítica é perder o propósito do gênero.',
        },
        {
          erro: 'Tratar informalidade em rede social como despreparo',
          porque: 'O registro está ajustado ao suporte e ao público — é escolha estratégica.',
        },
        {
          erro: 'Desprezar a linguagem não verbal',
          porque:
            'Em infográfico, charge e propaganda, parte essencial do sentido está na imagem, no enquadramento e na cor.',
        },
      ],
      questoes: ['ling-gen-q1', 'ling-gen-q2'],
      revisaoRapida: [
        'Gênero = forma social com propósito. Tipo = estrutura interna.',
        'Identificou o gênero, identificou o propósito.',
        'Charge critica; manual instrui; anúncio convence; notícia informa.',
        'Imagem faz parte do texto, não é ilustração.',
      ],
    },
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
    conteudo: {
      precisaSaber: [
        'Metáfora: semelhança entre campos distintos. Metonímia: proximidade (parte pelo todo, autor pela obra).',
        'Ironia: dizer o contrário do que se quer dar a entender.',
        'Hipérbole exagera; eufemismo suaviza; personificação dá vida ao inanimado.',
        'O comando costuma pedir o EFEITO, não o nome da figura.',
      ],
      explicacao: [
        {
          tipo: 'p',
          texto:
            'Figuras de linguagem são desvios propositais do uso comum para produzir um efeito: intensificar, aproximar, criticar, suavizar, surpreender. Elas não são enfeite — são argumento.',
        },
        {
          tipo: 'p',
          texto:
            'Isso muda o jeito de estudar. Em vez de decorar vinte nomes, vale dominar bem seis ou sete e treinar a pergunta que a prova realmente faz: por que o autor escolheu dizer assim e não de outro jeito?',
        },
      ],
      conceitos: [
        { termo: 'Metáfora', definicao: 'Substituição por semelhança entre coisas de campos diferentes: "aquele menino é um foguete".' },
        { termo: 'Metonímia', definicao: 'Substituição por proximidade: continente pelo conteúdo, autor pela obra, parte pelo todo.' },
        { termo: 'Ironia', definicao: 'Dizer o oposto do que se quer significar, contando com o leitor para inverter. Recurso central da crítica e do humor.' },
        { termo: 'Hipérbole e eufemismo', definicao: 'A primeira exagera ("chorei rios"); o segundo suaviza ("nos deixou" por "morreu").' },
        { termo: 'Personificação (prosopopeia)', definicao: 'Atribuir características humanas a seres inanimados ou abstratos: "o vento sussurrava".' },
        { termo: 'Antítese e paradoxo', definicao: 'Antítese opõe ideias ("amor e ódio"); paradoxo une opostos numa contradição aparente ("é ferida que dói e não se sente").' },
      ],
      exemplo: {
        enunciado:
          'Analise: "O Brasil inteiro parou para assistir ao jogo — e depois voltou a fingir que não se importa."',
        passos: [
          {
            titulo: 'Primeira figura',
            texto: '"O Brasil inteiro" é metonímia: o país pelos seus habitantes. E também hipérbole, pelo "inteiro".',
          },
          { titulo: 'Segunda figura', texto: '"Fingir que não se importa" carrega ironia sobre o comportamento coletivo.' },
          {
            titulo: 'Qual responder',
            texto: 'Depende do que o comando apontar. Se ele indica a expressão "o Brasil inteiro", a resposta é metonímia.',
          },
        ],
        conclusao:
          'Uma frase pode conter três figuras. Ler com precisão qual trecho o comando isola é metade da questão.',
      },
      noEnem: {
        texto:
          'Aparece em letra de música, poema, crônica, charge e propaganda. O formato mais comum não pergunta "qual figura é esta?", e sim "o efeito de sentido produzido pela expressão X é...". Isso exige explicar o funcionamento, não nomear.',
        eixos: ['linguagens'],
        sinais: [
          'O comando isola uma expressão entre aspas',
          'O texto é poético, publicitário ou humorístico',
          'O comando usa "efeito de sentido" ou "expressividade"',
          'A expressão destacada não faz sentido no uso literal',
        ],
      },
      erros: [
        {
          erro: 'Confundir metáfora com metonímia',
          porque:
            'Metáfora liga por semelhança entre campos distintos; metonímia liga por proximidade real. "Li Machado" é metonímia, não metáfora.',
        },
        {
          erro: 'Responder sobre outra figura da frase',
          porque: 'A frase pode ter várias. O comando aponta uma — responda sobre ela.',
        },
        {
          erro: 'Nomear a figura sem explicar o efeito',
          porque:
            'Quando as alternativas descrevem efeitos, saber o nome não basta: é preciso dizer o que aquele recurso provoca ali.',
        },
        {
          erro: 'Tratar ironia como mentira ou erro',
          porque: 'A ironia é um recurso argumentativo deliberado e o leitor é convidado a percebê-la.',
        },
      ],
      questoes: ['ling-fig-q1', 'ling-fig-q2'],
      revisaoRapida: [
        'Metáfora = semelhança. Metonímia = proximidade.',
        'Ironia = dizer o contrário para criticar.',
        'Hipérbole exagera; eufemismo suaviza.',
        'A pergunta real é sobre o efeito, não sobre o nome.',
      ],
    },
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
    conteudo: {
      precisaSaber: [
        'Leia o comando primeiro — você vai localizar, não traduzir.',
        'Marque negações e conectivos de contraste: são onde estão as respostas erradas.',
        'Cognatos ajudam; falsos cognatos derrubam. Conheça os mais frequentes.',
        'Não é preciso entender todas as palavras para responder corretamente.',
      ],
      explicacao: [
        {
          tipo: 'p',
          texto:
            'As cinco questões de língua estrangeira avaliam compreensão de leitura, não gramática nem tradução. Isso é ótima notícia: o que elas cobram é a mesma habilidade que você treina em português.',
        },
        {
          tipo: 'p',
          texto:
            'A técnica é a mesma da interpretação: leia o comando, identifique o que precisa encontrar, varra o texto buscando essa informação, e confira se a alternativa não inverteu alguma negação.',
        },
        {
          tipo: 'p',
          texto:
            'Os textos costumam ser curtos e tratar de temas sociais atuais — tecnologia, meio ambiente, cidade, educação, cultura. Conhecer o tema em português já ajuda a antecipar o sentido.',
        },
      ],
      conceitos: [
        { termo: 'Skimming', definicao: 'Leitura rápida do conjunto para captar o assunto geral e a posição do autor.' },
        { termo: 'Scanning', definicao: 'Varredura dirigida atrás de uma informação específica, depois de ler o comando.' },
        { termo: 'Cognato', definicao: 'Palavra parecida com o português e de sentido próximo: traffic, congestion, natural, important.' },
        {
          termo: 'Falso cognato',
          definicao:
            'Parece e não é. Em inglês: actually (na verdade), eventually (por fim), pretend (fingir), parents (pais). Em espanhol: exquisito (delicioso), largo (comprido), oficina (escritório).',
        },
        {
          termo: 'Marcador de contraste',
          definicao:
            'but, however, although, yet, despite / pero, sin embargo, aunque. Sinalizam a virada do argumento — e a resposta costuma estar depois deles.',
        },
      ],
      exemplo: {
        enunciado:
          'O comando pede: "According to the text, remote work has". O texto diz: "Remote work has not reduced total working hours; it has blurred the line between work and rest."',
        passos: [
          { titulo: 'Localize a negação', texto: '"has not reduced" — o trabalho remoto NÃO reduziu as horas.' },
          { titulo: 'Localize a afirmação', texto: '"has blurred the line" — ele apagou a fronteira entre trabalho e descanso.' },
          {
            titulo: 'Antecipe os distratores',
            texto: 'Vai haver uma alternativa dizendo que o trabalho remoto reduziu as horas — a armadilha da negação perdida.',
          },
        ],
        conclusao:
          'A resposta correta descreve a fronteira apagada. Quem não marcou o "not" marca o distrator com confiança.',
      },
      noEnem: {
        texto:
          'São cinco itens no início da prova de Linguagens, em inglês ou espanhol conforme a opção da inscrição. Os comandos mais comuns pedem a ideia central, a intenção do autor, o sentido de uma expressão no contexto ou uma informação específica.',
        eixos: ['linguagens'],
        sinais: [
          'Texto curto de tema social contemporâneo',
          'Comando em português sobre texto em língua estrangeira',
          'Uma alternativa afirma exatamente o contrário do texto',
          'Há uma expressão idiomática destacada para interpretar no contexto',
        ],
      },
      erros: [
        {
          erro: 'Perder a negação',
          porque:
            'É o erro número um da área. "Not", "no longer", "neither", "far from" invertem o sentido inteiro da frase.',
        },
        {
          erro: 'Traduzir palavra por palavra',
          porque:
            'Consome o tempo da prova e não é necessário. A compreensão global mais o comando resolvem a questão.',
        },
        {
          erro: 'Cair em falso cognato',
          porque:
            'Ler "eventually" como "eventualmente" ou "exquisito" como "esquisito" muda completamente o sentido do trecho.',
        },
        {
          erro: 'Ignorar o marcador de contraste',
          porque:
            'Depois de "however" ou "sin embargo" vem a posição que o autor de fato defende — e é ela que a questão cobra.',
        },
      ],
      questoes: ['ling-le-q1', 'ling-le-q2'],
      revisaoRapida: [
        'Comando primeiro, varredura depois.',
        'Circule negações e contrastes.',
        'Falsos cognatos: actually, eventually, pretend, parents / largo, oficina, exquisito.',
        'Não precisa entender tudo — precisa achar a informação.',
      ],
    },
  },
];
