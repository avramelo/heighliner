export const ActionButton = ({
  handleClick,
  buttonText,
  isDisabled,
}: {
  handleClick: () => void;
  buttonText: string;
  isDisabled: boolean;
}) => {
  return (
    <button
      className="w-full py-2 sm:py-3 px-4 rounded-lg font-semibold text-white transition-colors duration-200 
      disabled:opacity-50 disabled:cursor-not-allowed
      bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
      onClick={handleClick}
      disabled={isDisabled}
    >
      {buttonText}
    </button>
  );
};
