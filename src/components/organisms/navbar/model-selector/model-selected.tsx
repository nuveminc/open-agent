import { Icon } from '@/components/atoms';
import React from 'react';

export type ModelSelected = Readonly<{
  text: string;
}>;

type ModelSelectedProps = Readonly<{
  text: string;
  onClick: () => void;
}>;

export const ModelSelected: React.FC<ModelSelectedProps> = ({
  text = 'llama3.1:latest',
  onClick,
}) => {
  return (
    <div className="overflow-hidden w-full">
      <div className="mr-1 max-w-full">
        <button
          aria-controls="YYDZcq3Eh9"
          aria-expanded="false"
          data-state="closed"
          id="s05A8nb-ZW"
          tabIndex={0}
          data-melt-dropdown-menu-trigger=""
          data-menu-trigger=""
          type="button"
          className="relative w-full font-primary"
          aria-label="Select a model"
          onClick={onClick}
        >
          <div className="flex w-full text-left px-0.5 outline-none bg-transparent truncate text-lg font-medium placeholder-gray-400 focus:outline-none">
            {text}
            <Icon
              name="arrowDown"
              className="self-center ml-2 size-3"
              stroke="currentColor"
              strokeWidth="2.5"
            />
          </div>
        </button>
      </div>
    </div>
  );
};
