import React from 'react';

const GroupCount: React.FC = () => {
  return (
    <div className="flex md:self-center text-lg font-medium px-0.5">
      Groups
      <div className="flex self-center w-[1px] h-6 mx-2.5 bg-gray-50 dark:bg-gray-850"></div>
      <span className="text-lg font-medium text-gray-500 dark:text-gray-300">
        0
      </span>
    </div>
  );
};

export default GroupCount;
