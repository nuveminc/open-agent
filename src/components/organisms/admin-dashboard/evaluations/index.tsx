import React from 'react';

const Evaluations: React.FC = () => {
  return (
    <div className="pb-1 px-[16px] flex-1 max-h-full overflow-y-auto">
      <div className="flex flex-col lg:flex-row w-full h-full pb-2 lg:space-x-4">
        <div
          id="users-tabs-container"
          className="tabs flex flex-row overflow-x-auto gap-2.5 max-w-full lg:gap-1 lg:flex-col lg:flex-none lg:w-40 dark:text-gray-200 text-sm font-medium text-left scrollbar-none"
        >
          <button className="px-0.5 py-1 min-w-fit rounded-lg lg:flex-none flex text-right transition ">
            <div className="self-center mr-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="size-4"
              >
                <path
                  fill-rule="evenodd"
                  d="M4 2a1.5 1.5 0 0 0-1.5 1.5v9A1.5 1.5 0 0 0 4 14h8a1.5 1.5 0 0 0 1.5-1.5V6.621a1.5 1.5 0 0 0-.44-1.06L9.94 2.439A1.5 1.5 0 0 0 8.878 2H4Zm6 5.75a.75.75 0 0 1 1.5 0v3.5a.75.75 0 0 1-1.5 0v-3.5Zm-2.75 1.5a.75.75 0 0 1 1.5 0v2a.75.75 0 0 1-1.5 0v-2Zm-2 .75a.75.75 0 0 0-.75.75v.5a.75.75 0 0 0 1.5 0v-.5a.75.75 0 0 0-.75-.75Z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </div>
            <div className="self-center">Leaderboard</div>
          </button>
          <button className="px-0.5 py-1 min-w-fit rounded-lg lg:flex-none flex text-right transition  text-gray-300 dark:text-gray-600 hover:text-gray-700 dark:hover:text-white">
            <div className="self-center mr-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="size-4"
              >
                <path
                  fill-rule="evenodd"
                  d="M5.25 2A2.25 2.25 0 0 0 3 4.25v9a.75.75 0 0 0 1.183.613l1.692-1.195 1.692 1.195a.75.75 0 0 0 .866 0l1.692-1.195 1.693 1.195A.75.75 0 0 0 13 13.25v-9A2.25 2.25 0 0 0 10.75 2h-5.5Zm3.03 3.28a.75.75 0 0 0-1.06-1.06L4.97 6.47a.75.75 0 0 0 0 1.06l2.25 2.25a.75.75 0 0 0 1.06-1.06l-.97-.97h1.315c.76 0 1.375.616 1.375 1.375a.75.75 0 0 0 1.5 0A2.875 2.875 0 0 0 8.625 6.25H7.311l.97-.97Z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </div>
            <div className="self-center">Feedbacks</div>
          </button>
        </div>
        <div className="flex-1 mt-1 lg:mt-0 overflow-y-scroll">
          <div className="mt-0.5 mb-2 gap-1 flex flex-col md:flex-row justify-between">
            <div className="flex md:self-center text-lg font-medium px-0.5 shrink-0 items-center">
              <div className="gap-1">Leaderboard</div>
              <div className="flex self-center w-[1px] h-6 mx-2.5 bg-gray-50 dark:bg-gray-850"></div>
              <span className="text-lg font-medium text-gray-500 dark:text-gray-300 mr-1.5">
                2
              </span>
            </div>
            <div className="flex space-x-2">
              <div
                aria-label="Re-rank models by topic similarity"
                className="flex"
              >
                <div className="flex flex-1">
                  <div className="self-center ml-1 mr-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="2"
                      stroke="currentColor"
                      className="size-3"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                      ></path>
                    </svg>
                  </div>
                  <input
                    className="w-full text-sm pr-4 py-1 rounded-r-xl outline-none bg-transparent"
                    placeholder="Search"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="scrollbar-hidden relative whitespace-nowrap overflow-x-auto max-w-full rounded pt-0.5">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 table-auto max-w-full rounded ">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-850 dark:text-gray-400 -translate-y-0.5">
                <tr className="">
                  <th
                    scope="col"
                    className="px-3 py-1.5 cursor-pointer select-none w-3"
                  >
                    RK
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-1.5 cursor-pointer select-none"
                  >
                    Model
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-1.5 text-right cursor-pointer select-none w-fit"
                  >
                    Rating
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-1.5 text-right cursor-pointer select-none w-5"
                  >
                    Won
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-1.5 text-right cursor-pointer select-none w-5"
                  >
                    Lost
                  </th>
                </tr>
              </thead>
              <tbody className="">
                <tr className="bg-white dark:bg-gray-900 dark:border-gray-850 text-xs group">
                  <td className="px-3 py-1.5 text-left font-medium text-gray-900 dark:text-white w-fit">
                    <div className="line-clamp-1">-</div>
                  </td>
                  <td className="px-3 py-1.5 flex flex-col justify-center">
                    <div className="flex items-center gap-2">
                      <div className="flex-shrink-0">
                        <img
                          src="/favicon.png"
                          alt="llama3.1:latest"
                          className="size-5 rounded-full object-cover shrink-0"
                        />
                      </div>
                      <div className="font-medium text-gray-800 dark:text-gray-200 pr-4">
                        llama3.1:latest
                      </div>
                    </div>
                  </td>
                  <td className="px-3 py-1.5 text-right font-medium text-gray-900 dark:text-white w-max">
                    -
                  </td>
                  <td className="px-3 py-1.5 text-right font-semibold text-green-500">
                    <div className="w-10">-</div>
                  </td>
                  <td className="px-3 py-1.5 text-right font-semibold text-red-500">
                    <div className="w-10">-</div>
                  </td>
                </tr>
                <tr className="bg-white dark:bg-gray-900 dark:border-gray-850 text-xs group">
                  <td className="px-3 py-1.5 text-left font-medium text-gray-900 dark:text-white w-fit">
                    <div className="line-clamp-1">-</div>
                  </td>
                  <td className="px-3 py-1.5 flex flex-col justify-center">
                    <div className="flex items-center gap-2">
                      <div className="flex-shrink-0">
                        <img
                          src="/favicon.png"
                          alt="llama3.3:latest"
                          className="size-5 rounded-full object-cover shrink-0"
                        />
                      </div>
                      <div className="font-medium text-gray-800 dark:text-gray-200 pr-4">
                        llama3.3:latest
                      </div>
                    </div>
                  </td>
                  <td className="px-3 py-1.5 text-right font-medium text-gray-900 dark:text-white w-max">
                    -
                  </td>
                  <td className="px-3 py-1.5 text-right font-semibold text-green-500">
                    <div className="w-10">-</div>
                  </td>
                  <td className="px-3 py-1.5 text-right font-semibold text-red-500">
                    <div className="w-10">-</div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="text-gray-500 text-xs mt-1.5 w-full flex justify-end">
            <div className="text-right">
              <div className="line-clamp-1">
                ⓘ The evaluation leaderboard is based on the Elo rating system
                and is updated in real-time.
              </div>{' '}
              The leaderboard is currently in beta, and we may adjust the rating
              calculations as we refine the algorithm.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Evaluations;
