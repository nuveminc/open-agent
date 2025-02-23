import React from 'react';
import { SettingsDialog } from '../sidebar/profile/settings/settings-dialog';
import { GroupsDialog } from '../admin-dashboard/users-groups/groups/groups-dialog';
import { DefaultPermissionsDialog } from '../admin-dashboard/users-groups/groups/default-permissions-dialog';

export type DialogType = 'settings' | 'groups' | 'permissions';

type DialogContainerProps = Readonly<{
  type: DialogType;
  isOpen: boolean;
  showModal: (showModal: boolean) => void;
}>;

export const DialogContainer: React.FC<DialogContainerProps> = ({
  type = 'settings',
  isOpen,
  showModal,
}) => {
  const dialogs = {
    settings: <SettingsDialog isOpen={isOpen} showModal={showModal} />,
    groups: <GroupsDialog isOpen={isOpen} showModal={showModal} />,
    permissions: (
      <DefaultPermissionsDialog isOpen={isOpen} showModal={showModal} />
    ),
  };
  const getModal = () => {
    return dialogs[type] || dialogs.settings;
  };
  return <>{getModal()}</>;
};
