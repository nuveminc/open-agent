import { Icon } from '@/components/atoms';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import React from 'react';

export interface ThemeProps {
  themes: {
    value: string;
    name: string;
  }[];
}
export const Theme: React.FC<ThemeProps> = ({ themes }: ThemeProps) => {
  return (
    <div className="flex justify-between items-center mb-2">
      <div>Theme</div>
      <div>
        <Select defaultValue="system">
          <SelectTrigger className="w-[8rem] border border-0">
            <SelectValue></SelectValue>
          </SelectTrigger>
          <SelectContent className="text-white bg-gray-900 border border-gray-700 relative left-[1rem]">
            <SelectGroup>
              <SelectItem value="system" className="cursor-pointer">
                <div className="flex items-center">
                  <div>
                    <Icon name="gear" />
                  </div>
                  <div className="ml-2">System</div>
                </div>
              </SelectItem>
              {themes.map((option) => (
                <SelectItem value={option.value} className="cursor-pointer">
                  <div>{option.name}</div>
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};
