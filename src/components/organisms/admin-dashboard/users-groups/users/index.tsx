import React from 'react';
import { EntityCount } from '../../common/entity-count';
import { UserTable } from './user-table';
import { users } from '@/constants/users';
import { SearchBar } from '@/components/molecules/common/search-bar';
import { ButtonAdd } from '@/components/molecules/button/add-button';

export const AllUsers: React.FC = () => {
  const onAddClick = () => {
    console.log('Add User');
  };

  return (
    <div className="flex-1 w-full">
      {/* HEADER: USERS | SEARCH */}
      <div className="flex w-full justify-between mb-4">
        <EntityCount title="All Users" count={users.length} />
        <div className="flex gap-2">
          <SearchBar />
          <ButtonAdd tooltip={'Create User'} onClick={onAddClick} />
        </div>
      </div>
      {/* TABLE */}
      <div className="w-full">
        <UserTable users={users} />
      </div>
    </div>
  );
};
