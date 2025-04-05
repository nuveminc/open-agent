import React, { useEffect, useState } from 'react';

import {
  DropdownMenu,
  DropdownMenuContent,
} from '@/components/ui/dropdown-menu';
import { cn } from '@/lib/utils';
import { ModelVM } from '@/models/model';
import { DropdownTrigger } from '@/components/molecules/dropdown/dropdown-trigger';
import { DropdownSeparator } from '@/components/molecules/dropdown/dropdown-separator';
import { MenuItemModel } from './menu-item-model';
import { MenuItemSearch } from './menu-item-search';
import { MenuItemTemporary } from './menu-item-temporary';

export const ModelSelectorDropdwon: React.FC<{
  defaultValue: ModelVM;
  models: ModelVM[];
  onClick: (model: ModelVM) => void;
}> = ({ defaultValue, models, onClick }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [checkState, setCheckState] = useState(false);

  const setSelected = (index: number) => {
    if (models && models.length > 0 && models[index]) {
      setCurrentIndex(index);
      onClick(models[index]);
    }
  };

  const handleCheckState = (checked: boolean) => {
    setCheckState(checked);
  };

  const handleSeararchChange = (value: string) => {
    console.log('SEARCH:', value);
  };

  useEffect(() => {
    setIsOpen(isOpen);
  }, [isOpen]);

  const toggleOpen = () => {
    console.log('toggleOpen', isOpen);
    setIsOpen(!isOpen);
  };

  const getSelected = (index: number): string => {
    return currentIndex === index ? selected : '';
  };

  const selected =
    'rounded-lg cursor-pointer data-[highlighted]:bg-muted bg-gray-100 dark:bg-gray-800 group-hover:bg-transparent';

  return (
    <DropdownMenu modal={false} open={isOpen} onOpenChange={toggleOpen}>
      <DropdownTrigger
        text={defaultValue && defaultValue.name}
        className="focus:outline-none focus:ring-0"
      />
      <DropdownMenuContent
        className={cn(
          'relative rounded-xl bg-white dark:bg-gray-850 z-[1000] dark:text-white',
          'shadow-lg border border-gray-300/30 dark:border-gray-700/40 outline-none',
          'w-[31.25rem] border-0'
        )}
        style={{ left: '11.5rem' }}
      >
        <MenuItemSearch onChange={handleSeararchChange} />
        <DropdownSeparator />
        {/* LOOP THROUGH MODELS */}
        {models &&
          models.map((model, index) => (
            <MenuItemModel
              key={`menu-item-${index}`}
              index={index}
              selected={getSelected(index)}
              model={model}
              onClick={setSelected}
            />
          ))}

        <DropdownSeparator />
        <MenuItemTemporary checked={checkState} onChange={handleCheckState} />
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
