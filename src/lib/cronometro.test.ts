import { describe, expect, it, vi, beforeEach, afterEach } from 'vitest';
import { renderHook } from '@testing-library/react';
import { act } from 'react';
import { useCronometro } from './cronometro';

/**
 * O que estes testes protegem é a diferença entre tempo medido e tempo
 * inventado. Se o relógio não pausar quando a aba sai de foco, o aluno que
 * abre a questão e vai almoçar registra setenta minutos numa questão de três
 * — e o site passa a comparar isso com os 3min20 da prova, chegando a uma
 * conclusão errada com cara de medida.
 */

function definirVisibilidade(estado: 'visible' | 'hidden') {
  Object.defineProperty(document, 'visibilityState', {
    value: estado,
    configurable: true,
  });
  document.dispatchEvent(new Event('visibilitychange'));
}

describe('useCronometro', () => {
  beforeEach(() => {
    vi.useFakeTimers();
    definirVisibilidade('visible');
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it('conta o tempo decorrido com a aba visível', () => {
    const { result } = renderHook(() => useCronometro('q1'));
    act(() => {
      vi.advanceTimersByTime(30_000);
    });
    expect(result.current.segundos()).toBe(30);
  });

  it('para de contar enquanto a aba está oculta', () => {
    const { result } = renderHook(() => useCronometro('q1'));

    act(() => {
      vi.advanceTimersByTime(10_000);
      definirVisibilidade('hidden');
    });
    // Almoço.
    act(() => {
      vi.advanceTimersByTime(3_600_000);
    });

    expect(result.current.segundos()).toBe(10);
  });

  it('retoma de onde parou quando a aba volta', () => {
    const { result } = renderHook(() => useCronometro('q1'));

    act(() => {
      vi.advanceTimersByTime(10_000);
      definirVisibilidade('hidden');
      vi.advanceTimersByTime(600_000);
      definirVisibilidade('visible');
      vi.advanceTimersByTime(5_000);
    });

    expect(result.current.segundos()).toBe(15);
  });

  it('zera quando a questão troca', () => {
    const { result, rerender } = renderHook(({ id }) => useCronometro(id), {
      initialProps: { id: 'q1' },
    });

    act(() => {
      vi.advanceTimersByTime(45_000);
    });
    expect(result.current.segundos()).toBe(45);

    rerender({ id: 'q2' });
    act(() => {
      vi.advanceTimersByTime(3_000);
    });
    expect(result.current.segundos()).toBe(3);
  });

  it('pausa ao perder o foco da janela, mesmo com a aba visível', () => {
    const { result } = renderHook(() => useCronometro('q1'));

    act(() => {
      vi.advanceTimersByTime(8_000);
      window.dispatchEvent(new Event('blur'));
      vi.advanceTimersByTime(120_000);
    });

    expect(result.current.segundos()).toBe(8);

    act(() => {
      window.dispatchEvent(new Event('focus'));
      vi.advanceTimersByTime(2_000);
    });

    expect(result.current.segundos()).toBe(10);
  });

  it('não conta nada se a questão abrir com a aba já oculta', () => {
    definirVisibilidade('hidden');
    const { result } = renderHook(() => useCronometro('q1'));

    act(() => {
      vi.advanceTimersByTime(60_000);
    });

    expect(result.current.segundos()).toBe(0);
  });
});
