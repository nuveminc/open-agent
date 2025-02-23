import React from 'react';
import { ScrollDown } from '../molecules/scroll-down';
import { ChatInput } from '../molecules/chat-input';
import { Navbar } from './navbar';
import { useChatSessionPresenter } from '../../presenters/chat/useChatSessionPresenter';

export const ChatContainer: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const { containerRef, showScrollDown, scrollToBottom, handleScroll } =
    useChatSessionPresenter(children);

  return (
    <div className="flex flex-col h-screen overflow-hidden">
      <Navbar />
      <div
        ref={containerRef}
        onScroll={handleScroll}
        className="flex h-full overflow-auto"
      >
        <div className="flex w-full h-full justify-center">{children}</div>
      </div>
      <div className="w-full font-primary">
        {showScrollDown && <ScrollDown onClick={scrollToBottom} />}
        <ChatInput />
      </div>
    </div>
  );
};
