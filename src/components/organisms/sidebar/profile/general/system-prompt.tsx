import React from 'react';

export interface ThemeProps {
  themes: {
    value: string;
    name: string;
  }[];
}
export const SystemPrompt: React.FC<object> = () => {
  return (
    <div className="mb-3">
      <div>
        <div className="mb-2">System Prompt</div>
        <div className="space-x-2">
          <textarea
            className="w-full rounded dark:bg-gray-850 focus:border-gray-850 focus:outline-none p-2"
            cols={50}
            rows={5}
          ></textarea>
        </div>
      </div>
    </div>
  );
};
