import React from 'react';
import { useLocation } from 'react-router-dom';
import { ScrollDown } from '../molecules/scroll-down';
import { ChatInput } from '../molecules/chat-input';
import { Navbar } from './navbar';
import { SettingsDialog } from './sidebar/profile/settings/settings-dialog';
import { useAppPresenter } from '@/presenters/app/useAppPresenter';
export const MessagesContainer: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const { presenter } = useAppPresenter();
  const location = useLocation();
  const showChatControls = location.pathname !== '/';
  return (
    <>
      <Navbar />
      <div className="flex flex-col flex-auto">
        <div
          className="pb-2.5 flex flex-col justify-between w-full flex-auto overflow-auto h-0 max-w-full scrollbar-hidden"
          id="messages-container"
        >
          {children}
        </div>
        {showChatControls && (
          <div className="w-full font-primary">
            <ScrollDown />
            <ChatInput />
          </div>
        )}
      </div>
      <SettingsDialog
        isOpen={presenter.modalOpen}
        showModal={presenter.showModal}
      />
    </>
  );
};
