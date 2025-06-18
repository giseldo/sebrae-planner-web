
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';

const AnaliseSwot = () => {
  const [swotData, setSwotData] = useState({
    forcas: [
      { factor: 'Relação entre os funcionários', attendance: 'Atende razoavelmente', importance: 'Muito importante', score: 5, type: 'FORÇA' },
      { factor: 'Qualificação da equipe', attendance: 'Atende totalmente', importance: 'Muito importante', score: 10, type: 'FORÇA' }
    ],
    fraquezas: [],
    oportunidades: [
      { factor: 'Situação do Mercado', moment: 'Desfavorável', importance: 'Muito importante', score: -10, type: 'AMEAÇA' },
      { factor: 'Quantidade de concorrentes', moment: 'Favorável', importance: 'Importante', score: 8, type: 'OPORTUNIDADE' }
    ],
    ameacas: []
  });

  const [swotMatrix, setSwotMatrix] = useState({
    forcas: 15,
    fraquezas: 0,
    oportunidades: 8,
    ameacas: 10
  });

  const addSwotItem = (category: string) => {
    const newItem = {
      factor: '',
      attendance: category === 'forcas' || category === 'fraquezas' ? 'Atende razoavelmente' : '',
      moment: category === 'oportunidades' || category === 'ameacas' ? 'Favorável' : '',
      importance: 'Importante',
      score: 0,
      type: category.toUpperCase()
    };
    
    setSwotData(prev => ({
      ...prev,
      [category]: [...prev[category], newItem]
    }));
  };

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-sebrae-navy mb-2">Análise SWOT</h1>
      </div>

      {/* SWOT Matrix Visual */}
      <div className="grid grid-cols-2 gap-4 max-w-2xl mx-auto">
        <Card className="bg-sebrae-lightblue text-white">
          <CardContent className="p-6 text-center">
            <div className="text-4xl font-bold mb-2">{swotMatrix.forcas}</div>
            <div className="text-xl font-bold">FORÇA</div>
          </CardContent>
        </Card>
        
        <Card className="bg-sebrae-lightblue text-white">
          <CardContent className="p-6 text-center">
            <div className="text-4xl font-bold mb-2">{swotMatrix.fraquezas}</div>
            <div className="text-xl font-bold">FRAQUEZA</div>
          </CardContent>
        </Card>
        
        <Card className="bg-sebrae-lightblue text-white">
          <CardContent className="p-6 text-center">
            <div className="text-4xl font-bold mb-2">{swotMatrix.oportunidades}</div>
            <div className="text-xl font-bold">OPORTUNIDADE</div>
          </CardContent>
        </Card>
        
        <Card className="bg-sebrae-lightblue text-white">
          <CardContent className="p-6 text-center">
            <div className="text-4xl font-bold mb-2">{swotMatrix.ameacas}</div>
            <div className="text-xl font-bold">AMEAÇA</div>
          </CardContent>
        </Card>
      </div>

      {/* SWOT Analysis Chart */}
      <div className="bg-gray-200 p-8 rounded-lg max-w-md mx-auto">
        <div className="relative w-full h-64 bg-white rounded">
          {/* Chart axes */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-full h-px bg-gray-400"></div>
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="h-full w-px bg-gray-400"></div>
          </div>
          
          {/* Labels */}
          <div className="absolute top-2 left-1/2 transform -translate-x-1/2 text-xs font-bold text-sebrae-blue">FORÇA</div>
          <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 text-xs font-bold text-sebrae-blue">OPORTUNIDADE</div>
          <div className="absolute left-2 top-1/2 transform -translate-y-1/2 text-xs font-bold text-sebrae-blue">AMEAÇA</div>
          <div className="absolute right-2 top-1/2 transform -translate-y-1/2 text-xs font-bold text-sebrae-blue">FRAQUEZA</div>
          
          {/* SWOT points */}
          <div className="absolute top-16 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-orange-400 rounded-full flex items-center justify-center text-white text-xs font-bold">
            15
          </div>
          <div className="absolute top-1/2 left-16 transform -translate-y-1/2 w-8 h-8 bg-orange-400 rounded-full flex items-center justify-center text-white text-xs font-bold">
            10
          </div>
          <div className="absolute top-1/2 right-1/2 transform translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-orange-400 rounded-full flex items-center justify-center text-white text-xs font-bold">
            0
          </div>
          <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-orange-400 rounded-full flex items-center justify-center text-white text-xs font-bold">
            8
          </div>
        </div>
      </div>

      {/* SWOT Tables */}
      <div className="grid grid-cols-2 gap-8">
        {/* Internal Factors */}
        <Card>
          <CardContent className="p-6">
            <div className="bg-sebrae-navy text-white p-3 text-center font-bold mb-4">
              FATORES INTERNOS
            </div>
            <div className="text-sm mb-4 text-center">
              INSIRA OS FATORES INTERNO E FAÇA A ANÁLISE POSTERIORMENTE
            </div>
            
            <div className="space-y-4">
              <div className="grid grid-cols-5 gap-2 text-xs font-bold bg-gray-100 p-2">
                <div>ATENDIMENTO</div>
                <div>IMPORTÂNCIA</div>
                <div>PONTUAÇÃO</div>
                <div>ANÁLISE</div>
                <div></div>
              </div>
              
              {swotData.forcas.map((item, index) => (
                <div key={index} className="grid grid-cols-5 gap-2 text-xs">
                  <input
                    type="text"
                    value={item.factor}
                    placeholder="Relação entre os funcionários"
                    className="p-1 border border-gray-300 rounded text-xs"
                  />
                  <select className="p-1 border border-gray-300 rounded text-xs">
                    <option>Atende razoavelmente</option>
                    <option>Atende totalmente</option>
                    <option>Não atende</option>
                  </select>
                  <select className="p-1 border border-gray-300 rounded text-xs">
                    <option>Muito importante</option>
                    <option>Importante</option>
                    <option>Pouco importante</option>
                  </select>
                  <div className={`p-1 text-center ${item.score > 0 ? 'bg-red-300' : 'bg-green-300'}`}>
                    {item.score}
                  </div>
                  <div className={`p-1 text-center text-xs ${item.type === 'FORÇA' ? 'bg-green-300' : 'bg-red-300'}`}>
                    {item.type}
                  </div>
                </div>
              ))}
              
              <button 
                onClick={() => addSwotItem('forcas')}
                className="w-full bg-sebrae-lightblue text-white p-2 rounded hover:bg-sebrae-blue transition-colors"
              >
                Adicionar Fator Interno
              </button>
            </div>
          </CardContent>
        </Card>

        {/* External Factors */}
        <Card>
          <CardContent className="p-6">
            <div className="bg-sebrae-navy text-white p-3 text-center font-bold mb-4">
              FATORES EXTERNOS
            </div>
            <div className="text-sm mb-4 text-center">
              INSIRA OS FATORES EXTERNOS E FAÇA A ANÁLISE POSTERIORMENTE
            </div>
            
            <div className="space-y-4">
              <div className="grid grid-cols-5 gap-2 text-xs font-bold bg-gray-100 p-2">
                <div>MOMENTO</div>
                <div>IMPORTÂNCIA</div>
                <div>PONTUAÇÃO</div>
                <div>ANÁLISE</div>
                <div></div>
              </div>
              
              {swotData.oportunidades.map((item, index) => (
                <div key={index} className="grid grid-cols-5 gap-2 text-xs">
                  <input
                    type="text"
                    value={item.factor}
                    placeholder="Situação do Mercado"
                    className="p-1 border border-gray-300 rounded text-xs"
                  />
                  <select className="p-1 border border-gray-300 rounded text-xs">
                    <option>Desfavorável</option>
                    <option>Favorável</option>
                    <option>Neutro</option>
                  </select>
                  <select className="p-1 border border-gray-300 rounded text-xs">
                    <option>Muito importante</option>
                    <option>Importante</option>
                    <option>Pouco importante</option>
                  </select>
                  <div className={`p-1 text-center ${item.score < 0 ? 'bg-red-300' : 'bg-green-300'}`}>
                    {item.score}
                  </div>
                  <div className={`p-1 text-center text-xs ${item.type === 'AMEAÇA' ? 'bg-red-300' : 'bg-green-300'}`}>
                    {item.type}
                  </div>
                </div>
              ))}
              
              <button 
                onClick={() => addSwotItem('oportunidades')}
                className="w-full bg-sebrae-lightblue text-white p-2 rounded hover:bg-sebrae-blue transition-colors"
              >
                Adicionar Fator Externo
              </button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AnaliseSwot;
