import { cn } from '@/lib/utils';
import React, { useState } from 'react';

export const SettingsToggleDisplay: React.FC<{
  label: string;
  options?: string[];
  children: React.ReactNode;
}> = ({ label, children, options = ['Custom', 'Default'] }) => {
  const [customValue, setCustomValue] = useState(false);

  const toggleDisplay = () => {
    setCustomValue(!customValue);
  };

  return (
    <div className="mb-2">
      <div
        className="flex justify-between w-full text-sm font-normal"
        onClick={toggleDisplay}
      >
        <div>{label}</div>
        <div className="text-xs cursor-pointer">
          {customValue ? options[1] : options[0]}
        </div>
      </div>
      <div className={cn('w-full my-2', customValue ? 'display' : 'hidden')}>
        {children}
      </div>
    </div>
  );
};
