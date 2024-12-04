import React from 'react';
import { MonitorSection } from '../components/MonitorSection';
import { generateMockTokens } from '../utils/mockData';

export function MigratedTokens() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-mono mb-6">Migrated Tokens</h1>
      
      <MonitorSection
        title="Migrated Tokens"
        data={generateMockTokens(6, 'migrated')}
      />
    </div>
  );
}