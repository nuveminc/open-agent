import { cn } from '@/lib/utils';
import React from 'react';

export const SettingsSection: React.FC<{
  title: string;
  children: React.ReactNode;
  className?: string;
}> = ({ title, children, className }) => {
  return (
    <>
      <div className={cn('text-base', className)}>{title}</div>
      <div className="w-full overflow-y-auto overflow-x-hidden px-1">
        {children}
      </div>
    </>
  );
};
