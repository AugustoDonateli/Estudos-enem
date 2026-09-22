import { useCallback, useEffect, useRef, useState } from 'react';

/**
 * Ditado por voz sobre a Web Speech API (`SpeechRecognition` /
 * `webkitSpeechRecognition`). Zero dependência nova.
 *
 * Duas coisas que este arquivo não esconde:
 *
 * 1. **Privacidade.** No Chrome, o reconhecimento de fala roda em servidores
 *    do Google — o áudio sai do navegador. Este site diz em outro lugar que
 *    nada sai do seu navegador; isso deixa de ser verdade no instante em que
 *    o microfone liga. Por isso o hook nunca inicia sozinho: quem chama
 *    `iniciar()` é o componente, depois de um aviso explícito no ponto de
 *    uso — não deste arquivo, e não de um rodapé que ninguém lê.
 * 2. **Degradação.** Em navegadores sem a API (Firefox, iOS mais antigo),
 *    `suportado` vem `false`. O botão de microfone deve desaparecer, não
 *    aparecer quebrado.
 */

interface EventoReconhecimentoVoz extends Event {
  readonly resultIndex: number;
  readonly results: SpeechRecognitionResultList;
}

interface EventoErroReconhecimentoVoz extends Event {
  readonly error: string;
}

interface ReconhecimentoDeVoz extends EventTarget {
  lang: string;
  continuous: boolean;
  interimResults: boolean;
  start(): void;
  stop(): void;
  abort(): void;
  onresult: ((ev: EventoReconhecimentoVoz) => void) | null;
  onerror: ((ev: EventoErroReconhecimentoVoz) => void) | null;
  onend: (() => void) | null;
}

declare global {
  interface Window {
    SpeechRecognition?: { new (): ReconhecimentoDeVoz };
    webkitSpeechRecognition?: { new (): ReconhecimentoDeVoz };
  }
}

const CONSTRUTOR: { new (): ReconhecimentoDeVoz } | undefined =
  typeof window !== 'undefined' ? window.SpeechRecognition ?? window.webkitSpeechRecognition : undefined;

/** As mensagens de erro do navegador vêm em inglês e em código, não em frase. */
const ROTULO_ERRO: Record<string, string> = {
  'not-allowed': 'Permissão de microfone negada. Ative o microfone para este site e tente de novo.',
  'no-speech': 'Nenhuma fala detectada. Tente falar mais perto do microfone.',
  'audio-capture': 'Nenhum microfone encontrado neste dispositivo.',
  network: 'Falha de rede no reconhecimento de voz. Tente de novo.',
};

export interface UseDitado {
  /** false onde a API não existe. O componente deve esconder o botão de mic. */
  suportado: boolean;
  ouvindo: boolean;
  /** Texto ainda não confirmado, para mostrar em itálico enquanto a pessoa fala. */
  parcial: string;
  erro: string | null;
  iniciar: () => void;
  parar: () => void;
}

/**
 * @param aoReconhecerTrecho Chamado com cada trecho já confirmado
 * (`isFinal`). O componente decide como anexar ao texto que já tinha.
 */
export function useDitado(aoReconhecerTrecho: (texto: string) => void): UseDitado {
  const [ouvindo, setOuvindo] = useState(false);
  const [parcial, setParcial] = useState('');
  const [erro, setErro] = useState<string | null>(null);
  const reconhecimentoRef = useRef<ReconhecimentoDeVoz | null>(null);
  const callbackRef = useRef(aoReconhecerTrecho);
  callbackRef.current = aoReconhecerTrecho;

  const parar = useCallback(() => {
    reconhecimentoRef.current?.stop();
  }, []);

  // Para o microfone se o componente sair da tela com o ditado ligado —
  // navegar para outra rota não pode deixar o navegador escutando.
  useEffect(() => () => reconhecimentoRef.current?.stop(), []);

  const iniciar = useCallback(() => {
    if (!CONSTRUTOR) return;

    const rec = new CONSTRUTOR();
    rec.lang = 'pt-BR';
    rec.continuous = true;
    rec.interimResults = true;

    rec.onresult = (ev) => {
      let finalizado = '';
      let interim = '';
      for (let i = ev.resultIndex; i < ev.results.length; i++) {
        const resultado = ev.results.item(i);
        if (resultado.length === 0) continue;
        const texto = resultado.item(0).transcript;
        if (resultado.isFinal) finalizado += (finalizado ? ' ' : '') + texto.trim();
        else interim += texto;
      }
      if (finalizado) callbackRef.current(finalizado);
      setParcial(interim);
    };

    rec.onerror = (ev) => {
      setErro(ROTULO_ERRO[ev.error] ?? 'Não deu para reconhecer sua voz agora.');
      setOuvindo(false);
    };

    rec.onend = () => {
      setOuvindo(false);
      setParcial('');
    };

    reconhecimentoRef.current = rec;
    setErro(null);
    setOuvindo(true);
    rec.start();
  }, []);

  return { suportado: Boolean(CONSTRUTOR), ouvindo, parcial, erro, iniciar, parar };
}
