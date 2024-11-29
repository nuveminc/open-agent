import React, { ChangeEvent, useState } from 'react';

export interface SettingsInputProps {
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  defaultValue: number | string;
}
export const SettingsInput: React.FC<SettingsInputProps> = ({
  onChange,
  defaultValue,
}) => {
  const [value, setValue] = useState<string | number>(defaultValue);

  const onValueChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
    onChange(event);
  };

  return (
    <input
      type="text"
      value={value}
      className="w-full rounded bg-gray-100 dark:bg-gray-850 focus:outline-none p-1"
      onChange={onValueChange}
    />
  );
};
