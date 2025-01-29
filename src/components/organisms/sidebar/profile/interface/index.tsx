import { ModelSelector } from './model-selector';
import { SettingsSection } from '../settings/settings-section';
import { SettingsToggleContainer } from './settings-toggle-container';
import { SettingsDropdownOption } from '@/components/molecules/settings/settings-select';
import { useState } from 'react';
import { ValueType } from '@/types';

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
  const onChange = (name: string, value: ValueType) => {
    console.log(name, value);
  };

  const onModelChange = (name: string, value: SettingsDropdownOption) => {
    console.log(name, value);
    setModel(value);
  };

  return (
    <div id="interface" className="h-[25rem] text-sm font-medium">
      <SettingsSection title="Default Model">
        <ModelSelector
          defaultValue={model}
          controlName='model'
          options={models}
          onChange={onModelChange}
        />
      </SettingsSection>
      <SettingsSection title="UI">
        <SettingsToggleContainer
          label={'Chat Bubble UI'}
          defaultValue={'On'}
          controlName='chatBubbleUI'
          options={['On', 'Off']}
          onChange={onChange}
        />
        <SettingsToggleContainer
          label={'Widescreen Mode'}
          defaultValue={'On'}
          controlName='widescreenMode'
          options={['On', 'Off']}
          onChange={onChange}
        />
        <SettingsToggleContainer
          label={'Chat Direction'}
          defaultValue={'LTR'}
          controlName='chatDirection'
          options={['LTR', 'RTL']}
          onChange={onChange}
        />
        <SettingsToggleContainer
          label={'Fluidity stream large external response chunks'}
          defaultValue={'On'}
          controlName='largeResponseChunks'
          options={['On', 'Off']}
          onChange={onChange}
        />
        <SettingsToggleContainer
          label={'Scroll to bottom when switching between branches'}
          defaultValue={'On'}
          controlName='scrollToBottomOnBranchChange'
          options={['On', 'Off']}
          onChange={onChange}
        />
        <SettingsToggleContainer
          label={'Chat Background Image'}
          defaultValue={'Upload'}
          controlName='chatBackgroundImage'
          options={['Upload', 'FIX']}
          onChange={onChange}
        />
      </SettingsSection>
      <SettingsSection title="Chat">
        <SettingsToggleContainer
          label={'Title Auto-Generation'}
          defaultValue={'On'}
          controlName='titleAutoGeneration'
          options={['On', 'Off']}
          onChange={onChange}
        />
        <SettingsToggleContainer
          label={'Response AutoCopy to Clipboard'}
          defaultValue={'On'}
          controlName='responseAutoCopyClipboard'
          options={['On', 'Off']}
          onChange={onChange}
        />
        <SettingsToggleContainer
          label={'Allow User Location'}
          defaultValue={'Off'}
          controlName='allowUserLocation'
          options={['On', 'Off']}
          onChange={onChange}
        />
      </SettingsSection>
    </div>
  );
};
