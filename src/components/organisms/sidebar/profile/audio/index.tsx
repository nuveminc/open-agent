import React, { useState } from 'react';
import { SettingsSection } from '../../../../molecules/settings/settings-section';
import { SettingsLabelControl } from '../../../../molecules/settings/settings-label-control';
import { SettingsControl } from '../../../../molecules/settings/setttings-control';
import {
  SettingsDropdownOption,
  SettingsSelectOption,
} from '@/components/molecules/settings/settings-select';
import { ModelSelector } from '../interface/model-selector';
import { ValueType } from '@/types';

type AudioSettingsProps = {
  onChange: (name: string, value: ValueType) => void;
};
export const AudioSettings: React.FC<AudioSettingsProps> = ({ onChange }) => {
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

  const onVoiceChange = (name: string, option: SettingsDropdownOption) => {
    onChange(name, option.value);
    setVoice(option);
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
              controlName='speechToTextEngine'
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
            controlName='autoPlaybackResponse'
            options={['Off', 'On']}
            onChange={onChange}
          />
        </SettingsLabelControl>
      </SettingsSection>
      <SettingsSection title="Set Voice" className="mt-3">
        <ModelSelector
          defaultValue={voice}
          controlName='voice'
          options={voiceOptions}
          onChange={onVoiceChange}
        ></ModelSelector>
        <SettingsLabelControl label="Allow non-local voices" className="mt-2">
          <SettingsControl
            type="switch"
            controlName='allowNonLocalVoices'
            defaultValue={false}
            onChange={onChange}
          />
        </SettingsLabelControl>
      </SettingsSection>
    </>
  );
};
