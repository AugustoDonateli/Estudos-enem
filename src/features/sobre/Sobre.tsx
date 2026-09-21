import { useEffect } from 'react';
import { contagemPorProcedencia, ASSUNTOS, QUESTOES, SECOES_REDACAO } from '@/content/conteudo';
import { Destaque, SeloProcedencia } from '@/design/Primitivos';
import { definirTitulo } from '@/lib/titulo';

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
      <header className="cabecalho-pagina">
        <h1>Fontes e procedência</h1>
        <p className="subtitulo">
          Um site de estudo que mistura fato oficial com opinião é pior que inútil: ele dá a
          confiança errada. Por isso tudo aqui é classificado em três níveis, e a classificação
          fica visível.
        </p>
      </header>

      <section className="secao" aria-labelledby="niveis">
        <div className="secao-cabecalho">
          <h2 id="niveis" className="secao-titulo">
            Os três níveis
          </h2>
        </div>
        <div className="prose">
          <p>
            <strong>Oficial.</strong> Documentado pelo INEP ou pelo MEC — estrutura da prova,
            matriz de referência, critérios da redação, funcionamento da TRI. Reproduzido sem
            reinterpretação e sinalizado nos blocos em destaque.
          </p>
          <p>
            <strong>Análise.</strong> Julgamento pedagógico deste site, derivado do que é
            oficial: a classificação dos assuntos em essencial, importante e complementar, a
            leitura de como cada área cobra, a recomendação de estrutura da redação em quatro
            parágrafos. É discutível, e está marcado como tal.
          </p>
          <p>
            <strong>Autoral.</strong> Tudo o que foi escrito para este site: explicações,
            exemplos, diagramas e questões.
          </p>
        </div>
      </section>

      <section className="secao" aria-labelledby="questoes">
        <div className="secao-cabecalho">
          <h2 id="questoes" className="secao-titulo">
            Procedência das questões
          </h2>
          <span className="secao-meta">{contagem.total} questões no banco</span>
        </div>

        <Destaque variante="atencao" titulo="Não há nenhuma questão oficial do ENEM neste banco">
          <p>
            As {contagem.total} questões do site foram escritas para ele, no formato do exame.
            Nenhuma é, nem é apresentada como, uma questão aplicada em prova oficial. O selo de
            procedência aparece no cabeçalho de toda questão, sem exceção.
          </p>
        </Destaque>

        <div className="prose" style={{ marginTop: 'var(--s-6)' }}>
          <p>
            <SeloProcedencia procedencia="oficial" /> — questão aplicada em prova oficial, com
            referência de edição. O sistema aceita este tipo, mas o banco atual tem{' '}
            <strong>{contagem.oficial}</strong> delas.
          </p>
          <p>
            <SeloProcedencia procedencia="adaptada" /> — questão construída a partir de uma
            fonte externa real, sempre citada. Atualmente: <strong>{contagem.adaptada}</strong>.
          </p>
          <p>
            <SeloProcedencia procedencia="autoral" /> — questão escrita para este site no
            formato do exame. Atualmente: <strong>{contagem.autoral}</strong>.
          </p>
        </div>

        <div style={{ marginTop: 'var(--s-6)' }}>
          <Destaque variante="nota" titulo="Como incluir questões oficiais">
            <p>
              Baixe a prova que você quiser na página de Provas e Gabaritos do INEP e siga o
              passo a passo em <code>docs/ADICIONAR-QUESTOES.md</code>, no repositório do
              projeto. O item entra no banco com selo oficial e a referência correta de prova,
              ano e número — e o validador recusa o build se a referência faltar.
            </p>
          </Destaque>
        </div>
      </section>

      <section className="secao" aria-labelledby="fontes">
        <div className="secao-cabecalho">
          <h2 id="fontes" className="secao-titulo">
            Fontes oficiais
          </h2>
        </div>
        <div className="prose">
          {FONTES.map((f) => (
            <p key={f.url}>
              <a href={f.url} target="_blank" rel="noreferrer">
                {f.nome}
              </a>
              <br />
              <span style={{ color: 'var(--ink-2)', fontSize: 'var(--t-14)' }}>{f.o_que}</span>
            </p>
          ))}
        </div>
      </section>

      <section className="secao" aria-labelledby="limites">
        <div className="secao-cabecalho">
          <h2 id="limites" className="secao-titulo">
            Limites conhecidos
          </h2>
        </div>
        <div className="prose">
          <p>
            <strong>Este site não substitui as fontes oficiais.</strong> Ele organiza o estudo e
            explica conceitos; o edital, a matriz e a cartilha do participante continuam sendo a
            palavra final sobre regras do exame.
          </p>
          <p>
            <strong>O domínio exibido não é uma previsão de nota.</strong> É uma estimativa
            simplificada, construída a partir dos seus acertos e erros no site. A nota do ENEM
            usa TRI, que depende dos parâmetros reais de cada item — algo que nenhum simulado
            fora do INEP consegue reproduzir.
          </p>
          <p>
            <strong>A redação não recebe nota automática.</strong> O site entrega checklists
            estruturados pelos cinco critérios e o registro da sua autoavaliação. Um corretor
            automático feito por regras daria um número com aparência de autoridade e conteúdo
            duvidoso.
          </p>
          <p>
            <strong>O conteúdo escrito cobre o essencial, não tudo.</strong> São{' '}
            {ASSUNTOS.length} assuntos, {QUESTOES.length} questões e {SECOES_REDACAO.length}{' '}
            seções de redação. Os assuntos importantes que ainda não foram escritos aparecem
            listados na página de cada área, com esse estado declarado.
          </p>
        </div>
      </section>
    </div>
  );
}
