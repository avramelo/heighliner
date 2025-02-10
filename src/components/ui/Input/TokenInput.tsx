interface TokenInputUIProps {
  symbol: string;
  amount: string;
  onAmountChange: (amount: string) => void;
  allowance?: string;
  disabled?: boolean;
  isPending?: boolean;
  showCheckmark?: boolean;
}

export const TokenInput = ({
  symbol,
  amount,
  onAmountChange,
  allowance,
  disabled,
  isPending,
  showCheckmark,
}: TokenInputUIProps) => {
  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        {allowance !== undefined && (
          <span className="text-xs text-gray-500">Allowance: {allowance}</span>
        )}
      </div>
      <div className="relative flex items-center h-12 sm:h-14 p-2 sm:p-4 bg-gray-50 rounded-lg">
        <div className="flex-shrink-0 w-16 sm:w-24">
          <div className="text-sm sm:text-base font-medium">{symbol}</div>
        </div>
        <input
          type="number"
          className="flex-1 min-w-0 bg-transparent text-right text-sm sm:text-base outline-none pr-2
            [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
          value={amount}
          onChange={(e) => onAmountChange(e.target.value)}
          disabled={disabled}
          placeholder="0.0"
        />
        <div className="flex-shrink-0 w-8 flex justify-center">
          {showCheckmark && (
            <div className="px-2 py-1 text-sm rounded-md bg-green-100 text-green-700 font-medium">
              ✓
            </div>
          )}
          {isPending && (
            <div className="px-2 py-1 text-sm rounded-md bg-blue-100 text-blue-700 font-medium">
              ...
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
