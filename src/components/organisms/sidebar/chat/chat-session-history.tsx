import React from 'react';
import { ChatTimeRange } from './chat-timerange';
import { ChatItem } from './chat-item';
import { ChatListVM } from '@/models/chat/chat-list.class.vm';

type ChatSessionHistoryProps = {
  chatList: ChatListVM;
  isLoading: boolean;
  onMenuItemClick: (id: string, action: string) => void;
};
export const ChatSessionHistory: React.FC<ChatSessionHistoryProps> = ({
  chatList,
  isLoading,
  onMenuItemClick,
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

  const handleMenuClick = (id: string, action: string) => {
    onMenuItemClick(id, action);
  };

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
              onMenuClick={(action) => handleMenuClick(item.id, action)}
            />
          ))}
        </React.Fragment>
      ))}
    </>
  );
};
