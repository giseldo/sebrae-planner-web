
import React from 'react';
import PlanningSessionManager from '@/components/PlanningSessionManager';

const Dashboard = () => {
  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-sebrae-navy mb-2">
          Dashboard de Planejamento Estratégico
        </h1>
        <p className="text-gray-600">
          Gerencie suas sessões de planejamento estratégico e acompanhe o progresso dos seus objetivos.
        </p>
      </div>
      
      <PlanningSessionManager />
    </div>
  );
};

export default Dashboard;
