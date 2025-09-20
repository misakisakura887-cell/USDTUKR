'use client';

import { ConnectButton } from '@rainbow-me/rainbowkit';
import { useAccount, useChainId } from 'wagmi';
import { supportedChains } from '@/lib/wagmi';

export function Header() {
  const { address, isConnected } = useAccount();
  const chainId = useChainId();

  const currentChain = supportedChains.find((c) => c.id === chainId);

  return (
    <header className="bg-gray-900/80 backdrop-blur-md border-b border-gray-700/50 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">U</span>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-white">USDTUKR</h1>
                <p className="text-gray-400 text-sm">Web3 ETF Platform</p>
              </div>
            </div>
            
            {isConnected && currentChain && (
              <div className="hidden md:flex items-center space-x-2 bg-gray-800/50 px-3 py-2 rounded-lg">
                <span className="text-lg">{currentChain.icon}</span>
                <span className="text-sm text-gray-300">{currentChain.name}</span>
              </div>
            )}
          </div>

          <nav className="hidden md:flex items-center space-x-6">
            <a href="#trading" className="text-gray-300 hover:text-white transition-colors">
              Trading
            </a>
            <a href="#portfolio" className="text-gray-300 hover:text-white transition-colors">
              Portfolio
            </a>
            <a href="#analytics" className="text-gray-300 hover:text-white transition-colors">
              Analytics
            </a>
          </nav>

          <div className="flex items-center space-x-4">
            <ConnectButton 
              chainStatus="icon"
              accountStatus="address"
              showBalance={false}
            />
          </div>
        </div>

        {isConnected && (
          <div className="mt-4 md:hidden">
            <div className="flex items-center justify-center space-x-6 py-2">
              <a href="#trading" className="text-gray-300 hover:text-white transition-colors text-sm">
                Trading
              </a>
              <a href="#portfolio" className="text-gray-300 hover:text-white transition-colors text-sm">
                Portfolio
              </a>
              <a href="#analytics" className="text-gray-300 hover:text-white transition-colors text-sm">
                Analytics
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}