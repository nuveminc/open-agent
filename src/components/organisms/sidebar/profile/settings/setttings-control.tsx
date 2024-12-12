import { SettingsSlider } from '@/components/molecules/settings-slider';
import { SettingsInput } from '@/components/molecules/settings-input';
import { Switch } from '@/components/ui/switch';
import { SettingsToggle } from '@/components/molecules/settings-toggle';
import {
  SettingsSelect,
  SettingsSelectOption,
} from '../../../../molecules/settings-select';

export type ComponentType = 'input' | 'slider' | 'switch' | 'toggle' | 'select';

export interface ControlProps {
  type?: ComponentType;
  defaultValue?: number | string | boolean;
  options?: string[] | SettingsSelectOption[];
  min?: number;
  max?: number;
  step?: number;
  onChange: (state: string | boolean | number) => void;
}
export const SettingsControl: React.FC<ControlProps> = ({
  type,
  defaultValue = 0.75,
  options,
  min,
  max,
  step,
  onChange,
}: ControlProps) => {
  const renderComponent = (type: ComponentType) => {
    switch (type) {
      case 'input':
        return (
          <SettingsInput
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              onChange(event.target.value)
            }
            defaultValue={defaultValue as number | string}
          />
        );
        break;
      case 'slider':
        return (
          <SettingsSlider
            onValueChange={(values: number[]) => onChange(values[0])}
            defaultValue={defaultValue as number}
            min={min}
            max={max}
            step={step}
          />
        );
        break;
      case 'switch':
        return (
          <div className="flex w-full justify-end mb-1">
            <Switch onCheckedChange={onChange} />
          </div>
        );
        break;
      case 'toggle':
        return (
          <SettingsToggle
            defaultValue={defaultValue as string}
            options={options as string[]}
            onChange={onChange}
          />
        );
      case 'select':
        return (
          <SettingsSelect
            defaultValue={defaultValue as string}
            options={options as SettingsSelectOption[]}
            onChange={onChange}
          />
        );
    }
  };

  return <div>{renderComponent(type as ComponentType)}</div>;
};
