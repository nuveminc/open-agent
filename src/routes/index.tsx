import { createBrowserRouter } from 'react-router-dom';
import { Welcome } from '@/components/pages/welcome';
import { MainChat } from '@/components/molecules/main-chat';
import Layout from '@/components/layout';
import { AdminDashboard } from '@/components/organisms/admin/admin-dashboard';
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
            element: <AdminDashboard />,
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
