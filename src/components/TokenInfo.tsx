'use client';

interface TokenInfoProps {
  price: number;
  priceChange: number;
  symbol: string;
  name: string;
}

export function TokenInfo({ price, priceChange, symbol, name }: TokenInfoProps) {
  const isPositive = priceChange >= 0;
  const changePercent = ((priceChange / price) * 100).toFixed(2);

  return (
    <div className="space-y-6">
      {/* Token Price Card */}
      <div className="bg-gray-800/50 backdrop-blur-md rounded-2xl p-6 border border-gray-700/50">
        <div className="flex items-center space-x-3 mb-4">
          <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-blue-500 rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-lg">🇺🇦</span>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white">{symbol}</h3>
            <p className="text-gray-400 text-sm">{name}</p>
          </div>
        </div>
        
        <div className="space-y-2">
          <div className="flex items-baseline space-x-2">
            <span className="text-3xl font-bold text-white">
              ${price.toFixed(4)}
            </span>
            <span className="text-gray-400 text-sm">USDT</span>
          </div>
          
          <div className={`flex items-center space-x-1 ${isPositive ? 'text-green-400' : 'text-red-400'}`}>
            <span className="text-lg">
              {isPositive ? '↗' : '↘'}
            </span>
            <span className="font-medium">
              {isPositive ? '+' : ''}{priceChange.toFixed(4)}
            </span>
            <span className="text-sm">
              ({isPositive ? '+' : ''}{changePercent}%)
            </span>
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="bg-gray-800/50 backdrop-blur-md rounded-2xl p-6 border border-gray-700/50">
        <h4 className="text-lg font-semibold text-white mb-4">Quick Stats</h4>
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <span className="text-gray-400">24h High</span>
            <span className="text-white font-medium">${(price * 1.05).toFixed(4)}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-400">24h Low</span>
            <span className="text-white font-medium">${(price * 0.95).toFixed(4)}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-400">24h Volume</span>
            <span className="text-white font-medium">$2.4M</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-400">Market Cap</span>
            <span className="text-white font-medium">$156M</span>
          </div>
        </div>
      </div>

      {/* Token Info */}
      <div className="bg-gray-800/50 backdrop-blur-md rounded-2xl p-6 border border-gray-700/50">
        <h4 className="text-lg font-semibold text-white mb-4">Token Info</h4>
        <div className="space-y-3">
          <div>
            <span className="text-gray-400 text-sm">Contract Address</span>
            <p className="text-white text-sm font-mono bg-gray-700/50 px-2 py-1 rounded mt-1">
              0x1234...5678
            </p>
          </div>
          <div>
            <span className="text-gray-400 text-sm">Network</span>
            <p className="text-white text-sm mt-1">Multi-chain</p>
          </div>
          <div>
            <span className="text-gray-400 text-sm">Total Supply</span>
            <p className="text-white text-sm mt-1">1,000,000 UKR</p>
          </div>
        </div>
      </div>
    </div>
  );
}