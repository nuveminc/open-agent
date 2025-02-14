import './layout.css';
import { Outlet } from 'react-router-dom';
import { Sidebar } from './organisms/sidebar';
import { useAppPresenter } from '@/presenters/app/useAppPresenter';
import { DialogContainer } from './organisms/common/dialog-container';

export default function Layout() {
  const { presenter } = useAppPresenter();
  return (
    <>
      <div className="app relative">
        <div className="text-gray-700 dark:text-gray-100 bg-white dark:bg-gray-900 h-screen max-h-[100dvh] overflow-auto flex flex-row">
          <Sidebar />
          <audio id="audioElement" />
          {/* main content area */}
          <div className="h-screen max-h-[100dvh] md:max-w-[calc(100%-260px)] w-full max-w-full flex flex-col">
            <div className="flex flex-col flex-auto">
              <Outlet />
              <DialogContainer
                type={presenter.currentModal}
                isOpen={presenter.modalOpen}
                showModal={presenter.showModal}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
