import React from 'react';
import { Icon, IconName } from '@/components/atoms';
import { cn } from '@/lib/utils';

type LeftNavTabProps = Readonly<{
  key: string;
  index: number;
  tab: { label: string; value: string; icon: IconName };
  selected: number;
  onClick: () => void;
}>;

export const LeftNavTab: React.FC<LeftNavTabProps> = ({
  key,
  index,
  tab,
  selected,
  onClick,
}) => {
  const isSelected = selected === index;
  const selectedClass = isSelected
    ? 'text-gray-900 dark:text-white'
    : 'text-gray-300 dark:text-gray-600 hover:text-gray-700 dark:hover:text-white';
  return (
    <button
      key={key}
      className={cn(
        'px-0.5 py-1 min-w-fit rounded-lg lg:flex-none flex text-right transition ',
        selectedClass
      )}
    >
      <div className="self-center mr-2">
        <Icon
          name={tab.icon}
          fill="currentColor"
          stroke="currentColor"
          strokeWidth=".25"
        />
      </div>
      <div className="self-center" onClick={onClick}>
        {tab.label}
      </div>
    </button>
  );
};
