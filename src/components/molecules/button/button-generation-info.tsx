import { Icon } from '@/components/atoms';

export const ButtonGenerationInfo: React.FC<object> = () => {
  return (
    <div
      aria-label="response_token/s: 44.78 tokens<br/> prompt_token/s: 199.1 tokens<br/> total_duration: 13545.5ms<br/>  load_duration: 7539.16ms<br/> prompt_eval_count: 21<br/> prompt_eval_duration: 105.48ms<br/> eval_count: 264<br/> eval_duration: 5895.52ms<br/>  approximate_total: 13s"
      className="flex"
    >
      <div aria-label="Generation Info" className="flex">
        <button
          className="invisible group-hover:visible p-1.5 hover:bg-black/5 dark:hover:bg-white/5 rounded-lg dark:hover:text-white hover:text-black transition whitespace-pre-wrap"
          id="info-a2da5f86-8e58-4284-9394-5d9842c73902"
        >
          <Icon name="info" />
        </button>
      </div>
    </div>
  );
};
