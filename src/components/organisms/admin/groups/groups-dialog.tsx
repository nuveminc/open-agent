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
// import { GroupsDialogTabs } from './settings-dialog-tabs';

export type GroupsDialogProps = {
  isOpen: boolean;
  showModal: (showModal: boolean) => void;
};

export const GroupsDialog: React.FC<GroupsDialogProps> = ({
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
          'max-w-full w-[30rem] mx-2',
          'text-gray-700 dark:text-gray-100',
          'bg-gray-50 dark:bg-gray-900',
          'border border-gray-850'
        )}
      >
        <DialogHeader>
          <DialogTitle>Add User Group</DialogTitle>
        </DialogHeader>
        <div className="flex flex-col w-full sm:flex-row sm:justify-center sm:space-x-6">
          <form className="flex flex-col w-full">
            <div className="px-1 flex flex-col w-full">
              <div className="flex gap-2">
                <div className="flex flex-col w-full">
                  <div className="mb-0.5 text-xs text-gray-500">Name</div>
                  <div className="flex-1">
                    <input
                      className="w-full text-sm bg-transparent placeholder:text-gray-300 dark:placeholder:text-gray-700 outline-none"
                      type="text"
                      placeholder="Group Name"
                      required
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-col w-full mt-2">
                <div className="mb-1 text-xs text-gray-500">Description</div>
                <div className="flex-1">
                  <input
                    className="w-full text-sm bg-transparent placeholder:text-gray-300 dark:placeholder:text-gray-700 outline-none"
                    type="text"
                    placeholder="Description"
                    required
                  />
                </div>
              </div>
            </div>
          </form>
        </div>
        <DialogFooter>
          <Button
            type="submit"
            disabled={true}
            className="hover:dark:bg-green-700 dark:bg-green-800"
          >
            Create
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
