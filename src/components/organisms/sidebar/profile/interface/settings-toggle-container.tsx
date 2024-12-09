import { SettingsToggle } from '@/components/molecules/settings-toggle';
import React from 'react';

export const SettingsToggleContainer: React.FC<{
  label: string;
  defaultValue: string;
  options: string[];
  onChange: () => void;
}> = ({ label, defaultValue, options, onChange }) => {
  return (
    <div className="flex justify-between text-md font-normal mr-2 my-2">
      <div>{label}</div>
      <div>
        <SettingsToggle
          defaultValue={defaultValue}
          options={options}
          onChange={onChange}
        ></SettingsToggle>
      </div>
    </div>
  );
};
