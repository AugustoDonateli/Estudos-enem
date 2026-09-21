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
];
