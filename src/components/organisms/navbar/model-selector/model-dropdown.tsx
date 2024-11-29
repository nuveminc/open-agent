import { Icon } from '@/components/atoms';
import { DropdownSeparator } from '@/components/organisms/dropdown/dropdown-separator';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Switch } from '@/components/ui/switch';
import { cn } from '@/lib/utils';
import { useChatPresenter } from '@/presenters/chat/useChatPresenter';
import { useState } from 'react';

export const ModelDropdown: React.FC<{
  text: string;
}> = ({ text }: { text: string }) => {
  const { presenter } = useChatPresenter();

  const [open, setOpen] = useState(false);
  const [checkState, setCheckState] = useState(presenter.isTemporaryChat());

  const temporaryChatSwitch = (checked: boolean) => {
    console.log('CHECKED:', checked);
    setCheckState(checked);
    setOpen(false);
  };
  return (
    <DropdownMenu modal={false} open={open} onOpenChange={setOpen}>
      <DropdownMenuTrigger>
        <div className="overflow-hidden w-full">
          <div className="mr-1 max-w-full">
            <button
              aria-controls="YYDZcq3Eh9"
              aria-expanded="false"
              data-state="closed"
              id="s05A8nb-ZW"
              tabIndex={0}
              data-melt-dropdown-menu-trigger=""
              data-menu-trigger=""
              type="button"
              className="relative w-full font-primary"
              aria-label="Select a model"
            >
              <div className="flex w-full text-left px-0.5 outline-none bg-transparent truncate text-lg font-medium placeholder-gray-400 focus:outline-none">
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
          'absolute z-140 w-[32rem] max-w-[calc(100vw-1rem)] justify-start',
          'rounded-xl bg-white dark:bg-gray-850 dark:text-white dark:bg-opacity-100',
          'shadow-lg border border-gray-300/30 dark:border-gray-700/40 outline-none'
        )}
        style={{ left: '-70px' }}
      >
        <DropdownMenuItem>
          <div
            className="flex items-center gap-2.5 px-2"
            onClick={(event) => event.stopPropagation()}
          >
            <Icon name="magnifier" strokeWidth="1.25" className="size-4" />
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
        <DropdownMenuItem
          className={cn(
            'flex text-left font-medium line-clamp-1 select-none items-center',
            'py-2 pl-3 pr-1.5 text-sm text-gray-700 dark:text-gray-100 outline-none',
            'transition-all duration-75 hover:bg-gray-100 dark:hover:bg-gray-800',
            'rounded-lg cursor-pointer data-[highlighted]:bg-muted group-hover:bg-transparent'
          )}
        >
          <div
            className="flex justify-between font-medium"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex gap-2.5 items-center">
              <Icon name="chatBubble" strokeWidth="2.5" />
              Temporary Chat
            </div>
            <div>
              <Switch
                id="temporary-chat"
                checked={checkState}
                onCheckedChange={temporaryChatSwitch}
              />
            </div>
          </div>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
