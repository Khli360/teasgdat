import React from 'react';
import { ArrowUpRight, ArrowDownRight } from 'lucide-react';
import { formatNumber } from '../../utils/format';

interface MacroCardProps {
  title: string;
  value: number;
  change?: number;
  suffix?: string;
}

export function MacroCard({ title, value, change, suffix = '' }: MacroCardProps) {
  return (
    <div className="bg-black/50 border border-green-900/30 rounded-lg p-4 hover:border-green-500/50 transition-colors">
      <h3 className="text-green-600 text-sm mb-2">{title}</h3>
      <div className="flex items-baseline gap-2">
        <span className="text-2xl font-bold">{formatNumber(value)}{suffix}</span>
        {change !== undefined && (
          <div className={`flex items-center ${change >= 0 ? 'text-green-400' : 'text-red-400'}`}>
            {change >= 0 ? (
              <ArrowUpRight className="w-4 h-4" />
            ) : (
              <ArrowDownRight className="w-4 h-4" />
            )}
            <span className="text-sm">{Math.abs(change)}%</span>
          </div>
        )}
      </div>
    </div>
  );
}