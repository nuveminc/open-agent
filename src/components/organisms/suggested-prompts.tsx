import { Icon } from '../atoms';
import { PromptCard } from '../molecules/prompt-card';
export type SuggestedPrompt = {
  title: string;
  description: string;
};
export interface PromptData {
  suggestedPrompts: SuggestedPrompt[];
}

export const SuggestedPrompts: React.FC<PromptData> = ({
  suggestedPrompts,
}) => (
  <div className="w-full font-primary">
    <div className="mb-2 flex gap-1 text-sm font-medium items-center text-gray-400 dark:text-gray-600">
      <Icon name="lightning" /> Suggested
    </div>
    <div className="relative w-full flex gap-2 snap-x snap-mandatory overflow-x-hidden mb-3 hover:overflow-x-auto hover:mb-[.05rem]">
      {suggestedPrompts.map(
        (prompt: { title: string; description: string }, index: number) => (
          <PromptCard
            key={index}
            prompt={prompt}
            onClick={() => console.log('Selected prompt:', prompt.title)}
          />
        )
      )}
    </div>
  </div>
);
