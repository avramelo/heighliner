import { useEffect } from "react";
import { useReadContracts } from "wagmi";
import { useNotifications } from "../../../../components/Notifications/NotificationProvider";
import { ARBITRUM_CONTRACTS_ABIS } from "../../../../utils/constants/abis/arbitrum";
import { ARBITRUM_CONTRACTS } from "../../../../utils/constants/contracts/contract-addresses";
import { NotificationSeverity } from "../../../../utils/types/notifications";
import { AddressType } from "../../../../utils/types/shared";
import { getTokenUnderlyingsObject } from "../../utils/utils";

export interface VaultTokensPairReturn {
  addresses: [AddressType, AddressType] | undefined;
  tokenUnderlyings: {
    token0: bigint | null;
    token1: bigint | null;
    proportion: number | null;
  };
  isLoading: boolean;
}

export const useVaultTokensPair = (): VaultTokensPairReturn => {
  const { addNotification } = useNotifications();

  const {
    data: vaultData,
    isLoading,
    isError,
  } = useReadContracts({
    allowFailure: false,
    contracts: [
      {
        abi: ARBITRUM_CONTRACTS_ABIS.VAULT,
        address: ARBITRUM_CONTRACTS.VAULT,
        functionName: "token0",
      },
      {
        abi: ARBITRUM_CONTRACTS_ABIS.VAULT,
        address: ARBITRUM_CONTRACTS.VAULT,
        functionName: "token1",
      },
      {
        abi: ARBITRUM_CONTRACTS_ABIS.HELPER,
        address: ARBITRUM_CONTRACTS.HELPER,
        functionName: "totalUnderlying",
        args: [ARBITRUM_CONTRACTS.VAULT],
      },
    ],
  });

  useEffect(() => {
    if (isError) {
      addNotification({
        text: "Failed to fetch vault data",
        severity: NotificationSeverity.ERROR,
      });
    }
  }, [isError, addNotification]);

  return {
    addresses:
      vaultData && vaultData[0] && vaultData[1]
        ? ([vaultData[0], vaultData[1]] as [AddressType, AddressType])
        : undefined,
    tokenUnderlyings: getTokenUnderlyingsObject([vaultData?.[2]]),
    isLoading,
  };
};
