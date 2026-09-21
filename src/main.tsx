import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import '@fontsource-variable/source-serif-4';
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
