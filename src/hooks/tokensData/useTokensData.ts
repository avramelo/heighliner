import { useAccount } from "wagmi";
import { useTokenAllowance } from "./contracts/tokenAllowance/useTokenAllowance";
import { useTokenInfoAndRatio } from "./contracts/tokenInfoAndRatio/useTokenInfoAndRatio";
import { useVaultTokensPair } from "./contracts/vaultTokensPair/useVaultTokensPair";
import { TokenData } from "./utils/types";

export interface TokensDataReturn {
  token0: TokenData | null;
  token1: TokenData | null;
  tokenRatio: number | null;
  isLoading: boolean;
  refetchAllowances: () => void;
  isAllowanceLoading: boolean;
}

export const useTokensData = (): TokensDataReturn => {
  const { address } = useAccount();
  const { addresses, tokenUnderlyings, isLoading: vaultLoading } = useVaultTokensPair();

  const {
    token0: baseToken0,
    token1: baseToken1,
    isLoading: tokensLoading,
  } = useTokenInfoAndRatio(addresses);

  const {
    allowance: token0Allowance,
    refetch: refetchToken0,
    isAllowanceLoading: isToken0AllowanceLoading,
  } = useTokenAllowance(baseToken0, address);

  const {
    allowance: token1Allowance,
    refetch: refetchToken1,
    isAllowanceLoading: isToken1AllowanceLoading,
  } = useTokenAllowance(baseToken1, address);

  const refetchAllowances = () => {
    refetchToken0();
    refetchToken1();
  };

  const token0 = baseToken0
    ? {
        ...baseToken0,
        allowance: token0Allowance ?? BigInt(0),
      }
    : null;

  const token1 = baseToken1
    ? {
        ...baseToken1,
        allowance: token1Allowance ?? BigInt(0),
      }
    : null;

  const isLoading =
    vaultLoading || tokensLoading || isToken0AllowanceLoading || isToken1AllowanceLoading;

  return {
    token0,
    token1,
    tokenRatio: tokenUnderlyings.proportion,
    isLoading,
    refetchAllowances,
    isAllowanceLoading: isToken0AllowanceLoading || isToken1AllowanceLoading,
  };
};
