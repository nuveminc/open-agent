import { Switch } from '@/components/ui/switch';
import { ValueType } from '@/types';
import { useState } from 'react';

type SettingsSwitchProps = {
  defaultValue: ValueType;
  controlName: string;
  showLabel: boolean;
  onChange: (name: string, value: ValueType) => void;
};
export const SettingsSwitch: React.FC<SettingsSwitchProps> = ({
  defaultValue,
  controlName,
  showLabel = false,
  onChange,
}) => {
  const [toggle, setToggle] = useState<boolean>(defaultValue as boolean);

  const handleChange = (value: boolean) => {
    setToggle(!toggle);
    onChange(controlName, value);
  };

  const getLabel = () => {
    return toggle ? 'Enabled' : 'Disabled';
  };

  return (
    <div className="flex w-full justify-between mb-1">
      <div className="text-xs text-gray-500">{showLabel && getLabel()}</div>
      <Switch
        key={controlName}
        checked={toggle}
        onCheckedChange={handleChange}
      />
    </div>
  );
};
