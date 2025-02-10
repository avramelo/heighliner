import { useCallback, useMemo, useState } from "react";
import { formatUnits } from "viem";
import { ActionButton } from "../../../components/ui/Button/ActionButton";
import { Card } from "../../../components/ui/Card/Card";
import { TokenInput } from "../../../components/ui/Input/TokenInput";
import { DashboardSkeleton } from "../../../components/ui/Loading/DashboardSkeleton";
import { useAddLiquidityFlow } from "../../../hooks/liquidityFlow/useAddLiquidityFlow";
import { useTokensData } from "../../../hooks/tokensData/useTokensData";
import { checkAllowance, formatAllowance } from "../../../utils/allowance";
import LPTokensBanner from "./ui/LPTokensBanner";

const DashboardContent = () => {
  const [inputValues, setInputValues] = useState({
    amount0: "",
    amount1: "",
  });

  const { token0, token1, tokenRatio, isLoading, refetchAllowances, isAllowanceLoading } =
    useTokensData();

  const {
    isAddLiquidityLoading,
    startApprovalProcess,
    handleAddLiquidity,
    isPendingToken0,
    isPendingToken1,
    isActionPending,
    mintAmounts,
    updateFlowAmounts,
  } = useAddLiquidityFlow({
    token0,
    token1,
    refetchAllowances,
  });

  const handleInputChange = useCallback(
    (amount: string, isToken0: boolean) => {
      if (!tokenRatio) return;
      const newValues = {
        ...inputValues,
        [isToken0 ? "amount0" : "amount1"]: amount,
        [isToken0 ? "amount1" : "amount0"]: amount
          ? String(isToken0 ? Number(amount) / tokenRatio : Number(amount) * tokenRatio)
          : "",
      };

      setInputValues(newValues);
      updateFlowAmounts(newValues);
    },
    [tokenRatio, inputValues, updateFlowAmounts],
  );

  const isToken0Approved = token0 ? checkAllowance(token0, inputValues.amount0) : false;
  const isToken1Approved = token1 ? checkAllowance(token1, inputValues.amount1) : false;

  const expectedLPTokens = mintAmounts?.[0]?.[2] ? formatUnits(mintAmounts[0][2], 18) : undefined;

  const buttonText = useMemo(() => {
    if (!inputValues.amount0 || !inputValues.amount1) {
      return "Enter amounts";
    }

    if (!isToken0Approved) {
      if (isPendingToken0) return `Approving ${token0?.symbol}...`;
      return "Start Approval Process";
    }

    if (!isToken1Approved) {
      if (isPendingToken1) return `Approving ${token1?.symbol}...`;
      return `Approve ${token1?.symbol}...`;
    }

    if (isActionPending) return "Processing...";
    return "Add Liquidity";
  }, [
    inputValues.amount0,
    inputValues.amount1,
    isToken0Approved,
    isToken1Approved,
    token0?.symbol,
    token1?.symbol,
    isPendingToken0,
    isPendingToken1,
    isActionPending,
  ]);

  const handleMainButtonClick = () => {
    if (!isToken0Approved || !isToken1Approved) {
      startApprovalProcess();
    } else {
      handleAddLiquidity();
    }
  };

  if (isLoading || isAddLiquidityLoading || !token0 || !token1) {
    return <DashboardSkeleton />;
  }

  return (
    <Card
      actionButton={
        <ActionButton
          handleClick={handleMainButtonClick}
          buttonText={buttonText}
          isDisabled={!inputValues.amount0 || !inputValues.amount1 || isActionPending}
        />
      }
    >
      <TokenInput
        symbol={token0.symbol}
        amount={inputValues.amount0}
        onAmountChange={(amount: string) => handleInputChange(amount, true)}
        allowance={formatAllowance(token0)}
        disabled={isPendingToken0 || isPendingToken1}
        isPending={isPendingToken0}
        showCheckmark={isToken0Approved}
      />
      <TokenInput
        symbol={token1.symbol}
        amount={inputValues.amount1}
        onAmountChange={(amount: string) => handleInputChange(amount, false)}
        allowance={formatAllowance(token1)}
        disabled={isPendingToken0 || isPendingToken1}
        isPending={isPendingToken1}
        showCheckmark={isToken1Approved}
      />
      <LPTokensBanner isAllowanceLoading={isAllowanceLoading} expectedLPTokens={expectedLPTokens} />
    </Card>
  );
};

export default DashboardContent;
