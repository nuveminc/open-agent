import React from 'react';

const GroupSearchBar: React.FC = () => {
  return (
    <>
      <div className="flex flex-1">
        <div className="self-center ml-1 mr-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-4 h-4"
          >
            <path
              fill-rule="evenodd"
              d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </div>
        <input
          className="w-full text-sm pr-4 py-1 rounded-r-xl outline-none bg-transparent"
          placeholder="Search"
        />
      </div>
      <div>
        <div aria-label="Create Group" className="flex">
          <button className="p-2 rounded-xl hover:bg-gray-100 dark:bg-gray-900 dark:hover:bg-gray-850 transition font-medium text-sm flex items-center space-x-1">
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
                d="M12 4.5v15m7.5-7.5h-15"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </>
  );
};

export default GroupSearchBar;
