import { Icon } from '@/components/atoms';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { cn } from '@/lib/utils';
import { useState } from 'react';

export const ModelSelector: React.FC<{ text: string }> = ({ text }) => {
  const [open, setOpen] = useState(false);
  // const [checkState, setCheckState] = useState(false);

  const toggleOpen = () => {
    console.log(open);
    setOpen(!open);
  };

  return (
    <div>
      <DropdownMenu modal={false} open={open} onOpenChange={toggleOpen}>
        <DropdownMenuTrigger className="py-2">
          <div className="w-full mr-1 mt-1 max-w-full">
            <button
              className="relative w-full font-primary"
              aria-label="Select a model"
            >
              <div className="flex justify-between w-[31rem] px-[.5rem] py-[.5rem] rounded-md text-left  text-sm font-normal outline-none bg-transparent truncate placeholder-gray-400 dark:bg-gray-850 focus:outline-none">
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
        </DropdownMenuTrigger>
        <DropdownMenuContent
          className={cn(
            'absolute z-[1000] w-[31rem] left-[-15.5rem] max-w-[calc(100vw-1rem)] justify-start',
            'rounded-xl bg-white dark:bg-gray-850 dark:text-white dark:bg-opacity-100',
            'shadow-lg border border-gray-300/30 dark:border-gray-700/40 outline-none'
          )}
        >
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
          <DropdownMenuItem
            className={cn(
              'flex text-left font-medium line-clamp-1 mt-1',
              'py-2 pl-3 pr-1.5 text-sm text-gray-700 dark:text-gray-100',
              'transition-all duration-75 hover:bg-gray-100 dark:hover:bg-gray-800',
              'rounded-lg cursor-pointer bg-gray-100 dark:bg-gray-900 group-hover:bg-transparent'
            )}
          >
            <div className="flex">
              <img
                src="/public/favicon.png"
                alt="Model"
                className="rounded-full size-5 flex items-center mr-2"
              />
              openchat:latest
              <div className="flex ml-1 items-center translate-y-[-2px]">
                <div aria-label="Q4_0 (4.3GB)" className="self-end">
                  <span className="text-xs font-medium text-gray-600 dark:text-gray-400 line-clamp-1">
                    7.0B
                  </span>
                </div>
              </div>
            </div>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};
