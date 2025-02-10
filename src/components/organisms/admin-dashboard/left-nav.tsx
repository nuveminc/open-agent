import { IconName } from '@/components/atoms';
import React from 'react';
import LeftNavTab from './left-nav-tab';

interface LeftNavProps {
  onChange: (display: boolean) => void;
}
type Tab = {
  label: string;
  value: string;
  icon: IconName;
};

const LeftNav: React.FC<LeftNavProps> = ({ onChange }) => {
  const [selected, setSelected] = React.useState<string>('overview');

  const handleGroups = (display: boolean) => {
    onChange(display);
  };

  const tabs: Tab[] = [
    { label: 'Overview', value: 'overview', icon: 'users' },
    { label: 'Groups', value: 'groups', icon: 'groups' },
  ];

  const changeTab = (value: string) => {
    setSelected(value);
    if (value === 'groups') {
      handleGroups(true);
    } else {
      handleGroups(false);
    }
  };

  return (
    <div
      id="users-tabs-container"
      className="flex flex-row overflow-x-auto gap-2.5 lg:gap-1 lg:flex-col lg:flex-none lg:w-40 dark:text-gray-200 text-sm font-medium text-left scrollbar-none"
    >
      {tabs.map((tab) => (
        <LeftNavTab
          key={tab.value}
          tab={tab}
          selected={selected}
          onClick={changeTab}
        />
      ))}
    </div>
  );
};

export default LeftNav;
