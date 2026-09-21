# Etapa 5 — Redesenho visual institucional

Data: 21/09/2026 · 48 dias para o primeiro dia de prova

O briefing pediu uma transformação visual perceptível em um screenshot, não uma troca de cores.
A funcionalidade, o conteúdo e a arquitetura de informação foram preservados integralmente: o
motor de estudo, o banco de questões, a matriz oficial e o fluxo de navegação estão intactos.
Mudou o sistema de design, a composição das telas e o movimento.

---

## 1. Referência e método

O GovBR Design System (`@govbr-ds/core` 3.7) foi lido direto do código-fonte SCSS do pacote no
npm, em `src/partial/scss/configs/`. O site do gov.br e o `download.inep.gov.br` respondem 403
através do proxy de saída deste ambiente — isso está registrado como limitação, não contornado.

O que foi adotado do DS oficial, sem alteração:

| Elemento | Origem |
|---|---|
| Rampa de azul (`--azul-90` a `--azul-5`) e de cinza | `_colors.scss` |
| Cores de feedback (sucesso, alerta, perigo, info) | `_colors.scss` |
| Tipografia Rawline (SIL OFL-1.1, 400–800, auto-hospedada) | `_font.scss` |
| Escala de espaçamento base 8px | `_spacing.scss` |
| Breakpoints de grid (576 / 768 / 992 / 1200) | `_grid.scss` |
| Anel de foco dourado tracejado | `_focus.scss` |

O que **não** vem do gov.br e é identidade própria deste projeto: a assinatura *ENEM Estudos*, o
símbolo de cartão-resposta, os grafismos geométricos, o sistema de acentos por área e toda a
composição editorial das páginas. O site não se apresenta como produto do governo em nenhum
ponto, e não reproduz o logotipo oficial do ENEM ou do INEP — são marcas de terceiros e este é um
projeto pessoal de estudo.

---

## 2. Decisões de composição

**Duas aberturas de página, não uma.** A faixa escura (`HeroEscuro`) marca o ponto de entrada do
produto e as aberturas de área. O cabeçalho claro (`CabecalhoPagina`) serve às páginas de
leitura, onde uma faixa escura roubaria atenção do conteúdo.

**Métricas em ficha de dados, não em cartões.** A fileira de cartões de estatística é o clichê
que transforma qualquer produto em painel genérico. Aqui os números aparecem com filete superior
e, dentro do hero, como linhas de número + rótulo — formato que sobrevive a coluna estreita e a
tela de celular sem quebrar rótulo em três linhas.

**Listas editoriais no lugar de cartões.** O plano do dia, a fila de revisão, o domínio por
assunto, as seções de redação e as fontes oficiais são listas com filete e barra de acento. O
cartão ficou reservado ao único caso em que o item é uma unidade clicável independente: a grade
de áreas. O primitivo `Cartao`, que ninguém usava, foi removido do sistema.

**Acentos por área.** Cinco cores da paleta oficial, todas acima de 6,5:1 em branco, aplicadas
por `[data-area]` em qualquer contêiner. Servem para orientação, não para hierarquia — a cor da
marca continua sendo o azul institucional.

**Diagramas como desenho técnico.** Traço fino, rótulos em versalete, faixa com filete de acento
no topo em vez de cartão arredondado.

---

## 3. Movimento

Entradas escalonadas (`revelar`), barras que crescem (`crescer-barra`), acordeão com altura
animada por `grid-template-rows: 0fr → 1fr` (funciona sem medir o conteúdo), indicador de
navegação deslizante, esqueleto de carregamento com brilho, e transições de estado em 150–300ms.
Tudo desligado em bloco sob `prefers-reduced-motion: reduce`.

O que foi **removido** por ser gesto de produto de assinatura e não de site institucional: o
cartão que levita no hover (`transform: translateY(-3px)` + sombra funda). O retorno visual
passou a ser a borda assumindo o acento da área e o filete do topo engrossando. A sombra mais
profunda da escala (`--sombra-3`) ficou sem uso e saiu dos tokens.

---

## 4. Achados da auditoria visual

Capturas de 11 telas em desktop (1280px) e Pixel 7 foram revisadas uma a uma.

| Achado | Correção |
|---|---|
| **A página de assunto e a de prática renderizavam o celular inteiro com zoom reduzido.** A faixa de filtros e a navegação de blocos têm `overflow-x: auto`, mas herdavam `min-width: auto` de grade/flex, esticavam até caber o conteúdo e o Chrome alargava o viewport de layout em vez de gerar rolagem | `min-width: 0` nos contêineres roláveis e `grid-template-columns: minmax(0, 1fr)` no layout de duas colunas |
| O teste de rolagem horizontal não pegava o problema acima, porque comparava `scrollWidth` com o viewport **já alargado** | Novo teste `elementosForaDaBorda`, que mede cada elemento contra `clientWidth` e ignora filhos de faixas roláveis. Roda nas 12 rotas, nos dois formatos |
| `.heroEscuro .rotulo` não aplicava: num CSS Module o seletor vira hash e não casa com a classe global. O rótulo do hero ficava em azul-70 sobre azul-90 — 2,27:1 | `:global(.rotulo)`. A varredura por esse padrão em todos os módulos encontrou só este caso |
| Os filetes das métricas encostavam na última linha da descrição no cabeçalho claro | `abaixo` passou a ser envolvido em um bloco com respiro próprio |
| No celular, cinco etiquetas quebravam em três linhas e empurravam o conteúdo da página de assunto inteiro para baixo da dobra | Faixa de etiquetas rolável; a trilha também, que quebrava deixando o separador pendurado |
| O estado vazio era uma caixa tracejada centralizada — o clichê de "empty state" de SaaS | Virou faixa editorial alinhada à esquerda, com filete de acento |
| A lista de habilidades da matriz, sempre aberta, empurrava as questões para longe | Virou acordeão. O rótulo de procedência oficial continua visível com ele fechado |
| "11 oficialis nesta seleção" | Plural corrigido |
| `104px` de altura de cabeçalho repetido em três arquivos | Token `--altura-cabecalho` |
| `npm run typecheck` era o único comando que checava tipos de verdade; `npx tsc --noEmit` na raiz não verifica nada, porque o `tsconfig.json` só tem referências | Passou a ser usado o script do projeto |

---

## 5. Cobertura de testes

- 51 testes unitários (Vitest + Testing Library)
- 62 testes de navegador (Playwright, desktop 1280px e Pixel 7)

A suíte de contraste passou de 5 para as 12 rotas do site, medindo a razão real de cada texto
visível contra o fundo efetivo, com os limites da WCAG AA (4,5:1 normal, 3:1 para texto grande).
A verificação de alvos de toque de 44px e a de erros de console continuam valendo.

---

## 6. Limitações que permanecem

- **O logotipo oficial do ENEM não é usado.** É marca de terceiros; a assinatura do site é
  própria e não se confunde com a do exame.
- **Raleway está declarada na pilha de fontes mas não é embarcada.** Rawline cobre os cinco pesos
  usados; embarcar uma segunda família custaria mais bytes do que resolve.
- **gov.br e download.inep.gov.br continuam inacessíveis** a partir deste ambiente. A
  documentação do DS foi lida do pacote npm, que é a mesma fonte, mas o material de marca do
  INEP não pôde ser consultado.
