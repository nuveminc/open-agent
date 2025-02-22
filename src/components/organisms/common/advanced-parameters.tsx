import React from 'react';
import { ValueType } from '@/types';
import { SettingParameters } from '@/types/settings-parameters.type';
import {
  ComponentType,
  SettingsControl,
} from '@/components/molecules/settings/setttings-control';
import { SettingsToggleDisplay } from '@/components/molecules/settings/settings-toggle-display';
import { advancedControlSettings } from '@/constants/advanced-control-settings';

export interface AdvancedSettingsParams {
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
  advancedControlSettings: AdvancedSettingsParams[];
  settings: SettingParameters;
  httpSettings?: boolean;
  onChange: (name: string, value: ValueType) => void;
}> = ({ settings, httpSettings, onChange }) => {
  const handleChange = (name: string, value: ValueType) => {
    onChange(`parameters:${name}`, value);
  };

  const advancedSettings = advancedControlSettings.map((item) => ({
    ...item,
    defaultValue: settings[item.controlName as keyof SettingParameters],
  }));

  return (
    <div>
      {advancedSettings.map((setting: AdvancedSettingsParams, idx: number) => (
        <SettingsToggleDisplay
          key={`settings-${idx}`}
          label={setting.label}
          labelClassName="text-sm font-normal"
        >
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
      {httpSettings && (
        <div>
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
        </div>
      )}
    </div>
  );
};
