import { Header } from '@/components/Header';
import { TradingDashboard } from '@/components/TradingDashboard';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900">
      <Header />
      <TradingDashboard />
    </main>
  );
}