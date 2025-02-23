// import { useParams } from 'react-router-dom';
// import { usePresenter } from '@/presenters/usePresenter';

import { useChatPresenter } from '@/presenters/chat/useChatPresenter';
import { ChatMessage } from './chat-message';
import { ChatMessageResponse } from './chat-message-response';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { ChatMessage as ChatMessagePM } from '@/models/chat/chat-session.class.pm';

export const MainChat: React.FC<object> = () => {
  const { chatId } = useParams<{ chatId: string }>();
  const { presenter } = useChatPresenter();

  useEffect(() => {
    if (chatId) {
      presenter.getItem(chatId);
    }
  }, [chatId]);

  if (presenter.isLoading) {
    return <div>Loading...</div>;
  }

  const getMessage = (message: ChatMessagePM) => {
    return message.role === 'user' ? (
      <ChatMessage
        key={message.id}
        text={message.content}
        showDeleteButton={true}
      />
    ) : (
      <ChatMessageResponse
        key={`message-response-${message.id}`}
        id={message.id}
        text={message.content}
        model={presenter.currentChat.chat.models[0]}
        time={message.time}
      />
    );
  };
  // Add your chat loading logic here using the chatId
  // const data = presenter.getItem(chatId!);
  // console.log('Chat Data:', data);
  return (
    <>
      <div className="h-full w-full flex flex-col py-4">
        {/* Your chat messages content */}
        <div className="h-full flex">
          <div className="w-full pt-2">
            {presenter.currentChat &&
              presenter.currentChat.chat &&
              presenter.currentChat.chat.messages.map((message) =>
                getMessage(message)
              )}
            {/* <ChatMessageResponse text='The Service Organization Control (SOC) 2 framework, developed by the American Institute of Certified Public Accountants (AICPA), contains five categories or "trust services criteria" that an organization may elect to apply. These five categories include:' /> */}
          </div>
        </div>
      </div>
    </>
  );
};
