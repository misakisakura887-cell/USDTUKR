# USDTUKR - Web3 ETF Platform 🇺🇦

A modern, responsive Web3 ETF (Exchange-Traded Fund) platform built for UKR Token trading with comprehensive multi-chain support, real-time price charts, and intuitive user experience.

## 🚀 Features

### Core Functionality
- **Multi-Chain Support**: Ethereum, Polygon, BSC, Arbitrum, Optimism, and Base
- **Wallet Integration**: Seamless connection with 300+ wallets via RainbowKit
- **Real-Time Trading**: Live K-line charts with candlestick patterns
- **UKR Token Trading**: Buy/sell UKR tokens with market and limit orders
- **Responsive Design**: Mobile-first, fully responsive across all devices
- **Modern UI**: Dark theme with glassmorphism design elements

### Technical Features
- **Next.js 14**: Latest App Router with server-side rendering
- **TypeScript**: Full type safety and developer experience
- **Tailwind CSS**: Utility-first styling with custom design system
- **Wagmi v2**: Type-safe Ethereum development
- **Lightweight Charts**: High-performance, professional trading charts
- **Smart Contract Integration**: Direct on-chain interactions

## 🛠 Tech Stack

- **Frontend**: Next.js 14, React 19, TypeScript
- **Styling**: Tailwind CSS, Custom CSS
- **Web3**: Wagmi, RainbowKit, Viem
- **Charts**: Lightweight Charts (TradingView library)
- **State Management**: TanStack React Query
- **Development**: ESLint, PostCSS, Autoprefixer

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/misakisakura887-cell/USDTUKR.git
   cd USDTUKR
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```
   
   Edit `.env.local` and add your configuration:
   ```bash
   NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID=your_project_id
   # Add other environment variables as needed
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🌐 Deployment

### Vercel (Recommended)

1. **Connect your repository to Vercel**
   - Visit [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Configure environment variables in Vercel dashboard

2. **Environment Variables Required for Production**
   ```
   NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID
   NEXT_PUBLIC_ALCHEMY_API_KEY_MAINNET
   NEXT_PUBLIC_UKR_CONTRACT_MAINNET
   ```

3. **Deploy**
   ```bash
   npm run build
   ```

### Alternative Deployment Options
- **Netlify**: Compatible with static export
- **Railway**: Full-stack deployment
- **Docker**: Container-based deployment

## 🔧 Configuration

### WalletConnect Setup
1. Visit [WalletConnect Cloud](https://cloud.walletconnect.com)
2. Create a new project
3. Copy the Project ID to your `.env.local`

### Network Configuration
Supported networks are configured in `src/lib/wagmi.ts`:
- Ethereum Mainnet
- Polygon
- Binance Smart Chain
- Arbitrum
- Optimism
- Base
- Sepolia (testnet, development only)

### Smart Contract Integration
Configure your UKR token contract addresses in `.env.local`:
```bash
NEXT_PUBLIC_UKR_CONTRACT_MAINNET=0x...
NEXT_PUBLIC_UKR_CONTRACT_POLYGON=0x...
NEXT_PUBLIC_UKR_CONTRACT_BSC=0x...
```

## 📱 Usage

### Connecting a Wallet
1. Click "Connect Wallet" in the header
2. Choose from 300+ supported wallets
3. Approve the connection in your wallet

### Trading UKR Tokens
1. **Market Orders**: Buy/sell at current market price
2. **Limit Orders**: Set specific price targets
3. **Real-time Charts**: Monitor price movements with K-line charts
4. **Portfolio Tracking**: View your holdings and trading history

### Multi-Chain Trading
1. Switch networks using the chain selector
2. Bridge tokens between supported chains
3. Access chain-specific features and liquidity

## 🏗 Project Structure

```
src/
├── app/                 # Next.js App Router
│   ├── layout.tsx      # Root layout with providers
│   ├── page.tsx        # Main trading page
│   └── globals.css     # Global styles
├── components/         # React components
│   ├── Header.tsx      # Navigation and wallet connection
│   ├── TradingDashboard.tsx  # Main trading interface
│   ├── KLineChart.tsx  # Real-time price charts
│   ├── TradingPanel.tsx # Buy/sell interface
│   ├── TokenInfo.tsx   # Token statistics
│   └── providers.tsx   # Web3 and query providers
├── lib/                # Configuration and utilities
│   └── wagmi.ts        # Web3 configuration
├── hooks/              # Custom React hooks
├── types/              # TypeScript definitions
├── utils/              # Utility functions
└── styles/             # CSS modules and styles
```

## 🔐 Security Features

- **Non-custodial**: Your keys, your crypto
- **Smart Contract Auditing**: Verified contract interactions
- **Secure RPC**: Premium endpoint providers
- **No Private Key Storage**: Client-side wallet management only

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

- **Documentation**: Check this README and inline code comments
- **Issues**: Report bugs via GitHub Issues
- **Community**: Join our community discussions

## 🎯 Roadmap

- [ ] **Advanced Trading Features**
  - [ ] Stop-loss orders
  - [ ] Take-profit orders
  - [ ] Order book integration

- [ ] **Portfolio Management**
  - [ ] Yield farming integration
  - [ ] Staking rewards
  - [ ] Portfolio analytics

- [ ] **Social Features**
  - [ ] Trading signals
  - [ ] Community insights
  - [ ] Social trading

- [ ] **Advanced Analytics**
  - [ ] Technical indicators
  - [ ] Market sentiment analysis
  - [ ] Risk assessment tools

## 🌟 Acknowledgments

- **TradingView**: Lightweight Charts library
- **RainbowKit**: Excellent wallet connection UX
- **Wagmi**: Type-safe Ethereum development
- **Next.js**: Outstanding React framework
- **Tailwind CSS**: Utility-first CSS framework

---

**Built with ❤️ for the Web3 community and Ukraine 🇺🇦**