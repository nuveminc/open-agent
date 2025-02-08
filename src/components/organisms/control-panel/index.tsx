import React from 'react';
import { ControlHeader } from './control-header';
import { DependentDropdowns } from './dependent-dropdowns';
import { SettingsToggleDisplay } from '@/components/molecules/settings/settings-toggle-display';
import { SystemPrompt } from '@/components/molecules/settings/system-prompt';
import { ValueType } from '@/types';
import { useSettingsStore } from '@/store/settingsStore';
import { AdvancedParameters } from '../common/advanced-parameters';
import { advancedControlSettings } from '@/constants/advanced-control-settings';

const typeOptions = [
  { value: 'tools', name: 'Tools' },
  { value: 'functions', name: 'Functions' },
];

const allItems = {
  tools: [
    { value: '-', name: 'Select a Tool' },
    { value: 'tool1', name: 'Tool 1' },
    { value: 'tool2', name: 'Tool 2' },
  ],
  functions: [
    { value: '-', name: 'Select a Function' },
    { value: 'function1', name: 'Function 1' },
    { value: 'function2', name: 'Function 2' },
  ],
};

export const Control: React.FC<{ onClick: () => void }> = ({ onClick }) => {
  const state = useSettingsStore();
  const settings = state.parameters;
  // let advancedSettings;

  const handleTypeChange = (value: string) => {
    console.log('Type changed:', value);
  };

  const handleItemChange = (value: string) => {
    console.log('Item changed:', value);
  };

  const handleChange = (name: string, value: ValueType) => {
    console.log('Setting changed:', name, value);
  };

  // filter out the ollamaNumGpus setting for control panel
  const advancedSettings = advancedControlSettings.filter(
    (item) => item.controlName !== 'ollamaNumGpus'
  );

  return (
    <div className="h-full overflow-scroll ">
      <div className=" flex pr-2 pb-4 max-h-full min-h-full">
        <div className="flex flex-col w-[25rem] border-l border-gray-200 dark:border-gray-800">
          <div className="flex-none p-4 items-center justify-between dark:text-gray-100">
            <ControlHeader onClick={onClick} />
            {/* CONTROL BODY */}
            <div className="flex flex-col scrollbar-thin scrollbar-thumb-gray-300 dark:scrollbar-thumb-gray-700 px-4">
              <SettingsToggleDisplay
                label="Valves"
                labelClassName="font-medium"
                toggle="chevron"
              >
                <div className="flex justify-between">
                  <DependentDropdowns
                    typeOptions={typeOptions}
                    allItems={allItems}
                    onTypeChange={handleTypeChange}
                    onItemChange={handleItemChange}
                  />
                </div>
              </SettingsToggleDisplay>
              <hr className="my-2 border-gray-50 dark:border-gray-800" />
              <SettingsToggleDisplay
                label="System Prompt"
                labelClassName="font-medium"
                toggle="chevron"
              >
                <SystemPrompt
                  prompt={''}
                  controlName="systemPrompt"
                  showLabel={false}
                  placecholder="Enter system prompt"
                  onChange={handleChange}
                />
              </SettingsToggleDisplay>
              <hr className="my-2 border-gray-50 dark:border-gray-800" />
              {/* ADVANCED PARAMS */}
              <SettingsToggleDisplay
                label="Advanced Params"
                labelClassName="font-medium"
                toggle="chevron"
              >
                <AdvancedParameters
                  advancedControlSettings={advancedSettings}
                  settings={settings}
                  httpSettings={false}
                  onChange={handleChange}
                />
              </SettingsToggleDisplay>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
