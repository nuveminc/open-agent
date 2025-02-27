import React from 'react';
import { ScrollDown } from '@/components/molecules/scroll-down';
import { ChatInput } from '@/components//organisms/chat/chat-input';
import { Navbar } from '@/components//organisms/navbar';
import { Control } from '@/components//organisms/control-panel';
import { useChatContainerPresenter } from './useContainerPresenter';
import { useSessionScrollHandler } from './useSessionScrollHandler';

export const ChatContainer: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const { navbar } = useChatContainerPresenter();
  const { containerRef, showScrollDown, scrollToBottom, handleScroll } =
    useSessionScrollHandler(children);

  return (
    <div className="flex flex-col h-screen">
      <Navbar onSidebarToggle={navbar.handleClickSidebarToggle} />
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
            !navbar.controlPanelOpen ? 'hidden' : ''
          }`}
        >
          <Control onClick={navbar.handleClickControlPanel} />
        </div>
      </div>
    </div>
  );
};
