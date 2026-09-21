import { useState } from 'react';
import { IMAGENS, creditada, creditoDe, type ChaveImagem } from '@/content/imagens';
import s from './Figura.module.css';

/**
 * Imagem com procedência.
 *
 * Três razões para não ser um `<img>` solto:
 *
 * 1. O crédito é obrigatório e fica visível. A regra editorial do projeto é
 *    a mesma para texto e para imagem: dá para saber de onde veio.
 * 2. Nada quebra quando o arquivo não existe. O componente não renderiza, e
 *    a página segue sem buraco — é o que permite versionar o código sem
 *    versionar fotos de acervo.
 * 3. O crédito incompleto também não renderiza, o que torna impossível
 *    publicar uma imagem sem dizer de onde ela vem. Fotografia exige autor,
 *    fonte e licença; ilustração gerada exige a ferramenta, e o rótulo diz
 *    que é gerada — porque um desenho apresentado como registro seria um
 *    documento falso.
 */
export function Figura({
  nome,
  proporcao = '16 / 9',
  prioridade = false,
}: {
  nome: ChaveImagem;
  /** `aspect-ratio` da faixa. A imagem preenche por `object-fit: cover`. */
  proporcao?: string;
  /** Verdadeiro só para imagem acima da dobra: desliga o carregamento tardio. */
  prioridade?: boolean;
}) {
  const imagem = IMAGENS[nome];
  const [falhou, setFalhou] = useState(false);

  if (falhou || !creditada(imagem)) return null;

  return (
    <figure className={s.figura} style={{ aspectRatio: proporcao }}>
      <img
        className={s.img}
        src={`${import.meta.env.BASE_URL}imagens/${imagem.arquivo}`}
        alt={imagem.alt}
        loading={prioridade ? 'eager' : 'lazy'}
        decoding="async"
        onError={() => setFalhou(true)}
      />
      <figcaption className={s.credito}>{creditoDe(imagem)}</figcaption>
    </figure>
  );
}
