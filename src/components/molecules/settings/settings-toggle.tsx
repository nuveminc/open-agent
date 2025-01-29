import React, { useState } from 'react';

export interface SettingsToggleProps {
  controlName: string;
  defaultValue: string;
  options: string[]; // options are indexed: 0: default and 1: option
  onChange: (name: string, value: string) => void;
}
export const SettingsToggle: React.FC<SettingsToggleProps> = ({
  onChange,
  defaultValue,
  controlName,
  options,
}) => {
  const [value, setValue] = useState(defaultValue);
  const [name] = useState(controlName);
  let optionIdx = options.indexOf(value);

  const onClick = () => {
    optionIdx = optionIdx ^ 1;
    setValue(options[optionIdx]);
    onChange(name, options[optionIdx]);
  };

  return (
    <>
      <div onClick={onClick} className="text-xs cursor-pointer">
        {value}
      </div>
    </>
  );
};
