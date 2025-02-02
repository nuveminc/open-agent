import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';

import { cn } from '@/lib/utils';
import React, { useEffect, useState } from 'react';
import { SettingsDialogTabs } from './settings-dialog-tabs';

export type SettingsDialogProps = {
  isOpen: boolean;
  showModal: (showModal: boolean) => void;
};

export const SettingsDialog: React.FC<SettingsDialogProps> = ({
  isOpen,
  showModal,
}) => {
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

  return (
    <Dialog open={open} onOpenChange={handleOpen}>
      <DialogContent
        className={cn(
          'max-w-full w-[48rem] mx-2',
          'text-gray-700 dark:text-gray-100',
          'bg-gray-50 dark:bg-gray-900',
          'border border-gray-300/30'
        )}
      >
        <DialogHeader>
          <DialogTitle>Settings</DialogTitle>
        </DialogHeader>
        <SettingsDialogTabs onNavigate={handleOpen} />
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
