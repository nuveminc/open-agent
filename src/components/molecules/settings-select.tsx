import { Icon, IconName } from '@/components/atoms';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import React from 'react';

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
  options: SettingsSelectOption[];
  onChange?: (value: string) => void;
}
export const SettingsSelect: React.FC<SettingsSelectProps> = ({
  defaultValue,
  options,
  onChange,
}: SettingsSelectProps) => {
  const setItem = (option: SettingsSelectOption) => {
    if (option.icon) {
      return (
        <SelectItem value={option.value} className="cursor-pointer">
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
        <SelectItem value={option.value} className="cursor-pointer">
          <div>
            <div className="mx-2">{option.name}</div>
          </div>
        </SelectItem>
      );
    }
  };
  return (
    <Select defaultValue={defaultValue} onValueChange={onChange}>
      <SelectTrigger className="w-fit h-8 border border-0 pr-0">
        <SelectValue></SelectValue>
      </SelectTrigger>
      <SelectContent className="text-white bg-gray-900 border border-gray-700 relative left-[1rem]">
        <SelectGroup>{options.map((option) => setItem(option))}</SelectGroup>
      </SelectContent>
    </Select>
  );
};
