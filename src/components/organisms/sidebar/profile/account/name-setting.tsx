import { useState } from 'react';

export const NameSetting: React.FC<{
  label: string;
  value: string;
  controlName: string;
  onChange: (name: string, text: string) => void;
}> = ({ label, value, controlName, onChange }) => {
  const [inputValue, setInputValue] = useState(value);
  const [name] = useState<string>(controlName);

  const inputChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
    onChange(name, event.target.value);
  };
  return (
    <div className="my-3">
      <div className="text-sm mb-1">{label}</div>
      <input
        type="text"
        value={inputValue}
        onChange={inputChangeHandler}
        className="w-full rounded-md px-3 py-1 dark:bg-gray-850"
      />
    </div>
  );
};
