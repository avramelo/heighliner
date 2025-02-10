import { useEffect, useRef, useState } from "react";
import { useChainId } from "wagmi";
import { ARBITRUM_CHAIN_ID } from "../../utils/constants/chains";
import { NotificationSeverity } from "../../utils/types/notifications";
import { useNotifications } from "../Notifications/NotificationProvider";

export const NetworkModal = () => {
  const chainId = useChainId();
  const [isOpen, setIsOpen] = useState(false);
  const { addNotification } = useNotifications();
  const prevChainIdRef = useRef<number | undefined>(undefined);

  useEffect(() => {
    if (prevChainIdRef.current !== undefined && chainId !== prevChainIdRef.current) {
      if (chainId && chainId !== ARBITRUM_CHAIN_ID) {
        setIsOpen(true);
        addNotification({
          text: "Please switch to Arbitrum network to use this application",
          severity: NotificationSeverity.WARNING,
          duration: 10000,
        });
      } else if (chainId === ARBITRUM_CHAIN_ID) {
        setIsOpen(false);
        addNotification({
          text: "Successfully connected to Arbitrum network",
          severity: NotificationSeverity.SUCCESS,
        });
      }
    }

    prevChainIdRef.current = chainId;
  }, [chainId, addNotification]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/80 flex justify-center items-center z-50">
      <div className="bg-white p-8 rounded-xl text-center max-w-md w-[90%]">
        <h2 className="text-red-500 text-xl font-bold mb-4">Wrong Network</h2>
        <p className="text-gray-700">Please switch to Arbitrum network to use this application</p>
      </div>
    </div>
  );
};
