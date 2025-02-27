import React from 'react';
import { cn } from '@/lib/utils';

type SidebarToggleProps = Readonly<{
  onClick: () => void;
}>;

export const SidebarToggle: React.FC<SidebarToggleProps> = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        'cursor-pointer px-2 py-2 flex rounded-xl hover:bg-gray-100 dark:hover:bg-gray-900 transition'
      )}
    >
      <div className="m-auto self-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="2"
          stroke="currentColor"
          className="size-5"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12"
          ></path>
        </svg>
      </div>
    </button>
  );
};
