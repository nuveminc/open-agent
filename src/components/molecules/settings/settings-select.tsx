import { Icon, IconName } from '@/components/atoms';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import React, { useEffect, useState } from 'react';

export interface SettingsSelectOption {
  value: string;
  name: string;
  icon?: IconName;
}

export interface SettingsDropdownOption {
  value: string;
  name: string;
  size?: string;
  icon?: string;
}

export interface SettingsSelectProps {
  defaultValue: string;
  controlName: string;
  options: SettingsSelectOption[];
  onChange: (name: string, value: string) => void;
}

/**
 * Creates a select component for the settings dialog
 *
 * @param defaultValue - default value of the select
 * @param controlName - name of the control
 * @param options - options of the select
 * @param onChange - onChange event handler
 * @returns a select component
 */
export const SettingsSelect: React.FC<SettingsSelectProps> = ({
  defaultValue,
  controlName,
  options,
  onChange,
}: SettingsSelectProps) => {
  const [name] = useState<string>(controlName);
  useEffect(() => {}, [defaultValue]);

  const handleChange = (value: string) => {
    onChange(name, value);
  };

  const setItem = (option: SettingsSelectOption, idx: number) => {
    if (option.icon) {
      return (
        <SelectItem
          key={`icon-select-item-${idx}`}
          value={option.value}
          className="cursor-pointer"
        >
          <div className="flex items-center">
            <div>
              <Icon name={option.icon} />
            </div>
            <div className="mx-2">{option.name}</div>
          </div>
        </SelectItem>
      );
    } else {
      return (
        <SelectItem
          key={`select-item-${idx}`}
          value={option.value}
          className="cursor-pointer"
        >
          <div>
            <div className="mx-2">{option.name}</div>
          </div>
        </SelectItem>
      );
    }
  };

  return (
    <Select
      value={defaultValue}
      defaultValue={defaultValue}
      onValueChange={handleChange}
    >
      <SelectTrigger className="w-fit h-8 border border-0 pr-0 pl-0">
        <SelectValue></SelectValue>
      </SelectTrigger>
      <SelectContent className="text-white bg-gray-900 border border-gray-700 relative ">
        <SelectGroup>
          {options.map((option, idx) => setItem(option, idx))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};
