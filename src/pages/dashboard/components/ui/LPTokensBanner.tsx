const LPTokensBanner = ({
  isAllowanceLoading,
  expectedLPTokens = "",
}: {
  isAllowanceLoading: boolean;
  expectedLPTokens?: string;
}) => {
  return (
    <div className="text-xs text-gray-500">
      {isAllowanceLoading ? (
        <span>Loading allowance...</span>
      ) : (
        `Expected LP tokens: ${Number(expectedLPTokens || 0).toFixed(6)}`
      )}
    </div>
  );
};

export default LPTokensBanner;
