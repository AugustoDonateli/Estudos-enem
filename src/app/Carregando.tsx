import { Esqueleto } from '@/design/Primitivos';

/**
 * Esqueleto de carregamento.
 *
 * O conteúdo pesado é carregado sob demanda, então esta tela aparece de
 * verdade em conexão lenta. Em vez de um "Carregando…" solto, ela desenha a
 * silhueta da página que está por vir — cabeçalho, filete e linhas — para
 * que a troca não pareça um salto. O texto continua lá para leitor de tela.
 */
export function Carregando() {
  return (
    <div className="page" role="status" aria-live="polite" aria-busy="true">
      <span className="visually-hidden">Carregando…</span>
      <div className="container" style={{ paddingTop: 'var(--e-6x)' }}>
        <Esqueleto altura={12} largura="140px" />
        <div style={{ height: 'var(--e-2x)' }} />
        <Esqueleto altura={36} largura="min(420px, 80%)" />
        <div style={{ height: 'var(--e-2x)' }} />
        <Esqueleto altura={16} largura="min(600px, 100%)" />
        <div
          style={{
            height: 2,
            background: 'var(--cinza-10)',
            margin: 'var(--e-6x) 0 var(--e-4x)',
          }}
        />
        {[0, 1, 2, 3].map((i) => (
          <div key={i} style={{ marginBottom: 'var(--e-4x)' }}>
            <Esqueleto altura={20} largura={`${72 - i * 6}%`} />
            <div style={{ height: 'var(--e-base)' }} />
            <Esqueleto altura={14} largura={`${94 - i * 5}%`} />
          </div>
        ))}
      </div>
    </div>
  );
}
