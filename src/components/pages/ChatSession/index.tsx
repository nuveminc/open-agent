// import { useParams } from 'react-router-dom';
// import { usePresenter } from '@/presenters/usePresenter';

import { useChatPresenter } from '@/presenters/chat/useChatPresenter';
import { ChatMessageUser } from '../../molecules/chat-message-user';
import { ChatMessageAgent } from '../../molecules/chat-message-agent';
import {
  ChatMessage,
  ChatMessage as ChatMessagePM,
} from '@/models/chat/chat-session.class.pm';
import { ChatContainer } from '@/components/organisms/chat-container';

export const ChatSession: React.FC<object> = () => {
  const { presenter } = useChatPresenter();

  if (presenter.isLoading) {
    return <div>Loading...</div>;
  }

  const getMessage = (message: ChatMessagePM) => {
    return message.role === 'user' ? (
      <ChatMessageUser
        key={message.id}
        text={message.content}
        showDeleteButton={true}
      />
    ) : (
      <ChatMessageAgent
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
    <ChatContainer>
      <div className="h-full w-full flex flex-col py-4">
        {/* Your chat messages content */}
        <div className="h-full flex">
          <div className="w-full pt-2">
            {presenter.currentChat &&
              presenter.currentChat.chat &&
              presenter.currentChat.chat.messages.map((message: ChatMessage) =>
                getMessage(message)
              )}
          </div>
        </div>
      </div>
    </ChatContainer>
  );
};
