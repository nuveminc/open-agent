import React from 'react';

type UserCountProps = {
  userCount: number;
};

const UserCount: React.FC<UserCountProps> = ({ userCount }) => {
  return (
    <div className="flex md:self-center text-lg font-medium px-0.5">
      All Users
      <div className="flex self-center w-[1px] h-6 mx-2.5 bg-gray-200 dark:bg-gray-700"></div>
      <span className="text-lg font-medium text-gray-500 dark:text-gray-300">
        {userCount}
      </span>
    </div>
  );
};

export default UserCount;
