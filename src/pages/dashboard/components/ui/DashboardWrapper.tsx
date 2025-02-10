import { ConnectButton } from "@rainbow-me/rainbowkit";
import { ReactNode } from "react";
import { useAccount } from "wagmi";
import AddressTag from "../../../../components/ui/Tag/AddressTag";
import { maskAddress } from "../../../../utils/format-data";

const DashboardWrapper = ({ children }: { children: ReactNode }) => {
  const { address } = useAccount();

  return (
    <div className="min-h-screen bg-gray-900">
      <header className="border-b border-gray-800 bg-black/40 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center">
            <h1 className="text-pink-500 text-2xl font-bold">
              <AddressTag address={maskAddress(address ?? "N.A.")} />
            </h1>
          </div>
          <div className="flex gap-4">
            <ConnectButton />
          </div>
        </div>
      </header>
      <main className="container mx-auto px-4 py-8">{children}</main>
    </div>
  );
};

export default DashboardWrapper;
