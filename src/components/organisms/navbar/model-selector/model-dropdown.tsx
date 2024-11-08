import { Icon } from '@/components/atoms';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
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
        className="absolute ' z-140 w-[32rem] max-w-[calc(100vw-1rem)] justify-start rounded-xl bg-white dark:bg-gray-850 dark:text-white dark:bg-opacity-100 shadow-lg border border-gray-300/30 dark:border-gray-700/40 outline-none"
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
        <DropdownMenuSeparator
          className="border-gray-100 dark:border-gray-800"
          style={{ borderTopWidth: '1px' }}
        />
        <DropdownMenuItem
          className="flex text-left font-medium line-clamp-1 select-none items-center py-2 pl-3 pr-1.5 text-sm text-gray-700 dark:text-gray-100 outline-none transition-all duration-75 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg cursor-pointer data-[highlighted]:bg-muted bg-gray-100 dark:bg-gray-800 group-hover:bg-transparent"
          style={{
            borderRadius: '.25rem',
            marginLeft: '.25rem',
            marginRight: '.25rem',
          }}
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
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-4 h-4"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m4.5 12.75 6 6 9-13.5"
                ></path>
              </svg>
            </div>
          </div>
        </DropdownMenuItem>
        <DropdownMenuSeparator
          className="border-gray-100 dark:border-gray-800"
          style={{ borderTopWidth: '1px' }}
        />
        <DropdownMenuItem
          className={cn(
            'flex text-left font-medium line-clamp-1 select-none items-center',
            'py-2 pl-3 pr-1.5 text-sm text-gray-700 dark:text-gray-100 outline-none',
            'transition-all duration-75 hover:bg-gray-100 dark:hover:bg-gray-800',
            'rounded-lg cursor-pointer data-[highlighted]:bg-muted group-hover:bg-transparent'
          )}
          style={{
            borderRadius: '.25rem',
            marginLeft: '.25rem',
            marginRight: '.25rem',
          }}
        >
          <div
            className="flex justify-between font-medium"
            onClick={(event) => event.stopPropagation()}
          >
            {/* className="flex justify-between w-full font-medium line-clamp-1 select-none items-center rounded-button py-1 px-2 text-sm text-gray-700 dark:text-gray-100 outline-none transition-all duration-75 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg cursor-pointer data-[highlighted]:bg-muted" */}
            <div className="flex gap-2.5 items-center">
              <Icon name="chatBubble" strokeWidth="2.5" />
              Temporary Chat
            </div>
            <div>
              <Switch
                id="airplane-mode"
                className={cn(
                  'dark:data-[state=checked]:bg-green-500 ',
                  'flex h-5 min-h-5 w-9 shrink-0 cursor-pointer items-center rounded-full px-[3px] transition',
                  'bg-gray-200 dark:bg-transparent outline outline-1 outline-gray-100 dark:outline-gray-800'
                )}
                checked={checkState}
                onCheckedChange={temporaryChatSwitch}
              />
              {/* <Label htmlFor="airplane-mode">Airplane Mode</Label> */}
            </div>
            {/* <div>
              <button
                data-state="unchecked"
                type="button"
                role="switch"
                aria-checked="false"
                data-melt-switch=""
                data-switch-root=""
                className="flex h-5 min-h-5 w-9 shrink-0 cursor-pointer items-center rounded-full px-[3px] transition  bg-gray-200 dark:bg-transparent outline outline-1 outline-gray-100 dark:outline-gray-800"
              >
                <span
                  className="pointer-events-none block size-4 shrink-0 rounded-full bg-white transition-transform data-[state=checked]:translate-x-3.5 data-[state=unchecked]:translate-x-0 data-[state=unchecked]:shadow-mini "
                  data-switch-thumb=""
                  data-state="unchecked"
                ></span>
              </button>
              <input
                type="checkbox"
                aria-hidden="true"
                hidden={true}
                tabIndex={-1}
                name=""
                value="on"
                data-melt-switch-input=""
                style={{
                  position: 'absolute',
                  opacity: 0,
                  pointerEvents: 'none',
                  margin: '0px',
                  transform: 'translateX(-100%)',
                }}
              />
            </div> */}
          </div>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
