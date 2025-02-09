import { cn } from '@/lib/utils';
import { useState } from 'react';

export interface AdminTabsProps {
  label: string;
  href: string;
}
export const AdminTabs: React.FC<{ tabs: AdminTabsProps[] }> = ({ tabs }) => {
  const [selected, setSelected] = useState<number>(0);

  const selectedStyle = ' bg-gray-50 dark:bg-gray-850';

  const handleClick = (idx: number) => () => {
    setSelected(idx);
  };

  return (
    <div className="px-4 my-1">
      <div className="flex scrollbar-none overflow-x-auto w-fit text-center text-sm font-medium rounded-xl bg-transparent/10 p-1">
        {tabs.map((tab, idx) => (
          <div
            key={`tab-${idx}`}
            className={cn(
              'min-w-fit rounded-lg p-1.5 px-3 mr-1 transition cursor-pointer',
              selected === idx ? selectedStyle : ''
            )}
            onClick={handleClick(idx)}
          >
            {tab.label}
          </div>
        ))}
      </div>
    </div>
  );
};
