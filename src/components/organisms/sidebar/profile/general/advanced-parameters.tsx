import {
  ComponentType,
  SettingsControl,
} from '@/components/organisms/sidebar/profile/setttings-control';
import { cn } from '@/lib/utils';
import React, { useState } from 'react';

export interface ThemeProps {
  themes: {
    value: string;
    name: string;
  }[];
}

interface Settings {
  title: string;
  type: ComponentType;
  defaultValue: number | string | boolean;
  min?: number;
  max?: number;
  step?: number;
}
export const AdvancedParameters: React.FC<object> = () => {
  const [toggle, setToggle] = useState(true);
  const [, setCustomTemperature] = useState(false);

  const setDisplay = () => {
    setToggle(!toggle);
  };
  const toggleTemperature = (state: boolean) => {
    setCustomTemperature(state);
  };

  const onChange = () => {};

  const settings: Settings[] = [
    { title: 'Seed', type: 'input', defaultValue: 0 },
    {
      title: 'Stop Sequence',
      type: 'input',
      defaultValue: '',
    },
    {
      title: 'Temperature',
      type: 'slider',
      defaultValue: 0.8,
    },
    { title: 'Mirostat', type: 'slider', defaultValue: 0.0 },
    { title: 'Mirostat Eta', type: 'slider', defaultValue: 0.1 },
    {
      title: 'Mirostat Tau',
      type: 'slider',
      defaultValue: 5.0,
      min: 0,
      max: 10,
    },
    { title: 'Top K', type: 'slider', defaultValue: 5.0, min: 0, max: 10 },
    { title: 'Top P', type: 'slider', defaultValue: 0.9, min: 0, max: 100 },
    { title: 'Min P', type: 'slider', defaultValue: 0.0 },
    { title: 'Frequency Penalty', type: 'slider', defaultValue: 1.1 },
    {
      title: 'Repeat Last N',
      type: 'slider',
      defaultValue: 64.0,
      min: -1.0,
      max: 128,
      step: 1,
    },
    { title: 'Tfs Z', type: 'slider', defaultValue: 1.0, min: 0.0, max: 2.0 },
    {
      title: 'Content Length',
      type: 'slider',
      defaultValue: 2048.0,
      min: 2048.0,
      max: 10240000.0,
      step: 1,
    },
    {
      title: 'Batch Size (num_batch)',
      type: 'slider',
      defaultValue: 512.0,
      min: 256,
      max: 8192,
      step: 1,
    },
    {
      title: 'Tokens To Keep on Context Refresh (num_keep)',
      type: 'slider',
      defaultValue: 24,
      min: 24.0,
      max: 10240000,
      step: 1,
    },
    {
      title: 'Max Tokens (num_predict)',
      type: 'slider',
      defaultValue: 128,
      min: -2,
      max: 16000,
      step: 1,
    },
    { title: 'Ollama: use_mmap', type: 'switch', defaultValue: true },
    { title: 'Ollama: use_mlock', type: 'switch', defaultValue: true },
    {
      title: 'Ollama: num_thread',
      type: 'slider',
      defaultValue: 2,
      min: 1,
      max: 256,
      step: 1,
    },
    {
      title: 'Ollama: num_gpu',
      type: 'slider',
      defaultValue: 0,
      min: 0,
      max: 256,
      step: 1,
    },
    // { title: 'Keep Alive', type: 'slider', defaultValue: 0.75 },
  ];

  return (
    <div className="mb-3">
      <div className="flex justify-between items-center">
        <div className="text-base">Advanced Parameters</div>
        <div
          onClick={setDisplay}
          className="cursor-pointer flex items-center space-x-2 text-xs dark:text-gray-500"
        >
          {toggle === true ? 'Hide' : 'Show'}
        </div>
      </div>
      <div className={cn(toggle ? 'display' : 'hidden')}>
        {settings.map((setting: Settings) => (
          <SettingsControl
            onToggle={toggleTemperature}
            title={setting.title}
            type={setting.type}
            defaultValue={setting.defaultValue}
            min={setting.min}
            max={setting.max}
            step={setting.step}
          />
        ))}
        <div className="mt-5">
          <SettingsControl
            onToggle={toggleTemperature}
            title="Keep Alive"
            type="input"
            defaultValue="5m"
          />
        </div>
        <div className="mt-5">
          <SettingsControl
            onToggle={onChange}
            type="toggle"
            title="Request Mode"
            defaultValue="Default"
            options={['Default', 'JSON']}
          />
        </div>
        <div> </div>
      </div>
    </div>
  );
};
