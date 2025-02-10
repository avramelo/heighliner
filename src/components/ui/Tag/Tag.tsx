interface TagInterface {
  value: string;
  onClick?: () => void;
}

const Tag = ({ value, onClick }: TagInterface) => {
  return (
    <button
      className="inline-flex items-center gap-2 px-3 py-1 bg-gray-800 rounded-full text-gray-200 hover:bg-gray-700 transition-colors"
      onClick={() => {
        onClick && onClick();
      }}
    >
      <span className="font-mono text-sm">{value}</span>
    </button>
  );
};

export default Tag;
