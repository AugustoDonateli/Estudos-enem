# Etapa 1 — Pesquisa, Estratégia e Especificação

**Projeto:** plataforma pessoal de preparação intensiva para o ENEM
**Contexto do usuário:** 2º ano do ensino médio, participa como **treineiro**
**Janela de estudo:** 21/09/2026 → 08/11/2026 = **48 dias** até o 1º dia de prova
**Data deste documento:** 21/09/2026

---

## 0. Como ler este documento (política de fontes)

Todo o produto — e este documento — classifica informação em três níveis, e essa
classificação é visível também dentro do site:

| Marcador | Significado |
|---|---|
| `OFICIAL` | Documentado pelo INEP/MEC. Reproduzido sem reinterpretação. |
| `ANÁLISE` | Julgamento pedagógico meu, derivado do que é oficial. Pode ser discutido. |
| `AUTORAL` | Conteúdo criado para este site (explicações, questões, diagramas). |

**Regra dura do projeto:** nenhum número de recorrência ("cai em 80% das provas")
aparece em lugar algum. Não tenho base de dados oficial de incidência por conteúdo,
e inventar esse número seria a forma mais fácil de o site mentir com aparência de rigor.
Onde há priorização, ela é apresentada como `ANÁLISE` com o raciocínio explícito.

### Limitação técnica encontrada (e como foi contornada)

O ambiente de execução desta sessão bloqueia, por política de rede da organização,
o acesso direto a `gov.br` e `download.inep.gov.br` (retorno 403 do proxy de egress).
Isso significa que **não foi possível baixar e transcrever os PDFs originais** da
Matriz de Referência, da Cartilha do Participante e das provas anteriores.

Consequências práticas e decisões tomadas:

1. Os fatos estruturais do exame foram confirmados por busca em conteúdo do próprio
   INEP/MEC e em fontes secundárias convergentes (ver §1). São fatos estáveis e
   verificáveis — número de questões, dias, duração, competências da redação.
2. **Não cito números de habilidades da matriz (H1…H30)**, porque não pude ler o
   documento. Cito apenas os eixos cognitivos e a estrutura, que foram confirmados.
3. **O site é entregue com ZERO questões oficiais do ENEM.** O tipo `oficial` existe
   no modelo de dados e na interface, mas nenhum item é marcado assim, porque eu não
   consegui ler as provas originais e marcar como oficial algo não verificado seria
   exatamente o erro que a regra 5 do briefing proíbe.
4. Em troca, o site traz um **caminho de importação documentado** (`docs/ADICIONAR-QUESTOES.md`,
   Etapa 2): você baixa a prova oficial do portal do INEP no seu computador, cola o
   enunciado no formato descrito, e o item passa a aparecer no banco com selo `OFICIAL`
   e referência de prova/ano/número. Isso mantém a honestidade da procedência e ainda
   te dá o banco oficial.

---

## 1. Pesquisa — o que é fato oficial sobre o ENEM 2026

### 1.1 Calendário e condição de treineiro `OFICIAL`

- Provas: **8 e 15 de novembro de 2026**, dois domingos consecutivos.
- **Treineiro**: participante com menos de 18 anos no primeiro dia de aplicação e que
  concluirá o ensino médio **após** o ano letivo de 2026. É o seu caso.
- O resultado do treineiro sai cerca de **60 dias depois** do resultado regular e serve
  **apenas para autoavaliação** — não vale para certificação nem para os programas de
  acesso (SISU/ProUni/FIES).

**Consequência de produto (ANÁLISE).** Isso muda a estratégia inteira. Como a nota não
tem uso seletivo este ano, o objetivo ótimo não é "maximizar a nota de 2026" — é
**maximizar o aprendizado transferível para 2027** e usar 2026 como um diagnóstico caro
e realista. Por isso o site prioriza conteúdo **estruturante e de alto reaproveitamento**
(o que serve de base para outras coisas) em vez de decoreba de véspera, e trata a prova
como um instrumento de medição, não como um alvo final. Isso está codificado no
algoritmo de prioridade (§4).

### 1.2 Estrutura da prova `OFICIAL`

| | Dia 1 — 08/11 | Dia 2 — 15/11 |
|---|---|---|
| Provas | Linguagens (45) + Ciências Humanas (45) + **Redação** | Ciências da Natureza (45) + Matemática (45) |
| Questões objetivas | 90 | 90 |
| Duração | **5h30** | **5h** |

- Total: **180 questões objetivas** de múltipla escolha (5 alternativas) + 1 redação.
- Quatro provas objetivas, **45 questões cada**.
- Dentro de Linguagens há **5 questões de língua estrangeira** (inglês **ou** espanhol,
  escolhida na inscrição), que abrem a prova.
- Linguagens cobre língua portuguesa, literatura, artes, educação física e
  tecnologias da informação e comunicação.

### 1.3 Como a nota objetiva é calculada `OFICIAL`

- As notas objetivas usam **TRI (Teoria de Resposta ao Item)**.
- A nota **não** é só a contagem de acertos: leva em conta a **coerência das respostas**
  diante do conjunto de itens.
- Três parâmetros por item: **discriminação, dificuldade e acerto casual**.
- A escala tem a média dos participantes em torno de **500 pontos**.
- A TRI permite **comparabilidade entre edições**.

**Consequência de produto (ANÁLISE).** Duas decisões nascem daqui:
1. O site **não exibe "% de acertos" como métrica principal**, porque essa métrica não
   é o que a prova mede. Exibe **domínio por conceito** — mais próximo do que a TRI estima.
2. Acertar item fácil e errar item da mesma habilidade em outro contexto é exatamente o
   padrão incoerente que a TRI pune. Por isso o motor de questões **reoferece o mesmo
   conceito em contexto diferente** (§4.5) em vez de repetir o mesmo item.

### 1.4 Matriz de Referência `OFICIAL`

- A Matriz é o documento do INEP que define **competências e habilidades**, não uma
  lista de conteúdos. Ela descreve **o que se deve saber fazer** com o conhecimento.
- **5 eixos cognitivos** comuns a todas as áreas:
  1. dominar linguagens;
  2. compreender fenômenos;
  3. enfrentar situações-problema;
  4. construir argumentação;
  5. elaborar propostas.
- Há **uma matriz por área**, com competências desdobradas em **30 habilidades** cada
  (120 habilidades no total), mais a matriz da redação.
- Um **anexo de Objetos de Conhecimento** acompanha as matrizes e indica os conteúdos
  que orientam a composição da prova.
- As questões são apresentadas como **situações-problema contextualizadas**, ligadas aos
  objetos de conhecimento da área.

**Consequência de produto (ANÁLISE).** Os cinco eixos cognitivos viram a espinha
pedagógica do site. Cada bloco "Como isso aparece no ENEM" de cada assunto nomeia
**qual eixo** a questão típica cobra. Isso ensina o aluno a reconhecer o *tipo de
raciocínio* pedido, que é a habilidade mais transferível que existe nesse exame.

### 1.5 Redação `OFICIAL`

- Texto **dissertativo-argumentativo** em prosa, sobre tema de ordem social, científica,
  cultural ou política; até **30 linhas** na folha definitiva, a tinta preta.
- **5 competências**, cada uma de **0 a 200 pontos**, com **6 níveis** de desempenho
  descritos na Cartilha do Participante. Total de **0 a 1000**.
- Cada avaliador dá nota 0–200 por competência; a nota final é a **média aritmética**
  das notas totais dos dois corretores iniciais (com regra de terceiro corretor em caso
  de discrepância).
- As cinco competências:
  - **C1** — domínio da modalidade escrita formal da língua portuguesa (ortografia,
    acentuação, pontuação, concordância, regência, crase, construção sintática, escolha
    vocabular, adequação de registro).
  - **C2** — compreender a proposta e aplicar conceitos das várias áreas para
    desenvolver o tema, dentro dos limites estruturais do texto dissertativo-argumentativo
    em prosa (é aqui que entra o **repertório sociocultural**).
  - **C3** — selecionar, relacionar, organizar e interpretar informações, fatos, opiniões
    e argumentos em defesa de um ponto de vista (**projeto de texto**).
  - **C4** — conhecer e usar os mecanismos linguísticos de **coesão** e articulação entre
    as partes do texto.
  - **C5** — elaborar **proposta de intervenção** para o problema abordado, respeitando os
    direitos humanos.
- **Situações de nota zero** incluem: fuga total ao tema; não obediência à estrutura
  dissertativo-argumentativa; texto com **até 7 linhas**; cópia integral dos textos
  motivadores; e outras previstas no edital. Linhas copiadas dos textos motivadores são
  **desconsideradas** na contagem de linhas.

### 1.6 Mudanças futuras no exame `OFICIAL` / contexto

A reforma do ensino médio previa alterações no ENEM, mas **os trechos da lei que tratavam
dessas mudanças foram vetados**. O INEP indicou debate público e implementação em edições
**posteriores a 2026**.

**Impacto para você: nenhum.** A prova de 2026 mantém o formato acima. O site não menciona
formatos hipotéticos futuros — seria ruído.

---

## 2. Objetivo, público e proposta de valor

### 2.1 Objetivo do produto

Ser o lugar onde este aluno específico abre o notebook ou o celular e, em **menos de 10
segundos**, sabe exatamente o que estudar agora — e sai da sessão tendo aprendido algo
que ele não sabia antes, com registro do que ficou pendente.

### 2.2 Público

**Um usuário.** Não é um produto multiusuário e não deve ser projetado como se fosse.
Isso é uma vantagem de engenharia enorme e será explorada: sem login, sem backend, sem
onboarding genérico, sem telas de conta, sem "planos".

Perfil: 2º ano, treineiro, tempo fragmentado (escola durante o dia), estuda em blocos de
30–90 minutos, provavelmente metade das sessões no celular.

### 2.3 Proposta de valor

> **"Abra, veja o que estudar hoje, estude, teste, entenda o erro, feche."**

Três coisas que este site faz e uma apostila ou um canal do YouTube não fazem:

1. **Decide por você.** A escolha do que estudar é o maior desperdício de tempo de quem
   estuda sozinho. O site entrega uma fila pronta e justificada.
2. **Lembra dos seus erros melhor do que você.** Cada erro vira um conceito marcado, uma
   revisão agendada e uma questão-irmã futura.
3. **Encaixa o calendário.** O agendamento de revisão é **truncado pela data da prova** —
   nada é agendado para depois de 08/11. Esse detalhe não existe em ferramentas genéricas
   de repetição espaçada e é o que torna o plano realista em 48 dias.

### 2.4 Métrica de sucesso

**Aprendizado útil por minuto no site.** Operacionalizada em três proxies observáveis:
- tempo até a primeira ação de estudo real (meta: < 10 s, zero cliques além de "começar");
- proporção da sessão gasta em conteúdo/questão vs. navegação (meta: > 85%);
- taxa de acerto em **questão-irmã** de um conceito errado antes (meta: subir com o tempo).

O terceiro é o único que mede aprendizado de verdade; os dois primeiros medem se o
produto está atrapalhando.

### 2.5 Não-objetivos (explícitos)

- Não é uma enciclopédia. Não cobre "todo o ensino médio".
- Não é rede social, não tem ranking, não tem gamificação com pontos/badges/streaks
  decorativos. *(Streak é o exemplo clássico de métrica que parece motivar e na prática
  pune quem perdeu um dia e faz o aluno abandonar.)*
- Não simula nota TRI. Estimar TRI sem os parâmetros dos itens daria um número falso.
- Não corrige redação automaticamente com nota. Um corretor automático de C1–C5 feito
  por heurística daria feedback errado com cara de autoridade. O módulo de redação
  entrega **checklist autoavaliativo estruturado por competência** — honesto e útil.

---

## 3. Escopo de conteúdo

### 3.1 Critério de priorização `ANÁLISE`

Cada assunto recebe **Essencial / Importante / Complementar** pela combinação de seis
fatores — todos declarados no próprio site, na página do assunto:

| Fator | Pergunta |
|---|---|
| Alinhamento à matriz | O assunto serve diretamente a um eixo cognitivo e a objetos de conhecimento da área? |
| Transversalidade | Aparece em mais de uma área? (ex.: gráficos servem a MAT, CN e CH) |
| Suporte à interpretação | Destrava a leitura de outras questões, mesmo fora do assunto? |
| Pré-requisito | Outros assuntos dependem dele? |
| Custo-benefício em 48 dias | Dá para atingir domínio utilizável em 1–2 sessões? |
| Reaproveitamento para 2027 | É base estruturante ou item isolado de véspera? *(peso extra por você ser treineiro)* |

**Essencial** = alto em pelo menos quatro fatores, incluindo obrigatoriamente
custo-benefício. **Complementar** = conteúdo legítimo do exame, mas caro de dominar
agora e de baixo efeito sobre o resto.

**O que "Complementar" NÃO significa:** não significa "não cai". Significa "se o seu
tempo é 48 dias, esse não é o próximo". O site diz isso com essas palavras.

### 3.2 Mapa de conteúdo

Legenda: **E** Essencial · **I** Importante · **C** Complementar

#### Matemática e suas Tecnologias
| | Assunto | Por quê |
|---|---|---|
| **E** | Porcentagem, acréscimos e descontos | Base de metade das situações-problema contextualizadas |
| **E** | Razão, proporção e regra de três | Pré-requisito de escala, densidade, velocidade, concentração |
| **E** | Leitura de gráficos e tabelas | Transversal a todas as quatro áreas |
| **E** | Média, mediana e moda | Alto retorno, baixo custo, interpretação de dados |
| **E** | Grandezas, unidades e escala | Destrava Física, Química, Geografia e mapas |
| **E** | Função afim (1º grau) | Modelagem de situações lineares; base para tudo que vem depois |
| **E** | Áreas e perímetros | Aplicação direta, custo baixo |
| **E** | Volume e capacidade | Idem, com forte apelo contextual |
| **I** | Função quadrática | Importante, mas mais cara que a afim |
| **I** | Probabilidade | Conceitualmente barato, contextualmente recorrente |
| **I** | Contagem / princípio multiplicativo | Pré-requisito de probabilidade |
| **I** | Matemática financeira (juros) | Extensão natural de porcentagem |
| **I** | Trigonometria no triângulo retângulo e semelhança | Custo médio |
| **I** | Progressões (PA/PG) | Padrão reconhecível, custo médio |
| **C** | Geometria analítica | Custo alto para o retorno em 48 dias |
| **C** | Logaritmo e exponencial | Idem |
| **C** | Matrizes e determinantes | Baixo retorno no formato contextualizado |
| **C** | Estatística avançada (desvio padrão, quartis) | Depende de estatística básica sólida antes |

#### Linguagens, Códigos e suas Tecnologias
| | Assunto | Por quê |
|---|---|---|
| **E** | Estratégias de interpretação e inferência | É o que a prova realmente cobra, em 100% dos itens |
| **E** | Funções da linguagem | Barato, direto, resolve itens inteiros |
| **E** | Variação linguística e preconceito linguístico | Tema estruturante da área |
| **E** | Gêneros textuais e propósito comunicativo | Chave de leitura de charge, propaganda, infográfico |
| **E** | Figuras de linguagem | Barato e de aplicação imediata |
| **E** | Leitura estratégica em língua estrangeira | 5 questões garantidas; técnica > vocabulário |
| **I** | Modernismo brasileiro | Ponto de apoio literário mais produtivo |
| **I** | Realismo/Naturalismo e Machado de Assis | Alta densidade interpretativa |
| **I** | Artes, corpo e movimento (Artes/Ed. Física) | Frequentemente subestimado, custo baixo |
| **I** | Tecnologias da informação e comunicação | Leitura de gêneros digitais |
| **C** | Trovadorismo, Barroco, Arcadismo | Custo alto, retorno baixo no formato atual |
| **C** | Análise sintática formal | A prova cobra efeito de sentido, não nomenclatura |

#### Ciências Humanas e suas Tecnologias
| | Assunto | Por quê |
|---|---|---|
| **E** | Era Vargas | Nó da história republicana; explica trabalho, Estado e cidadania |
| **E** | Ditadura militar e redemocratização | Conecta a CF/88 e direitos |
| **E** | Cidadania, direitos humanos e CF/88 | Sustenta também a C5 da redação |
| **E** | Globalização e geopolítica contemporânea | Chapéu de muitas questões de Geografia |
| **E** | Urbanização, migrações e demografia do Brasil | Alta contextualização, leitura de gráficos |
| **E** | Trabalho: da Revolução Industrial à uberização | Eixo que atravessa História, Geo e Sociologia |
| **E** | Filosofia política: contratualistas e democracia | Base argumentativa reaproveitável na redação |
| **I** | Cultura, identidade e desigualdade (Sociologia) | Forte, mas exige repertório prévio |
| **I** | Brasil Colônia: escravidão e resistência | Denso; alto valor, custo médio |
| **I** | Campo brasileiro e conflitos por terra | Recorrente em Geografia agrária |
| **I** | Guerra Fria e ordem mundial | Contexto de muitas questões |
| **I** | Matriz energética brasileira | Interface com CN |
| **C** | Antiguidade e Idade Média | Menor peso relativo no formato contextualizado |

#### Ciências da Natureza e suas Tecnologias
| | Assunto | Por quê |
|---|---|---|
| **E** | Ecologia: cadeias, ciclos e impactos | Área mais "lida" da prova; custo baixo |
| **E** | Corpo humano e saúde | Contextualização direta, alto retorno |
| **E** | Genética mendeliana | Padrão de resolução fechado e treinável |
| **E** | Mol, massa molar e estequiometria básica | Pré-requisito de quase toda a Química |
| **E** | Soluções e concentração | Aplicação direta e contextualizada |
| **E** | Energia, trabalho e conservação | Conceito central de Física no exame |
| **E** | Eletricidade: potência e consumo (kWh) | Contexto cotidiano; conta simples, efeito alto |
| **E** | Química orgânica: reconhecer funções | Reconhecimento visual, custo baixo |
| **I** | Cinemática e leis de Newton | Importante, porém mais caro |
| **I** | Fotossíntese e respiração celular | Sustenta ecologia e fisiologia |
| **I** | Ácidos, bases, pH e chuva ácida | Interface ambiental |
| **I** | Ondas e óptica | Custo médio |
| **I** | Evolução e biotecnologia | Conceitual, boa leitura |
| **I** | Termologia e calorimetria | Custo médio |
| **C** | Física moderna | Baixo retorno por unidade de tempo |
| **C** | Eletroquímica e radioatividade detalhadas | Caro agora |

#### Redação — módulo próprio (tudo Essencial)
Estrutura do texto · C1 · C2 · C3 · C4 · C5 · repertório legitimado · planejamento em
10 minutos · proposta de intervenção · o que zera · exercícios cronometrados.

**Por que a redação é toda essencial (ANÁLISE):** é a única parte da prova cujo critério
de avaliação é **público, fechado e estável**. Saber exatamente o que os cinco itens
pedem é o maior retorno por minuto disponível no exame inteiro — e é 100% transferível
para 2027.

### 3.3 Quanto será efetivamente escrito

O briefing é explícito: melhor poucos conteúdos muito bem estruturados do que centenas
ruins. A **Etapa 2 entrega todos os assuntos Essenciais** das quatro áreas + o módulo de
redação completo, cada um no modelo de 9 blocos (§5), com questões e diagramas próprios.
Os Importantes ficam registrados no mapa de conteúdo, aparecem na navegação com estado
"ainda não escrito" honesto, e são a fila natural de continuação.

Não haverá páginas-fantasma com três linhas de texto para inflar o site.

---

## 4. Sistema de estudo

Esta é a parte que diferencia o produto. O ciclo é
**DIAGNOSTICAR → PRIORIZAR → ESTUDAR → PRATICAR → CORRIGIR → REVISAR**.

### 4.1 Diagnosticar

Diagnóstico em duas partes, ambas puláveis, porque um diagnóstico longo antes do primeiro
minuto de estudo é a maior fonte de abandono em ferramentas assim.

1. **Autoavaliação rápida (~90 s).** Para cada assunto Essencial, uma escala de 4 níveis:
   *nunca vi · vi e não lembro · sei mais ou menos · sei bem*. Gera o domínio inicial
   (prior): 15 / 35 / 55 / 75.
2. **Sondagem opcional (~12 questões, ~15 min).** Uma questão por bloco de maior peso.
   Cada resposta corrige o prior para cima ou para baixo.

Quem pula os dois: todo assunto entra com domínio **desconhecido** (tratado como 0.8 de
lacuna, não 1.0 — para o sistema não fixar-se sempre no mesmo topo de lista).

### 4.2 Modelo de domínio por assunto

`dominio ∈ [0, 100]`, atualizado por média móvel exponencial a cada resposta:

```
acerto:  dominio += ganho[dificuldade] × (100 − dominio)/100
erro:    dominio −= perda[dificuldade] × (0.35 + 0.65 × dominio/100)

ganho = { fácil: 8,  média: 14, difícil: 20 }
perda = { fácil: 20, média: 14, difícil: 8  }
```

**Por que assimétrico:** acertar uma fácil informa pouco; errar uma fácil informa muito.
Isso é a mesma intuição do parâmetro de discriminação da TRI, em versão simplificada e
honesta sobre o que é.

Domínio nunca é apresentado como nota. É apresentado em quatro faixas legíveis:
**frágil (<40) · em construção (40–64) · sólido (65–84) · dominado (≥85)**.

### 4.3 Priorizar

Score de prioridade por assunto:

```
prioridade = peso_curricular × lacuna × prereq × janela × frescor

peso_curricular : essencial 1.00 | importante 0.65 | complementar 0.35
lacuna          : (100 − dominio)/100   (desconhecido → 0.80)
prereq          : 1 + 0.12 × (nº de assuntos não dominados que dependem deste), máx 1.5
janela          : diminui o peso de Complementar conforme a prova se aproxima —
                  a partir de 14 dias restantes, complementar × 0.35
frescor         : 0.35 se estudado hoje · 0.6 se ontem · 1.0 caso contrário
```

`prereq` é o que impede o erro clássico: mandar o aluno para *função quadrática* quando
ele ainda não domina *razão e proporção*.

### 4.4 Estudar — o "Plano de hoje"

O usuário escolhe um orçamento: **30 · 60 · 90 minutos**. O gerador preenche o orçamento
nesta ordem de prioridade, respeitando tetos:

1. **Revisões vencidas** — até 40% do orçamento (o resto transborda para amanhã).
2. **Refazer conceitos errados** — questão-irmã dos erros recentes, até 25%.
3. **Assunto novo** de maior prioridade — 1 a 2 por dia, nunca mais.
4. **Redação** — um bloco fixo por semana + uma produção completa semanal.

Duas decisões de UX importantes:

- **O plano é determinístico por dia** (semeado pela data). Recarregar a página não
  embaralha o plano. Um plano que muda sozinho destrói a confiança do usuário nele.
- **Cada item do plano diz por que está ali** em uma linha ("revisão de 3 dias",
  "você errou 2 questões desse conceito", "pré-requisito de função quadrática").
  Sem isso, o plano é uma caixa-preta e o aluno começa a ignorá-lo.

### 4.5 Praticar e corrigir

Cada alternativa errada carrega um **diagnóstico próprio** — não um texto genérico.
Ao errar, o feedback mostra, nesta ordem:

1. **Conceito cobrado** (e o eixo cognitivo da matriz correspondente);
2. **Por que a sua alternativa não funciona** — o raciocínio específico que leva a ela;
3. **Por que a correta funciona**;
4. **Que tipo de erro foi** — categorizado: *leitura do enunciado · conceito · cálculo ·
   armadilha do distrator · interpretação de gráfico*;
5. **O que revisar** — link direto para o bloco exato do conteúdo;
6. **Questão-irmã** — mesmo conceito, contexto diferente, oferecida na hora.

A categorização do erro é o que permite a frase mais útil que o site pode dizer: *"você
não errou de matemática, você errou de leitura — nas últimas 10 questões, 6 erros foram
de leitura do enunciado."*

### 4.6 Revisar — repetição espaçada truncada pela prova

Caixas com intervalos **1 · 3 · 7 · 14 dias**. Acerto sobe uma caixa; erro desce uma
(mínimo 1) e reagenda para +1 dia.

**Truncamento (a parte específica deste projeto):** se o próximo intervalo cair depois de
**08/11/2026**, a revisão é reagendada para o último dia útil possível antes da prova, e
marcada como **revisão final**. Nada é agendado para o vazio.

Nos últimos 7 dias, o sistema **para de introduzir assuntos novos** por padrão e converte
o plano diário em revisão + questões. Isso é decisão pedagógica deliberada e o site avisa
explicitamente quando o modo muda.

---

## 5. Modelo pedagógico — os 9 blocos

Todo assunto segue exatamente esta sequência, e cada bloco tem **limite rígido de
tamanho** para impedir que a página vire muro de texto:

| # | Bloco | Função | Teto |
|---|---|---|---|
| 1 | **O que você precisa saber** | 3–5 bullets. É o resumo que sobrevive se o aluno ler só isso. | 60 palavras |
| 2 | **Explicação simples** | A ideia central em linguagem direta, sem jargão. | 180 palavras |
| 3 | **Conceitos fundamentais** | Definições precisas, fórmulas, diagrama próprio quando ajuda. | 5 itens |
| 4 | **Exemplo** | Um caso resolvido passo a passo, com o raciocínio visível. | 1 exemplo |
| 5 | **Como isso aparece no ENEM** | O formato típico do item + **qual eixo cognitivo** ele cobra. | 120 palavras |
| 6 | **Erros e pegadinhas** | Os enganos concretos, não avisos vagos. | 4 itens |
| 7 | **Questão prática** | Item no formato do exame, com selo de procedência. | 1–3 itens |
| 8 | **Explicação da resposta** | Correta + por que cada distrator atrai. | — |
| 9 | **Revisão rápida** | O cartão de 30 segundos para revisitar depois. | 40 palavras |

**Regras de escrita do conteúdo:**
- Frases curtas. Voz ativa. Segunda pessoa ("você").
- Rigor conceitual não negociável: simplificar é remover detalhe, nunca afirmar algo falso.
  Onde a simplificação tem limite, o texto diz qual é o limite.
- Todo termo técnico é definido na primeira aparição.
- O bloco 5 é obrigatório e é o diferencial: ensina a **reconhecer o pedido**, que é a
  habilidade real medida pelo exame.

---

## 6. Arquitetura de informação e navegação

### 6.1 Mapa de páginas

```
/                      Hoje (dashboard)      — plano do dia, progresso, o que revisar
/areas                 As cinco áreas        — visão geral e peso na prova
/area/:areaId          Área                  — assuntos, domínio por assunto, prioridade
/assunto/:topicId      Assunto               — os 9 blocos
/questoes              Praticar              — filtros: área, conceito, só erradas
/questao/:questionId   Questão               — resolver + correção + questão-irmã
/revisao               Revisão               — fila vencida, com o motivo de cada item
/redacao               Redação               — hub do módulo
/redacao/:sectionId    Seção da redação      — competência, estrutura, repertório, exercício
/diagnostico           Diagnóstico           — autoavaliação + sondagem
/progresso             Progresso             — domínio por área, padrão de erros, histórico
/sobre                 Fontes e procedência  — o que é oficial, análise e autoral
```

13 rotas. Nenhuma a mais.

### 6.2 Navegação

- **Desktop:** barra superior fixa e discreta — *Hoje · Áreas · Praticar · Revisão ·
  Redação*. Progresso e Sobre ficam no rodapé/menu secundário. Contador de dias até a
  prova sempre visível, discreto, sem alarmismo.
- **Celular:** a mesma barra vira **tab bar inferior com 5 itens**, porque o polegar vive
  embaixo. Decisão explícita: sem menu hambúrguer. Hambúrguer esconde a navegação
  principal atrás de um toque extra — fricção pura num app que se usa em 30 minutos.
- **Profundidade máxima: 2 cliques** de qualquer lugar até estudar qualquer coisa.
- Toda página de assunto tem, no fim, **a próxima ação óbvia** (praticar / próximo assunto).
  Nunca um beco sem saída.

### 6.3 Estrutura do Dashboard ("Hoje")

Só entra no dashboard o que responde a uma destas perguntas:
*o que eu faço agora? · como eu estou? · o que está me escapando?*

1. **Faixa de contexto** — "48 dias até o 1º dia" + fase do plano (construção / consolidação / revisão final).
2. **Plano de hoje** — 2 a 4 itens, cada um com tempo estimado e o motivo de estar ali. O
   primeiro item tem o botão de ação primária. **Este é o único elemento acima da dobra
   no celular.**
3. **Revisão pendente** — contagem e entrada direta, só aparece se houver.
4. **Domínio por área** — quatro barras + redação. Uma olhada, sem números decorativos.
5. **Padrão de erros recentes** — a frase diagnóstica (§4.5), só se houver dados suficientes.

**Fora do dashboard, explicitamente:** streaks, horas totais acumuladas, gráficos de
atividade, medalhas, "motivação do dia". Nada disso aumenta aprendizado por minuto.

---

## 7. Sistema visual

### 7.1 Princípio

**Papel, não painel.** A referência é material impresso bem editado — livro didático
bom, revista científica — e não dashboard de SaaS. Concretamente: tipografia carrega a
hierarquia; a cor é usada para significar, não para decorar; e a página respira.

### 7.2 Tokens

**Cor** — paleta deliberadamente estreita:

| Token | Valor | Uso |
|---|---|---|
| `--paper` | `#FFFFFF` | fundo principal |
| `--paper-2` | `#FAF9F7` | superfícies elevadas, levemente quente |
| `--ink` | `#17161A` | texto principal |
| `--ink-2` | `#56545E` | texto secundário |
| `--ink-3` | `#8A8792` | metadados |
| `--line` | `#E6E3DD` | separadores |
| `--accent` | `#1C4E80` | ação, links, estado ativo — azul-tinta |
| `--accent-soft` | `#EAF0F7` | fundo de destaque do acento |
| `--ok` | `#1B7A4B` | acerto |
| `--warn` | `#9A6B12` | atenção / pegadinha |
| `--no` | `#B32A2A` | erro |

Total: **um** acento de marca + três cores semânticas que só aparecem em feedback de
questão. Sem gradientes. Sem glassmorphism. Sombras só em elementos que realmente
flutuam (nada mais que um nível).

**Por que azul-tinta e não o roxo/índigo padrão:** roxo-índigo em fundo branco com cards
arredondados *é* a assinatura visual do template de IA. O azul de caneta-tinteiro sobre
papel levemente quente lê como material de estudo, e fica longe do verde e do vermelho
semânticos — que precisam ser inequívocos numa tela de correção.

**Tipografia**
- Títulos: **Source Serif 4 Variable** (SIL OFL, auto-hospedada via Fontsource).
  Serifa dá autoridade editorial e separa "conteúdo" de "interface" sem precisar de cor.
- Texto e interface: **font stack do sistema**. Zero requisição, renderização nativa,
  performance. Uma única webfont no projeto inteiro.
- Escala modular 1.2: 12 · 14 · 16 · 19 · 23 · 28 · 33 px.
- Corpo de leitura: **17–18px**, altura de linha **1.65**, medida **62–72 caracteres**.
  Medida de linha controlada é o que mais diferencia texto legível de texto cansativo.

**Espaço e forma**
- Grade de 4px. Espaçamentos: 4 · 8 · 12 · 16 · 24 · 32 · 48 · 64.
- Raio de borda: **6px**, um valor só. Nada de pílulas.
- **Card é exceção, não padrão.** O layout default é conteúdo em fluxo separado por
  espaço e por filete. Card só onde o elemento é de fato uma unidade clicável
  independente (item do plano, questão).

**Movimento**
- Só dois casos: transições de estado (120–180ms, `ease-out`) e revelação da correção
  (200ms). Nada entra na tela com animação ao rolar.
- `prefers-reduced-motion` respeitado globalmente.

### 7.3 Acessibilidade (requisito, não extra)

- Contraste mínimo **4.5:1** em todo texto; foco visível sempre, nunca removido.
- Alvos de toque ≥ 44×44px.
- Correção de questão **nunca comunicada só por cor** — sempre cor + ícone + palavra.
- HTML semântico, ordem de foco natural, navegação completa por teclado.
- `aria-live` para anunciar o resultado da correção.

### 7.4 Imagens e diagramas

**Nenhuma foto decorativa. Nenhum banco de imagens. Zero exceções.**

O único conteúdo visual são **diagramas SVG próprios**, escritos à mão no repositório,
que existem quando o desenho explica melhor que o texto. Herdam a cor do texto
(`currentColor`), escalam sem perda e pesam quase nada.

Diagramas previstos: parábola e raízes · plano cartesiano com função afim · estrutura da
redação (4 parágrafos e função de cada um) · 5 elementos da proposta de intervenção ·
ciclo do carbono · cadeia alimentar e fluxo de energia · anatomia de um item do ENEM
(enunciado / suporte / comando / alternativas) · circuito e cálculo de consumo em kWh.

Cada diagrama tem `<title>` e `<desc>` para leitor de tela e legenda que funciona sem
a imagem.

---

## 8. Decisões técnicas

### 8.1 Stack `DECISÃO`

**Vite + React 18 + TypeScript + React Router. CSS próprio com tokens (CSS Modules).
Persistência em localStorage. Sem backend.**

Justificativa por alternativa descartada:

| Alternativa | Por que não |
|---|---|
| Next.js | SSR/ISR não trazem nada: usuário único, conteúdo estático, dados só no cliente. Traz complexidade de build e deploy sem contrapartida. |
| Astro | Excelente para conteúdo, mas metade deste produto é estado interativo **compartilhado entre páginas** (plano, domínio, fila de revisão). Ilhas + store externa custaria mais do que um SPA simples. |
| Tailwind | Acelera, mas puxa o design para o padrão visual genérico que o briefing proíbe. Um sistema de tokens próprio em ~200 linhas dá controle total e identidade. |
| Backend + banco | Um usuário, um dispositivo principal. Backend adicionaria autenticação, hospedagem, custo e latência para resolver um problema inexistente. |
| KaTeX/MathJax | ~270KB para fórmulas que são frações, potências e raízes. Um componente `<Formula>` de ~60 linhas resolve com HTML/CSS. |

**Conteúdo como módulos TypeScript tipados**, não Markdown nem CMS: o compilador vira
revisor. Se uma questão não tiver o campo `procedencia`, ou se um distrator ficar sem
diagnóstico, **o build quebra**. Isso transforma as regras editoriais deste documento em
regras verificadas por máquina — é a melhor garantia possível contra o conteúdo
degradar quando o site crescer.

### 8.2 Persistência

- `localStorage`, chave única versionada (`enem-study:v1`), com *migrations* previstas.
- Toda leitura/escrita em `try/catch` — o app funciona (sem salvar) se o storage falhar.
- **Exportar/importar JSON** na tela de Progresso: o aluno nunca perde 48 dias de
  histórico por limpar o navegador. Custa pouco e é a diferença entre confiar e não confiar.

### 8.3 Performance

- Alvo: **carga inicial < 120KB gzip**; *code-splitting* por rota; conteúdo de área
  carregado sob demanda.
- Uma webfont, subset latino, `font-display: swap`, pré-carregada.
- SVG inline, sem bibliotecas de ícone (ícones próprios, poucos e necessários).

### 8.4 Estrutura do código

```
src/
  app/          rotas, layout, providers
  design/       tokens.css, base.css, primitivos (Button, Tag, Callout, Progress…)
  content/      areas.ts, topics/<area>/<topic>.ts, questions/, redacao/
  engine/       dominio.ts, prioridade.ts, revisao.ts, planoDiario.ts, diagnostico.ts
  storage/      schema.ts, persist.ts, migrations.ts
  features/     hoje/, area/, assunto/, questao/, revisao/, redacao/, progresso/
  lib/          data, formatação, hooks
```

Regra de acoplamento: `engine/` é **funções puras**, sem React e sem storage. É a parte
mais testável e a mais importante — e por isso será a mais testada.

### 8.5 SEO e metadados básicos

Site pessoal, mas o básico é barato: `<title>` e `<meta description>` por rota, `lang="pt-BR"`,
HTML semântico, `robots.txt`, favicon próprio. Sem Open Graph elaborado — não vai ser
compartilhado.

---

## 9. Modelo de dados

```ts
type Prioridade   = 'essencial' | 'importante' | 'complementar';
type Procedencia  = 'oficial' | 'adaptada' | 'autoral';
type Dificuldade  = 'facil' | 'media' | 'dificil';
type TipoErro     = 'leitura' | 'conceito' | 'calculo' | 'distrator' | 'grafico';
type Eixo         = 'linguagens' | 'fenomenos' | 'problemas' | 'argumentacao' | 'propostas';

interface Topic {
  id: string; areaId: AreaId; titulo: string;
  prioridade: Prioridade;
  justificativa: string;          // por que essa prioridade — exibido na página
  prerequisitos: TopicId[];
  minutosEstimados: number;
  eixos: Eixo[];
  blocos: { precisaSaber, explicacao, conceitos, exemplo, noEnem,
            erros, questoes: QuestionId[], revisaoRapida };
}

interface Question {
  id: string; topicId: TopicId; conceito: string;
  procedencia: Procedencia;
  referencia?: { prova: string; ano: number; numero?: number };  // obrigatório se 'oficial'
  fonte?: string;                                               // obrigatório se 'adaptada'
  dificuldade: Dificuldade; eixo: Eixo;
  enunciado: Bloco[];                    // texto, imagem/SVG, tabela
  alternativas: {
    letra: 'A'|'B'|'C'|'D'|'E'; texto: string;
    correta: boolean;
    diagnostico: string;                 // obrigatório em TODAS
    tipoErro?: TipoErro;                 // obrigatório nas incorretas
  }[];
  explicacao: string;
  irmas: QuestionId[];                   // mesmo conceito, outro contexto
}

interface Progresso {                    // persistido
  versao: 1;
  topicos:  Record<TopicId, { dominio: number|null; caixa: 0|1|2|3|4;
                              proximaRevisao: ISODate|null; ultimoEstudo: ISODate|null;
                              acertos: number; erros: number }>;
  respostas: { questionId; letra; correta; em: ISODate; tipoErro?: TipoErro }[];
  redacao:   { secoesLidas: SectionId[]; producoes: { em, tema, autoavaliacao: C1..C5 }[] };
  config:    { orcamentoDiario: 30|60|90; linguaEstrangeira: 'ingles'|'espanhol';
               diagnosticoFeito: boolean };
}
```

**Invariantes verificadas em tempo de build** (script de validação no CI):
`procedencia === 'oficial'` exige `referencia`; toda alternativa exige `diagnostico`;
toda incorreta exige `tipoErro`; exatamente uma correta; todo `prerequisito` aponta para
um tópico existente e o grafo é acíclico; toda questão pertence a um tópico existente.

---

## 10. Prioridades de implementação

| Fase | Entrega | Por quê |
|---|---|---|
| **P0** | Tokens + primitivos + rotas + storage + engine com testes | Nada funciona sem a base; engine é o coração |
| **P0** | Hoje · Área · Assunto · Questão + correção diagnóstica | É o ciclo mínimo que gera aprendizado |
| **P0** | Conteúdo: todos os Essenciais das 4 áreas | É o valor real |
| **P0** | Módulo de redação completo | Maior retorno por minuto do exame |
| **P1** | Revisão · Progresso · Diagnóstico · Praticar com filtros | Fecham o ciclo |
| **P1** | Diagramas SVG · exportar/importar · caminho de importação de questões oficiais | Qualidade e continuidade |
| **P2** | Conteúdos Importantes | Fila natural de continuação |
| **Fora** | Correção automática de redação, simulado TRI, multiusuário, PWA offline | Ver §2.5 |

---

## 11. Riscos

| Risco | Gravidade | Mitigação |
|---|---|---|
| **Sem acesso aos PDFs oficiais** (§0) | Alta | Zero questões marcadas como oficiais; caminho de importação documentado; fatos estruturais confirmados por múltiplas fontes |
| Conteúdo autoral com erro conceitual | Alta | Auditoria educacional dedicada na Etapa 3; tipos obrigando diagnóstico por alternativa; linguagem de escopo explícita nas simplificações |
| Volume de escrita > tempo disponível | Média | Essenciais primeiro; estados "ainda não escrito" honestos em vez de páginas vazias |
| Algoritmo recomendar mal e perder confiança | Média | Todo item do plano mostra o motivo; plano determinístico por dia; engine coberta por testes |
| Sobre-engenharia do motor de estudo | Média | `engine/` é função pura e pequena; sem ML, sem heurística que não caiba em um parágrafo explicável |
| Perda de progresso (localStorage limpo) | Média | Exportar/importar JSON; leitura tolerante a falha |
| Site virar "bonito e inútil" | Alta | Toda funcionalidade responde a "isso aumenta aprendizado por minuto?"; §2.5 lista o que foi recusado |
| Fadiga do plano diário | Baixa | Orçamento ajustável; transbordo de revisão em vez de acúmulo punitivo |

---

## 12. Fechamento da Etapa 1

### O que foi decidido
- Estratégia de treineiro: priorizar o **estruturante e reaproveitável**, não a véspera.
- Escopo fechado: **Essenciais das 4 áreas + redação completa**, no modelo de 9 blocos.
- Motor de estudo: domínio por EMA assimétrica, prioridade multiplicativa com
  pré-requisitos, revisão espaçada **truncada pela data da prova**, plano diário
  determinístico e **sempre justificado**.
- Visual: papel e tinta, uma webfont serifada para títulos, um acento azul-tinta, card
  como exceção, zero foto decorativa.
- Stack: **Vite + React + TS + CSS próprio + localStorage**, conteúdo como TS tipado para
  que as regras editoriais virem erro de compilação.

### O que ainda não existe
Nenhuma linha de aplicação — esta etapa é só especificação, conforme o briefing.

### Decisões que passam para a Etapa 2
1. Construir `engine/` **antes** das telas, com testes desde o início.
2. Escrever os tipos de conteúdo **antes** do conteúdo, para o compilador vigiar a qualidade.
3. Entregar o caminho de importação de questões oficiais junto com o banco autoral.
4. Marcar todo item não oficial com selo visível de procedência, sem exceção.

---

## Fontes

Estruturais (INEP/MEC e convergência de fontes):
- INEP — Matrizes de Referência do Enem: https://www.gov.br/inep/pt-br/centrais-de-conteudo/acervo-linha-editorial/publicacoes-institucionais/avaliacoes-e-exames-da-educacao-basica/matrizes-de-referencia-enem
- INEP — Provas e Gabaritos: https://www.gov.br/inep/pt-br/areas-de-atuacao/avaliacao-e-exames-educacionais/enem/provas-e-gabaritos
- INEP — Questões são calculadas pela TRI: https://www.gov.br/inep/pt-br/centrais-de-conteudo/noticias/enem/questoes-sao-calculadas-pela-tri
- MEC/SECOM — Metodologia da TRI: https://www.gov.br/secom/pt-br/assuntos/noticias/2021/10/veja-como-funciona-a-metodologia-da-teoria-de-resposta-ao-item-tri
- MEC — Entenda como é calculada a nota do Enem: https://portal.mec.gov.br/bolsa-formacao/sistec/418-noticias/enem-946573306/84461-entenda-como-e-calculada-a-nota-do-enem
- INEP — Enem 2026 será utilizado para avaliação da educação básica: https://www.gov.br/inep/pt-br/centrais-de-conteudo/noticias/enem/enem-2026-sera-utilizado-para-avaliacao-da-educacao-basica
- INEP — Cartilha "A Redação no Enem" (Cartilha do Participante): https://download.inep.gov.br/publicacoes/institucionais/avaliacoes_e_exames_da_educacao_basica/a_redacao_no_enem_2025_cartilha_do_participante.pdf
- INEP — Guia do Participante "Entenda a sua nota no Enem": https://download.inep.gov.br/publicacoes/institucionais/avaliacoes_e_exames_da_educacao_basica/entenda_a_sua_nota_no_enem_guia_do_participante.pdf

Calendário, edital e mudanças futuras:
- Estratégia Vestibulares — Edital Enem 2026 completo: https://vestibulares.estrategia.com/portal/noticias/edital-enem-2026-completo-datas-inscricoes-provas-e-resultado/
- Quero Bolsa — Edital do Enem 2026: https://querobolsa.com.br/revista/edital-do-enem-2026-e-divulgado
- Câmara dos Deputados — Novo ensino médio vira lei, mas mudanças no Enem são vetadas: https://www.camara.leg.br/noticias/1086127-novo-ensino-medio-vira-lei-mas-mudancas-no-enem-sao-vetadas/

**Nota de procedência:** os links `download.inep.gov.br` e `gov.br` acima estão
registrados como fonte primária do que é afirmado como `OFICIAL`, mas, pela restrição de
rede descrita em §0, seu conteúdo foi confirmado por busca e por convergência entre
fontes, não por leitura direta do PDF nesta sessão.
