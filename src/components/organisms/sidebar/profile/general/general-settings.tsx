import React from 'react';
import { SystemPrompt } from './system-prompt';
import { AdvancedParameters } from './advanced-parameters';
import { SettingsSelectOption } from '@/components/molecules/settings-select';
import { SettingsLabelControl } from '../settings/settings-label-control';

import languages from '@/i18n/languages.json';
import { SettingsControl } from '../settings/setttings-control';
import { SettingsSection } from '../settings/settings-section';
import { ValueType } from '../settings/settings-dialog-tabs';

export const GeneralSettings: React.FC<object> = () => {
  const themeOptions: SettingsSelectOption[] = [
    { value: 'system', name: 'System', icon: 'gear' },
    { value: 'dark', name: '🌑 Dark' },
    { value: 'oled-dark', name: '🌃 OLED Dark' },
    { value: 'light', name: '☀️ Light' },
    { value: 'her', name: '🌷 Her' },
  ];

  const languageOptions: { value: string; name: string; icon?: string }[] =
    languages.map((language) => ({
      name: language.title,
      value: language.code,
    }));

  const onChange = (value: ValueType) => {
    console.log(value);
  };
  return (
    <>
      <SettingsSection title="Agent Settings">
        <div>
          <div className="h-[25rem] overflow-y-hidden overflow-x-hidden mr-3 pr-3 hover:overflow-y-auto hover:mr-[1px]">
            {/* TODO: replace with settings-control component */}
            <SettingsLabelControl label="Theme">
              <SettingsControl
                type="select"
                options={themeOptions as SettingsSelectOption[]}
                defaultValue="system"
                onChange={onChange}
              />
            </SettingsLabelControl>
            {/* TODO: replace with settings-control component */}
            <SettingsLabelControl label="Language">
              <SettingsControl
                type="select"
                options={languageOptions as SettingsSelectOption[]}
                defaultValue="en-US"
                onChange={onChange}
              />
            </SettingsLabelControl>
            <SettingsLabelControl label="Notifications" className="my-2">
              <SettingsControl
                type="switch"
                defaultValue={false}
                onChange={onChange}
              />
            </SettingsLabelControl>
            <SystemPrompt prompt="" onChange={onChange} />
            <AdvancedParameters onChange={onChange} />
          </div>
        </div>
      </SettingsSection>
    </>
  );
};
