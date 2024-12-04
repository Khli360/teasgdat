import React from 'react';
import { MonitorSection } from '../components/MonitorSection';
import { generateMockTokens } from '../utils/mockData';

export function DexPrepaid() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-mono mb-6">DexPrepaid Tracker</h1>
      
      <MonitorSection
        title="DexPrepaid Tracker"
        data={generateMockTokens(6, 'dexprepaid')}
      />
      
      <MonitorSection
        title="DexPrepaid CTO Updates"
        data={generateMockTokens(6, 'dexprepaid')}
      />
    </div>
  );
}