import { cn } from '@/lib/utils';
import React from 'react';

/**
 * A label control to display a row of settings.
 * Displays a label and the children controls.
 *
 * @param label - The label to display.
 * @param className - The class name to apply to the container.
 * @param children - The children controls to display.
 * @return A label control.
 */
export const SettingsLabelControl: React.FC<{
  label: string;
  className?: string;
  children: React.ReactNode;
}> = ({ label, className, children }) => {
  return (
    <div
      className={cn(
        'w-full flex justify-between items-center text-sm',
        className
      )}
    >
      <div>{label}</div>
      <div>{children}</div>
    </div>
  );
};
