import { cn } from '@/lib/utils';
import React, { useState } from 'react';

/**
 * A label control to display a row of settings.
 * Displays a label and the children controls.
 *
 * @param label - The label to display.
 * @param options - The options to display.
 * @param children - The children controls to display.
 * @return A label control.
 **/
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
