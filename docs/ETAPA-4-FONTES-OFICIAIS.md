# Etapa 4 — Incorporação das fontes oficiais

Data: 21/09/2026

A Etapa 1 registrou uma limitação: o ambiente de construção bloqueava o acesso de rede a
`gov.br` e `download.inep.gov.br`, então não foi possível ler os documentos originais do INEP.
Isso teve duas consequências declaradas na época: nenhum número de habilidade da matriz foi
citado, e o banco saiu com zero questões oficiais.

Os PDFs foram fornecidos depois, diretamente: a **Matriz de Referência** e quatro cadernos de
prova (**ENEM 2024 e 2025, 1º e 2º dias**). Este documento registra o que foi incorporado e
como — inclusive o que continua sendo ressalva.

---

## 1. Matriz de Referência

`src/content/matriz.ts` reproduz o **texto oficial** do documento do INEP:

- os **5 eixos cognitivos** (I. Dominar linguagens · II. Compreender fenômenos · III. Enfrentar
  situações-problema · IV. Construir argumentação · V. Elaborar propostas), com a redação
  integral de cada um;
- as **30 competências de área** e as **120 habilidades** (30 por área), com o texto de cada
  uma transcrito sem reescrita.

O arquivo é gerado a partir do PDF e traz um aviso no topo: é o único módulo de conteúdo do
projeto cujo texto **não** é autoral, e não deve ser resumido nem "melhorado".

### Ligação entre assunto e habilidade

Cada um dos 29 assuntos declara agora quais habilidades da matriz ajuda a atender — em média
três por assunto, 87 associações no total. A página do assunto mostra o **texto oficial** de
cada habilidade em um bloco marcado como oficial.

Distinção importante, e explicitada no site: **a habilidade é oficial; a associação é análise
deste site.** Um professor poderia ligar o mesmo assunto a outras habilidades, e isso seria
igualmente defensável.

### Verificação automática

`scripts/validar-conteudo.ts` ganhou uma checagem: todo código citado precisa existir de fato na
matriz **da própria área**. Citar `H16` em um assunto de Linguagens quando o pretendido era o
`H16` de Matemática quebra o build. Sem isso, uma citação errada da matriz circularia com
aparência de texto oficial.

---

## 2. Questões oficiais

`src/content/questoes/oficiais.ts` traz **11 questões** aplicadas nas provas de 2024 e 2025:

| Área | Itens | Assuntos cobertos |
|---|---|---|
| Matemática | 6 | porcentagem (2), razão e proporção, média e mediana, áreas, função afim |
| Ciências da Natureza | 2 | estequiometria, eletricidade |
| Ciências Humanas | 2 | cidadania e direitos, globalização |
| Linguagens | 1 | variação linguística |

Cada item traz a referência completa — **ano, dia, caderno e número**. O caderno é obrigatório e
não é detalhe burocrático: o ENEM embaralha a numeração entre cadernos, então "questão 150"
só identifica um item quando se diz de qual caderno.

Todas seguem o mesmo padrão editorial das questões autorais: **diagnóstico individual em cada
alternativa**, com o raciocínio específico que leva até ela, e tipo de erro classificado.

### Critérios de seleção

1. **Resolubilidade por texto.** Itens que dependem de figura, gráfico, mapa ou imagem ficaram
   de fora, porque o texto sozinho não permitiria resolvê-los.
2. **Casamento com o conteúdo escrito.** Só entraram itens ligados a um dos 29 assuntos — uma
   questão oficial de um assunto que o site não ensina seria um item solto.
3. **Resposta determinável.** Ver a ressalva abaixo.

### Ressalva sobre o gabarito

**Os gabaritos oficiais não foram fornecidos junto com os cadernos.** A alternativa marcada como
correta foi determinada por resolução, e por isso só entraram itens cuja resposta é verificável
por cálculo ou por leitura direta do texto-base — os seis de Matemática e os dois de Ciências da
Natureza se resolvem por conta; os três de Humanas e Linguagens se resolvem por eliminação
apoiada em trechos citáveis do texto.

Essa ressalva está declarada em três lugares: no cabeçalho do arquivo de questões, na página de
fontes do site e aqui. **Conferir contra o gabarito do INEP é uma tarefa pendente**, e qualquer
divergência deve ser corrigida no arquivo.

---

## 3. Verificação do escopo contra os objetos de conhecimento

O documento da matriz traz também o anexo de **Objetos de Conhecimento** — a lista oficial de
conteúdos por área. O escopo definido na Etapa 1 foi conferido contra ele: os 29 assuntos
essenciais e os 21 planejados estão todos dentro do anexo, e a classificação em
essencial/importante/complementar continua sendo análise deste site, não hierarquia oficial. O
INEP não atribui peso aos objetos de conhecimento.

---

## 4. Ferramenta de extração

Os PDFs foram lidos com `pdfjs-dist` em um script de uso único, fora do repositório. O
procedimento está descrito em `docs/ADICIONAR-QUESTOES.md` para que a próxima prova possa ser
processada do mesmo jeito.

Dois detalhes que custaram tempo e ficam registrados:

- os cadernos de 2025 grafam o cabeçalho como `QUESTãO` (artefato de codificação de fonte), e um
  filtro que procure `QUESTÃO` encontra zero itens;
- quando o comando da questão vem depois da citação da fonte, a extração o funde à alternativa
  A. É preciso separar na transcrição — foi feito item a item.

---

## 5. O que mudou no produto

| Antes | Depois |
|---|---|
| 58 questões, todas autorais | **69 questões**, sendo **11 oficiais** com referência de prova |
| Nenhuma citação de habilidade da matriz | **120 habilidades oficiais** no site, **87 associações** com assuntos |
| Página de fontes declarava banco sem questão oficial | Declara o que é oficial, o que é autoral e a ressalva do gabarito |
| Prática filtrava por área e por erro | Ganhou o filtro **"só questões oficiais"** |
| 95 testes | **99 testes** — cobrindo selo oficial, referência de prova, exibição da matriz e validade de todo código de habilidade |

Bundle inicial permanece em **77 kB gzip**: a matriz e as questões oficiais entraram no pedaço
de conteúdo, que só é baixado nas telas que exibem conteúdo.
