import React from 'react';
import { ScrollDown } from '@/components/molecules/scroll-down';
import { ChatInput } from '@/components//organisms/chat/chat-input';
import { useSessionScrollHandler } from './useSessionScrollHandler';

export const ChatContainer: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const { containerRef, showScrollDown, scrollToBottom, handleScroll } =
    useSessionScrollHandler(children);

  return (
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
  );
};
