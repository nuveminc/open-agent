import React from 'react';
import { Link } from 'react-router-dom';
import { SidebarToggle } from '@/components/molecules/common/sidebar-toggle';

type SidebarHeaderProps = Readonly<{
  onClick: () => void;
}>;

export const SidebarHeader: React.FC<SidebarHeaderProps> = ({ onClick }) => {
  return (
    <div className="px-2.5 flex justify-between space-x-1 text-gray-600 dark:text-gray-400">
      <SidebarToggle onClick={onClick} />
      <Link
        to={'/'}
        className="flex flex-1 justify-between rounded-xl px-2 h-full hover:bg-gray-100 dark:hover:bg-gray-900 transition"
        draggable="false"
      >
        <div className="self-center mx-1.5">
          <img
            src="/src/assets/favicon.png"
            className="size-6 -translate-x-1.5 rounded-full"
            alt="logo"
          />
        </div>
        {/* <ImageIcon className="self-center mx-1.5" /> */}
        <div className="self-center font-medium text-sm text-gray-850 dark:text-white font-primary">
          New Chat
        </div>
        <div className="self-center ml-auto">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="size-5"
          >
            <path d="M5.433 13.917l1.262-3.155A4 4 0 017.58 9.42l6.92-6.918a2.121 2.121 0 013 3l-6.92 6.918c-.383.383-.84.685-1.343.886l-3.154 1.262a.5.5 0 01-.65-.65z"></path>
            <path d="M3.5 5.75c0-.69.56-1.25 1.25-1.25H10A.75.75 0 0010 3H4.75A2.75 2.75 0 002 5.75v9.5A2.75 2.75 0 004.75 18h9.5A2.75 2.75 0 0017 15.25V10a.75.75 0 00-1.5 0v5.25c0 .69-.56 1.25-1.25 1.25h-9.5c-.69 0-1.25-.56-1.25-1.25v-9.5z"></path>
          </svg>
        </div>
      </Link>
    </div>
  );
};
