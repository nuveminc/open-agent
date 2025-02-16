import { createBrowserRouter, Navigate } from 'react-router-dom';
import { Welcome } from '@/components/pages/welcome';
import { MainChat } from '@/components/molecules/main-chat';
import Layout from '@/components/layout';
import { AdminSettings } from '@/components/pages/admin-settings';
import { UsersGroups } from '@/components/organisms/admin-dashboard/users-groups';
import { Evaluations } from '@/components/organisms/admin-dashboard/evaluations';
import { Functions } from '@/components/organisms/admin-dashboard/functions';
import { FunctionEditor } from '@/components/organisms/admin-dashboard/functions/function-editor';
import { SystemSettings } from '@/components/organisms/admin-dashboard/settings';
import { FlowView } from '@/components/pages/flow';
// import { FunctionEditor } from '@/components/organisms/admin-dashboard/functions/function-editor';

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
        path: 'flow',
        element: <FlowView />,
      },
      {
        path: '/admin',
        element: <AdminSettings />,
        children: [
          {
            index: true,
            element: <Navigate to="/admin/users" replace />,
          },
          {
            path: 'users',
            element: <UsersGroups />,
          },
          {
            path: 'evaluations',
            element: <Evaluations />,
          },
          {
            path: 'functions',
            element: <Functions />,
          },
          {
            path: 'functions/create',
            element: <FunctionEditor />,
          },
          {
            path: 'settings',
            element: <SystemSettings />,
          },
        ],
      },
    ],
  },
]);
