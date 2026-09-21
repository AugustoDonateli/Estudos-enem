# Etapa 6 — Personalidade visual

Data: 21/09/2026 · 48 dias para o primeiro dia de prova

A Etapa 5 deixou o site institucional e organizado, mas genérico: ele imitava
o gov.br, e o gov.br é o esqueleto de qualquer portal federal. Esta etapa
troca a referência. O objeto que o aluno realmente segura no dia do exame não
é um portal: é um **caderno de prova impresso**.

---

## 1. O que os PDFs oficiais entregaram além do texto

As cinco provas que estão neste repositório tinham sido usadas só como fonte
de questões. Lidas como **objeto**, renderam a maior parte desta etapa.

Da capa de 2025, textualmente:

```
01   *010175AZ1*
1º DIA   CADERNO 1 | AZUL
LEIA ATENTAMENTE AS INSTRUÇÕES SEGUINTES:
```

E cada página do caderno leva o próprio código: `*010175AZ10*`, `*010175AZ11*`,
incrementando. A capa também traz as durações: **cinco horas e trinta minutos**
no 1º dia, **cinco horas** no 2º.

Das fontes embutidas no PDF:

| Fonte embutida | Onde a prova usa | O que virou no site |
|---|---|---|
| `ArialMT`, `Arial-BoldMT` | Corpo das questões | `--fonte-prova`: a pilha grotesca do sistema, nas superfícies que imitam a prova |
| `Calibri` (Light/Bold/Italic) | Capa e instruções | Referência de composição do bloco de instruções |
| `C39HrP36DlTt` | As tarjas `*…*` | **Code 39** — é uma fonte de código de barras, e os asteriscos são os delimitadores da própria codificação |
| `MinionPro`, `TimesNewRomanPS-Italic` | Textos literários e citações | Não replicado |

A descoberta do Code 39 mudou o rumo: aquelas tarjas não são ornamento
gráfico, são código de barras legível por máquina.

---

## 2. Três vozes tipográficas, e cada uma diz de onde a informação vem

| Token | Família | Onde |
|---|---|---|
| `--fonte` | Rawline | Interface: navegação, rótulos, listas, corpo |
| `--fonte-titulo` | Fraunces (variável, SIL OFL) | Título de página e número grande — a voz editorial do site |
| `--fonte-prova` | Arial / Liberation Sans | Tudo que imita o caderno. Zero byte de download: é a fonte que a prova usa de fato |

Fraunces entra em 67 KB no subconjunto latino, com eixo óptico de 9 a 144. O
eixo importa: é ele que abre o contraste da serifa conforme o corpo cresce,
que é exatamente o efeito procurado nos números de cartaz.

A escala ganhou quatro degraus acima do topo anterior (`--t-cartaz-01` a `-04`,
60 a 192px). Eles quebram a razão de 1,2 de propósito: uma hierarquia em que
nada passa de 42px é o que faz toda página parecer ter a mesma importância.

---

## 3. Papel em vez de tela

`#ffffff` é a cor de uma tela acesa, não de papel. As superfícies de leitura
passaram a `--papel: #fbfaf7`, com `--papel-2` para faixas e `--papel-borda`
para divisores. O branco puro ficou reservado ao que precisa saltar do papel:
cartões, campos de formulário, a folha da questão.

---

## 4. Ornamento que é informação

O padrão de bolinhas era textura inventada — a assinatura visual de "gerado
por IA". Saiu de onde havia dado real para desenhar.

**Contagem regressiva (`/`).** O número de dias em escala de cartaz, e abaixo
o calendário real entre hoje e o primeiro domingo: uma célula por dia, sete
por linha, começando no domingo. O aluno lê "48 dias" e vê o tamanho de 48
dias. O último quadrado, em amarelo, é o dia da prova — e ele cai na coluna
de domingo, o que confirma a aritmética sozinho.

**As 180 questões (`/areas`).** Uma célula por questão, em quatro blocos de
cor. Mostra sem uma linha de texto que nenhuma área pesa mais que outra na
contagem de itens.

---

## 5. Linguagem do caderno

Componentes em `src/design/Caderno.tsx`:

- **`Tarja`** — Code 39 de verdade, gerado da tabela padrão em
  `src/design/code39.ts`. Um leitor de código de barras lê o que está escrito
  embaixo.
- **`FaixaCaderno`** — `1º DIA · CADERNO 7 | AZUL`, na composição da capa.
- **`Instrucoes`** — o formato da página 1: título em caixa alta e regras
  numeradas e justificadas.

A questão deixou de ser um quadro branco arredondado com cabeçalho azul e
virou uma folha: filete preto no topo, tarja na marginália, `QUESTÃO 140` em
grotesca pesada, texto-base justificado em Arial.

### O limite, que é rígido

A moldura imita o caderno; **o conteúdo nunca se disfarça de oficial**.

- Só questão oficial com número de prova recebe numeração de caderno. Questão
  autoral recebe `QUESTÃO`, sem número.
- A tarja codifica identificador deste site (`*MAT-PORCENTAGEM*`), nunca um
  código de caderno do INEP.
- O selo de procedência ficou ao lado da tarja, no alto da folha.

---

## 6. Sistema de imagem

`Figura` (`src/design/Figura.tsx`) trata imagem como o site trata questão:
nada entra sem procedência. O componente **recusa a renderizar** imagem sem
autor, fonte e licença preenchidos, e some silenciosamente quando o arquivo
não existe — o que permite versionar o código sem versionar fotos de acervo.
O crédito fica sobre a imagem, não num rodapé que ninguém lê.

Dois pontos de inserção estão prontos e vazios: o topo de **Áreas** e o topo
de **Redação**, ambos em faixa que sangra de borda a borda.

**Isto está pendente, e não por escolha.** O proxy de saída deste ambiente
bloqueia `agenciabrasil.ebc.com.br`, `commons.wikimedia.org` e `gov.br` —
testado por `curl` e por `WebFetch`, todos negados. Baixar as fotos é um
passo manual. `public/imagens/README.md` diz exatamente o que procurar, onde
procurar e como creditar.

---

## 7. Testes

- **71 unitários** (eram 51). Os 20 novos verificam a tabela do Code 39, que
  foi digitada à mão: cada caractere tem nove elementos e exatamente três
  largos. O teste pegou a própria premissa errada — `$ / + %` são a exceção
  documentada, com três espaços largos e nenhuma barra larga — e passou a
  afirmar a regra real, com as duas formas válidas.
- **62 de navegador**, incluindo contraste medido nas 12 rotas.

---

## 8. Limitações

- **As duas fotos não existem.** Ver a seção 6.
- **Fraunces é escolha discutível.** É uma serifa de alto contraste com
  personalidade forte, e personalidade forte divide. Trocá-la é um `@font-face`
  e um token.
- **A tarja Code 39 é decorativa na prática.** Ela codifica o id do assunto,
  o que é honesto, mas ninguém vai escanear a tela. O valor dela é de
  linguagem visual, não de função.
