import React, { useState } from 'react';
import { Slider } from '@/components/ui/slider';

export interface SettingsSliderProps {
  onValueChange: (name: string, value: number[]) => void;
  defaultValue: number;
  controlName: string,
  min?: number;
  max?: number;
  step?: number;
}
export const SettingsSlider: React.FC<SettingsSliderProps> = ({
  onValueChange,
  defaultValue,
  controlName,
  min = 0,
  max = 1,
  step = 0.05,
}) => {
  const [temperature, setTemperature] = useState([defaultValue]);
  const [name] = useState<string>(controlName);

  const temperatureOnChange = (value: number[]) => {
    onValueChange(name, value);
    setTemperature(value);
  };
  return (
    <div className="flex items-center">
      <div className="w-[90%]">
        <Slider
          defaultValue={temperature}
          min={min}
          max={max}
          step={step}
          onValueChange={temperatureOnChange}
        />
      </div>
      <div className="text-xs text-gray-200 ml-2">{temperature}</div>
    </div>
  );
};
