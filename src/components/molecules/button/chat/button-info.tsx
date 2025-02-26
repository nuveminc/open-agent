import { Icon } from '@/components/atoms';
import ShadTooltip from '../../common/shad-tooltip';
import { isValidElement } from 'react';
import { ModelUsage } from '@/models/chat/chat-session.class.pm';

export const ButtonInfo: React.FC<{ usage: ModelUsage }> = ({ usage }) => {
  const mapping = {
    responseTokens: 'Response Tokens',
    promptTokens: 'Prompt Tokens',
    totalDuration: 'Total Duration',
    loadDuration: 'Load Duration',
    promptEvalCount: 'Prompt Eval Count',
    promptEvalDuration: 'Prompt Eval Duration',
    evalCount: 'Eval Count',
    evalDuration: 'Eval Duration',
    approximate_total: 'Approximate Total',
  };
  const multilineContent = Object.entries(usage).map(([key, value]) => {
    return (
      <div>
        {mapping[key as keyof ModelUsage]}: {value}
      </div>
    );
  });

  const extractTextFromNode = (node: React.ReactNode): string => {
    if (typeof node === 'string') {
      return node;
    }
    if (Array.isArray(node)) {
      return node.map(extractTextFromNode).join('\n');
    }
    if (isValidElement(node)) {
      return extractTextFromNode(node.props.children);
    }
    return '';
  };

  const ariaLabel = extractTextFromNode(multilineContent);

  return (
    <div
      aria-label="response_token/s: 44.78 tokens<br/> prompt_token/s: 199.1 tokens<br/> total_duration: 13545.5ms<br/>  load_duration: 7539.16ms<br/> prompt_eval_count: 21<br/> prompt_eval_duration: 105.48ms<br/> eval_count: 264<br/> eval_duration: 5895.52ms<br/>  approximate_total: 13s"
      className="flex"
    >
      <div aria-label={ariaLabel} className="flex">
        <ShadTooltip
          content={multilineContent}
          styleClasses="border-0 text-gray-900 dark:text-white"
        >
          <button
            className="invisible group-hover:visible p-1.5 hover:bg-black/5 dark:hover:bg-white/5 rounded-lg dark:hover:text-white hover:text-black transition whitespace-pre-wrap border-0 bg-gray-100 dark:bg-gray-900"
            id={`info-${'id'}`}
          >
            <Icon name="info" />
          </button>
        </ShadTooltip>
      </div>
    </div>
  );
};
