import { ModelSelector } from './model-selector';
import { SettingsSection } from './settings-section';

export const InterfaceSettings: React.FC<object> = () => {
  return (
    <div id="interface" className="h-[25rem] text-sm font-medium">
      <SettingsSection title="Default Model">
        {/* @TODO: need to fix content shifting with scrollbar display  */}
        <ModelSelector text="llama 3.1:latest" />
      </SettingsSection>
    </div>
  );
};
