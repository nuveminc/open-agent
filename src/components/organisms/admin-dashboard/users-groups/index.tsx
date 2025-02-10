import React, { useCallback } from 'react';
import UserCount from './users/user-count';
import SearchBar from './users/search-bar';
import { UserTable } from './users/user-table';
import { users } from '@/constants/users';
import Groups from './groups';
import LeftNav from '../left-nav';

export interface User {
  id: string;
  name: string;
  email: string;
  role: string;
  profile_image_url: string;
  last_active_at: number;
  updated_at: number;
  created_at: number;
  api_key: string;
  settings: {
    ui: {
      models: string[];
      chatBubble: boolean;
      widescreenMode: boolean;
      splitLargeChunks: boolean;
      speechAutoSend: boolean;
      requestFormat: string;
      chatDirection: string;
      memory: boolean;
      responseAutoPlayback: boolean;
    };
  };
  info: string | null;
  oauth_sub: string | null;
}
export const AdminDashboard: React.FC<object> = () => {
  const [showGroups, setShowGroups] = React.useState(false);

  const handleGroups = useCallback((display: boolean) => {
    setShowGroups(display);
  }, []);
  return (
    <>
      <hr className="my-2 dark:border-gray-850" />
      {/* CONTAINER */}
      <div className="flex-1 w-full px-6">
        <div className="flex flex-column">
          {/* GROUPS COLUMN */}
          <LeftNav onChange={handleGroups} />
          {/* USERS TABLE COLUMN */}
          {showGroups && <Groups />}
          {!showGroups && (
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
          )}
        </div>
      </div>
    </>
  );
};
