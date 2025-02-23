import React from 'react';
import { Outlet } from 'react-router-dom';
import {
  AdminTabs,
  TabsProps,
} from '@/components/organisms/admin-dashboard/admin-tabs';
import { Evaluations } from '@/components/organisms/admin-dashboard/evaluations';
import { UsersGroups } from '@/components/organisms/admin-dashboard/users-groups';
import { Functions } from '@/components/organisms/admin-dashboard/functions';
import { SystemSettings } from '@/components/organisms/admin-dashboard/settings';

export const AdminSettings: React.FC = () => {
  const adminTabs: TabsProps[] = [
    { label: 'Users', href: '/admin/users', view: <UsersGroups /> },
    { label: 'Evaluations', href: '/admin/evaluations', view: <Evaluations /> },
    { label: 'Functions', href: '/admin/functions', view: <Functions /> },
    { label: 'Settings', href: '/admin/settings', view: <SystemSettings /> },
  ];
  const sidebarClasses = ''; // 'px-4 pt-3 mt-0.5 mb-1';

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
      <AdminTabs tabs={adminTabs} />
      <Outlet />
    </div>
  );
};
