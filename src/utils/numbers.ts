import { formatUnits } from "viem";

export function getAssetRatio(amount1: bigint, amount2: bigint): number {
  return Number(formatUnits(amount1, 18)) / Number(formatUnits(amount2, 18));
}
