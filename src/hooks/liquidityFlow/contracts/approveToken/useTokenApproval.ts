import { useCallback } from "react";
import { parseUnits } from "viem";
import { useNotifications } from "../../../../components/Notifications/NotificationProvider";
import { ERC20_ABI } from "../../../../utils/constants/abis/erc20";
import { ARBITRUM_CONTRACTS } from "../../../../utils/constants/contracts/contract-addresses";
import { NotificationSeverity } from "../../../../utils/types/notifications";
import { AddressType } from "../../../../utils/types/shared";
import { BaseToken } from "../../../../utils/types/tokens";
import { useWriteContract } from "../../../base/useWriteContract";

export interface TokenApprovalReturn {
  approveToken: (token: BaseToken, amount: string) => Promise<boolean>;
  isLoading: boolean;
  isSuccess: boolean;
}

export const useTokenApproval = (): TokenApprovalReturn => {
  const { writeContract, isLoading, isSuccess } = useWriteContract();
  const { addNotification } = useNotifications();

  const approveToken = useCallback(
    async (token: BaseToken, amount: string) => {
      try {
        const decimals = token.decimals || 18;
        const parsedAmount = parseUnits(amount, decimals);
        const hash = await writeContract({
          address: token.address as AddressType,
          abi: ERC20_ABI,
          functionName: "approve",
          args: [ARBITRUM_CONTRACTS.ROUTER, parsedAmount],
        });

        if (hash) {
          addNotification({
            text: `Successfully approved ${token.symbol}`,
            severity: NotificationSeverity.SUCCESS,
          });
        }

        return Boolean(hash);
      } catch (err: any) {
        console.error("Approval error:", err);
        addNotification({
          text: `Failed to approve ${token.symbol}: ${err.message}`,
          severity: NotificationSeverity.ERROR,
        });
        return false;
      }
    },
    [writeContract, addNotification],
  );

  return {
    isLoading,
    isSuccess,
    approveToken,
  };
};
