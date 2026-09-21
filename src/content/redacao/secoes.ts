import type { SecaoRedacao } from '../tipos';

/**
 * Módulo de redação.
 *
 * Distinção de procedência aplicada aqui com rigor:
 *  - o que é critério publicado pelo INEP aparece em destaque `oficial`;
 *  - o que é convenção de ensino (como a estrutura de 4 parágrafos) aparece
 *    explicitamente como recomendação deste site, não como exigência da prova.
 *
 * O site NÃO atribui nota automática a redações: um corretor heurístico de
 * C1–C5 daria feedback errado com aparência de autoridade. O que ele entrega
 * é checklist autoavaliativo estruturado por competência.
 */
export const SECOES_REDACAO: SecaoRedacao[] = [
  {
    id: 'red-como-e-avaliada',
    titulo: 'Como a redação é avaliada',
    tipo: 'fundamento',
    resumo: 'O que é oficialmente exigido, quanto vale cada competência e o que diferencia este critério de todos os outros da prova.',
    minutosEstimados: 12,
    conteudo: [
      {
        tipo: 'destaque',
        variante: 'oficial',
        titulo: 'Critério oficial (INEP)',
        texto:
          'A redação do ENEM é um texto dissertativo-argumentativo em prosa, sobre tema de ordem social, científica, cultural ou política, escrito em até 30 linhas na folha definitiva. É avaliada em cinco competências, cada uma de 0 a 200 pontos, totalizando de 0 a 1000.',
      },
      {
        tipo: 'p',
        texto:
          'Cada avaliador atribui uma nota de 0 a 200 por competência, e a nota final corresponde à média aritmética das notas totais dos dois corretores iniciais. Havendo discrepância entre eles, a redação segue para correção adicional, conforme as regras do edital.',
      },
      {
        tipo: 'p',
        texto:
          'Cada competência é descrita em seis níveis de desempenho na Cartilha do Participante, publicada pelo INEP. É o documento que diz, com todas as letras, o que separa um nível do outro — e vale a leitura direta na fonte.',
      },
      {
        tipo: 'tabela',
        cabecalho: ['Competência', 'O que avalia', 'Vale'],
        linhas: [
          ['C1', 'Domínio da modalidade escrita formal da língua portuguesa', '0–200'],
          ['C2', 'Compreender a proposta e aplicar conhecimentos de várias áreas, dentro da estrutura dissertativo-argumentativa', '0–200'],
          ['C3', 'Selecionar, relacionar, organizar e interpretar informações em defesa de um ponto de vista', '0–200'],
          ['C4', 'Conhecer e usar os mecanismos linguísticos de coesão e articulação', '0–200'],
          ['C5', 'Elaborar proposta de intervenção respeitando os direitos humanos', '0–200'],
        ],
      },
      {
        tipo: 'destaque',
        variante: 'nota',
        titulo: 'Por que a redação é o melhor investimento de tempo do exame',
        texto:
          'É a única parte da prova cujo critério de avaliação é público, fechado e estável. Em Matemática você não sabe qual conteúdo cairá; na redação você sabe exatamente o que será avaliado, em cinco itens. Ninguém entra na prova sem saber o que a redação cobra — a não ser por não ter lido.',
      },
      {
        tipo: 'p',
        texto:
          'Uma consequência prática disso: escrever uma redação por semana e conferir contra os cinco critérios rende mais do que escrever três sem conferir nada. O que melhora a nota é a correção orientada por critério, não o volume.',
      },
    ],
    checklist: [
      'Sei dizer, de cabeça, o que cada uma das cinco competências avalia.',
      'Sei que o texto precisa ser dissertativo-argumentativo em prosa.',
      'Sei que o limite é de 30 linhas na folha definitiva.',
      'Sei que a nota vai de 0 a 1000, com 200 pontos por competência.',
    ],
  },
  {
    id: 'red-estrutura',
    titulo: 'Estrutura do texto',
    tipo: 'fundamento',
    resumo: 'Uma arquitetura de quatro parágrafos que cabe em 30 linhas e atende às cinco competências.',
    minutosEstimados: 15,
    conteudo: [
      {
        tipo: 'destaque',
        variante: 'atencao',
        titulo: 'O que é exigência e o que é recomendação',
        texto:
          'O INEP exige texto dissertativo-argumentativo em prosa, dentro de 30 linhas. Ele NÃO exige quatro parágrafos. A estrutura abaixo é uma recomendação deste site: ela distribui bem as competências no espaço disponível e reduz o risco de faltar proposta de intervenção no fim. Outras estruturas bem executadas também alcançam nota alta.',
      },
      {
        tipo: 'diagrama',
        nome: 'estrutura-redacao',
        legenda:
          'Quatro parágrafos: introdução com tese, dois desenvolvimentos com um argumento cada e conclusão com a proposta de intervenção. O total precisa caber em 30 linhas — por isso cada bloco tem um tamanho-alvo.',
      },
      {
        tipo: 'p',
        texto:
          'A lógica da estrutura é simples: a introdução apresenta o problema e o seu posicionamento; cada desenvolvimento sustenta esse posicionamento por um ângulo diferente; a conclusão retoma e propõe uma ação concreta.',
      },
      {
        tipo: 'lista',
        ordenada: true,
        itens: [
          'Introdução (4 a 6 linhas): contextualize o tema em uma ou duas frases e termine com a tese — a frase que diz o que você vai defender.',
          'Desenvolvimento 1 (7 a 9 linhas): um argumento, o repertório que o sustenta e a análise que conecta os dois ao tema.',
          'Desenvolvimento 2 (7 a 9 linhas): um segundo argumento, de outro ângulo — não uma repetição do primeiro com outras palavras.',
          'Conclusão (5 a 7 linhas): retome a tese e apresente a proposta de intervenção completa.',
        ],
      },
      {
        tipo: 'destaque',
        variante: 'nota',
        titulo: 'A regra dos dois ângulos',
        texto:
          'Se os dois desenvolvimentos dizem a mesma coisa, a Competência 3 sofre — falta progressão. Escolha ângulos distintos: causa e consequência, individual e estrutural, histórico e atual, econômico e cultural. Esse par já garante que os parágrafos não se repitam.',
      },
      {
        tipo: 'p',
        texto:
          'Um erro de distribuição custa caro: chegar à linha 28 sem ter escrito a proposta de intervenção significa perder a maior parte dos 200 pontos da Competência 5. Por isso o controle de espaço faz parte da estratégia, não é detalhe.',
      },
    ],
    checklist: [
      'Minha introdução termina com uma tese clara, e não com uma pergunta.',
      'Meus dois desenvolvimentos atacam o tema por ângulos diferentes.',
      'Cada desenvolvimento tem argumento, repertório e análise — não só repertório.',
      'Sobrou espaço suficiente para a proposta de intervenção completa.',
    ],
    exercicio: {
      titulo: 'Esqueleto em 8 minutos',
      instrucao:
        'Escolha um tema social atual. Escreva apenas: a tese em uma frase, o ângulo do D1 em uma frase, o ângulo do D2 em uma frase e a ação central da proposta em uma frase. Não escreva o texto — só o esqueleto.',
      criterios: [
        'A tese é uma afirmação defensável, não uma constatação óbvia.',
        'Os dois ângulos são realmente diferentes entre si.',
        'A proposta responde ao problema que a tese apontou.',
        'Tudo coube em quatro frases.',
      ],
      minutos: 8,
    },
  },
  {
    id: 'red-c1',
    titulo: 'Competência 1 — norma escrita formal',
    tipo: 'competencia',
    competencia: 1,
    resumo: 'Onde se perdem pontos de gramática e o que realmente compensa revisar com o tempo que você tem.',
    minutosEstimados: 14,
    conteudo: [
      {
        tipo: 'destaque',
        variante: 'oficial',
        titulo: 'O que a C1 avalia (INEP)',
        texto:
          'Demonstrar domínio da modalidade escrita formal da língua portuguesa: ortografia, acentuação, pontuação, concordância, regência, uso da crase, construção sintática, escolha vocabular e adequação do registro.',
      },
      {
        tipo: 'p',
        texto:
          'A C1 não exige texto sem nenhum deslize. Os níveis de desempenho consideram a quantidade e a gravidade dos desvios em relação ao conjunto do texto. Um deslize isolado num texto bem construído pesa muito menos que desvios sistemáticos.',
      },
      {
        tipo: 'p',
        texto:
          'Com pouco tempo de preparação, o melhor uso do seu esforço não é revisar toda a gramática. É eliminar os desvios que você comete com frequência e que aparecem em praticamente toda redação.',
      },
      {
        tipo: 'lista',
        itens: [
          'Concordância verbal com sujeito longo ou posposto: "Existem problemas" — e não "Existe problemas".',
          'Pontuação: nunca separe sujeito do verbo por vírgula; use vírgula depois de adjunto adverbial deslocado.',
          'Crase: só antes de palavra feminina que peça "a" e com artigo. Nunca antes de verbo, de palavra masculina ou de pronome pessoal.',
          'Registro: sem gíria, sem "a gente", sem abreviação, sem marca de oralidade.',
          'Impessoalidade: evite "eu acho". A argumentação ganha força na terceira pessoa.',
        ],
      },
      {
        tipo: 'destaque',
        variante: 'nota',
        titulo: 'A estratégia mais eficiente para a C1',
        texto:
          'Mantenha uma lista pessoal de erros. Toda vez que você escrever uma redação e identificar um desvio, anote-o. Em duas semanas essa lista terá cinco ou seis itens recorrentes — e revisar cinco itens seus rende muito mais do que reler um livro de gramática inteiro.',
      },
      {
        tipo: 'p',
        texto:
          'Um cuidado de escrita que vale mais que várias regras: prefira períodos curtos. Frases longas com muitas orações encaixadas são a principal fonte de erro de concordância, regência e pontuação. Se uma frase passou de três linhas, divida-a.',
      },
    ],
    checklist: [
      'Não separei sujeito de verbo com vírgula em nenhum ponto.',
      'Conferi a concordância dos verbos cujo sujeito está distante.',
      'Não usei gíria, abreviação nem "a gente".',
      'Meus períodos têm no máximo duas ou três linhas.',
      'Revisei especificamente os erros da minha lista pessoal.',
    ],
    exercicio: {
      titulo: 'Sua lista pessoal de erros',
      instrucao:
        'Pegue o último texto que você escreveu — de escola, de simulado, qualquer um. Releia procurando SÓ desvios de norma. Anote cada um em uma lista. Guarde essa lista e revise-a antes de cada redação.',
      criterios: [
        'A lista tem entre três e oito itens concretos.',
        'Cada item descreve o erro, não uma regra genérica.',
        'Você consegue dar um exemplo próprio de cada item.',
      ],
      minutos: 12,
    },
  },
  {
    id: 'red-c2',
    titulo: 'Competência 2 — tema e repertório',
    tipo: 'competencia',
    competencia: 2,
    resumo: 'Não fugir do tema, manter o tipo textual e usar repertório que realmente sustenta o argumento.',
    minutosEstimados: 15,
    conteudo: [
      {
        tipo: 'destaque',
        variante: 'oficial',
        titulo: 'O que a C2 avalia (INEP)',
        texto:
          'Compreender a proposta de redação e aplicar conceitos das várias áreas de conhecimento para desenvolver o tema, dentro dos limites estruturais do texto dissertativo-argumentativo em prosa.',
      },
      {
        tipo: 'p',
        texto:
          'Três coisas são cobradas juntas aqui: abordar o tema exato proposto, manter o tipo textual dissertativo-argumentativo e mobilizar conhecimento de outras áreas — o chamado repertório sociocultural.',
      },
      {
        tipo: 'p',
        texto:
          'O ponto mais perigoso é o tema. A proposta costuma ter um recorte específico, e escrever sobre o assunto geral em vez do recorte é tangenciamento — o que derruba a nota da competência. Se o tema é "desafios para a valorização de comunidades tradicionais", escrever genericamente sobre cultura brasileira não atende ao recorte.',
      },
      {
        tipo: 'destaque',
        variante: 'atencao',
        titulo: 'Repertório que conta e repertório que não conta',
        texto:
          'Não basta citar. Um repertório só é produtivo quando você o usa para explicar algo do seu argumento. Citar um filósofo e seguir adiante sem relacioná-lo ao tema é decoração — e o corretor identifica isso com facilidade.',
      },
      {
        tipo: 'lista',
        itens: [
          'Cite com precisão o que você sabe com certeza. Repertório errado prejudica mais do que ajuda.',
          'Prefira o que você consegue EXPLICAR ao que apenas consegue nomear.',
          'Uma menção bem articulada vale mais que três citações soltas.',
          'Repertórios seguros: princípios constitucionais, conceitos de sociologia, processos históricos, dados amplamente conhecidos, obras que você realmente leu ou assistiu.',
        ],
      },
      {
        tipo: 'p',
        texto:
          'Uma estrutura que funciona bem: apresente o argumento, traga o repertório, explique como ele ilumina o argumento e feche voltando ao tema. Três frases costumam bastar — e essa sequência garante que o repertório esteja de fato trabalhando.',
      },
    ],
    checklist: [
      'Escrevi sobre o recorte exato do tema, não sobre o assunto em geral.',
      'Meu texto é dissertativo-argumentativo do começo ao fim.',
      'Cada repertório que usei está explicado e ligado ao argumento.',
      'Tenho certeza da informação de cada repertório que citei.',
    ],
    exercicio: {
      titulo: 'Repertório em três frases',
      instrucao:
        'Escolha um repertório que você domina (um conceito, um processo histórico, um princípio constitucional). Escreva três frases: o argumento, o repertório, e a explicação que liga um ao outro em um tema à sua escolha.',
      criterios: [
        'A segunda frase apresenta o repertório com precisão.',
        'A terceira frase explica, não apenas repete.',
        'Ao ler as três, fica claro por que o repertório está ali.',
      ],
      minutos: 10,
    },
  },
  {
    id: 'red-c3',
    titulo: 'Competência 3 — projeto de texto',
    tipo: 'competencia',
    competencia: 3,
    resumo: 'A competência mais decisiva: demonstrar que o texto foi planejado, e não improvisado parágrafo a parágrafo.',
    minutosEstimados: 15,
    conteudo: [
      {
        tipo: 'destaque',
        variante: 'oficial',
        titulo: 'O que a C3 avalia (INEP)',
        texto:
          'Selecionar, relacionar, organizar e interpretar informações, fatos, opiniões e argumentos em defesa de um ponto de vista.',
      },
      {
        tipo: 'p',
        texto:
          'Repare nos quatro verbos: selecionar, relacionar, organizar e interpretar. Nenhum deles é "citar". A C3 avalia o raciocínio que atravessa o texto — o que se chama projeto de texto.',
      },
      {
        tipo: 'p',
        texto:
          'Um texto com projeto tem uma tese clara na introdução, desenvolvimentos que sustentam essa tese por ângulos distintos e uma conclusão que decorre do que foi construído. Um texto sem projeto tem parágrafos corretos que poderiam estar em qualquer ordem.',
      },
      {
        tipo: 'destaque',
        variante: 'nota',
        titulo: 'O teste mais rápido de projeto de texto',
        texto:
          'Troque a ordem dos seus dois parágrafos de desenvolvimento. Se nada mudar no sentido do texto, provavelmente não há progressão — apenas dois blocos paralelos. Um bom projeto faz o segundo parágrafo avançar a partir do primeiro.',
      },
      {
        tipo: 'lista',
        itens: [
          'Selecionar: escolher poucos argumentos e desenvolvê-los, em vez de listar muitos.',
          'Relacionar: mostrar como um argumento se conecta ao outro e ao tema.',
          'Organizar: dar uma ordem que faça sentido — causa antes de consequência, geral antes de específico.',
          'Interpretar: dizer o que os fatos significam, em vez de só apresentá-los.',
        ],
      },
      {
        tipo: 'p',
        texto:
          'A prática que mais melhora a C3 não é escrever mais textos: é planejar antes de escrever. Dez minutos de esqueleto — tese, dois ângulos, proposta — evitam o texto que se descobre no meio do caminho e precisa mudar de direção.',
      },
    ],
    checklist: [
      'Minha tese aparece explicitamente na introdução.',
      'Cada parágrafo de desenvolvimento defende a tese por um ângulo próprio.',
      'Há progressão: o D2 avança em relação ao D1, não o repete.',
      'A conclusão decorre do que eu argumentei, e não aparece do nada.',
      'Eu interpreto os fatos que apresento, não apenas os cito.',
    ],
    exercicio: {
      titulo: 'Teste de embaralhamento',
      instrucao:
        'Pegue uma redação sua e leia os dois desenvolvimentos em ordem invertida. Avalie: o texto perdeu sentido? Se não perdeu, reescreva o D2 para que ele avance a partir do D1 — por exemplo, retomando a consequência do que foi dito antes.',
      criterios: [
        'Você identificou se há progressão ou paralelismo.',
        'A nova versão do D2 se apoia em algo estabelecido no D1.',
        'A conclusão continua fazendo sentido depois da mudança.',
      ],
      minutos: 15,
    },
  },
  {
    id: 'red-c4',
    titulo: 'Competência 4 — coesão',
    tipo: 'competencia',
    competencia: 4,
    resumo: 'Conectar as partes do texto com variedade e precisão — e parar de repetir os mesmos três conectivos.',
    minutosEstimados: 12,
    conteudo: [
      {
        tipo: 'destaque',
        variante: 'oficial',
        titulo: 'O que a C4 avalia (INEP)',
        texto:
          'Demonstrar conhecimento dos mecanismos linguísticos necessários para a construção da argumentação, articulando as partes do texto.',
      },
      {
        tipo: 'p',
        texto:
          'Coesão é o tecido que liga as partes. Ela opera em dois níveis: entre parágrafos (o conectivo que abre cada bloco) e dentro do parágrafo (pronomes, sinônimos, conjunções que evitam repetição).',
      },
      {
        tipo: 'p',
        texto:
          'O erro mais comum não é a ausência de conectivos — é a repetição dos mesmos três. Um texto que abre todos os parágrafos com "além disso" demonstra repertório coesivo limitado, ainda que esteja correto.',
      },
      {
        tipo: 'tabela',
        cabecalho: ['Relação', 'Conectivos'],
        linhas: [
          ['Adição', 'ademais · outrossim · somado a isso · não obstante isso'],
          ['Oposição', 'entretanto · todavia · em contrapartida · conquanto'],
          ['Causa', 'porquanto · visto que · uma vez que · haja vista'],
          ['Consequência', 'por conseguinte · de modo que · razão pela qual'],
          ['Conclusão', 'portanto · dessarte · infere-se que · depreende-se que'],
          ['Exemplificação', 'a exemplo de · como ilustra · nesse sentido'],
        ],
      },
      {
        tipo: 'destaque',
        variante: 'atencao',
        titulo: 'Conectivo precisa ser verdadeiro',
        texto:
          'Usar "portanto" onde não há conclusão, ou "entretanto" onde não há oposição, é pior do que não usar conectivo nenhum: sinaliza uma relação lógica que o texto não tem. Escolha pelo sentido, não pela sofisticação da palavra.',
      },
      {
        tipo: 'p',
        texto:
          'Dentro do parágrafo, a coesão se faz sobretudo por referência: pronomes ("esse fenômeno", "tal cenário") e sinônimos que evitam repetir o mesmo substantivo. É o que impede que a mesma palavra apareça cinco vezes em sete linhas.',
      },
    ],
    checklist: [
      'Cada parágrafo começa com um conectivo diferente.',
      'Todo conectivo que usei corresponde à relação lógica real entre as ideias.',
      'Não repeti o mesmo substantivo mais de duas vezes no mesmo parágrafo.',
      'Usei pronomes e expressões de retomada dentro dos parágrafos.',
    ],
    exercicio: {
      titulo: 'Troca de conectivos',
      instrucao:
        'Pegue uma redação sua e marque todos os conectivos. Substitua cada repetição por um equivalente da tabela acima, conferindo se a relação lógica continua correta.',
      criterios: [
        'Nenhum conectivo se repete entre parágrafos.',
        'Cada substituição mantém o sentido original.',
        'Você não forçou um conectivo rebuscado onde ele não cabia.',
      ],
      minutos: 10,
    },
  },
  {
    id: 'red-c5',
    titulo: 'Competência 5 — proposta de intervenção',
    tipo: 'competencia',
    competencia: 5,
    resumo: 'Os cinco elementos que tornam a proposta completa — e o erro que zera esta competência.',
    minutosEstimados: 15,
    conteudo: [
      {
        tipo: 'destaque',
        variante: 'oficial',
        titulo: 'O que a C5 avalia (INEP)',
        texto:
          'Elaborar proposta de intervenção para o problema abordado, respeitando os direitos humanos. A proposta precisa estar relacionada ao tema e articulada ao texto — e o desrespeito aos direitos humanos anula esta competência.',
      },
      {
        tipo: 'p',
        texto:
          'A leitura pedagógica consolidada dos critérios descreve cinco elementos que tornam a proposta detalhada. Eles não aparecem como lista numerada em documento oficial, mas traduzem bem o que a competência exige de uma proposta completa e articulada.',
      },
      {
        tipo: 'diagrama',
        nome: 'proposta-intervencao',
        legenda:
          'Agente (quem faz), ação (o que faz), meio ou modo (como faz), efeito (para quê) e detalhamento, que aprofunda um dos elementos anteriores. Os cinco juntos caracterizam uma proposta completa.',
      },
      {
        tipo: 'p',
        texto:
          'Um exemplo de proposta com os cinco elementos: "Cabe ao Ministério da Educação (agente) promover formação continuada de professores para o uso crítico de tecnologias (ação), por meio de cursos integrados ao calendário escolar e ofertados em plataforma pública (meio), a fim de reduzir a desigualdade no acesso ao letramento digital (efeito), priorizando escolas de regiões com menor cobertura de internet (detalhamento)."',
      },
      {
        tipo: 'destaque',
        variante: 'atencao',
        titulo: 'O que anula a competência',
        texto:
          'Proposta que fere os direitos humanos — que defenda violência, pena de morte, tortura, discriminação ou supressão de direitos — anula a C5, por mais bem escrita que esteja. Esse critério é oficial e não admite exceção.',
      },
      {
        tipo: 'lista',
        itens: [
          'Agente genérico ("o governo deve") enfraquece a proposta. Especifique o órgão ou instituição.',
          'Ação vaga ("conscientizar a população") não é uma medida. Diga o que será feito.',
          'Sem o meio, a proposta não explica como a ação acontece.',
          'O detalhamento pode aprofundar qualquer um dos elementos — não precisa ser um sexto item novo.',
          'A proposta deve responder ao problema que VOCÊ apontou no texto, não a outro qualquer.',
        ],
      },
    ],
    checklist: [
      'Minha proposta nomeia um agente específico.',
      'A ação é concreta, não apenas "conscientizar".',
      'Expliquei o meio pelo qual a ação será executada.',
      'Indiquei o efeito esperado.',
      'Há detalhamento de pelo menos um dos elementos.',
      'A proposta respeita os direitos humanos.',
      'A proposta responde ao problema que meu texto levantou.',
    ],
    exercicio: {
      titulo: 'Proposta completa em cinco elementos',
      instrucao:
        'Escolha um tema social. Escreva uma única frase de proposta de intervenção contendo os cinco elementos. Depois sublinhe e nomeie cada elemento na sua frase.',
      criterios: [
        'Os cinco elementos estão presentes e identificáveis.',
        'O agente é específico, não "o governo".',
        'A ação é concreta o bastante para alguém executá-la.',
        'A proposta respeita os direitos humanos.',
      ],
      minutos: 12,
    },
  },
  {
    id: 'red-repertorio',
    titulo: 'Repertório: um banco pequeno e confiável',
    tipo: 'fundamento',
    resumo: 'Poucos repertórios que você domina valem mais que uma lista decorada que você não sabe explicar.',
    minutosEstimados: 15,
    conteudo: [
      {
        tipo: 'p',
        texto:
          'Repertório sociocultural é conhecimento de outras áreas usado para sustentar o argumento. A Competência 2 valoriza isso — mas valoriza o uso, não a citação.',
      },
      {
        tipo: 'destaque',
        variante: 'atencao',
        titulo: 'Regra de segurança',
        texto:
          'Só cite o que você tem certeza. Atribuir uma frase ao autor errado, inventar um dado ou citar um livro que você não leu é risco alto com benefício baixo. Um princípio constitucional bem aplicado vale mais que uma citação duvidosa.',
      },
      {
        tipo: 'p',
        texto:
          'Um banco enxuto e versátil funciona melhor do que uma lista longa. Abaixo, eixos que se aplicam a muitos temas diferentes — todos verificáveis e possíveis de explicar em uma frase.',
      },
      {
        tipo: 'tabela',
        cabecalho: ['Eixo', 'Repertório', 'Serve para temas de'],
        linhas: [
          ['Direitos', 'A CF/88 define saúde como direito de todos e dever do Estado, com acesso universal', 'saúde, desigualdade, acesso a serviços'],
          ['Direitos', 'Distinção entre igualdade formal e igualdade material', 'políticas afirmativas, inclusão, acessibilidade'],
          ['Política', 'Contrato social: o poder se legitima pela finalidade de proteger direitos (Locke)', 'papel do Estado, cidadania, segurança'],
          ['Política', 'Separação de poderes como limitação institucional do poder (Montesquieu)', 'democracia, instituições'],
          ['Trabalho', 'Precarização: perda de garantias sem perda da subordinação', 'tecnologia, trabalho por aplicativo, desigualdade'],
          ['Território', 'Segregação socioespacial: a desigualdade social se inscreve no território', 'mobilidade, moradia, saneamento, cidades'],
          ['Ambiente', 'Ciclo do carbono: a queima de fósseis injeta carbono retirado de circulação há milhões de anos', 'clima, energia, sustentabilidade'],
          ['Linguagem', 'Preconceito linguístico: julgamento social apresentado como julgamento gramatical', 'educação, cultura, exclusão'],
        ],
      },
      {
        tipo: 'p',
        texto:
          'Note que todos esses repertórios vêm de conteúdos que você estuda neste site para as questões objetivas. Estudar Humanas com atenção é, ao mesmo tempo, montar repertório de redação — é o melhor uso duplo do seu tempo.',
      },
      {
        tipo: 'destaque',
        variante: 'nota',
        titulo: 'Como transformar repertório em argumento',
        texto:
          'Frase 1: o argumento. Frase 2: o repertório, com precisão. Frase 3: como o repertório explica o argumento neste tema. Sem a frase 3, o repertório é decoração.',
      },
    ],
    checklist: [
      'Tenho pelo menos cinco repertórios que consigo explicar sem consultar nada.',
      'Cada um deles serve para mais de um tipo de tema.',
      'Não dependo de citações que eu não tenho certeza de estarem corretas.',
      'Sei usar a estrutura argumento → repertório → explicação.',
    ],
    exercicio: {
      titulo: 'Seu banco pessoal',
      instrucao:
        'Escreva cinco repertórios que você realmente domina. Para cada um, anote em uma linha o que é e em outra linha dois tipos de tema em que ele se encaixa.',
      criterios: [
        'Você consegue explicar cada um sem consultar.',
        'Cada repertório serve a pelo menos dois temas diferentes.',
        'Nenhum depende de informação que você não tem certeza.',
      ],
      minutos: 15,
    },
  },
  {
    id: 'red-planejamento',
    titulo: 'Planejar em 10 minutos',
    tipo: 'pratica',
    resumo: 'O roteiro que evita o texto que muda de direção no meio e sobra sem espaço para a conclusão.',
    minutosEstimados: 12,
    conteudo: [
      {
        tipo: 'p',
        texto:
          'No primeiro dia há 5h30 para 90 questões objetivas e a redação. Uma divisão de tempo que funciona: cerca de 1h30 para a redação, sendo 10 minutos de planejamento, 50 de escrita e 30 para passar a limpo e revisar.',
      },
      {
        tipo: 'p',
        texto:
          'Os 10 minutos de planejamento parecem um luxo quando o tempo é curto. Na prática, são o que evita o erro mais caro: descobrir na linha 20 que o texto foi para outro lugar.',
      },
      {
        tipo: 'lista',
        ordenada: true,
        itens: [
          'Minuto 1–2: leia a proposta e sublinhe o RECORTE exato do tema. Escreva-o com suas palavras.',
          'Minuto 3–4: leia os textos motivadores buscando o problema central — sem copiar nada deles.',
          'Minuto 5–6: escreva a tese em uma frase. Se não sai em uma frase, ela ainda não está clara.',
          'Minuto 7–8: defina os dois ângulos dos desenvolvimentos e o repertório de cada um.',
          'Minuto 9–10: escreva a ação central da proposta de intervenção. Só depois comece a redigir.',
        ],
      },
      {
        tipo: 'destaque',
        variante: 'atencao',
        titulo: 'Sobre os textos motivadores',
        texto:
          'Eles servem para delimitar o tema, não para serem copiados. As linhas copiadas dos textos motivadores são desconsideradas na contagem de linhas — e a cópia integral leva à nota zero.',
      },
      {
        tipo: 'p',
        texto:
          'Escrever a proposta de intervenção ANTES de redigir parece contraintuitivo, mas resolve dois problemas de uma vez: garante que ela existirá, e faz com que o texto inteiro caminhe na direção dela.',
      },
    ],
    checklist: [
      'Escrevi o recorte do tema com minhas palavras antes de começar.',
      'Tenho a tese em uma única frase.',
      'Sei os dois ângulos e o repertório de cada desenvolvimento.',
      'Já sei qual será a ação da proposta de intervenção.',
    ],
    exercicio: {
      titulo: 'Planejamento cronometrado',
      instrucao:
        'Escolha um tema social. Marque 10 minutos no relógio e execute o roteiro acima até o fim. Não escreva o texto — pare no planejamento.',
      criterios: [
        'Você terminou dentro dos 10 minutos.',
        'A tese cabe em uma frase.',
        'Os ângulos são distintos entre si.',
        'A proposta já está definida antes da redação começar.',
      ],
      minutos: 10,
    },
  },
  {
    id: 'red-nota-zero',
    titulo: 'O que leva à nota zero',
    tipo: 'fundamento',
    resumo: 'As situações que anulam a redação inteira — conhecer esta lista é obrigatório.',
    minutosEstimados: 8,
    conteudo: [
      {
        tipo: 'destaque',
        variante: 'oficial',
        titulo: 'Situações de nota zero (INEP)',
        texto:
          'Entre as situações previstas estão: fuga total ao tema; não obediência à estrutura dissertativo-argumentativa; texto com até 7 linhas; cópia integral de texto(s) motivador(es) da proposta e/ou do caderno de questões; e outras hipóteses previstas no edital, como folha em branco e desenhos ou impropérios no espaço da redação.',
      },
      {
        tipo: 'p',
        texto:
          'Duas dessas situações merecem atenção especial porque não dependem de descuido grosseiro — acontecem com quem estava escrevendo de boa-fé.',
      },
      {
        tipo: 'lista',
        itens: [
          'Fuga total ao tema: escrever sobre o assunto geral em vez do recorte proposto. É por isso que o primeiro passo do planejamento é reescrever o recorte com as próprias palavras.',
          'Desobediência ao tipo textual: produzir narrativa, poema, carta ou texto expositivo em vez de dissertativo-argumentativo.',
        ],
      },
      {
        tipo: 'destaque',
        variante: 'atencao',
        titulo: 'Tangenciamento não é o mesmo que fuga',
        texto:
          'Tangenciar é abordar o tema pela borda, sem tratar do recorte central — isso derruba muito a nota, mas não zera automaticamente. Fuga total é escrever sobre outro assunto, e essa zera. De todo modo, o remédio para os dois é o mesmo: delimitar o recorte antes de escrever.',
      },
      {
        tipo: 'p',
        texto:
          'Sobre a extensão: além do limite inferior que zera, há o limite superior de 30 linhas na folha definitiva. O que passar disso não é considerado. Por isso a distribuição de espaço entre os parágrafos faz parte do planejamento.',
      },
    ],
    checklist: [
      'Sei que fuga total ao tema zera a redação.',
      'Sei que preciso escrever um texto dissertativo-argumentativo, não outro gênero.',
      'Sei que copiar integralmente os textos motivadores zera.',
      'Sei que o texto tem limite de 30 linhas e um mínimo que precisa ser ultrapassado.',
    ],
  },
  {
    id: 'red-treino',
    titulo: 'Treino cronometrado e autoavaliação',
    tipo: 'pratica',
    resumo: 'Escrever uma redação por semana e conferir contra os cinco critérios — o que realmente faz a nota subir.',
    minutosEstimados: 90,
    conteudo: [
      {
        tipo: 'p',
        texto:
          'Volume sem correção não melhora nota. O que melhora é escrever, conferir contra os critérios, identificar o que falhou e corrigir aquilo na próxima. Por isso uma redação bem revisada por semana vale mais que três apressadas.',
      },
      {
        tipo: 'destaque',
        variante: 'nota',
        titulo: 'Por que este site não dá nota automática',
        texto:
          'Um corretor automático de C1 a C5 feito por regras daria uma nota com aparência de autoridade e conteúdo duvidoso — e você tomaria decisões de estudo baseadas nela. O checklist abaixo é honesto sobre o que é: uma autoavaliação estruturada pelos critérios oficiais.',
      },
      {
        tipo: 'lista',
        ordenada: true,
        itens: [
          'Escolha um tema social e marque 90 minutos.',
          'Planeje por 10 minutos seguindo o roteiro de planejamento.',
          'Escreva em 50 minutos, à mão, respeitando o limite de 30 linhas.',
          'Revise por 30 minutos: primeiro o conteúdo, depois a norma.',
          'Registre a autoavaliação por competência na tela de Redação e anote em uma linha o que falhou.',
        ],
      },
      {
        tipo: 'p',
        texto:
          'Escrever à mão e contar linhas de verdade faz diferença: o ritmo de escrita manual e o espaço disponível são parte do que você está treinando. Redação digitada engana sobre a extensão.',
      },
      {
        tipo: 'destaque',
        variante: 'atencao',
        titulo: 'Use a autoavaliação com honestidade',
        texto:
          'A autoavaliação só é útil se for rigorosa. Se você se dá 200 em todas as competências toda semana, ela não está medindo nada — e o registro no site deixa de servir para identificar o que precisa melhorar.',
      },
    ],
    checklist: [
      'Escrevi à mão, cronometrado e dentro de 30 linhas.',
      'Conferi cada uma das cinco competências separadamente.',
      'Anotei em uma linha o que falhou nesta redação.',
      'Registrei a autoavaliação para comparar com a próxima.',
    ],
    exercicio: {
      titulo: 'Redação completa cronometrada',
      instrucao:
        'Produza uma redação completa em 90 minutos, à mão, sobre um tema social atual. Ao terminar, avalie-se nas cinco competências e registre o resultado na tela de Redação.',
      criterios: [
        'O texto é dissertativo-argumentativo e cabe em 30 linhas.',
        'A tese está explícita na introdução.',
        'Há repertório explicado em pelo menos um desenvolvimento.',
        'A proposta de intervenção contém os cinco elementos.',
        'Você registrou a autoavaliação com honestidade.',
      ],
      minutos: 90,
    },
  },
];
