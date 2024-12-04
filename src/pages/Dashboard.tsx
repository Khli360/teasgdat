import React from 'react';
import { MacroStats } from '../components/MacroStats/MacroStats';
import { VolumeChart } from '../components/Charts/VolumeChart';
import { TokensChart } from '../components/Charts/TokensChart';
import { DashboardCard } from '../components/DashboardCard';

// Mock macro statistics
const macroStats = {
  pumpfunVolume: {
    value: 125678,
    change: 12.5,
  },
  raydiumVolume: {
    value: 456789,
    change: -5.3,
  },
  tokensCreated: {
    value: 42,
    change: 23.5,
  },
  tokensMigrated: {
    value: 15,
  },
};

export function Dashboard() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-mono mb-6">Dashboard Overview</h1>
      
      <MacroStats data={macroStats} />
      
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        <DashboardCard title="24h Volume Trends">
          <VolumeChart />
        </DashboardCard>
        
        <DashboardCard title="Token Activity">
          <TokensChart />
        </DashboardCard>
      </div>
    </div>
  );
}