import React from 'react';
import { DropdownMenuItem } from '@/components/ui/dropdown-menu';
import { cn } from '@/lib/utils';
import { ModelVM } from '@/models/model';
import { BrainCog, Check } from 'lucide-react';

type MenuItemModelProps = Readonly<{
  index: number;
  selected: string;
  model: ModelVM;
  onClick: (index: number) => void;
}>;

export const MenuItemModel: React.FC<MenuItemModelProps> = ({
  index,
  selected,
  model,
  onClick,
}) => {
  const setSelected = () => {
    console.log('Selected Model:', model);
    onClick(index);
  };
  return (
    <DropdownMenuItem
      key={`dropdown-model-${index}`}
      className={cn(
        'flex text-left font-medium line-clamp-1 select-none items-center cursor-pointer',
        'py-2 pl-3 pr-1.5 text-sm text-gray-700 dark:text-gray-100 outline-none',
        'transition-all duration-75 hover:bg-gray-100 dark:hover:bg-gray-800',
        selected
      )}
      onClick={setSelected}
    >
      <div className="flex">
        {!model.name.includes('llama') && (
          <BrainCog className="min-w-[20px] min-h-[20px] ml-[-.12rem] mr-2 items-center" />
        )}
        {model.name.includes('llama') && (
          <img
            src="/src/assets/favicon.png"
            alt="Model"
            className="rounded-full size-5 flex items-center mr-2"
          />
        )}
        {model.name}
        <div className="flex ml-1 items-center translate-y-[-2px]">
          <div aria-label="Q4_0 (4.3GB)" className="self-end">
            <div className="ml-1 text-xs font-medium text-gray-600 dark:text-gray-400 line-clamp-1">
              {model.size}
            </div>
          </div>
        </div>
        {selected && (
          <div className="ml-auto pl-2 pr-2 md:pr-0">
            <Check />
          </div>
        )}
      </div>
    </DropdownMenuItem>
  );
};
