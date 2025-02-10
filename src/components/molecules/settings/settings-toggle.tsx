import React, { useState } from 'react';

/**
 * Interface for Settings Toggle properties
 * @interface SettingsToggleProps
 */
export interface SettingsToggleProps {
  controlName: string;
  defaultValue: string;
  options: string[]; // options are indexed: 0: default and 1: option
  onChange: (name: string, value: string) => void;
}

/**
 * A toggle component for settings that switches between two states
 *
 * @component
 * @param {string} controlName Name of the control
 * @param {string} defaultValue Initial value
 * @param {string[]} options Array of two possible values
 * @param {Function} onChange Change handler callback
 * @returns {JSX.Element} A toggle control that switches between two states
 */
export const SettingsToggle: React.FC<SettingsToggleProps> = ({
  onChange,
  defaultValue,
  controlName,
  options,
}) => {
  const [value, setValue] = useState(defaultValue);
  const [name] = useState(controlName);
  let optionIdx = options.indexOf(value);

  const onClick = () => {
    optionIdx = optionIdx ^ 1;
    setValue(options[optionIdx]);
    onChange(name, options[optionIdx]);
  };

  return (
    <>
      <div onClick={onClick} className="text-xs cursor-pointer">
        {value}
      </div>
    </>
  );
};
