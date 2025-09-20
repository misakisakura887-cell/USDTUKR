'use client';

import { useState, useEffect } from 'react';
import { useAccount } from 'wagmi';
import { KLineChart } from '@/components/KLineChart';
import { TradingPanel } from '@/components/TradingPanel';
import { TokenInfo } from '@/components/TokenInfo';

// Mock data for demonstration
const generateMockData = () => {
  const data = [];
  let basePrice = 100;
  const now = new Date();
  
  for (let i = 100; i >= 0; i--) {
    const time = new Date(now.getTime() - i * 60 * 1000).getTime() / 1000;
    const variation = (Math.random() - 0.5) * 4;
    const open = basePrice;
    const close = basePrice + variation;
    const high = Math.max(open, close) + Math.random() * 2;
    const low = Math.min(open, close) - Math.random() * 2;
    
    data.push({
      time: time.toString(),
      open,
      high,
      low,
      close,
      volume: Math.floor(Math.random() * 1000000),
    });
    
    basePrice = close;
  }
  
  return data;
};

export function TradingDashboard() {
  const { isConnected } = useAccount();
  const [chartData, setChartData] = useState(generateMockData());
  const [currentPrice, setCurrentPrice] = useState(100);
  const [priceChange, setPriceChange] = useState(0);

  useEffect(() => {
    // Simulate real-time price updates
    const interval = setInterval(() => {
      const lastPrice = chartData[chartData.length - 1]?.close || 100;
      const change = (Math.random() - 0.5) * 2;
      const newPrice = lastPrice + change;
      
      setCurrentPrice(newPrice);
      setPriceChange(change);
      
      // Add new data point
      const newDataPoint = {
        time: (Date.now() / 1000).toString(),
        open: lastPrice,
        high: Math.max(lastPrice, newPrice) + Math.random(),
        low: Math.min(lastPrice, newPrice) - Math.random(),
        close: newPrice,
        volume: Math.floor(Math.random() * 1000000),
      };
      
      setChartData(prev => [...prev.slice(-100), newDataPoint]);
    }, 5000);

    return () => clearInterval(interval);
  }, [chartData]);

  if (!isConnected) {
    return (
      <div className="container mx-auto px-4 py-12">
        <div className="text-center">
          <div className="max-w-md mx-auto bg-gray-800/50 backdrop-blur-md rounded-2xl p-8 border border-gray-700/50">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-2xl">🔗</span>
            </div>
            <h2 className="text-2xl font-bold text-white mb-4">Connect Your Wallet</h2>
            <p className="text-gray-400 mb-6">
              Connect your wallet to start trading UKR tokens and access the full ETF platform features.
            </p>
            <div className="space-y-4">
              <div className="flex items-center justify-center space-x-4 text-sm text-gray-400">
                <span>✓ Multi-chain support</span>
                <span>✓ Secure trading</span>
                <span>✓ Real-time charts</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-6">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Token Info Panel */}
        <div className="lg:col-span-1">
          <TokenInfo 
            price={currentPrice}
            priceChange={priceChange}
            symbol="UKR"
            name="Ukraine Token"
          />
        </div>

        {/* Chart Panel */}
        <div className="lg:col-span-2">
          <div className="bg-gray-800/50 backdrop-blur-md rounded-2xl p-6 border border-gray-700/50">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-semibold text-white">UKR/USDT</h3>
              <div className="flex items-center space-x-2">
                <button className="px-3 py-1 bg-blue-600 text-white rounded-lg text-sm hover:bg-blue-700 transition-colors">
                  1H
                </button>
                <button className="px-3 py-1 bg-gray-700 text-gray-300 rounded-lg text-sm hover:bg-gray-600 transition-colors">
                  4H
                </button>
                <button className="px-3 py-1 bg-gray-700 text-gray-300 rounded-lg text-sm hover:bg-gray-600 transition-colors">
                  1D
                </button>
                <button className="px-3 py-1 bg-gray-700 text-gray-300 rounded-lg text-sm hover:bg-gray-600 transition-colors">
                  1W
                </button>
              </div>
            </div>
            <KLineChart data={chartData} height={500} />
          </div>
        </div>

        {/* Trading Panel */}
        <div className="lg:col-span-1">
          <TradingPanel currentPrice={currentPrice} />
        </div>
      </div>

      {/* Market Stats */}
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-gray-800/50 backdrop-blur-md rounded-xl p-4 border border-gray-700/50">
          <h4 className="text-gray-400 text-sm mb-2">24h Volume</h4>
          <p className="text-xl font-semibold text-white">$2,456,789</p>
          <p className="text-green-400 text-sm">+12.5%</p>
        </div>
        <div className="bg-gray-800/50 backdrop-blur-md rounded-xl p-4 border border-gray-700/50">
          <h4 className="text-gray-400 text-sm mb-2">Market Cap</h4>
          <p className="text-xl font-semibold text-white">$156M</p>
          <p className="text-blue-400 text-sm">+5.2%</p>
        </div>
        <div className="bg-gray-800/50 backdrop-blur-md rounded-xl p-4 border border-gray-700/50">
          <h4 className="text-gray-400 text-sm mb-2">Total Supply</h4>
          <p className="text-xl font-semibold text-white">1,000,000</p>
          <p className="text-gray-400 text-sm">UKR</p>
        </div>
        <div className="bg-gray-800/50 backdrop-blur-md rounded-xl p-4 border border-gray-700/50">
          <h4 className="text-gray-400 text-sm mb-2">Circulating</h4>
          <p className="text-xl font-semibold text-white">750,000</p>
          <p className="text-gray-400 text-sm">75%</p>
        </div>
      </div>
    </div>
  );
}