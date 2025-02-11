import React from 'react';

export const Feedback: React.FC = () => {
  return (
    <div className="flex-1 mt-1 lg:mt-0 overflow-y-scroll">
      <div className="mt-0.5 mb-2 gap-1 flex flex-row justify-between">
        <div className="flex md:self-center text-lg font-medium px-0.5">
          Feedback History{' '}
          <div className="flex self-center w-[1px] h-6 mx-2.5 bg-gray-50 dark:bg-gray-850"></div>{' '}
          <span className="text-lg font-medium text-gray-500 dark:text-gray-300">
            0
          </span>
        </div>{' '}
        <div>
          <div>
            <div aria-label="Export" className="flex">
              <button className="p-2 rounded-xl hover:bg-gray-100 dark:bg-gray-900 dark:hover:bg-gray-850 transition font-medium text-sm flex items-center space-x-1">
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
                    d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>{' '}
      <div className="scrollbar-hidden relative whitespace-nowrap overflow-x-auto max-w-full rounded pt-0.5">
        <div className="text-center text-xs text-gray-500 dark:text-gray-400 py-1">
          No feedbacks found
        </div>
      </div>{' '}
    </div>
  );
};
