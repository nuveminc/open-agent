import React from 'react';
import { IconName } from '@/components/atoms';
import { LeftNavTab } from './left-nav-tab';

export type Tab = Readonly<{
  label: string;
  value: string;
  icon: IconName;
}>;

type LeftNavProps = Readonly<{
  tabs: Tab[];
  onChange: (idx: number) => void;
}>;

const LeftNav: React.FC<LeftNavProps> = ({ tabs, onChange }) => {
  const [selected, setSelected] = React.useState<number>(0);

  const handleGroups = (idx: number) => {
    onChange(idx);
  };
  const onTabChange = (idx: number) => {
    setSelected(idx);
    handleGroups(idx);
  };

  return (
    <div
      id="users-tabs-container"
      className="flex flex-row overflow-x-auto gap-2.5 lg:gap-1 lg:flex-col lg:flex-none lg:w-40 dark:text-gray-200 text-sm font-medium text-left scrollbar-none"
    >
      {tabs.map((tab, idx) => (
        <LeftNavTab
          key={`${tab.label}-${idx}`}
          index={idx}
          tab={tab}
          selected={selected}
          onClick={() => onTabChange(idx)}
        />
      ))}
    </div>
  );
};

export default LeftNav;
