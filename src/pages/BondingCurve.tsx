import React from 'react';
import { MonitorSection } from '../components/MonitorSection';
import { generateMockTokens } from '../utils/mockData';

export function BondingCurve() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-mono mb-6">Bonding Curve Watch</h1>
      
      <MonitorSection
        title="Bonding Curve Watch (50%)"
        data={generateMockTokens(6, 'bonding')}
      />
      
      <MonitorSection
        title="Bonding Curve Watch (75%)"
        data={generateMockTokens(6, 'bonding')}
      />
    </div>
  );
}