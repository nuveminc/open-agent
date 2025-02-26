import React from 'react';
import { ScrollDown } from '../molecules/scroll-down';
import { ChatInput } from '../molecules/chat-input';
import { Navbar } from './navbar';
import { useChatSessionPresenter } from '../../presenters/chat/useChatSessionPresenter';
import { useAppPresenter } from '@/presenters/app/useAppPresenter';
import { Control } from './control-panel';

export const ChatContainer: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const { presenter } = useAppPresenter();
  const { containerRef, showScrollDown, scrollToBottom, handleScroll } =
    useChatSessionPresenter(children);

  const handleClick = () => {
    const showPanel = !presenter.controlPanelOpen;
    presenter.showControlPanel(showPanel);
  };

  return (
    <div className="flex flex-col h-screen">
      <Navbar />
      <div className="flex flex-row w-full h-full overflow-hidden">
        <div className="flex flex-col w-full">
          <div
            ref={containerRef}
            onScroll={handleScroll}
            className="flex h-full justify-center overflow-auto"
          >
            {children}
          </div>
          <div className="flex flex-col justify-center mt-4">
            {showScrollDown && <ScrollDown onClick={scrollToBottom} />}
            <ChatInput />
          </div>
        </div>
        <div
          className={`flex h-full w-[30rem] ${
            !presenter.controlPanelOpen ? 'hidden' : ''
          }`}
        >
          <Control onClick={handleClick} />
        </div>
      </div>
    </div>
  );
};
