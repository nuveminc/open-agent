import { ChatMenu } from './chat-menu';

export interface ChatItemProps {
  title: string;
}

export const ChatItem: React.FC<ChatItemProps> = ({ title }) => {
  return (
    <div className="w-full pr-2 relative group">
      {/* chat title */}
      {/* default: group-hover:bg-gray-100 dark:group-hover:bg-gray-950 */}
      {/* selected: bg-gray-200 dark:bg-gray-900 */}
      <a
        className="w-full flex justify-between rounded-xl px-3 py-2 group-hover:bg-gray-100 dark:group-hover:bg-gray-950 whitespace-nowrap text-ellipsis"
        href="/c/28aa9a11-5245-45df-8afa-4f2204e24879"
        draggable="false"
      >
        <div className="flex self-center flex-1 w-full">
          <div className="text-left self-center overflow-hidden w-full h-[20px]">
            {title}
          </div>
        </div>
      </a>
      {/* more tooltip / dialog */}
      <ChatMenu />
      {/* selected */}
      {/* <div class="w-full pr-2 relative group">
        <a
          class="w-full flex justify-between rounded-xl px-3 py-2 bg-gray-200 dark:bg-gray-900 whitespace-nowrap text-ellipsis"
          href="/c/d0f33733-3b9b-455d-bbec-8697db2ae3cb"
          draggable="false"
        >
          <div class="flex self-center flex-1 w-full">
            <div class="text-left self-center overflow-hidden w-full h-[20px]">
              💡 Multiple Vandalism Claims? 🚔
            </div>
          </div>
        </a>
      </div> */}

      {/* unselected */}
      {/* <div class="w-full pr-2 relative group">
        <a class="w-full flex justify-between rounded-xl px-3 py-2  group-hover:bg-gray-100 dark:group-hover:bg-gray-950 whitespace-nowrap text-ellipsis" href="/c/895f394f-449d-4041-9864-42354922b655" draggable="false">
      <div class="flex self-center flex-1 w-full">
        <div class="text-left self-center overflow-hidden w-full h-[20px]">Open Source LLM Resources 🤖</div>
        </div>
        </a>
      </div></div>       */}
      {/* <div className="from-gray-200 dark:from-gray-900 absolute right-[10px] top-[6px] py-1 pr-2 pl-5 bg-gradient-to-l from-80% to-transparent">
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
      </div> */}
    </div>
  );
};
