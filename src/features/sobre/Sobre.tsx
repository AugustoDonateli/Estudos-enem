import { useEffect } from 'react';
import { contagemPorProcedencia, ASSUNTOS, QUESTOES, SECOES_REDACAO } from '@/content/conteudo';
import { Destaque, SeloProcedencia } from '@/design/Primitivos';
import { CabecalhoPagina, Metricas } from '@/design/Pagina';
import { definirTitulo } from '@/lib/titulo';
import s from './Sobre.module.css';

const FONTES = [
  {
    nome: 'INEP — Matrizes de Referência do Enem',
    url: 'https://www.gov.br/inep/pt-br/centrais-de-conteudo/acervo-linha-editorial/publicacoes-institucionais/avaliacoes-e-exames-da-educacao-basica/matrizes-de-referencia-enem',
    o_que: 'Competências, habilidades, eixos cognitivos e objetos de conhecimento.',
  },
  {
    nome: 'INEP — Provas e Gabaritos',
    url: 'https://www.gov.br/inep/pt-br/areas-de-atuacao/avaliacao-e-exames-educacionais/enem/provas-e-gabaritos',
    o_que: 'Provas oficiais anteriores em PDF, com gabaritos.',
  },
  {
    nome: 'INEP — A Redação no Enem (Cartilha do Participante)',
    url: 'https://download.inep.gov.br/publicacoes/institucionais/avaliacoes_e_exames_da_educacao_basica/a_redacao_no_enem_2025_cartilha_do_participante.pdf',
    o_que: 'As cinco competências, os seis níveis de cada uma e exemplos comentados.',
  },
  {
    nome: 'INEP — Entenda a sua nota no Enem',
    url: 'https://download.inep.gov.br/publicacoes/institucionais/avaliacoes_e_exames_da_educacao_basica/entenda_a_sua_nota_no_enem_guia_do_participante.pdf',
    o_que: 'Como a TRI calcula a nota das provas objetivas.',
  },
  {
    nome: 'INEP — Questões são calculadas pela TRI',
    url: 'https://www.gov.br/inep/pt-br/centrais-de-conteudo/noticias/enem/questoes-sao-calculadas-pela-tri',
    o_que: 'Explicação oficial dos três parâmetros dos itens.',
  },
];

export function Sobre() {
  useEffect(() => {
    definirTitulo('Fontes e procedência', 'O que é oficial, o que é análise e o que é autoral neste site.');
  }, []);

  const contagem = contagemPorProcedencia();

  return (
    <div className="page">
      <CabecalhoPagina
        rotulo="Transparência editorial"
        titulo="Fontes e procedência"
        descricao="Um site de estudo que mistura fato oficial com opinião é pior que inútil: ele dá a confiança errada. Por isso tudo aqui é classificado em três níveis, e a classificação fica visível."
        abaixo={
          <Metricas
            itens={[
              { numero: contagem.total, rotulo: 'questões no banco' },
              { numero: contagem.oficial, rotulo: 'questões oficiais do ENEM' },
              { numero: 120, rotulo: 'habilidades da matriz' },
              { numero: ASSUNTOS.length, rotulo: 'assuntos escritos' },
            ]}
          />
        }
      />

      <div className="container">
        <section className="secao" aria-labelledby="niveis">
          <div className="secao-cabecalho">
            <h2 id="niveis" className="secao-titulo">
              Os três níveis
            </h2>
            <span className="secao-meta">a regra editorial do projeto</span>
          </div>
          <div className={s.niveis}>
            <div className={s.nivel}>
              <span className={s.nivelRotulo}>Nível 1</span>
              <span className={s.nivelTitulo}>Oficial</span>
              <p>
                Documentado pelo INEP ou pelo MEC — estrutura da prova, matriz de referência,
                critérios da redação, funcionamento da TRI. Reproduzido sem reinterpretação e
                sinalizado nos blocos em destaque.
              </p>
            </div>
            <div className={s.nivel}>
              <span className={s.nivelRotulo}>Nível 2</span>
              <span className={s.nivelTitulo}>Análise</span>
              <p>
                Julgamento pedagógico deste site, derivado do que é oficial: a classificação dos
                assuntos em essencial, importante e complementar, a leitura de como cada área
                cobra, a recomendação de estrutura da redação em quatro parágrafos. É discutível,
                e está marcado como tal.
              </p>
            </div>
            <div className={s.nivel}>
              <span className={s.nivelRotulo}>Nível 3</span>
              <span className={s.nivelTitulo}>Autoral</span>
              <p>
                Tudo o que foi escrito para este site: explicações, exemplos, diagramas e
                questões.
              </p>
            </div>
          </div>
        </section>

        <section className="secao" aria-labelledby="questoes">
          <div className="secao-cabecalho">
            <h2 id="questoes" className="secao-titulo">
              Procedência das questões
            </h2>
            <span className="secao-meta">{contagem.total} questões no banco</span>
          </div>

          <Destaque variante="oficial" titulo="O que é oficial e o que não é">
            <p>
              Das {contagem.total} questões do banco, {contagem.oficial} foram aplicadas em provas
              oficiais do ENEM e trazem a referência completa de ano, dia, caderno e número. As
              demais foram escritas para este site no formato do exame. O selo de procedência
              aparece no cabeçalho de toda questão, sem exceção.
            </p>
          </Destaque>

          <div style={{ marginTop: 'var(--e-3x)' }}>
            <Destaque variante="atencao" titulo="Sobre o gabarito das questões oficiais">
              <p>
                Os cadernos de prova foram transcritos dos PDFs do INEP, mas os gabaritos oficiais
                não estavam disponíveis no momento da transcrição. A alternativa marcada como
                correta foi determinada por resolução, e só entraram no banco itens cuja resposta é
                verificável por cálculo ou por leitura direta do texto-base. Ao conferir contra o
                gabarito oficial, corrija aqui qualquer divergência.
              </p>
            </Destaque>
          </div>

          <ul className={s.contagens}>
            <li className={s.contagem}>
              <span className={s.contagemNumero}>{contagem.oficial}</span>
              <span className={s.contagemTexto}>
                <SeloProcedencia procedencia="oficial" /> — questão aplicada em prova oficial, com
                referência de ano, dia, caderno e número. Das provas de 2024 e 2025.
              </span>
            </li>
            <li className={s.contagem}>
              <span className={s.contagemNumero}>{contagem.adaptada}</span>
              <span className={s.contagemTexto}>
                <SeloProcedencia procedencia="adaptada" /> — questão construída a partir de uma
                fonte externa real, sempre citada.
              </span>
            </li>
            <li className={s.contagem}>
              <span className={s.contagemNumero}>{contagem.autoral}</span>
              <span className={s.contagemTexto}>
                <SeloProcedencia procedencia="autoral" /> — questão escrita para este site no
                formato do exame.
              </span>
            </li>
          </ul>

          <div style={{ marginTop: 'var(--e-4x)' }}>
            <Destaque variante="nota" titulo="Como incluir mais questões oficiais">
              <p>
                Baixe outras provas na página de Provas e Gabaritos do INEP e siga o passo a passo
                em <code>docs/ADICIONAR-QUESTOES.md</code>, no repositório do projeto. O item entra
                no banco com selo oficial e a referência correta — e o validador recusa o build se
                a referência faltar. Questões que dependem de figura ou gráfico ficam de fora,
                porque o texto sozinho não permitiria resolvê-las.
              </p>
            </Destaque>
          </div>
        </section>

        <section className="secao" aria-labelledby="matriz">
          <div className="secao-cabecalho">
            <h2 id="matriz" className="secao-titulo">
              Matriz de Referência
            </h2>
            <span className="secao-meta">120 habilidades oficiais</span>
          </div>
          <div className="prose coluna">
            <p>
              O site reproduz o texto oficial da Matriz de Referência do ENEM: os cinco eixos
              cognitivos e as 30 habilidades de cada uma das quatro áreas. Esse texto não é
              reescrito nem resumido — ele aparece como está no documento do INEP.
            </p>
            <p>
              A página de cada assunto mostra quais habilidades da matriz aquele conteúdo ajuda a
              atender. Essa <strong>associação</strong> é análise deste site; as habilidades em si
              são oficiais. O validador do projeto recusa o build se algum código citado não
              existir de fato na matriz da área.
            </p>
          </div>
        </section>

        <section className="secao" aria-labelledby="fontes">
          <div className="secao-cabecalho">
            <h2 id="fontes" className="secao-titulo">
              Fontes oficiais
            </h2>
            <span className="secao-meta">{FONTES.length} documentos do INEP</span>
          </div>
          <ul className={s.fontes}>
            {FONTES.map((f) => (
              <li key={f.url} className={s.fonte}>
                <div>
                  <a
                    href={f.url}
                    target="_blank"
                    rel="noreferrer"
                    className={s.fonteNome}
                  >
                    {f.nome}
                  </a>
                  <span className={s.fonteDescricao}>{f.o_que}</span>
                </div>
              </li>
            ))}
          </ul>
        </section>

        <section className="secao" aria-labelledby="limites">
          <div className="secao-cabecalho">
            <h2 id="limites" className="secao-titulo">
              Limites conhecidos
            </h2>
            <span className="secao-meta">declarados, não escondidos</span>
          </div>
          <div className={s.limites}>
            <div className={s.limite}>
              <span className={s.limiteTitulo}>Este site não substitui as fontes oficiais.</span>
              <p>
                Ele organiza o estudo e explica conceitos; o edital, a matriz e a cartilha do
                participante continuam sendo a palavra final sobre regras do exame.
              </p>
            </div>
            <div className={s.limite}>
              <span className={s.limiteTitulo}>O domínio exibido não é uma previsão de nota.</span>
              <p>
                É uma estimativa simplificada, construída a partir dos seus acertos e erros no
                site. A nota do ENEM usa TRI, que depende dos parâmetros reais de cada item — algo
                que nenhum simulado fora do INEP consegue reproduzir.
              </p>
            </div>
            <div className={s.limite}>
              <span className={s.limiteTitulo}>A redação não recebe nota automática.</span>
              <p>
                O site entrega checklists estruturados pelos cinco critérios e o registro da sua
                autoavaliação. Um corretor automático feito por regras daria um número com
                aparência de autoridade e conteúdo duvidoso.
              </p>
            </div>
            <div className={s.limite}>
              <span className={s.limiteTitulo}>O conteúdo escrito cobre o essencial, não tudo.</span>
              <p>
                São {ASSUNTOS.length} assuntos, {QUESTOES.length} questões e{' '}
                {SECOES_REDACAO.length} seções de redação. Os assuntos importantes que ainda não
                foram escritos aparecem listados na página de cada área, com esse estado
                declarado.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
