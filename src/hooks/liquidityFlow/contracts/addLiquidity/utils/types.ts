import { AddressType } from "../../../../../utils/types/shared";

export interface LiquidityObject {
  amount0Max: bigint;
  amount1Max: bigint;
  amount0Min: bigint;
  amount1Min: bigint;
  amountSharesMin: bigint;
  vault: AddressType;
  receiver: AddressType;
  gauge: AddressType; // zero address
}

export type MintAmounts = [bigint, bigint, bigint];
