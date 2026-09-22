# Imagens

**Jogue o arquivo aqui com qualquer nome, qualquer formato e qualquer tamanho.
Depois rode `npm run imagens`.** É só isso.

Nada de redimensionar antes, nada de converter, nada de mexer em código.

## O que o comando faz

`scripts/otimizar-imagens.ts` lê cada imagem desta pasta, detecta o formato
real **pelo conteúdo** (não pela extensão) e gera três larguras em WebP:

```
dia-de-prova.seja-o-que-for  →  dia-de-prova-640w.webp    30 KB
                                dia-de-prova-1280w.webp   69 KB
                                dia-de-prova-1920w.webp  108 KB
```

O original é apagado depois, porque nada no site o usa. O navegador escolhe a
largura que couber na tela: um celular baixa 30 KB, não 1,9 MB.

## Por que isso existe

A primeira versão pedia para redimensionar à mão antes de subir. Deu no que
tinha de dar: os dois arquivos chegaram como **PNG de 2688×1536 com a extensão
trocada para `.webp`**, somando 3,7 MB — mais que o triplo do bundle inteiro do
site. E não apareceram na tela, porque o registro procurava `.png`.

Agora o registro guarda só o nome-base, sem extensão e sem tamanho. Nome-base
não tem como divergir do que está no disco.

## Onde cada uma entra

| Nome-base | Aparece em |
|---|---|
| `dia-de-prova` | Topo de **Áreas do ENEM** |
| `redacao` | Topo do módulo de **Redação** |

Para acrescentar uma nova, adicione a entrada em `src/content/imagens.ts` com
o nome-base, o texto alternativo e a procedência.

## O recorte é do site

Você não escolhe proporção nem posição em pixel. A faixa muda sozinha conforme
a tela: **3:2 no celular**, **16:9 no tablet**, **2:1 no desktop**. A imagem
preenche por `object-fit: cover`.

A única decisão editorial disponível é `foco: 'topo' | 'centro' | 'base'`, para
quando o assunto da imagem não está no meio — a ilustração da sala de prova usa
`topo`, senão o recorte come o relógio da parede.

## Procedência é obrigatória

`src/content/imagens.ts` distingue dois tipos, e `Figura` **recusa a renderizar**
o que estiver incompleto:

- **Fotografia** — exige `autor`, `fonte` e `licenca`.
- **Ilustração gerada por IA** (`gerada: true`) — exige a ferramenta em `fonte`,
  e o crédito impresso diz "Ilustração gerada por IA".

A distinção não é burocracia: uma ilustração ocupando em silêncio o lugar de uma
foto de dia de prova seria um documento falso.

## Se quiser foto de verdade no lugar

Apague `gerada: true` e preencha `autor`, `fonte` e `licenca`.

- **Agência Brasil (EBC)** — fotojornalismo público, cobertura de todo dia de
  aplicação. Confira a licença na página da própria foto.
- **Wikimedia Commons** — busque "Exame Nacional do Ensino Médio".

Evite banco de imagem genérico. Estudante sorrindo com notebook é exatamente o
tipo de foto que faz o site parecer qualquer outro.
