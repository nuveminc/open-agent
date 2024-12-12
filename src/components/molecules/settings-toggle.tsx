import React, { useState } from 'react';

export interface SettingsToggleProps {
  onChange: (value: string) => void;
  defaultValue: string;
  options: string[]; // options are indexed: 0: default and 1: option
}
export const SettingsToggle: React.FC<SettingsToggleProps> = ({
  onChange,
  defaultValue,
  options,
}) => {
  const [value, setValue] = useState(defaultValue);
  let optionIdx = options.indexOf(value);

  const onClick = () => {
    optionIdx = optionIdx ^ 1;
    setValue(options[optionIdx]);
    onChange(options[optionIdx]);
  };

  return (
    <>
      <div onClick={onClick} className="text-xs cursor-pointer">
        {value}
      </div>
    </>
  );
};
