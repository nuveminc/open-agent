// import './App.css';
// import Layout from './components/layout';
// import { Button } from './components/ui/button';

import { ChatInput } from './components/molecules/chat-input';
import { MainChat } from './components/molecules/main-chat';
import { ScrollDown } from './components/molecules/scroll-down';
import { Sidebar } from './components/molecules/sidebar';
import { SystemHelp } from './components/molecules/system-help';
import { Navbar } from './components/molecules/nav-bar';

export default function App() {
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
              <MainChat />
              <div className="w-full font-primary">
                <ScrollDown />
                <ChatInput />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
