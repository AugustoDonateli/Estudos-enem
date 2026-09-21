import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

/*
 * Tipografia institucional: Rawline como fonte principal e Raleway como
 * reserva — o par definido pelo GovBR Design System. Ambas sob SIL OFL e
 * auto-hospedadas, então não há requisição a serviço externo.
 *
 * Só os pesos realmente usados, no subconjunto latino: 400 para corpo, 500 e
 * 600 para interface e títulos, 700 e 800 para a assinatura e os números
 * grandes. Cada peso custa cerca de 28 KB.
 *
 * Raleway fica declarada no stack de fontes mas não é baixada: como Rawline
 * cobre tudo, a reserva só entraria em cena se a principal falhasse, e enviar
 * uma fonte variável inteira para esse caso custaria mais do que resolve.
 *
 * A terceira família é a Fraunces, em fraunces.css: a voz editorial do site,
 * usada só em título de página e número grande. As superfícies que imitam o
 * caderno de prova não usam nenhuma das duas — usam a pilha grotesca do
 * sistema, porque é literalmente em Arial que a prova é composta.
 */
import 'rawline-webfont/latin-400.css';
import 'rawline-webfont/latin-500.css';
import 'rawline-webfont/latin-600.css';
import 'rawline-webfont/latin-700.css';
import 'rawline-webfont/latin-800.css';

import './design/fraunces.css';
import './design/tokens.css';
import './design/base.css';
import { App } from './app/App';

// Restaura a rota guardada pelo fallback de 404 em hospedagem estática.
try {
  const pendente = sessionStorage.getItem('rota-pendente');
  if (pendente) {
    sessionStorage.removeItem('rota-pendente');
    if (pendente !== window.location.pathname) window.history.replaceState(null, '', pendente);
  }
} catch {
  /* sem sessionStorage, a navegação direta simplesmente cai no index */
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
