import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import ShadTooltip from '@/components/molecules/common/shad-tooltip';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Ellipsis } from 'lucide-react';
import { menuItems } from '@/constants/chat-menu-items';

type ChatMenuProps = Readonly<{
  onClick: (action: string) => void;
}>;
export const ChatMenu: React.FC<ChatMenuProps> = ({ onClick }) => {
  const [open, setOpen] = useState(false);
  const [trigger, setTrigger] = useState('invisible');
  const [tooltip, setTooltip] = useState('');

  useEffect(() => {
    const showTooltip = open ? 'hidden' : '';
    const showTrigger = open ? '' : 'invisible';
    setTooltip(showTooltip);
    setTrigger(showTrigger);
  }, [open]);

  const handleMenuOpen = () => {
    setOpen(!open);
  };

  const handleClick = (item: string): void => {
    setOpen(!open);
    onClick(item);
  };

  return (
    <ShadTooltip
      content="More"
      styleClasses={cn(tooltip, 'border-0 bg-transparent')}
    >
      <div
        className={cn(
          trigger,
          'group-hover:visible group-hover:from-gray-800 from-gray-100 dark:from-gray-950',
          'absolute border-r-md right-[10px] top-[.7rem] bg-gradient-to-l from-80% to-transparent'
        )}
      >
        <DropdownMenu open={open} onOpenChange={handleMenuOpen}>
          <DropdownMenuTrigger className="focus:outline-none focus:ring-0">
            <Ellipsis className="h-4 border-0" />
          </DropdownMenuTrigger>
          <DropdownMenuContent className="text-white bg-white dark:bg-gray-850 border-0 relative left-[3.5rem]">
            {menuItems.map((item, index) => (
              <DropdownMenuItem
                key={index}
                id={item.label}
                className="hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg cursor-pointer"
                onClick={() => handleClick(item.action)}
              >
                <div className="flex items-center">
                  {item.icon}
                  <span className="ml-2">{item.label}</span>
                </div>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </ShadTooltip>
  );
};
