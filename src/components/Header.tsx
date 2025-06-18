
import React from 'react';

const Header = () => {
  return (
    <header className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-4">
            <h1 className="text-2xl font-bold text-sebrae-navy">
              Planejamento <span className="text-white bg-sebrae-lightblue px-3 py-1 rounded">Estratégico</span>
            </h1>
          </div>
          <div className="flex items-center space-x-4">
            <div className="bg-sebrae-blue text-white px-4 py-2 rounded font-medium">
              INFO Planilhas
            </div>
            <div className="bg-sebrae-blue text-white px-6 py-2 rounded font-bold text-lg">
              SEBRAE
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
