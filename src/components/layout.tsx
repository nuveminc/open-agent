import './layout.css';
import { Sidebar } from './organisms/sidebar/sidebar';
import { SystemHelp } from './molecules/system-help';
import { Navbar } from './molecules/nav-bar';
import { MainChat } from './molecules/main-chat';
import { MessagesContainer } from './organisms/messages-container';

export default function Layout() {
  return (
    <>
      <div className="app relative">
        <div className="text-gray-700 dark:text-gray-100 bg-white dark:bg-gray-900 h-screen max-h-[100dvh] overflow-auto flex flex-row">
          {/* <div className="fixed md:hidden z-40 top-0 right-0 left-0 bottom-0 bg-black/60 w-full min-h-screen h-screen flex justify-center overflow-hidden overscroll-contain"></div> */}
          <Sidebar />
          <SystemHelp />
          <audio id="audioElement" />
          {/* main content area */}
          <div className="h-screen max-h-[100dvh] md:max-w-[calc(100%-260px)] w-full max-w-full flex flex-col">
            {/* top navigation */}
            <Navbar />
            {/* main chat content section */}
            <div className="flex flex-col flex-auto z-10">
              <MessagesContainer>
                <MainChat />
              </MessagesContainer>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
