import { useCallback } from "react";
import { parseUnits } from "viem";
import { useAccount, useReadContracts } from "wagmi";
import { useNotifications } from "../../../../components/Notifications/NotificationProvider";
import { ARBITRUM_CONTRACTS_ABIS } from "../../../../utils/constants/abis/arbitrum";
import { ARBITRUM_CONTRACTS } from "../../../../utils/constants/contracts/contract-addresses";
import { NotificationSeverity } from "../../../../utils/types/notifications";
import { BaseToken } from "../../../../utils/types/tokens";
import { useWriteContract } from "../../../base/useWriteContract";
import { LiquidityObject, MintAmounts } from "./utils/types";

export interface AddLiquidityReturn {
  addLiquidity: (token0: BaseToken, token1: BaseToken) => Promise<boolean>;
  isLoading: boolean;
  isSuccess: boolean;
  mintAmounts: [MintAmounts] | undefined;
}

export const useAddLiquidity = (token0Amount: string, token1Amount: string): AddLiquidityReturn => {
  const { addNotification } = useNotifications();
  const { address } = useAccount();
  const { writeContract, isLoading, isSuccess } = useWriteContract();

  const shouldFetchMintAmounts = Boolean(
    token0Amount && token1Amount && token0Amount !== "0" && token1Amount !== "0",
  );

  const { data: mintAmounts } = useReadContracts({
    allowFailure: false,
    contracts: [
      {
        address: ARBITRUM_CONTRACTS.RESOLVER,
        abi: ARBITRUM_CONTRACTS_ABIS.RESOLVER,
        functionName: "getMintAmounts",
        args: [
          ARBITRUM_CONTRACTS.VAULT,
          parseUnits(token0Amount, 18),
          parseUnits(token1Amount, 18),
        ],
      },
    ],
    query: {
      enabled: shouldFetchMintAmounts,
    },
  }) as { data: [MintAmounts] | undefined };

  const addLiquidity = useCallback(
    async (token0: BaseToken, token1: BaseToken) => {
      try {
        if (!address || !mintAmounts?.[0]) {
          addNotification({
            text: "Something went wrong while fetching mint amounts, please try again.",
            severity: NotificationSeverity.ERROR,
          });
          return false;
        }

        if (token0.decimals === undefined || token1.decimals === undefined) {
          addNotification({
            text: "Something went wrong while fetching token decimals, please try again.",
            severity: NotificationSeverity.ERROR,
          });
          return false;
        }

        const amount0Max = parseUnits(token0Amount!, token0.decimals || 18);
        const amount1Max = parseUnits(token1Amount!, token1.decimals || 18);
        const amount0Min = (amount0Max * BigInt(95)) / BigInt(100); // 5% slippage
        const amount1Min = (amount1Max * BigInt(95)) / BigInt(100); // 5% slippage

        const params: LiquidityObject = {
          amount0Max,
          amount1Max,
          amount0Min,
          amount1Min,
          amountSharesMin: BigInt(0),
          vault: ARBITRUM_CONTRACTS.VAULT,
          receiver: address,
          gauge: "0x0000000000000000000000000000000000000000",
        };

        const hash = await writeContract({
          address: ARBITRUM_CONTRACTS.ROUTER,
          abi: ARBITRUM_CONTRACTS_ABIS.ROUTER,
          functionName: "addLiquidity",
          args: [params],
        });

        return Boolean(hash);
      } catch (error) {
        addNotification({
          text: "Failed to add liquidity",
          severity: NotificationSeverity.ERROR,
        });
        return false;
      }
    },
    [writeContract, token0Amount, token1Amount, address, mintAmounts, addNotification],
  );

  return {
    addLiquidity,
    isLoading,
    isSuccess,
    mintAmounts,
  };
};
