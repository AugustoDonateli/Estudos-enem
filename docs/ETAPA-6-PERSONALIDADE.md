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

## 6. Marcas de área

Cinco desenhos geométricos, um por área, em marca-d'água no alto do cartão —
como o brasão de um papel timbrado. Foram **desenhados à mão, não gerados**, e
a razão é técnica antes de estética: eles pintam com `currentColor` e
`var(--acento-fundo)`, então cada um assume sozinho a cor da sua área pelo
mesmo `[data-area]` que governa o resto do site. Ilustração gerada vem com
hexadecimal cozido dentro e precisaria de cinco arquivos para fazer o que aqui
um componente faz.

---

## 7. Sistema de imagem

`Figura` (`src/design/Figura.tsx`) trata imagem como o site trata questão:
nada entra sem procedência. Some silenciosamente quando o arquivo não existe,
o que permite versionar o código sem versionar imagem. O crédito fica sobre a
imagem, não num rodapé que ninguém lê.

O registro distingue dois tipos, e eles não se confundem:

| Tipo | Exige | Crédito impresso |
|---|---|---|
| Fotografia | autor, fonte e licença | `Autor · Acervo · Licença` |
| Ilustração gerada (`gerada: true`) | a ferramenta em `fonte` | `Ilustração gerada por IA · ferramenta` |

A distinção não é burocracia: uma ilustração gerada ocupando em silêncio o
lugar de uma foto de dia de prova seria um documento falso — exatamente o que
o projeto se proíbe de fazer com questão.

Duas ilustrações foram geradas (Recraft V4.1 via Higgsfield, risografia
chapada na paleta exata do site) para os dois pontos de inserção: o topo de
**Áreas** e o topo de **Redação**.

**Os arquivos não estão no repositório, e não por escolha.** O proxy de saída
desta sessão bloqueia tanto os acervos de foto quanto o CDN que serve as
ilustrações geradas — testado por `curl`, por `WebFetch` e por relay via
sandbox, todos negados; o manual do próprio proxy manda reportar o host
bloqueado em vez de contornar. Dá para gerar, não dá para baixar.
`public/imagens/README.md` traz os links diretos e o que fazer com eles.

---

## 8. Testes

- **71 unitários** (eram 51). Os 20 novos verificam a tabela do Code 39, que
  foi digitada à mão: cada caractere tem nove elementos e exatamente três
  largos. O teste pegou a própria premissa errada — `$ / + %` são a exceção
  documentada, com três espaços largos e nenhuma barra larga — e passou a
  afirmar a regra real, com as duas formas válidas.
- **62 de navegador**, incluindo contraste medido nas 12 rotas.

---

## 9. Limitações

- **Os dois arquivos de ilustração não estão no repositório.** Ver a seção 7.
  O site roda sem eles.
- **Fraunces é escolha discutível.** É uma serifa de alto contraste com
  personalidade forte, e personalidade forte divide. Trocá-la é um `@font-face`
  e um token.
- **A tarja Code 39 é decorativa na prática.** Ela codifica o id do assunto,
  o que é honesto, mas ninguém vai escanear a tela. O valor dela é de
  linguagem visual, não de função.
