import { SettingsInput } from '@/components/molecules/settings/settings-input';
import { SettingsToggle } from '@/components/molecules/settings/settings-toggle';
import { SettingsSlider } from '@/components/molecules/settings/settings-slider';
import { SettingsSelect, SettingsSelectOption } from './settings-select';
import { useState } from 'react';
import { ValueType } from '@/types';
import { SettingsSwitch } from './settings-switch';

export type ComponentType = 'input' | 'slider' | 'switch' | 'toggle' | 'select';

export interface ControlProps {
  type: ComponentType;
  defaultValue: ValueType;
  controlName: string;
  showSwitchLabel?: boolean; // only applies to switch
  options?: string[] | SettingsSelectOption[];
  min?: number;
  max?: number;
  step?: number;
  onChange: (name: string, state: ValueType) => void;
}
export const SettingsControl: React.FC<ControlProps> = ({
  type,
  defaultValue,
  controlName,
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
