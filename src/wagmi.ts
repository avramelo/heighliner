import { getDefaultConfig } from "@rainbow-me/rainbowkit";
import { http } from "wagmi";
import { arbitrum, base, mainnet, optimism, polygon, sepolia } from "wagmi/chains";

const arbitrumRpcUrl = process.env.NEXT_PUBLIC_ARBITRUM_RPC_URL;

export const config = getDefaultConfig({
  appName: "RainbowKit App",
  projectId: "YOUR_PROJECT_ID",
  chains: [
    mainnet,
    polygon,
    optimism,
    arbitrum,
    base,
    sepolia,
    ...(process.env.NEXT_PUBLIC_ENABLE_TESTNETS === "true" ? [arbitrum] : []),
  ],
  transports: {
    [arbitrum.id]: http(arbitrumRpcUrl),
  },
  ssr: true,
});
