import React from 'react';
import { Outlet } from 'react-router-dom';
import { Sidebar } from '../organisms/sidebar';
import { useModalPresenter } from '@/presenters/app/useModalPresenter';
import { DialogContainer } from '../organisms/common/dialog-container';
import './layout.css';
import { ChatListVM } from '@/models/chat/chat-list.class.vm';
import { useChatPresenter } from '@/presenters/chat/useChatPresenter';

export const Layout: React.FC<object> = () => {
  const { presenter } = useModalPresenter();
  const chatList: ChatListVM = useChatPresenter().presenter.getChatList();
  const isLoading: boolean = useChatPresenter().presenter.isLoading;

  return (
    <>
      <div className="app relative">
        <div className="text-gray-700 dark:text-gray-100 bg-white dark:bg-gray-900 h-screen max-h-[100dvh] overflow-auto flex flex-row">
          <Sidebar chatList={chatList} isLoading={isLoading} />
          <audio id="audioElement" />
          {/* main content area */}
          <div className="h-screen max-h-[100dvh] md:max-w-[calc(100%-260px)] w-full max-w-full flex flex-col">
            <div className="flex flex-col flex-auto">
              <Outlet />
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
