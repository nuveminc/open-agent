import { Icon } from '../../atoms';
import { ThemeToggle } from '../../molecules/common/theme-toggle';
import { ControlsMenuButton } from './controls-menu-button';
import { NewChatButton } from '../sidebar/header/new-chat-button';
import { UserMenu } from './user-menu';
import { ModelDropdown } from './model-selector/model-dropdown';
import { useModalPresenter } from '@/presenters/app/useModalPresenter';

export const Navbar = () => {
  const { presenter } = useModalPresenter();

  const handleClick = () => {
    const isOpen = presenter.controlPanelOpen;
    presenter.showControlPanel(!isOpen);
  };

  return (
    <div className="top-0 flex flex-row justify-center z-10">
      {/* navbar container  */}
      <div className="flex w-full mx-auto px-3 md:px-[1rem]">
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
            <div className="flex flex-col w-full items-start justify-center">
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
          <div className="flex flex-none items-center text-gray-600 dark:text-gray-400">
            <ControlsMenuButton onClick={handleClick} />
            <NewChatButton />
            <UserMenu />
            <ThemeToggle />
          </div>
        </div>
      </div>
    </div>
  );
};
