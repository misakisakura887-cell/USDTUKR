import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';

const ConnectWalletButton = dynamic(() => import('../components/ConnectWalletButton'), { ssr: false });
const TradeChart = dynamic(() => import('../components/TradeChart'), { ssr: false });

export default function TradePage() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-[#1e2a45] via-[#243072] to-[#0f051d] flex flex-col items-center justify-center">
      {/* K线图美化区域 */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="w-full max-w-3xl rounded-2xl bg-[#141b33]/80 p-8 mb-8 shadow-2xl border border-cyan-600"
        style={{
          boxShadow: '0 0 32px #00d1ff55, 0 0 12px #0f051d',
          backdropFilter: 'blur(8px)'
        }}
      >
        <TradeChart />
      </motion.div>
      {/* 交易表单与按钮 */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 1 }}
        className="w-full max-w-xl rounded-2xl bg-[#0f051dcc] p-8 shadow-lg border border-cyan-500"
        style={{
          boxShadow: '0 0 16px #00d1ff66, 0 0 6px #0f051d',
          backdropFilter: 'blur(6px)'
        }}
      >
        <div className="mb-6 flex justify-center">
          <ConnectWalletButton />
        </div>
        <form className="space-y-6">
          <motion.input
            type="number"
            name="amount"
            placeholder="输入交易金额"
            className="w-full px-5 py-3 rounded-lg bg-[#192146] text-cyan-200 border border-cyan-400 focus:ring-2 focus:ring-cyan-300 text-xl transition-all"
            initial={{ boxShadow: '0 0 0px #00fff7' }}
            whileFocus={{ boxShadow: '0 0 12px #00fff7' }}
          />
          <motion.button
            whileHover={{ scale: 1.06, boxShadow: '0 0 16px #00fff7' }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            className="w-full py-3 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-600 text-white font-bold text-lg shadow-lg transition-all"
          >
            发起交易
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
}