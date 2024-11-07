import './layout.css';
import { Outlet } from 'react-router-dom';
import { Sidebar } from './organisms/sidebar/sidebar';
import { SystemHelp } from './molecules/system-help';
import { Navbar } from './organisms/navbar/nav-bar';
import { MessagesContainer } from './organisms/messages-container';
// import { ModelMenu } from './organisms/navbar/model-selector/model-menu';
// import { ModalState } from '@/store/app.store';

export default function Layout() {
  return (
    <>
      <div className="app relative">
        <div className="text-gray-700 dark:text-gray-100 bg-white dark:bg-gray-900 h-screen max-h-[100dvh] overflow-auto flex flex-row">
          <Sidebar />
          <SystemHelp />
          <audio id="audioElement" />
          {/* main content area */}
          <div className="h-screen max-h-[100dvh] md:max-w-[calc(100%-260px)] w-full max-w-full flex flex-col">
            <Navbar />
            <div className="flex flex-col flex-auto">
              <MessagesContainer>
                <Outlet />
              </MessagesContainer>
            </div>
          </div>
        </div>
        {/* Create a portal container */}
      </div>
      {/* <ModelMenu dropdownState={ModalState.OPEN} /> */}
    </>
  );
}
