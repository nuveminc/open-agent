import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';

import { cn } from '@/lib/utils';
import React, { useState } from 'react';
import { SettingsDialogTabs } from './settings-dialog-tabs';

export const SettingsDialog: React.FC<{ isOpen: boolean }> = ({ isOpen }) => {
  const [open, setOpen] = useState(isOpen);

  const navigateHandler = (close: boolean) => {
    setOpen(close);
  };
  return (
    <Dialog open={open} onOpenChange={setOpen}>
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
        <SettingsDialogTabs onNavigate={navigateHandler} />
        <DialogFooter>
          <Button
            type="submit"
            className="hover:dark:bg-green-700 dark:bg-green-800"
          >
            Save
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
