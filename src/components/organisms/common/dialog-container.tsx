import React from 'react';
import { SettingsDialog } from '../sidebar/profile/settings/settings-dialog';
import { GroupsDialog } from '../admin/groups/groups-dialog';
import { DefaultPermissionsDialog } from '../admin/groups/default-permissions-dialog';

export type DialogType = 'settings' | 'groups' | 'permissions';

interface DialogContainerProps {
  type: DialogType;
  isOpen: boolean;
  showModal: (showModal: boolean) => void;
}
const DialogContainer: React.FC<DialogContainerProps> = ({
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

export default DialogContainer;
