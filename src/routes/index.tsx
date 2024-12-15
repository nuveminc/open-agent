import { createBrowserRouter } from 'react-router-dom';
import { Welcome } from '@/components/pages/welcome';
import { MainChat } from '@/components/molecules/main-chat';
import Layout from '@/components/layout';
import { AdminPanel } from '@/components/pages/admin-panel';
import { AdminSettings } from '@/components/pages/admin-settings';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Welcome />,
      },
      {
        path: '/c/:chatId',
        element: <MainChat />,
      },
      {
        path: '/admin',
        children: [
          {
            index: true,
            element: <AdminPanel />,
          },
          {
            path: 'settings',
            element: <AdminSettings />,
          },
        ],
      },
    ],
  },
]);
