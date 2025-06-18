
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navigation = () => {
  const location = useLocation();
  
  const navItems = [
    { name: 'Premissas', path: '/' },
    { name: 'Análise SWOT', path: '/swot' },
    { name: 'Estratégia', path: '/estrategia' },
    { name: 'Plano de Ação', path: '/plano-acao' },
    { name: 'Resultados', path: '/resultados' },
    { name: 'Gráficos', path: '/graficos' },
    { name: 'Mapa Estratégico', path: '/mapa-estrategico' }
  ];

  const perspectiveItems = [
    { name: 'Perspectiva Financeira', path: '/perspectiva-financeira' },
    { name: 'Perspectiva de Clientes', path: '/perspectiva-clientes' },
    { name: 'Perspectiva de Processos Internos', path: '/perspectiva-processos' },
    { name: 'Perspectiva de Aprendizagem', path: '/perspectiva-aprendizagem' }
  ];

  return (
    <nav className="bg-gray-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="bg-sebrae-lightblue text-white px-4 py-2 rounded-tl rounded-tr font-medium">
            MENU
          </div>
          <div className="flex space-x-1 py-2">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-4 py-2 rounded border border-gray-300 text-sm font-medium transition-colors
                  ${location.pathname === item.path 
                    ? 'bg-sebrae-blue text-white' 
                    : 'bg-white text-gray-700 hover:bg-gray-50'
                  }`}
              >
                {item.name}
              </Link>
            ))}
          </div>
          <div className="bg-sebrae-lightblue text-white px-4 py-2 rounded font-medium">
            IMPRESSÃO
          </div>
        </div>
        
        {/* Sub navigation for perspectives */}
        <div className="flex justify-center space-x-1 py-2">
          {perspectiveItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`px-3 py-1 rounded border border-gray-300 text-xs font-medium transition-colors
                ${location.pathname === item.path 
                  ? 'bg-sebrae-blue text-white' 
                  : 'bg-white text-gray-600 hover:bg-gray-50'
                }`}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
