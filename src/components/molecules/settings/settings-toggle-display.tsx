import { Icon } from '@/components/atoms';
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
  labelClassName?: string;
  toggle?: 'text' | 'chevron';
  displayContent?: boolean;
  options?: string[];
  children: React.ReactNode;
}> = ({
  label,
  labelClassName,
  children,
  toggle = 'text',
  displayContent = false,
  options = ['Default', 'Custom'],
}) => {
  const [showContent, setShowContent] = useState(displayContent);

  const icons = [<Icon name="chevronDown" />, <Icon name="chevronUp" />];

  const showHideValues = toggle === 'text' ? options : icons;

  const labelClasses = labelClassName ? labelClassName : 'text-sm font-normal';

  const toggleDisplay = () => {
    setShowContent(!showContent);
  };

  return (
    <div className="mb-2">
      <div
        className={`flex justify-between w-full ${labelClasses}`}
        onClick={toggleDisplay}
      >
        <div className="cursor-pointer">{label}</div>
        <div className="text-xs cursor-pointer text-gray-500">
          {showContent ? showHideValues[1] : showHideValues[0]}
        </div>
      </div>
      <div className={cn('w-full my-2', showContent ? 'display' : 'hidden')}>
        {children}
      </div>
    </div>
  );
};
