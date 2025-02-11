import { Icon } from '@/components/atoms';
import React from 'react';

interface AddButtonProps {
  ariaText: string;
  onClick: () => void;
}

export const AddButton: React.FC<AddButtonProps> = ({ ariaText, onClick }) => {
  return (
    <div aria-label={`${ariaText}`} className="flex">
      <button
        onClick={onClick}
        className="px-2 py-2 rounded-xl border border-gray-200 dark:border-gray-600 dark:border-0 hover:bg-gray-100 dark:bg-gray-850 dark:hover:bg-gray-800 transition font-medium text-sm flex items-center space-x-1"
      >
        <Icon
          name="plus"
          className="size-5"
          fill="currentColor"
          stroke="none"
        />
      </button>
    </div>
  );
};
