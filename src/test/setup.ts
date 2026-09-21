import '@testing-library/jest-dom/vitest';

// jsdom não implementa window.scrollTo. As páginas usam a chamada para voltar
// ao topo ao trocar de conteúdo; sem este stub, cada render polui a saída dos
// testes com um "Not implemented" que esconde erros de verdade.
window.scrollTo = () => {};
