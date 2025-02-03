import { ButtonLogo } from '@/components/molecules/button/button-logo';
import { WelcomeMessage } from '../molecules/welcome-message';
import {
  SuggestedPrompt,
  SuggestedPrompts,
} from '../organisms/suggested-prompts';
import { MessagesContainer } from '../organisms/messages-container';

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
  return (
    <MessagesContainer>
      <div className="h-full flex">
        <div className="m-auto w-full max-w-6xl px-8 lg:px-20">
          <div className="flex justify-start">
            <div className="flex -space-x-4 mb-0.5">
              <ButtonLogo />
            </div>
          </div>
          <WelcomeMessage name="MP" message="How can I help you today?" />
          <SuggestedPrompts suggestedPrompts={prompts} />
        </div>
      </div>
    </MessagesContainer>
  );
};
