import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ProvedorProgresso } from '@/lib/progresso';
import { Layout } from './Layout';
import { Hoje } from '@/features/hoje/Hoje';
import { Carregando } from './Carregando';
import { NaoEncontrado } from './NaoEncontrado';

/*
 * A tela "Hoje" é a única carregada no bundle inicial: é onde o aluno entra
 * todo dia e onde o tempo até a primeira ação importa. O resto é dividido por
 * rota, e o conteúdo pesado (assuntos, questões) só chega quando é aberto.
 */
const Areas = lazy(() => import('@/features/areas/Areas').then((m) => ({ default: m.Areas })));
const Area = lazy(() => import('@/features/areas/Area').then((m) => ({ default: m.Area })));
const Assunto = lazy(() => import('@/features/assunto/Assunto').then((m) => ({ default: m.Assunto })));
const Praticar = lazy(() => import('@/features/questao/Praticar').then((m) => ({ default: m.Praticar })));
const QuestaoPagina = lazy(() =>
  import('@/features/questao/QuestaoPagina').then((m) => ({ default: m.QuestaoPagina })),
);
const Revisao = lazy(() => import('@/features/revisao/Revisao').then((m) => ({ default: m.Revisao })));
const Redacao = lazy(() => import('@/features/redacao/Redacao').then((m) => ({ default: m.Redacao })));
const SecaoRedacaoPagina = lazy(() =>
  import('@/features/redacao/SecaoRedacaoPagina').then((m) => ({ default: m.SecaoRedacaoPagina })),
);
const Diagnostico = lazy(() =>
  import('@/features/diagnostico/Diagnostico').then((m) => ({ default: m.Diagnostico })),
);
const Progresso = lazy(() => import('@/features/progresso/Progresso').then((m) => ({ default: m.Progresso })));
const Sobre = lazy(() => import('@/features/sobre/Sobre').then((m) => ({ default: m.Sobre })));

export function App() {
  return (
    <ProvedorProgresso>
      <BrowserRouter basename={import.meta.env.BASE_URL}>
        <Layout>
          <Suspense fallback={<Carregando />}>
            <Routes>
              <Route path="/" element={<Hoje />} />
              <Route path="/areas" element={<Areas />} />
              <Route path="/area/:areaId" element={<Area />} />
              <Route path="/assunto/:topicId" element={<Assunto />} />
              <Route path="/questoes" element={<Praticar />} />
              <Route path="/questao/:questionId" element={<QuestaoPagina />} />
              <Route path="/revisao" element={<Revisao />} />
              <Route path="/redacao" element={<Redacao />} />
              <Route path="/redacao/:secaoId" element={<SecaoRedacaoPagina />} />
              <Route path="/diagnostico" element={<Diagnostico />} />
              <Route path="/progresso" element={<Progresso />} />
              <Route path="/sobre" element={<Sobre />} />
              <Route path="*" element={<NaoEncontrado />} />
            </Routes>
          </Suspense>
        </Layout>
      </BrowserRouter>
    </ProvedorProgresso>
  );
}
