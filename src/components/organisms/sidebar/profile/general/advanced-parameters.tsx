import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { ValueType } from '@/types';
import { SettingParameters } from '@/types/settings';
import {
  ComponentType,
  SettingsControl,
} from '@/components/molecules/settings/setttings-control';
import { SettingsToggleDisplay } from '@/components/molecules/settings/settings-toggle-display';

interface SettingsControlParams {
  label: string;
  type: ComponentType;
  defaultValue: number | string | boolean;
  controlName: string;
  min?: number;
  max?: number;
  step?: number;
}

/**
 * Advanced Parameters is a settings component that allows
 * the user to change the advanced parameters of the model
 *
 * @param settings speicific settings for the model
 * @returns a settings component
 */
export const AdvancedParameters: React.FC<{
  settings: SettingParameters;
  onChange: (name: string, value: ValueType) => void;
}> = ({ settings, onChange }) => {
  const [toggle, setToggle] = useState<boolean>(true);

  const setDisplay = () => {
    setToggle(!toggle);
  };

  const handleChange = (name: string, value: ValueType) => {
    onChange(`parameters:${name}`, value);
  };

  const controlSettings: SettingsControlParams[] = [
    {
      label: 'Seed',
      type: 'input',
      controlName: 'seed',
      defaultValue: settings.seed,
    },
    {
      label: 'Stop Sequence',
      type: 'input',
      controlName: 'stopSequence',
      defaultValue: settings.stopSequence,
    },
    {
      label: 'Temperature',
      type: 'slider',
      controlName: 'temperature',
      defaultValue: settings.temperature,
    },
    {
      label: 'Mirostat',
      type: 'slider',
      controlName: 'mirostat',
      defaultValue: settings.mirostat,
    },
    {
      label: 'Mirostat Eta',
      controlName: 'mirostatEta',
      type: 'slider',
      defaultValue: settings.mirostatEta,
    },
    {
      label: 'Mirostat Tau',
      type: 'slider',
      controlName: 'mirostatTau',
      defaultValue: settings.mirostatTau,
      min: 0,
      max: 10,
    },
    {
      label: 'Top K',
      type: 'slider',
      controlName: 'topK',
      defaultValue: settings.topK,
      min: 0,
      max: 10,
    },
    {
      label: 'Top P',
      type: 'slider',
      controlName: 'topP',
      defaultValue: settings.topP,
      min: 0,
      max: 100,
    },
    { label: 'Min P', type: 'slider', controlName: 'minP', defaultValue: 0.0 },
    {
      label: 'Frequency Penalty',
      type: 'slider',
      controlName: 'frequencyPenalty',
      defaultValue: settings.frequencyPenalty,
    },
    {
      label: 'Repeat Last N',
      type: 'slider',
      defaultValue: settings.repeatLastN,
      controlName: 'repeatLastN',
      min: -1.0,
      max: 128,
      step: 1,
    },
    {
      label: 'Tfs Z',
      type: 'slider',
      controlName: 'TfsZ',
      defaultValue: settings.tfsZ,
      min: 0.0,
      max: 2.0,
    },
    {
      label: 'Content Length',
      type: 'slider',
      controlName: 'contentLength',
      defaultValue: settings.contentLength,
      min: 2048.0,
      max: 10240000.0,
      step: 1,
    },
    {
      label: 'Batch Size (num_batch)',
      type: 'slider',
      controlName: 'batchSize',
      defaultValue: settings.batchSize,
      min: 256,
      max: 8192,
      step: 1,
    },
    {
      label: 'Tokens To Keep on Context Refresh (num_keep)',
      type: 'slider',
      controlName: 'tokensToKeep',
      defaultValue: settings.tokensToKeep,
      min: 24.0,
      max: 10240000,
      step: 1,
    },
    {
      label: 'Max Tokens (num_predict)',
      type: 'slider',
      controlName: 'maxTokens',
      defaultValue: settings.maxTokens,
      min: -2,
      max: 16000,
      step: 1,
    },
    {
      label: 'Ollama: use_mmap',
      type: 'switch',
      controlName: 'ollamaUseMnap',
      defaultValue: settings.ollamaUseMnap,
    },
    {
      label: 'Ollama: use_mlock',
      type: 'switch',
      controlName: 'ollamaUseMLock',
      defaultValue: settings.ollamaUseMLock,
    },
    {
      label: 'Ollama: num_thread',
      type: 'slider',
      controlName: 'ollamaNumThread',
      defaultValue: settings.ollamaNumThreads,
      min: 1,
      max: 256,
      step: 1,
    },
    {
      label: 'Ollama: num_gpu',
      type: 'slider',
      controlName: 'ollamaNumGpu',
      defaultValue: settings.ollamaNumGpus,
      min: 0,
      max: 256,
      step: 1,
    },
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
        {controlSettings.map((setting: SettingsControlParams, idx: number) => (
          <SettingsToggleDisplay key={`settings-${idx}`} label={setting.label}>
            <SettingsControl
              onChange={handleChange}
              type={setting.type}
              defaultValue={setting.defaultValue}
              controlName={setting.controlName}
              min={setting.min}
              max={setting.max}
              step={setting.step}
            />
          </SettingsToggleDisplay>
        ))}
        <div className="mt-5">
          <SettingsToggleDisplay label="Keep Alive">
            <SettingsControl
              onChange={handleChange}
              type="input"
              defaultValue="5m"
              controlName="keepAlive"
            />
          </SettingsToggleDisplay>
        </div>
        <div className="mt-5">
          <SettingsToggleDisplay label="Request Mode">
            <SettingsControl
              onChange={handleChange}
              type="toggle"
              defaultValue="Default"
              controlName="requestMode"
              options={['Default', 'JSON']}
            />
          </SettingsToggleDisplay>
        </div>
        <div> </div>
      </div>
    </div>
  );
};
