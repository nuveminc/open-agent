import React from 'react';

export const SearchBar: React.FC = () => {
  return (
    <div className="flex bg-gray-800 rounded-xl" aria-text="Search">
      <div className="self-center ml-2 mr-3">
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
        className="w-full text-sm pr-4 py-1 rounded-r-xl outline-none bg-gray-800"
        placeholder="Search"
      />
    </div>
  );
};
