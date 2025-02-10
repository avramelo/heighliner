export interface BaseToken {
  name: string;
  symbol: string;
  address: string;
  amount?: number | string;
  decimals: number;
  allowance?: bigint;
  isApproved?: boolean;
}
