import React from 'react';
import { MonitorSection } from '../components/MonitorSection';
import { generateMockTokens } from '../utils/mockData';

export function InsiderBuys() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-mono mb-6">Insider Buys</h1>
      
      <MonitorSection
        title="Insider Buys"
        data={generateMockTokens(6, 'insider')}
      />
    </div>
  );
}