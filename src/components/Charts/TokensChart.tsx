import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const mockData = Array.from({ length: 24 }, (_, i) => ({
  time: `${String(i).padStart(2, '0')}:00`,
  created: Math.floor(Math.random() * 10),
  migrated: Math.floor(Math.random() * 5),
}));

export function TokensChart() {
  return (
    <div className="h-[300px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={mockData}>
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
          />
          
          <Tooltip
            contentStyle={{
              backgroundColor: 'rgba(0, 0, 0, 0.8)',
              border: '1px solid rgba(34, 197, 94, 0.3)',
              borderRadius: '4px',
            }}
          />
          
          <Bar
            dataKey="created"
            fill="#22c55e"
            name="Created"
            radius={[4, 4, 0, 0]}
          />
          
          <Bar
            dataKey="migrated"
            fill="#3b82f6"
            name="Migrated"
            radius={[4, 4, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}