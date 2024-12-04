import React, { useState } from 'react';
import { Sidebar } from './components/Sidebar';
import { Dashboard } from './pages/Dashboard';
import { MarketCapFlow } from './pages/MarketCapFlow';
import { VolumeMonitor } from './pages/VolumeMonitor';
import { BondingCurve } from './pages/BondingCurve';
import { DexPrepaid } from './pages/DexPrepaid';
import { InsiderBuys } from './pages/InsiderBuys';
import { KothRise } from './pages/KothRise';
import { MigratedTokens } from './pages/MigratedTokens';

type PageType = 'dashboard' | 'marketcap' | 'volume' | 'bonding' | 'dexprepaid' | 'insider' | 'koth' | 'migrated';

function App() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [currentPage, setCurrentPage] = useState<PageType>('dashboard');

  const renderPage = () => {
    switch (currentPage) {
      case 'marketcap':
        return <MarketCapFlow />;
      case 'volume':
        return <VolumeMonitor />;
      case 'bonding':
        return <BondingCurve />;
      case 'dexprepaid':
        return <DexPrepaid />;
      case 'insider':
        return <InsiderBuys />;
      case 'koth':
        return <KothRise />;
      case 'migrated':
        return <MigratedTokens />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="flex h-screen bg-black text-green-500">
      <Sidebar
        isCollapsed={isCollapsed}
        setIsCollapsed={setIsCollapsed}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
      
      <main className={`flex-1 p-6 transition-all duration-300 ${isCollapsed ? 'ml-16' : 'ml-64'} overflow-auto`}>
        <div className="max-w-7xl mx-auto">
          {renderPage()}
        </div>
      </main>
    </div>
  );
}

export default App;