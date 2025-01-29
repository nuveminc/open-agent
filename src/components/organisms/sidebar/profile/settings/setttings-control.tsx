import { Switch } from '@/components/ui/switch';
import { SettingsInput } from '@/components/molecules/settings/settings-input';
import { SettingsToggle } from '@/components/molecules/settings/settings-toggle';
import { SettingsSlider } from '@/components/molecules/settings/settings-slider';
import {
  SettingsSelect,
  SettingsSelectOption,
} from '../../../../molecules/settings/settings-select';
import { useState } from 'react';
import { ValueType } from '@/types';

export type ComponentType = 'input' | 'slider' | 'switch' | 'toggle' | 'select';

export interface ControlProps {
  type?: ComponentType;
  defaultValue?: ValueType;
  controlName?: string;
  options?: string[] | SettingsSelectOption[];
  min?: number;
  max?: number;
  step?: number;
  onChange: (name: string, state: ValueType) => void;
}
export const SettingsControl: React.FC<ControlProps> = ({
  type,
  defaultValue = 0.75,
  controlName,
  options,
  min,
  max,
  step,
  onChange,
}: ControlProps) => {
  const [name] = useState<string>(controlName || '');
  const handleChange = (name: string, value: ValueType) => {
    onChange(name, value);
  }
  const renderComponent = (type: ComponentType) => {
    switch (type) {
      case 'input':
        return (
          <SettingsInput
            onChange={handleChange}
            controlName={name}
            defaultValue={defaultValue as number | string}
          />
        );
        break;
      case 'slider':
        return (
          <SettingsSlider
            onValueChange={(name: string, values: number[]) => handleChange(name, values[0])}
            defaultValue={defaultValue as number}
            controlName={name}
            min={min}
            max={max}
            step={step}
          />
        );
        break;
      case 'switch':
        return (
          <div className="flex w-full justify-end mb-1">
            <Switch onCheckedChange={(value: boolean) => handleChange(name, value)} />
          </div>
        );
        break;
      case 'toggle':
        return (
          <SettingsToggle
            defaultValue={defaultValue as string}
            controlName={name}
            options={options as string[]}
            onChange={handleChange}
          />
        );
      case 'select':
        return (
          <SettingsSelect
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
