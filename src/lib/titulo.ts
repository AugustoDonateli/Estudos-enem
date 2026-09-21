const BASE = 'Estudos ENEM';

/** Título e descrição por rota — SEO básico sem biblioteca extra. */
export function definirTitulo(titulo?: string, descricao?: string): void {
  document.title = titulo ? `${titulo} · ${BASE}` : BASE;
  if (descricao) {
    let meta = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    if (!meta) {
      meta = document.createElement('meta');
      meta.name = 'description';
      document.head.appendChild(meta);
    }
    meta.content = descricao;
  }
}
