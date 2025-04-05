import { DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { cn } from '@/lib/utils';
import { ChevronDown } from 'lucide-react';

export const DropdownTrigger: React.FC<{
  text: string;
  className?: string;
}> = ({ text, className }) => {
  return (
    <DropdownMenuTrigger className={cn('py-2', className)}>
      <div className="w-full mr-1 mt-1 max-w-full">
        <div className="w-full font-primary" aria-label={'Select a ' + text}>
          <div className="flex justify-between px-[.5rem] pt-[.75rem] pb-[.5rem] rounded-md text-left text-sm truncate dark:bg-gray-850">
            {text}
            <ChevronDown className="w-5 pb-1 self-center ml-2" />
          </div>
        </div>
      </div>
    </DropdownMenuTrigger>
  );
};
