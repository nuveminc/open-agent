import React from 'react';
import { DialogType } from '../../../common/dialog-container';

type CreateGroupProps = Readonly<{
  showDialog: (show: boolean) => void;
  setModal: (modal: DialogType) => void;
}>;

const CreateGroup: React.FC<CreateGroupProps> = ({ showDialog, setModal }) => {
  const handleDialog = (show: boolean) => {
    console.log('show dialog');
    setModal('groups');
    showDialog(show);
  };

  return (
    <div className="flex flex-col items-center justify-center h-40">
      <div className="text-xl font-medium">Organize your users</div>
      <div className="mt-1 text-sm dark:text-gray-300">
        Use groups to group your users and assign permissions.
      </div>
      <div className="mt-3">
        <button
          className="px-4 py-1.5 text-sm rounded-full bg-black hover:bg-gray-800 text-white dark:bg-white dark:text-black dark:hover:bg-gray-100 transition font-medium flex items-center space-x-1"
          aria-label="Create Group"
          onClick={() => handleDialog(true)}
        >
          Create Group
        </button>
      </div>
    </div>
  );
};
export default CreateGroup;
