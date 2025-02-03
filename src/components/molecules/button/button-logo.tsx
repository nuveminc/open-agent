import React from 'react';

export const ButtonLogo: React.FC<object> = () => {
  return (
    <button>
      <div aria-label="" className="flex">
        <img
          src="src/assets/favicon.png"
          className="size-[2.7rem] rounded-full border-[1px] border-gray-200 dark:border-none"
          alt="logo"
          draggable="false"
        />
      </div>
    </button>
  );
};
