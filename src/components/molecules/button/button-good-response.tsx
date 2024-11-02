import { cn } from '@/lib/utils';
import { ButtonResponseProps } from './button-reponse.props';

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
        <svg
          stroke="currentColor"
          fill="none"
          stroke-width="2.3"
          viewBox="0 0 24 24"
          strokeLinecap="round"
          stroke-linejoin="round"
          className="w-4 h-4"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path>
        </svg>
      </button>
    </div>
  );
};
