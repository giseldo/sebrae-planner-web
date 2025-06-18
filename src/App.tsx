
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./hooks/useAuth";
import Layout from "./components/Layout";
import Auth from "./pages/Auth";
import Dashboard from "./pages/Dashboard";
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
        <AuthProvider>
          <Routes>
            <Route path="/auth" element={<Auth />} />
            <Route path="/" element={<Layout><Dashboard /></Layout>} />
            <Route path="/premissas" element={<Layout><Premissas /></Layout>} />
            <Route path="/swot" element={<Layout><AnaliseSwot /></Layout>} />
            <Route path="/estrategia" element={<Layout><PerspectiveFinanceira /></Layout>} />
            <Route path="/perspectiva-financeira" element={<Layout><PerspectiveFinanceira /></Layout>} />
            <Route path="/graficos" element={<Layout><Graficos /></Layout>} />
            <Route path="/resultados" element={<Layout><Resultados /></Layout>} />
            {/* Placeholder routes for remaining pages */}
            <Route path="/plano-acao" element={<Layout><div className="text-center text-2xl text-sebrae-navy">Plano de Ação - Em desenvolvimento</div></Layout>} />
            <Route path="/mapa-estrategico" element={<Layout><div className="text-center text-2xl text-sebrae-navy">Mapa Estratégico - Em desenvolvimento</div></Layout>} />
            <Route path="/perspectiva-clientes" element={<Layout><div className="text-center text-2xl text-sebrae-navy">Perspectiva de Clientes - Em desenvolvimento</div></Layout>} />
            <Route path="/perspectiva-processos" element={<Layout><div className="text-center text-2xl text-sebrae-navy">Perspectiva de Processos Internos - Em desenvolvimento</div></Layout>} />
            <Route path="/perspectiva-aprendizagem" element={<Layout><div className="text-center text-2xl text-sebrae-navy">Perspectiva de Aprendizagem - Em desenvolvimento</div></Layout>} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
