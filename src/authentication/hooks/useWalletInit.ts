import { useSession } from "next-auth/react";
import { useAccount } from "wagmi";

export const useWalletInit = () => {
  const { isConnected, status, connector, address } = useAccount();
  const { status: sessionStatus } = useSession();

  const isLoading =
    status === "reconnecting" ||
    status === "connecting" ||
    sessionStatus === "loading" ||
    connector?.isConnecting;

  return {
    address,
    isConnected,
    status,
    isLoading,
  };
};
