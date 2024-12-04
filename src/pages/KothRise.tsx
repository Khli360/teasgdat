import React from 'react';
import { MonitorSection } from '../components/MonitorSection';
import { generateMockTokens } from '../utils/mockData';

export function KothRise() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-mono mb-6">KOTH Rise</h1>
      
      <MonitorSection
        title="KOTH Rise"
        data={generateMockTokens(6, 'koth')}
      />
    </div>
  );
}