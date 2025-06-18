
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Premissas from "./pages/Premissas";
import AnaliseSwot from "./pages/AnaliseSwot";
import PerspectiveFinanceira from "./pages/PerspectiveFinanceira";
import Graficos from "./pages/Graficos";
import Resultados from "./pages/Resultados";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Premissas />} />
            <Route path="/swot" element={<AnaliseSwot />} />
            <Route path="/estrategia" element={<PerspectiveFinanceira />} />
            <Route path="/perspectiva-financeira" element={<PerspectiveFinanceira />} />
            <Route path="/graficos" element={<Graficos />} />
            <Route path="/resultados" element={<Resultados />} />
            {/* Placeholder routes for remaining pages */}
            <Route path="/plano-acao" element={<div className="text-center text-2xl text-sebrae-navy">Plano de Ação - Em desenvolvimento</div>} />
            <Route path="/mapa-estrategico" element={<div className="text-center text-2xl text-sebrae-navy">Mapa Estratégico - Em desenvolvimento</div>} />
            <Route path="/perspectiva-clientes" element={<div className="text-center text-2xl text-sebrae-navy">Perspectiva de Clientes - Em desenvolvimento</div>} />
            <Route path="/perspectiva-processos" element={<div className="text-center text-2xl text-sebrae-navy">Perspectiva de Processos Internos - Em desenvolvimento</div>} />
            <Route path="/perspectiva-aprendizagem" element={<div className="text-center text-2xl text-sebrae-navy">Perspectiva de Aprendizagem - Em desenvolvimento</div>} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
