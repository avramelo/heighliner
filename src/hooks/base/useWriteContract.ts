import { useCallback, useState } from "react";
import { useWriteContract as useWagmiWriteContract, useWaitForTransactionReceipt } from "wagmi";
import { useNotifications } from "../../components/Notifications/NotificationProvider";
import { NotificationSeverity } from "../../utils/types/notifications";
import { AddressType } from "../../utils/types/shared";

export const useWriteContract = () => {
  const [error, setError] = useState<string | null>(null);
  const { writeContractAsync } = useWagmiWriteContract();
  const [hash, setHash] = useState<AddressType | undefined>();
  const { isLoading, isSuccess } = useWaitForTransactionReceipt({ hash });
  const { addNotification } = useNotifications();

  const writeContract = useCallback(
    async (config: Parameters<typeof writeContractAsync>[0]) => {
      try {
        setError(null);
        if (!writeContractAsync) return null;

        const txHash = await writeContractAsync(config);
        setHash(txHash);
        return txHash;
      } catch (err: any) {
        setError(err.message);
        addNotification({
          text: err.message,
          severity: NotificationSeverity.ERROR,
        });
        return null;
      }
    },
    [writeContractAsync, addNotification],
  );

  return {
    error,
    isLoading,
    isSuccess,
    writeContract,
    hash,
  };
};
