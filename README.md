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
npm run test       # 47 testes de motor e de fluxo (Vitest + Testing Library)
npm run test:e2e   # 48 testes de navegador (Playwright, desktop e celular)
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
  design/       tokens, primitivos visuais e diagramas SVG próprios
  content/      catalogo.ts (metadados, leve) · conteudo.ts (texto, pesado)
                topicos/ · questoes/ · redacao/
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

## Procedência do conteúdo

Tudo é classificado em três níveis, e a classificação fica visível no site:

- **Oficial** — documentado pelo INEP/MEC (estrutura da prova, matriz, critérios da redação, TRI).
- **Análise** — julgamento pedagógico deste site, derivado do que é oficial.
- **Autoral** — explicações, exemplos, diagramas e questões escritos para este site.

**Nenhuma questão do banco é apresentada como questão oficial do ENEM.** As 58 questões são
autorais, com selo de procedência visível em cada uma. Para incluir questões oficiais com
referência de prova, veja [`docs/ADICIONAR-QUESTOES.md`](docs/ADICIONAR-QUESTOES.md).

## Documentos

- [Etapa 1 — Pesquisa, estratégia e especificação](docs/ETAPA-1-ESPECIFICACAO.md)
- [Etapa 3 — Auditoria, testes e refinamento](docs/ETAPA-3-AUDITORIA.md)
- [Como adicionar questões oficiais](docs/ADICIONAR-QUESTOES.md)
