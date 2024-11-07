import React from 'react';
import { DropdownMenu } from '@/components/ui/dropdown-menu';
import {
  DropdownMenuContent,
  DropdownMenuTrigger,
} from '@radix-ui/react-dropdown-menu';
export const ModelSelect: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>{children}</DropdownMenuTrigger>
        <DropdownMenuContent className="ml-10 border-1 border-black">
          <div className="flex items-center gap-2.5 px-5 mt-3.5 mb-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="2.5"
              stroke="currentColor"
              className="size-4"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              ></path>
            </svg>
            <input
              id="model-search-input"
              className="w-full text-sm bg-transparent outline-none"
              placeholder="Search a model"
              autoComplete="off"
            />
          </div>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};
