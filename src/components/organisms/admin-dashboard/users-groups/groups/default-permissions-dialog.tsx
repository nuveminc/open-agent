import React, { useEffect, useState } from 'react';
import { ValueType } from '@/types';
import { cn } from '@/lib/utils';
import { SettingsLabelControl } from '@/components/molecules/settings/settings-label-control';
import { SettingsSection } from '@/components/molecules/settings/settings-section';
import { SettingsControl } from '@/components/molecules/settings/setttings-control';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { defaultUserPermissions } from '@/constants/default-user-permissions';

export type DefaultPermissionsDialogProps = {
  isOpen: boolean;
  showModal: (showModal: boolean) => void;
};

export const DefaultPermissionsDialog: React.FC<
  DefaultPermissionsDialogProps
> = ({ isOpen, showModal }) => {
  const [open, setOpen] = useState(isOpen);

  const handleOpen = React.useCallback(
    (open: boolean) => {
      setOpen(open);
      showModal(open);
    },
    [showModal]
  );

  useEffect(() => {
    handleOpen(isOpen);
  }, [isOpen, handleOpen]);

  const handleChange = (name: string, state: ValueType) => {
    console.log(name, state);
  };

  const workspacePermissionControls = [
    {
      label: 'Models Access',
      controlName: 'modelsAccess',
      defaultValue: defaultUserPermissions.modelAccess,
    },
    {
      label: 'Knowledge Access',
      controlName: 'knowledgeAccess',
      defaultValue: defaultUserPermissions.knowledgeAccess,
    },
    {
      label: 'Prompts Access',
      controlName: 'promptsAccess',
      defaultValue: defaultUserPermissions.promptsAccess,
    },
    {
      label: 'Tools Access',
      controlName: 'toolsAccess',
      defaultValue: defaultUserPermissions.toolsAccess,
    },
  ];
  const chatPermissionControls = [
    {
      label: 'Allow File Upload',
      controlName: 'fileUpload',
      defaultValue: defaultUserPermissions.chats.allowFileUpload,
    },
    {
      label: 'Allow Chat Delete',
      controlName: 'allowDelete',
      defaultValue: defaultUserPermissions.chats.allowDelete,
    },
    {
      label: 'Allow Chat Edit',
      controlName: 'allowEdit',
      defaultValue: defaultUserPermissions.chats.allowEdit,
    },
    {
      label: 'Allow Temporary Chat',
      controlName: 'allowTemporaryChat',
      defaultValue: defaultUserPermissions.chats.allowTemporaryChat,
    },
  ];

  return (
    <Dialog open={open} onOpenChange={handleOpen}>
      <DialogContent
        className={cn(
          'max-w-full w-[30rem] mx-2',
          'text-gray-700 dark:text-gray-100',
          'bg-gray-50 dark:bg-gray-900',
          'border border-gray-850'
        )}
      >
        <DialogHeader>
          <DialogTitle>
            <div className="flex flex-row space-x-2">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-4"
                >
                  <path
                    fill-rule="evenodd"
                    d="M12 6.75a5.25 5.25 0 0 1 6.775-5.025.75.75 0 0 1 .313 1.248l-3.32 3.319c.063.475.276.934.641 1.299.365.365.824.578 1.3.64l3.318-3.319a.75.75 0 0 1 1.248.313 5.25 5.25 0 0 1-5.472 6.756c-1.018-.086-1.87.1-2.309.634L7.344 21.3A3.298 3.298 0 1 1 2.7 16.657l8.684-7.151c.533-.44.72-1.291.634-2.309A5.342 5.342 0 0 1 12 6.75ZM4.117 19.125a.75.75 0 0 1 .75-.75h.008a.75.75 0 0 1 .75.75v.008a.75.75 0 0 1-.75.75h-.008a.75.75 0 0 1-.75-.75v-.008Z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </div>
              <div>Edit Default Permissions</div>
            </div>
          </DialogTitle>
        </DialogHeader>
        <div className="flex flex-col md:flex-row w-full px-4 pb-4 md:space-x-4 dark:text-gray-200">
          <div className="flex flex-col w-full sm:flex-row sm:justify-center sm:space-x-6">
            <form className="flex flex-col w-full">
              <div className="flex flex-col lg:flex-row w-full h-full pb-2 lg:space-x-4">
                <div className="flex-1 mt-1 lg:mt-1 lg:h-[22rem] lg:max-h-[22rem] overflow-y-auto scrollbar-hidden">
                  <div>
                    <SettingsSection
                      title="Workspace Permissions"
                      className="text-sm font-medium"
                    >
                      {workspacePermissionControls.map((control) => {
                        return (
                          <SettingsLabelControl
                            label={control.label}
                            className="text-xs font-medium mb-1"
                          >
                            <SettingsControl
                              type="switch"
                              defaultValue={control.defaultValue}
                              controlName={control.controlName}
                              onChange={handleChange}
                            />
                          </SettingsLabelControl>
                        );
                      })}
                    </SettingsSection>
                    <hr className="border-gray-50 dark:border-gray-850 my-2" />
                    <SettingsSection
                      title="Chat Permissions"
                      className="text-sm font-medium"
                    >
                      {chatPermissionControls.map((control) => {
                        return (
                          <SettingsLabelControl
                            label={control.label}
                            className="text-xs font-medium mb-1"
                          >
                            <SettingsControl
                              type="switch"
                              defaultValue={control.defaultValue}
                              controlName={control.controlName}
                              onChange={handleChange}
                            />
                          </SettingsLabelControl>
                        );
                      })}
                    </SettingsSection>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
        <DialogFooter>
          <Button
            type="submit"
            disabled={true}
            className="hover:dark:bg-green-700 dark:bg-green-800"
          >
            Save
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
