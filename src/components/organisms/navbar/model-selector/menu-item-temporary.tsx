import React from 'react';
import { cn } from '@/lib/utils';
import { DropdownMenuItem } from '@/components/ui/dropdown-menu';
import { Switch } from '@/components/ui/switch';
import { MessageCircle } from 'lucide-react';

type MenuItemTemporaryProps = Readonly<{
  checked: boolean;
  onChange: (checked: boolean) => void;
}>;

export const MenuItemTemporary: React.FC<MenuItemTemporaryProps> = ({
  checked,
  onChange,
}) => {
  const temporaryChatSwitch = (checked: boolean) => {
    console.log('CHECKED:', checked);
    onChange(checked);
  };

  return (
    <DropdownMenuItem
      className={cn(
        'flex text-left font-medium line-clamp-1 select-none items-center',
        'py-2 pl-3 pr-1.5 text-sm text-gray-700 dark:text-gray-100 outline-none',
        'transition-all duration-75 hover:bg-gray-100 dark:hover:bg-gray-800',
        'rounded-lg cursor-pointer data-[highlighted]:bg-muted group-hover:bg-transparent'
      )}
    >
      <div
        className="flex justify-between font-medium"
        onClick={() => temporaryChatSwitch(!checked)}
      >
        <div className="flex gap-2.5 items-center">
          <MessageCircle />
          Temporary Chat
        </div>
        <div>
          <Switch
            id="temporary-chat"
            checked={checked}
            onCheckedChange={temporaryChatSwitch}
          />
        </div>
      </div>
    </DropdownMenuItem>
  );
};
