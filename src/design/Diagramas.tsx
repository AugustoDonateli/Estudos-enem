import type { DiagramaId } from '@/content/tipos';
import s from './Diagramas.module.css';

/**
 * Diagramas próprios, em SVG inline.
 *
 * Regra do projeto: imagem só existe quando o desenho explica melhor que o
 * texto. Não há foto decorativa, banco de imagens nem ícone ilustrativo.
 * Como são SVG que herdam as cores do tema, funcionam em qualquer tamanho,
 * pesam quase nada e não geram requisição de rede.
 *
 * Acessibilidade: cada diagrama tem <title> e <desc>, e a legenda abaixo
 * precisa fazer sentido sozinha para quem não enxerga a figura.
 */

export function Diagrama({ nome, legenda }: { nome: DiagramaId; legenda: string }) {
  const Componente = MAPA[nome];
  return (
    <figure className={s.figura}>
      <div className={s.quadro}>
        <Componente />
      </div>
      <figcaption className={s.legenda}>{legenda}</figcaption>
    </figure>
  );
}

function Marcador() {
  return (
    <defs>
      <marker id="ponta" viewBox="0 0 8 8" refX="7" refY="4" markerWidth="7" markerHeight="7" orient="auto">
        <path d="M0 0 L8 4 L0 8 z" fill="var(--ink-3)" />
      </marker>
    </defs>
  );
}

/* --- Função afim ------------------------------------------------------- */
function FuncaoAfim() {
  return (
    <svg viewBox="0 0 400 240" className={s.svg} role="img" aria-labelledby="fa-t fa-d">
      <title id="fa-t">Gráfico de uma função afim</title>
      <desc id="fa-d">
        Reta crescente cortando o eixo vertical em b igual a 40. A cada 1 unidade que x
        avança, y sobe 20 unidades, que é o coeficiente angular a.
      </desc>
      <Marcador />
      {[60, 120, 180].map((y) => (
        <line key={y} x1="40" y1={y} x2="370" y2={y} className={s.grade} />
      ))}
      {[120, 200, 280].map((x) => (
        <line key={x} x1={x} y1="20" x2={x} y2="200" className={s.grade} />
      ))}
      <line x1="40" y1="200" x2="380" y2="200" className={s.eixo} markerEnd="url(#ponta)" />
      <line x1="40" y1="210" x2="40" y2="20" className={s.eixo} markerEnd="url(#ponta)" />
      <line x1="40" y1="160" x2="340" y2="40" className={s.curva} />
      <circle cx="40" cy="160" r="4" className={s.ponto} />
      <text x="48" y="155" className={s.rotuloAcento}>b = 40 (onde corta o eixo y)</text>
      <path d="M200 120 L280 120 L280 88" className={s.auxiliar} />
      <text x="212" y="136" className={s.rotulo}>Δx = 1</text>
      <text x="288" y="108" className={s.rotulo}>Δy = 20</text>
      <text x="212" y="60" className={s.rotuloForte}>a = Δy / Δx = 20</text>
      <text x="356" y="216" className={s.rotulo}>x</text>
      <text x="22" y="30" className={s.rotulo}>y</text>
    </svg>
  );
}

/* --- Parábola ---------------------------------------------------------- */
function Parabola() {
  return (
    <svg viewBox="0 0 400 250" className={s.svg} role="img" aria-labelledby="pb-t pb-d">
      <title id="pb-t">Gráfico de uma função quadrática com a maior que zero</title>
      <desc id="pb-d">
        Parábola com concavidade para cima, cortando o eixo x em duas raízes. O vértice
        fica no ponto mais baixo, exatamente no meio das duas raízes, e é o valor mínimo
        da função.
      </desc>
      <Marcador />
      <line x1="30" y1="170" x2="380" y2="170" className={s.eixo} markerEnd="url(#ponta)" />
      <line x1="60" y1="230" x2="60" y2="20" className={s.eixo} markerEnd="url(#ponta)" />
      <path d="M100 40 Q205 285 310 40" className={s.curva} />
      <circle cx="131" cy="170" r="4" className={s.ponto} />
      <circle cx="279" cy="170" r="4" className={s.ponto} />
      <circle cx="205" cy="203" r="4" className={s.ponto} />
      <line x1="205" y1="30" x2="205" y2="215" className={s.auxiliar} />
      <text x="104" y="190" className={s.rotuloAcento}>raiz x₁</text>
      <text x="256" y="190" className={s.rotuloAcento}>raiz x₂</text>
      <text x="168" y="228" className={s.rotuloForte}>vértice = mínimo</text>
      <text x="212" y="48" className={s.rotulo}>eixo de simetria</text>
      <text x="216" y="66" className={s.rotulo}>xᵥ = (x₁ + x₂) / 2</text>
      <text x="316" y="34" className={s.rotulo}>a &gt; 0</text>
      <text x="362" y="190" className={s.rotulo}>x</text>
    </svg>
  );
}

/* --- Estrutura da redação ---------------------------------------------- */
function EstruturaRedacao() {
  const partes = [
    { t: 'Introdução', f: 'Contextualiza o tema e apresenta a tese.', l: '4 a 6 linhas' },
    { t: 'Desenvolvimento 1', f: 'Primeiro argumento + repertório + análise.', l: '7 a 9 linhas' },
    { t: 'Desenvolvimento 2', f: 'Segundo argumento, de outro ângulo.', l: '7 a 9 linhas' },
    { t: 'Conclusão', f: 'Retoma a tese e traz a proposta de intervenção.', l: '5 a 7 linhas' },
  ];
  return (
    <svg viewBox="0 0 400 260" className={s.svg} role="img" aria-labelledby="er-t er-d">
      <title id="er-t">Estrutura de quatro parágrafos da redação do ENEM</title>
      <desc id="er-d">
        Quatro blocos empilhados: introdução com tese em 4 a 6 linhas; desenvolvimento 1 e
        desenvolvimento 2 com um argumento cada, de 7 a 9 linhas; e conclusão com a
        proposta de intervenção, de 5 a 7 linhas. O total precisa caber em 30 linhas.
      </desc>
      {partes.map((p, i) => (
        <g key={p.t}>
          <rect
            x="16"
            y={12 + i * 60}
            width="368"
            height="48"
            rx="5"
            className={i === 0 || i === 3 ? s.caixaAcento : s.caixa}
          />
          <text x="30" y={32 + i * 60} className={s.rotuloForte}>{p.t}</text>
          <text x="30" y={49 + i * 60} className={s.rotulo}>{p.f}</text>
          <text x="370" y={32 + i * 60} textAnchor="end" className={s.rotulo}>{p.l}</text>
        </g>
      ))}
    </svg>
  );
}

/* --- Proposta de intervenção ------------------------------------------- */
function PropostaIntervencao() {
  const elementos = [
    ['Agente', 'quem faz'],
    ['Ação', 'o que faz'],
    ['Meio / modo', 'como faz'],
    ['Efeito', 'para quê'],
    ['Detalhamento', 'aprofunda um dos anteriores'],
  ];
  return (
    <svg viewBox="0 0 400 230" className={s.svg} role="img" aria-labelledby="pi-t pi-d">
      <title id="pi-t">Os cinco elementos da proposta de intervenção</title>
      <desc id="pi-d">
        Agente (quem faz), ação (o que faz), meio ou modo (como faz), efeito (para quê) e
        detalhamento, que aprofunda um dos elementos anteriores. Os cinco juntos são o que
        a competência 5 pede.
      </desc>
      {elementos.map(([nome, papel], i) => (
        <g key={nome}>
          <rect x="16" y={10 + i * 43} width="368" height="34" rx="5" className={i === 4 ? s.caixa : s.caixaAcento} />
          <circle cx="36" cy={27 + i * 43} r="11" fill="var(--accent)" />
          <text x="36" y={31 + i * 43} textAnchor="middle" fontSize="12" fontWeight="700" fill="#fff">
            {i + 1}
          </text>
          <text x="56" y={31 + i * 43} className={s.rotuloForte}>{nome}</text>
          <text x="370" y={31 + i * 43} textAnchor="end" className={s.rotulo}>{papel}</text>
        </g>
      ))}
    </svg>
  );
}

/* --- Ciclo do carbono --------------------------------------------------- */
function CicloCarbono() {
  return (
    <svg viewBox="0 0 400 250" className={s.svg} role="img" aria-labelledby="cc-t cc-d">
      <title id="cc-t">Ciclo do carbono</title>
      <desc id="cc-d">
        O CO2 da atmosfera entra nos produtores pela fotossíntese e volta à atmosfera por
        três caminhos: respiração dos seres vivos, decomposição da matéria orgânica e
        queima de combustíveis fósseis. A queima é o caminho que o ser humano acelerou.
      </desc>
      <Marcador />
      <rect x="110" y="10" width="180" height="38" rx="5" className={s.caixaAcento} />
      <text x="200" y="27" textAnchor="middle" className={s.rotuloForte}>CO₂ na atmosfera</text>
      <text x="200" y="42" textAnchor="middle" className={s.rotulo}>reservatório comum</text>

      <rect x="16" y="100" width="110" height="46" rx="5" className={s.caixa} />
      <text x="71" y="120" textAnchor="middle" className={s.rotuloForte}>Produtores</text>
      <text x="71" y="136" textAnchor="middle" className={s.rotulo}>plantas e algas</text>

      <rect x="150" y="100" width="100" height="46" rx="5" className={s.caixa} />
      <text x="200" y="120" textAnchor="middle" className={s.rotuloForte}>Consumidores</text>
      <text x="200" y="136" textAnchor="middle" className={s.rotulo}>animais</text>

      <rect x="274" y="100" width="110" height="46" rx="5" className={s.caixa} />
      <text x="329" y="120" textAnchor="middle" className={s.rotuloForte}>Decompositores</text>
      <text x="329" y="136" textAnchor="middle" className={s.rotulo}>fungos, bactérias</text>

      <rect x="110" y="196" width="180" height="42" rx="5" className={s.caixa} />
      <text x="200" y="214" textAnchor="middle" className={s.rotuloForte}>Combustíveis fósseis</text>
      <text x="200" y="230" textAnchor="middle" className={s.rotulo}>carvão, petróleo, gás</text>

      <path d="M120 54 L75 96" className={s.seta} markerEnd="url(#ponta)" />
      <text x="34" y="78" className={s.rotuloAcento}>fotossíntese</text>
      <path d="M126 122 L146 122" className={s.seta} markerEnd="url(#ponta)" />
      <path d="M250 122 L270 122" className={s.seta} markerEnd="url(#ponta)" />
      <path d="M200 96 L200 54" className={s.seta} markerEnd="url(#ponta)" />
      <text x="206" y="80" className={s.rotulo}>respiração</text>
      <path d="M329 96 L300 54" className={s.seta} markerEnd="url(#ponta)" />
      <text x="330" y="80" className={s.rotulo}>decomposição</text>
      <path d="M110 214 L60 214 L60 150" className={s.seta} markerEnd="url(#ponta)" />
      <path d="M290 214 L350 214 L350 54" className={s.seta} markerEnd="url(#ponta)" />
      <text x="292" y="186" className={s.rotuloAcento}>combustão</text>
    </svg>
  );
}

/* --- Fluxo de energia --------------------------------------------------- */
function FluxoEnergia() {
  const niveis = [
    { n: 'Produtores', e: '10 000 kcal', w: 340 },
    { n: 'Consumidores 1ª ordem', e: '≈ 1 000 kcal', w: 250 },
    { n: 'Consumidores 2ª ordem', e: '≈ 100 kcal', w: 160 },
    { n: 'Consumidores 3ª ordem', e: '≈ 10 kcal', w: 90 },
  ];
  return (
    <svg viewBox="0 0 400 230" className={s.svg} role="img" aria-labelledby="fe-t fe-d">
      <title id="fe-t">Fluxo de energia em uma cadeia alimentar</title>
      <desc id="fe-d">
        Pirâmide invertida em quatro níveis. A cada nível trófico, a maior parte da energia
        se perde como calor e só cerca de dez por cento passa adiante. Por isso as cadeias
        alimentares têm poucos níveis e o fluxo de energia é unidirecional.
      </desc>
      <Marcador />
      {niveis.map((nivel, i) => (
        <g key={nivel.n}>
          <rect x={200 - nivel.w / 2} y={12 + i * 52} width={nivel.w} height="38" rx="4" className={i === 0 ? s.caixaAcento : s.caixa} />
          <text x="200" y={30 + i * 52} textAnchor="middle" className={s.rotuloForte}>{nivel.n}</text>
          <text x="200" y={45 + i * 52} textAnchor="middle" className={s.rotulo}>{nivel.e}</text>
          {i < 3 && (
            <>
              <path d={`M200 ${50 + i * 52} L200 ${64 + i * 52}`} className={s.seta} markerEnd="url(#ponta)" />
              <text x="214" y={62 + i * 52} className={s.rotulo}>≈ 90% vira calor</text>
            </>
          )}
        </g>
      ))}
    </svg>
  );
}

/* --- Anatomia de um item ------------------------------------------------ */
function AnatomiaItem() {
  return (
    <svg viewBox="0 0 400 260" className={s.svg} role="img" aria-labelledby="ai-t ai-d">
      <title id="ai-t">Anatomia de uma questão do ENEM</title>
      <desc id="ai-d">
        Uma questão do ENEM tem três partes: o texto-base ou suporte, que traz a situação;
        o comando, que é a frase que diz o que responder; e as cinco alternativas. A leitura
        eficiente começa pelo comando, não pelo texto-base.
      </desc>
      <Marcador />
      <rect x="16" y="12" width="290" height="74" rx="5" className={s.caixa} />
      <text x="30" y="32" className={s.rotuloForte}>1. Texto-base (suporte)</text>
      <text x="30" y="50" className={s.rotulo}>Notícia, gráfico, tabela, tirinha, trecho literário…</text>
      <text x="30" y="68" className={s.rotulo}>Traz a situação e os dados. Nem tudo aqui é usado.</text>

      <rect x="16" y="98" width="290" height="56" rx="5" className={s.caixaAcento} />
      <text x="30" y="118" className={s.rotuloForte}>2. Comando</text>
      <text x="30" y="136" className={s.rotulo}>A frase que diz o que responder. Leia esta primeiro.</text>

      <rect x="16" y="166" width="290" height="78" rx="5" className={s.caixa} />
      <text x="30" y="186" className={s.rotuloForte}>3. Cinco alternativas</text>
      <text x="30" y="204" className={s.rotulo}>Uma correta; as outras representam erros previstos:</text>
      <text x="30" y="222" className={s.rotulo}>conta errada, leitura parcial, senso comum, troca de</text>
      <text x="30" y="238" className={s.rotulo}>conceito.</text>

      <path d="M340 126 L340 50" className={s.seta} markerEnd="url(#ponta)" />
      <path d="M340 146 L340 200" className={s.seta} markerEnd="url(#ponta)" />
      <text x="316" y="140" className={s.rotuloAcento}>comece</text>
      <text x="322" y="156" className={s.rotuloAcento}>aqui</text>
    </svg>
  );
}

/* --- Consumo elétrico --------------------------------------------------- */
function ConsumoEletrico() {
  return (
    <svg viewBox="0 0 400 220" className={s.svg} role="img" aria-labelledby="ce-t ce-d">
      <title id="ce-t">Cálculo do consumo de energia elétrica em quilowatt-hora</title>
      <desc id="ce-d">
        O consumo é a potência do aparelho multiplicada pelo tempo de uso. Um chuveiro de
        5500 watts usado 30 minutos por dia durante 30 dias consome 82,5 quilowatt-hora no
        mês. A conta de luz cobra por quilowatt-hora.
      </desc>
      <Marcador />
      <rect x="16" y="12" width="368" height="44" rx="5" className={s.caixaAcento} />
      <text x="200" y="32" textAnchor="middle" className={s.rotuloForte}>E (kWh) = P (kW) × t (h)</text>
      <text x="200" y="48" textAnchor="middle" className={s.rotulo}>
        energia = potência × tempo — a unidade já diz a fórmula
      </text>

      <rect x="16" y="72" width="170" height="60" rx="5" className={s.caixa} />
      <text x="30" y="92" className={s.rotuloForte}>Chuveiro: 5 500 W</text>
      <text x="30" y="110" className={s.rotulo}>= 5,5 kW</text>
      <text x="30" y="126" className={s.rotulo}>30 min/dia = 0,5 h</text>

      <rect x="214" y="72" width="170" height="60" rx="5" className={s.caixa} />
      <text x="228" y="92" className={s.rotuloForte}>Em 30 dias</text>
      <text x="228" y="110" className={s.rotulo}>5,5 × 0,5 × 30</text>
      <text x="228" y="126" className={s.rotulo}>= 82,5 kWh</text>

      <path d="M186 102 L210 102" className={s.seta} markerEnd="url(#ponta)" />

      <rect x="16" y="148" width="368" height="56" rx="5" className={s.caixa} />
      <text x="30" y="168" className={s.rotuloForte}>Onde o ENEM te derruba</text>
      <text x="30" y="186" className={s.rotulo}>Esquecer de dividir watt por 1000, ou usar minuto</text>
      <text x="30" y="200" className={s.rotulo}>onde a fórmula pede hora.</text>
    </svg>
  );
}

const MAPA: Record<DiagramaId, () => JSX.Element> = {
  'funcao-afim': FuncaoAfim,
  parabola: Parabola,
  'estrutura-redacao': EstruturaRedacao,
  'proposta-intervencao': PropostaIntervencao,
  'ciclo-carbono': CicloCarbono,
  'fluxo-energia': FluxoEnergia,
  'anatomia-item': AnatomiaItem,
  'consumo-eletrico': ConsumoEletrico,
};
