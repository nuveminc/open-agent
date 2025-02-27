import { Icon } from '../../atoms';
import { ThemeToggle } from '../../molecules/common/theme-toggle';
import { ControlsMenuButton } from './controls-menu-button';
import { NewChatButton } from '../sidebar/header/new-chat-button';
import { UserMenu } from './user-menu';
import { ModelDropdown } from './model-selector/model-dropdown';
import { useModalPresenter } from '@/presenters/app/useModalPresenter';
import { SidebarToggle } from '@/components/molecules/common/sidebar-toggle';
import React, { useEffect } from 'react';
import { useSidebarStore } from '@/store/sidebarStore';

type NavbarProps = Readonly<{
  onSidebarToggle: (isSidbarVisible: boolean) => void;
}>;
export const Navbar: React.FC<NavbarProps> = ({ onSidebarToggle }) => {
  const { presenter } = useModalPresenter();
  const { isDisplayed } = useSidebarStore();
  const [sidebarToggleVisible, setSidebarToggleVisible] = React.useState(true);

  const handleClick = () => {
    const isOpen = presenter.controlPanelOpen;
    presenter.showControlPanel(!isOpen);
  };

  useEffect(() => {
    setSidebarToggleVisible(!isDisplayed);
  }, [isDisplayed]);

  const handleSidebarToggle = () => {
    setSidebarToggleVisible(!isDisplayed);
    onSidebarToggle(isDisplayed);
  };

  return (
    <div className="top-0 flex flex-row justify-center z-10">
      {/* navbar container  */}
      <div className="flex w-full mx-auto px-3 md:px-[1rem]">
        <div className="flex items-center w-full max-w-full">
          {/* hide toggle when sidebar is displayed */}
          <div className={sidebarToggleVisible ? 'hidden' : ''}>
            {/* hidden sidebar toggle: display when sidebar closed */}
            <SidebarToggle onClick={handleSidebarToggle} />
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
