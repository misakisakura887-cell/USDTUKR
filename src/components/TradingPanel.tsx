'use client';

import { useState } from 'react';
import { useAccount, useBalance } from 'wagmi';

interface TradingPanelProps {
  currentPrice: number;
}

export function TradingPanel({ currentPrice }: TradingPanelProps) {
  const { address } = useAccount();
  const { data: balance } = useBalance({ address });
  
  const [activeTab, setActiveTab] = useState<'buy' | 'sell'>('buy');
  const [amount, setAmount] = useState('');
  const [orderType, setOrderType] = useState<'market' | 'limit'>('market');
  const [limitPrice, setLimitPrice] = useState('');

  const handleTrade = () => {
    // This would integrate with actual smart contracts
    console.log(`${activeTab} ${amount} UKR at ${orderType === 'market' ? 'market price' : `$${limitPrice}`}`);
    alert(`${activeTab.toUpperCase()} order submitted! (Demo mode)`);
  };

  const estimatedTotal = amount ? (parseFloat(amount) * currentPrice).toFixed(4) : '0.0000';

  return (
    <div className="space-y-6">
      {/* Trading Panel */}
      <div className="bg-gray-800/50 backdrop-blur-md rounded-2xl p-6 border border-gray-700/50">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-white">Trade UKR</h3>
          <div className="flex items-center space-x-1 bg-gray-700/50 rounded-lg p-1">
            <button
              onClick={() => setActiveTab('buy')}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                activeTab === 'buy'
                  ? 'bg-green-600 text-white'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              Buy
            </button>
            <button
              onClick={() => setActiveTab('sell')}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                activeTab === 'sell'
                  ? 'bg-red-600 text-white'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              Sell
            </button>
          </div>
        </div>

        {/* Order Type Selection */}
        <div className="mb-4">
          <div className="flex items-center space-x-1 bg-gray-700/50 rounded-lg p-1">
            <button
              onClick={() => setOrderType('market')}
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                orderType === 'market'
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              Market
            </button>
            <button
              onClick={() => setOrderType('limit')}
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                orderType === 'limit'
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              Limit
            </button>
          </div>
        </div>

        <div className="space-y-4">
          {/* Limit Price Input (only for limit orders) */}
          {orderType === 'limit' && (
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">
                Limit Price (USDT)
              </label>
              <input
                type="number"
                value={limitPrice}
                onChange={(e) => setLimitPrice(e.target.value)}
                placeholder={currentPrice.toFixed(4)}
                className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          )}

          {/* Amount Input */}
          <div>
            <label className="block text-sm font-medium text-gray-400 mb-2">
              Amount (UKR)
            </label>
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="0.0000"
              className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <div className="flex items-center justify-between mt-2">
              <span className="text-xs text-gray-400">
                Available: {balance ? parseFloat(balance.formatted).toFixed(4) : '0.0000'} {balance?.symbol || 'ETH'}
              </span>
              <div className="flex space-x-2">
                <button
                  onClick={() => setAmount((parseFloat(balance?.formatted || '0') * 0.25).toString())}
                  className="text-xs text-blue-400 hover:text-blue-300"
                >
                  25%
                </button>
                <button
                  onClick={() => setAmount((parseFloat(balance?.formatted || '0') * 0.5).toString())}
                  className="text-xs text-blue-400 hover:text-blue-300"
                >
                  50%
                </button>
                <button
                  onClick={() => setAmount((parseFloat(balance?.formatted || '0') * 0.75).toString())}
                  className="text-xs text-blue-400 hover:text-blue-300"
                >
                  75%
                </button>
                <button
                  onClick={() => setAmount(balance?.formatted || '0')}
                  className="text-xs text-blue-400 hover:text-blue-300"
                >
                  MAX
                </button>
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div className="bg-gray-700/30 rounded-lg p-4 space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-gray-400">Price</span>
              <span className="text-white">
                {orderType === 'market' 
                  ? `$${currentPrice.toFixed(4)}` 
                  : limitPrice 
                    ? `$${parseFloat(limitPrice).toFixed(4)}`
                    : `$${currentPrice.toFixed(4)}`
                } USDT
              </span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-400">Amount</span>
              <span className="text-white">{amount || '0.0000'} UKR</span>
            </div>
            <div className="flex justify-between text-sm border-t border-gray-600 pt-2">
              <span className="text-gray-400">Total</span>
              <span className="text-white font-medium">${estimatedTotal} USDT</span>
            </div>
          </div>

          {/* Trade Button */}
          <button
            onClick={handleTrade}
            disabled={!amount || parseFloat(amount) <= 0}
            className={`w-full py-4 rounded-lg font-semibold text-white transition-colors ${
              activeTab === 'buy'
                ? 'bg-green-600 hover:bg-green-700 disabled:bg-gray-600'
                : 'bg-red-600 hover:bg-red-700 disabled:bg-gray-600'
            } disabled:cursor-not-allowed`}
          >
            {activeTab === 'buy' ? 'Buy UKR' : 'Sell UKR'}
          </button>
        </div>
      </div>

      {/* Recent Orders */}
      <div className="bg-gray-800/50 backdrop-blur-md rounded-2xl p-6 border border-gray-700/50">
        <h4 className="text-lg font-semibold text-white mb-4">Recent Orders</h4>
        <div className="space-y-2">
          <div className="text-center text-gray-400 py-8">
            <p>No recent orders</p>
            <p className="text-sm mt-2">Your trading history will appear here</p>
          </div>
        </div>
      </div>
    </div>
  );
}