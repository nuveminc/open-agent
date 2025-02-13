import React from 'react';
import { AdminTabs } from '../organisms/admin-dashboard/admin-tabs';
import { Evaluations } from '../organisms/admin-dashboard/evaluations/';
import { UsersGroups } from '../organisms/admin-dashboard/users-groups';

export const AdminSettings: React.FC = () => {
  const [selectedTab, setSelectedTab] = React.useState(0);

  const adminTabs = [
    { label: 'Users', href: '', view: <UsersGroups /> },
    { label: 'Evaluations', href: '', view: <Evaluations /> },
    { label: 'Functions', href: '' },
    { label: 'Settings', href: '/admin/settings' },
  ];
  const sidebarClasses = ''; // 'px-4 pt-3 mt-0.5 mb-1';

  const handleTabChange = (tabIndex: number) => {
    setSelectedTab(tabIndex);
    console.log('Selected tab:', adminTabs[tabIndex]);
  };

  return (
    <div className="flex flex-col w-full min-h-screen max-h-screen ]">
      <div className={sidebarClasses}>
        <div className="flex items-center gap-1">
          <div className="md:hidden mr-1 self-start flex flex-none items-center">
            <button
              id="sidebar-toggle-button"
              className="cursor-pointer p-1 flex rounded-xl hover:bg-gray-100 dark:hover:bg-gray-850 transition"
              aria-label="Toggle Sidebar"
            >
              <div className="m-auto self-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  className="size-5"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12"
                  ></path>
                </svg>
              </div>
            </button>
          </div>
        </div>
      </div>
      <AdminTabs tabs={adminTabs} onTabChange={handleTabChange} />
      {adminTabs[selectedTab].view}
    </div>
  );
};
