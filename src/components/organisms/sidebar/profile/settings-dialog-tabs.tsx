import { Icon } from '@/components/atoms';
import React, { useState } from 'react';
import { GeneralSettings } from './general/general-settings';
import { InterfaceSettings } from './interface/interface-settings';

export function SettingsDialogTabs() {
  // State to track the currently active tab
  const [activeTab, setActiveTab] = useState<string>('General');

  const tabs = [
    'General',
    'Interface',
    'Personalization',
    'Audio',
    'Chats',
    'Account',
    'Admin Settings',
    'About',
  ];

  const tabContent: Record<string, React.ReactNode> = {
    General: <GeneralSettings />,
    Interface: <InterfaceSettings text="llama 3.1:latest" />,
    Personalization: <div id="personalization">Personalization Content</div>,
    Audio: <div id="audio">Audio Content</div>,
    Chats: <div id="chats">Chats Content</div>,
    Account: <div id="account">Account Content</div>,
    'Admin Settings': <div id="admin-settings">Admin Settings Content</div>,
    About: <div id="about">About Content</div>,
  };

  return (
    <div className="flex mt-5">
      <div className="w-[10rem] mr-2 flex flex-row overflow-x-auto space-x-1 md:space-x-0 md:space-y-1 md:flex-col md:flex-none text-xs text-left">
        {tabs.map((tab, idx) => {
          const currentTab = activeTab === tab ? 'dark:bg-gray-800' : '';
          return (
            <button
              key={idx}
              onClick={() => setActiveTab(tab)}
              className={`cursor-pointer focus:outline-none px-2.5 py-2.5 min-w-fit rounded-lg flex-1 md:flex-none flex text-left hover:bg-gray-50 dark:hover:bg-gray-800 transition ${currentTab}`}
            >
              <div className="self-center mr-2">
                <Icon name="gear" />
              </div>
              <div className="self-center">{tab}</div>
            </button>
          );
        })}
      </div>
      <div className="w-full px-3 h-[28rem]">
        <div className="mx-2">{tabContent[activeTab]}</div>
      </div>
    </div>
  );
}
