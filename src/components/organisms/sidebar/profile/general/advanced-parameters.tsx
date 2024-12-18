import {
  ComponentType,
  SettingsControl,
} from '@/components/organisms/sidebar/profile/settings/setttings-control';
import { cn } from '@/lib/utils';
import React, { useState } from 'react';
import { SettingsToggleDisplay } from '../settings/settings-toggle-display';
import { ValueType } from '../settings/settings-dialog-tabs';

interface Settings {
  label: string;
  type: ComponentType;
  defaultValue: number | string | boolean;
  min?: number;
  max?: number;
  step?: number;
}

export const AdvancedParameters: React.FC<{
  onChange: (value: ValueType) => void;
}> = ({ onChange }) => {
  const [toggle, setToggle] = useState(true);

  const setDisplay = () => {
    setToggle(!toggle);
  };

  const settings: Settings[] = [
    { label: 'Seed', type: 'input', defaultValue: 0 },
    {
      label: 'Stop Sequence',
      type: 'input',
      defaultValue: '',
    },
    {
      label: 'Temperature',
      type: 'slider',
      defaultValue: 0.8,
    },
    { label: 'Mirostat', type: 'slider', defaultValue: 0.0 },
    { label: 'Mirostat Eta', type: 'slider', defaultValue: 0.1 },
    {
      label: 'Mirostat Tau',
      type: 'slider',
      defaultValue: 5.0,
      min: 0,
      max: 10,
    },
    { label: 'Top K', type: 'slider', defaultValue: 5.0, min: 0, max: 10 },
    { label: 'Top P', type: 'slider', defaultValue: 0.9, min: 0, max: 100 },
    { label: 'Min P', type: 'slider', defaultValue: 0.0 },
    { label: 'Frequency Penalty', type: 'slider', defaultValue: 1.1 },
    {
      label: 'Repeat Last N',
      type: 'slider',
      defaultValue: 64.0,
      min: -1.0,
      max: 128,
      step: 1,
    },
    { label: 'Tfs Z', type: 'slider', defaultValue: 1.0, min: 0.0, max: 2.0 },
    {
      label: 'Content Length',
      type: 'slider',
      defaultValue: 2048.0,
      min: 2048.0,
      max: 10240000.0,
      step: 1,
    },
    {
      label: 'Batch Size (num_batch)',
      type: 'slider',
      defaultValue: 512.0,
      min: 256,
      max: 8192,
      step: 1,
    },
    {
      label: 'Tokens To Keep on Context Refresh (num_keep)',
      type: 'slider',
      defaultValue: 24,
      min: 24.0,
      max: 10240000,
      step: 1,
    },
    {
      label: 'Max Tokens (num_predict)',
      type: 'slider',
      defaultValue: 128,
      min: -2,
      max: 16000,
      step: 1,
    },
    { label: 'Ollama: use_mmap', type: 'switch', defaultValue: true },
    { label: 'Ollama: use_mlock', type: 'switch', defaultValue: true },
    {
      label: 'Ollama: num_thread',
      type: 'slider',
      defaultValue: 2,
      min: 1,
      max: 256,
      step: 1,
    },
    {
      label: 'Ollama: num_gpu',
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
          <SettingsToggleDisplay label={setting.label}>
            <SettingsControl
              onChange={onChange}
              type={setting.type}
              defaultValue={setting.defaultValue}
              min={setting.min}
              max={setting.max}
              step={setting.step}
            />
          </SettingsToggleDisplay>
        ))}
        <div className="mt-5">
          <SettingsToggleDisplay label="Keep Alive">
            <SettingsControl
              onChange={onChange}
              type="input"
              defaultValue="5m"
            />
          </SettingsToggleDisplay>
        </div>
        <div className="mt-5">
          <SettingsToggleDisplay label="Request Mode">
            <SettingsControl
              onChange={onChange}
              type="toggle"
              defaultValue="Default"
              options={['Default', 'JSON']}
            />
          </SettingsToggleDisplay>
        </div>
        <div> </div>
      </div>
    </div>
  );
};
