import { formatUnits } from "viem";

export function getAssetRatio(amount1: bigint, amount2: bigint): number {
  return Number(formatUnits(amount1, 18)) / Number(formatUnits(amount2, 18));
}

export const numberToBigIntWithDecimals = (num: number, decimals = 18) => {
  return BigInt(Math.floor(num * 10 ** decimals));
};

export function multiplyByConstant(value: string | number, percentage: number): bigint {
  const multiplier = BigInt(Math.floor(percentage * 100));
  return (BigInt(String(value)) * multiplier) / BigInt(100);
}
