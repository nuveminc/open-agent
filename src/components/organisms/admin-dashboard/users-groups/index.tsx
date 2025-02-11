import React from 'react';
import { UserCount } from './users/user-count';
import { SearchBar } from './users/search-bar';
import { UserTable } from './users/user-table';
import { users } from '@/constants/users';
import { Groups } from './groups';
import { Tab } from '../left-nav';
import { DashboardContainer, ViewMapping } from '../dashboard-container';

export const Users: React.FC<object> = () => {
  const tabs: Tab[] = [
    { label: 'Overview', value: 'users', icon: 'users' },
    { label: 'Groups', value: 'groups', icon: 'groups' },
  ];

  const mainViews: ViewMapping = {
    users: (
      <div className="flex-1 w-full">
        {/* HEADER: USERS | SEARCH */}
        <div className="flex w-full justify-between mb-4">
          <UserCount userCount={users.length} />
          <SearchBar />
        </div>
        {/* TABLE */}
        <div className="w-full">
          <UserTable users={users} />
        </div>
      </div>
    ),
    groups: <Groups />,
  };

  return <DashboardContainer tabs={tabs} views={mainViews} />;
};
