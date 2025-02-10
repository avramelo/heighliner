import { erc20Abi } from "viem";
import { getAssetRatio } from "../../../utils/numbers";
import { AddressType } from "../../../utils/types/shared";
import { TokenUnderlyings } from "./types";

export const buildVaultContractsArr = (tokens?: [AddressType, AddressType]) => {
  if (!tokens?.[0] || !tokens?.[1]) return [];

  return [
    {
      address: tokens[0],
      abi: erc20Abi,
      functionName: "name",
    },
    {
      address: tokens[0],
      abi: erc20Abi,
      functionName: "symbol",
    },
    {
      address: tokens[0],
      abi: erc20Abi,
      functionName: "decimals",
    },
    {
      address: tokens[1],
      abi: erc20Abi,
      functionName: "name",
    },
    {
      address: tokens[1],
      abi: erc20Abi,
      functionName: "symbol",
    },
    {
      address: tokens[1],
      abi: erc20Abi,
      functionName: "decimals",
    },
  ];
};

export const getTokenUnderlyingsObject = (
  contractData: [unknown] | undefined,
): TokenUnderlyings => {
  if (!contractData?.[0]) return { token0: null, token1: null, proportion: null };

  const [token0Amount, token1Amount] = contractData[0] as [bigint, bigint];
  return {
    token0: token0Amount,
    token1: token1Amount,
    proportion: getAssetRatio(token0Amount, token1Amount),
  };
};

export const populateTokenObjects = (
  addresses: [AddressType, AddressType],
  tokenDetails: any[] | undefined,
) => {
  if (!tokenDetails) return { token0: null, token1: null };

  return {
    token0: addresses[0]
      ? {
          address: addresses[0],
          name: tokenDetails[0],
          symbol: tokenDetails[1],
          decimals: Number(tokenDetails[2] ?? 18),
        }
      : null,
    token1: addresses[1]
      ? {
          address: addresses[1],
          name: tokenDetails[3],
          symbol: tokenDetails[4],
          decimals: Number(tokenDetails[5] ?? 18),
        }
      : null,
  };
};
