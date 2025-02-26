import React from 'react';
import { ButtonExport } from '@/components/molecules/button/button-export';

export const Feedback: React.FC = () => {
  const handleClick = () => {
    console.log('Export clicked');
  };

  return (
    <div className="flex-1 mt-1 lg:mt-0 overflow-auto">
      <div className="mt-0.5 mb-2 gap-1 flex flex-row justify-between">
        <div className="flex md:self-center text-lg font-medium px-0.5">
          Feedback History
          <div className="flex self-center w-[1px] h-6 mx-2.5 bg-gray-50 dark:bg-gray-850"></div>
          <span className="text-lg font-medium text-gray-500 dark:text-gray-300">
            0
          </span>
        </div>
        <div>
          <div>
            <ButtonExport tooltip="Export" onClick={handleClick} />
          </div>
        </div>
      </div>
      <div className="scrollbar-hidden relative whitespace-nowrap overflow-x-auto max-w-full rounded pt-0.5">
        <div className="text-center text-xs text-gray-500 dark:text-gray-400 py-1">
          No feedback found
        </div>
      </div>
    </div>
  );
};
