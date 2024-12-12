import { cn } from '@/lib/utils';
import React from 'react';

/**
 * A label control to display a row of settings.
 * Displays a label and the children controls.
 */
export const SettingsLabelControl: React.FC<{
  label: string;
  children: React.ReactNode;

  className?: string;
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
