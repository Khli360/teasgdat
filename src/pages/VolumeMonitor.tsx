import React from 'react';
import { MonitorSection } from '../components/MonitorSection';
import { generateMockTokens } from '../utils/mockData';

export function VolumeMonitor() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-mono mb-6">Volume Monitor</h1>
      
      <MonitorSection
        title="Volume Monitor"
        data={generateMockTokens(6, 'volume')}
      />
    </div>
  );
}