import React from 'react';
import GroupCount from './group-count';
import GroupSearchBar from './search-bar';
import CreateGroup from './create-group';
import { useAppPresenter } from '@/presenters/app/useAppPresenter';
import DefaultPermissionsButton from './default-permissions-button';

const Groups: React.FC = () => {
  const { presenter } = useAppPresenter();
  return (
    <>
      <div className="flex-1 mt-1 w-full lg:mt-0 overflow-y-auto">
        <div className=" flex flex-col mt-0.5 mb-2 gap-1 md:flex-row justify-between">
          <GroupCount />
          <div className="flex gap-1">
            <div className="flex w-full space-x-2">
              <GroupSearchBar />
            </div>
          </div>
        </div>
        <div>
          <CreateGroup
            showDialog={presenter.showModal}
            setModal={presenter.setModal}
          />
          <hr className="mb-2 border-gray-50 dark:border-gray-850" />
          <DefaultPermissionsButton
            showDialog={presenter.showModal}
            setModal={presenter.setModal}
          />
        </div>
      </div>
    </>
  );
};

export default Groups;
