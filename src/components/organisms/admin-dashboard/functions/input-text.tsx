import React, { ChangeEvent, useState } from 'react';

interface InputTextProps {
  placeholder: string;
  onChange: (text: string) => void;
}
export const InputText: React.FC<InputTextProps> = ({
  placeholder,
  onChange,
}) => {
  const [value, setValue] = useState<string>('');

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
    setValue(event.target.value);
  };
  return (
    <div className="border-b-2 border-gray-800">
      <input
        type="text"
        value={value}
        placeholder={placeholder}
        onChange={handleChange}
        className="bg-transparent focus:outline-none font-primary"
      />
    </div>
  );
};
