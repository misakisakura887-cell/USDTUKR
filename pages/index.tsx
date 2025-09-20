import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';
import UkraineDigitMap from '../components/UkraineDigitMap';
import IndustryGlitchTags from '../components/IndustryGlitchTags';

const ConnectWalletButton = dynamic(() => import('../components/ConnectWalletButton'), { ssr: false });

export default function Home() {
  return (
    <div className="relative w-full min-h-screen bg-gradient-to-br from-[#1e2a45] via-[#243072] to-[#0f051d] overflow-hidden flex flex-col items-center justify-center">
      {/* 科技感背景 */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <svg width="100%" height="100%">
          <defs>
            <radialGradient id="radial" cx="50%" cy="50%" r="70%" fx="50%" fy="50%">
              <stop offset="0%" stopColor="#00d1ff" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#0f051d" stopOpacity="0.9" />
            </radialGradient>
          </defs>
          <rect width="100%" height="100%" fill="url(#radial)" />
        </svg>
      </div>
      {/* 乌克兰数字地图 + 毛刺行业标签 */}
      <motion.div
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="relative z-10 w-full flex items-center justify-center"
        style={{ height: 420 }}
      >
        <UkraineDigitMap />
        <IndustryGlitchTags />
      </motion.div>
      {/* 钱包连接按钮 */}
      <motion.div
        initial={{ y: 60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.7, duration: 1 }}
        className="relative z-10 mt-12"
      >
        <ConnectWalletButton />
      </motion.div>
      {/* 标题 */}
      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="z-10 text-3xl md:text-5xl font-extrabold text-cyan-200 drop-shadow-lg tracking-wide text-center mt-8"
      >
        USDTUKR WEB3 ETF
      </motion.h1>
    </div>
  );
}
