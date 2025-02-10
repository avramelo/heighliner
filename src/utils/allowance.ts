import { formatUnits, parseUnits } from "viem";
import { BaseToken } from "./types/tokens";

const MIN_ALLOWANCE = parseUnits("0.0001", 18);

export const checkAllowance = (token: BaseToken | null, amount: string): boolean => {
  if (!token || !token.allowance) return false;

  try {
    // if no amount, check if there is a minimal allowance
    if (!amount || amount === "0") {
      return token.allowance > MIN_ALLOWANCE;
    }

    const decimals = token.decimals ?? 18;
    const requiredAmount = parseUnits(amount, decimals);

    return token.allowance >= requiredAmount;
  } catch (error) {
    console.error("Error checking allowance:", error);
    return false;
  }
};

export const formatAllowance = (token?: BaseToken): string | undefined =>
  token?.allowance !== undefined
    ? Number(formatUnits(token.allowance, token.decimals)).toFixed(4)
    : undefined;
