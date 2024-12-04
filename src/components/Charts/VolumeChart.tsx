import React from 'react';
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { formatNumber } from '../../utils/format';

const mockData = Array.from({ length: 24 }, (_, i) => ({
  time: `${String(i).padStart(2, '0')}:00`,
  pumpfun: Math.random() * 100000 + 50000,
  raydium: Math.random() * 200000 + 100000,
}));

export function VolumeChart() {
  return (
    <div className="h-[300px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={mockData}>
          <defs>
            <linearGradient id="pumpfunGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#22c55e" stopOpacity={0.3} />
              <stop offset="95%" stopColor="#22c55e" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="raydiumGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3} />
              <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
            </linearGradient>
          </defs>
          
          <XAxis
            dataKey="time"
            tick={{ fill: '#22c55e' }}
            tickLine={{ stroke: '#22c55e' }}
            axisLine={{ stroke: '#22c55e' }}
          />
          
          <YAxis
            tick={{ fill: '#22c55e' }}
            tickLine={{ stroke: '#22c55e' }}
            axisLine={{ stroke: '#22c55e' }}
            tickFormatter={(value) => `${formatNumber(value)} SOL`}
          />
          
          <Tooltip
            contentStyle={{
              backgroundColor: 'rgba(0, 0, 0, 0.8)',
              border: '1px solid rgba(34, 197, 94, 0.3)',
              borderRadius: '4px',
            }}
            formatter={(value: number) => [`${formatNumber(value)} SOL`]}
          />
          
          <Area
            type="monotone"
            dataKey="pumpfun"
            stroke="#22c55e"
            fill="url(#pumpfunGradient)"
            name="PumpFun"
          />
          
          <Area
            type="monotone"
            dataKey="raydium"
            stroke="#3b82f6"
            fill="url(#raydiumGradient)"
            name="Raydium"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}