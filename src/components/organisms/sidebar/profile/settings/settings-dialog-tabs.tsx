import { Icon } from '@/components/atoms';
import React, { useState } from 'react';
import { GeneralSettings } from '../general/general-settings';
import { InterfaceSettings } from '../interface/interface-settings';
import { PersonalizationSettings } from '../personalization/personalization-settings';
import { AudioSettings } from '../audio/audio-settings';
import { ChatsSettings } from '../chats/chats-settings';
import { AccountSettings } from '../account/account-settings';
import { useNavigate } from 'react-router-dom';
import { AboutSettings } from '../about/about-settings';

export type ValueType = string | number | boolean;
export type InputType = string | number | readonly string[] | undefined;

export const SettingsDialogTabs: React.FC<{
  onNavigate: (close: boolean) => void;
}> = ({ onNavigate }) => {
  // State to track the currently active tab
  const [activeTab, setActiveTab] = useState<string>('General');
  const navigate = useNavigate();

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
    Interface: <InterfaceSettings />,
    Personalization: <PersonalizationSettings />,
    Audio: <AudioSettings />,
    Chats: <ChatsSettings />,
    Account: <AccountSettings />,
    'Admin Settings': <div></div>,
    About: <AboutSettings />,
  };

  const gotoSettings = (tab: string) => {
    console.log('gotoSettings', tab);
    setActiveTab(tab);
    onNavigate(false);
    navigate('/admin/settings');
  };

  const getClickFunction = (tab: string) => {
    if (tab === 'Admin Settings') {
      return (tab: string) => gotoSettings(tab);
    }
    return (tab: string) => setActiveTab(tab);
  };

  return (
    <div className="flex mt-5">
      <div className="w-[10rem] mr-2 flex flex-row overflow-x-auto space-x-1 md:space-x-0 md:space-y-1 md:flex-col md:flex-none text-xs text-left">
        {tabs.map((tab, idx) => {
          const currentTab = activeTab === tab ? 'dark:bg-gray-800' : '';
          const fn = getClickFunction(tab);
          return (
            <button
              key={idx}
              onClick={() => fn(tab)}
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
};
