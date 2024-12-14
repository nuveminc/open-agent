import { ModelSelector } from './model-selector';
import { SettingsSection } from '../settings/settings-section';
import { SettingsToggleContainer } from './settings-toggle-container';
import { SettingsDropdownOption } from '@/components/molecules/settings-select';
import { useState } from 'react';

export const InterfaceSettings: React.FC<object> = () => {
  const models: SettingsDropdownOption[] = [
    {
      name: 'llama3.1:latest',
      value: 'llama3.1:latest',
      size: '8.0B',
      icon: 'logo',
    },
    {
      name: 'openchat:latest',
      value: 'openchat:latest',
      size: '7.0B',
    },
  ];
  const [model, setModel] = useState(models[0]);
  const onChange = (value: string | boolean | number) => {
    console.log(value);
  };

  const onModelChange = (value: SettingsDropdownOption) => {
    console.log(value);
    setModel(value);
  };

  return (
    <div id="interface" className="h-[25rem] text-sm font-medium">
      <SettingsSection title="Default Model">
        <ModelSelector
          defaultValue={model}
          options={models}
          onChange={onModelChange}
        />
      </SettingsSection>
      <SettingsSection title="UI">
        <SettingsToggleContainer
          label={'Chat Bubble UI'}
          defaultValue={'On'}
          options={['On', 'Off']}
          onChange={onChange}
        />
        <SettingsToggleContainer
          label={'Widescreen Mode'}
          defaultValue={'On'}
          options={['On', 'Off']}
          onChange={onChange}
        />
        <SettingsToggleContainer
          label={'Chat Direction'}
          defaultValue={'LTR'}
          options={['LTR', 'RTL']}
          onChange={onChange}
        />
        <SettingsToggleContainer
          label={'Fluidity stream large external response chunks'}
          defaultValue={'On'}
          options={['On', 'Off']}
          onChange={onChange}
        />
        <SettingsToggleContainer
          label={'Scroll to bottom when switching between branches'}
          defaultValue={'On'}
          options={['On', 'Off']}
          onChange={onChange}
        />
        <SettingsToggleContainer
          label={'Chat Background Image'}
          defaultValue={'Upload'}
          options={['Upload', 'FIX']}
          onChange={onChange}
        />
      </SettingsSection>
      <SettingsSection title="Chat">
        <SettingsToggleContainer
          label={'Title Auto-Generation'}
          defaultValue={'On'}
          options={['On', 'Off']}
          onChange={onChange}
        />
        <SettingsToggleContainer
          label={'Response AutoCopy to Clipboard'}
          defaultValue={'On'}
          options={['On', 'Off']}
          onChange={onChange}
        />
        <SettingsToggleContainer
          label={'Allow User Location'}
          defaultValue={'Off'}
          options={['On', 'Off']}
          onChange={onChange}
        />
      </SettingsSection>
    </div>
  );
};
