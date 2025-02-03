import React from 'react';
import { ScrollDown } from '../molecules/scroll-down';
import { ChatInput } from '../molecules/chat-input';
import { Navbar } from './navbar';

export const MessagesContainer: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <div className="w-full font-primary">
        <ScrollDown />
        <ChatInput />
      </div>
    </>
  );
};
