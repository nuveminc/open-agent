import { Link } from 'react-router-dom';

export interface AdminTabsProps {
  label: string;
  href: string;
}
export const AdminTabs: React.FC<{ tabs: AdminTabsProps[] }> = ({ tabs }) => {
  return (
    <div className="px-4 my-1">
      <div className="flex scrollbar-none overflow-x-auto w-fit text-center text-sm font-medium rounded-xl bg-transparent/10 p-1">
        {tabs.map((tab) => (
          <a
            className="min-w-fit rounded-lg p-1.5 px-3 mr-1 bg-gray-50 dark:bg-gray-850 transition"
            href={`/admin/${tab.href}`}
          >
            {tab.label}
          </a>
        ))}
        {/* // <Link
        //   className="min-w-fit rounded-lg p-1.5 px-3 bg-gray-50 dark:bg-gray-850 transition"
        //   to="/admin"
        // >
        //   Dashboard
        // </Link>
        // <Link
        //   className="min-w-fit rounded-lg p-1.5 px-3  transition"
        //   to="/admin/settings"
        // >
        //   Settings
        // </Link> */}
      </div>
    </div>
  );
};
