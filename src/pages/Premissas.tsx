
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';

const Premissas = () => {
  const [businessData, setBusinessData] = useState({
    empresa: 'Empresa ABCDE',
    segmento: 'Comércio'
  });

  const [missionVision, setMissionVision] = useState({
    missao: 'Contribuir para melhor gestão das empresas.',
    visao: 'Ser pioneira em gestão empresarial.',
    planejamento: '1 ano'
  });

  const [values, setValues] = useState(['Ética', 'Comprometimento', 'Honestidade']);

  const perspectives = [
    {
      name: 'PERSPECTIVA FINANCEIRA',
      directions: [
        { action: 'Aumentar', indicator: 'Receitas' },
        { action: 'Aumentar', indicator: 'Lucratividade' },
        { action: 'Diminuir', indicator: 'Despesas' }
      ]
    },
    {
      name: 'PERSPECTIVA DE CLIENTES',
      directions: [
        { action: 'Aumentar', indicator: 'Quantidade de vendas' },
        { action: 'Aumentar', indicator: 'Número de clientes' }
      ]
    },
    {
      name: 'PERSPECTIVA DE PROCESSOS INTERNOS',
      directions: [
        { action: 'Aumentar', indicator: 'Capacidade de atendimentos' },
        { action: 'Aumentar', indicator: '' }
      ]
    },
    {
      name: 'PERSPECTIVA DE APRENDIZAGEM',
      directions: [
        { action: 'Aumentar', indicator: 'Know How da equipe' },
        { action: 'Aumentar', indicator: 'Satisfação interna' }
      ]
    }
  ];

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-sebrae-navy mb-2">Premissas</h1>
      </div>

      {/* Company Info */}
      <Card>
        <CardContent className="p-6">
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Empresa</label>
              <input
                type="text"
                value={businessData.empresa}
                onChange={(e) => setBusinessData({...businessData, empresa: e.target.value})}
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-sebrae-blue"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Segmento da Empresa</label>
              <input
                type="text"
                value={businessData.segmento}
                onChange={(e) => setBusinessData({...businessData, segmento: e.target.value})}
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-sebrae-blue"
              />
            </div>
          </div>

          <div className="bg-blue-50 p-4 rounded mb-6">
            <p className="text-sm text-sebrae-navy">
              Planejamento estratégico é a chave para posicionar sua empresa no mercado e conquistar seu espaço.
              Clique no botão abaixo e saiba mais.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Mission and Vision */}
      <Card>
        <CardContent className="p-6">
          <div className="grid grid-cols-3 gap-4 mb-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">PLANEAR PARA QUANTOS ANOS?</label>
              <select
                value={missionVision.planejamento}
                onChange={(e) => setMissionVision({...missionVision, planejamento: e.target.value})}
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-sebrae-blue"
              >
                <option>1 ano</option>
                <option>2 anos</option>
                <option>3 anos</option>
                <option>5 anos</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-sm font-medium text-white bg-sebrae-navy px-3 py-2 mb-2">MISSÃO</label>
              <textarea
                value={missionVision.missao}
                onChange={(e) => setMissionVision({...missionVision, missao: e.target.value})}
                className="w-full px-3 py-2 border border-gray-300 rounded h-20 focus:outline-none focus:ring-2 focus:ring-sebrae-blue"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-white bg-sebrae-navy px-3 py-2 mb-2">VISÃO</label>
              <textarea
                value={missionVision.visao}
                onChange={(e) => setMissionVision({...missionVision, visao: e.target.value})}
                className="w-full px-3 py-2 border border-gray-300 rounded h-20 focus:outline-none focus:ring-2 focus:ring-sebrae-blue"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-white bg-sebrae-navy px-3 py-2 mb-2">
              INSIRA OS VALORES ABAIXO (UM VALOR POR CAMPO)
            </label>
            <div className="space-y-2">
              {values.map((value, index) => (
                <input
                  key={index}
                  type="text"
                  value={value}
                  onChange={(e) => {
                    const newValues = [...values];
                    newValues[index] = e.target.value;
                    setValues(newValues);
                  }}
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-sebrae-blue"
                />
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Strategic Perspectives */}
      <div className="bg-sebrae-navy text-white p-4 text-center">
        <h2 className="font-bold">
          DEFINA OS INDICADORES PARA CADA PERSPECTIVA E INFORME A MELHOR DIREÇÃO PARA O INDICADOR (AUMENTAR OU DIMINUIR).
        </h2>
      </div>

      <div className="grid grid-cols-2 gap-6">
        {perspectives.map((perspective, index) => (
          <Card key={index}>
            <CardContent className="p-4">
              <div className="bg-sebrae-lightblue text-white p-3 text-center font-bold mb-4">
                PERSPECTIVA {index + 1}
              </div>
              <div className="bg-sebrae-blue text-white p-2 text-center font-bold mb-2">
                {perspective.name}
              </div>
              <div className="space-y-2">
                <div className="grid grid-cols-2 gap-2 font-bold text-sm">
                  <div className="bg-gray-100 p-2 text-center">DIREÇÃO</div>
                  <div className="bg-gray-100 p-2 text-center">INDICADOR</div>
                </div>
                {perspective.directions.map((direction, dirIndex) => (
                  <div key={dirIndex} className="grid grid-cols-2 gap-2">
                    <div className={`p-2 text-center text-sm ${
                      direction.action === 'Aumentar' ? 'bg-green-200' : 
                      direction.action === 'Diminuir' ? 'bg-red-200' : 'bg-gray-100'
                    }`}>
                      {direction.action}
                    </div>
                    <div className="p-2 text-sm bg-gray-50">
                      {direction.indicator}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Premissas;
