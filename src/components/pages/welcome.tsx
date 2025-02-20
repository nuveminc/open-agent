import { ButtonLogo } from '@/components/molecules/button/button-logo';
import { WelcomeMessage } from '../molecules/welcome-message';
import {
  SuggestedPrompt,
  SuggestedPrompts,
} from '../organisms/suggested-prompts';
import { MessagesContainer } from '../organisms/messages-container';
import { Control } from '../organisms/control-panel';
import { useAppPresenter } from '@/presenters/app/useAppPresenter';
import { SystemHelp } from '../molecules/system-help';
import { useAuthPresenter } from '@/presenters/auth/useAuthPresenter';

export const prompts: SuggestedPrompt[] = [
  {
    title: 'Help me study',
    description: 'vocabulary for a college entrance exam',
  },
  {
    title: 'Grammar check',
    description: 'rewrite it for better readability',
  },
  {
    title: 'Give me ideas',
    description: "for what to do with my kids' art",
  },
  {
    title: 'Explain options trading',
    description: "if I'm familiar with buying and selling stocks",
  },
  {
    title: 'Show me a code snippet',
    description: "of a website's sticky header",
  },
  {
    title: 'Tell me a fun fact',
    description: 'about the Roman Empire',
  },
  {
    title: 'Overcome procrastination',
    description: 'give me tips',
  },
];
export const Welcome: React.FC<object> = () => {
  const { presenter } = useAppPresenter();
  const { presenter: authPresenter } = useAuthPresenter();

  const user = authPresenter.getUser();

  const handleClick = () => {
    const showPanel = !presenter.controlPanelOpen;
    presenter.showControlPanel(showPanel);
  };
  return (
    <MessagesContainer>
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
          <SuggestedPrompts suggestedPrompts={prompts} />
        </div>
        {/* RIGHT CONTROL SECTIOn */}
        <div className={`${!presenter.controlPanelOpen ? 'hidden' : ''}`}>
          <Control onClick={handleClick} />
        </div>
      </div>
      <SystemHelp />
    </MessagesContainer>
  );
};
