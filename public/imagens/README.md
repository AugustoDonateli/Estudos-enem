# Imagens

Nenhuma imagem está versionada aqui. O site funciona sem elas: `Figura` não
renderiza o que não encontra, e a página segue sem buraco.

## Por que estão faltando

O ambiente onde este código foi escrito bloqueia, por política de rede, tanto
os acervos de foto (`agenciabrasil.ebc.com.br`, `commons.wikimedia.org`,
`gov.br`) quanto o CDN que serve as ilustrações geradas. Dá para **gerar**,
não dá para **baixar**. Colocar os arquivos aqui é um passo manual.

## Os dois tipos de imagem, e por que não se confundem

`src/content/imagens.ts` distingue:

- **Fotografia** — registro do mundo. Exige `autor`, `fonte` e `licenca`. Sem
  os três, `Figura` recusa a renderizar.
- **Ilustração gerada por IA** (`gerada: true`) — não é registro de nada. Exige
  a ferramenta em `fonte`, e o crédito impresso diz "Ilustração gerada por IA".

A distinção não é burocracia. Uma ilustração gerada ocupando silenciosamente
o lugar de uma foto de dia de prova seria um documento falso — exatamente o
que este projeto se proíbe de fazer com questão.

## O que já foi gerado

Duas ilustrações em risografia chapada, na paleta exata do site. Duas versões
de cada; escolha uma, salve com o nome da tabela e pronto.

### `dia-de-prova.png` — topo de **Áreas do ENEM**

Sala de aplicação: fileiras de carteiras, cartões-resposta, relógio de parede.

- https://d8j0ntlcm91z4.cloudfront.net/user_3DpgD54zsdf1WmQeA8cseiA2gLH/hf_20260921_201112_6b00b943-2e3f-49b6-a75c-33ae335605cd.png
- https://d8j0ntlcm91z4.cloudfront.net/user_3DpgD54zsdf1WmQeA8cseiA2gLH/hf_20260921_201113_71a8ad70-0cc6-475f-969c-6bef62b8bad3.png

### `redacao.png` — topo do módulo de **Redação**

Folha pautada, caneta apoiada, as cinco competências como barras crescentes.

- https://d8j0ntlcm91z4.cloudfront.net/user_3DpgD54zsdf1WmQeA8cseiA2gLH/hf_20260921_201121_c5fd1085-4e21-4360-8aae-0247b9ec02a1.png
- https://d8j0ntlcm91z4.cloudfront.net/user_3DpgD54zsdf1WmQeA8cseiA2gLH/hf_20260921_201121_0e17485a-d1f5-481a-9bc9-7718910f647c.png

Os arquivos têm 2688×1536. Vale reduzir para 2000 px de largura e salvar em
WebP ou JPEG de qualidade ~80 antes de commitar — como PNG de 2k eles pesam
mais do que o site inteiro.

## Se quiser foto de verdade no lugar

É uma troca melhor, e o registro já está preparado: apague `gerada: true` e
preencha `autor`, `fonte` e `licenca`.

**Agência Brasil (EBC)** — fotojornalismo público brasileiro, com cobertura de
todo dia de aplicação. Confira a licença na página da própria foto e copie o
crédito como a agência pede.

**Wikimedia Commons** — busque "Exame Nacional do Ensino Médio". Autor e
licença estão na página de descrição de cada arquivo.

**Arquivo Nacional, Biblioteca Nacional Digital, IBGE** — material histórico e
cartográfico em domínio público, útil como texto-base de questões de Humanas e
Geografia, e não como decoração.

Evite banco de imagem genérico. Estudante sorrindo com notebook é exatamente o
tipo de foto que faz o site parecer qualquer outro.
