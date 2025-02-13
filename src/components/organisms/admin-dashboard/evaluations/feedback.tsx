import { Icon } from '@/components/atoms';
import React from 'react';
import { TooltipWrapper } from '../../common/tooltip-wrapper';

export const Feedback: React.FC = () => {
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
            <div aria-label="Export" className="flex">
              <TooltipWrapper text="Export">
                <button className="p-2 rounded-xl hover:bg-gray-100 dark:bg-gray-900 dark:hover:bg-gray-850 transition font-medium text-sm flex items-center space-x-1">
                  <Icon name="export" />
                </button>
              </TooltipWrapper>
            </div>
          </div>
        </div>
      </div>
      <div className="scrollbar-hidden relative whitespace-nowrap overflow-x-auto max-w-full rounded pt-0.5">
        <div className="text-center text-xs text-gray-500 dark:text-gray-400 py-1">
          No feedbacks found
        </div>
      </div>
    </div>
  );
};
