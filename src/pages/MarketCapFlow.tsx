import React from 'react';
import { MonitorSection } from '../components/MonitorSection';
import { generateMockTokens } from '../utils/mockData';

export function MarketCapFlow() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-mono mb-6">Market Cap Flow</h1>
      
      <MonitorSection
        title="Market Cap Flow (15-20k)"
        data={generateMockTokens(6, 'mcap')}
      />
      
      <MonitorSection
        title="Market Cap Flow (30-35k)"
        data={generateMockTokens(6, 'mcap')}
      />
      
      <MonitorSection
        title="Market Cap Flow (45-50k)"
        data={generateMockTokens(6, 'mcap')}
      />
    </div>
  );
}