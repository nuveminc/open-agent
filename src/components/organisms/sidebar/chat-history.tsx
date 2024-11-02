import React from 'react';
import { ChatTimeRange } from './chat-timerange';
import { ChatItem } from './chat-item';

export const ChatHistory: React.FC = () => {
  return (
    <>
      <ChatTimeRange timeRange="Today" />
      <ChatItem title="SOC2 Compliance Checklist 📁" />
    </>
  );
};
