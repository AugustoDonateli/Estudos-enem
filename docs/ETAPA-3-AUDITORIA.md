# Etapa 3 — Auditoria, testes e refinamento

Data: 21/09/2026 · 48 dias para o primeiro dia de prova

A primeira versão foi construída e, conforme o briefing, **não** foi considerada pronta. Este
documento registra o que a auditoria encontrou, o que foi corrigido e o que ficou de fora — com
os achados descritos como achados, e não como uma lista de elogios ao próprio trabalho.

Método: uso do site em navegador real (Chromium, desktop 1280px e Pixel 7), leitura crítica do
conteúdo, medição automatizada de contraste e de alvos de toque, e 95 testes automatizados.

---

## 1. Auditoria educacional

### Verificações feitas

- **Aritmética de todas as 58 questões e dos 29 exemplos resolvidos**, conferida item a item:
  enunciado, alternativa correta, e o cálculo que produz cada distrator. A rastreabilidade é
  parte do conteúdo — cada alternativa errada descreve a conta específica que leva até ela,
  então um erro numérico apareceria como um diagnóstico impossível.
- **Separação entre oficial, análise e autoral.** Todo bloco com informação do INEP está em
  destaque marcado; a priorização de conteúdo e a leitura de "como a prova cobra" estão
  rotuladas como análise.
- **Ausência de estatística inventada.** Nenhum percentual de recorrência aparece no produto.
  A busca por "cai em X%" no repositório retorna zero ocorrências.
- **Simplificações com limite declarado.** Onde a explicação simplifica, o texto diz onde o
  limite está — por exemplo, o modelo de domínio do site é apresentado explicitamente como
  simplificação, e nunca como estimativa de nota TRI.

### Achados corrigidos

| Achado | Correção |
|---|---|
| O bloco "Como isso aparece no ENEM" é análise pedagógica, mas não estava rotulado como tal — ao contrário dos demais blocos de análise do site | Passou a exibir "Análise pedagógica deste site, não texto oficial do INEP" |
| A estrutura de 4 parágrafos da redação podia ser lida como exigência do exame | A seção agora abre declarando que o INEP exige texto dissertativo-argumentativo em até 30 linhas e **não** exige quatro parágrafos; a estrutura é apresentada como recomendação |
| Os cinco elementos da proposta de intervenção são leitura pedagógica consolidada, não lista oficial numerada | O texto diz isso com todas as letras antes de apresentá-los |

### Decisão mantida após revisão

**O site continua sem corretor automático de redação.** Um corretor por heurística devolveria
uma nota de C1 a C5 com aparência de autoridade e conteúdo duvidoso, e o aluno tomaria decisões
de estudo com base nela. O que existe é checklist autoavaliativo por competência, mais o
registro da autoavaliação para comparar semanas.

---

## 2. Auditoria de UX

Usei o site como um aluno com pouco tempo usaria, respondendo às perguntas do briefing.

### Consigo saber o que estudar agora? — **Falhava. Corrigido.**

No celular, **nenhum item do plano aparecia na primeira tela**. Acima dele havia: a fase do
plano em três linhas, um h1 de duas linhas em 33px, um subtítulo de duas linhas e uma caixa de
diagnóstico de 570px de altura. O aluno precisava rolar para ver a primeira coisa a fazer —
falha direta no objetivo central do produto.

Correções:
- o h1 passou a ser **"Plano de hoje"** (a ação), com a contagem regressiva e a fase reduzidas
  a uma linha curta acima;
- `font-size` do h1 virou `clamp(1.625rem, 5.5vw, 2.0625rem)`;
- a explicação da fase desceu para **depois** do plano;
- o convite ao diagnóstico virou um banner compacto no lugar da caixa grande.

Resultado medido: **2 itens do plano visíveis na primeira tela** de um Pixel 7, contra 0 antes.

### O plano usa o tempo que eu declarei? — **Não usava. Corrigido.**

Com orçamento de 60 minutos, o primeiro dia entregava **um único item de 25 minutos** — 58% do
tempo declarado ficava ocioso. Duas causas: o limite de assuntos novos só subia para 2 a partir
de 90 minutos, e a prática de reforço exigia um assunto já lido, coisa que ninguém tem no
primeiro dia.

Correções: o limite passou a ser 1 / 2 / 3 assuntos conforme o orçamento de 30 / 60 / 90, e a
prática de reforço passa a usar o assunto que o aluno acabou de receber quando ainda não há
nenhum lido. Há um teste de regressão que exige o plano usar ao menos 70% do orçamento.

Resultado medido: **60 de 60 minutos planejados**, em 3 itens.

### Consigo passar da teoria para a prática? — **Com atrito. Corrigido.**

A página de um assunto tem nove blocos e é longa de propósito. Quem só queria praticar precisava
rolar por seis blocos. Foi adicionada uma barra de navegação entre blocos, e o modo revisão
ganhou dois atalhos diretos ("ir para a revisão rápida", "ir para a questão").

### Entendo meus erros? — **Sim.**

A correção entrega, em ordem: conceito cobrado, por que a alternativa escolhida não funciona,
por que a correta funciona, o tipo do erro, o que revisar e uma questão-irmã. Verificado em
teste automatizado.

### Existe alguma etapa desnecessária? — **Havia uma. Removida.**

O botão "refazer diagnóstico" usava `window.location.assign`, recarregando a aplicação inteira
em vez de navegar por rota. Virou um link do roteador.

---

## 3. Auditoria visual

### Achados corrigidos

| Achado | Por que era problema | Correção |
|---|---|---|
| **Contraste insuficiente** em `--ink-3` (#8a8792): 3.3:1 sobre branco e 3.07:1 sobre fundo tingido | Abaixo do mínimo de 4.5:1 que a especificação assumiu; afeta todo texto de metadado | Paleta ajustada para `--ink-2: #4a4852` e `--ink-3: #6b6875`. Medidos: 9:1 e 5.4:1 sobre branco, 4.7:1 sobre `--accent-soft` |
| **Barra de domínio "não avaliado" desenhada cheia**, em cinza | Uma barra de 100% lê como "concluído" — comunicava o oposto da verdade | Passou a ser trilha vazia tracejada, que comunica ausência de informação |
| **Cabeçalho translúcido com desfoque** | O conteúdo aparecia por baixo ao rolar, e era exatamente o efeito de vidro que a especificação decidiu não usar | Cabeçalho opaco |
| **Texto ocupando 1080px de caixa com medida de linha de 68ch** | Deixava um vazio de 400px à direita em toda página de conteúdo | Coluna de leitura de 46rem nos blocos de conteúdo, questões e redação |
| **Parágrafos com fundo próprio parando antes da borda da caixa** | O teto global de medida de linha se aplicava também a faixas coloridas, deixando o fundo incompleto | `max-width: none` nas faixas; a medida continua valendo para o texto corrido |
| **Âncoras caindo atrás do cabeçalho fixo** | Clicar num link de bloco deixava o título escondido | `scroll-margin-top: 84px` em todos os títulos e na região de correção |

### Verificações que passaram

- Sem rolagem horizontal em 12 rotas × 2 viewports.
- Uma única fonte web (Source Serif 4 Variable), texto de interface na pilha do sistema.
- Um acento de marca, três cores semânticas restritas ao feedback de questão, nenhum gradiente.
- Card usado como exceção; o layout padrão é fluxo separado por espaço e filete.

---

## 4. Auditoria técnica

### Achados corrigidos

| Achado | Correção |
|---|---|
| **Bundle inicial de 159 kB gzip** — o dashboard importava todo o texto do site | Metadados separados do conteúdo: `catalogo.ts` e `redacao/indice.ts` são leves e carregam sempre; `conteudo.ts` só é baixado nas telas que exibem conteúdo. **Inicial: 77 kB gzip** |
| Risco criado pela separação: catálogo e conteúdo divergirem | Duas checagens no validador quebram o build se um assunto ou seção existir de um lado só, ou se os metadados divergirem |
| **Alvo de toque de 26px** no botão de concluir item do plano | Alvo de 44×44px com círculo visível de 26px dentro. Há teste que falha se qualquer alvo visível ficar abaixo de 34px |
| **Página 404 sem `h1`** | `h1` acessível adicionado |
| `vite.config.ts` não tipava a configuração de teste | Passou a importar de `vitest/config` |

### Verificações que passaram

- **Zero erros de console** em navegação por todas as rotas.
- **Estados vazios com ação** em revisão, prática, progresso e redação.
- **Tratamento de erro de armazenamento**: toda leitura e escrita em `try/catch`; quando o
  navegador bloqueia o `localStorage`, aparece um aviso no topo e o site continua funcionando
  sem salvar.
- **Importação de backup validada**: JSON inválido e arquivo de outra origem devolvem mensagem
  de erro em vez de corromper o progresso.
- **SEO básico**: `lang="pt-BR"`, título e descrição por rota, HTML semântico, `robots.txt`,
  favicon próprio.
- **Sem componente duplicado**: os padrões de seção de página viraram classes globais em
  `base.css` em vez de serem reescritos em cada módulo.

---

## 5. Testes

**95 testes automatizados**, todos passando.

| Suíte | Quantidade | O que cobre |
|---|---|---|
| `src/engine/engine.test.ts` | 29 | Domínio (assimetria, limites, faixas), revisão espaçada (caixas, truncamento pela data da prova), prioridade (peso, pré-requisito, janela, frescor), análise de erros (incluindo não inventar padrão em ruído), plano diário (orçamento, determinismo, motivo em todo item, transbordo, revisão final) |
| `src/test/fluxos.test.tsx` | 18 | Navegação, seleção de matéria, abertura de conteúdo com os 9 blocos, aviso de pré-requisito, resolução de questão, correção diagnóstica completa, questão-irmã, registro de progresso no armazenamento, agendamento de revisão, fila de revisão, selo de procedência |
| `e2e/fluxos.spec.ts` | 48 (24 × 2 viewports) | Ausência de rolagem horizontal em 12 rotas, medida de linha, barra de navegação correta por viewport, alvos de toque, link de pular conteúdo por teclado, fluxo completo do plano até a correção, persistência após recarregar, contraste medido em 5 rotas |

Dois defeitos estavam nos próprios testes e foram corrigidos: `offsetParent` é sempre nulo para
elementos `position: fixed` (a tab bar do celular caía nisso) e o parser de cor não entendia a
sintaxe `color(srgb …)`, cujos canais vão de 0 a 1 e não de 0 a 255.

```bash
npm run test:all   # validação de conteúdo + tipos + 47 testes + 48 de navegador
```

---

## 6. O que foi simplificado ou recusado

Seguindo a regra de preferir a solução mais simples que preserve a utilidade:

- **Nenhuma biblioteca de fórmulas.** KaTeX custaria ~270 kB para renderizar frações e
  potências. Um componente de 20 linhas resolve.
- **Nenhuma biblioteca de ícones.** Cinco ícones de navegação desenhados à mão, em SVG inline.
- **Nenhum framework de utilitários CSS.** Um sistema de tokens de ~150 linhas.
- **Nenhuma busca global.** Com 29 assuntos em 4 áreas, qualquer conteúdo está a dois cliques.
  Uma busca adicionaria superfície sem reduzir distância.
- **Nenhum streak, medalha ou gráfico de atividade.** Não aumentam aprendizado por minuto, e
  streak pune quem perdeu um dia — que é justamente quem precisa voltar.

---

## 7. O que ficou de fora, e por quê

| Item | Situação |
|---|---|
| **Questões oficiais do ENEM** | **Resolvido.** Os PDFs foram fornecidos depois e o banco passou a ter 11 questões oficiais de 2024 e 2025, com referência de prova. Ver [`ETAPA-4-FONTES-OFICIAIS.md`](ETAPA-4-FONTES-OFICIAIS.md). Pendência remanescente: conferir as respostas contra o gabarito oficial |
| **21 assuntos de prioridade "importante"** | Mapeados na especificação e listados na navegação com o estado "ainda não escrito". Escolha deliberada: melhor declarar a ausência do que criar páginas de três linhas |
| **Simulado completo cronometrado** | Com 58 questões no banco, um simulado de 180 seria uma simulação falsa. Faz sentido depois que o banco crescer |
| **Divisão do conteúdo por área em chunks separados** | Hoje abrir qualquer assunto baixa os 84 kB gzip de todo o conteúdo, uma vez. Dividir por área acrescentaria complexidade para economizar um download que o cache resolve |

---

## 8. Estado final

- 29 assuntos essenciais nas quatro áreas, no modelo de 9 blocos
- 58 questões com diagnóstico individual por alternativa e tipo de erro classificado
- 11 seções de redação cobrindo critérios oficiais, as cinco competências e prática
- 8 diagramas SVG próprios, com descrição acessível
- 13 rotas, 95 testes, bundle inicial de 77 kB gzip
- Zero questões apresentadas como oficiais; procedência visível em todas
