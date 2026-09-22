import { useState } from 'react';
import {
  IMAGENS,
  LARGURAS_IMAGEM,
  creditada,
  creditoDe,
  type ChaveImagem,
  type Imagem,
} from '@/content/imagens';
import s from './Figura.module.css';

/**
 * Imagem com procedência.
 *
 * Quatro razões para não ser um `<img>` solto:
 *
 * 1. O crédito é obrigatório e fica visível. A regra editorial do projeto é a
 *    mesma para texto e para imagem: dá para saber de onde veio. Crédito
 *    incompleto não renderiza, o que torna impossível publicar uma imagem sem
 *    dizer de onde ela vem.
 * 2. Nada quebra quando o arquivo não existe. O componente não renderiza, e a
 *    página segue sem buraco.
 * 3. **O recorte é do site, não do arquivo.** A proporção muda por faixa de
 *    tela — mais alta no celular, panorâmica no desktop — e vem do CSS. Quem
 *    sobe a imagem não precisa saber de pixel nenhum.
 * 4. **O peso é resolvido por `srcset`.** As três larguras vêm de
 *    `npm run imagens`, e o navegador baixa só a que couber: 30 KB no celular
 *    em vez dos 1,9 MB que o arquivo original tinha.
 */
export function Figura({ nome }: { nome: ChaveImagem }) {
  const imagem: Imagem = IMAGENS[nome];
  const [falhou, setFalhou] = useState(false);

  if (falhou || !creditada(imagem)) return null;

  const url = (largura: number) =>
    `${import.meta.env.BASE_URL}imagens/${imagem.base}-${largura}w.webp`;

  const posicao =
    imagem.foco === 'topo' ? 'center top' : imagem.foco === 'base' ? 'center bottom' : undefined;

  return (
    <figure className={s.figura}>
      <img
        className={s.img}
        src={url(1280)}
        srcSet={LARGURAS_IMAGEM.map((l) => `${url(l)} ${l}w`).join(', ')}
        // A faixa sangra de borda a borda, então a largura de exibição é a da
        // janela — é isso que o navegador precisa saber para escolher certo.
        sizes="100vw"
        alt={imagem.alt}
        loading="lazy"
        decoding="async"
        {...(posicao ? { style: { objectPosition: posicao } } : {})}
        onError={() => setFalhou(true)}
      />
      <figcaption className={s.credito}>{creditoDe(imagem)}</figcaption>
    </figure>
  );
}
