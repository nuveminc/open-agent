import React, { ChangeEvent, useState } from 'react';

export type SettingsInputProps = Readonly<{
  defaultValue: number | string;
  controlName: string;
  type?: 'text' | 'textarea';
  placeholder?: string;
  onChange: (name: string, value: string) => void;
}>;

export const SettingsInput: React.FC<SettingsInputProps> = ({
  defaultValue,
  controlName,
  type = 'text',
  placeholder = '',
  onChange,
}) => {
  const [value, setValue] = useState<string | number>(defaultValue);
  const [name] = useState<string>(controlName);

  const onValueChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
    onChange(name, event.target.value);
  };

  return (
    <input
      type={type}
      value={value}
      className="w-full rounded bg-gray-100 dark:bg-gray-850 focus:outline-none p-1"
      placeholder={placeholder}
      onChange={onValueChange}
    />
  );
};
