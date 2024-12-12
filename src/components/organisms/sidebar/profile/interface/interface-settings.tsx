import { ModelSelector } from './model-selector';
import { SettingsSection } from '../settings/settings-section';
import { SettingsToggleContainer } from './settings-toggle-container';

export const InterfaceSettings: React.FC<object> = () => {
  const onChange = (value: string | boolean | number) => {
    console.log(value);
  };
  return (
    <div id="interface" className="h-[25rem] text-sm font-medium">
      <SettingsSection title="Default Model">
        {/* @TODO: need to fix content shifting with scrollbar display  */}
        <ModelSelector text="llama 3.1:latest" />
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
