import React from 'react';
import { NavButtonItem } from '../navbar/nav-button-item';
import { ProfileMenu } from './profile';
import { SidebarHeader } from './header/sidebar-header';
import { SidebarSearch } from './header/sidebar-search';
import { ChatSessionHistory } from './chat/chat-session-history';
import { ChatListVM } from '@/models/chat/chat-list.class.vm';
import { cn } from '@/lib/utils';

type SidebarProps = Readonly<{
  chatList: ChatListVM;
  isLoading: boolean;
  onClick: (isDisplayed: boolean) => void;
}>;

export const Sidebar: React.FC<SidebarProps> = ({
  chatList,
  isLoading,
  onClick,
}) => {
  return (
    <div
      id="sidebar"
      className={cn(
        'h-screen max-h-[100dvh] min-h-screen select-none md:relative w-[260px]',
        'bg-gray-50 text-gray-900 dark:bg-gray-950 dark:text-gray-200 text-sm transition fixed z-50 top-0 left-0'
      )}
    >
      <div className="py-2.5 my-auto flex flex-col justify-between h-screen max-h-[100dvh] w-[260px] z-50 ">
        <SidebarHeader onClick={onClick} />
        <NavButtonItem title="Workspace" link="/" />
        {/* <NavButtonItem title="Flow" link="/flow" /> */}
        <div className="relative flex flex-col flex-1 overflow-y-auto">
          <SidebarSearch />
          <div className="pl-2 my-2 flex-1 flex flex-col space-y-1 overflow-auto hover:overflow-y-scroll">
            <ChatSessionHistory chatList={chatList} isLoading={isLoading} />
          </div>
        </div>
        <ProfileMenu />
      </div>
    </div>
  );
};
