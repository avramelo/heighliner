import { ReactNode } from "react";

export const Card = ({
  children,
  actionButton,
}: {
  children: ReactNode;
  actionButton: ReactNode;
}) => {
  return (
    <div className="py-6 px-2 sm:py-12 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-lg p-4 sm:p-6 space-y-4 sm:space-y-6">
        <div className="space-y-3 sm:space-y-4">{children}</div>
        {actionButton}
      </div>
    </div>
  );
};
