import React, { ChangeEvent, useState } from 'react';

export interface SettingsInputProps {
  defaultValue: number | string;
  onChange: (value: string) => void;
}
export const SettingsInput: React.FC<SettingsInputProps> = ({
  defaultValue,
  onChange,
}) => {
  const [value, setValue] = useState<string | number>(defaultValue);

  const onValueChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
    onChange(event.target.value);
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
