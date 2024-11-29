import { Icon } from '@/components/atoms';
import { DropdownSeparator } from '@/components/organisms/dropdown/dropdown-separator';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { cn } from '@/lib/utils';
import React, { useState } from 'react';

export const InterfaceSettings: React.FC<{ text: string }> = ({ text }) => {
  const [open, setOpen] = useState(true);
  // const [checkState, setCheckState] = useState(false);

  const toggleOpen = () => {
    console.log(open);
    setOpen(!open);
  };

  return (
    <div id="interface" className="text-sm font-medium">
      <div className="text-base">Default Model</div>
      <div>
        {/* @TODO: need to fix content shifting with scrollbar display  */}
        <div className="h-[25rem] w-full overflow-y-auto overflow-x-hidden pr-3">
          <DropdownMenu modal={false} open={open} onOpenChange={toggleOpen}>
            <DropdownMenuTrigger>
              <div>
                <div className="w-full flex justify-between mr-1 ml-4 mt-4 max-w-full">
                  <button
                    className="relative w-full font-primary"
                    aria-label="Select a model"
                  >
                    <div className="flex w-full text-left text-sm px-0.5 outline-none bg-transparent truncate text-lg font-medium placeholder-gray-400 focus:outline-none">
                      {text}
                      <Icon
                        name="arrowDown"
                        className="self-center ml-2 size-3"
                        stroke="currentColor"
                        strokeWidth="2.5"
                      />
                    </div>
                  </button>
                </div>
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              className={cn(
                'absolute z-[1000] w-[32rem] left-[-3rem] max-w-[calc(100vw-1rem)] justify-start',
                'rounded-xl bg-white dark:bg-gray-850 dark:text-white dark:bg-opacity-100',
                'shadow-lg border border-gray-300/30 dark:border-gray-700/40 outline-none'
              )}
            >
              <DropdownMenuItem>
                <div
                  className="flex items-center gap-2.5 px-2"
                  onClick={(event) => event.stopPropagation()}
                >
                  <Icon
                    name="magnifier"
                    strokeWidth="1.25"
                    className="size-4"
                  />
                  <input
                    id="model-search-input"
                    className="w-full text-sm bg-transparent outline-none"
                    placeholder="Search a model"
                    autoComplete="off"
                    onClick={(event) => event.stopPropagation()}
                  />
                </div>
              </DropdownMenuItem>

              <DropdownSeparator />
              <DropdownMenuItem
                className={cn(
                  'flex text-left font-medium line-clamp-1 select-none items-center',
                  'py-2 pl-3 pr-1.5 text-sm text-gray-700 dark:text-gray-100 outline-none',
                  'transition-all duration-75 hover:bg-gray-100 dark:hover:bg-gray-800',
                  'rounded-lg cursor-pointer data-[highlighted]:bg-muted bg-gray-100 dark:bg-gray-800 group-hover:bg-transparent'
                )}
              >
                <div className="flex">
                  <img
                    src="/public/favicon.png"
                    alt="Model"
                    className="rounded-full size-5 flex items-center mr-2"
                  />
                  llama3.1:latest
                  <div className="flex ml-1 items-center translate-y-[-2px]">
                    <div aria-label="Q4_0 (4.3GB)" className="self-end">
                      <span className="text-xs font-medium text-gray-600 dark:text-gray-400 line-clamp-1">
                        8.0B
                      </span>
                    </div>
                  </div>
                  <div className="ml-auto pl-2 pr-2 md:pr-0">
                    <Icon name="checkmark" />
                  </div>
                </div>
              </DropdownMenuItem>

              <DropdownSeparator />
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </div>
  );
};
