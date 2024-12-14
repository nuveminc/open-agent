import { Icon } from '@/components/atoms';
import { DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { cn } from '@/lib/utils';

export const DropdownTrigger: React.FC<{ text: string; className: string }> = ({
  text,
  className,
}) => {
  return (
    <DropdownMenuTrigger className={cn('py-2', className)}>
      <div className="w-full mr-1 mt-1 max-w-full">
        <button className="w-full font-primary" aria-label={'Select a ' + text}>
          <div className="flex justify-between px-[.5rem] py-[.5rem] rounded-md text-left text-sm truncate dark:bg-gray-850">
            {text}
            <Icon
              name="arrowDown"
              className="self-center ml-2 size-3"
              stroke="currentColor"
              strokeWidth="2.5"
            />
          </div>
        </button>
      </div>
    </DropdownMenuTrigger>
  );
};
