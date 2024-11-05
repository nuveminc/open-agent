import React from 'react';
import { ScrollDown } from '../molecules/scroll-down';
import { ChatInput } from '../molecules/chat-input';

export const MessagesContainer: React.FC<{
  children: React.ReactNode;
}> = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      className="pb-2.5 flex flex-col justify-between w-full flex-auto overflow-auto h-0 max-w-full z-10 scrollbar-hidden "
      id="messages-container"
    >
      {/* main content content scrolling overflow container */}
      {children}
      <div className="w-full font-primary">
        <ScrollDown />
        <ChatInput />
      </div>
    </div>
  );
};
