import React from 'react';
import { EntityCount } from '../common/entity-count';
import { SearchBar } from '../../../molecules/common/search-bar';
import { AddButton } from '../../../molecules/common/add-button';
import { router } from '@/routes';
import { Icon } from '@/components/atoms';

export const Functions: React.FC = () => {
  const onAddClick = () => {
    router.navigate('/admin/functions/create');
  };
  return (
    <div className="pb-1 px-[16px] flex-1 max-h-full overflow-y-auto">
      <div className="flex w-full justify-between mb-4">
        <EntityCount title="Functions" count={0} />
        <div className="flex gap-2">
          <SearchBar />
          <AddButton text={'Create Function'} onClick={onAddClick} />
        </div>
      </div>
      <div className="mb-5"></div>
      <div className="flex justify-end w-full mb-2">
        <div className="flex space-x-2">
          <input
            id="documents-import-input"
            type="file"
            accept=".json"
            hidden={true}
          />
          <button className="flex text-xs items-center space-x-1 px-3 py-1.5 rounded-xl bg-gray-50 hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-gray-200 transition">
            <div className="self-center mr-2 font-medium line-clamp-1">
              Import Functions
            </div>
            <div className="self-center">
              <Icon name="fileUpload" fill="currentColor" strokeWidth="0" />
            </div>
          </button>
          <button className="flex text-xs items-center space-x-1 px-3 py-1.5 rounded-xl bg-gray-50 hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-gray-200 transition">
            <div className="self-center mr-2 font-medium line-clamp-1">
              Export Functions
            </div>
            <div className="self-center">
              <Icon name="fileDownload" fill="currentColor" strokeWidth="0" />
            </div>
          </button>
        </div>
      </div>
      <div className="my-16 w-[25rem]">
        <div className="text-xl font-medium mb-1 line-clamp-1">
          Made by OpenWebUI Community
        </div>
        <a
          className="flex cursor-pointer items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-850 w-full mb-2 px-3.5 py-1.5 rounded-xl transition"
          href="https://openwebui.com/#open-webui-community"
          target="_blank"
        >
          <div className="self-center">
            <div className="font-semibold line-clamp-1">
              Discover a function
            </div>
            <div className="text-sm line-clamp-1">
              Discover, download, and explore custom functions
            </div>
          </div>
          <div>
            <div>
              <Icon name="chevronRight" />
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};
