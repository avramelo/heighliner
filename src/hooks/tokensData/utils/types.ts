import { AddressType } from "../../../utils/types/shared";

export interface TokenData {
  address: AddressType;
  name: string;
  symbol: string;
  decimals: number;
  allowance?: bigint;
}

export interface TokenUnderlyings {
  token0: bigint | null;
  token1: bigint | null;
  proportion: number | null;
}
