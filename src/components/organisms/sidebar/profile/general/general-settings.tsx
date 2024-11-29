import React from 'react';
import { Theme } from './theme';
import { Languages } from './languages';
import { Notifications } from './notifications';
import { SystemPrompt } from './system-prompt';
import { AdvancedParameters } from './advanced-parameters';

export const GeneralSettings: React.FC<object> = () => {
  const options: { value: string; name: string }[] = [
    { value: 'dark', name: '🌑 Dark' },
    { value: 'oled-dark', name: '🌃 OLED Dark' },
    { value: 'light', name: '☀️ Light' },
    { value: 'her', name: '🌷 Her' },
  ];
  return (
    <div id="general" className="text-sm font-medium">
      <div className="text-base">Agent Settings</div>
      <div>
        {/* @TODO: need to fix content shifting with scrollbar display  */}
        <div className="h-[25rem] overflow-y-auto overflow-x-hidden pr-3">
          <Theme themes={options} />
          <Languages />
          <Notifications />
          <SystemPrompt />
          <AdvancedParameters />
        </div>
      </div>
    </div>
  );
};
