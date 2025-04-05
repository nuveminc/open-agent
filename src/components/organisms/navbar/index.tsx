import React, { useEffect, useState } from 'react';
import { Icon } from '../../atoms';
import { ThemeToggle } from '../../molecules/common/theme-toggle';
import { ControlsMenuButton } from './controls-menu-button';
import { NewChatButton } from '../sidebar/header/new-chat-button';
import { UserMenu } from './user-menu';
import { useModalPresenter } from '@/presenters/app/useModalPresenter';
import { SidebarToggle } from '@/components/molecules/common/sidebar-toggle';
import { useSidebarStore } from '@/store/sidebarStore';
import { ModelVM } from '@/models/model';
import { ModelSelectorDropdwon } from './model-selector/model-selector-dropdown';

type NavbarProps = Readonly<{
  models: ModelVM[];
  onSidebarToggle: (isSidbarVisible: boolean) => void;
}>;
export const Navbar: React.FC<NavbarProps> = ({ models, onSidebarToggle }) => {
  const { presenter } = useModalPresenter();
  const { isDisplayed } = useSidebarStore();
  const [sidebarToggleVisible, setSidebarToggleVisible] = useState(true);
  const [selectedModel, setSelectedModel] = useState<ModelVM>(
    models && models[0]
  );

  const handleClick = () => {
    const isOpen = presenter.controlPanelOpen;
    presenter.showControlPanel(!isOpen);
  };

  useEffect(() => {
    setSidebarToggleVisible(!isDisplayed);
    setSelectedModel(models && models[0]);
  }, [isDisplayed, models]);

  const handleSidebarToggle = () => {
    setSidebarToggleVisible(!isDisplayed);
    onSidebarToggle(isDisplayed);
  };

  const handleModelSelect = (model: ModelVM) => {
    console.log('Selected Model:', model);
    setSelectedModel(model);
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
                {/* <ModelDropdown models={models} text="llama3.1:latest" /> */}
                <ModelSelectorDropdwon
                  defaultValue={selectedModel}
                  models={models}
                  onClick={handleModelSelect}
                />
                {/* add new model button: + */}
                <div className="self-center mx-1 disabled:text-gray-600 disabled:hover:text-gray-600 -translate-y-[0.5px]">
                  <div aria-label="Add Model" className="flex">
                    <div className="" aria-label="Add Model">
                      <Icon
                        name="plus"
                        stroke="none"
                        className="size-3.5"
                        strokeWidth="2"
                        fill="currentColor"
                      />
                    </div>
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
