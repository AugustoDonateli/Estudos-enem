# Como adicionar questões oficiais do ENEM

O banco já traz **11 questões oficiais** das provas de 2024 e 2025, em
`src/content/questoes/oficiais.ts`. Este documento explica como acrescentar mais.

## Extraindo o texto de um caderno de prova

Os PDFs do INEP são cadernos escaneados com texto embutido. Para extrair:

```bash
npm i pdfjs-dist            # em uma pasta temporária, fora do repositório
node extrair.mjs prova.pdf  # percorre as páginas e imprime o texto
```

Três armadilhas que já custaram tempo:

1. Os cadernos de 2025 grafam o cabeçalho como **`QUESTãO`** (artefato de codificação de
   fonte). Um filtro que procure `QUESTÃO` encontra zero itens.
2. Quando o comando da questão vem **depois** da citação da fonte, a extração costuma fundi-lo
   à alternativa A. É preciso separar na transcrição.
3. Itens que dependem de figura, gráfico ou imagem **não devem entrar**: o texto sozinho não
   permite resolvê-los, e uma questão irresolvível no site é pior que questão nenhuma.

## Sobre o gabarito

Confira a resposta contra o **gabarito oficial** do INEP, publicado junto com as provas. As
respostas dos 11 itens atuais foram determinadas por resolução, porque os gabaritos não estavam
disponíveis na transcrição — se você tiver o gabarito em mãos, conferi-las é a primeira coisa a
fazer.

## Passo a passo

**1. Baixe a prova oficial.**
Vá em [Provas e Gabaritos do INEP](https://www.gov.br/inep/pt-br/areas-de-atuacao/avaliacao-e-exames-educacionais/enem/provas-e-gabaritos)
e baixe o caderno de questões e o gabarito da edição que você quiser.

**2. Escolha o arquivo de destino** conforme a área:

```
src/content/questoes/matematica.ts
src/content/questoes/linguagens.ts
src/content/questoes/humanas.ts
src/content/questoes/natureza.ts
```

**3. Acrescente a questão ao array**, seguindo este molde:

```ts
{
  id: 'mat-porc-of-2023-136',        // prefixo da área + assunto + 'of' + ano + número
  topicId: 'mat-porcentagem',        // precisa ser um assunto existente
  conceito: 'Acréscimos e descontos sucessivos',
  procedencia: 'oficial',
  referencia: { ano: 2023, prova: 'ENEM 2023 — 2º dia', numero: 136, caderno: 'Azul' },
  dificuldade: 'media',
  eixo: 'problemas',
  minutos: 3,
  enunciado: [
    { tipo: 'p', texto: 'Transcreva aqui o enunciado exatamente como está na prova.' },
  ],
  alternativas: [
    { letra: 'A', texto: '…', correta: false, diagnostico: 'Por que essa alternativa atrai.', tipoErro: 'conceito' },
    { letra: 'B', texto: '…', correta: true,  diagnostico: 'Por que essa funciona.' },
    { letra: 'C', texto: '…', correta: false, diagnostico: '…', tipoErro: 'calculo' },
    { letra: 'D', texto: '…', correta: false, diagnostico: '…', tipoErro: 'leitura' },
    { letra: 'E', texto: '…', correta: false, diagnostico: '…', tipoErro: 'distrator' },
  ],
  explicacao: [
    { tipo: 'p', texto: 'Resolução completa.' },
  ],
  irmas: ['mat-porc-q1'],            // opcional: questões do mesmo conceito
}
```

**4. Ligue a questão ao assunto.** Em `src/content/topicos/<area>.ts`, acrescente o `id` da
questão ao array `conteudo.questoes` do assunto correspondente. Sem isso ela só aparece na
prática livre, nunca na página do conteúdo.

**5. Rode a validação.**

```bash
npm run validate
```

O script recusa o build se faltar a referência da prova, se alguma alternativa ficar sem
diagnóstico, se houver mais de uma correta ou se o `topicId` não existir.

## Campos obrigatórios por procedência

| Procedência | Exige | Selo exibido |
|---|---|---|
| `oficial` | `referencia` com ano e prova | **Oficial ENEM** |
| `adaptada` | `fonte` com a origem citada | **Adaptada** |
| `autoral` | — | **Autoral** |

O tipo `Questao` é uma união discriminada: uma questão `oficial` sem `referencia` **não
compila**. Isso é deliberado — a regra editorial é aplicada pelo compilador, não pela
disciplina de quem escreve.

## Sobre direitos de uso

As provas do ENEM são publicadas pelo INEP para acesso público. Este é um projeto pessoal de
estudo, sem distribuição comercial. Mantenha a referência da edição em toda questão
transcrita: além de ser a atribuição correta, é o que permite conferir o enunciado na fonte.

## Sobre o campo `diagnostico`

É o campo mais importante e o mais trabalhoso. Não escreva "alternativa incorreta" — escreva o
raciocínio específico que leva alguém até ali:

> ✗ "Errada."
> ✓ "Você aplicou os 20% de desconto sobre os R$ 40,00 do aumento, e não sobre o preço."

O feedback diagnóstico é o que diferencia este banco de uma lista de gabaritos. Uma questão
oficial com diagnósticos genéricos vale menos, para estudar, do que uma questão autoral com
diagnósticos precisos.
