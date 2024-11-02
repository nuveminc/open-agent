import { cn } from '@/lib/utils';
import { ButtonResponseProps } from './button-reponse.props';

export const ButtonBadResponse: React.FC<ButtonResponseProps> = ({
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
          <path d="M10 15v4a3 3 0 0 0 3 3l4-9V2H5.72a2 2 0 0 0-2 1.7l-1.38 9a2 2 0 0 0 2 2.3zm7-13h2.67A2.31 2.31 0 0 1 22 4v7a2.31 2.31 0 0 1-2.33 2H17"></path>
        </svg>
      </button>
    </div>
  );
};
