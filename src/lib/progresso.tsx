import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from 'react';
import type { Dificuldade, Letra, TipoErro } from '@/content/tipos';
import {
  estadoInicialAssunto,
  PRIOR_POR_NIVEL,
  progressoInicial,
  type Confianca,
  type Config,
  type EstadoAssunto,
  type NivelDeclarado,
  type Producao,
  type Progresso,
} from '@/storage/schema';
import { carregar, salvar } from '@/storage/persist';
import { atualizarDominio, dominioAposLeitura } from '@/engine/dominio';
import { agendar } from '@/engine/revisao';
import { hoje } from '@/engine/datas';

export interface RegistroResposta {
  questionId: string;
  topicId: string;
  conceito: string;
  letra: Letra;
  correta: boolean;
  dificuldade: Dificuldade;
  tipoErro?: TipoErro;
  /** Tempo ativo até confirmar, em segundos. */
  segundos?: number;
  confianca?: Confianca;
}

interface ContextoProgresso {
  progresso: Progresso;
  /** false quando o navegador recusa o localStorage — a interface avisa. */
  salvandoOk: boolean;
  registrarResposta: (r: RegistroResposta) => void;
  marcarLido: (topicId: string) => void;
  registrarDiagnostico: (niveis: Record<string, NivelDeclarado>) => void;
  marcarSecaoRedacao: (id: string) => void;
  registrarProducao: (p: Producao) => void;
  concluirItemPlano: (id: string) => void;
  atualizarConfig: (c: Partial<Config>) => void;
  substituirProgresso: (p: Progresso) => void;
  reiniciar: () => void;
}

const Ctx = createContext<ContextoProgresso | null>(null);

function comEstado(p: Progresso, topicId: string): EstadoAssunto {
  return p.assuntos[topicId] ?? estadoInicialAssunto();
}

export function ProvedorProgresso({ children }: { children: ReactNode }) {
  const [progresso, setProgresso] = useState<Progresso>(() => carregar());
  const [salvandoOk, setSalvandoOk] = useState(true);
  const primeiraRenderizacao = useRef(true);

  useEffect(() => {
    if (primeiraRenderizacao.current) {
      primeiraRenderizacao.current = false;
      return;
    }
    setSalvandoOk(salvar(progresso));
  }, [progresso]);

  const registrarResposta = useCallback((r: RegistroResposta) => {
    const dia = hoje();
    setProgresso((p) => {
      const estado = comEstado(p, r.topicId);
      const dominio = atualizarDominio(estado.dominio, r.correta, r.dificuldade, r.confianca);
      const ag = agendar(estado.caixa === 0 ? 1 : estado.caixa, r.correta, dia);
      return {
        ...p,
        assuntos: {
          ...p.assuntos,
          [r.topicId]: {
            ...estado,
            dominio,
            caixa: ag.caixa,
            proximaRevisao: ag.proximaRevisao,
            revisaoFinal: ag.revisaoFinal,
            ultimoEstudo: dia,
            acertos: estado.acertos + (r.correta ? 1 : 0),
            erros: estado.erros + (r.correta ? 0 : 1),
          },
        },
        respostas: [
          ...p.respostas,
          { ...r, em: dia, ts: Date.now() + p.respostas.length },
        ],
      };
    });
  }, []);

  const marcarLido = useCallback((topicId: string) => {
    const dia = hoje();
    setProgresso((p) => {
      const estado = comEstado(p, topicId);
      if (estado.lido && estado.ultimoEstudo === dia) return p;
      const ag = estado.caixa === 0 ? agendar(1, true, dia) : null;
      return {
        ...p,
        assuntos: {
          ...p.assuntos,
          [topicId]: {
            ...estado,
            lido: true,
            ultimoEstudo: dia,
            dominio: estado.lido ? estado.dominio : dominioAposLeitura(estado.dominio),
            caixa: ag ? ag.caixa : estado.caixa,
            proximaRevisao: ag ? ag.proximaRevisao : estado.proximaRevisao,
            revisaoFinal: ag ? ag.revisaoFinal : estado.revisaoFinal,
          },
        },
      };
    });
  }, []);

  const registrarDiagnostico = useCallback((niveis: Record<string, NivelDeclarado>) => {
    setProgresso((p) => {
      const assuntos = { ...p.assuntos };
      for (const [topicId, nivel] of Object.entries(niveis)) {
        const estado = comEstado(p, topicId);
        assuntos[topicId] = { ...estado, dominio: PRIOR_POR_NIVEL[nivel] };
      }
      return { ...p, assuntos, config: { ...p.config, diagnosticoFeito: true } };
    });
  }, []);

  const marcarSecaoRedacao = useCallback((id: string) => {
    setProgresso((p) =>
      p.redacao.secoesLidas.includes(id)
        ? p
        : { ...p, redacao: { ...p.redacao, secoesLidas: [...p.redacao.secoesLidas, id] } },
    );
  }, []);

  const registrarProducao = useCallback((prod: Producao) => {
    setProgresso((p) => ({
      ...p,
      redacao: { ...p.redacao, producoes: [...p.redacao.producoes, prod] },
    }));
  }, []);

  const concluirItemPlano = useCallback((id: string) => {
    const dia = hoje();
    setProgresso((p) => {
      const atuais = p.planoConcluido[dia] ?? [];
      const proximos = atuais.includes(id) ? atuais.filter((x) => x !== id) : [...atuais, id];
      return { ...p, planoConcluido: { ...p.planoConcluido, [dia]: proximos } };
    });
  }, []);

  const atualizarConfig = useCallback((c: Partial<Config>) => {
    setProgresso((p) => ({ ...p, config: { ...p.config, ...c } }));
  }, []);

  const substituirProgresso = useCallback((p: Progresso) => setProgresso(p), []);
  const reiniciar = useCallback(() => setProgresso(progressoInicial(hoje())), []);

  const valor = useMemo(
    () => ({
      progresso,
      salvandoOk,
      registrarResposta,
      marcarLido,
      registrarDiagnostico,
      marcarSecaoRedacao,
      registrarProducao,
      concluirItemPlano,
      atualizarConfig,
      substituirProgresso,
      reiniciar,
    }),
    [
      progresso,
      salvandoOk,
      registrarResposta,
      marcarLido,
      registrarDiagnostico,
      marcarSecaoRedacao,
      registrarProducao,
      concluirItemPlano,
      atualizarConfig,
      substituirProgresso,
      reiniciar,
    ],
  );

  return <Ctx.Provider value={valor}>{children}</Ctx.Provider>;
}

export function useProgresso(): ContextoProgresso {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error('useProgresso precisa estar dentro de <ProvedorProgresso>.');
  return ctx;
}
