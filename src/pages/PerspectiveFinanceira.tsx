
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';

const PerspectiveFinanceira = () => {
  const [financialData, setFinancialData] = useState([
    {
      meta: 'Aumentar: Receitas',
      type: 'R$',
      planejado: [100, 200, 300, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      realizado: [50, 100, 150, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      percentual: [-50, -50, -50, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    },
    {
      meta: 'Aumentar: Lucratividade',
      type: 'Número',
      planejado: [100, 200, 300, 500, 0, 0, 0, 0, 0, 0, 2, 1102],
      realizado: [150, 250, 350, 450, 0, 0, 0, 0, 0, 0, 1, 1201],
      percentual: [50, 25, 17, -10, 0, 0, 0, 0, 0, 0, -50, 8.98]
    },
    {
      meta: 'Diminuir: Despesas',
      type: 'Porcentagem',
      planejado: [10, 20, 0, 0, 0, 0, 0, 0, 0, 0, 0, 30],
      realizado: [10, 20, 0, 0, 0, 0, 0, 0, 0, 0, 0, 30],
      percentual: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    }
  ]);

  const months = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'];

  const updateValue = (metaIndex: number, type: 'planejado' | 'realizado', monthIndex: number, value: number) => {
    setFinancialData(prev => {
      const newData = [...prev];
      newData[metaIndex][type][monthIndex] = value;
      
      // Calculate percentage
      const planned = newData[metaIndex].planejado[monthIndex];
      const actual = newData[metaIndex].realizado[monthIndex];
      if (planned > 0) {
        newData[metaIndex].percentual[monthIndex] = Math.round(((actual - planned) / planned) * 100);
      }
      
      return newData;
    });
  };

  const getPercentageColor = (percentage: number) => {
    if (percentage > 0) return 'bg-green-200';
    if (percentage < 0) return 'bg-red-200';
    return 'bg-gray-100';
  };

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h1 className="text-2xl font-bold text-sebrae-navy mb-2">
          Estratégia: <span className="bg-sebrae-lightblue text-white px-4 py-1 rounded">Perspectiva Financeira</span>
        </h1>
      </div>

      <Card>
        <CardContent className="p-6 overflow-x-auto">
          <div className="bg-sebrae-lightblue text-white p-3 text-center font-bold mb-4">
            ANO 1
          </div>
          
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <thead>
              <tr>
                <th className="border border-gray-300 bg-sebrae-navy text-white p-2 text-left">Meta</th>
                <th className="border border-gray-300 bg-sebrae-navy text-white p-2"></th>
                {months.map(month => (
                  <th key={month} className="border border-gray-300 bg-sebrae-blue text-white p-2">{month}</th>
                ))}
                <th className="border border-gray-300 bg-sebrae-blue text-white p-2">Parcial</th>
                <th className="border border-gray-300 bg-sebrae-blue text-white p-2">Total</th>
              </tr>
            </thead>
            
            <tbody>
              {financialData.map((meta, metaIndex) => (
                <React.Fragment key={metaIndex}>
                  <tr>
                    <td rowSpan={3} className="border border-gray-300 bg-sebrae-navy text-white p-2 font-bold">
                      {meta.meta}
                    </td>
                    <td className="border border-gray-300 bg-gray-100 p-2 font-medium">{meta.type}</td>
                    {months.map((_, monthIndex) => (
                      <td key={monthIndex} className="border border-gray-300 bg-sebrae-blue text-white p-2 text-center">
                        {meta.type}
                      </td>
                    ))}
                    <td className="border border-gray-300 bg-sebrae-blue text-white p-2 text-center">{meta.type}</td>
                    <td className="border border-gray-300 bg-sebrae-blue text-white p-2 text-center">Total</td>
                  </tr>
                  
                  <tr>
                    <td className="border border-gray-300 bg-gray-100 p-2">Planejado</td>
                    {meta.planejado.slice(0, 12).map((value, monthIndex) => (
                      <td key={monthIndex} className="border border-gray-300 p-2">
                        <input
                          type="number"
                          value={value}
                          onChange={(e) => updateValue(metaIndex, 'planejado', monthIndex, Number(e.target.value))}
                          className="w-full border-0 bg-transparent text-center focus:outline-none"
                        />
                      </td>
                    ))}
                    <td className="border border-gray-300 p-2 text-center bg-gray-100">
                      {meta.planejado.slice(0, 12).reduce((sum, val) => sum + val, 0)}
                    </td>
                    <td className="border border-gray-300 p-2 text-center bg-gray-100">
                      {meta.planejado.slice(0, 12).reduce((sum, val) => sum + val, 0)}
                    </td>
                  </tr>
                  
                  <tr>
                    <td className="border border-gray-300 bg-gray-100 p-2">Realizado</td>
                    {meta.realizado.slice(0, 12).map((value, monthIndex) => (
                      <td key={monthIndex} className="border border-gray-300 p-2">
                        <input
                          type="number"
                          value={value}
                          onChange={(e) => updateValue(metaIndex, 'realizado', monthIndex, Number(e.target.value))}
                          className="w-full border-0 bg-transparent text-center focus:outline-none"
                        />
                      </td>
                    ))}
                    <td className="border border-gray-300 p-2 text-center bg-gray-100">
                      {meta.realizado.slice(0, 12).reduce((sum, val) => sum + val, 0)}
                    </td>
                    <td className="border border-gray-300 p-2 text-center bg-gray-100">
                      {meta.realizado.slice(0, 12).reduce((sum, val) => sum + val, 0)}
                    </td>
                  </tr>
                  
                  <tr>
                    <td className="border border-gray-300 bg-gray-100 p-2">Percentual</td>
                    {meta.percentual.slice(0, 12).map((value, monthIndex) => (
                      <td key={monthIndex} className={`border border-gray-300 p-2 text-center ${getPercentageColor(value)}`}>
                        {value !== 0 ? `${value}%` : '0%'}
                      </td>
                    ))}
                    <td className="border border-gray-300 p-2 text-center bg-green-200">
                      {meta.percentual.slice(0, 12).reduce((sum, val, index) => {
                        if (meta.planejado[index] > 0) {
                          return sum + val;
                        }
                        return sum;
                      }, 0) / meta.planejado.filter(val => val > 0).length || 0}%
                    </td>
                    <td className="border border-gray-300 p-2 text-center bg-green-200">
                      {meta.percentual.slice(0, 12).reduce((sum, val, index) => {
                        if (meta.planejado[index] > 0) {
                          return sum + val;
                        }
                        return sum;
                      }, 0) / meta.planejado.filter(val => val > 0).length || 0}%
                    </td>
                  </tr>
                  
                  {metaIndex < financialData.length - 1 && <tr><td colSpan={15} className="border-0 p-2"></td></tr>}
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </CardContent>
      </Card>
    </div>
  );
};

export default PerspectiveFinanceira;
