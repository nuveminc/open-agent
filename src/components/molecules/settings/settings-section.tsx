import { cn } from '@/lib/utils';
import React from 'react';

/**
 * A label control to display a row of settings.
 * Displays a label and the children controls.
 *
 * @param label - The label to display.
 * @param children - The children controls to display.
 * @param className - The class name to apply to the container.
 * @return A label control.
 **/
export const SettingsSection: React.FC<{
  title: string;
  children: React.ReactNode;
  className?: string;
}> = ({ title, children, className }) => {
  return (
    <>
      <div className={cn('text-base', className)}>{title}</div>
      <div className="w-full overflow-y-auto overflow-x-hidden px-1 cursor-pointer">
        {children}
      </div>
    </>
  );
};
