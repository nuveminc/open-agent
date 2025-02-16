import { useState } from 'react';
import { IconName } from '@/components/atoms';
import { SvgIcon } from '@/components/atoms/SvgIcon';

export interface SystemSettingsTab {
  name: string;
  icon: IconName;
  view: JSX.Element;
}

export const SystemSettings: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState<string>('General');

  const tabs: SystemSettingsTab[] = [
    { name: 'General', icon: 'gear', view: <></> },
    { name: 'Connections', icon: 'cloud', view: <></> },
    { name: 'Models', icon: 'database', view: <></> },
    { name: 'Evaluations', icon: 'analytics', view: <></> },
    { name: 'Documents', icon: 'document', view: <></> },
    { name: 'Web Search', icon: 'webSearch', view: <></> },
    { name: 'Interface', icon: 'monitor', view: <></> },
    { name: 'Audio', icon: 'audio', view: <></> },
    // { name: 'Images', icon: 'images', view: <></> },
    { name: 'Pipelines', icon: 'layers', view: <></> },
    { name: 'Database', icon: 'gear', view: <></> },
  ];

  return (
    <div className="pb-1 px-[16px] flex-1 max-h-full overflow-y-auto">
      <div className="flex flex-col lg:flex-row w-full h-full pb-2 lg:space-x-4">
        <div
          id="admin-settings-tabs-container"
          className="tabs flex flex-row overflow-x-auto gap-2.5 max-w-full lg:gap-1 lg:flex-col lg:flex-none lg:w-40 dark:text-gray-200 text-sm font-medium text-left scrollbar-none"
        >
          {tabs.map((tab) => (
            <button
              key={tab.name}
              className={`px-0.5 py-1 min-w-fit rounded-lg flex-1 lg:flex-none flex text-right transition hover:text-gray-700 dark:hover:text-white ${
                selectedTab === tab.name
                  ? 'text-gray-700 dark:text-white'
                  : 'text-gray-300 dark:text-gray-600'
              }`}
              onClick={() => setSelectedTab(tab.name)}
            >
              <div className="self-center mr-2">
                <SvgIcon name={tab.icon} strokeWidth="1" />
              </div>
              <div className="self-center">{tab.name}</div>
            </button>
          ))}
        </div>
        <div className="flex-1 mt-3 lg:mt-0 overflow-y-scroll pr-1 scrollbar-hidden">
          {tabs.find((tab) => tab.name === selectedTab)?.view}
        </div>
      </div>
    </div>
  );
};
