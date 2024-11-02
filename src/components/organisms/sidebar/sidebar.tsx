import { NavButtonItem } from '../../molecules/nav-button-item';
import { SettingsMenu } from '../../molecules/settings-menu';
import { SidebarHeader } from './sidebar-header';
import { SidebarItems } from './sidebar-items';
import { SidebarSearch } from './sidebar-search';

export const Sidebar = () => {
  return (
    <div
      id="sidebar"
      className="h-screen max-h-[100dvh] min-h-screen select-none md:relative w-[260px] bg-gray-50 text-gray-900 dark:bg-gray-950 dark:text-gray-200 text-sm transition fixed z-50 top-0 left-0"
      data-state="true"
    >
      <div className="py-2.5 my-auto flex flex-col justify-between h-screen max-h-[100dvh] w-[260px] z-50 ">
        <SidebarHeader />
        <NavButtonItem title="Workspace" link="workspace" />
        <div className="relative flex flex-col flex-1 overflow-y-auto">
          <SidebarSearch />
          <SidebarItems />
        </div>
        <SettingsMenu />
      </div>
    </div>
  );
};