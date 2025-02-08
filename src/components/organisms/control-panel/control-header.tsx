export const ControlHeader: React.FC<{ onClick: () => void }> = ({
  onClick,
}) => {
  return (
    <div className="flex items-center justify-between dark:text-gray-100 mb-2">
      {/* TITLE */}
      <div className="text-lg font-medium self-center font-primary">
        Chat Controls
      </div>
      {/* CLOSE BUTTON */}
      <button className="self-center" onClick={onClick}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="2"
          stroke="currentColor"
          className="size-3.5"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M6 18 18 6M6 6l12 12"
          ></path>
        </svg>
      </button>
    </div>
  );
};
