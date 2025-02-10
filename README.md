# Heighliner DeFi App

Heighliner is a decentralized application for managing liquidity pools on Arbitrum. It allows users to add liquidity to Arrakis pools and earn rewards.

## Features

- Connect wallet using RainbowKit
- Sign in with Ethereum (SIWE) authentication
- Add liquidity to Arrakis Liquidity pools
- Real-time token price calculations
- Support for multiple token pairs
- Slippage protection
- User-friendly interface

## Tech Stack

- **Frontend**: Next.js, TypeScript, TailwindCSS
- **Web3**: Wagmi, RainbowKit, Viem
- **Authentication**: NextAuth.js with SIWE
- **State Management**: React Query
- **Styling**: TailwindCSS

## Getting Started

1. Clone the repository
2. Install dependencies:

```bash
npm install
```

3. Create `.env.local` file with required environment variables:

```env
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your_secret
NEXT_PUBLIC_ARBITRUM_RPC_URL=your_arbitrum_rpc_url
```

4. Run the development server:

```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) with your browser

## Usage

1. Connect your wallet using the "Connect Wallet" button
2. Sign in with your Ethereum wallet
3. Enter the amounts of tokens you want to add to the liquidity pool
4. Approve token spending if needed
5. Click "Add Liquidity" to complete the transaction

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

[MIT](LICENSE)

## Learn More

To learn more about this stack, take a look at the following resources:

- [RainbowKit Documentation](https://rainbowkit.com) - Learn how to customize your wallet connection flow.
- [wagmi Documentation](https://wagmi.sh) - Learn how to interact with Ethereum.
- [Next.js Documentation](https://nextjs.org/docs) - Learn how to build a Next.js application.

You can check out [the RainbowKit GitHub repository](https://github.com/rainbow-me/rainbowkit) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out the [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
