import type { TokenData } from '../types/token';

export const generateMockTokens = (count: number, monitorType: TokenData['monitorType']): TokenData[] => 
  Array.from({ length: count }, (_, i) => ({
    name: `TOKEN${i + 1}`,
    marketCap: 14001.61 + (i * 1000),
    insiders: Math.random() * 5,
    holders: 20 + (i * 5),
    topTen: 45 + (i * 2),
    volume: 14869.32 + (i * 2000),
    dev: Math.random() * 2,
    cto: Math.floor(Math.random() * 3),
    dexAds: Math.floor(Math.random() * 5),
    social: {
      telegram: i % 2 === 0 ? 'https://t.me/token' + (i + 1) : '',
      twitter: i % 3 === 0 ? '@token' + (i + 1) : '',
      website: i % 4 === 0 ? 'https://token' + (i + 1) + '.com' : '',
    },
    tags: ['PHO', 'BLX', 'TRO', 'DEX'].slice(0, Math.floor(Math.random() * 4) + 1),
    transactionSummary: `${(Math.random() * 50).toFixed(2)} SOL in ${Math.floor(Math.random() * 30)}txs purchased in under 2 minutes!`,
    timestamp: Date.now() - (i * 60000),
    appearances: Math.floor(Math.random() * 3) + 1,
    monitorType,
  }));