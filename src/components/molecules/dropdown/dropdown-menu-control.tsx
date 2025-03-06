import React, { useEffect, useState } from 'react';
import { DropdownTrigger } from './dropdown-trigger';
import {
  DropdownMenu,
  DropdownMenuContent,
} from '@/components/ui/dropdown-menu';
import { cn } from '@/lib/utils';

export const DropdownMenuControl: React.FC<{
  text: string;
  triggerClassName: string;
  contentClassName: string;
  contentStyle?: React.CSSProperties;
  open: boolean;
  children: React.ReactNode;
}> = ({
  text,
  triggerClassName,
  contentClassName,
  contentStyle,
  open,
  children,
}) => {
  const [isOpen, setIsOpen] = useState(open);
  // const [checkState, setCheckState] = useState(false);

  useEffect(() => {
    setIsOpen(open);
  }, [isOpen, open]);

  const toggleOpen = () => {
    console.log(isOpen);
    setIsOpen(!isOpen);
  };
  return (
    <DropdownMenu modal={false} open={isOpen} onOpenChange={toggleOpen}>
      <DropdownTrigger text={text} className={triggerClassName} />
      <DropdownMenuContent
        className={cn(
          contentClassName,
          'absolute z-[1000] left-[-15.75rem] top-[-.5rem] max-w-[calc(100vw-1rem)] justify-start',
          'rounded-xl bg-white dark:bg-gray-850 dark:text-white dark:bg-opacity-100',
          'shadow-lg border border-gray-300/30 dark:border-gray-700/40 outline-none'
        )}
        style={contentStyle}
      >
        {children}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
