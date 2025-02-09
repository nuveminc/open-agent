import React from 'react';
import { AdminDashboard } from '../organisms/admin/admin-dashboard';
import { AdminTabs } from '../organisms/admin/admin-tabs';

export const AdminSettings: React.FC = () => {
  const adminTabs = [
    { label: 'Users', href: '' },
    { label: 'Evaluations', href: '' },
    { label: 'Functions', href: '' },
    { label: 'Settings', href: '/admin/settings' },
  ];
  return (
    <div className="flex flex-col w-full min-h-screen max-h-screen ]">
      <div className="px-4 pt-3 mt-0.5 mb-1">
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
      <AdminDashboard />
    </div>
  );
};
