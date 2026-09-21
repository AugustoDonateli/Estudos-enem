import { useEffect } from 'react';
import { BotaoLink, Vazio } from '@/design/Primitivos';
import { definirTitulo } from '@/lib/titulo';

export function NaoEncontrado() {
  useEffect(() => definirTitulo('Página não encontrada'), []);
  return (
    <div className="page">
      <Vazio
        titulo="Esta página não existe"
        acao={<BotaoLink to="/">Voltar para o plano de hoje</BotaoLink>}
      >
        <p style={{ margin: '0 auto' }}>
          O endereço pode ter mudado ou o conteúdo ainda não foi escrito.
        </p>
      </Vazio>
    </div>
  );
}
