import { Metadata } from 'next';
import './globals.css';
import { Providers } from '@/components/providers';

export const metadata: Metadata = {
  title: 'USDTUKR - Web3 ETF Platform',
  description: 'A modern Web3 ETF platform for UKR Token trading with multi-chain support',
  keywords: ['Web3', 'ETF', 'UKR Token', 'DeFi', 'Trading', 'Multi-chain'],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-sans">
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}