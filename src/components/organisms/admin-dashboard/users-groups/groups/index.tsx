import React from 'react';
import { useModalPresenter } from '@/presenters/app/useModalPresenter';
import { DefaultPermissionsButton } from './default-permissions-button';
import { SearchBar } from '@/components/molecules/common/search-bar';
import { ButtonAdd } from '@/components/molecules/button/button-add';
import { EntityCount } from '../../common/entity-count';
import CreateGroup from './create-group';

export const Groups: React.FC = () => {
  const { presenter } = useModalPresenter();

  const onAddClick = () => {
    console.log('Add Group');
  };

  return (
    <>
      <div className="flex-1 mt-1 w-full lg:mt-0 overflow-y-auto">
        <div className=" flex flex-col mt-0.5 mb-2 gap-1 md:flex-row justify-between">
          <EntityCount title="Groups" count={0} />
          <div className="flex gap-1">
            <div className="flex w-full space-x-2">
              <div className="flex gap-2">
                <SearchBar />
                <ButtonAdd tooltip="Create Group" onClick={onAddClick} />
              </div>
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
