import React from 'react';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

import languages from '@/i18n/languages.json';

export interface LanguageProps {
  languages: {
    value: string;
    name: string;
  }[];
}
export const Languages: React.FC<object> = () => {
  return (
    <div className="mb-3">
      <div className="flex justify-between items-center">
        <div>Languages</div>
        <div>
          <Select defaultValue="English (US)">
            <SelectTrigger className="w-[8rem] border border-0">
              <SelectValue></SelectValue>
            </SelectTrigger>
            <SelectContent className="text-white bg-gray-900 border border-gray-700 relative left-[-5rem]">
              <SelectGroup>
                {languages.map((language) => (
                  <SelectItem value={language.title} className="cursor-pointer">
                    <div>{language.title}</div>
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className="flex items-start text-xs text-gray-300">
        Couldn't find your language? Help us translate{' '}
        <a href="" className="pl-1 text-blue-400 underline">
          Open WebUI!
        </a>
      </div>
    </div>
  );
};
