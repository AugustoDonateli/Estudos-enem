import { useEffect, useState, type ReactNode } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { useProgresso } from '@/lib/progresso';
import { revisoesVencidas } from '@/engine/revisao';
import { diasAteProva, hoje, PROVA_DIA_1, PROVA_DIA_2 } from '@/engine/datas';
import { Assinatura, Grafismo } from '@/design/Marca';
import { Tarja } from '@/design/Caderno';
import s from './Layout.module.css';

const ITENS = [
  { para: '/', rotulo: 'Hoje', icone: 'hoje' },
  { para: '/areas', rotulo: 'Áreas', icone: 'areas' },
  { para: '/questoes', rotulo: 'Praticar', icone: 'praticar' },
  { para: '/revisao', rotulo: 'Revisão', icone: 'revisao' },
  { para: '/redacao', rotulo: 'Redação', icone: 'redacao' },
] as const;

function diaCurto(iso: string) {
  const [, mes, dia] = iso.split('-');
  return `${dia}/${mes}`;
}

export function Layout({ children }: { children: ReactNode }) {
  const { progresso, salvandoOk } = useProgresso();
  const { pathname } = useLocation();
  const [rolado, setRolado] = useState(false);

  const dia = hoje();
  const pendentes = revisoesVencidas(progresso.assuntos, dia).length;
  const dias = diasAteProva(dia);

  // Sombra no cabeçalho só depois que a página sai do topo: dá profundidade
  // quando ela é útil e mantém o topo limpo quando não é.
  useEffect(() => {
    const aoRolar = () => setRolado(window.scrollY > 8);
    aoRolar();
    window.addEventListener('scroll', aoRolar, { passive: true });
    return () => window.removeEventListener('scroll', aoRolar);
  }, []);

  return (
    <div className={s.shell}>
      <a className="skip-link" href="#conteudo">
        Pular para o conteúdo
      </a>

      {!salvandoOk && (
        <div className={s.aviso} role="status">
          <div className={`container ${s.avisoInterno}`}>
            <svg
              width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor"
              strokeWidth="2" strokeLinecap="round" aria-hidden="true"
            >
              <path d="M12 9v4M12 17h.01M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0z" />
            </svg>
            Seu navegador está bloqueando o armazenamento local. O site funciona, mas o
            progresso desta sessão não será salvo.
          </div>
        </div>
      )}

      {/*
        Um cabeçalho só, não dois. Antes havia faixa institucional + cabeçalho +
        barra de navegação empilhados: 140px de altura para repetir que o site é
        sobre o ENEM — coisa que a marca já diz. Agora marca, navegação e
        contexto do exame dividem a mesma linha.
      */}
      <header className={`${s.cabecalho} ${rolado ? s.cabecalhoRolado : ''}`}>
        <div className={`container ${s.cabecalhoInterno}`}>
          <Assinatura />

          <nav className={s.navDesktop} aria-label="Navegação principal">
            {ITENS.map((item) => (
              <NavLink
                key={item.para}
                to={item.para}
                end={item.para === '/'}
                className={({ isActive }) => `${s.link} ${isActive ? s.linkAtivo : ''}`}
              >
                {item.rotulo}
                {item.para === '/revisao' && pendentes > 0 && (
                  <span className={s.selo} aria-label={`${pendentes} pendentes`}>
                    {pendentes}
                  </span>
                )}
              </NavLink>
            ))}
          </nav>

          {/* Contexto do exame: as duas datas, que são fato fixo, e a contagem.
              O hero da home repete a contagem em escala de cartaz; aqui ela é
              só referência persistente, e por isso vem em corpo pequeno. */}
          <div className={s.contexto}>
            <span className={s.contextoRotulo}>ENEM 2026</span>
            <span className={s.contextoDatas}>
              {diaCurto(PROVA_DIA_1)} <span aria-hidden="true">·</span> {diaCurto(PROVA_DIA_2)}
            </span>
            {dias > 0 && (
              <span className={s.contextoDias}>
                <strong>{dias}</strong> {dias === 1 ? 'dia' : 'dias'}
              </span>
            )}
          </div>
        </div>
      </header>

      <main id="conteudo" className={s.conteudo}>
        {children}
      </main>

      {/* Rodapé institucional ------------------------------------------- */}
      <footer className={s.rodape}>
        <Grafismo variante="diagonais" />
        <div className={`container ${s.rodapeInterno}`}>
          <div>
            <div className={s.rodapeAssinatura}>
              <Assinatura claro compacta />
            </div>
            <p className={s.rodapeTexto}>
              Projeto pessoal de estudo. Não é um site oficial do INEP nem do Ministério da
              Educação, e não tem vínculo com eles.
            </p>
          </div>
          <div>
            <p className={s.rodapeTitulo}>Estudar</p>
            <ul className={s.rodapeLista}>
              <li>
                <Link to="/">Plano de hoje</Link>
              </li>
              <li>
                <Link to="/areas">Áreas do exame</Link>
              </li>
              <li>
                <Link to="/questoes">Praticar questões</Link>
              </li>
              <li>
                <Link to="/redacao">Redação</Link>
              </li>
            </ul>
          </div>
          <div>
            <p className={s.rodapeTitulo}>Acompanhar</p>
            <ul className={s.rodapeLista}>
              <li>
                <Link to="/progresso">Meu progresso</Link>
              </li>
              <li>
                <Link to="/diagnostico">Diagnóstico</Link>
              </li>
              <li>
                <Link to="/revisao">Fila de revisão</Link>
              </li>
              <li>
                <Link to="/sobre">Fontes e procedência</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className={s.rodapeBase}>
          <div className={`container ${s.rodapeBaseInterno}`}>
            <span>
              Conteúdo autoral. Estrutura do exame, matriz de referência e critérios da redação
              conforme documentos do INEP/MEC — ver a página de fontes.
            </span>
            <Tarja valor="ENEM ESTUDOS" altura={18} className={s.rodapeTarja} />
          </div>
        </div>
      </footer>

      {/*
        Tab bar em vez de menu hambúrguer: o polegar vive na parte de baixo da
        tela, e esconder a navegação principal atrás de um toque extra é
        fricção pura num app que se usa em sessões de 30 minutos.
      */}
      <nav className={s.tabbar} aria-label="Navegação principal">
        {ITENS.map((item) => {
          const ativa = item.para === '/' ? pathname === '/' : pathname.startsWith(item.para);
          return (
            <NavLink
              key={item.para}
              to={item.para}
              end={item.para === '/'}
              className={`${s.tab} ${ativa ? s.tabAtiva : ''}`}
            >
              <Icone nome={item.icone} />
              {item.rotulo}
              {item.para === '/revisao' && pendentes > 0 && (
                <span className={s.tabSelo} aria-hidden="true">
                  {pendentes}
                </span>
              )}
            </NavLink>
          );
        })}
      </nav>
    </div>
  );
}

/** Ícones próprios: cinco traços, sem biblioteca. */
function Icone({ nome }: { nome: 'hoje' | 'areas' | 'praticar' | 'revisao' | 'redacao' }) {
  const caminhos: Record<typeof nome, string> = {
    hoje: 'M4 7h16M4 7v12a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V7M4 7l1-3h14l1 3M9 13h6',
    areas: 'M4 5h7v7H4zM13 5h7v7h-7zM4 14h7v5H4zM13 14h7v5h-7z',
    praticar: 'M5 4h14v16H5zM9 9h6M9 13h6M9 17h3',
    revisao: 'M4 12a8 8 0 1 0 2.3-5.6M4 4v4h4',
    redacao: 'M5 19h14M6 15l9-9 3 3-9 9H6z',
  };
  return (
    <svg viewBox="0 0 24 24" className={s.tabIcone} aria-hidden="true">
      <path d={caminhos[nome]} />
    </svg>
  );
}
