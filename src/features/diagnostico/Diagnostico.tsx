import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AREAS } from '@/content/areas';
import { assuntosDaArea } from '@/content/indice';
import { useProgresso } from '@/lib/progresso';
import { ROTULO_NIVEL, type NivelDeclarado } from '@/storage/schema';
import { Botao, BotaoLink, Destaque } from '@/design/Primitivos';
import { definirTitulo } from '@/lib/titulo';
import s from './Diagnostico.module.css';

const AREAS_DIAGNOSTICO = AREAS.filter((a) => a.id !== 'redacao');
const NIVEIS: NivelDeclarado[] = [0, 1, 2, 3];

/**
 * Diagnóstico por autoavaliação.
 *
 * Um diagnóstico longo antes do primeiro minuto de estudo é a maior fonte de
 * abandono em ferramentas assim. Por isso: uma área por vez, sempre pulável, e
 * o resultado alimenta o domínio inicial de cada assunto em vez de virar uma
 * nota qualquer.
 */
export function Diagnostico() {
  const navegar = useNavigate();
  const { progresso, registrarDiagnostico } = useProgresso();
  const [etapa, setEtapa] = useState(0);
  const [niveis, setNiveis] = useState<Record<string, NivelDeclarado>>(() => {
    // Pré-preenche com o que já foi avaliado antes, para refazer ser barato.
    const inicial: Record<string, NivelDeclarado> = {};
    for (const [id, estado] of Object.entries(progresso.assuntos)) {
      const d = estado?.dominio;
      if (typeof d !== 'number') continue;
      inicial[id] = d >= 70 ? 3 : d >= 50 ? 2 : d >= 30 ? 1 : 0;
    }
    return inicial;
  });

  useEffect(() => {
    definirTitulo('Diagnóstico', 'Autoavaliação rápida que torna o plano de estudo preciso.');
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [etapa]);

  const area = AREAS_DIAGNOSTICO[etapa];
  const ultima = etapa === AREAS_DIAGNOSTICO.length - 1;

  function concluir() {
    registrarDiagnostico(niveis);
    navegar('/');
  }

  if (!area) return null;

  const assuntos = assuntosDaArea(area.id);
  const respondidos = assuntos.filter((a) => niveis[a.id] !== undefined).length;

  return (
    <div className="page">
      <header className="cabecalho-pagina">
        <h1>Diagnóstico rápido</h1>
        <p className="subtitulo">
          Para cada assunto, diga o quanto você já sabe. São cerca de dois minutos, e é isso
          que faz o plano diário parar de ser um chute razoável.
        </p>
      </header>

      <div className={s.progresso} role="progressbar" aria-valuenow={etapa + 1} aria-valuemin={1} aria-valuemax={AREAS_DIAGNOSTICO.length} aria-label="Progresso do diagnóstico">
        {AREAS_DIAGNOSTICO.map((a, i) => (
          <span key={a.id} className={`${s.etapa} ${i <= etapa ? s.etapaFeita : ''}`} />
        ))}
      </div>

      {etapa === 0 && (
        <Destaque variante="nota" titulo="Responda com honestidade, não com otimismo">
          <p>
            Marcar "sei bem" no que você só viu uma vez faz o sistema tirar esse assunto da
            fila — e você perde justamente o que precisava estudar.
          </p>
        </Destaque>
      )}

      <section className="secao" aria-labelledby="area-diag">
        <div className="secao-cabecalho">
          <h2 id="area-diag" className="secao-titulo">
            {area.nome}
          </h2>
          <span className="secao-meta">
            {respondidos}/{assuntos.length}
          </span>
        </div>

        <ul className={s.assuntos}>
          {assuntos.map((assunto) => (
            <li key={assunto.id} className={s.assunto}>
              <span className={s.titulo}>{assunto.titulo}</span>
              <p className={s.resumo}>{assunto.resumo}</p>
              <div className={s.opcoes} role="group" aria-label={`Seu nível em ${assunto.titulo}`}>
                {NIVEIS.map((nivel) => (
                  <button
                    key={nivel}
                    type="button"
                    className={`${s.opcao} ${niveis[assunto.id] === nivel ? s.opcaoAtiva : ''}`}
                    aria-pressed={niveis[assunto.id] === nivel}
                    onClick={() => setNiveis((atual) => ({ ...atual, [assunto.id]: nivel }))}
                  >
                    {ROTULO_NIVEL[nivel]}
                  </button>
                ))}
              </div>
            </li>
          ))}
        </ul>
      </section>

      <div className={s.rodape}>
        <span className={s.contagem}>
          Área {etapa + 1} de {AREAS_DIAGNOSTICO.length}
        </span>
        {etapa > 0 && (
          <Botao variante="secundario" onClick={() => setEtapa((e) => e - 1)}>
            Voltar
          </Botao>
        )}
        {ultima ? (
          <Botao onClick={concluir}>Concluir diagnóstico</Botao>
        ) : (
          <Botao onClick={() => setEtapa((e) => e + 1)}>Próxima área</Botao>
        )}
        <BotaoLink to="/" variante="discreto">
          Pular por enquanto
        </BotaoLink>
      </div>
    </div>
  );
}
