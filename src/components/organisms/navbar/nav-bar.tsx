import { Icon } from '../../atoms';
import { ThemeToggle } from '../../ThemeToggle';
import { ControlsMenuButton } from './controls-menu-button';
import { NewChatButton } from '../sidebar/header/new-chat-button';
import { UserMenu } from './user-menu';
import { ModelDropdown } from './model-selector/model-dropdown';

// import { useState } from 'react';

export const Navbar = () => {
  // const [isOpen, setModal] = useState(false);

  return (
    <nav
      id="nav"
      className="sticky py-2.5 top-0 flex flex-row justify-center z-10"
    >
      {/* navbar container  */}
      <div className="flex max-w-full w-full mx-auto px-5 pt-0.5 md:px-[1rem]">
        <div className="flex items-center w-full max-w-full">
          {/* hidden sidebar toggle: display when sidebar closed */}
          <div className="md:hidden mr-3 self-start flex flex-none items-center text-gray-600 dark:text-gray-400">
            <button
              id="sidebar-toggle-button"
              className="cursor-pointer px-2 py-2 flex rounded-xl hover:bg-gray-50 dark:hover:bg-gray-850 transition"
              aria-label="Toggle Sidebar"
            >
              <div className="m-auto self-center">
                <Icon name="toggle" strokeWidth="2.0" className="size-5" />
              </div>
            </button>
          </div>
          {/* navbar header section: left */}
          <div className="flex-1 overflow-hidden max-w-full">
            <div className="flex flex-col w-full items-start">
              {/* select model section */}
              <div className="flex w-full max-w-fit">
                {/* model selector dropdown */}
                <ModelDropdown text="llama3.1:latest" />
                {/* add new model button: + */}
                <div className="self-center mx-1 disabled:text-gray-600 disabled:hover:text-gray-600 -translate-y-[0.5px]">
                  <div aria-label="Add Model" className="flex">
                    <button className="" aria-label="Add Model">
                      <Icon
                        name="plus"
                        stroke="none"
                        className="size-3.5"
                        strokeWidth="2"
                        fill="currentColor"
                      />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* navbar header control section: right */}
          <div className="self-start flex flex-none items-center text-gray-600 dark:text-gray-400">
            <button
              aria-controls="eLkFrT3qLS"
              aria-expanded="false"
              data-state="closed"
              id="YJujHVTQrA"
              tabIndex={0}
              data-melt-dropdown-menu-trigger=""
              data-menu-trigger=""
              type="button"
            >
              <button
                className="hidden md:flex cursor-pointer px-2 py-2 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-850 transition"
                id="chat-context-menu-button"
              >
                <div className="m-auto self-center">
                  <Icon
                    name="ellipsis"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    className="size-4"
                  />
                </div>
              </button>
            </button>
            <div slot="content"></div>
            <ControlsMenuButton />
            <NewChatButton />
            <UserMenu />
            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
};
