import { ButtonLogo } from '@/components/molecules/button/button-logo';
import { WelcomeMessage } from '@/components/molecules/welcome-message';
import { SuggestedPrompts } from '../../organisms/suggested-prompts';
import { ChatContainer } from '@/components/page-templates/chat/chat-container';
import { SystemHelp } from '@/components/molecules/system-help';
import { useAuthPresenter } from '@/presenters/auth/useAuthPresenter';
import { suggestedPrompts } from '@/constants/suggested-prompts';

export const NewChat: React.FC<object> = () => {
  const { user } = useAuthPresenter();

  return (
    <ChatContainer>
      <div className="flex w-full justify-between overflow-hidden">
        {/* MAIN CONTENT */}
        <div className="m-auto w-full 2xl:max-w-6xl md:max-w-3xl sm:max-w-2xl lg:px-20">
          <div className="flex">
            <div className="flex mb-0.5">
              <ButtonLogo size="size-16" />
            </div>
          </div>
          <WelcomeMessage
            name={user.name}
            message="How can I help you today?"
          />
          <SuggestedPrompts suggestedPrompts={suggestedPrompts} />
        </div>
      </div>
      <SystemHelp />
    </ChatContainer>
  );
};
