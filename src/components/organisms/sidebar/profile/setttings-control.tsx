import { cn } from '@/lib/utils';
import React, { useState } from 'react';
import { SettingsSlider } from '@/components/molecules/settings-slider';
import { SettingsInput } from '@/components/molecules/settings-input';
import { Switch } from '@/components/ui/switch';
import { SettingsToggle } from '@/components/molecules/settings-toggle';

export type ComponentType = 'input' | 'slider' | 'switch' | 'toggle';

export interface ControlProps {
  title: string;
  onToggle: (state: boolean) => void;
  type?: ComponentType;
  defaultValue?: number | string | boolean;
  options?: string[];
  min?: number;
  max?: number;
  step?: number;
}
export const SettingsControl: React.FC<ControlProps> = ({
  title,
  onToggle,
  type,
  defaultValue = 0.75,
  options,
  min,
  max,
  step,
}: ControlProps) => {
  const [showCustomTemperature, setCustomTemperature] = useState(false);

  const toggleTemperature = () => {
    const state = !showCustomTemperature;
    setCustomTemperature(!showCustomTemperature);
    onToggle(state);
  };

  const fnVoid = () => {};
  const fnEventLog = (event: React.ChangeEvent<HTMLInputElement>) =>
    console.log(event.target.value);

  const onSwitchChange = () => {};

  const renderComponent = (type: ComponentType) => {
    switch (type) {
      case 'input':
        return (
          <SettingsInput
            onChange={fnEventLog}
            defaultValue={defaultValue as number | string}
          />
        );
        break;
      case 'slider':
        return (
          <SettingsSlider
            onValueChange={fnVoid}
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
            <Switch id={title} onChange={onSwitchChange} />
          </div>
        );
        break;
      case 'toggle':
        return (
          <SettingsToggle
            defaultValue={defaultValue as string}
            options={options as string[]}
            onChange={onSwitchChange}
          />
        );
    }
  };

  const renderToggle = (type: ComponentType) => {
    if (type !== 'toggle') {
      return (
        <div className="text-xs cursor-pointer" onClick={toggleTemperature}>
          {showCustomTemperature ? 'Custom' : 'Default'}
        </div>
      );
    } else {
      return renderComponent(type as ComponentType);
    }
  };

  return (
    <div className="mb-1">
      <div className="flex justify-between">
        <div>{title}</div>
        {renderToggle(type as ComponentType)}
      </div>
      {type !== 'toggle' ? (
        <div
          className={cn(
            'flex justify-between items-center my-1',
            showCustomTemperature ? 'display' : 'hidden'
          )}
        >
          {renderComponent(type as ComponentType)}
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};
