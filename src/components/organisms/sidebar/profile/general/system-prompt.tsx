import React from 'react';
import { InputType, ValueType } from '../settings/settings-dialog-tabs';

interface SystemPromptProps {
  prompt: InputType;
  onChange: (value: ValueType) => void;
}

export const SystemPrompt: React.FC<SystemPromptProps> = ({
  prompt,
  onChange,
}) => {
  const [value, setValue] = React.useState<InputType>(prompt);

  const handleChange = (value: InputType) => {
    setValue(value);
    onChange(value as ValueType);
  };

  return (
    <div className="mb-3 text-sm font-normal">
      <div>
        <div className="mb-2">System Prompt</div>
        <div className="space-x-2">
          <textarea
            className="w-full rounded dark:bg-gray-850 focus:border-gray-850 focus:outline-none p-2"
            cols={50}
            rows={5}
            value={value as string}
            onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) => {
              handleChange(event.target.value as InputType);
            }}
          ></textarea>
        </div>
      </div>
    </div>
  );
};
