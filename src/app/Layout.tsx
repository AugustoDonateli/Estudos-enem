import type { ReactNode } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { useProgresso } from '@/lib/progresso';
import { revisoesVencidas } from '@/engine/revisao';
import { diasAteProva, hoje } from '@/engine/datas';
import s from './Layout.module.css';

const ITENS = [
  { para: '/', rotulo: 'Hoje', icone: 'hoje' },
  { para: '/areas', rotulo: 'Áreas', icone: 'areas' },
  { para: '/questoes', rotulo: 'Praticar', icone: 'praticar' },
  { para: '/revisao', rotulo: 'Revisão', icone: 'revisao' },
  { para: '/redacao', rotulo: 'Redação', icone: 'redacao' },
] as const;

export function Layout({ children }: { children: ReactNode }) {
  const { progresso, salvandoOk } = useProgresso();
  const { pathname } = useLocation();
  const dia = hoje();
  const pendentes = revisoesVencidas(progresso.assuntos, dia).length;
  const dias = diasAteProva(dia);

  return (
    <div className={s.shell}>
      <a className="skip-link" href="#conteudo">
        Pular para o conteúdo
      </a>

      {!salvandoOk && (
        <div className={s.aviso} role="status">
          <div className={s.avisoInterno}>
            Seu navegador está bloqueando o armazenamento local. O site funciona, mas o
            progresso desta sessão não será salvo.
          </div>
        </div>
      )}

      <header className={s.cabecalho}>
        <div className={s.cabecalhoInterno}>
          <Link to="/" className={s.marca}>
            Estudos ENEM
            <span className={s.contador}>
              {dias > 0 ? `${dias} ${dias === 1 ? 'dia' : 'dias'}` : 'prova em andamento'}
            </span>
          </Link>
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
        </div>
      </header>

      <main id="conteudo" className={s.conteudo}>
        {children}
      </main>

      <footer className={s.rodape}>
        <div className={s.rodapeInterno}>
          <span>
            Conteúdo autoral. Critérios do exame conforme INEP/MEC — veja a página de fontes.
          </span>
          <div className={s.rodapeLinks}>
            <Link to="/progresso">Progresso</Link>
            <Link to="/diagnostico">Diagnóstico</Link>
            <Link to="/sobre">Fontes</Link>
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
          const ativa =
            item.para === '/' ? pathname === '/' : pathname.startsWith(item.para);
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

/** Ícones próprios em SVG: cinco traços, sem biblioteca. */
function Icone({ nome }: { nome: 'hoje' | 'areas' | 'praticar' | 'revisao' | 'redacao' }) {
  const caminhos: Record<typeof nome, string> = {
    hoje: 'M4 7h16M4 7v12a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V7M4 7l1-3h14l1 3M9 13h6',
    areas: 'M4 5h7v7H4zM13 5h7v7h-7zM4 14h7v5H4zM13 14h7v5h-7z',
    praticar: 'M5 5h14v14H5zM9 10h6M9 14h4',
    revisao: 'M4 12a8 8 0 1 0 2.3-5.6M4 4v4h4',
    redacao: 'M5 19h14M6 15l9-9 3 3-9 9H6z',
  };
  return (
    <svg viewBox="0 0 24 24" className={s.tabIcone} aria-hidden="true">
      <path d={caminhos[nome]} />
    </svg>
  );
}
