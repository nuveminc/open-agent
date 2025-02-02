import { Icon } from '@/components/atoms';
import React, { useState } from 'react';
import { GeneralSettings } from '../general';
import { InterfaceSettings } from '../interface';
import { PersonalizationSettings } from '../personalization';
import { AudioSettings } from '../audio';
import { ChatsSettings } from '../chats';
import { AccountSettings } from '../account';
import { useNavigate } from 'react-router-dom';
import { AboutSettings } from '../about';
import { ValueType } from '@/types';
import { useSettingsStore } from '@/store/settingsStore';

export const SettingsDialogTabs: React.FC<{
  onNavigate: (close: boolean) => void;
}> = ({ onNavigate }) => {
  // State to track the currently active tab
  const [activeTab, setActiveTab] = useState<string>('General');
  const navigate = useNavigate();
  const state = useSettingsStore();

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

  const handleChange = (name: string, value: ValueType) => {
    console.log('SettingsDialogTabs > state', state);
    console.log('SettingsDialogTabs > handleChange', name, value);
    let settingsValue = value;
    let settingsName = name;
    if (name.indexOf(':') > -1) {
      const [parent, key] = name.split(':');
      settingsName = parent;
      settingsValue = { [key]: value } as ValueType;
    }
    console.log(
      'SettingsDialogTabs > handleChange',
      settingsName,
      settingsValue
    );
    // set the value in our store
    state.setSettingsValue(settingsName, settingsValue);
  };

  const tabContent: Record<string, React.ReactNode> = {
    General: <GeneralSettings settings={state} onChange={handleChange} />,
    Interface: <InterfaceSettings onChange={handleChange} />,
    Personalization: <PersonalizationSettings />,
    Audio: <AudioSettings onChange={handleChange} />,
    Chats: <ChatsSettings />,
    Account: <AccountSettings />,
    'Admin Settings': <div></div>,
    About: <AboutSettings />,
  };

  const gotoSettings = (tab: string) => {
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
              key={`btn-${idx}`}
              onClick={() => fn(tab)}
              className={`cursor-pointer focus:outline-none px-2.5 py-2.5 min-w-fit rounded-lg flex-1 md:flex-none flex text-left hover:bg-gray-50 dark:hover:bg-gray-800 transition ${currentTab}`}
            >
              <div key={`div-${idx}`} className="self-center mr-2">
                <Icon key={`icon-${idx}`} name="gear" />
              </div>
              <div key={`tab-${idx}`} className="self-center">
                {tab}
              </div>
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
