import { useCallback, useEffect, useRef } from 'react';

/**
 * Cronômetro de tempo **ativo**.
 *
 * A tentação é medir `Date.now()` na entrada e na saída. Isso produz números
 * sem sentido: o aluno abre a questão, vai almoçar, volta — e o site registra
 * setenta minutos numa questão de três. Como o produto quer comparar o ritmo
 * dele com os 3min20 impressos na capa do 2º dia, tempo envenenado é pior que
 * tempo nenhum: leva a conclusão errada com cara de medida.
 *
 * Então o relógio pausa quando a aba sai de foco e retoma quando volta. O que
 * fica registrado é o tempo em que a questão esteve de fato na frente dele.
 *
 * Sem estado de React de propósito: o valor é lido por `ref` no momento de
 * confirmar a resposta. Um `setState` por segundo re-renderizaria a questão
 * inteira sessenta vezes por minuto para nada.
 */
export interface Cronometro {
  /** Segundos ativos acumulados até agora. */
  segundos: () => number;
  /** Zera e recomeça. Chamado quando a questão troca. */
  reiniciar: () => void;
}

export function useCronometro(chave: string): Cronometro {
  const acumulado = useRef(0);
  const desde = useRef<number | null>(null);

  const fechar = useCallback(() => {
    if (desde.current === null) return;
    acumulado.current += Date.now() - desde.current;
    desde.current = null;
  }, []);

  const abrir = useCallback(() => {
    if (desde.current === null) desde.current = Date.now();
  }, []);

  const reiniciar = useCallback(() => {
    acumulado.current = 0;
    desde.current = document.visibilityState === 'visible' ? Date.now() : null;
  }, []);

  // Troca de questão zera o relógio. `chave` é o id da questão.
  useEffect(() => {
    reiniciar();
  }, [chave, reiniciar]);

  useEffect(() => {
    const aoMudarVisibilidade = () => {
      if (document.visibilityState === 'visible') abrir();
      else fechar();
    };
    document.addEventListener('visibilitychange', aoMudarVisibilidade);
    // `blur` cobre o caso de trocar de janela sem a aba ficar oculta.
    window.addEventListener('blur', fechar);
    window.addEventListener('focus', abrir);
    return () => {
      document.removeEventListener('visibilitychange', aoMudarVisibilidade);
      window.removeEventListener('blur', fechar);
      window.removeEventListener('focus', abrir);
    };
  }, [abrir, fechar]);

  const segundos = useCallback(() => {
    const emAberto = desde.current === null ? 0 : Date.now() - desde.current;
    return Math.round((acumulado.current + emAberto) / 1000);
  }, []);

  return { segundos, reiniciar };
}
