import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useEffect, useState } from "react";
import { useAuthRedirect } from "../../../authentication/hooks/useAuthRedirect";
import { useWalletAuth } from "../../../authentication/hooks/useWalletAuth";
import { useNotifications } from "../../../components/Notifications/NotificationProvider";
import { Card } from "../../../components/ui/Card/Card";
import { Loading } from "../../../components/ui/Loading/Loading";
import { NotificationSeverity } from "../../../utils/types/notifications";
import { useWalletInit } from "../../../authentication/hooks/useWalletInit";

const HomeContent = () => {
  const { addNotification } = useNotifications();
  const [error, setError] = useState<string | null>(null);
  const [isSigningIn, setIsSigningIn] = useState(false);
  const { address, isConnected } = useWalletInit();
  const { session, isLoading } = useAuthRedirect("/dashboard");
  const { handleSign } = useWalletAuth({
    onError: setError,
    address,
    onSignStart: () => setIsSigningIn(true),
    onSignEnd: () => setIsSigningIn(false),
  });

  useEffect(() => {
    if (error) {
      addNotification({
        text: error ?? "Something went wrong during authentication, please try again.",
        severity: NotificationSeverity.WARNING,
        duration: 10000,
      });
      setError(null);
    }
  }, [error, addNotification]);

  useEffect(() => {
    if (isConnected && address && !isSigningIn && !session) {
      handleSign();
    }
  }, [isConnected, address, handleSign, isSigningIn, session]);

  if (isSigningIn || isLoading) {
    return <Loading />;
  }

  return (
    <div className="min-h-screen bg-gray-900 flex flex-col items-center justify-center p-4">
      <Card
        actionButton={
          <div className="mt-8 flex justify-center">
            <ConnectButton />
          </div>
        }
      >
        <div className="text-center">
          <h2 className="mt-6 text-3xl font-bold text-gray-900">Welcome to the Heighliner App</h2>
          <p className="mt-2 text-sm text-gray-600">Connect your wallet to continue</p>
        </div>
      </Card>
    </div>
  );
};

export default HomeContent;
