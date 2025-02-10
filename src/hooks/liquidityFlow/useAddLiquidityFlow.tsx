import { useCallback, useState } from "react";
import { useNotifications } from "../../components/Notifications/NotificationProvider";
import { NotificationSeverity } from "../../utils/types/notifications";
import { BaseToken } from "../../utils/types/tokens";
import { useAddLiquidity } from "./contracts/addLiquidity/useAddLiquidity";
import { useTokenApproval } from "./contracts/approveToken/useTokenApproval";

export interface AddLiquidityFlowProps {
  token0: BaseToken | null;
  token1: BaseToken | null;
  refetchAllowances: () => void;
}

export interface AddLiquidityFlowReturn {
  flowAmounts: {
    amount0: string;
    amount1: string;
  };
  updateFlowAmounts: (amounts: { amount0: string; amount1: string }) => void;
  isAddLiquidityLoading: boolean;
  isPendingToken0: boolean;
  isPendingToken1: boolean;
  isActionPending: boolean;
  startApprovalProcess: () => Promise<void>;
  handleAddLiquidity: () => Promise<void>;
  mintAmounts: [bigint, bigint, bigint][] | undefined;
}

export const useAddLiquidityFlow = ({
  token0,
  token1,
  refetchAllowances,
}: AddLiquidityFlowProps): AddLiquidityFlowReturn => {
  const { addNotification } = useNotifications();
  const [isPendingToken0, setIsPendingToken0] = useState(false);
  const [isPendingToken1, setIsPendingToken1] = useState(false);
  const [flowAmounts, setFlowAmounts] = useState({
    amount0: "",
    amount1: "",
  });

  const { approveToken, isLoading: isApprovalLoading } = useTokenApproval();
  const {
    addLiquidity,
    isLoading: isAddLiquidityLoading,
    mintAmounts,
  } = useAddLiquidity(flowAmounts.amount0, flowAmounts.amount1);

  const updateFlowAmounts = useCallback((amounts: { amount0: string; amount1: string }) => {
    setFlowAmounts(amounts);
  }, []);

  const handleAddLiquidity = useCallback(async () => {
    if (!token0 || !token1) {
      addNotification({
        text: "Tokens not loaded",
        severity: NotificationSeverity.ERROR,
      });
      return;
    }

    try {
      const success = await addLiquidity(token0, token1);

      if (success) {
        addNotification({
          text: "Successfully added liquidity",
          severity: NotificationSeverity.SUCCESS,
          duration: 10000,
        });

        setIsPendingToken0(false);
        setIsPendingToken1(false);
      }
    } catch (error: any) {
      console.error("Add liquidity error:", error);
      addNotification({
        text: `Failed to add liquidity: ${error.message}`,
        severity: NotificationSeverity.ERROR,
      });
    } finally {
      refetchAllowances();
    }
  }, [token0, token1, addLiquidity, addNotification, refetchAllowances]);

  const startApprovalProcess = useCallback(async () => {
    if (!token0 || !token1 || !flowAmounts.amount0 || !flowAmounts.amount1) return;

    try {
      if (!token0.isApproved) {
        setIsPendingToken0(true);
        const success = await approveToken(token0, flowAmounts.amount0);
        if (success) {
          await refetchAllowances();
        }
        setIsPendingToken0(false);
      }

      if (!token1.isApproved) {
        setIsPendingToken1(true);
        const success = await approveToken(token1, flowAmounts.amount1);
        if (success) {
          await refetchAllowances();
        }
        setIsPendingToken1(false);
      }
    } catch (error) {
      setIsPendingToken0(false);
      setIsPendingToken1(false);
      addNotification({
        text: "Failed to approve token",
        severity: NotificationSeverity.ERROR,
      });
    }
  }, [token0, token1, flowAmounts, approveToken, addNotification, refetchAllowances]);

  const isActionPending =
    isApprovalLoading || isAddLiquidityLoading || isPendingToken0 || isPendingToken1;

  return {
    flowAmounts,
    updateFlowAmounts,
    isAddLiquidityLoading,
    isPendingToken0,
    isPendingToken1,
    isActionPending,
    startApprovalProcess,
    handleAddLiquidity,
    mintAmounts,
  };
};
