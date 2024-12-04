import React from 'react';
import { ExternalLink, MessageCircle, Twitter, TrendingUp, TrendingDown } from 'lucide-react';
import { TokenData } from '../types/token';
import { cn } from '../utils/cn';
import { formatNumber } from '../utils/format';

interface TokenAlertProps {
  data: TokenData;
}

export function TokenAlert({ data }: TokenAlertProps) {
  const formattedTransactionSummary = data.transactionSummary?.replace(
    /(\d+(\.\d+)?)\s*SOL/,
    (match, amount) => `${amount} SOL`
  );

  return (
    <div className="bg-black/50 border border-green-900/30 rounded-lg p-4 hover:border-green-500/50 transition-colors">
      <div className="flex flex-col sm:flex-row justify-between items-start gap-3 mb-4">
        <div className="flex items-center gap-2 w-full sm:w-auto">
          <div className={cn(
            "w-2 h-2 rounded-full",
            data.monitorType === 'mcap' && "bg-purple-500",
            data.monitorType === 'volume' && "bg-green-500",
            data.monitorType === 'bonding' && "bg-blue-500",
            data.monitorType === 'dexprepaid' && "bg-yellow-500",
            data.monitorType === 'insider' && "bg-red-500",
            data.monitorType === 'koth' && "bg-orange-500",
            data.monitorType === 'migrated' && "bg-pink-500"
          )} />
          <div>
            <h3 className="text-green-500 font-mono font-bold flex items-center gap-2">
              {data.name}
              {data.appearances > 1 && (
                <span className="text-green-600 text-sm">×{data.appearances}</span>
              )}
            </h3>
            <div className="flex items-center gap-2 text-xs text-green-600">
              <span>{formatNumber(data.marketCap)} MC</span>
              <span>•</span>
              <span>{data.holders} holders</span>
            </div>
          </div>
        </div>

        <div className="flex gap-2 w-full sm:w-auto justify-end">
          {data.social.telegram && (
            <a href={data.social.telegram} target="_blank" rel="noopener noreferrer" 
               className="text-green-500 hover:text-green-400 bg-green-900/20 p-1.5 rounded">
              <MessageCircle className="w-4 h-4" />
            </a>
          )}
          {data.social.twitter && (
            <a href={`https://twitter.com/${data.social.twitter}`} target="_blank" rel="noopener noreferrer"
               className="text-green-500 hover:text-green-400 bg-green-900/20 p-1.5 rounded">
              <Twitter className="w-4 h-4" />
            </a>
          )}
          {data.social.website && (
            <a href={data.social.website} target="_blank" rel="noopener noreferrer"
               className="text-green-500 hover:text-green-400 bg-green-900/20 p-1.5 rounded">
              <ExternalLink className="w-4 h-4" />
            </a>
          )}
        </div>
      </div>

      {formattedTransactionSummary && (
        <div className="bg-green-900/10 rounded p-2 mb-4 flex items-center gap-2">
          {data.volume > 0 ? (
            <TrendingUp className="w-4 h-4 text-green-400 shrink-0" />
          ) : (
            <TrendingDown className="w-4 h-4 text-red-400 shrink-0" />
          )}
          <p className="text-sm text-green-400">{formattedTransactionSummary}</p>
        </div>
      )}

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-x-6 gap-y-2 text-sm mb-4">
        <div className="flex justify-between">
          <span className="text-green-600">Insiders:</span>
          <span>{data.insiders}%</span>
        </div>
        <div className="flex justify-between">
          <span className="text-green-600">Top 10:</span>
          <span>{data.topTen}%</span>
        </div>
        <div className="flex justify-between">
          <span className="text-green-600">Volume:</span>
          <span>{formatNumber(data.volume)}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-green-600">Dev:</span>
          <span>{data.dev}%</span>
        </div>
        <div className="flex justify-between">
          <span className="text-green-600">CTO:</span>
          <span>{data.cto}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-green-600">Dex Ads:</span>
          <span>{data.dexAds}</span>
        </div>
      </div>

      <div className="flex flex-wrap gap-1.5">
        {data.tags.map((tag) => (
          <span
            key={tag}
            className={cn(
              "px-2 py-0.5 rounded text-xs font-mono",
              tag === 'PHO' && "bg-blue-500/20 text-blue-400",
              tag === 'BLX' && "bg-purple-500/20 text-purple-400",
              tag === 'TRO' && "bg-yellow-500/20 text-yellow-400",
              tag === 'DEX' && "bg-green-500/20 text-green-400",
              tag === 'RUG' && "bg-red-500/20 text-red-400",
              tag === 'BRD' && "bg-orange-500/20 text-orange-400"
            )}
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}