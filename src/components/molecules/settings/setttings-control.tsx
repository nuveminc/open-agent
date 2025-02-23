import { SettingsInput } from '@/components/molecules/settings/settings-input';
import { SettingsToggle } from '@/components/molecules/settings/settings-toggle';
import { SettingsSlider } from '@/components/molecules/settings/settings-slider';
import { SettingsSelect, SettingsSelectOption } from './settings-select';
import { useState } from 'react';
import { ValueType } from '@/types';
import { SettingsSwitch } from './settings-switch';

export type ComponentType = 'input' | 'slider' | 'switch' | 'toggle' | 'select';

export type ControlProps = Readonly<{
  type: ComponentType;
  defaultValue: ValueType;
  controlName: string;
  placeholder?: string;
  showSwitchLabel?: boolean; // only applies to switch
  options?: string[] | SettingsSelectOption[];
  min?: number;
  max?: number;
  step?: number;
  onChange: (name: string, state: ValueType) => void;
}>;
/**
 * A SettingsControl component that renders a control based on the type prop.
 * The control can be an input, slider, switch, toggle, or select.
 *
 * @component
 * @param {ComponentType} type the type of control to render
 * @param {ValueType} defaltValue: the default value
 * @param {string} contolName: the name of the control
 * @param {string} [placeholder] the placeholder for input
 * @param {boolean} [showwitchLabel] only applies to switch
 * @param {string[] | SettingsSelectOption[]} [options] the options for toggle or select
 * @param {number} [min] the minimum value for slider
 * @param {number} [max] the maximum value for slider
 * @param {number} [step] the step value for slider
 * @param {Function} onChange the function to call when the value changes
 * @returns {JSX.Element} the rendered control
 */
export const SettingsControl: React.FC<ControlProps> = ({
  type,
  defaultValue,
  controlName,
  placeholder,
  showSwitchLabel,
  options,
  min,
  max,
  step,
  onChange,
}: ControlProps) => {
  const [name] = useState<string>(controlName || '');

  const handleChange = (name: string, value: ValueType) => {
    onChange(name, value);
  };

  const renderComponent = (type: ComponentType) => {
    switch (type) {
      case 'input':
        return (
          <SettingsInput
            key={name}
            onChange={handleChange}
            controlName={name}
            placeholder={placeholder}
            defaultValue={defaultValue as number | string}
          />
        );
      case 'slider':
        return (
          <SettingsSlider
            key={name}
            onValueChange={(name: string, values: number[]) =>
              handleChange(name, values[0])
            }
            defaultValue={defaultValue as number}
            controlName={name}
            min={min}
            max={max}
            step={step}
          />
        );
      case 'switch':
        return (
          <SettingsSwitch
            onChange={handleChange}
            defaultValue={defaultValue}
            controlName={controlName}
            showLabel={showSwitchLabel as boolean}
          />
        );
      case 'toggle':
        return (
          <SettingsToggle
            key={name}
            defaultValue={defaultValue as string}
            controlName={name}
            options={options as string[]}
            onChange={handleChange}
          />
        );
      case 'select':
        return (
          <SettingsSelect
            key={name}
            defaultValue={defaultValue as string}
            controlName={name}
            options={options as SettingsSelectOption[]}
            onChange={handleChange}
          />
        );
    }
  };

  return <div>{renderComponent(type as ComponentType)}</div>;
};
