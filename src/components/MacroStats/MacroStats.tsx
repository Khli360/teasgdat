import React from 'react';
import { MacroCard } from './MacroCard';
import { DashboardCard } from '../DashboardCard';

interface MacroStatsData {
  pumpfunVolume: {
    value: number;
    change: number;
  };
  raydiumVolume: {
    value: number;
    change: number;
  };
  tokensCreated: {
    value: number;
    change: number;
  };
  tokensMigrated: {
    value: number;
  };
}

interface MacroStatsProps {
  data: MacroStatsData;
}

export function MacroStats({ data }: MacroStatsProps) {
  return (
    <DashboardCard title="Macro Statistics" className="xl:col-span-2">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <MacroCard
          title="PumpFun Volume"
          value={data.pumpfunVolume.value}
          change={data.pumpfunVolume.change}
          suffix=" SOL"
        />
        <MacroCard
          title="Raydium Volume"
          value={data.raydiumVolume.value}
          change={data.raydiumVolume.change}
          suffix=" SOL"
        />
        <MacroCard
          title="Tokens Created (24h)"
          value={data.tokensCreated.value}
          change={data.tokensCreated.change}
        />
        <MacroCard
          title="Tokens Migrated (24h)"
          value={data.tokensMigrated.value}
        />
      </div>
    </DashboardCard>
  );
}