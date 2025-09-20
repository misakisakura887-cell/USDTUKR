import { getDefaultConfig } from '@rainbow-me/rainbowkit';
import {
  arbitrum,
  base,
  mainnet,
  optimism,
  polygon,
  sepolia,
  bsc,
} from 'wagmi/chains';

export const config = getDefaultConfig({
  appName: 'USDTUKR ETF',
  projectId: process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID || 'default-project-id',
  chains: [
    mainnet,
    polygon,
    optimism,
    arbitrum,
    base,
    bsc,
    ...(process.env.NODE_ENV === 'development' ? [sepolia] : []),
  ],
  ssr: true,
});

export const supportedChains = [
  {
    id: mainnet.id,
    name: 'Ethereum',
    symbol: 'ETH',
    icon: '⟠',
    color: '#627EEA',
  },
  {
    id: polygon.id,
    name: 'Polygon',
    symbol: 'MATIC',
    icon: '⬢',
    color: '#8247E5',
  },
  {
    id: bsc.id,
    name: 'BSC',
    symbol: 'BNB',
    icon: '◆',
    color: '#F3BA2F',
  },
  {
    id: arbitrum.id,
    name: 'Arbitrum',
    symbol: 'ARB',
    icon: '🔵',
    color: '#28A0F0',
  },
  {
    id: optimism.id,
    name: 'Optimism',
    symbol: 'OP',
    icon: '🔴',
    color: '#FF0420',
  },
  {
    id: base.id,
    name: 'Base',
    symbol: 'BASE',
    icon: '🟦',
    color: '#0052FF',
  },
];