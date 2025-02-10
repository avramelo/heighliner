import { useEffect } from "react";
import { useReadContract } from "wagmi";
import { useNotifications } from "../../../../components/Notifications/NotificationProvider";
import { ERC20_ABI } from "../../../../utils/constants/abis/erc20";
import { ARBITRUM_CONTRACTS } from "../../../../utils/constants/contracts/contract-addresses";
import { NotificationSeverity } from "../../../../utils/types/notifications";
import { AddressType } from "../../../../utils/types/shared";
import { BaseToken } from "../../../../utils/types/tokens";

export interface TokenAllowanceReturn {
  allowance: bigint | null;
  isLoading: boolean;
}

export const useTokenAllowance = (token: BaseToken | null, address: string | undefined) => {
  const { addNotification } = useNotifications();

  const {
    data: allowance,
    refetch,
    isLoading,
    isError,
    error,
  } = useReadContract({
    address: token?.address as AddressType,
    abi: ERC20_ABI,
    functionName: "allowance",
    args: [address as AddressType, ARBITRUM_CONTRACTS.ROUTER],
    query: {
      enabled: Boolean(token?.address && address),
    },
  });

  useEffect(() => {
    if (isError && error) {
      addNotification({
        text: `Failed to fetch allowance for ${token?.symbol}: ${error.message}`,
        severity: NotificationSeverity.ERROR,
      });
    }
  }, [isError, error, token?.symbol, addNotification]);

  return {
    allowance,
    refetch,
    isAllowanceLoading: isLoading,
  };
};
