import { useEffect, useMemo } from "react";
import { useReadContracts } from "wagmi";
import { useNotifications } from "../../../../components/Notifications/NotificationProvider";
import { NotificationSeverity } from "../../../../utils/types/notifications";
import { AddressType } from "../../../../utils/types/shared";
import { TokenData } from "../../utils/types";
import { buildVaultContractsArr, populateTokenObjects } from "../../utils/utils";

export interface TokenInfoReturn {
  token0: TokenData | null;
  token1: TokenData | null;
  isLoading: boolean;
}

export const useTokenInfoAndRatio = (addresses?: [AddressType, AddressType]): TokenInfoReturn => {
  const { addNotification } = useNotifications();

  const {
    data: tokenDetails,
    isLoading,
    isError,
  } = useReadContracts({
    allowFailure: false,
    query: {
      enabled: Boolean(addresses?.[0] && addresses?.[1]),
    },
    contracts: buildVaultContractsArr(addresses),
  });

  const tokens = useMemo(
    () =>
      addresses
        ? populateTokenObjects(addresses, tokenDetails as (string | number | bigint)[])
        : { token0: null, token1: null },
    [addresses, tokenDetails],
  );

  useEffect(() => {
    if (isError) {
      addNotification({
        text: `Failed to fetch token details`,
        severity: NotificationSeverity.ERROR,
      });
    }
  }, [isError, addNotification]);

  return {
    ...tokens,
    isLoading,
  };
};
