import React from 'react';
import { SystemPrompt } from '@/components/molecules/settings/system-prompt';
import { AdvancedParameters } from '@/components/organisms/common/advanced-parameters';
import { SettingsSelectOption } from '@/components/molecules/settings/settings-select';
import { SettingsLabelControl } from '@/components/molecules/settings/settings-label-control';

import languages from '@/i18n/languages.json';
import { SettingsControl } from '@/components/molecules/settings/setttings-control';
import { SettingsSection } from '@/components/molecules/settings/settings-section';
import { ValueType } from '@/types';
import { SettingsState } from '@/store/settingsStore';
import { advancedControlSettings } from '@/constants/advanced-control-settings';
import { SettingsToggleDisplay } from '@/components/molecules/settings/settings-toggle-display';

export type GeneralSettingsProps = {
  settings: SettingsState;
  onChange: (name: string, value: ValueType) => void;
};

export const GeneralSettings: React.FC<GeneralSettingsProps> = ({
  onChange,
  settings,
}) => {
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
                defaultValue={settings.theme}
                controlName="theme"
                onChange={onChange}
              />
            </SettingsLabelControl>
            {/* TODO: replace with settings-control component */}
            <SettingsLabelControl label="Language">
              <SettingsControl
                type="select"
                options={languageOptions as SettingsSelectOption[]}
                defaultValue={settings.language}
                controlName="language"
                onChange={onChange}
              />
            </SettingsLabelControl>
            <SettingsLabelControl label="Notifications" className="my-2">
              <SettingsControl
                type="switch"
                defaultValue={settings.notifications}
                showSwitchLabel={false}
                controlName="notifications"
                onChange={onChange}
              />
            </SettingsLabelControl>
            <SystemPrompt
              prompt={settings.systemPrompt}
              controlName="systemPrompt"
              onChange={onChange}
            />
            <SettingsToggleDisplay
              label="Advanced Settings"
              options={['Show', 'Hide']}
              displayContent={true}
            >
              <AdvancedParameters
                advancedControlSettings={advancedControlSettings}
                settings={settings.parameters}
                httpSettings={true}
                onChange={onChange}
              />
            </SettingsToggleDisplay>
          </div>
        </div>
      </SettingsSection>
    </>
  );
};
