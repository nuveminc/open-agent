import React from 'react';

export const SystemHelp: React.FC<object> = () => {
  return (
    <div className="hidden lg:flex fixed bottom-0 right-0 px-2 py-2 z-20">
      <button id="show-shortcuts-button" className="hidden"></button>
      <div>
        <div aria-label="Help" className="flex">
          <button className="text-gray-600 dark:text-gray-300 bg-gray-300/20 size-5 flex items-center justify-center text-[0.7rem] rounded-full">
            ?
          </button>
        </div>
      </div>
      <div slot="content"></div>
    </div>
  );
};
