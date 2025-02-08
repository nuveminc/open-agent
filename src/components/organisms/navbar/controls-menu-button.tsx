import React from 'react';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { Icon } from '@/components/atoms';

export type ControlsMenuButtonProps = {
  onClick?: () => void;
};
export const ControlsMenuButton: React.FC<ControlsMenuButtonProps> = ({
  onClick,
}) => {
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };
  return (
    <div aria-label="Controls" className="flex">
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>
            <button
              className="flex cursor-pointer px-2 py-2 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-850 transition"
              aria-label="Controls"
              onClick={handleClick}
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
          </TooltipTrigger>
          <TooltipContent>Controls</TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
};
