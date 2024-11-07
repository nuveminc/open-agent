import React from 'react';
import { Icon } from '@/components/atoms';

export const ControlsMenuButton: React.FC<object> = () => {
  return (
    <div aria-label="Controls" className="flex">
      <button
        className="flex cursor-pointer px-2 py-2 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-850 transition"
        aria-label="Controls"
      >
        <div className="m-auto self-center">
          <Icon
            name="controls"
            fill="currentColor"
            stroke="currentColor"
            className="size-5"
            strokeWidth="0.5"
          />
        </div>
      </button>
    </div>
  );
};
