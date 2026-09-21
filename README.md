# Estudos ENEM

Plataforma pessoal de preparação intensiva para o ENEM 2026, construída para uma janela curta
de estudo e para um único aluno. A prova é em **8 e 15 de novembro de 2026**.

A lógica do produto é **diagnosticar → priorizar → estudar → praticar → corrigir → revisar**.

## O que ele faz que uma apostila não faz

1. **Decide o que estudar hoje.** Um plano diário que cabe no tempo que você tem (30, 60 ou 90
   minutos), em que **todo item diz por que está ali**.
2. **Lembra dos seus erros melhor que você.** Cada erro vira um conceito marcado, uma revisão
   agendada e uma questão-irmã do mesmo conceito em outro contexto.
3. **Encaixa o calendário.** A repetição espaçada é **truncada pela data da prova**: nada é
   agendado para depois de 08/11.

## Rodando

```bash
npm install
npm run dev        # desenvolvimento
npm run build      # valida o conteúdo, checa os tipos e gera dist/
npm run preview    # serve o build
```

### Verificações

```bash
npm run validate   # regras editoriais do conteúdo
npm run typecheck  # tipos
npm run test       # 71 testes de motor, fluxo e codificação (Vitest + Testing Library)
npm run test:e2e   # 62 testes de navegador (Playwright, desktop e celular)
npm run test:all   # tudo acima
```

Os testes de navegador detectam sozinhos um Chromium já instalado no ambiente (por exemplo em
`/opt/pw-browsers`); `CHROMIUM_PATH` força um binário específico.

### Publicando

O build é estático e não depende de servidor. Para publicar em um subcaminho (GitHub Pages):

```bash
BASE_PATH=/Estudos-enem/ npm run build
```

`public/404.html` cuida do fallback de rotas em hospedagens estáticas.

## Como o código está organizado

```
src/
  app/          rotas, layout e navegação
  design/       tokens.css · base.css · Marca · Pagina · Primitivos · Diagramas
  content/      catalogo.ts (metadados, leve) · conteudo.ts (texto, pesado)
                matriz.ts (texto oficial do INEP) · topicos/ · questoes/ · redacao/
  engine/       funções puras: domínio, prioridade, revisão, plano diário, erros
  storage/      schema versionado e persistência local tolerante a falha
  features/     uma pasta por tela
scripts/        validação de conteúdo, executada antes de todo build
e2e/            testes de navegador
docs/           especificação e auditoria
```

Duas decisões que explicam o resto:

- **`engine/` é função pura**, sem React e sem storage. É a parte mais importante e a mais
  testada.
- **Metadados e conteúdo são separados.** O dashboard carrega só os metadados dos assuntos;
  o texto de um assunto só é baixado quando ele é aberto. O bundle inicial fica em ~77 kB
  gzip, e o validador impede que catálogo e conteúdo divirjam.

## Identidade visual

O sistema de design é derivado do [GovBR Design System](https://www.gov.br/ds/) 3.7 — rampa de
azul e cinza, cores de feedback, tipografia Rawline, escala de espaçamento de 8px, breakpoints de
grid e o anel de foco dourado vêm de lá, lidos do pacote `@govbr-ds/core` no npm.

A identidade construída sobre essa base é própria: a assinatura *ENEM Estudos*, o símbolo de
cartão-resposta, os grafismos geométricos e os acentos por área não existem no gov.br. **O site
não é uma publicação do governo, não usa o logotipo do ENEM ou do INEP e não se apresenta como
material oficial** — é um projeto pessoal de estudo que cita fontes oficiais.

O raciocínio de cada decisão, os achados da auditoria visual e as limitações estão em
[`docs/ETAPA-5-REDESIGN.md`](docs/ETAPA-5-REDESIGN.md).

## Procedência do conteúdo

Tudo é classificado em três níveis, e a classificação fica visível no site:

- **Oficial** — documentado pelo INEP/MEC (estrutura da prova, matriz, critérios da redação, TRI).
- **Análise** — julgamento pedagógico deste site, derivado do que é oficial.
- **Autoral** — explicações, exemplos, diagramas e questões escritos para este site.

O banco tem **69 questões**: **11 oficiais**, aplicadas nas provas de 2024 e 2025 e transcritas
com referência de ano, dia, caderno e número, e **58 autorais**, escritas para este site no
formato do exame. O selo de procedência aparece no cabeçalho de toda questão, sem exceção.

O site também reproduz o **texto oficial da Matriz de Referência** — os 5 eixos cognitivos e as
120 habilidades — e mostra, na página de cada assunto, quais habilidades aquele conteúdo ajuda a
atender. A habilidade é oficial; a associação é análise deste site, e o validador recusa o build
se algum código citado não existir na matriz da área.

**Ressalva:** os gabaritos oficiais não estavam disponíveis na transcrição. As respostas das
questões oficiais foram determinadas por resolução — ver
[`docs/ETAPA-4-FONTES-OFICIAIS.md`](docs/ETAPA-4-FONTES-OFICIAIS.md).

## Documentos

- [Etapa 1 — Pesquisa, estratégia e especificação](docs/ETAPA-1-ESPECIFICACAO.md)
- [Etapa 3 — Auditoria, testes e refinamento](docs/ETAPA-3-AUDITORIA.md)
- [Etapa 4 — Incorporação das fontes oficiais](docs/ETAPA-4-FONTES-OFICIAIS.md)
- [Etapa 5 — Redesenho visual institucional](docs/ETAPA-5-REDESIGN.md)
- [Etapa 6 — Personalidade visual](docs/ETAPA-6-PERSONALIDADE.md)
- [Como adicionar questões oficiais](docs/ADICIONAR-QUESTOES.md)
- [**O que depende de você**](docs/DEPENDE-DE-VOCE.md) — pendências abertas, em ordem de impacto
