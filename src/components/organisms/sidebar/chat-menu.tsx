export const ChatMenu: React.FC<object> = () => {
  return (
    <div className="from-gray-200 dark:from-gray-900 absolute right-[10px] top-[6px] py-1 pr-2 pl-5 bg-gradient-to-l from-80% to-transparent">
      <div className="flex self-center space-x-1 z-10">
        <button
          aria-controls="M0RzV4QrUk"
          aria-expanded="false"
          data-state="closed"
          id="ZpSkSgofKI"
          tabIndex={0}
          data-melt-dropdown-menu-trigger=""
          data-menu-trigger=""
          type="button"
        >
          <div aria-label="More" className="flex">
            <button
              aria-label="Chat Menu"
              className="self-center dark:hover:text-white transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-4 h-4"
              >
                <path d="M2 8a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM6.5 8a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM12.5 6.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Z"></path>
              </svg>
            </button>
          </div>
        </button>
        <div slot="content"></div>
        <button id="delete-chat-button" className="hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="w-4 h-4"
          >
            <path d="M2 8a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM6.5 8a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM12.5 6.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Z"></path>
          </svg>
        </button>
      </div>
    </div>
  );
};
