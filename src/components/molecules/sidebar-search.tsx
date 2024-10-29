export const SidebarSearch = () => {
  return (
    <div className="px-2 mt-0.5 mb-2 flex justify-center space-x-2">
      <div className="flex w-full rounded-xl" id="chat-search">
        <div className="self-center pl-3 py-2 rounded-l-xl bg-transparent">
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
          className="w-full rounded-r-xl py-1.5 pl-2.5 pr-4 text-sm bg-transparent dark:text-gray-300 outline-none"
          placeholder="Search"
        />
      </div>
    </div>
  );
};
