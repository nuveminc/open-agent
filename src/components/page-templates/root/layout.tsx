import './layout.css';
import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Sidebar } from '../../organisms/sidebar';
import { useModalPresenter } from '@/presenters/app/useModalPresenter';
import { DialogContainer } from '../../organisms/common/dialog-container';
import { ChatListVM } from '@/models/chat/chat-list.class.vm';
import { useSidebarStore } from '@/store/sidebarStore';
import { useLayoutPresenter } from './useLayoutPresenter';
import { ModelCollection } from '@/models/model';

export const Layout: React.FC<object> = () => {
  const { presenter } = useModalPresenter();
  const chatList: ChatListVM = useLayoutPresenter().chat.getChatList();
  const models: ModelCollection = useLayoutPresenter().chat.models();
  const isLoading: boolean = useLayoutPresenter().chat.isLoading;

  const { isDisplayed, toggle } = useSidebarStore();
  const [sidebarVisible, setSidebarVisible] = useState(isDisplayed);

  useEffect(() => {
    setSidebarVisible(isDisplayed);
  }, [isDisplayed]);

  const handleSidebarDisplay = () => {
    console.log('LAYOUT SIDEBAR DISPLAY', isDisplayed);
    setSidebarVisible(!isDisplayed);
    toggle();
  };

  return (
    <>
      <div className="flex-1 w-screen">
        <div className="w-screen text-gray-700 dark:text-gray-100 bg-white dark:bg-gray-900 h-screen max-h-[100dvh] overflow-auto flex flex-row">
          <div className={sidebarVisible ? 'hidden' : ''}>
            <Sidebar
              chatList={chatList}
              isLoading={isLoading}
              onClick={handleSidebarDisplay}
            />
            <audio id="audioElement" />
          </div>
          {/* main content area */}
          <div className="h-screen max-h-[100dvh] w-full max-w-full flex flex-col">
            <div className="flex flex-col flex-auto">
              <Outlet context={models} />
              <DialogContainer
                type={presenter.currentModal}
                isOpen={presenter.modalOpen}
                showModal={presenter.showModal}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
