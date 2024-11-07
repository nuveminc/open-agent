import { Icon } from '@/components/atoms';

export const SidebarSearch = () => {
  return (
    <div className="px-2 mt-0.5 mb-2 flex justify-center space-x-2">
      <div className="flex w-full rounded-xl" id="chat-search">
        <div className="self-center pl-3 py-2 rounded-l-xl bg-transparent">
          <Icon
            name="magnifier"
            className="w-4 h-4"
            stroke="none"
            fill="currentColor"
          />
        </div>
        <input
          className="w-full rounded-r-xl py-1.5 pl-2.5 pr-4 text-sm bg-transparent dark:text-gray-300 outline-none"
          placeholder="Search"
        />
      </div>
    </div>
  );
};
