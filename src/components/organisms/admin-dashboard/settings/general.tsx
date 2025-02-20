import {
  LabelControlProps,
  SettingsLabelControl,
} from '@/components/molecules/settings/settings-label-control';
import {
  ComponentType,
  ControlProps,
  SettingsControl,
} from '@/components/molecules/settings/setttings-control';
import { ValueType } from '@/types';
import React from 'react';

type LabelControl = Partial<ControlProps> & Partial<LabelControlProps>;

const adminSettingsSwitch: LabelControl[] = [
  {
    label: 'Enable New SignUps',
    type: 'switch',
    controlName: 'enableNewSignUps',
    defaultValue: true,
  },
  {
    label: 'Default User Role',
    type: 'switch',
    controlName: 'defaultUserRole',
    defaultValue: true,
  },
  {
    label: 'Enable API Key',
    type: 'switch',
    controlName: 'enableApiKey',
    defaultValue: true,
  },
  {
    label: 'Show Admin Details in Account Pending Overlay',
    type: 'switch',
    controlName: 'showAdminDetails',
    defaultValue: true,
  },
  {
    label: 'Enable Community Sharing',
    type: 'switch',
    controlName: 'enableCommunitySharing',
    defaultValue: true,
  },
  {
    label: 'Enable Message Rating',
    type: 'switch',
    controlName: 'enableMessageRating',
    defaultValue: true,
  },
  {
    label: 'Channels (Beta)',
    type: 'switch',
    controlName: 'channels',
    defaultValue: false,
  },
  { label: 'LDAP', type: 'switch', controlName: 'ldap', defaultValue: false },
];

const adminSettingsInput = [
  {
    label: 'WebUI URL',
    type: 'input',
    controlName: 'webUIUrl',
    defaultValue: 'http://localhost:3000',
    placeholder:
      'Eter the public URL of your WebUI. THis ULR will be used to generate links in the notifications',
  },
  {
    label: 'JWT Expiration',
    type: 'input',
    controlName: 'jwtExpiration',
    defaultValue: -1,
  },
];

export const AdminSettingsGeneral: React.FC = () => {
  const handleChange = (name: string, state: ValueType): void => {
    console.log(name, state);
  };

  return (
    <div>
      {adminSettingsSwitch.map((item) => (
        <SettingsLabelControl label={item.label!} className="mb-2">
          <SettingsControl
            type={item.type!}
            defaultValue={true}
            controlName={item.controlName!}
            onChange={handleChange}
          />
        </SettingsLabelControl>
      ))}
      {adminSettingsInput.map((item) => (
        <SettingsLabelControl label={item.label!} className="mb-2">
          <SettingsControl
            type={item.type! as ComponentType}
            defaultValue={item.defaultValue!}
            controlName={item.controlName!}
            placeholder={item.placeholder}
            onChange={handleChange}
          />
        </SettingsLabelControl>
      ))}
    </div>
  );
};
