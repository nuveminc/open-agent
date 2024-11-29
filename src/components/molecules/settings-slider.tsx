import React, { useState } from 'react';
import { Slider } from '../ui/slider';

export interface SettingsSliderProps {
  onValueChange: (value: number[]) => void;
  defaultValue: number;
  min?: number;
  max?: number;
  step?: number;
}
export const SettingsSlider: React.FC<SettingsSliderProps> = ({
  onValueChange,
  defaultValue,
  min = 0,
  max = 1,
  step = 0.05,
}) => {
  const [temperature, setTemperature] = useState([defaultValue]);

  const temperatureOnChange = (value: number[]) => {
    onValueChange(value);
    setTemperature(value);
  };
  return (
    <>
      <div className="w-[90%]">
        <Slider
          defaultValue={temperature}
          min={min}
          max={max}
          step={step}
          onValueChange={temperatureOnChange}
        />
      </div>
      <div className="text-xs text-gray-200">{temperature}</div>
    </>
  );
};
