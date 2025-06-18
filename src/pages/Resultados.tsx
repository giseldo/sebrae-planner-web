
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const Resultados = () => {
  const overallIndex = 101;
  const remainingMonths = 18;

  const perspectives = [
    {
      name: 'PERSPECTIVA FINANCEIRA',
      attendanceIndex: 85,
      completionIndex: 98,
      color: 'bg-yellow-200',
      goals: [
        { objective: 'Aumentar: Receitas', planned: 'R$ 650,00', achieved: 'R$ 300,00', percentage: '46,15%' },
        { objective: 'Aumentar: Lucratividade', planned: '1102,00', achieved: '1201,00', percentage: '108,98%' },
        { objective: 'Diminuir: Despesas', planned: '30,00%', achieved: '30,00%', percentage: '100,00%' },
        { objective: '0', planned: '0,00%', achieved: '0,00%', percentage: '0' },
        { objective: '0', planned: '0,00%', achieved: '0,00%', percentage: '0' }
      ]
    },
    {
      name: 'PERSPECTIVA DE CLIENTES',
      attendanceIndex: 116,
      completionIndex: 100,
      color: 'bg-green-200',
      goals: [
        { objective: 'Aumentar: Quantidade de vendas', planned: '63970,00%', achieved: '64035,00%', percentage: '100,10%' },
        { objective: 'Aumentar: Número de clientes', planned: '139,00', achieved: '219,00', percentage: '157,55%' },
        { objective: '0', planned: '13100,00%', achieved: '14000,00%', percentage: '106,87%' },
        { objective: '0', planned: '13100,00%', achieved: '14000,00%', percentage: '106,87%' },
        { objective: '0', planned: '13100,00%', achieved: '14000,00%', percentage: '106,87%' }
      ]
    },
    {
      name: 'PERSPECTIVA DE PROCESSOS INTERNOS',
      attendanceIndex: 111,
      completionIndex: 100,
      color: 'bg-green-200',
      goals: []
    },
    {
      name: 'PERSPECTIVA DE APRENDIZAGEM',
      attendanceIndex: 104,
      completionIndex: 98,
      color: 'bg-green-200',
      goals: []
    }
  ];

  return (
    <div className="space-y-6">
      {/* Header with overall statistics */}
      <div className="grid grid-cols-3 gap-4">
        <Card className="bg-green-500 text-white">
          <CardContent className="p-6 text-center">
            <div className="text-sm font-medium">ÍNDICE GERAL DO</div>
            <div className="text-sm font-medium">PLANEJAMENTO ESTRATÉGICO</div>
            <div className="text-6xl font-bold my-4">{overallIndex}%</div>
          </CardContent>
        </Card>
        
        <Card className="bg-sebrae-lightblue text-white">
          <CardContent className="p-6 text-center">
            <div className="text-sm font-medium mb-2">Parabéns! Suas metas estão sendo alcançadas</div>
            <div className="text-sm font-medium">e seu índice geral está acima de 100%.</div>
          </CardContent>
        </Card>
        
        <Card className="bg-sebrae-blue text-white">
          <CardContent className="p-6 text-center">
            <div className="text-lg font-bold">RESTAM {remainingMonths} MESES PARA CONCLUSÃO DO PLANEJAMENTO ESTRATÉGICO</div>
          </CardContent>
        </Card>
      </div>

      {/* Perspectives Grid */}
      <div className="grid grid-cols-2 gap-6">
        {perspectives.map((perspective, index) => (
          <Card key={index}>
            <CardContent className="p-6">
              <h3 className="text-lg font-bold text-sebrae-navy mb-4">{perspective.name}</h3>
              
              <div className="space-y-2 mb-4">
                <div className="flex justify-between items-center">
                  <span className="bg-sebrae-blue text-white px-3 py-1 text-sm font-medium">
                    ÍNDICE DE ATENDIMENTO DAS METAS PLANEJADAS:
                  </span>
                  <span className={`px-3 py-1 text-sm font-bold ${perspective.color}`}>
                    {perspective.attendanceIndex}%
                  </span>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="bg-sebrae-lightblue text-white px-3 py-1 text-sm font-medium">
                    ÍNDICE DE CONCLUSÃO DOS PLANOS DE AÇÃO:
                  </span>
                  <span className={`px-3 py-1 text-sm font-bold ${perspective.color}`}>
                    {perspective.completionIndex}%
                  </span>
                </div>
              </div>

              {perspective.goals.length > 0 && (
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-gray-300 text-xs">
                    <thead>
                      <tr>
                        <th className="border border-gray-300 bg-sebrae-lightblue text-white p-2">OBJETIVO</th>
                        <th className="border border-gray-300 bg-sebrae-blue text-white p-2">PLANEJADO</th>
                        <th className="border border-gray-300 bg-sebrae-blue text-white p-2">REALIZADO</th>
                        <th className="border border-gray-300 bg-sebrae-lightblue text-white p-2">ALCANCE DA META</th>
                      </tr>
                    </thead>
                    <tbody>
                      {perspective.goals.map((goal, goalIndex) => (
                        <tr key={goalIndex}>
                          <td className="border border-gray-300 p-2 bg-gray-50">{goal.objective}</td>
                          <td className="border border-gray-300 p-2 text-center">{goal.planned}</td>
                          <td className="border border-gray-300 p-2 text-center">{goal.achieved}</td>
                          <td className="border border-gray-300 p-2 text-center bg-green-100">{goal.percentage}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Resultados;
