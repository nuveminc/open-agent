import { Navbar } from '../organisms/navbar';

export const Welcome: React.FC<object> = () => {
  return (
    <>
      <Navbar />
      <div className="h-full flex">
        <div className="m-auto w-full max-w-6xl px-8 lg:px-20">
          <div className="flex justify-start">
            <div className="flex -space-x-4 mb-0.5">
              <button>
                <div aria-label="" className="flex">
                  <img
                    src="/public/favicon.png"
                    className="size-[2.7rem] rounded-full border-[1px] border-gray-200 dark:border-none"
                    alt="logo"
                    draggable="false"
                  />
                </div>
              </button>
            </div>
          </div>{' '}
          <div className="mt-2 mb-4 text-3xl text-gray-800 dark:text-gray-100 font-medium text-left flex items-center gap-4 font-primary">
            <div>
              <div className="capitalize line-clamp-1">Hello, mp</div>
              <div>
                <div className="font-medium text-gray-400 dark:text-gray-500 line-clamp-1 font-p">
                  How can I help you today?
                </div>
              </div>
            </div>
          </div>
          <div className="w-full font-primary">
            <div className="mb-2 flex gap-1 text-sm font-medium items-center text-gray-400 dark:text-gray-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="size-3"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z"
                ></path>
              </svg>{' '}
              Suggested
            </div>
            <div
              className="relative w-full flex gap-2 snap-x snap-mandatory overflow-x-hidden hover:overflow-x-auto mb-3 hover:mb-0"
              id="suggestions-container"
            >
              <div className="snap-center shrink-0">
                <button className="flex flex-col flex-1 shrink-0 w-64 justify-between h-36 p-5 px-6 bg-gray-50 hover:bg-gray-100 dark:bg-gray-850 dark:hover:bg-gray-800 rounded-3xl transition group">
                  <div className="flex flex-col text-left">
                    <div className="font-medium dark:text-gray-300 dark:group-hover:text-gray-200 transition">
                      Help me study
                    </div>
                    <div className="text-sm text-gray-600 font-normal line-clamp-2">
                      vocabulary for a college entrance exam
                    </div>
                  </div>
                  <div className="w-full flex justify-between">
                    <div className="text-xs text-gray-400 group-hover:text-gray-500 dark:text-gray-600 dark:group-hover:text-gray-500 transition self-center">
                      Prompt
                    </div>
                    <div className="self-end p-1 rounded-lg text-gray-300 group-hover:text-gray-800 dark:text-gray-700 dark:group-hover:text-gray-100 transition">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                        className="size-4"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M8 14a.75.75 0 0 1-.75-.75V4.56L4.03 7.78a.75.75 0 0 1-1.06-1.06l4.5-4.5a.75.75 0 0 1 1.06 0l4.5 4.5a.75.75 0 0 1-1.06 1.06L8.75 4.56v8.69A.75.75 0 0 1 8 14Z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </div>
                  </div>
                </button>
              </div>
              <div className="snap-center shrink-0">
                <button className="flex flex-col flex-1 shrink-0 w-64 justify-between h-36 p-5 px-6 bg-gray-50 hover:bg-gray-100 dark:bg-gray-850 dark:hover:bg-gray-800 rounded-3xl transition group">
                  <div className="flex flex-col text-left">
                    <div className="font-medium dark:text-gray-300 dark:group-hover:text-gray-200 transition">
                      Grammar check
                    </div>
                    <div className="text-sm text-gray-600 font-normal line-clamp-2">
                      rewrite it for better readability
                    </div>
                  </div>
                  <div className="w-full flex justify-between">
                    <div className="text-xs text-gray-400 group-hover:text-gray-500 dark:text-gray-600 dark:group-hover:text-gray-500 transition self-center">
                      Prompt
                    </div>
                    <div className="self-end p-1 rounded-lg text-gray-300 group-hover:text-gray-800 dark:text-gray-700 dark:group-hover:text-gray-100 transition">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                        className="size-4"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M8 14a.75.75 0 0 1-.75-.75V4.56L4.03 7.78a.75.75 0 0 1-1.06-1.06l4.5-4.5a.75.75 0 0 1 1.06 0l4.5 4.5a.75.75 0 0 1-1.06 1.06L8.75 4.56v8.69A.75.75 0 0 1 8 14Z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </div>
                  </div>
                </button>
              </div>
              <div className="snap-center shrink-0">
                <button className="flex flex-col flex-1 shrink-0 w-64 justify-between h-36 p-5 px-6 bg-gray-50 hover:bg-gray-100 dark:bg-gray-850 dark:hover:bg-gray-800 rounded-3xl transition group">
                  <div className="flex flex-col text-left">
                    <div className="font-medium dark:text-gray-300 dark:group-hover:text-gray-200 transition">
                      Give me ideas
                    </div>
                    <div className="text-sm text-gray-600 font-normal line-clamp-2">
                      for what to do with my kids' art
                    </div>
                  </div>
                  <div className="w-full flex justify-between">
                    <div className="text-xs text-gray-400 group-hover:text-gray-500 dark:text-gray-600 dark:group-hover:text-gray-500 transition self-center">
                      Prompt
                    </div>
                    <div className="self-end p-1 rounded-lg text-gray-300 group-hover:text-gray-800 dark:text-gray-700 dark:group-hover:text-gray-100 transition">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                        className="size-4"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M8 14a.75.75 0 0 1-.75-.75V4.56L4.03 7.78a.75.75 0 0 1-1.06-1.06l4.5-4.5a.75.75 0 0 1 1.06 0l4.5 4.5a.75.75 0 0 1-1.06 1.06L8.75 4.56v8.69A.75.75 0 0 1 8 14Z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </div>
                  </div>
                </button>
              </div>
              <div className="snap-center shrink-0">
                <button className="flex flex-col flex-1 shrink-0 w-64 justify-between h-36 p-5 px-6 bg-gray-50 hover:bg-gray-100 dark:bg-gray-850 dark:hover:bg-gray-800 rounded-3xl transition group">
                  <div className="flex flex-col text-left">
                    <div className="font-medium dark:text-gray-300 dark:group-hover:text-gray-200 transition">
                      Explain options trading
                    </div>
                    <div className="text-sm text-gray-600 font-normal line-clamp-2">
                      if I'm familiar with buying and selling stocks
                    </div>
                  </div>
                  <div className="w-full flex justify-between">
                    <div className="text-xs text-gray-400 group-hover:text-gray-500 dark:text-gray-600 dark:group-hover:text-gray-500 transition self-center">
                      Prompt
                    </div>
                    <div className="self-end p-1 rounded-lg text-gray-300 group-hover:text-gray-800 dark:text-gray-700 dark:group-hover:text-gray-100 transition">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                        className="size-4"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M8 14a.75.75 0 0 1-.75-.75V4.56L4.03 7.78a.75.75 0 0 1-1.06-1.06l4.5-4.5a.75.75 0 0 1 1.06 0l4.5 4.5a.75.75 0 0 1-1.06 1.06L8.75 4.56v8.69A.75.75 0 0 1 8 14Z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </div>
                  </div>
                </button>
              </div>
              <div className="snap-center shrink-0">
                <button className="flex flex-col flex-1 shrink-0 w-64 justify-between h-36 p-5 px-6 bg-gray-50 hover:bg-gray-100 dark:bg-gray-850 dark:hover:bg-gray-800 rounded-3xl transition group">
                  <div className="flex flex-col text-left">
                    <div className="font-medium dark:text-gray-300 dark:group-hover:text-gray-200 transition">
                      Show me a code snippet
                    </div>
                    <div className="text-sm text-gray-600 font-normal line-clamp-2">
                      of a website's sticky header
                    </div>
                  </div>
                  <div className="w-full flex justify-between">
                    <div className="text-xs text-gray-400 group-hover:text-gray-500 dark:text-gray-600 dark:group-hover:text-gray-500 transition self-center">
                      Prompt
                    </div>
                    <div className="self-end p-1 rounded-lg text-gray-300 group-hover:text-gray-800 dark:text-gray-700 dark:group-hover:text-gray-100 transition">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                        className="size-4"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M8 14a.75.75 0 0 1-.75-.75V4.56L4.03 7.78a.75.75 0 0 1-1.06-1.06l4.5-4.5a.75.75 0 0 1 1.06 0l4.5 4.5a.75.75 0 0 1-1.06 1.06L8.75 4.56v8.69A.75.75 0 0 1 8 14Z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </div>
                  </div>
                </button>
              </div>
              <div className="snap-center shrink-0">
                <button className="flex flex-col flex-1 shrink-0 w-64 justify-between h-36 p-5 px-6 bg-gray-50 hover:bg-gray-100 dark:bg-gray-850 dark:hover:bg-gray-800 rounded-3xl transition group">
                  <div className="flex flex-col text-left">
                    <div className="font-medium dark:text-gray-300 dark:group-hover:text-gray-200 transition">
                      Tell me a fun fact
                    </div>
                    <div className="text-sm text-gray-600 font-normal line-clamp-2">
                      about the Roman Empire
                    </div>
                  </div>
                  <div className="w-full flex justify-between">
                    <div className="text-xs text-gray-400 group-hover:text-gray-500 dark:text-gray-600 dark:group-hover:text-gray-500 transition self-center">
                      Prompt
                    </div>
                    <div className="self-end p-1 rounded-lg text-gray-300 group-hover:text-gray-800 dark:text-gray-700 dark:group-hover:text-gray-100 transition">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                        className="size-4"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M8 14a.75.75 0 0 1-.75-.75V4.56L4.03 7.78a.75.75 0 0 1-1.06-1.06l4.5-4.5a.75.75 0 0 1 1.06 0l4.5 4.5a.75.75 0 0 1-1.06 1.06L8.75 4.56v8.69A.75.75 0 0 1 8 14Z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </div>
                  </div>
                </button>
              </div>
              <div className="snap-center shrink-0">
                <button className="flex flex-col flex-1 shrink-0 w-64 justify-between h-36 p-5 px-6 bg-gray-50 hover:bg-gray-100 dark:bg-gray-850 dark:hover:bg-gray-800 rounded-3xl transition group">
                  <div className="flex flex-col text-left">
                    <div className="font-medium dark:text-gray-300 dark:group-hover:text-gray-200 transition">
                      Overcome procrastination
                    </div>
                    <div className="text-sm text-gray-600 font-normal line-clamp-2">
                      give me tips
                    </div>
                  </div>
                  <div className="w-full flex justify-between">
                    <div className="text-xs text-gray-400 group-hover:text-gray-500 dark:text-gray-600 dark:group-hover:text-gray-500 transition self-center">
                      Prompt
                    </div>
                    <div className="self-end p-1 rounded-lg text-gray-300 group-hover:text-gray-800 dark:text-gray-700 dark:group-hover:text-gray-100 transition">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                        className="size-4"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M8 14a.75.75 0 0 1-.75-.75V4.56L4.03 7.78a.75.75 0 0 1-1.06-1.06l4.5-4.5a.75.75 0 0 1 1.06 0l4.5 4.5a.75.75 0 0 1-1.06 1.06L8.75 4.56v8.69A.75.75 0 0 1 8 14Z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </div>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
