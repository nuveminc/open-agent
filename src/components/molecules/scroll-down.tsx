type ScrollDownProps = Readonly<{
  onClick: () => void;
}>;

export const ScrollDown: React.FC<ScrollDownProps> = ({ onClick }) => {
  return (
    <div
      onClick={onClick}
      className="-mb-0.5 mx-auto inset-x-0 bg-transparent flex justify-center"
    >
      <div className="flex flex-col max-w-6xl px-2.5 md:px-6 w-full">
        <div className="relative">
          <div className="absolute -top-12 left-0 right-0 flex justify-center z-30 pointer-events-none">
            <button className="bg-white border border-gray-100 dark:border-none dark:bg-white/20 p-1.5 rounded-full pointer-events-auto">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 3a.75.75 0 01.75.75v10.638l3.96-4.158a.75.75 0 111.08 1.04l-5.25 5.5a.75.75 0 01-1.08 0l-5.25-5.5a.75.75 0 111.08-1.04l3.96 4.158V3.75A.75.75 0 0110 3z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
        </div>
        <div className="w-full relative"></div>
      </div>
    </div>
  );
};
