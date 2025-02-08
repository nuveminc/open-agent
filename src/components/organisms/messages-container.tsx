import React from 'react';
import { ScrollDown } from '../molecules/scroll-down';
import { ChatInput } from '../molecules/chat-input';
import { Navbar } from './navbar';

export const MessagesContainer: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  return (
    <div className="flex flex-col h-screen overflow-hidden">
      <Navbar />
      <div className="flex h-full overflow-auto">
        <div className="flex w-full h-full justify-center">{children}</div>
      </div>
      <div className="w-full font-primary">
        <ScrollDown />
        <ChatInput />
      </div>
    </div>
  );
};
