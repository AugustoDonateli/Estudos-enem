# Imagens

Nenhuma imagem está versionada aqui. O site funciona sem elas: o componente
`Figura` não renderiza o que não encontra, e a página segue sem buraco.

## Por que estão faltando

O ambiente onde este código foi escrito bloqueia, por política de rede, todos
os acervos de imagem — `agenciabrasil.ebc.com.br`, `commons.wikimedia.org`,
`gov.br`. Não dá para buscar as fotos de dentro dele. Baixar e colocar aqui é
um passo manual.

## Como adicionar

1. Baixe a imagem de um acervo que permita uso com atribuição.
2. Salve em `public/imagens/` com exatamente o nome que o registro espera.
3. Preencha `autor`, `fonte` e `licenca` em `src/content/imagens.ts`.

O passo 3 não é opcional: `Figura` recusa a renderizar imagem sem os três
campos preenchidos. É a mesma regra que vale para questão — nada entra no
site sem procedência declarada.

## O que procurar

| Arquivo | Onde aparece | O que deve mostrar |
|---|---|---|
| `dia-de-prova.jpg` | Topo de **Áreas do ENEM** | Estudantes na entrada de um local de aplicação, antes dos portões. Horizontal, gente real, nada de banco de imagem genérico. |
| `redacao.jpg` | Topo do módulo de **Redação** | Participante escrevendo durante a aplicação. Horizontal. |

Proporção sugerida: 16:9 ou mais larga. Largura útil máxima: 2400 px — acima
disso só pesa. Salve em JPEG com qualidade ~80.

## Onde procurar

**Agência Brasil (EBC)** — `agenciabrasil.ebc.com.br`. Fotojornalismo público
brasileiro, com cobertura de todo dia de aplicação do ENEM. Confira a licença
vigente na própria página da foto e copie o crédito exatamente como a agência
pede (costuma ser "Nome do fotógrafo/Agência Brasil").

**Wikimedia Commons** — `commons.wikimedia.org`. Busque por "Exame Nacional do
Ensino Médio". Cada arquivo traz autor e licença na página de descrição.

**Arquivo Nacional, Biblioteca Nacional Digital, IBGE** — para material
histórico e cartográfico em domínio público, útil como texto-base de questões
de Humanas e Geografia, e não como decoração.

Evite banco de imagem genérico. Uma foto de estudante sorrindo com notebook é
exatamente o tipo de imagem que faz o site parecer qualquer outro.
