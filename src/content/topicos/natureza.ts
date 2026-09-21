import type { ConteudoAssunto } from '../tipos';

/**
 * Conteúdo pedagógico dos assuntos desta área — os 9 blocos de cada um.
 *
 * Fica separado dos metadados (src/content/catalogo.ts) porque o motor de
 * estudo e o dashboard só precisam dos metadados. Essa separação mantém o
 * bundle inicial pequeno: o texto de um assunto só é baixado quando ele é
 * aberto.
 */
export const CONTEUDOS_NATUREZA: Record<string, ConteudoAssunto> = {
  'cn-ecologia': {
    precisaSaber: [
      'Energia flui em sentido único e diminui cerca de 90% a cada nível trófico.',
      'Matéria cicla: os mesmos átomos são reaproveitados indefinidamente.',
      'Poluentes não degradáveis se concentram nos níveis superiores da cadeia.',
      'Queimar combustível fóssil injeta carbono que estava fora do ciclo rápido.',
    ],
    explicacao: [
      {
        tipo: 'p',
        texto:
          'Há duas regras que organizam quase toda a ecologia do exame. A primeira: energia flui, matéria cicla. A energia entra pelo Sol, é fixada pelos produtores e vai se dissipando como calor a cada transferência — nunca volta. Já os átomos de carbono, nitrogênio e água circulam entre seres vivos, atmosfera, solo e água indefinidamente.',
      },
      {
        tipo: 'p',
        texto:
          'A segunda: a transferência de energia entre níveis é ineficiente. Só cerca de 10% da energia de um nível chega ao seguinte. É isso que limita o tamanho das cadeias alimentares e explica por que há poucos predadores de topo.',
      },
      {
        tipo: 'p',
        texto:
          'Dessas duas regras nasce uma consequência que o exame adora: se um poluente não é metabolizado nem excretado, ele não se dissipa como a energia — acumula. Como cada nível consome muita biomassa do anterior, a concentração do poluente sobe a cada elo.',
      },
    ],
    conceitos: [
      { termo: 'Nível trófico', definicao: 'Posição do organismo na cadeia: produtor, consumidor primário, secundário, terciário, decompositor.' },
      { termo: 'Produtor', definicao: 'Organismo que fixa energia externa em matéria orgânica, em geral pela fotossíntese.' },
      { termo: 'Bioacumulação', definicao: 'Acúmulo progressivo de uma substância nos tecidos de um organismo ao longo da vida.' },
      { termo: 'Magnificação trófica', definicao: 'Aumento da concentração de uma substância a cada nível da cadeia alimentar.' },
      { termo: 'Ciclo biogeoquímico', definicao: 'Percurso de um elemento entre seres vivos e ambiente — carbono, nitrogênio, água, fósforo.' },
      { termo: 'Eutrofização', definicao: 'Excesso de nutrientes na água provoca proliferação de algas; a decomposição delas consome o oxigênio dissolvido e mata a fauna aquática.' },
    ],
    exemplo: {
      enunciado:
        'Por que uma pirâmide de energia nunca pode ser invertida, embora uma pirâmide de biomassa possa?',
      passos: [
        {
          titulo: 'Pirâmide de energia',
          texto: 'Cada nível recebe menos energia do que o anterior, porque parte se dissipa como calor. Isso é uma via de mão única.',
        },
        {
          titulo: 'Pirâmide de biomassa',
          texto:
            'Mede massa num instante. No mar, o fitoplâncton tem pouca massa presente, mas se reproduz tão rápido que sustenta uma massa maior de consumidores.',
        },
        { titulo: 'A diferença', texto: 'Energia é fluxo acumulado ao longo do tempo; biomassa é uma fotografia.' },
      ],
      conclusao:
        'Por isso a pirâmide de energia é sempre decrescente, e a de biomassa pode aparecer invertida em ambientes aquáticos.',
    },
    noEnem: {
      texto:
        'Os itens trazem uma cadeia alimentar, um esquema de ciclo, um texto sobre poluição ou um caso de contaminação, e pedem a consequência. Boa parte se resolve sem nenhum cálculo, apenas aplicando as duas regras centrais.',
      eixos: ['fenomenos'],
      sinais: [
        'Há uma cadeia ou teia alimentar no enunciado',
        'O texto cita mercúrio, agrotóxico ou metal pesado',
        'Aparece um esquema de ciclo com setas',
        'O comando pede a consequência de um impacto ambiental',
      ],
    },
    erros: [
      {
        erro: 'Dizer que a energia cicla',
        porque:
          'Matéria cicla; energia flui e se dissipa. Essa troca de palavras é um distrator frequente e fácil de evitar.',
      },
      {
        erro: 'Supor que a diluição resolve a contaminação',
        porque:
          'Substâncias não degradáveis se concentram nos organismos em vez de se diluírem no ambiente.',
      },
      {
        erro: 'Tratar respiração e combustão de fósseis como equivalentes',
        porque:
          'A respiração devolve carbono recém-fixado; a queima de fósseis injeta carbono retirado de circulação há milhões de anos.',
      },
      {
        erro: 'Esquecer os decompositores',
        porque:
          'Sem eles a matéria não retorna ao ambiente e os ciclos param. Eles aparecem em muitos esquemas justamente por isso.',
      },
    ],
    questoes: ['cn-eco-q1', 'cn-eco-q2'],
    revisaoRapida: [
      'Energia flui (≈10% por nível); matéria cicla.',
      'Poluente não degradável se concentra no topo da cadeia.',
      'Fósseis trazem carbono do ciclo lento para o rápido.',
      'Eutrofização: nutriente em excesso → algas → falta de oxigênio.',
    ],
  },
  'cn-corpo-humano': {
    precisaSaber: [
      'Homeostase é a manutenção de condições internas estáveis, quase sempre por retroalimentação negativa.',
      'A respiração tem três etapas: ventilação, troca gasosa e transporte pelo sangue.',
      'Digestão quebra macromoléculas; absorção ocorre sobretudo no intestino delgado.',
      'O sistema imune distingue defesa inespecífica (barreiras, inflamação) de específica (linfócitos, memória).',
      'Vacina induz memória imunológica sem causar a doença.',
    ],
    explicacao: [
      {
        tipo: 'p',
        texto:
          'O corpo funciona mantendo variáveis dentro de faixas estreitas: temperatura, glicemia, pH, pressão, concentração de gases. Esse equilíbrio dinâmico é a homeostase.',
      },
      {
        tipo: 'p',
        texto:
          'O mecanismo padrão é a retroalimentação negativa: um sensor detecta o desvio, um centro integrador dispara a resposta, e a resposta empurra o valor de volta. Glicose alta → insulina → glicose cai. Temperatura alta → sudorese → temperatura cai. Reconhecer esse padrão resolve itens sobre hormônios que você nunca estudou em detalhe.',
      },
      {
        tipo: 'p',
        texto:
          'O segundo ponto que mais rende é separar as etapas de cada sistema. Na respiração, por exemplo, falha na ventilação, na troca alveolar e no transporte pelo sangue produzem quadros diferentes — e a maior parte das questões trabalha exatamente nessa distinção.',
      },
    ],
    conceitos: [
      { termo: 'Homeostase', definicao: 'Manutenção de condições internas relativamente constantes apesar das variações do ambiente.' },
      { termo: 'Retroalimentação negativa', definicao: 'A resposta reduz o estímulo que a provocou. É o mecanismo dominante da regulação corporal.' },
      { termo: 'Insulina e glucagon', definicao: 'Hormônios pancreáticos antagônicos: a insulina baixa a glicemia; o glucagon a eleva.' },
      { termo: 'Hemoglobina', definicao: 'Proteína das hemácias que transporta oxigênio. O monóxido de carbono compete por seus sítios de ligação com afinidade muito maior.' },
      { termo: 'Imunidade ativa e passiva', definicao: 'Ativa: o corpo produz os próprios anticorpos (infecção, vacina). Passiva: recebe anticorpos prontos (leite materno, soro).' },
      { termo: 'Vacina × soro', definicao: 'Vacina é preventiva e gera memória; soro é terapêutico, age de imediato e não gera memória.' },
    ],
    exemplo: {
      enunciado: 'Por que a vacina previne e o soro trata, se os dois envolvem anticorpos?',
      passos: [
        {
          titulo: 'Vacina',
          texto:
            'Apresenta o antígeno (inativado, atenuado ou fragmento) e faz o corpo produzir anticorpos e células de memória. Leva dias a semanas, mas a proteção é duradoura.',
        },
        {
          titulo: 'Soro',
          texto: 'Contém anticorpos prontos. Age imediatamente, mas eles são consumidos e não deixam memória.',
        },
        { titulo: 'A consequência prática', texto: 'Vacina antes da exposição; soro depois de acidente com veneno ou toxina.' },
      ],
      conclusao:
        'A diferença não está no anticorpo, e sim em quem o produz e se há memória. Esse par é um dos mais cobrados da área.',
    },
    noEnem: {
      texto:
        'O item traz uma situação clínica, uma campanha de saúde, um gráfico de exame ou uma notícia, e pede o mecanismo fisiológico envolvido. Raramente cobra nomenclatura isolada; cobra a relação entre estrutura e função.',
      eixos: ['fenomenos'],
      sinais: [
        'Descreve sintoma, exame ou tratamento',
        'O tema é vacinação, epidemia ou saúde pública',
        'Há um gráfico de concentração ao longo do tempo',
        'O comando pergunta "o que explica" determinado efeito',
      ],
    },
    erros: [
      {
        erro: 'Confundir retroalimentação negativa com efeito ruim',
        porque:
          '"Negativa" indica que a resposta se opõe ao desvio — é o mecanismo que mantém o equilíbrio, não algo prejudicial.',
      },
      {
        erro: 'Trocar vacina por soro',
        porque: 'Vacina previne e gera memória; soro trata de imediato e não gera memória.',
      },
      {
        erro: 'Supor que falta de ar é a única causa de hipóxia',
        porque:
          'O transporte pode falhar mesmo com ventilação normal, como na intoxicação por monóxido de carbono.',
      },
      {
        erro: 'Achar que antibiótico age contra vírus',
        porque:
          'Antibióticos atuam sobre estruturas bacterianas que os vírus não possuem. Isso aparece com frequência em itens sobre uso racional de medicamentos.',
      },
    ],
    questoes: ['cn-corpo-q1', 'cn-corpo-q2'],
    revisaoRapida: [
      'Homeostase por retroalimentação negativa: desvio → resposta → correção.',
      'Insulina baixa glicemia; glucagon eleva.',
      'Respiração: ventilação → troca → transporte.',
      'Vacina previne e dá memória; soro trata sem memória.',
    ],
  },
  'cn-genetica': {
    precisaSaber: [
      'Genótipo é a combinação de alelos; fenótipo é a característica manifestada.',
      'Aa × Aa gera 1 AA : 2 Aa : 1 aa — ou seja, 25% de recessivos.',
      'Portador (heterozigoto) não é o mesmo que afetado.',
      'Herança ligada ao X explica por que homens são mais afetados por certas condições.',
      'Cada gestação é um evento independente: a probabilidade não muda com os filhos anteriores.',
    ],
    explicacao: [
      {
        tipo: 'p',
        texto:
          'Cada indivíduo tem dois alelos para cada gene autossômico, um de cada genitor. Se o alelo dominante está presente, ele determina o fenótipo; a característica recessiva só aparece quando os dois alelos são recessivos.',
      },
      {
        tipo: 'p',
        texto:
          'Daí vem o resultado mais cobrado da área: no cruzamento entre dois heterozigotos, um quarto da descendência é homozigota recessiva. Dois pais sem a característica podem ter um filho com ela — e é justamente esse ponto que as alternativas exploram.',
      },
      {
        tipo: 'p',
        texto:
          'Na herança ligada ao X a lógica muda um pouco. Homens têm um só cromossomo X, então um único alelo recessivo já se manifesta. Mulheres precisam de dois. Por isso condições como o daltonismo aparecem muito mais em homens.',
      },
    ],
    conceitos: [
      { termo: 'Alelo', definicao: 'Cada versão de um gene ocupando a mesma posição em cromossomos homólogos.' },
      { termo: 'Homozigoto e heterozigoto', definicao: 'Dois alelos iguais (AA, aa) ou diferentes (Aa).' },
      { termo: 'Dominante e recessivo', definicao: 'O dominante se manifesta mesmo em dose única; o recessivo só em dose dupla.' },
      { termo: 'Quadro de Punnett', definicao: 'Tabela que combina os gametas possíveis dos genitores para obter as proporções esperadas.' },
      { termo: 'Heredograma', definicao: 'Representação gráfica das relações familiares; permite deduzir genótipos a partir dos fenótipos observados.' },
      { termo: 'Herança ligada ao sexo', definicao: 'Gene localizado no cromossomo X, o que produz padrões diferentes entre homens e mulheres.' },
    ],
    exemplo: {
      enunciado:
        'Um casal sem a característica recessiva teve um filho que a apresenta. Qual é o genótipo dos pais?',
      passos: [
        {
          titulo: 'Comece pelo filho',
          texto: 'Ele manifesta a característica recessiva, logo é aa. Cada alelo veio de um dos pais.',
        },
        {
          titulo: 'Deduza os pais',
          texto: 'Cada um transmitiu um alelo "a". Como nenhum manifesta a característica, ambos têm ao menos um "A".',
        },
        { titulo: 'Conclua', texto: 'Os dois são Aa — heterozigotos, portadores sem manifestar.' },
      ],
      conclusao:
        'A estratégia geral é começar sempre pelo indivíduo de fenótipo recessivo: o genótipo dele é certo, e ele revela o dos pais.',
    },
    noEnem: {
      texto:
        'O item costuma trazer um heredograma ou uma situação familiar e pedir uma probabilidade ou um genótipo. Também aparecem contextos de aconselhamento genético, transgênicos e testes de paternidade por grupos sanguíneos.',
      eixos: ['problemas'],
      sinais: [
        'Há um heredograma com quadrados e círculos',
        'O comando pede probabilidade em porcentagem ou fração',
        'O texto informa que a condição é recessiva ou ligada ao X',
        'Aparecem grupos sanguíneos ou fator Rh',
      ],
    },
    erros: [
      {
        erro: 'Confundir portador com afetado',
        porque:
          'No cruzamento Aa × Aa, 50% são portadores e apenas 25% manifestam. Marcar 50% é o erro mais comum do tópico.',
      },
      {
        erro: 'Achar que o filho anterior muda a probabilidade do próximo',
        porque: 'Cada fecundação é independente. A chance permanece 25% a cada gestação.',
      },
      {
        erro: 'Aplicar herança autossômica a gene ligado ao X',
        porque:
          'Homens têm apenas um X, de modo que as proporções por sexo são diferentes. Ignorar isso inverte a resposta.',
      },
      {
        erro: 'Supor que dominante é sinônimo de mais frequente',
        porque:
          'Dominância descreve como o alelo se expressa, não quão comum ele é na população. Há alelos dominantes raríssimos.',
      },
    ],
    questoes: ['cn-gen-q1', 'cn-gen-q2'],
    revisaoRapida: [
      'Aa × Aa → 1 AA : 2 Aa : 1 aa (25% afetados).',
      'Portador ≠ afetado.',
      'Comece pelo indivíduo recessivo: o genótipo dele é certo.',
      'Homem tem um X: alelo recessivo nele já se manifesta.',
    ],
  },
  'cn-estequiometria': {
    precisaSaber: [
      'Mol é uma contagem: a quantidade de entidades correspondente à constante de Avogadro.',
      'Massa molar (g/mol) converte massa em quantidade de matéria.',
      'A proporção da equação química se lê SEMPRE em mol, nunca em gramas.',
      'Rotina: massa → mol → proporção da equação → mol → massa.',
      'A massa se conserva: o que entra como reagente sai como produto.',
    ],
    explicacao: [
      {
        tipo: 'p',
        texto:
          'Reações acontecem entre partículas, não entre gramas. Como não dá para contar moléculas uma a uma, usa-se o mol: uma unidade de contagem cujo valor em gramas é dado pela massa molar da substância.',
      },
      {
        tipo: 'p',
        texto:
          'Os coeficientes de uma equação química indicam proporção entre quantidades de matéria. Na equação 2 H₂ + O₂ → 2 H₂O, lê-se "dois mols de H₂ reagem com um mol de O₂" — e não "dois gramas com um grama".',
      },
      {
        tipo: 'p',
        texto:
          'Por isso o procedimento é sempre o mesmo: converta a massa dada em mol, aplique a proporção da equação, converta o resultado de volta em massa. Quem tenta usar a proporção direto em gramas erra praticamente todos os itens do tópico.',
      },
    ],
    conceitos: [
      { termo: 'Mol', definicao: 'Unidade de quantidade de matéria, correspondente à constante de Avogadro (≈ 6,02 × 10²³ entidades).' },
      { termo: 'Massa molar', definicao: 'Massa de um mol da substância, em g/mol. Obtida somando as massas atômicas da fórmula.', formula: 'n = m / M' },
      { termo: 'Coeficiente estequiométrico', definicao: 'Número que antecede a fórmula na equação balanceada; indica proporção em mol.' },
      { termo: 'Reagente limitante', definicao: 'Aquele que acaba primeiro e, por isso, determina a quantidade máxima de produto.' },
      { termo: 'Rendimento', definicao: 'Razão entre a quantidade de produto obtida na prática e a prevista pela teoria.', formula: 'R = (obtido / teórico) × 100' },
    ],
    exemplo: {
      enunciado: 'Quantos gramas de água se formam na reação completa de 8 g de O₂ com excesso de H₂? (H = 1; O = 16)',
      passos: [
        { titulo: 'Massa → mol', texto: 'M(O₂) = 32 g/mol, então n = 8 ÷ 32 = 0,25 mol de O₂.' },
        { titulo: 'Proporção da equação', texto: 'Em 2 H₂ + O₂ → 2 H₂O, cada 1 mol de O₂ forma 2 mol de H₂O. Logo, 0,5 mol de água.' },
        { titulo: 'Mol → massa', texto: 'M(H₂O) = 18 g/mol, então m = 0,5 × 18 = 9 g.' },
      ],
      conclusao:
        'Nove gramas. Os três passos são sempre os mesmos — o que muda de questão para questão é só a equação.',
    },
    noEnem: {
      texto:
        'O contexto costuma ser ambiental ou industrial: emissão de CO₂, tratamento de efluente, produção de um insumo, combustão de biocombustível. A conta é curta; a dificuldade está em montar a proporção e cuidar das unidades.',
      eixos: ['problemas'],
      sinais: [
        'Há uma equação química balanceada no enunciado',
        'São fornecidas massas molares ou massas atômicas',
        'O comando pede massa, volume ou quantidade de matéria de um participante',
        'O texto fala em emissão, produção ou consumo de uma substância',
      ],
    },
    erros: [
      {
        erro: 'Aplicar a proporção da equação diretamente em gramas',
        porque: 'Os coeficientes valem para mol. Pular a conversão é o erro que mais derruba no tópico.',
      },
      {
        erro: 'Usar massa atômica no lugar da molecular',
        porque: 'O₂ tem 32 g/mol, não 16. H₂ tem 2 g/mol, não 1.',
      },
      {
        erro: 'Esquecer de balancear a equação antes de usá-la',
        porque: 'Coeficientes errados produzem proporções erradas, ainda que toda a conta seguinte esteja certa.',
      },
      {
        erro: 'Ignorar o reagente limitante quando há dois valores dados',
        porque:
          'Se o enunciado informa a massa dos DOIS reagentes, é sinal de que um deles limita — e o cálculo deve partir dele.',
      },
    ],
    questoes: ['cn-est-q1', 'cn-est-q2'],
    revisaoRapida: [
      'n = m / M. A proporção da equação é em mol.',
      'Rotina: massa → mol → proporção → mol → massa.',
      'Balanceie antes de usar os coeficientes.',
      'Dois reagentes com massa dada → procure o limitante.',
    ],
  },
  'cn-solucoes': {
    precisaSaber: [
      'Concentração comum: C = m/V, em g/L.',
      'Concentração em quantidade de matéria (molaridade): M = n/V, em mol/L.',
      'Diluição conserva a massa de soluto: C₁V₁ = C₂V₂.',
      'O volume da fórmula é o da SOLUÇÃO, não o do solvente adicionado.',
    ],
    explicacao: [
      {
        tipo: 'p',
        texto:
          'Uma solução é uma mistura homogênea de soluto e solvente. Concentração é a forma de dizer quanto de soluto existe em cada unidade de volume da solução.',
      },
      {
        tipo: 'p',
        texto:
          'Há duas formas principais no exame. A concentração comum usa massa por litro (g/L). A concentração em quantidade de matéria, ou molaridade, usa mol por litro (mol/L) — e é a que se liga diretamente à estequiometria, porque reações se dão em mol.',
      },
      {
        tipo: 'p',
        texto:
          'Na diluição, acrescenta-se solvente sem mexer no soluto. A massa de soluto continua a mesma, então o produto concentração × volume se conserva: C₁V₁ = C₂V₂. Se a concentração cai pela metade, o volume dobra.',
      },
    ],
    conceitos: [
      { termo: 'Soluto e solvente', definicao: 'Soluto é o que se dissolve; solvente é o que dissolve, em geral o componente em maior quantidade.' },
      { termo: 'Concentração comum', definicao: 'Massa de soluto por volume de solução.', formula: 'C = m / V  (g/L)' },
      { termo: 'Molaridade', definicao: 'Quantidade de matéria de soluto por volume de solução.', formula: 'M = n / V  (mol/L)' },
      { termo: 'Diluição', definicao: 'Adição de solvente; a massa de soluto se mantém.', formula: 'C₁ · V₁ = C₂ · V₂' },
      { termo: 'Solubilidade', definicao: 'Quantidade máxima de soluto que se dissolve em certa quantidade de solvente, a uma dada temperatura.' },
      { termo: 'Solução saturada', definicao: 'Aquela que já contém o máximo de soluto dissolvido naquela temperatura; o excedente precipita.' },
    ],
    exemplo: {
      enunciado:
        'Uma solução de 200 mL a 5 g/L é completada com água até 1 L. Qual a nova concentração?',
      passos: [
        { titulo: 'Massa de soluto', texto: '0,2 L × 5 g/L = 1 g. Esse valor não muda na diluição.' },
        { titulo: 'Novo volume', texto: '1 L.' },
        { titulo: 'Nova concentração', texto: 'C = 1 g ÷ 1 L = 1 g/L.' },
      ],
      conclusao:
        'O volume ficou 5 vezes maior, então a concentração ficou 5 vezes menor. Esse teste de proporção confere o resultado em um segundo.',
    },
    noEnem: {
      texto:
        'Contextos típicos: preparo de medicamento, dose de agrotóxico, limite legal de um poluente na água, diluição de produto de limpeza. Frequentemente o item pede comparação com um valor de referência dado no texto.',
      eixos: ['problemas'],
      sinais: [
        'O enunciado dá massa e volume, ou duas concentrações',
        'Aparece um limite máximo permitido para comparar',
        'O texto trata de dose, preparo ou diluição',
        'As unidades das alternativas diferem (mg/L, g/L, mol/L)',
      ],
    },
    erros: [
      {
        erro: 'Não converter mililitro em litro',
        porque: 'A unidade padrão das fórmulas é o litro. É a origem mais comum de erro por fator 1 000.',
      },
      {
        erro: 'Usar o volume de solvente em vez do volume de solução',
        porque:
          '"Água suficiente para completar 500 mL" define o volume final. "Dissolvido em 500 mL de água" é outra coisa.',
      },
      {
        erro: 'Somar concentrações ao misturar soluções',
        porque:
          'Na mistura, somam-se as massas de soluto e os volumes — depois se divide. Concentração não é aditiva.',
      },
      {
        erro: 'Confundir concentração comum com molaridade',
        porque: 'Uma usa gramas, a outra usa mol. Passar de uma para a outra exige a massa molar.',
      },
    ],
    questoes: ['cn-sol-q1', 'cn-sol-q2'],
    revisaoRapida: [
      'C = m/V (g/L) · M = n/V (mol/L).',
      'Diluição: C₁V₁ = C₂V₂.',
      'Volume é o da solução, não o do solvente.',
      'Converta mL para L antes de tudo.',
    ],
  },
  'cn-organica': {
    precisaSaber: [
      'O grupo funcional define a função orgânica e boa parte das propriedades.',
      'Álcool: —OH. Ácido carboxílico: —COOH. Éster: —COO—. Cetona: C=O entre carbonos. Aldeído: —CHO na ponta.',
      'Semelhante dissolve semelhante: polar dissolve polar, apolar dissolve apolar.',
      'Cadeia carbônica longa aumenta o caráter apolar e reduz a solubilidade em água.',
    ],
    explicacao: [
      {
        tipo: 'p',
        texto:
          'Compostos orgânicos são classificados pelo grupo funcional — o conjunto de átomos que confere à molécula seu comportamento característico. Reconhecer o grupo é reconhecer a função, e a função antecipa propriedades.',
      },
      {
        tipo: 'p',
        texto:
          'O segundo princípio organiza as propriedades: moléculas com grupos polares, como a hidroxila, interagem bem com a água por ligações de hidrogênio. Cadeias formadas só por carbono e hidrogênio são apolares e não interagem.',
      },
      {
        tipo: 'p',
        texto:
          'Dos dois princípios juntos saem explicações para coisas cotidianas: por que o álcool se mistura com água e a gasolina não, por que o sabão limpa gordura, por que aromas de fruta são ésteres e por que óleo e água se separam.',
      },
    ],
    conceitos: [
      { termo: 'Grupo funcional', definicao: 'Conjunto de átomos responsável pelo comportamento químico característico da molécula.' },
      { termo: 'Hidrocarboneto', definicao: 'Composto formado só por carbono e hidrogênio. Apolar, insolúvel em água — petróleo, gás natural, gasolina.' },
      { termo: 'Álcool', definicao: 'Possui —OH ligado a carbono saturado. Etanol é o exemplo mais cobrado.' },
      { termo: 'Ácido carboxílico', definicao: 'Possui —COOH. Caráter ácido; o ácido acético do vinagre é o exemplo clássico.' },
      { termo: 'Éster', definicao: 'Possui —COO— entre carbonos. Responsável por aromas de frutas; também é a base do biodiesel.' },
      { termo: 'Ligação de hidrogênio', definicao: 'Interação forte entre moléculas quando o hidrogênio está ligado a F, O ou N. Explica a alta solubilidade de álcoois pequenos em água.' },
    ],
    exemplo: {
      enunciado: 'Por que o sabão consegue remover gordura, se gordura não se dissolve em água?',
      passos: [
        {
          titulo: 'Estrutura da molécula de sabão',
          texto: 'Ela tem duas partes: uma cadeia longa apolar e uma extremidade polar ionizada.',
        },
        { titulo: 'A parte apolar', texto: 'Interage com a gordura, envolvendo-a.' },
        {
          titulo: 'A parte polar',
          texto: 'Fica voltada para a água, permitindo que o conjunto seja arrastado no enxágue.',
        },
      ],
      conclusao:
        'O sabão funciona por ser anfifílico — tem as duas naturezas. É a aplicação mais cobrada do princípio "semelhante dissolve semelhante".',
    },
    noEnem: {
      texto:
        'O item costuma trazer a fórmula estrutural de uma substância do cotidiano — medicamento, aroma, combustível, agrotóxico — e pedir a função presente ou explicar uma propriedade a partir da estrutura.',
      eixos: ['linguagens', 'fenomenos'],
      sinais: [
        'Aparece uma fórmula estrutural no enunciado',
        'O texto cita uma substância do cotidiano com nome químico',
        'O comando pergunta sobre solubilidade, ponto de ebulição ou acidez',
        'As alternativas listam nomes de funções orgânicas',
      ],
    },
    erros: [
      {
        erro: 'Confundir aldeído com cetona',
        porque: 'Aldeído tem a carbonila na extremidade da cadeia; cetona tem a carbonila entre carbonos.',
      },
      {
        erro: 'Confundir éster com éter',
        porque: 'Éster é —COO—, com carbonila. Éter é —O— simples entre duas cadeias, sem carbonila.',
      },
      {
        erro: 'Achar que dissolver é reagir',
        porque:
          'Dissolução é processo físico; não forma nova substância. Alternativas que falam em "reage com a água" costumam ser distratores.',
      },
      {
        erro: 'Usar massa molar para prever solubilidade em água',
        porque:
          'Quem decide a solubilidade em água é a polaridade. Massa molar tem mais relação com ponto de ebulição.',
      },
    ],
    questoes: ['cn-org-q1', 'cn-org-q2'],
    revisaoRapida: [
      '—OH álcool · —COOH ácido · —COO— éster · —CHO aldeído · C=O cetona.',
      'Semelhante dissolve semelhante.',
      'Cadeia longa = mais apolar = menos solúvel em água.',
      'Sabão tem parte polar e parte apolar.',
    ],
  },
  'cn-energia': {
    precisaSaber: [
      'Energia potencial gravitacional: E_p = m·g·h. Energia cinética: E_c = m·v²/2.',
      'Sem atrito, a energia mecânica se conserva: o que some de potencial aparece como cinética.',
      'Energia nunca desaparece — é dissipada, em geral como calor.',
      'Rendimento = energia útil ÷ energia total. Nunca passa de 100%.',
    ],
    explicacao: [
      {
        tipo: 'p',
        texto:
          'Energia é a capacidade de realizar transformações, e aparece em várias formas: cinética, potencial, térmica, elétrica, química, luminosa. O princípio central é que ela não é criada nem destruída — apenas convertida de uma forma em outra.',
      },
      {
        tipo: 'p',
        texto:
          'Numa queda sem resistência do ar, a energia potencial vira cinética integralmente. Por isso é possível calcular a velocidade de chegada sem saber nada sobre o tempo de queda: basta igualar as duas energias.',
      },
      {
        tipo: 'p',
        texto:
          'Na vida real há sempre dissipação: atrito, resistência do ar, aquecimento de fios. A energia dissipada não sumiu — espalhou-se pelo ambiente como calor, de forma difícil de reaproveitar. É esse detalhe que define o rendimento de qualquer máquina.',
      },
    ],
    conceitos: [
      { termo: 'Energia cinética', definicao: 'Energia associada ao movimento.', formula: 'E_c = m · v² / 2' },
      { termo: 'Energia potencial gravitacional', definicao: 'Energia associada à posição em um campo gravitacional.', formula: 'E_p = m · g · h' },
      { termo: 'Trabalho', definicao: 'Energia transferida por uma força ao longo de um deslocamento.', formula: 'W = F · d · cos θ' },
      { termo: 'Potência', definicao: 'Energia transferida por unidade de tempo. Um watt é um joule por segundo.', formula: 'P = E / t' },
      { termo: 'Rendimento', definicao: 'Fração da energia total aproveitada para o objetivo desejado.', formula: 'η = E_útil / E_total' },
      { termo: 'Dissipação', definicao: 'Conversão de energia em formas não aproveitáveis para o fim pretendido, sobretudo calor.' },
    ],
    exemplo: {
      enunciado:
        'Por que uma usina termelétrica não consegue converter todo o calor do combustível em eletricidade?',
      passos: [
        { titulo: 'A cadeia de conversões', texto: 'Energia química → térmica → mecânica (turbina) → elétrica (gerador).' },
        {
          titulo: 'Onde há perda',
          texto: 'Em cada etapa parte da energia se dissipa como calor não aproveitado, atrito e resistência elétrica.',
        },
        {
          titulo: 'O limite físico',
          texto:
            'Máquinas térmicas têm um limite teórico de rendimento: é impossível converter integralmente calor em trabalho.',
        },
      ],
      conclusao:
        'A energia se conserva em todas as etapas; o que não se conserva é a possibilidade de aproveitá-la. Essa distinção é o núcleo do assunto.',
    },
    noEnem: {
      texto:
        'Aparece em contextos de geração de energia, transporte, esportes e eficiência de equipamentos. Boa parte dos itens não exige cálculo: exige identificar quais transformações ocorrem e onde a energia é dissipada.',
      eixos: ['fenomenos', 'problemas'],
      sinais: [
        'O texto descreve uma sequência de transformações de energia',
        'Aparecem valores de energia de entrada e de saída',
        'O tema é eficiência, sustentabilidade ou matriz energética',
        'O comando pergunta o que acontece com a energia "perdida"',
      ],
    },
    erros: [
      {
        erro: 'Dizer que a energia "se perde"',
        porque:
          'Ela se dissipa, sobretudo como calor. A alternativa que afirma desaparecimento viola a conservação da energia.',
      },
      {
        erro: 'Esquecer a raiz quadrada ao isolar a velocidade',
        porque: 'Em E_c = mv²/2, a velocidade está ao quadrado. Parar antes da raiz é um erro de cálculo clássico.',
      },
      {
        erro: 'Confundir energia com potência',
        porque:
          'Potência é energia por tempo. Um aparelho de potência alta usado por pouco tempo pode consumir menos que outro de potência baixa ligado o dia todo.',
      },
      {
        erro: 'Inverter a razão do rendimento',
        porque: 'Rendimento é útil sobre total. Se o resultado passar de 100%, a divisão foi feita ao contrário.',
      },
    ],
    questoes: ['cn-ener-q1', 'cn-ener-q2'],
    revisaoRapida: [
      'E_p = mgh · E_c = mv²/2 · P = E/t.',
      'Sem atrito: potencial vira cinética integralmente.',
      'Energia não some — dissipa como calor.',
      'Rendimento = útil / total, sempre ≤ 100%.',
    ],
  },
  'cn-eletricidade': {
    precisaSaber: [
      'Potência elétrica: P = U · i, em watts.',
      'Energia consumida: E = P · t. Em kWh, use potência em kW e tempo em horas.',
      '1 kW = 1 000 W. Converter é o passo em que mais se erra.',
      'A conta de luz cobra energia (kWh), não potência (W).',
    ],
    explicacao: [
      {
        tipo: 'p',
        texto:
          'Potência é a rapidez com que um aparelho converte energia elétrica em outra forma. Um chuveiro de 5 500 W converte muito mais energia por segundo do que uma lâmpada de 10 W.',
      },
      {
        tipo: 'p',
        texto:
          'O que a distribuidora cobra, porém, não é a potência: é a energia, que depende também do tempo de uso. Por isso a unidade da conta é o quilowatt-hora — literalmente quilowatt multiplicado por hora.',
      },
      {
        tipo: 'p',
        texto:
          'Isso explica um resultado que parece contraintuitivo: o chuveiro, usado poucos minutos por dia, costuma pesar mais na conta do que a geladeira, que fica ligada o tempo todo com potência muito menor. O que decide é o produto potência × tempo.',
      },
    ],
    conceitos: [
      { termo: 'Tensão (U)', definicao: 'Diferença de potencial elétrico, em volts. É o que "empurra" a corrente.' },
      { termo: 'Corrente (i)', definicao: 'Fluxo de carga elétrica por unidade de tempo, em ampères.' },
      { termo: 'Potência elétrica', definicao: 'Energia convertida por unidade de tempo.', formula: 'P = U · i' },
      { termo: 'Quilowatt-hora', definicao: 'Unidade de energia usada na conta de luz: energia consumida por 1 kW durante 1 hora.', formula: 'E(kWh) = P(kW) × t(h)' },
      { termo: 'Efeito Joule', definicao: 'Conversão de energia elétrica em calor pela passagem de corrente em um condutor. É o princípio do chuveiro e do ferro elétrico.' },
      { termo: 'Eficiência luminosa', definicao: 'Fração da energia elétrica convertida em luz. É onde o LED supera amplamente a lâmpada incandescente.' },
    ],
    exemplo: {
      enunciado:
        'Um ferro de passar de 1 200 W é usado 20 minutos por dia. Qual o consumo em 30 dias, a R$ 0,75 o kWh?',
      passos: [
        { titulo: 'Converta a potência', texto: '1 200 W = 1,2 kW.' },
        { titulo: 'Converta o tempo', texto: '20 min = 1/3 h; em 30 dias são 10 horas.' },
        { titulo: 'Calcule e multiplique', texto: 'E = 1,2 × 10 = 12 kWh; custo = 12 × 0,75 = R$ 9,00.' },
      ],
      conclusao:
        'Nove reais. As duas conversões — watt para quilowatt e minuto para hora — são exatamente onde as alternativas erradas nascem.',
    },
    noEnem: {
      texto:
        'Contextos típicos: comparar aparelhos, avaliar economia ao trocar uma lâmpada ou um chuveiro, analisar selo de eficiência, calcular o custo de um hábito. Frequentemente o item também cobra a leitura de uma tabela de potências.',
      eixos: ['problemas'],
      sinais: [
        'Há potências em watts e tempo de uso diário',
        'O preço do kWh é informado',
        'O comando pede custo mensal ou economia',
        'Aparece uma tabela de aparelhos com potência e horas de uso',
      ],
    },
    erros: [
      {
        erro: 'Não converter watt em quilowatt',
        porque: 'Dá um resultado mil vezes maior. As alternativas costumam incluir exatamente esse valor.',
      },
      {
        erro: 'Usar minutos onde a fórmula pede horas',
        porque: 'kWh exige tempo em horas. Trinta minutos são 0,5 h, não 30.',
      },
      {
        erro: 'Confundir potência com consumo',
        porque:
          'Potência alta não significa conta alta se o uso for curto. É o produto potência × tempo que importa.',
      },
      {
        erro: 'Calcular o consumo de um dia e esquecer o mês',
        porque:
          'O comando quase sempre pede o valor mensal. Vale reler a pergunta depois de terminar a conta.',
      },
    ],
    questoes: ['cn-elet-q1', 'cn-elet-q2'],
    revisaoRapida: [
      'P = U·i · E(kWh) = P(kW) × t(h).',
      '1 kW = 1 000 W; 30 min = 0,5 h.',
      'A conta cobra energia, não potência.',
      'Chuveiro: potência alta, uso curto — ainda assim pesa muito.',
    ],
  },
};
