import React, { useState } from 'react';
import { SettingsToggle } from '@/components/molecules/settings/settings-toggle';
import { ValueType } from '@/types';

export const SettingsToggleContainer: React.FC<{
  label: string;
  defaultValue: string;
  controlName: string;
  options: string[];
  onChange: (name: string, value: ValueType) => void;
}> = ({ label, defaultValue, controlName, options, onChange }) => {
  const [name] = useState<string>(controlName);
  return (
    <div className="flex justify-between text-sm font-normal mr-2 my-2">
      <div>{label}</div>
      <div>
        <SettingsToggle
          defaultValue={defaultValue}
          controlName={name}
          options={options}
          onChange={onChange}
        ></SettingsToggle>
      </div>
    </div>
  );
};
