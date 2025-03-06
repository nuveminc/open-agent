import { ChatMessageUser } from '@/components/organisms/chat/chat-message-user';
import { ChatMessageAgent } from '../../organisms/chat/chat-message-agent';
import { ChatMessage, ChatThread } from '@/models/chat/chat-session.class.pm';
import { ChatContainer } from '@/components/page-templates/chat/chat-container';
import { useChatSessionPresenter } from '@/components/pages/ChatSession/useChatSessionPresenter';

export const ChatSession: React.FC<object> = () => {
  const { presenter } = useChatSessionPresenter();

  if (presenter.isLoading) {
    return <div>Loading...</div>;
  }

  const getMessage = (
    message: ChatMessage,
    thread: ChatThread,
    index: number
  ) => {
    let control = <></>;
    if (message.role === 'user') {
      control = (
        <ChatMessageUser
          key={message.id}
          index={index}
          text={message.content}
          showDeleteButton={true}
          files={thread.files}
        />
      );
    }
    if (message.role === 'assistant') {
      control = (
        <ChatMessageAgent
          key={`message-response-${message.id}`}
          id={message.id}
          text={message.content}
          model={presenter.currentChat.chatThread.models[0]}
          time={message.time}
          usage={message.usage}
        />
      );
    }
    return control;
  };

  return (
    <ChatContainer>
      <div className="h-full w-full flex flex-col py-4">
        {/* Your chat messages content */}
        <div className="h-full flex">
          <div className="w-full gap-2">
            {presenter.currentChat &&
              presenter.currentChat.chatThread &&
              presenter.currentChat.chatThread.messages.map(
                (message: ChatMessage, index: number) =>
                  getMessage(message, presenter.currentChat.chatThread, index)
              )}
            <div className="pb-12 md:pb-12 sm:pb-12 xs:pb-12"></div>
          </div>
        </div>
      </div>
    </ChatContainer>
  );
};
