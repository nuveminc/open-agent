import { InputType, ValueType } from '@/types';
import React from 'react';

interface SystemPromptProps {
  prompt: InputType;
  placecholder?: string;
  controlName: string;
  showLabel?: boolean;
  onChange: (name: string, value: ValueType) => void;
}

export const SystemPrompt: React.FC<SystemPromptProps> = ({
  prompt,
  placecholder = '',
  controlName,
  showLabel = true,
  onChange,
}) => {
  const [value, setValue] = React.useState<InputType>(prompt);
  const [name] = React.useState<string>(controlName);

  const handleChange = (value: InputType) => {
    setValue(value);
    onChange(name, value as ValueType);
  };

  return (
    <div className="mb-3 text-sm font-normal">
      <div>
        {showLabel && <div className="mb-2">System Prompt</div>}
        <div className="space-x-2">
          <textarea
            className="w-full rounded dark:bg-gray-850 focus:border-gray-850 focus:outline-none p-2"
            cols={50}
            rows={5}
            value={value as string}
            placeholder={placecholder}
            onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) => {
              handleChange(event.target.value as InputType);
            }}
          ></textarea>
        </div>
      </div>
    </div>
  );
};
