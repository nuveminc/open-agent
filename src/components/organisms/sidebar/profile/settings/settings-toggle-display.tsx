import { cn } from '@/lib/utils';
import React, { useState } from 'react';

export const SettingsToggleDisplay: React.FC<{
  label: string;
  children: React.ReactNode;
}> = ({ label, children }) => {
  const [customValue, setCustomValue] = useState(false);

  const toggleDisplay = () => {
    setCustomValue(!customValue);
  };

  return (
    <div className="mb-2">
      <div className="flex justify-between w-full text-sm font-normal">
        <div>{label}</div>
        <div className="text-xs cursor-pointer" onClick={toggleDisplay}>
          {customValue ? 'Custom' : 'Default'}
        </div>
      </div>
      <div className={cn('w-full my-2', customValue ? 'display' : 'hidden')}>
        {children}
      </div>
    </div>
  );
};
