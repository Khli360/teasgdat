import React from 'react';
import { LayoutDashboard, LineChart, Volume2, TrendingUp, Wallet, Crown, ArrowRightLeft, Bell, Menu } from 'lucide-react';
import { cn } from '../utils/cn';

type PageType = 'dashboard' | 'marketcap' | 'volume' | 'bonding' | 'dexprepaid' | 'insider' | 'koth' | 'migrated';

interface SidebarProps {
  isCollapsed: boolean;
  setIsCollapsed: (value: boolean) => void;
  currentPage: PageType;
  setCurrentPage: (page: PageType) => void;
}

const menuItems = [
  { id: 'dashboard' as const, icon: LayoutDashboard, label: 'Dashboard' },
  { id: 'marketcap' as const, icon: LineChart, label: 'Market Cap Flow' },
  { id: 'volume' as const, icon: Volume2, label: 'Volume Monitor' },
  { id: 'bonding' as const, icon: TrendingUp, label: 'Bonding Curve' },
  { id: 'dexprepaid' as const, icon: Wallet, label: 'DexPrepaid' },
  { id: 'insider' as const, icon: Bell, label: 'Insider Buys' },
  { id: 'koth' as const, icon: Crown, label: 'KOTH Rise' },
  { id: 'migrated' as const, icon: ArrowRightLeft, label: 'Migrated Tokens' },
];

export function Sidebar({ isCollapsed, setIsCollapsed, currentPage, setCurrentPage }: SidebarProps) {
  return (
    <div className={cn(
      "flex flex-col h-screen bg-black border-r border-green-900/50 transition-all duration-300",
      isCollapsed ? "w-16" : "w-64"
    )}>
      <div className="flex items-center justify-between p-4 border-b border-green-900/50">
        <span className={cn(
          "text-green-500 font-mono transition-opacity",
          isCollapsed ? "opacity-0 hidden" : "opacity-100"
        )}>
          TG Dashboard
        </span>
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="p-2 hover:bg-green-900/20 rounded-lg"
        >
          <Menu className="w-5 h-5 text-green-500" />
        </button>
      </div>
      
      <nav className="flex-1 p-2">
        {menuItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setCurrentPage(item.id)}
            className={cn(
              "flex items-center gap-2 px-3 py-2 text-green-500 hover:bg-green-900/20 rounded-lg group w-full",
              currentPage === item.id && "bg-green-900/20"
            )}
          >
            <item.icon className="w-5 h-5 shrink-0" />
            <span className={cn(
              "font-mono transition-opacity text-left",
              isCollapsed ? "opacity-0 hidden" : "opacity-100"
            )}>
              {item.label}
            </span>
          </button>
        ))}
      </nav>
    </div>
  );
}