# O que depende de você

Seis entregas, em ordem de impacto. Marque conforme for fazendo.

As duas primeiras não têm relação com as mecânicas novas — são dívidas abertas do que já existe,
e uma delas é séria.

---

## [ ] 1. Publicar o site  ⟶ bloqueante

**O site nunca foi publicado.** Ele existe só no repositório. Faltam poucas semanas para a prova e
o aluno não consegue abrir nada disso no celular dele.

A configuração já está pronta há tempos:

- `vite.config.ts` lê `BASE_PATH` de variável de ambiente
- `public/404.html` faz o fallback de rota para hospedagem estática
- `robots.txt` e favicon no lugar

Falta a conta e o clique, que são seus — eu não tenho credencial de hospedagem.

### Cloudflare Pages ou Netlify (recomendado)

Grátis, e dá para apontar domínio próprio depois.

1. Criar conta e conectar o repositório `AugustoDonateli/Estudos-enem`.
2. Configurar o build:

   | Campo | Valor |
   |---|---|
   | Comando de build | `npm run build` |
   | Diretório de saída | `dist` |
   | Variável de ambiente | `BASE_PATH` = `/` |
   | Branch | `claude/enem-study-platform-w0dm16` |

3. Publicar e abrir no celular.

### GitHub Pages (alternativa)

Mesma coisa, mas `BASE_PATH` precisa ser `/Estudos-enem/`, porque o site fica num subcaminho.

> **Posso reduzir isso a um clique.** Se você preferir GitHub Pages, eu escrevo o workflow do
> GitHub Actions que faz build e deploy a cada push — aí sua parte vira só ativar Pages nas
> configurações do repositório. É só pedir.

**Pronto quando:** você abre a URL no celular e o plano do dia carrega.

---

## [ ] 2. Gabaritos oficiais do INEP  ⟶ risco de conteúdo errado

As **11 questões oficiais** do banco tiveram a resposta correta determinada **por resolução**, não
conferida contra o gabarito do INEP — porque o gabarito não estava disponível na transcrição.

A ressalva está declarada em três lugares (cabeçalho de `src/content/questoes/oficiais.ts`, página
`/sobre` e `docs/ETAPA-4-FONTES-OFICIAIS.md`). Mas declarar não conserta: **se alguma estiver
errada, o site ensina uma resposta errada com o selo mais forte que ele tem.**

Isso contraria a regra número um do projeto. É a coisa mais importante desta lista depois de
publicar.

1. Baixar os gabaritos em
   [Provas e Gabaritos do INEP](https://www.gov.br/inep/pt-br/areas-de-atuacao/avaliacao-e-exames-educacionais/enem/provas-e-gabaritos):
   edições **2024 e 2025**, cadernos **1 (azul, 1º dia)** e **7 (azul, 2º dia)**.
2. Me mandar o PDF, ou só a lista de gabaritos dessas duas provas.

Eu confiro item a item e corrijo o que divergir. São 11 questões — dá dez minutos.

**Pronto quando:** as 11 respostas estiverem conferidas e a ressalva sair do README e do `/sobre`.

---

## [ ] 3. Dados do SISU  ⟶ destrava a tela de nota e universidades

MEC e `gov.br` estão bloqueados pela política de rede do ambiente onde este código é escrito
(testado por `curl` e por busca web, os dois negados). O arquivo precisa vir de você.

### O que buscar

Notas de corte da **última edição** do SISU, **com os pesos por curso**.

Os pesos não são detalhe. Engenharia costuma pesar Matemática ×3, medicina pesa Natureza, letras
pesa Linguagens. Comparar sua nota com a nota de corte **sem** aplicar o peso do curso dá um número
errado — e aí é melhor não ter a tela.

### Formato

CSV ou JSON, uma linha por curso e modalidade:

| Coluna | Exemplo |
|---|---|
| `universidade` | Universidade Federal de Minas Gerais |
| `sigla` | UFMG |
| `campus` | Belo Horizonte |
| `curso` | Engenharia de Controle e Automação |
| `grau` | Bacharelado |
| `turno` | Integral |
| `modalidade` | Ampla concorrência |
| `notaCorte` | 742.35 |
| `peso_lc` | 1 |
| `peso_ch` | 1 |
| `peso_cn` | 2 |
| `peso_mt` | 3 |
| `peso_redacao` | 2 |
| `edicao` | SISU 2026/1 |

**Não precisa ser o Brasil inteiro.** Se ficar grande demais, filtre pelos cursos e universidades
que te interessam — a tela funciona igual com 40 linhas ou com 4 000, e 40 linhas relevantes valem
mais que uma base inteira.

**Pronto quando:** o arquivo estiver em `src/content/sisu/cursos.ts` e `npm run validate` passar.

---

## [x] 4. As duas ilustrações — **feito**

Você subiu, e elas estão no ar. Duas coisas foram corrigidas no caminho:

- Os arquivos eram **PNG com a extensão trocada para `.webp`** — a conversão não
  tinha acontecido, só a renomeação. E o registro procurava `.png`, então a
  imagem nunca aparecia.
- Vinham no tamanho original: 2688×1536, 3,7 MB somados, contra 1,2 MB do bundle
  inteiro do site.

Agora existe `npm run imagens`: joga o arquivo em `public/imagens/` com qualquer
nome, formato e tamanho, roda o comando, e ele gera as três larguras em WebP.
Ficou em **416 KB no total**, e o celular baixa 30 KB.

## [ ] 5. Fotos reais  ⟶ opcional, mas é uma troca melhor

Uma fotografia de dia de prova vale mais que qualquer ilustração gerada. O registro em
`src/content/imagens.ts` já está preparado para as duas coisas: apague `gerada: true` e preencha
`autor`, `fonte` e `licenca`.

- **Agência Brasil (EBC)** — fotojornalismo público brasileiro, com cobertura de todo dia de
  aplicação. Confira a licença na página da própria foto e copie o crédito como a agência pede.
- **Wikimedia Commons** — busque "Exame Nacional do Ensino Médio". Autor e licença ficam na página
  de descrição de cada arquivo.
- **Arquivo Nacional, Biblioteca Nacional Digital, IBGE** — material histórico e cartográfico em
  domínio público, útil como texto-base de questões de Humanas e Geografia, e não como decoração.

Evite banco de imagem genérico. Estudante sorrindo com notebook é exatamente o tipo de foto que faz
o site parecer qualquer outro.

---

## [ ] 6. Mais provas oficiais  ⟶ opcional, alto retorno

Hoje são 11 questões oficiais, de 2024 e 2025. Cada prova nova vira mais itens com referência
completa de ano, dia, caderno e número.

[`docs/ADICIONAR-QUESTOES.md`](ADICIONAR-QUESTOES.md) tem o passo a passo e as três armadilhas já
conhecidas — inclusive que os cadernos de 2025 grafam `QUESTãO` com ã minúsculo, o que faz qualquer
filtro ingênuo encontrar zero itens.

Só me mandar os PDFs — **caderno e gabarito** — que eu extraio.

---

## Resumo

| # | Entrega | Por que importa | Esforço seu |
|---|---|---|---|
| 1 | **Publicar o site** | Sem isso, nada disso chega no aluno | ~20 min |
| 2 | **Gabaritos do INEP** | Pode haver resposta errada com selo de oficial | ~10 min |
| 3 | **Dados do SISU** | Destrava a tela de nota e universidades | variável |
| ~~4~~ | ~~As duas ilustrações~~ | **Feito** | — |
| 5 | Fotos reais | Troca melhor que a ilustração | opcional |
| 6 | Mais provas | Mais questões oficiais | opcional |

**Nada disso bloqueia o desenvolvimento.** As mecânicas seguem sendo construídas e essas entregas
entram quando chegarem — só a tela do SISU espera o item 3.
