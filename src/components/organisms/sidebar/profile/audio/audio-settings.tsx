import React, { useState } from 'react';
import { SettingsSection } from '../settings/settings-section';
import { SettingsLabelControl } from '../settings/settings-label-control';
import { SettingsControl } from '../settings/setttings-control';
import {
  SettingsDropdownOption,
  SettingsSelectOption,
} from '@/components/molecules/settings-select';
import { ValueType } from '../settings/settings-dialog-tabs';
import { ModelSelector } from '../interface/model-selector';

export const AudioSettings: React.FC<object> = () => {
  const engineOptions = [
    { value: 'default', name: 'Default' },
    { value: 'webui', name: 'Web UI' },
  ];

  const voiceOptions: SettingsDropdownOption[] = [
    {
      value: 'default',
      name: 'Default',
    },

    {
      value: 'ms-david-en-US',
      name: 'Microsoft David - English (United States)',
    },
    {
      value: 'ms-mark-en-US',
      name: 'Microsoft Mark - English (United States)',
    },
    {
      value: 'ms-zira-en-US',
      name: 'Microsoft Zira - English (United States)',
    },
  ];

  const [voice, setVoice] = useState(voiceOptions[0]);

  const onChange = (value: ValueType) => {
    console.log(value);
  };

  const onVoiceChange = (value: SettingsDropdownOption) => {
    console.log(value);
    setVoice(value);
  };
  return (
    <>
      <SettingsSection title="SST Settings">
        <div className="flex justify-between text-sm font-normal m-1">
          <SettingsLabelControl label="Speech-to-text Engine">
            <SettingsControl
              type="select"
              options={engineOptions as SettingsSelectOption[]}
              defaultValue="default"
              onChange={onChange}
            />
          </SettingsLabelControl>
        </div>
      </SettingsSection>
      <SettingsSection title="TTS Settings">
        <SettingsLabelControl label="Auto-playback Response">
          <SettingsControl
            type="toggle"
            defaultValue="Off"
            options={['Off', 'On']}
            onChange={onChange}
          />
        </SettingsLabelControl>
      </SettingsSection>
      <SettingsSection title="Set Voice" className="mt-3">
        <ModelSelector
          defaultValue={voice}
          options={voiceOptions}
          onChange={onVoiceChange}
        ></ModelSelector>
        <SettingsLabelControl label="Allow non-local voices" className="mt-2">
          <SettingsControl
            type="switch"
            defaultValue={false}
            onChange={onChange}
          />
        </SettingsLabelControl>
      </SettingsSection>
    </>
  );
};
