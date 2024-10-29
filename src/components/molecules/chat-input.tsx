import { Disclaimer } from './disclaimer';

export const ChatInput: React.FC<object> = () => {
  return (
    <div className="bg-white dark:bg-gray-900">
      <div className="max-w-6xl px-2.5 md:px-6 mx-auto inset-x-0">
        <div className="pb-2">
          <input type="file" hidden={true} multiple={true} />
          <form className="w-full flex gap-1.5">
            <div
              className="flex-1 flex flex-col relative w-full rounded-3xl px-1.5 bg-gray-50 dark:bg-gray-850 dark:text-gray-100"
              dir="LTR"
            >
              <div className="flex">
                <div className="ml-0.5 self-end mb-1.5 flex space-x-1">
                  <button
                    aria-controls="n4HT-zO9F6"
                    aria-expanded="false"
                    data-state="closed"
                    id="u18usXrTLI"
                    tabIndex={0}
                    data-melt-dropdown-menu-trigger=""
                    data-menu-trigger=""
                    type="button"
                  >
                    <div aria-label="More" className="flex">
                      <button
                        className="bg-gray-50 hover:bg-gray-100 text-gray-800 dark:bg-gray-850 dark:text-white dark:hover:bg-gray-800 transition rounded-full p-2 outline-none focus:outline-none"
                        type="button"
                        aria-label="More"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 16 16"
                          fill="currentColor"
                          className="size-5"
                        >
                          <path d="M8.75 3.75a.75.75 0 0 0-1.5 0v3.5h-3.5a.75.75 0 0 0 0 1.5h3.5v3.5a.75.75 0 0 0 1.5 0v-3.5h3.5a.75.75 0 0 0 0-1.5h-3.5v-3.5Z"></path>
                        </svg>
                      </button>
                    </div>
                  </button>
                  <div slot="content"></div>
                </div>
                <textarea
                  id="chat-textarea"
                  className="scrollbar-hidden bg-gray-50 dark:bg-gray-850 dark:text-gray-100 outline-none w-full py-3 px-1 rounded-xl resize-none h-[48px] svelte-141e0sl"
                  placeholder="Send a Message"
                  rows={1}
                ></textarea>
                <div className="self-end mb-2 flex space-x-1 mr-1">
                  <div aria-label="Record voice" className="flex">
                    <button
                      id="voice-input-button"
                      className="text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-850 transition rounded-full p-1.5 mr-0.5 self-center"
                      type="button"
                      aria-label="Voice Input"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="w-5 h-5 translate-y-[0.5px]"
                      >
                        <path d="M7 4a3 3 0 016 0v6a3 3 0 11-6 0V4z"></path>
                        <path d="M5.5 9.643a.75.75 0 00-1.5 0V10c0 3.06 2.29 5.585 5.25 5.954V17.5h-1.5a.75.75 0 000 1.5h4.5a.75.75 0 000-1.5h-1.5v-1.546A6.001 6.001 0 0016 10v-.357a.75.75 0 00-1.5 0V10a4.5 4.5 0 01-9 0v-.357z"></path>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-end w-10">
              <div className="flex items-center mb-1">
                <div aria-label="Call" className="flex">
                  <button
                    className="text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-850 transition rounded-full p-2 self-center"
                    type="button"
                    aria-label="Call"
                  >
                    <svg
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      stroke-width="0"
                      stroke="currentColor"
                      className="size-6"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M12 5a7 7 0 0 0-7 7v1.17c.313-.11.65-.17 1-.17h2a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H6a3 3 0 0 1-3-3v-6a9 9 0 0 1 18 0v6a3 3 0 0 1-3 3h-2a1 1 0 0 1-1-1v-6a1 1 0 0 1 1-1h2c.35 0 .687.06 1 .17V12a7 7 0 0 0-7-7Z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </form>
          <Disclaimer />
        </div>
      </div>
    </div>
  );
};
