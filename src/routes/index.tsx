import { createBrowserRouter } from 'react-router-dom';
import { Welcome } from '@/components/pages/welcome';
import { MainChat } from '@/components/molecules/main-chat';
import Layout from '@/components/layout';

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
    ],
  },
]);
