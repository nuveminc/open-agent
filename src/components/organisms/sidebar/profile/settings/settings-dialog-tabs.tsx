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
import { SystemSettingsTab } from '@/components/organisms/admin-dashboard/settings';

export const SettingsDialogTabs: React.FC<{
  onNavigate: (close: boolean) => void;
}> = ({ onNavigate }) => {
  // State to track the currently active tab
  const [activeTab, setActiveTab] = useState<string>('General');
  const navigate = useNavigate();
  const state = useSettingsStore();

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

  const gotoSettings = (tab: string) => {
    setActiveTab(tab);
    onNavigate(false);
    navigate('/admin/');
  };

  const getClickFunction = (tab: string) => {
    if (tab === 'Admin Settings') {
      return (tab: string) => gotoSettings(tab);
    }
    return (tab: string) => setActiveTab(tab);
  };

  const showTabView = (tab: string) => {
    const currentTab = tabs.find((t) => t.name === tab);
    return currentTab ? currentTab.view : null;
  };
  const tabs: SystemSettingsTab[] = [
    {
      name: 'General',
      icon: 'gear',
      view: <GeneralSettings settings={state} onChange={handleChange} />,
    },
    {
      name: 'Interface',
      icon: 'monitor',
      view: <InterfaceSettings onChange={handleChange} />,
    },
    {
      name: 'Personalization',
      icon: 'avatar',
      view: <PersonalizationSettings />,
    },
    {
      name: 'Audio',
      icon: 'audio',
      view: <AudioSettings onChange={handleChange} />,
    },
    { name: 'Chats', icon: 'chatBubble', view: <ChatsSettings /> },
    { name: 'Account', icon: 'avatar', view: <AccountSettings /> },
    { name: 'Admin Settings', icon: 'adminSettings', view: <></> },
    { name: 'About', icon: 'info', view: <AboutSettings /> },
  ];

  return (
    <div className="flex mt-5">
      <div className="w-[10rem] mr-2 flex flex-row overflow-x-auto space-x-1 md:space-x-0 md:space-y-1 md:flex-col md:flex-none text-xs text-left">
        {tabs.map((tab, idx) => {
          const currentTab = activeTab === tab.name ? 'dark:bg-gray-800' : '';
          const fn = getClickFunction(tab.name);
          return (
            <button
              key={`btn-${idx}`}
              onClick={() => fn(tab.name)}
              className={`cursor-pointer focus:outline-none px-2.5 py-2.5 min-w-fit rounded-lg flex-1 md:flex-none flex text-left hover:bg-gray-50 dark:hover:bg-gray-800 transition ${currentTab}`}
            >
              <div key={`div-${idx}`} className="self-center mr-2">
                <Icon key={`icon-${idx}`} name={tab.icon} />
              </div>
              <div key={`tab-${idx}`} className="self-center">
                {tab.name}
              </div>
            </button>
          );
        })}
      </div>
      <div className="w-full px-3 h-[28rem]">
        <div className="mx-2">{showTabView(activeTab)}</div>
      </div>
    </div>
  );
};
