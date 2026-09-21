import { useEffect } from 'react';
import { BotaoLink, Vazio } from '@/design/Primitivos';
import { definirTitulo } from '@/lib/titulo';

export function NaoEncontrado() {
  useEffect(() => definirTitulo('Página não encontrada'), []);
  return (
    <div className="page">
      <div className="container">
        <div className="secao">
          {/* Toda página precisa de um h1 — inclusive a de erro. */}
          <h1 className="visually-hidden">Página não encontrada</h1>
          <Vazio
            titulo="Esta página não existe"
            acao={<BotaoLink to="/">Voltar para o plano de hoje</BotaoLink>}
          >
            <p>
              O endereço pode ter mudado ou o conteúdo ainda não foi escrito.
            </p>
          </Vazio>
        </div>
      </div>
    </div>
  );
}
