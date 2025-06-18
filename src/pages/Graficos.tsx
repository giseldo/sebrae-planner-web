
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, LineChart, Line, ResponsiveContainer } from 'recharts';

const Graficos = () => {
  const planejadoRealizadoData = [
    { name: 'Aumentar: Know How da equipe', planejado: 5138.9, realizado: 1989 },
    { name: 'Aumentar: Satisfação interna', planejado: 89.8, realizado: 143.69 },
    { name: '0', planejado: 151, realizado: 140 },
    { name: '0 ', planejado: 151, realizado: 140 },
    { name: '0  ', planejado: 151, realizado: 140 }
  ];

  const prazosData = [
    { name: 'Vence esse mês', value: 0 },
    { name: 'Falta 1 mês', value: 0 },
    { name: 'Faltam 2 meses', value: 0 },
    { name: 'Faltam 3 ou mais meses', value: 1 },
    { name: 'Atrasados', value: 0 }
  ];

  const lineChartData = [
    { month: 'Jan', planejado: 50, realizado: 30 },
    { month: 'Fev', planejado: 200, realizado: 100 },
    { month: 'Mar', planejado: 400, realizado: 200 },
    { month: 'Abr', planejado: 500, realizado: 150 },
    { month: 'Mai', planejado: 500, realizado: 100 },
    { month: 'Jun', planejado: 500, realizado: 450 },
    { month: 'Jul', planejado: 500, realizado: 500 },
    { month: 'Ago', planejado: 500, realizado: 500 },
    { month: 'Set', planejado: 500, realizado: 500 },
    { month: 'Out', planejado: 500, realizado: 500 },
    { month: 'Nov', planejado: 500, realizado: 500 },
    { month: 'Dez', planejado: 500, realizado: 500 }
  ];

  const satisfacaoData = [
    { month: 'Jan', planejado: 0.88, realizado: 0.88 },
    { month: 'Fev', planejado: 0.90, realizado: 0.89 },
    { month: 'Mar', planejado: 0.92, realizado: 0.90 },
    { month: 'Abr', planejado: 0.94, realizado: 0.95 },
    { month: 'Mai', planejado: 0.90, realizado: 0.90 },
    { month: 'Jun', planejado: 0.90, realizado: 0.90 },
    { month: 'Jul', planejado: 0.90, realizado: 0.90 },
    { month: 'Ago', planejado: 0.90, realizado: 0.90 },
    { month: 'Set', planejado: 0.90, realizado: 0.90 },
    { month: 'Out', planejado: 0.90, realizado: 0.90 },
    { month: 'Nov', planejado: 0.90, realizado: 0.90 },
    { month: 'Dez', planejado: 0.90, realizado: 0.90 }
  ];

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h1 className="text-2xl font-bold text-sebrae-navy mb-2">
          Gráfico: <span className="bg-sebrae-lightblue text-white px-4 py-1 rounded">Perspectiva de Aprendizagem</span>
        </h1>
      </div>

      {/* Top Charts */}
      <div className="grid grid-cols-2 gap-6">
        {/* Planejado x Realizado */}
        <Card>
          <CardContent className="p-6">
            <h3 className="text-lg font-bold text-sebrae-navy mb-4">PLANEJADO x REALIZADO</h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={planejadoRealizadoData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" angle={-45} textAnchor="end" height={60} />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="planejado" fill="#e74c3c" name="Planejado" />
                <Bar dataKey="realizado" fill="#3498db" name="Realizado" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Prazos - Plano de Ação */}
        <Card>
          <CardContent className="p-6">
            <h3 className="text-lg font-bold text-sebrae-navy mb-4">PRAZOS - PLANO DE AÇÃO</h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={prazosData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="value" fill="#f39c12" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Bottom Charts */}
      <div className="grid grid-cols-3 gap-6">
        {/* Know How da equipe */}
        <Card>
          <CardContent className="p-6">
            <h3 className="text-sm font-bold text-sebrae-navy mb-4">ANO 1 - Aumentar: Know How da equipe</h3>
            <ResponsiveContainer width="100%" height={200}>
              <LineChart data={lineChartData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="planejado" stroke="#f39c12" name="Planejado" />
                <Line type="monotone" dataKey="realizado" stroke="#3498db" name="Realizado" />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Satisfação interna */}
        <Card>
          <CardContent className="p-6">
            <h3 className="text-sm font-bold text-sebrae-navy mb-4">ANO 1 - Aumentar: Satisfação interna</h3>
            <ResponsiveContainer width="100%" height={200}>
              <LineChart data={satisfacaoData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis domain={[0.8, 1]} />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="planejado" stroke="#f39c12" name="Planejado" />
                <Line type="monotone" dataKey="realizado" stroke="#3498db" name="Realizado" />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Empty chart */}
        <Card>
          <CardContent className="p-6">
            <h3 className="text-sm font-bold text-sebrae-navy mb-4">ANO 1 - 0</h3>
            <ResponsiveContainer width="100%" height={200}>
              <LineChart data={[]}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis />
                <YAxis />
                <Tooltip />
                <Legend />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Graficos;
