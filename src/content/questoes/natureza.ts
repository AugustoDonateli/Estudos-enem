import type { Questao } from '../tipos';

/** Banco de questões de Ciências da Natureza. Nenhuma é oficial do ENEM. */
export const QUESTOES_NATUREZA: Questao[] = [
  {
    id: 'cn-eco-q1',
    topicId: 'cn-ecologia',
    conceito: 'Magnificação trófica',
    procedencia: 'autoral',
    dificuldade: 'media',
    eixo: 'fenomenos',
    minutos: 3,
    enunciado: [
      {
        tipo: 'p',
        texto:
          'Um poluente lançado em um rio não é metabolizado nem excretado pelos organismos, acumulando-se em seus tecidos ao longo da vida. A cadeia alimentar local é: algas → pequenos crustáceos → peixes pequenos → peixes grandes.',
      },
      { tipo: 'p', texto: 'A maior concentração desse poluente por quilograma de tecido será encontrada' },
    ],
    alternativas: [
      {
        letra: 'A',
        texto: 'nas algas, por estarem em contato direto com a água contaminada.',
        correta: false,
        diagnostico:
          'O contato direto explica a entrada do poluente na cadeia, mas não a concentração. Como cada nível consome muitos indivíduos do nível anterior, a concentração sobe ao longo da cadeia.',
        tipoErro: 'conceito',
      },
      {
        letra: 'B',
        texto: 'nos pequenos crustáceos, por serem os consumidores mais numerosos.',
        correta: false,
        diagnostico: 'Ser numeroso não aumenta a concentração individual. O que importa é quanto cada indivíduo acumula ao longo da vida.',
        tipoErro: 'conceito',
      },
      {
        letra: 'C',
        texto: 'nos peixes pequenos, pois ocupam posição intermediária.',
        correta: false,
        diagnostico: 'Posição intermediária significa concentração intermediária — não a máxima.',
        tipoErro: 'conceito',
      },
      {
        letra: 'D',
        texto: 'nos peixes grandes, pois acumulam o que estava em toda a biomassa consumida.',
        correta: true,
        diagnostico:
          'Correto. Como a substância não é eliminada, cada nível incorpora o total acumulado por todos os indivíduos que consumiu — e a concentração cresce a cada elo.',
      },
      {
        letra: 'E',
        texto: 'de forma igual em todos os níveis, pois o poluente se dilui na água.',
        correta: false,
        diagnostico:
          'O enunciado diz que o poluente não é metabolizado nem excretado. Substâncias assim se concentram nos tecidos em vez de se diluírem.',
        tipoErro: 'leitura',
      },
    ],
    explicacao: [
      {
        tipo: 'p',
        texto:
          'Duas ideias se somam aqui. A primeira: a transferência de energia entre níveis tróficos é ineficiente, então é preciso muita biomassa do nível anterior para sustentar o seguinte.',
      },
      {
        tipo: 'p',
        texto:
          'A segunda: se o poluente não é eliminado, ele não se perde na transferência. A energia diminui a cada elo, mas a substância acumulada se mantém e passa a estar concentrada em menos massa — por isso os predadores de topo são os mais afetados.',
      },
      {
        tipo: 'diagrama',
        nome: 'fluxo-energia',
        legenda:
          'A energia cai cerca de 90% a cada nível trófico, o que limita o número de elos. Poluentes não degradáveis fazem o caminho oposto: concentram-se a cada elo.',
      },
    ],
    irmas: ['cn-eco-q2'],
  },
  {
    id: 'cn-eco-q2',
    topicId: 'cn-ecologia',
    conceito: 'Ciclo do carbono e combustíveis fósseis',
    procedencia: 'autoral',
    dificuldade: 'media',
    eixo: 'fenomenos',
    minutos: 3,
    enunciado: [
      {
        tipo: 'p',
        texto:
          'Tanto a respiração dos seres vivos quanto a queima de combustíveis fósseis liberam CO₂ na atmosfera. Ainda assim, apenas a segunda é apontada como principal responsável pelo aumento recente da concentração atmosférica desse gás.',
      },
      { tipo: 'p', texto: 'A explicação para essa diferença é que' },
    ],
    alternativas: [
      {
        letra: 'A',
        texto: 'a respiração libera um tipo de CO₂ quimicamente diferente do liberado na queima.',
        correta: false,
        diagnostico: 'A molécula é a mesma. A diferença não é química — é a origem do carbono e a escala de tempo envolvida.',
        tipoErro: 'conceito',
      },
      {
        letra: 'B',
        texto: 'a queima libera carbono que estava retirado de circulação há milhões de anos.',
        correta: true,
        diagnostico:
          'Correto. A respiração devolve carbono que foi fixado há pouco pela fotossíntese; a queima adiciona carbono de um reservatório geológico, fora do ciclo rápido.',
      },
      {
        letra: 'C',
        texto: 'a respiração consome mais CO₂ do que libera.',
        correta: false,
        diagnostico:
          'Respiração libera CO₂; quem consome é a fotossíntese. A alternativa troca os dois processos.',
        tipoErro: 'conceito',
      },
      {
        letra: 'D',
        texto: 'o CO₂ da respiração é absorvido imediatamente pelos oceanos.',
        correta: false,
        diagnostico:
          'Os oceanos absorvem CO₂ de qualquer origem, sem distinguir a fonte. Isso não explica a diferença.',
        tipoErro: 'distrator',
      },
      {
        letra: 'E',
        texto: 'a quantidade liberada pela respiração é desprezível em escala planetária.',
        correta: false,
        diagnostico:
          'A respiração global libera muito CO₂ — só que esse carbono é reabsorvido pela fotossíntese, mantendo o ciclo aproximadamente equilibrado.',
        tipoErro: 'conceito',
      },
    ],
    explicacao: [
      {
        tipo: 'p',
        texto:
          'O ciclo do carbono tem um componente rápido — fotossíntese, respiração e decomposição, que trocam carbono em escala de anos — e um componente lento, em que o carbono fica retido em rochas e combustíveis fósseis por milhões de anos.',
      },
      {
        tipo: 'p',
        texto:
          'Queimar combustível fóssil transfere carbono do reservatório lento para o rápido, em ritmo muito superior ao que o sistema consegue reabsorver. É esse desequilíbrio, e não a molécula em si, que explica o aumento da concentração atmosférica.',
      },
      {
        tipo: 'diagrama',
        nome: 'ciclo-carbono',
        legenda:
          'A fotossíntese retira CO₂ da atmosfera; respiração, decomposição e combustão devolvem. A combustão de fósseis é a única que injeta carbono vindo de fora do ciclo rápido.',
      },
    ],
    irmas: ['cn-eco-q1'],
  },

  {
    id: 'cn-eco-q3',
    topicId: 'cn-ecologia',
    conceito: 'Fluxo de energia entre níveis tróficos',
    procedencia: 'autoral',
    dificuldade: 'media',
    eixo: 'problemas',
    minutos: 3,
    enunciado: [
      {
        tipo: 'p',
        texto:
          'Em um ecossistema, os produtores fixam 20 000 kcal. Considere que, a cada transferência para o nível trófico seguinte, aproximadamente 90% da energia é perdida, sobretudo como calor.',
      },
      { tipo: 'p', texto: 'A energia disponível para um consumidor terciário é de, aproximadamente,' },
    ],
    alternativas: [
      {
        letra: 'A',
        texto: '2 kcal.',
        correta: false,
        diagnostico:
          'Você aplicou a perda quatro vezes. Do produtor ao consumidor terciário são três transferências: primário, secundário e terciário.',
        tipoErro: 'calculo',
      },
      {
        letra: 'B',
        texto: '20 kcal.',
        correta: true,
        diagnostico:
          'Correto. 20 000 → 2 000 (primário) → 200 (secundário) → 20 (terciário). São três transferências, cada uma conservando cerca de 10%.',
      },
      {
        letra: 'C',
        texto: '200 kcal.',
        correta: false,
        diagnostico:
          'Você parou no consumidor secundário. Falta a transferência para o terciário, que reduz o valor a um décimo de novo.',
        tipoErro: 'calculo',
      },
      {
        letra: 'D',
        texto: '2 000 kcal.',
        correta: false,
        diagnostico:
          'Este é o valor disponível para o consumidor primário, o primeiro nível após os produtores.',
        tipoErro: 'leitura',
      },
      {
        letra: 'E',
        texto: '18 000 kcal.',
        correta: false,
        diagnostico:
          'Você subtraiu 10% uma vez, em vez de conservar 10%. A regra é o inverso: cerca de 90% se perde e apenas um décimo passa adiante.',
        tipoErro: 'conceito',
      },
    ],
    explicacao: [
      {
        tipo: 'p',
        texto:
          'O fluxo de energia é unidirecional e decrescente: cada nível gasta a maior parte do que recebe em respiração e movimento, e essa energia sai do sistema como calor — não volta para a cadeia.',
      },
      {
        tipo: 'formula',
        latexLike:
          'produtores        20 000 kcal\nconsumidor 1º      2 000 kcal\nconsumidor 2º        200 kcal\nconsumidor 3º         20 kcal',
        legenda: 'Três transferências, cada uma conservando cerca de 10% do nível anterior.',
      },
      {
        tipo: 'p',
        texto:
          'É essa queda acentuada que explica por que cadeias alimentares raramente passam de quatro ou cinco níveis, e por que há muito menos predadores de topo do que presas.',
      },
    ],
    irmas: ['cn-eco-q1'],
  },
  {
    id: 'cn-eco-q4',
    topicId: 'cn-ecologia',
    conceito: 'Eutrofização',
    procedencia: 'autoral',
    dificuldade: 'media',
    eixo: 'fenomenos',
    minutos: 3,
    enunciado: [
      {
        tipo: 'p',
        texto:
          'Um lago recebe esgoto doméstico sem tratamento e fertilizantes carregados pela chuva. Meses depois, a superfície está coberta por uma densa camada de algas, a água ficou turva e há mortandade de peixes.',
      },
      { tipo: 'p', texto: 'A mortandade dos peixes é explicada principalmente porque' },
    ],
    alternativas: [
      {
        letra: 'A',
        texto:
          'a decomposição da grande massa de algas consome o oxigênio dissolvido na água.',
        correta: true,
        diagnostico:
          'Correto. O excesso de nutrientes provoca proliferação de algas; quando elas morrem, a decomposição por bactérias aeróbias consome o oxigênio dissolvido, e os peixes morrem asfixiados.',
      },
      {
        letra: 'B',
        texto: 'as algas retiram diretamente o alimento dos peixes, causando inanição.',
        correta: false,
        diagnostico:
          'A competição por alimento não é o mecanismo central da eutrofização. O que mata em massa e rapidamente é a queda do oxigênio dissolvido.',
        tipoErro: 'conceito',
      },
      {
        letra: 'C',
        texto: 'a fotossíntese das algas eleva o oxigênio a níveis tóxicos para os peixes.',
        correta: false,
        diagnostico:
          'O problema é falta de oxigênio, não excesso. Além disso, a camada superficial densa reduz a luz que chega ao fundo, limitando a fotossíntese nas camadas inferiores.',
        tipoErro: 'conceito',
      },
      {
        letra: 'D',
        texto: 'o esgoto eleva a temperatura da água acima do tolerado pelas espécies.',
        correta: false,
        diagnostico:
          'Poluição térmica existe, mas não é o que o enunciado descreve. Aqui o agente é a carga de nutrientes — esgoto e fertilizante —, não calor.',
        tipoErro: 'leitura',
      },
      {
        letra: 'E',
        texto: 'os fertilizantes reduzem a quantidade de nutrientes disponíveis no lago.',
        correta: false,
        diagnostico:
          'Fertilizante faz o contrário: aumenta a oferta de nutrientes, sobretudo nitrogênio e fósforo. É justamente esse excesso que dispara o processo.',
        tipoErro: 'leitura',
      },
    ],
    explicacao: [
      {
        tipo: 'p',
        texto:
          'Eutrofização é o enriquecimento da água por nutrientes, em geral nitrogênio e fósforo vindos de esgoto e fertilizante. A sequência é sempre a mesma: nutrientes em excesso, proliferação de algas, morte das algas, decomposição, queda do oxigênio dissolvido, mortandade de peixes.',
      },
      {
        tipo: 'destaque',
        variante: 'atencao',
        titulo: 'O passo que costuma ser pulado',
        texto:
          'Algas vivas produzem oxigênio. O problema não são as algas enquanto vivem — é a decomposição delas depois, que consome mais oxigênio do que o sistema consegue repor.',
      },
    ],
    irmas: ['cn-eco-q2'],
  },
  {
    id: 'cn-corpo-q1',
    topicId: 'cn-corpo-humano',
    conceito: 'Homeostase e regulação da glicemia',
    procedencia: 'autoral',
    dificuldade: 'media',
    eixo: 'fenomenos',
    minutos: 3,
    enunciado: [
      {
        tipo: 'p',
        texto:
          'Após uma refeição rica em carboidratos, a concentração de glicose no sangue aumenta. Em uma pessoa saudável, o pâncreas responde liberando insulina, que estimula a captação de glicose pelas células e o armazenamento do excedente.',
      },
      { tipo: 'p', texto: 'O processo descrito é um exemplo de' },
    ],
    alternativas: [
      {
        letra: 'A',
        texto: 'retroalimentação negativa, pois a resposta reduz o estímulo que a desencadeou.',
        correta: true,
        diagnostico:
          'Correto. O aumento da glicose provoca uma resposta que faz a glicose baixar — a resposta age contra o desvio, que é a definição de retroalimentação negativa.',
      },
      {
        letra: 'B',
        texto: 'retroalimentação positiva, pois a resposta amplifica o estímulo inicial.',
        correta: false,
        diagnostico:
          'Retroalimentação positiva amplifica o desvio (como nas contrações do parto). Aqui a resposta corrige o desvio.',
        tipoErro: 'conceito',
      },
      {
        letra: 'C',
        texto: 'resposta imunológica, pois envolve reconhecimento de moléculas.',
        correta: false,
        diagnostico: 'Não há antígeno nem defesa contra agente estranho — trata-se de regulação metabólica.',
        tipoErro: 'conceito',
      },
      {
        letra: 'D',
        texto: 'digestão química, pois ocorre após a refeição.',
        correta: false,
        diagnostico:
          'Ocorrer após a refeição não faz o processo ser digestão. A digestão quebra o alimento; aqui a glicose já está no sangue.',
        tipoErro: 'leitura',
      },
      {
        letra: 'E',
        texto: 'reflexo nervoso, pois a resposta é imediata.',
        correta: false,
        diagnostico:
          'A mensagem é química e transportada pelo sangue: é regulação hormonal, não um arco reflexo nervoso.',
        tipoErro: 'conceito',
      },
    ],
    explicacao: [
      {
        tipo: 'p',
        texto:
          'Homeostase é a manutenção de condições internas relativamente estáveis. Quase toda regulação do corpo funciona por retroalimentação negativa: o desvio dispara uma resposta que o corrige.',
      },
      {
        tipo: 'tabela',
        cabecalho: ['Situação', 'Detecção', 'Resposta', 'Efeito'],
        linhas: [
          ['Glicose alta', 'pâncreas', 'libera insulina', 'células captam glicose; glicemia cai'],
          ['Glicose baixa', 'pâncreas', 'libera glucagon', 'fígado libera glicose; glicemia sobe'],
          ['Temperatura alta', 'hipotálamo', 'sudorese, vasodilatação', 'perda de calor; temperatura cai'],
        ],
      },
      {
        tipo: 'p',
        texto:
          'Reconhecer o padrão "desvio → resposta que corrige o desvio" resolve a maioria dos itens de fisiologia integrada, mesmo com hormônios que você não estudou em detalhe.',
      },
    ],
    irmas: ['cn-corpo-q2'],
  },
  {
    id: 'cn-corpo-q2',
    topicId: 'cn-corpo-humano',
    conceito: 'Transporte de gases e intoxicação por monóxido de carbono',
    procedencia: 'autoral',
    dificuldade: 'media',
    eixo: 'fenomenos',
    minutos: 3,
    enunciado: [
      {
        tipo: 'p',
        texto:
          'O monóxido de carbono (CO), produzido na queima incompleta de combustíveis, liga-se à hemoglobina com afinidade muito maior que o oxigênio. Uma pessoa exposta ao CO em ambiente fechado pode sofrer hipóxia mesmo respirando normalmente e com os pulmões íntegros.',
      },
      { tipo: 'p', texto: 'A explicação para a hipóxia nessa situação é que o CO' },
    ],
    alternativas: [
      {
        letra: 'A',
        texto: 'impede a entrada de ar nos pulmões, reduzindo a ventilação.',
        correta: false,
        diagnostico:
          'O enunciado afirma que a pessoa respira normalmente e os pulmões estão íntegros. O problema não está na ventilação.',
        tipoErro: 'leitura',
      },
      {
        letra: 'B',
        texto: 'ocupa na hemoglobina os sítios que transportariam oxigênio.',
        correta: true,
        diagnostico:
          'Correto. Com afinidade muito maior, o CO ocupa os sítios de ligação e reduz drasticamente a capacidade do sangue de transportar oxigênio aos tecidos.',
      },
      {
        letra: 'C',
        texto: 'destrói os alvéolos pulmonares, impedindo a troca gasosa.',
        correta: false,
        diagnostico: 'Não há lesão alveolar descrita; a troca nos pulmões continua ocorrendo.',
        tipoErro: 'leitura',
      },
      {
        letra: 'D',
        texto: 'reduz a quantidade de oxigênio presente no ar ambiente.',
        correta: false,
        diagnostico:
          'Ainda que houvesse alguma redução, o mecanismo central da intoxicação é a competição pela hemoglobina — e é isso que o enunciado destaca.',
        tipoErro: 'distrator',
      },
      {
        letra: 'E',
        texto: 'acelera o batimento cardíaco, sobrecarregando o coração.',
        correta: false,
        diagnostico:
          'A taquicardia é uma resposta compensatória do organismo à falta de oxigênio, e não a causa da hipóxia.',
        tipoErro: 'conceito',
      },
    ],
    explicacao: [
      {
        tipo: 'p',
        texto:
          'A respiração tem três etapas: ventilação (entrada e saída de ar), troca gasosa (alvéolo-sangue) e transporte (sangue-tecidos). O CO não afeta as duas primeiras: ele bloqueia a terceira.',
      },
      {
        tipo: 'p',
        texto:
          'Isso explica por que a intoxicação é perigosa e silenciosa: sem falta de ar aparente, os tecidos deixam de receber oxigênio. É também por isso que motores e aquecedores não devem funcionar em ambientes fechados.',
      },
    ],
    irmas: ['cn-corpo-q1'],
  },

  {
    id: 'cn-corpo-q3',
    topicId: 'cn-corpo-humano',
    conceito: 'Vacina e soro: imunidade ativa e passiva',
    procedencia: 'autoral',
    dificuldade: 'media',
    eixo: 'fenomenos',
    minutos: 3,
    enunciado: [
      {
        tipo: 'p',
        texto:
          'Uma pessoa é picada por um animal peçonhento e levada ao pronto-socorro. O protocolo indica a aplicação de soro antiveneno, e não de vacina.',
      },
      { tipo: 'p', texto: 'A escolha pelo soro se justifica porque ele' },
    ],
    alternativas: [
      {
        letra: 'A',
        texto:
          'fornece anticorpos prontos, com efeito imediato, enquanto a vacina levaria dias para gerar resposta.',
        correta: true,
        diagnostico:
          'Correto. O soro é imunização passiva: os anticorpos já vêm prontos e agem de imediato — que é o que o quadro exige. A vacina depende de o organismo produzir a própria resposta, o que leva dias ou semanas.',
      },
      {
        letra: 'B',
        texto: 'estimula o organismo a produzir anticorpos de forma mais rápida que a vacina.',
        correta: false,
        diagnostico:
          'O soro não estimula produção: ele entrega anticorpos prontos. Quem estimula a produção própria é a vacina, e é justamente isso que a torna lenta demais para uma emergência.',
        tipoErro: 'conceito',
      },
      {
        letra: 'C',
        texto: 'gera memória imunológica duradoura contra o veneno.',
        correta: false,
        diagnostico:
          'Memória é característica da imunização ativa, produzida pela vacina. O soro não deixa memória — em uma nova picada, será preciso soro de novo.',
        tipoErro: 'conceito',
      },
      {
        letra: 'D',
        texto: 'contém o veneno atenuado, o que provoca resposta imune controlada.',
        correta: false,
        diagnostico:
          'Essa é a descrição de uma vacina, não de um soro. O soro contém anticorpos, não o agente atenuado.',
        tipoErro: 'conceito',
      },
      {
        letra: 'E',
        texto: 'elimina a necessidade de qualquer resposta imune por parte do paciente.',
        correta: false,
        diagnostico:
          'O soro neutraliza o veneno circulante, mas o sistema imune do paciente continua atuando normalmente no organismo. A afirmação é ampla demais.',
        tipoErro: 'distrator',
      },
    ],
    explicacao: [
      {
        tipo: 'p',
        texto:
          'A distinção entre soro e vacina é a distinção entre receber anticorpos e produzir anticorpos — e ela decide qual dos dois serve em cada situação.',
      },
      {
        tipo: 'tabela',
        cabecalho: ['', 'Vacina', 'Soro'],
        linhas: [
          ['Tipo de imunização', 'Ativa', 'Passiva'],
          ['O que contém', 'Antígeno (agente atenuado, inativado ou fragmento)', 'Anticorpos prontos'],
          ['Início do efeito', 'Dias a semanas', 'Imediato'],
          ['Memória imunológica', 'Sim', 'Não'],
          ['Uso típico', 'Prevenção, antes do contato', 'Tratamento, depois do contato'],
        ],
      },
      {
        tipo: 'p',
        texto:
          'Regra prática para a prova: vacina é prevenção e olha para o futuro; soro é tratamento e resolve o agora. Por isso não existe “vacina contra picada” aplicada no pronto-socorro.',
      },
    ],
    irmas: ['cn-corpo-q2'],
  },
  {
    id: 'cn-corpo-q4',
    topicId: 'cn-corpo-humano',
    conceito: 'Digestão e absorção no intestino delgado',
    procedencia: 'autoral',
    dificuldade: 'media',
    eixo: 'fenomenos',
    minutos: 3,
    enunciado: [
      {
        tipo: 'p',
        texto:
          'Após uma cirurgia, um paciente teve removida uma extensa porção do intestino delgado. Mesmo mantendo alimentação adequada em quantidade, passou a apresentar perda de peso e deficiências nutricionais.',
      },
      { tipo: 'p', texto: 'Esse quadro é explicado porque o intestino delgado é o principal local de' },
    ],
    alternativas: [
      {
        letra: 'A',
        texto: 'absorção dos nutrientes, função favorecida por sua grande superfície interna.',
        correta: true,
        diagnostico:
          'Correto. As vilosidades e microvilosidades multiplicam a superfície de contato do intestino delgado. Reduzir essa área reduz a absorção, mesmo que a digestão e a ingestão estejam normais.',
      },
      {
        letra: 'B',
        texto: 'armazenamento do bolo alimentar antes da digestão química.',
        correta: false,
        diagnostico:
          'O armazenamento temporário ocorre no estômago. O intestino delgado não tem função de reservatório.',
        tipoErro: 'conceito',
      },
      {
        letra: 'C',
        texto: 'absorção de água, responsável pela formação das fezes.',
        correta: false,
        diagnostico:
          'A absorção final de água e a formação das fezes ocorrem sobretudo no intestino grosso. A deficiência descrita é nutricional, não de hidratação.',
        tipoErro: 'conceito',
      },
      {
        letra: 'D',
        texto: 'produção de bile, necessária à emulsificação das gorduras.',
        correta: false,
        diagnostico:
          'A bile é produzida no fígado e armazenada na vesícula biliar; ela apenas atua no intestino delgado, mas não é produzida ali.',
        tipoErro: 'conceito',
      },
      {
        letra: 'E',
        texto: 'início da digestão de proteínas pela ação do suco gástrico.',
        correta: false,
        diagnostico:
          'A digestão de proteínas começa no estômago, com o suco gástrico. O enunciado trata de perda nutricional por falta de área intestinal, não de início de digestão.',
        tipoErro: 'leitura',
      },
    ],
    explicacao: [
      {
        tipo: 'p',
        texto:
          'Digerir e absorver são etapas distintas. Digestão quebra macromoléculas em unidades pequenas; absorção transfere essas unidades para o sangue e a linfa. O paciente do enunciado digere bem — o que falta é superfície para absorver.',
      },
      {
        tipo: 'p',
        texto:
          'A anatomia explica a função: pregas, vilosidades e microvilosidades transformam um tubo de poucos metros em uma área de absorção muito maior. Sempre que uma questão fala em superfície aumentada em órgão tubular, a função em jogo é troca.',
      },
    ],
    irmas: ['cn-corpo-q1'],
  },
  {
    id: 'cn-gen-q1',
    topicId: 'cn-genetica',
    conceito: 'Cruzamento monoíbrido e probabilidade',
    procedencia: 'autoral',
    dificuldade: 'media',
    eixo: 'problemas',
    minutos: 3,
    enunciado: [
      {
        tipo: 'p',
        texto:
          'Uma característica humana é determinada por um gene autossômico com dois alelos, em que o alelo para a condição é recessivo. Um casal, em que ambos são heterozigotos, planeja ter filhos.',
      },
      { tipo: 'p', texto: 'A probabilidade de que o primeiro filho do casal apresente a condição é de' },
    ],
    alternativas: [
      {
        letra: 'A',
        texto: '0%.',
        correta: false,
        diagnostico:
          'Heterozigotos carregam o alelo recessivo sem manifestá-lo. Dois portadores podem, sim, ter um filho afetado.',
        tipoErro: 'conceito',
      },
      {
        letra: 'B',
        texto: '25%.',
        correta: true,
        diagnostico:
          'Correto. No cruzamento Aa × Aa, a proporção esperada é 1 AA : 2 Aa : 1 aa. Apenas aa manifesta a condição, ou seja, 1 em 4.',
      },
      {
        letra: 'C',
        texto: '50%.',
        correta: false,
        diagnostico:
          '50% é a proporção de heterozigotos (Aa) — que são portadores, mas não manifestam a condição. Você confundiu portador com afetado.',
        tipoErro: 'conceito',
      },
      {
        letra: 'D',
        texto: '75%.',
        correta: false,
        diagnostico: 'Esta é a proporção de indivíduos que NÃO manifestam a condição (AA + Aa).',
        tipoErro: 'leitura',
      },
      {
        letra: 'E',
        texto: '100%.',
        correta: false,
        diagnostico: 'Isso ocorreria se ambos os pais fossem homozigotos recessivos (aa × aa).',
        tipoErro: 'conceito',
      },
    ],
    explicacao: [
      {
        tipo: 'tabela',
        cabecalho: ['', 'A (mãe)', 'a (mãe)'],
        linhas: [
          ['A (pai)', 'AA — não afetado', 'Aa — portador'],
          ['a (pai)', 'Aa — portador', 'aa — afetado'],
        ],
        legenda: 'Quadro de Punnett do cruzamento Aa × Aa: 1 AA : 2 Aa : 1 aa.',
      },
      {
        tipo: 'destaque',
        variante: 'atencao',
        titulo: 'Duas armadilhas frequentes',
        texto:
          'Primeira: "portador" (Aa) não é "afetado" (aa). Segunda: a probabilidade é a mesma para cada filho — ter um filho afetado não muda a chance do próximo, porque os eventos são independentes.',
      },
    ],
    irmas: ['cn-gen-q2'],
  },
  {
    id: 'cn-gen-q2',
    topicId: 'cn-genetica',
    conceito: 'Herança ligada ao cromossomo X',
    procedencia: 'autoral',
    dificuldade: 'dificil',
    eixo: 'problemas',
    minutos: 4,
    enunciado: [
      {
        tipo: 'p',
        texto:
          'O daltonismo é determinado por um alelo recessivo localizado no cromossomo X. Uma mulher com visão normal, cujo pai era daltônico, tem filhos com um homem de visão normal.',
      },
      { tipo: 'p', texto: 'Sobre a descendência desse casal, é correto afirmar que' },
    ],
    alternativas: [
      {
        letra: 'A',
        texto: 'todos os filhos homens serão daltônicos.',
        correta: false,
        diagnostico:
          'A mãe é heterozigota: ela transmite o X com o alelo para daltonismo a metade dos filhos, não a todos.',
        tipoErro: 'calculo',
      },
      {
        letra: 'B',
        texto: 'metade dos filhos homens deve ser daltônica, e nenhuma filha será daltônica.',
        correta: true,
        diagnostico:
          'Correto. A mãe é X^A X^a (recebeu X^a do pai daltônico). Os filhos homens recebem X dela: metade X^a, e como têm só um X, manifestam. As filhas recebem X^A do pai, então nenhuma é daltônica — embora metade seja portadora.',
      },
      {
        letra: 'C',
        texto: 'metade das filhas será daltônica.',
        correta: false,
        diagnostico:
          'Para uma filha ser daltônica, precisaria receber o alelo dos DOIS pais. O pai tem visão normal, então transmite X^A a todas.',
        tipoErro: 'conceito',
      },
      {
        letra: 'D',
        texto: 'nenhum descendente será daltônico, pois ambos os pais têm visão normal.',
        correta: false,
        diagnostico:
          'A mãe é portadora, e homens manifestam a condição com um único alelo recessivo. Fenótipo normal dos pais não exclui descendente afetado.',
        tipoErro: 'conceito',
      },
      {
        letra: 'E',
        texto: 'todas as filhas serão portadoras do alelo.',
        correta: false,
        diagnostico:
          'Metade das filhas recebe X^a da mãe e metade recebe X^A. Portanto, metade é portadora, não todas.',
        tipoErro: 'calculo',
      },
    ],
    explicacao: [
      {
        tipo: 'lista',
        ordenada: true,
        itens: [
          'O pai da mulher era daltônico (X^a Y) e transmite obrigatoriamente seu X^a a todas as filhas — logo, ela é X^A X^a.',
          'O marido tem visão normal: X^A Y.',
          'Filhas: recebem X^A do pai e, da mãe, X^A ou X^a. Resultado: X^A X^A ou X^A X^a — nenhuma daltônica, metade portadora.',
          'Filhos: recebem Y do pai e, da mãe, X^A ou X^a. Metade X^a Y, ou seja, daltônicos.',
        ],
      },
      {
        tipo: 'destaque',
        variante: 'nota',
        titulo: 'Por que homens são mais afetados',
        texto:
          'Homens têm um único X. Um alelo recessivo nele já se manifesta, sem par para compensar. Por isso condições ligadas ao X aparecem muito mais em homens.',
      },
    ],
    irmas: ['cn-gen-q1'],
  },

  {
    id: 'cn-gen-q3',
    topicId: 'cn-genetica',
    conceito: 'Portador e afetado em heredograma',
    procedencia: 'autoral',
    dificuldade: 'dificil',
    eixo: 'problemas',
    minutos: 4,
    enunciado: [
      {
        tipo: 'p',
        texto:
          'Uma doença humana é determinada por um alelo autossômico recessivo. Um casal, em que nenhum dos dois manifesta a doença, teve um filho afetado. O casal tem outra filha, que não manifesta a doença.',
      },
      { tipo: 'p', texto: 'A probabilidade de essa filha ser heterozigota (portadora) é de' },
    ],
    alternativas: [
      {
        letra: 'A',
        texto: '1/4.',
        correta: false,
        diagnostico:
          'Esta é a probabilidade de um filho qualquer do casal nascer afetado, antes de qualquer informação adicional. A pergunta já informa que ela não é afetada.',
        tipoErro: 'leitura',
      },
      {
        letra: 'B',
        texto: '1/3.',
        correta: false,
        diagnostico:
          'Você inverteu a razão. Entre os três genótipos possíveis para quem não manifesta a doença, um é homozigoto dominante e dois são heterozigotos — logo 2/3, não 1/3.',
        tipoErro: 'calculo',
      },
      {
        letra: 'C',
        texto: '1/2.',
        correta: false,
        diagnostico:
          'Metade seria a resposta se os genótipos possíveis fossem apenas AA e Aa em igual proporção. Mas Aa aparece duas vezes no cruzamento Aa × Aa, o que desequilibra a conta.',
        tipoErro: 'conceito',
      },
      {
        letra: 'D',
        texto: '2/3.',
        correta: true,
        diagnostico:
          'Correto. Como o casal gerou um filho aa, ambos são Aa. O cruzamento Aa × Aa dá 1 AA : 2 Aa : 1 aa. Saber que a filha não é afetada elimina o aa, restando 1 AA : 2 Aa — logo 2/3 de chance de ser portadora.',
      },
      {
        letra: 'E',
        texto: '3/4.',
        correta: false,
        diagnostico:
          'Esta é a probabilidade de um filho qualquer do casal não manifestar a doença. Ela responde a outra pergunta: a que já foi respondida pelo enunciado.',
        tipoErro: 'leitura',
      },
    ],
    explicacao: [
      {
        tipo: 'p',
        texto:
          'Primeiro passo: deduzir os genótipos dos pais. Nenhum deles manifesta a doença, mas geraram um filho aa — logo cada um forneceu um alelo a, e ambos são necessariamente Aa.',
      },
      {
        tipo: 'formula',
        latexLike:
          'Aa × Aa  →  1 AA : 2 Aa : 1 aa\ninformação: a filha NÃO é afetada  →  elimina aa\nrestam: 1 AA : 2 Aa\nP(heterozigota) = 2 / 3',
        legenda: 'A informação “não afetada” não é enfeite: ela reduz o espaço de possibilidades.',
      },
      {
        tipo: 'destaque',
        variante: 'atencao',
        titulo: 'O 2/3 que quase todo mundo erra',
        texto:
          'Portador não é afetado — e essa distinção muda a conta. Sempre que o enunciado afirmar que alguém não manifesta a doença, risque o aa antes de calcular qualquer probabilidade.',
      },
    ],
    irmas: ['cn-gen-q1'],
  },
  {
    id: 'cn-gen-q4',
    topicId: 'cn-genetica',
    conceito: 'Independência entre gestações',
    procedencia: 'autoral',
    dificuldade: 'media',
    eixo: 'problemas',
    minutos: 3,
    enunciado: [
      {
        tipo: 'p',
        texto:
          'Um casal heterozigoto para uma doença autossômica recessiva (Aa × Aa) teve três filhos, todos afetados pela doença. O casal planeja uma quarta gestação.',
      },
      { tipo: 'p', texto: 'A probabilidade de essa quarta criança nascer afetada é de' },
    ],
    alternativas: [
      {
        letra: 'A',
        texto: '0, pois as probabilidades já se esgotaram nos filhos anteriores.',
        correta: false,
        diagnostico:
          'Probabilidade não é uma cota que se gasta. Os gametas de cada gestação se combinam ao acaso, sem registro do que aconteceu antes.',
        tipoErro: 'conceito',
      },
      {
        letra: 'B',
        texto: '1/64, pois é preciso multiplicar as chances das quatro gestações.',
        correta: false,
        diagnostico:
          'Multiplicar faria sentido para a pergunta “qual a chance de os quatro nascerem afetados?”, feita antes de qualquer nascimento. Aqui três já nasceram: a pergunta é só sobre a próxima.',
        tipoErro: 'conceito',
      },
      {
        letra: 'C',
        texto: '1/4, pois cada gestação é um evento independente.',
        correta: true,
        diagnostico:
          'Correto. Em Aa × Aa, a chance de aa é 1/4 em qualquer gestação, independentemente do resultado das anteriores.',
      },
      {
        letra: 'D',
        texto: '1/2, pois metade dos filhos de heterozigotos é afetada.',
        correta: false,
        diagnostico:
          'A proporção esperada em Aa × Aa é 1 AA : 2 Aa : 1 aa, ou seja, 1/4 de afetados — não metade. A metade corresponde aos heterozigotos.',
        tipoErro: 'calculo',
      },
      {
        letra: 'E',
        texto: '1, pois o padrão observado nos três filhos deve se manter.',
        correta: false,
        diagnostico:
          'Três resultados iguais não estabelecem regra: com 1/4 por gestação, a sequência é improvável, mas perfeitamente possível — e não altera a próxima.',
        tipoErro: 'conceito',
      },
    ],
    explicacao: [
      {
        tipo: 'p',
        texto:
          'Cada fecundação envolve um gameta aleatório de cada progenitor. Nada no processo guarda memória das gestações anteriores, e é isso que significa dizer que os eventos são independentes.',
      },
      {
        tipo: 'p',
        texto:
          'A confusão vem de misturar duas perguntas diferentes: “qual a chance desta gestação?” (1/4, sempre) e “qual era a chance de quatro seguidas afetadas?” (1/4 elevado à quarta potência, calculada antes de todas). A segunda só faz sentido antes do primeiro nascimento.',
      },
      {
        tipo: 'destaque',
        variante: 'nota',
        titulo: 'Onde isso aparece fora da genética',
        texto:
          'É o mesmo raciocínio da moeda: cinco caras seguidas não tornam coroa mais provável na sexta jogada. O ENEM costuma cobrar essa ideia tanto em Genética quanto em Probabilidade.',
      },
    ],
    irmas: ['cn-gen-q1', 'cn-gen-q3'],
  },
  {
    id: 'cn-est-q1',
    topicId: 'cn-estequiometria',
    conceito: 'Mol e massa molar em reação de combustão',
    procedencia: 'autoral',
    dificuldade: 'media',
    eixo: 'problemas',
    minutos: 4,
    enunciado: [
      {
        tipo: 'p',
        texto:
          'Na combustão completa do carbono, ocorre a reação C + O₂ → CO₂. Considere as massas molares: C = 12 g/mol, O = 16 g/mol.',
      },
      { tipo: 'p', texto: 'A massa de CO₂ produzida na combustão completa de 12 g de carbono é de' },
    ],
    alternativas: [
      {
        letra: 'A',
        texto: '12 g.',
        correta: false,
        diagnostico:
          'Você repetiu a massa do carbono. A massa se conserva na reação, mas o produto incorpora também os átomos de oxigênio.',
        tipoErro: 'conceito',
      },
      {
        letra: 'B',
        texto: '28 g.',
        correta: false,
        diagnostico: 'Essa é a massa molar do CO (monóxido), com um só oxigênio. A reação descrita forma CO₂.',
        tipoErro: 'leitura',
      },
      {
        letra: 'C',
        texto: '32 g.',
        correta: false,
        diagnostico: 'Essa é a massa de 1 mol de O₂, o reagente — não a do produto.',
        tipoErro: 'leitura',
      },
      {
        letra: 'D',
        texto: '44 g.',
        correta: true,
        diagnostico:
          'Correto. 12 g de C equivalem a 1 mol. A proporção é 1 : 1, então forma-se 1 mol de CO₂, cuja massa molar é 12 + 2 × 16 = 44 g/mol.',
      },
      {
        letra: 'E',
        texto: '56 g.',
        correta: false,
        diagnostico: 'Você somou 12 g de C com 44 g de CO₂ — contou o carbono duas vezes.',
        tipoErro: 'calculo',
      },
    ],
    explicacao: [
      {
        tipo: 'lista',
        ordenada: true,
        itens: [
          'Converta a massa em mol: 12 g ÷ 12 g/mol = 1 mol de C.',
          'Leia a proporção na equação: 1 mol de C forma 1 mol de CO₂.',
          'Calcule a massa molar do produto: 12 + 2 × 16 = 44 g/mol.',
          'Converta de volta: 1 mol × 44 g/mol = 44 g de CO₂.',
        ],
      },
      {
        tipo: 'destaque',
        variante: 'nota',
        titulo: 'A rotina que resolve estequiometria',
        texto:
          'Massa → mol → proporção da equação → mol → massa. A proporção SEMPRE se lê em mol, nunca em gramas. Pular essa conversão é o erro número um do tópico.',
      },
    ],
    irmas: ['cn-est-q2'],
  },
  {
    id: 'cn-est-q2',
    topicId: 'cn-estequiometria',
    conceito: 'Proporção estequiométrica entre reagentes',
    procedencia: 'autoral',
    dificuldade: 'media',
    eixo: 'problemas',
    minutos: 3,
    enunciado: [
      {
        tipo: 'p',
        texto:
          'Considere a reação de formação da água: 2 H₂ + O₂ → 2 H₂O. Massas molares: H = 1 g/mol, O = 16 g/mol.',
      },
      { tipo: 'p', texto: 'A massa de O₂ necessária para reagir completamente com 4 g de H₂ é de' },
    ],
    alternativas: [
      {
        letra: 'A',
        texto: '8 g.',
        correta: false,
        diagnostico: 'Você dobrou a massa de H₂ em vez de usar a proporção em mol da equação.',
        tipoErro: 'conceito',
      },
      {
        letra: 'B',
        texto: '16 g.',
        correta: false,
        diagnostico: 'Essa é a massa molar do oxigênio ATÔMICO. O reagente é O₂, cuja massa molar é 32 g/mol.',
        tipoErro: 'leitura',
      },
      {
        letra: 'C',
        texto: '32 g.',
        correta: true,
        diagnostico:
          'Correto. 4 g de H₂ = 2 mol. A proporção 2 : 1 exige 1 mol de O₂, que tem massa 2 × 16 = 32 g.',
      },
      {
        letra: 'D',
        texto: '64 g.',
        correta: false,
        diagnostico: 'Você usou proporção 1 : 1 em vez de 2 : 1, dobrando a quantidade de O₂.',
        tipoErro: 'calculo',
      },
      {
        letra: 'E',
        texto: '36 g.',
        correta: false,
        diagnostico: 'Essa é a massa de água formada (2 mol × 18 g/mol), não a de oxigênio consumido.',
        tipoErro: 'leitura',
      },
    ],
    explicacao: [
      {
        tipo: 'formula',
        latexLike:
          '4 g H₂ ÷ 2 g/mol = 2 mol de H₂\nproporção 2 H₂ : 1 O₂ → 2 mol H₂ exigem 1 mol O₂\n1 mol O₂ × 32 g/mol = 32 g',
      },
      {
        tipo: 'p',
        texto:
          'Repare que a massa molar do H₂ é 2 g/mol (dois átomos de 1 g/mol) e a do O₂ é 32 g/mol. Usar a massa atômica no lugar da molecular é a origem das alternativas B e D.',
      },
    ],
    irmas: ['cn-est-q1'],
  },

  {
    id: 'cn-est-q3',
    topicId: 'cn-estequiometria',
    conceito: 'Reagente limitante',
    procedencia: 'autoral',
    dificuldade: 'dificil',
    eixo: 'problemas',
    minutos: 5,
    enunciado: [
      {
        tipo: 'p',
        texto:
          'Considere a reação 2 H₂ + O₂ → 2 H₂O. Em um recipiente, são colocados 10 g de H₂ e 64 g de O₂. Massas molares: H₂ = 2 g/mol, O₂ = 32 g/mol, H₂O = 18 g/mol.',
      },
      { tipo: 'p', texto: 'A massa de água formada ao final da reação é de' },
    ],
    alternativas: [
      {
        letra: 'A',
        texto: '36 g.',
        correta: false,
        diagnostico:
          'Você calculou a água correspondente a apenas 2 mol. O oxigênio disponível (2 mol) forma 4 mol de água, pela proporção 1 O₂ : 2 H₂O.',
        tipoErro: 'calculo',
      },
      {
        letra: 'B',
        texto: '72 g.',
        correta: true,
        diagnostico:
          'Correto. São 5 mol de H₂ e 2 mol de O₂. A proporção exige 2 mol de H₂ para cada 1 de O₂: os 2 mol de O₂ consomem só 4 mol de H₂, sobrando 1 mol. O O₂ é o limitante e forma 4 mol de água = 72 g.',
      },
      {
        letra: 'C',
        texto: '74 g.',
        correta: false,
        diagnostico:
          'Você somou as massas dos dois reagentes. A conservação da massa vale para o sistema todo, mas parte do H₂ sobra sem reagir — e sobra não vira produto.',
        tipoErro: 'conceito',
      },
      {
        letra: 'D',
        texto: '90 g.',
        correta: false,
        diagnostico:
          'Você usou o H₂ como limitante: 5 mol de H₂ dariam 5 mol de água. Mas não há oxigênio suficiente para consumir todo o hidrogênio — só 2 mol de O₂ estão disponíveis.',
        tipoErro: 'conceito',
      },
      {
        letra: 'E',
        texto: '144 g.',
        correta: false,
        diagnostico:
          'Você dobrou o resultado, provavelmente aplicando o coeficiente 2 duas vezes. O coeficiente já está considerado ao converter 2 mol de O₂ em 4 mol de água.',
        tipoErro: 'calculo',
      },
    ],
    explicacao: [
      {
        tipo: 'p',
        texto:
          'Quando o enunciado fornece a quantidade dos dois reagentes, ele quase sempre está cobrando reagente limitante. O primeiro passo é converter tudo para mol — a proporção da equação só se lê em mol.',
      },
      {
        tipo: 'formula',
        latexLike:
          'n(H₂) = 10 / 2 = 5 mol\nn(O₂) = 64 / 32 = 2 mol\nproporção exigida: 2 H₂ : 1 O₂\npara 5 mol de H₂ seriam precisos 2,5 mol de O₂ → não há\npara 2 mol de O₂ bastam 4 mol de H₂ → há de sobra\nlimitante: O₂  →  2 mol O₂ × 2 = 4 mol H₂O\nmassa = 4 × 18 = 72 g',
        legenda: 'Sobram 1 mol de H₂ (2 g) sem reagir — a massa total do sistema continua 74 g.',
      },
      {
        tipo: 'destaque',
        variante: 'atencao',
        titulo: 'Como identificar o limitante sem decorar fórmula',
        texto:
          'Divida a quantidade em mol de cada reagente pelo seu coeficiente na equação: H₂ dá 5/2 = 2,5 e O₂ dá 2/1 = 2. O menor resultado indica o limitante — aqui, o oxigênio.',
      },
    ],
    irmas: ['cn-est-q1', 'cn-est-q2'],
  },
  {
    id: 'cn-sol-q1',
    topicId: 'cn-solucoes',
    conceito: 'Concentração comum',
    procedencia: 'autoral',
    dificuldade: 'facil',
    eixo: 'problemas',
    minutos: 3,
    enunciado: [
      {
        tipo: 'p',
        texto:
          'Um técnico dissolveu 20 g de cloreto de sódio em água suficiente para completar 500 mL de solução.',
      },
      { tipo: 'p', texto: 'A concentração da solução obtida é de' },
    ],
    alternativas: [
      {
        letra: 'A',
        texto: '0,04 g/L.',
        correta: false,
        diagnostico: 'Você dividiu 20 por 500 sem converter mililitros em litros.',
        tipoErro: 'calculo',
      },
      {
        letra: 'B',
        texto: '4 g/L.',
        correta: false,
        diagnostico: 'Conversão de unidade incompleta: faltou um fator 10.',
        tipoErro: 'calculo',
      },
      {
        letra: 'C',
        texto: '10 g/L.',
        correta: false,
        diagnostico: 'Você multiplicou 20 por 0,5 em vez de dividir. Concentração é massa POR volume.',
        tipoErro: 'conceito',
      },
      {
        letra: 'D',
        texto: '40 g/L.',
        correta: true,
        diagnostico: 'Correto. 500 mL = 0,5 L, e C = 20 g ÷ 0,5 L = 40 g/L.',
      },
      {
        letra: 'E',
        texto: '10 000 g/L.',
        correta: false,
        diagnostico:
          'Você multiplicou pelo volume em mililitros. Um resultado de 10 kg de sal por litro é fisicamente impossível — a checagem de plausibilidade elimina esta alternativa.',
        tipoErro: 'calculo',
      },
    ],
    explicacao: [
      {
        tipo: 'formula',
        latexLike: 'C = m / V\nC = 20 g / 0,5 L = 40 g/L',
        legenda: 'Concentração comum: massa do soluto dividida pelo volume da SOLUÇÃO, não do solvente.',
      },
      {
        tipo: 'destaque',
        variante: 'atencao',
        titulo: 'Detalhe que muda a resposta',
        texto:
          '"Água suficiente para completar 500 mL" significa que o volume FINAL é 500 mL. Se o enunciado dissesse "dissolveu em 500 mL de água", o volume final seria ligeiramente maior.',
      },
    ],
    irmas: ['cn-sol-q2'],
  },
  {
    id: 'cn-sol-q2',
    topicId: 'cn-solucoes',
    conceito: 'Diluição',
    procedencia: 'autoral',
    dificuldade: 'media',
    eixo: 'problemas',
    minutos: 3,
    enunciado: [
      {
        tipo: 'p',
        texto:
          'Um produto de limpeza é vendido concentrado, a 60 g/L. O fabricante orienta preparar 3 L de solução de uso com concentração de 10 g/L.',
      },
      { tipo: 'p', texto: 'O volume de produto concentrado necessário para esse preparo é de' },
    ],
    alternativas: [
      {
        letra: 'A',
        texto: '200 mL.',
        correta: false,
        diagnostico: 'Resultado de dividir 60 por 3 e converter: a relação usada não é a de diluição.',
        tipoErro: 'conceito',
      },
      {
        letra: 'B',
        texto: '500 mL.',
        correta: true,
        diagnostico:
          'Correto. Pela conservação da massa de soluto: 60 × V = 10 × 3, logo V = 0,5 L = 500 mL.',
      },
      {
        letra: 'C',
        texto: '600 mL.',
        correta: false,
        diagnostico: 'Você usou a concentração inicial como se fosse volume, em décimos de litro.',
        tipoErro: 'calculo',
      },
      {
        letra: 'D',
        texto: '1 800 mL.',
        correta: false,
        diagnostico: 'Você multiplicou 60 × 3 e dividiu por 100. A montagem inverteu a proporção.',
        tipoErro: 'calculo',
      },
      {
        letra: 'E',
        texto: '3 000 mL.',
        correta: false,
        diagnostico:
          'Esse é o volume final de solução de uso. Se todo esse volume fosse do concentrado, não haveria diluição.',
        tipoErro: 'leitura',
      },
    ],
    explicacao: [
      {
        tipo: 'formula',
        latexLike: 'C₁ · V₁ = C₂ · V₂\n60 · V₁ = 10 · 3\nV₁ = 30 / 60 = 0,5 L = 500 mL',
        legenda: 'Na diluição, a massa de soluto não muda — só o volume da solução aumenta.',
      },
      {
        tipo: 'p',
        texto:
          'Teste de sanidade: a concentração caiu 6 vezes (de 60 para 10), então o volume deve aumentar 6 vezes. Meio litro vezes 6 é igual a 3 litros — confere.',
      },
    ],
    irmas: ['cn-sol-q1'],
  },

  {
    id: 'cn-sol-q3',
    topicId: 'cn-solucoes',
    conceito: 'Concentração em quantidade de matéria (molaridade)',
    procedencia: 'autoral',
    dificuldade: 'media',
    eixo: 'problemas',
    minutos: 4,
    enunciado: [
      {
        tipo: 'p',
        texto:
          'Em um laboratório, 4,0 g de hidróxido de sódio (NaOH) são dissolvidos em água suficiente para completar 250 mL de solução. Massa molar do NaOH: 40 g/mol.',
      },
      { tipo: 'p', texto: 'A concentração em quantidade de matéria dessa solução é de' },
    ],
    alternativas: [
      {
        letra: 'A',
        texto: '0,0004 mol/L.',
        correta: false,
        diagnostico:
          'Você dividiu pelo volume em mililitros. A unidade mol/L exige o volume em litros: 250 mL = 0,25 L.',
        tipoErro: 'calculo',
      },
      {
        letra: 'B',
        texto: '0,10 mol/L.',
        correta: false,
        diagnostico:
          'Você parou na quantidade de matéria: 4,0 ÷ 40 = 0,10 mol. Esse é o número de mols, não a concentração — falta dividir pelo volume.',
        tipoErro: 'calculo',
      },
      {
        letra: 'C',
        texto: '0,40 mol/L.',
        correta: true,
        diagnostico:
          'Correto. n = 4,0 ÷ 40 = 0,10 mol; V = 250 mL = 0,25 L; M = 0,10 ÷ 0,25 = 0,40 mol/L.',
      },
      {
        letra: 'D',
        texto: '2,5 mol/L.',
        correta: false,
        diagnostico:
          'Você inverteu a divisão, calculando volume ÷ quantidade de matéria. A concentração é sempre quantidade por volume.',
        tipoErro: 'calculo',
      },
      {
        letra: 'E',
        texto: '16 mol/L.',
        correta: false,
        diagnostico:
          'Você dividiu a massa pelo volume (4,0 ÷ 0,25 = 16) sem converter a massa em mol. Isso dá concentração comum, 16 g/L, que é outra grandeza.',
        tipoErro: 'conceito',
      },
    ],
    explicacao: [
      {
        tipo: 'p',
        texto:
          'Concentração comum e molaridade respondem à mesma pergunta — quanto soluto há por volume de solução — mas em unidades diferentes: g/L numa, mol/L na outra. Confundir as duas é o erro mais frequente do assunto.',
      },
      {
        tipo: 'formula',
        latexLike:
          'n = m / M = 4,0 / 40 = 0,10 mol\nV = 250 mL = 0,25 L\nM = n / V = 0,10 / 0,25 = 0,40 mol/L',
        legenda: 'A massa vira mol antes de qualquer divisão por volume.',
      },
      {
        tipo: 'p',
        texto:
          'Confira a unidade do que o enunciado pede: “concentração em quantidade de matéria” e “molaridade” significam mol/L; “concentração comum” significa g/L. A alternativa E existe exatamente para quem não leu isso.',
      },
    ],
    irmas: ['cn-sol-q1'],
  },
  {
    id: 'cn-sol-q4',
    topicId: 'cn-solucoes',
    conceito: 'Solubilidade e solução saturada',
    procedencia: 'autoral',
    dificuldade: 'media',
    eixo: 'problemas',
    minutos: 3,
    enunciado: [
      {
        tipo: 'p',
        texto:
          'A solubilidade de determinado sal, a 20 °C, é de 36 g por 100 g de água. Em um béquer, um estudante adiciona 50 g desse sal a 100 g de água, mantém a temperatura em 20 °C e agita até não haver mais dissolução.',
      },
      { tipo: 'p', texto: 'Ao final, a massa de sal dissolvida e a massa depositada no fundo são, respectivamente,' },
    ],
    alternativas: [
      {
        letra: 'A',
        texto: '14 g e 36 g.',
        correta: false,
        diagnostico:
          'Você trocou os valores. Os 36 g são o máximo que a água dissolve nessa temperatura; o que sobra é que vai ao fundo.',
        tipoErro: 'leitura',
      },
      {
        letra: 'B',
        texto: '18 g e 32 g.',
        correta: false,
        diagnostico:
          'Você usou metade da solubilidade, como se apenas 50 g de água estivessem disponíveis. O enunciado informa 100 g de água, que é exatamente a base da tabela de solubilidade.',
        tipoErro: 'calculo',
      },
      {
        letra: 'C',
        texto: '36 g e 14 g.',
        correta: true,
        diagnostico:
          'Correto. A 20 °C, 100 g de água dissolvem no máximo 36 g. Dos 50 g adicionados, 36 g se dissolvem e 14 g permanecem como corpo de fundo.',
      },
      {
        letra: 'D',
        texto: '50 g e 0 g.',
        correta: false,
        diagnostico:
          'Isso exigiria que a solubilidade fosse de pelo menos 50 g por 100 g de água. Como o limite é 36 g, a solução satura antes de dissolver tudo.',
        tipoErro: 'conceito',
      },
      {
        letra: 'E',
        texto: '36 g e 50 g.',
        correta: false,
        diagnostico:
          'A soma daria 86 g, mais do que os 50 g adicionados. Matéria não é criada no béquer — o total precisa fechar com o que foi colocado.',
        tipoErro: 'calculo',
      },
    ],
    explicacao: [
      {
        tipo: 'p',
        texto:
          'Solubilidade é um teto, definido para uma temperatura e uma quantidade de solvente. Abaixo dele a solução é insaturada; exatamente nele, saturada; acima dele o excesso não dissolve e se deposita como corpo de fundo.',
      },
      {
        tipo: 'formula',
        latexLike:
          'limite a 20 °C = 36 g / 100 g de água\nadicionado = 50 g\ndissolvido = 36 g  (a solução satura)\ncorpo de fundo = 50 − 36 = 14 g',
        legenda: 'Conferência: 36 + 14 = 50 g, o total adicionado.',
      },
      {
        tipo: 'p',
        texto:
          'Aquecer a água costuma elevar a solubilidade de sais e dissolver o corpo de fundo; resfriar de volta faz o excesso recristalizar. É essa reversibilidade que as questões de curva de solubilidade exploram.',
      },
    ],
    irmas: ['cn-sol-q1', 'cn-sol-q2'],
  },
  {
    id: 'cn-org-q1',
    topicId: 'cn-organica',
    conceito: 'Identificação de funções orgânicas',
    procedencia: 'autoral',
    dificuldade: 'media',
    eixo: 'linguagens',
    minutos: 3,
    enunciado: [
      {
        tipo: 'p',
        texto:
          'O vinagre deve seu sabor característico ao ácido acético, cuja fórmula estrutural pode ser representada por CH₃—COOH. Já o álcool presente nas bebidas fermentadas é o etanol, CH₃—CH₂—OH.',
      },
      { tipo: 'p', texto: 'As funções orgânicas às quais pertencem essas substâncias são, respectivamente,' },
    ],
    alternativas: [
      {
        letra: 'A',
        texto: 'álcool e ácido carboxílico.',
        correta: false,
        diagnostico: 'A ordem está invertida em relação ao enunciado. O grupo —COOH é do ácido carboxílico.',
        tipoErro: 'leitura',
      },
      {
        letra: 'B',
        texto: 'ácido carboxílico e álcool.',
        correta: true,
        diagnostico:
          'Correto. O grupo —COOH (carboxila) define o ácido carboxílico; o grupo —OH ligado a carbono saturado define o álcool.',
      },
      {
        letra: 'C',
        texto: 'éster e éter.',
        correta: false,
        diagnostico:
          'Éster tem grupo —COO— entre dois carbonos, e éter tem oxigênio entre duas cadeias. Nenhum dos dois casos aparece aqui.',
        tipoErro: 'conceito',
      },
      {
        letra: 'D',
        texto: 'aldeído e cetona.',
        correta: false,
        diagnostico:
          'Aldeído tem —CHO na ponta da cadeia e cetona tem carbonila entre carbonos. As estruturas dadas não correspondem a nenhum deles.',
        tipoErro: 'conceito',
      },
      {
        letra: 'E',
        texto: 'amina e amida.',
        correta: false,
        diagnostico: 'Amina e amida contêm nitrogênio, ausente nas duas fórmulas apresentadas.',
        tipoErro: 'conceito',
      },
    ],
    explicacao: [
      {
        tipo: 'tabela',
        cabecalho: ['Função', 'Grupo característico', 'Exemplo do cotidiano'],
        linhas: [
          ['Álcool', '—OH em carbono saturado', 'etanol (bebidas, combustível)'],
          ['Ácido carboxílico', '—COOH', 'ácido acético (vinagre)'],
          ['Éster', '—COO— entre carbonos', 'aromas de frutas, biodiesel'],
          ['Aldeído', '—CHO na extremidade', 'formaldeído (conservante)'],
          ['Cetona', 'C=O entre carbonos', 'propanona (acetona)'],
          ['Amina', '—NH₂', 'aminoácidos, medicamentos'],
        ],
      },
      {
        tipo: 'p',
        texto:
          'A maior parte dos itens de orgânica no exame é de RECONHECIMENTO: dado o grupo, nomear a função e associá-la a uma propriedade ou uso. Decorar mecanismos de reação rende muito menos.',
      },
    ],
    irmas: ['cn-org-q2'],
  },
  {
    id: 'cn-org-q2',
    topicId: 'cn-organica',
    conceito: 'Propriedades e interações intermoleculares',
    procedencia: 'autoral',
    dificuldade: 'media',
    eixo: 'fenomenos',
    minutos: 3,
    enunciado: [
      {
        tipo: 'p',
        texto:
          'O etanol (CH₃—CH₂—OH) se mistura com água em qualquer proporção, enquanto hidrocarbonetos como o hexano (C₆H₁₄) são praticamente insolúveis em água.',
      },
      { tipo: 'p', texto: 'A diferença de solubilidade se explica porque o etanol' },
    ],
    alternativas: [
      {
        letra: 'A',
        texto: 'possui grupo —OH, capaz de fazer ligações de hidrogênio com a água.',
        correta: true,
        diagnostico:
          'Correto. O grupo hidroxila forma ligações de hidrogênio com as moléculas de água; o hexano, apolar, só faz interações fracas.',
      },
      {
        letra: 'B',
        texto: 'tem massa molar menor que a do hexano.',
        correta: false,
        diagnostico:
          'A massa molar influencia ponto de ebulição, não a solubilidade em água. O que decide aqui é a polaridade.',
        tipoErro: 'conceito',
      },
      {
        letra: 'C',
        texto: 'é um composto iônico, ao contrário do hexano.',
        correta: false,
        diagnostico: 'Etanol é molecular, não iônico. A ligação O—H é covalente polar.',
        tipoErro: 'conceito',
      },
      {
        letra: 'D',
        texto: 'reage quimicamente com a água formando uma nova substância.',
        correta: false,
        diagnostico:
          'Dissolver não é reagir. Na mistura etanol-água não há formação de nova substância — é um processo físico.',
        tipoErro: 'conceito',
      },
      {
        letra: 'E',
        texto: 'possui cadeia carbônica maior, o que facilita a dissolução.',
        correta: false,
        diagnostico:
          'A cadeia do etanol é menor, e cadeia carbônica longa dificulta a dissolução em água por ser apolar.',
        tipoErro: 'conceito',
      },
    ],
    explicacao: [
      {
        tipo: 'p',
        texto:
          'A regra prática é "semelhante dissolve semelhante": substâncias polares dissolvem polares, apolares dissolvem apolares.',
      },
      {
        tipo: 'p',
        texto:
          'O etanol tem as duas partes: uma cadeia apolar curta e uma hidroxila polar. Como a cadeia é pequena, a hidroxila domina e ele se mistura com água. Em álcoois de cadeia longa, a parte apolar passa a dominar e a solubilidade em água cai — é o mesmo princípio, aplicado a outra proporção.',
      },
      {
        tipo: 'destaque',
        variante: 'nota',
        titulo: 'Onde isso aparece',
        texto:
          'Explica por que sabão limpa gordura (tem parte polar e parte apolar), por que óleo não se mistura com água e por que certos medicamentos são administrados de formas diferentes.',
      },
    ],
    irmas: ['cn-org-q1'],
  },

  {
    id: 'cn-org-q3',
    topicId: 'cn-organica',
    conceito: 'Função éster',
    procedencia: 'autoral',
    dificuldade: 'media',
    eixo: 'linguagens',
    minutos: 3,
    enunciado: [
      {
        tipo: 'p',
        texto:
          'Vários compostos responsáveis por aromas de frutas e usados como essências têm estrutura semelhante à do acetato de etila, representado por CH₃—COO—CH₂—CH₃.',
      },
      { tipo: 'p', texto: 'O grupo funcional presente nesse composto caracteriza a função' },
    ],
    alternativas: [
      {
        letra: 'A',
        texto: 'álcool.',
        correta: false,
        diagnostico:
          'Álcool tem hidroxila (—OH) ligada a carbono saturado. Na estrutura apresentada não há —OH livre: o oxigênio simples está entre dois carbonos, dentro do grupo —COO—.',
        tipoErro: 'conceito',
      },
      {
        letra: 'B',
        texto: 'aldeído.',
        correta: false,
        diagnostico:
          'Aldeído tem o grupo —CHO na extremidade da cadeia, com hidrogênio ligado à carbonila. Aqui a carbonila está ligada a um oxigênio, não a um hidrogênio.',
        tipoErro: 'conceito',
      },
      {
        letra: 'C',
        texto: 'ácido carboxílico.',
        correta: false,
        diagnostico:
          'É o distrator mais forte, porque a carboxila (—COOH) e o éster (—COO—) são parecidos. A diferença está no final: no ácido há hidrogênio ligado ao oxigênio; aqui há uma cadeia carbônica (—CH₂—CH₃).',
        tipoErro: 'conceito',
      },
      {
        letra: 'D',
        texto: 'cetona.',
        correta: false,
        diagnostico:
          'Cetona tem carbonila (C=O) entre dois carbonos, sem oxigênio adicional ligado a ela. A estrutura apresentada tem dois oxigênios no mesmo carbono.',
        tipoErro: 'conceito',
      },
      {
        letra: 'E',
        texto: 'éster.',
        correta: true,
        diagnostico:
          'Correto. O grupo —COO— ligado a dois radicais orgânicos, um de cada lado, caracteriza a função éster. É a função típica dos aromas artificiais de fruta e também dos biodieseis.',
      },
    ],
    explicacao: [
      {
        tipo: 'p',
        texto:
          'Identificar função orgânica é ler o entorno do oxigênio. Uma hidroxila solta indica álcool; carbonila entre carbonos indica cetona; carbonila com hidrogênio na ponta indica aldeído; carboxila terminando em —OH indica ácido; e o —COO— ligando dois radicais indica éster.',
      },
      {
        tipo: 'lista',
        itens: [
          'Álcool: R—OH',
          'Aldeído: R—CHO',
          'Cetona: R—CO—R′',
          'Ácido carboxílico: R—COOH',
          'Éster: R—COO—R′',
        ],
      },
      {
        tipo: 'p',
        texto:
          'Ésteres se formam pela reação entre um ácido carboxílico e um álcool, com saída de água. Esse parentesco explica por que as duas funções são tão confundidas — e por que o final da estrutura é o que decide.',
      },
    ],
    irmas: ['cn-org-q1'],
  },
  {
    id: 'cn-org-q4',
    topicId: 'cn-organica',
    conceito: 'Ligação de hidrogênio e ponto de ebulição',
    procedencia: 'autoral',
    dificuldade: 'media',
    eixo: 'fenomenos',
    minutos: 3,
    enunciado: [
      {
        tipo: 'p',
        texto:
          'O etanol (CH₃—CH₂—OH, massa molar 46 g/mol) entra em ebulição a cerca de 78 °C, enquanto o propano (CH₃—CH₂—CH₃, massa molar 44 g/mol) entra em ebulição a cerca de −42 °C, ambos à pressão atmosférica.',
      },
      { tipo: 'p', texto: 'A grande diferença entre os pontos de ebulição se explica porque, no etanol,' },
    ],
    alternativas: [
      {
        letra: 'A',
        texto:
          'as moléculas formam ligações de hidrogênio entre si, o que exige mais energia para separá-las.',
        correta: true,
        diagnostico:
          'Correto. A hidroxila permite ligações de hidrogênio entre moléculas vizinhas — a interação intermolecular mais intensa entre as citadas. Romper essas interações exige mais energia, e o líquido só ferve em temperatura mais alta.',
      },
      {
        letra: 'B',
        texto: 'a massa molar é muito maior, o que aumenta a atração entre as moléculas.',
        correta: false,
        diagnostico:
          'As massas molares são praticamente iguais: 46 e 44 g/mol. É justamente por isso que o enunciado as informa — para eliminar a massa como explicação.',
        tipoErro: 'leitura',
      },
      {
        letra: 'C',
        texto: 'as ligações covalentes entre carbono e oxigênio são mais fortes que as demais.',
        correta: false,
        diagnostico:
          'Esta é a confusão clássica entre ligação intramolecular e interação intermolecular. Na ebulição as moléculas se separam umas das outras; as ligações covalentes internas permanecem intactas.',
        tipoErro: 'conceito',
      },
      {
        letra: 'D',
        texto: 'o composto é iônico, e compostos iônicos apresentam altos pontos de ebulição.',
        correta: false,
        diagnostico:
          'Etanol é molecular, não iônico. Compostos iônicos têm pontos de fusão e ebulição muito mais altos — centenas de graus —, bem acima dos 78 °C citados.',
        tipoErro: 'conceito',
      },
      {
        letra: 'E',
        texto: 'a cadeia carbônica é mais longa, o que eleva as forças de dispersão.',
        correta: false,
        diagnostico:
          'A cadeia do etanol tem dois carbonos e a do propano, três — ou seja, o etanol tem a cadeia menor. Se só as forças de dispersão contassem, o propano é que ferveria a temperatura mais alta.',
        tipoErro: 'leitura',
      },
    ],
    explicacao: [
      {
        tipo: 'p',
        texto:
          'Ponto de ebulição depende da força das interações ENTRE moléculas, não das ligações dentro delas. Ferver é afastar moléculas umas das outras; nenhuma ligação covalente se rompe no processo.',
      },
      {
        tipo: 'p',
        texto:
          'A ligação de hidrogênio aparece quando há hidrogênio ligado a flúor, oxigênio ou nitrogênio. A hidroxila do etanol cumpre esse requisito; o propano, formado só por carbono e hidrogênio, conta apenas com forças de dispersão, bem mais fracas.',
      },
      {
        tipo: 'destaque',
        variante: 'nota',
        titulo: 'Massas parecidas, propriedades diferentes',
        texto:
          'Quando uma questão dá dois compostos com massas molares próximas, ela está dizendo que a resposta não está na massa. O que resta comparar é o tipo de interação intermolecular.',
      },
    ],
    irmas: ['cn-org-q2'],
  },
  {
    id: 'cn-ener-q1',
    topicId: 'cn-energia',
    conceito: 'Conservação da energia mecânica',
    procedencia: 'autoral',
    dificuldade: 'media',
    eixo: 'problemas',
    minutos: 3,
    enunciado: [
      {
        tipo: 'p',
        texto:
          'Um objeto de 2 kg é abandonado do repouso a 5 m de altura. Desprezando a resistência do ar e considerando g = 10 m/s².',
      },
      { tipo: 'p', texto: 'A velocidade do objeto ao atingir o solo é de' },
    ],
    alternativas: [
      {
        letra: 'A',
        texto: '5 m/s.',
        correta: false,
        diagnostico: 'Você usou o valor da altura como velocidade, sem aplicar a conservação de energia.',
        tipoErro: 'conceito',
      },
      {
        letra: 'B',
        texto: '10 m/s.',
        correta: true,
        diagnostico:
          'Correto. A energia potencial mgh = 2 × 10 × 5 = 100 J converte-se em cinética mv²/2. Logo 100 = v², e v = 10 m/s.',
      },
      {
        letra: 'C',
        texto: '20 m/s.',
        correta: false,
        diagnostico: 'Você esqueceu de extrair a raiz quadrada no último passo.',
        tipoErro: 'calculo',
      },
      {
        letra: 'D',
        texto: '50 m/s.',
        correta: false,
        diagnostico: 'Você multiplicou g pela altura e leu o resultado como velocidade — mas 50 tem unidade de energia por massa, não de velocidade.',
        tipoErro: 'conceito',
      },
      {
        letra: 'E',
        texto: '100 m/s.',
        correta: false,
        diagnostico:
          'Esse é o valor da energia em joules, não da velocidade. Confira sempre a unidade do que a questão pede.',
        tipoErro: 'leitura',
      },
    ],
    explicacao: [
      {
        tipo: 'formula',
        latexLike:
          'E_p = m·g·h = 2 × 10 × 5 = 100 J\nE_c = m·v² / 2 = 100 J\n2 · v² / 2 = 100 → v² = 100 → v = 10 m/s',
      },
      {
        tipo: 'p',
        texto:
          'Sem resistência do ar, a energia mecânica total se conserva: o que era potencial vira cinético. Repare que a massa aparece dos dois lados e se cancela — a velocidade de chegada não depende da massa.',
      },
      {
        tipo: 'destaque',
        variante: 'nota',
        titulo: 'Atalho útil',
        texto:
          'Em queda livre do repouso, v = √(2gh). Com g = 10 e h = 5: v = √100 = 10 m/s, sem precisar passar pela energia.',
      },
    ],
    irmas: ['cn-ener-q2'],
  },
  {
    id: 'cn-ener-q2',
    topicId: 'cn-energia',
    conceito: 'Rendimento e dissipação de energia',
    procedencia: 'autoral',
    dificuldade: 'media',
    eixo: 'fenomenos',
    minutos: 3,
    enunciado: [
      {
        tipo: 'p',
        texto:
          'Um motor recebe 1 000 J de energia a cada ciclo e realiza 250 J de trabalho útil.',
      },
      { tipo: 'p', texto: 'Sobre esse motor, é correto afirmar que o rendimento é de' },
    ],
    alternativas: [
      {
        letra: 'A',
        texto: '25% e os 750 J restantes são dissipados, principalmente como calor.',
        correta: true,
        diagnostico:
          'Correto. Rendimento = útil/total = 250/1000 = 25%. O restante não desaparece: é dissipado, sobretudo na forma de calor.',
      },
      {
        letra: 'B',
        texto: '25% e os 750 J restantes deixam de existir.',
        correta: false,
        diagnostico:
          'O cálculo está certo, mas energia não desaparece. Ela se transforma em formas não aproveitáveis para o fim desejado.',
        tipoErro: 'conceito',
      },
      {
        letra: 'C',
        texto: '75%, pois esse é o percentual de energia transformada.',
        correta: false,
        diagnostico: 'Você calculou a fração dissipada. Rendimento se refere à energia ÚTIL.',
        tipoErro: 'leitura',
      },
      {
        letra: 'D',
        texto: '400%, pois 1 000 dividido por 250 é 4.',
        correta: false,
        diagnostico:
          'A divisão foi invertida. Rendimento nunca ultrapassa 100% — um resultado acima disso denuncia o erro imediatamente.',
        tipoErro: 'calculo',
      },
      {
        letra: 'E',
        texto: '100%, pois toda energia recebida é utilizada de alguma forma.',
        correta: false,
        diagnostico:
          'Rendimento mede a fração aproveitada para o objetivo do equipamento, não a energia total envolvida nas transformações.',
        tipoErro: 'conceito',
      },
    ],
    explicacao: [
      {
        tipo: 'formula',
        latexLike: 'η = E_útil / E_total × 100\nη = 250 / 1 000 × 100 = 25%',
      },
      {
        tipo: 'p',
        texto:
          'A energia se conserva sempre; o que muda é a possibilidade de aproveitá-la. A parte dissipada como calor se espalha pelo ambiente e não pode ser integralmente reconvertida em trabalho — por isso nenhuma máquina térmica atinge 100% de rendimento.',
      },
      {
        tipo: 'destaque',
        variante: 'atencao',
        titulo: 'Dois erros que o exame explora',
        texto:
          'Dizer que a energia "se perde" (ela se dissipa, não some) e calcular a fração errada (dissipada em vez de útil).',
      },
    ],
    irmas: ['cn-ener-q1', 'cn-elet-q1'],
  },

  {
    id: 'cn-ener-q3',
    topicId: 'cn-energia',
    conceito: 'Potência e trabalho',
    procedencia: 'autoral',
    dificuldade: 'media',
    eixo: 'problemas',
    minutos: 4,
    enunciado: [
      {
        tipo: 'p',
        texto:
          'Um elevador de carga eleva 500 kg a uma altura de 12 m em 20 s, com velocidade constante. Considere g = 10 m/s².',
      },
      { tipo: 'p', texto: 'A potência útil desenvolvida pelo motor nesse processo é de' },
    ],
    alternativas: [
      {
        letra: 'A',
        texto: '300 W.',
        correta: false,
        diagnostico:
          'Você esqueceu a gravidade: calculou 500 × 12 ÷ 20. O trabalho contra o peso exige multiplicar a massa por g para obter a força.',
        tipoErro: 'calculo',
      },
      {
        letra: 'B',
        texto: '3 000 W.',
        correta: true,
        diagnostico:
          'Correto. O trabalho é m·g·h = 500 × 10 × 12 = 60 000 J; a potência é 60 000 ÷ 20 = 3 000 W, ou 3 kW.',
      },
      {
        letra: 'C',
        texto: '30 000 W.',
        correta: false,
        diagnostico:
          'Seu resultado é dez vezes maior que o correto — provável erro ao dividir 60 000 por 20, ou ao converter a altura.',
        tipoErro: 'calculo',
      },
      {
        letra: 'D',
        texto: '60 000 W.',
        correta: false,
        diagnostico:
          'Este é o trabalho realizado, em joules, não a potência. Potência é trabalho dividido pelo tempo — falta dividir por 20 s.',
        tipoErro: 'conceito',
      },
      {
        letra: 'E',
        texto: '1 200 000 W.',
        correta: false,
        diagnostico:
          'Você multiplicou pelo tempo em vez de dividir. Quanto mais tempo se leva para realizar o mesmo trabalho, menor a potência.',
        tipoErro: 'conceito',
      },
    ],
    explicacao: [
      {
        tipo: 'p',
        texto:
          'Trabalho e potência respondem a perguntas diferentes: trabalho é quanta energia foi transferida; potência é com que rapidez isso aconteceu. O mesmo trabalho em metade do tempo dobra a potência.',
      },
      {
        tipo: 'formula',
        latexLike:
          'τ = m · g · h = 500 × 10 × 12 = 60 000 J\nP = τ / Δt = 60 000 / 20 = 3 000 W = 3 kW',
        legenda: 'Como a velocidade é constante, toda a energia útil vai para a energia potencial gravitacional.',
      },
      {
        tipo: 'p',
        texto:
          'Confira a unidade antes de marcar: joule mede energia, watt mede energia por segundo. Se o resultado saiu em joule, a divisão pelo tempo ficou faltando.',
      },
    ],
    irmas: ['cn-ener-q1'],
  },
  {
    id: 'cn-ener-q4',
    topicId: 'cn-energia',
    conceito: 'Energia cinética e dependência quadrática da velocidade',
    procedencia: 'autoral',
    dificuldade: 'dificil',
    eixo: 'fenomenos',
    minutos: 4,
    enunciado: [
      {
        tipo: 'p',
        texto:
          'Em uma campanha de trânsito, afirma-se que um carro a 60 km/h, ao frear, percorre cerca de 20 m até parar. Considere que a força de frenagem seja a mesma e que toda a energia cinética seja dissipada pelos freios.',
      },
      { tipo: 'p', texto: 'A 120 km/h, a distância percorrida até parar seria de, aproximadamente,' },
    ],
    alternativas: [
      {
        letra: 'A',
        texto: '20 m, pois a força de frenagem é a mesma.',
        correta: false,
        diagnostico:
          'A força ser a mesma não significa distância igual: a energia a ser dissipada é maior, e a distância é a energia dividida pela força.',
        tipoErro: 'conceito',
      },
      {
        letra: 'B',
        texto: '40 m, pois a velocidade dobrou.',
        correta: false,
        diagnostico:
          'Este é o erro central da questão. A energia cinética depende do quadrado da velocidade: dobrar a velocidade quadruplica a energia, não a duplica.',
        tipoErro: 'conceito',
      },
      {
        letra: 'C',
        texto: '60 m, pois a energia cresce com o triplo da velocidade.',
        correta: false,
        diagnostico:
          'Não há fator 3 em nenhuma etapa. A relação entre energia cinética e velocidade é quadrática: v dobra, E_c fica quatro vezes maior.',
        tipoErro: 'calculo',
      },
      {
        letra: 'D',
        texto: '80 m, pois a energia cinética quadruplica.',
        correta: true,
        diagnostico:
          'Correto. E_c = m·v²/2: dobrar v multiplica a energia por 4. Com a mesma força de frenagem, é preciso quatro vezes mais distância para dissipá-la: 4 × 20 = 80 m.',
      },
      {
        letra: 'E',
        texto: '160 m, pois a energia cresce com o cubo da velocidade.',
        correta: false,
        diagnostico:
          'O expoente é 2, não 3. A dependência cúbica não aparece na energia cinética — dobrar v multiplica a energia por 4, e não por 8.',
        tipoErro: 'conceito',
      },
    ],
    explicacao: [
      {
        tipo: 'p',
        texto:
          'A distância de frenagem sai de uma igualdade simples: a energia cinética inicial precisa ser inteiramente dissipada pelo trabalho da força de frenagem, que vale força × distância.',
      },
      {
        tipo: 'formula',
        latexLike:
          'E_c = m · v² / 2\nF · d = m · v² / 2   →   d = m · v² / (2F)\nv → 2v  ⇒  d → 4d\n4 × 20 m = 80 m',
        legenda: 'Com F constante, a distância é proporcional ao quadrado da velocidade.',
      },
      {
        tipo: 'destaque',
        variante: 'atencao',
        titulo: 'Por que isso importa fora da prova',
        texto:
          'É a razão física das campanhas de redução de velocidade: entre 60 e 120 km/h, a distância até parar não dobra — quadruplica. E isso desconsidera o tempo de reação do motorista, que aumenta a distância total ainda mais.',
      },
    ],
    irmas: ['cn-ener-q1', 'cn-ener-q2'],
  },
  {
    id: 'cn-elet-q1',
    topicId: 'cn-eletricidade',
    conceito: 'Consumo de energia elétrica em kWh',
    procedencia: 'autoral',
    dificuldade: 'media',
    eixo: 'problemas',
    minutos: 4,
    enunciado: [
      {
        tipo: 'p',
        texto:
          'Um chuveiro elétrico de 5 500 W é usado 30 minutos por dia. Considere um mês de 30 dias e o custo de R$ 0,80 por quilowatt-hora.',
      },
      { tipo: 'p', texto: 'O custo mensal do uso desse chuveiro é de, aproximadamente,' },
    ],
    alternativas: [
      {
        letra: 'A',
        texto: 'R$ 6,60.',
        correta: false,
        diagnostico: 'Conversão com um zero a menos em algum passo. Refaça a divisão de watt por 1 000.',
        tipoErro: 'calculo',
      },
      {
        letra: 'B',
        texto: 'R$ 66,00.',
        correta: true,
        diagnostico:
          'Correto. 5 500 W = 5,5 kW; 30 min = 0,5 h. Consumo = 5,5 × 0,5 × 30 = 82,5 kWh. Custo = 82,5 × 0,80 = R$ 66,00.',
      },
      {
        letra: 'C',
        texto: 'R$ 132,00.',
        correta: false,
        diagnostico: 'Você usou 1 hora por dia em vez de 30 minutos.',
        tipoErro: 'leitura',
      },
      {
        letra: 'D',
        texto: 'R$ 3 960,00.',
        correta: false,
        diagnostico:
          'Você usou watt direto, sem converter para quilowatt. A conta de luz é cobrada em kWh, nunca em Wh.',
        tipoErro: 'conceito',
      },
      {
        letra: 'E',
        texto: 'R$ 2,20.',
        correta: false,
        diagnostico: 'Você calculou o custo de um único dia, não do mês.',
        tipoErro: 'leitura',
      },
    ],
    explicacao: [
      {
        tipo: 'diagrama',
        nome: 'consumo-eletrico',
        legenda:
          'A unidade já entrega a fórmula: quilowatt-hora é quilowatt vezes hora. Converter W em kW e minutos em horas resolve quase toda questão de conta de luz.',
      },
      {
        tipo: 'formula',
        latexLike:
          'P = 5 500 W = 5,5 kW\nt = 30 min = 0,5 h/dia × 30 dias = 15 h\nE = 5,5 × 15 = 82,5 kWh\ncusto = 82,5 × 0,80 = R$ 66,00',
      },
    ],
    irmas: ['cn-elet-q2'],
  },
  {
    id: 'cn-elet-q2',
    topicId: 'cn-eletricidade',
    conceito: 'Comparação de eficiência energética',
    procedencia: 'autoral',
    dificuldade: 'media',
    eixo: 'problemas',
    minutos: 4,
    enunciado: [
      {
        tipo: 'p',
        texto:
          'Uma residência substitui uma lâmpada incandescente de 60 W por uma lâmpada de LED de 10 W, com iluminação equivalente. A lâmpada permanece acesa 5 horas por dia.',
      },
      { tipo: 'p', texto: 'Em 30 dias, a economia de energia obtida com a troca é de' },
    ],
    alternativas: [
      {
        letra: 'A',
        texto: '1,5 kWh.',
        correta: false,
        diagnostico: 'Você calculou a economia de um único dia, não dos 30.',
        tipoErro: 'leitura',
      },
      {
        letra: 'B',
        texto: '7,5 kWh.',
        correta: true,
        diagnostico:
          'Correto. A diferença de potência é 50 W = 0,05 kW. Em 5 h/dia por 30 dias são 150 h. Economia = 0,05 × 150 = 7,5 kWh.',
      },
      {
        letra: 'C',
        texto: '9,0 kWh.',
        correta: false,
        diagnostico: 'Esse é o consumo TOTAL da lâmpada incandescente no período, não a economia.',
        tipoErro: 'leitura',
      },
      {
        letra: 'D',
        texto: '50 kWh.',
        correta: false,
        diagnostico:
          'Você usou a diferença de potência em watts como se já fosse o resultado em kWh, sem converter nem multiplicar pelo tempo.',
        tipoErro: 'conceito',
      },
      {
        letra: 'E',
        texto: '7 500 kWh.',
        correta: false,
        diagnostico:
          'Faltou dividir por 1 000 na conversão de watt para quilowatt. Uma lâmpada consumindo 7 500 kWh por mês é implausível.',
        tipoErro: 'calculo',
      },
    ],
    explicacao: [
      {
        tipo: 'formula',
        latexLike:
          'ΔP = 60 − 10 = 50 W = 0,05 kW\nt = 5 h/dia × 30 dias = 150 h\nE economizada = 0,05 × 150 = 7,5 kWh',
      },
      {
        tipo: 'p',
        texto:
          'O atalho aqui é trabalhar direto com a DIFERENÇA de potência, em vez de calcular os dois consumos e subtrair. Menos passos, menos chance de erro.',
      },
      {
        tipo: 'destaque',
        variante: 'nota',
        titulo: 'Por que a lâmpada incandescente gasta mais',
        texto:
          'Ela converte a maior parte da energia elétrica em calor, e apenas uma fração em luz. É o mesmo conceito de rendimento: mais energia dissipada, menos energia útil.',
      },
    ],
    irmas: ['cn-elet-q1', 'cn-ener-q2'],
  },
  {
    id: 'cn-elet-q3',
    topicId: 'cn-eletricidade',
    conceito: 'Relação entre potência, tensão e corrente',
    procedencia: 'autoral',
    dificuldade: 'media',
    eixo: 'problemas',
    minutos: 3,
    enunciado: [
      {
        tipo: 'p',
        texto:
          'Um chuveiro elétrico de 5 500 W é instalado em uma rede de 220 V. O eletricista precisa escolher o disjuntor adequado ao circuito.',
      },
      { tipo: 'p', texto: 'A corrente que percorre o chuveiro em funcionamento é de' },
    ],
    alternativas: [
      {
        letra: 'A',
        texto: '0,04 A.',
        correta: false,
        diagnostico:
          'Você dividiu a tensão pela potência (220 ÷ 5 500). A relação é i = P ÷ U: a potência vai no numerador.',
        tipoErro: 'calculo',
      },
      {
        letra: 'B',
        texto: '12,5 A.',
        correta: false,
        diagnostico:
          'Este seria o resultado com 440 V. A rede informada é de 220 V.',
        tipoErro: 'leitura',
      },
      {
        letra: 'C',
        texto: '25 A.',
        correta: true,
        diagnostico:
          'Correto. De P = U · i, temos i = 5 500 ÷ 220 = 25 A. É por isso que chuveiro exige circuito e disjuntor próprios, dimensionados acima desse valor.',
      },
      {
        letra: 'D',
        texto: '50 A.',
        correta: false,
        diagnostico:
          'Este é o valor para uma rede de 110 V. Na mesma potência, quanto menor a tensão, maior a corrente — mas o enunciado fixa 220 V.',
        tipoErro: 'leitura',
      },
      {
        letra: 'E',
        texto: '1 210 000 A.',
        correta: false,
        diagnostico:
          'Você multiplicou potência por tensão. A ordem de grandeza já denuncia: nenhuma instalação residencial conduz mais de um milhão de ampères.',
        tipoErro: 'conceito',
      },
    ],
    explicacao: [
      {
        tipo: 'p',
        texto:
          'P = U · i é a relação que liga as três grandezas elétricas mais cobradas. Conhecendo duas, a terceira sai por divisão ou multiplicação — o cuidado é saber qual delas está isolada.',
      },
      {
        tipo: 'formula',
        latexLike: 'P = U · i\ni = P / U = 5 500 / 220 = 25 A',
        legenda: 'Na mesma potência, dobrar a tensão reduz a corrente à metade.',
      },
      {
        tipo: 'p',
        texto:
          'É por isso que aparelhos de alta potência são preferencialmente ligados em 220 V: corrente menor significa menos aquecimento nos fios, pelo efeito Joule, e cabos mais finos para a mesma carga.',
      },
    ],
    irmas: ['cn-elet-q1', 'cn-elet-q2'],
  },
];
