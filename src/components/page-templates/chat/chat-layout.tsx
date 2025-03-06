import React from 'react';
import { Navbar } from '@/components//organisms/navbar';
import { ControlPanel } from '@/components//organisms/control-panel';
import { useChatLayoutPresenter } from './useLayoutPresenter';
import { Outlet } from 'react-router-dom';

export const ChatLayout: React.FC<object> = () => {
  const { navbar } = useChatLayoutPresenter();

  console.log('MDOELS NAVBAR', navbar.getModels());

  return (
    <div className="flex flex-col h-screen">
      <Navbar
        models={navbar.getModels()}
        onSidebarToggle={navbar.handleClickSidebarToggle}
      />
      <div className="flex flex-row w-full h-full overflow-hidden">
        <Outlet />
        <div
          className={`flex h-full w-[30rem] ${
            !navbar.controlPanelOpen ? 'hidden' : ''
          }`}
        >
          <ControlPanel onClick={navbar.handleClickControlPanel} />
        </div>
      </div>
    </div>
  );
};
