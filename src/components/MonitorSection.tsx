import React from 'react';
import { TokenAlert } from './TokenAlert';
import { TokenData } from '../types/token';
import { DashboardCard } from './DashboardCard';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface MonitorSectionProps {
  title: string;
  data: TokenData[];
  className?: string;
}

export function MonitorSection({ title, data, className }: MonitorSectionProps) {
  const [page, setPage] = React.useState(0);
  const itemsPerPage = 6;
  const totalPages = Math.ceil(data.length / itemsPerPage);
  const displayedData = data.slice(page * itemsPerPage, (page + 1) * itemsPerPage);

  return (
    <DashboardCard title={title} className={className}>
      <div className="space-y-4">
        <div className="grid gap-4">
          {displayedData.map((token, index) => (
            <TokenAlert key={`${token.name}-${index}`} data={token} />
          ))}
        </div>
        
        {totalPages > 1 && (
          <div className="flex justify-center gap-2 mt-6">
            <button
              onClick={() => setPage(Math.max(0, page - 1))}
              disabled={page === 0}
              className="p-1 hover:bg-green-900/20 rounded disabled:opacity-50"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            
            {Array.from({ length: totalPages }).map((_, index) => (
              <button
                key={index}
                onClick={() => setPage(index)}
                className={cn(
                  "w-8 h-8 rounded font-mono text-sm flex items-center justify-center",
                  page === index
                    ? "bg-green-500/20 text-green-400"
                    : "hover:bg-green-500/10 text-green-600"
                )}
              >
                {index + 1}
              </button>
            ))}
            
            <button
              onClick={() => setPage(Math.min(totalPages - 1, page + 1))}
              disabled={page === totalPages - 1}
              className="p-1 hover:bg-green-900/20 rounded disabled:opacity-50"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        )}
      </div>
    </DashboardCard>
  );
}