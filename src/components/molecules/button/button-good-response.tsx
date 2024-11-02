import { cn } from '@/lib/utils';
import { ButtonResponseProps } from './button-reponse.props';
import { Icon } from '@/components/atoms';

export const ButtonGoodResponse: React.FC<ButtonResponseProps> = ({
  ariaLabel = '',
  className = 'invisible',
}) => {
  return (
    <div aria-label={ariaLabel} className="flex">
      <button
        className={cn(
          className,
          'group-hover:visible p-1.5 hover:bg-black/5 dark:hover:bg-white/5 rounded-lg  dark:hover:text-white hover:text-black transition'
        )}
      >
        <Icon name="thumbsUp" />
      </button>
    </div>
  );
};
