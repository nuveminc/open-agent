import React from 'react';
import { ChatTimeRange } from './chat-timerange';
import { ChatItem } from './chat-item';
import { ChatListVM } from '@/models/chat/chat-list.class.vm';

type ChatSessionHistoryProps = {
  chatList: ChatListVM;
  isLoading: boolean;
};
export const ChatSessionHistory: React.FC<ChatSessionHistoryProps> = ({
  chatList,
  isLoading,
}) => {
  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-full">
        <div className="text-sm text-gray-500">Loading chats...</div>
      </div>
    );
  }

  if (!chatList || !chatList.ranges || chatList.ranges.length === 0) {
    return (
      <div className="flex items-center justify-center h-full">
        <div className="text-sm text-gray-500">No chats found</div>
      </div>
    );
  }

  return (
    <>
      {chatList.ranges.map((range: string, idx: number) => (
        <React.Fragment key={`chat-${idx}`}>
          <ChatTimeRange timeRange={range} />
          {chatList.rangeList[range].map((item) => (
            <ChatItem
              key={item.id}
              id={item.id}
              title={item.title}
              isSelected={false}
            />
          ))}
        </React.Fragment>
      ))}
    </>
  );
};
