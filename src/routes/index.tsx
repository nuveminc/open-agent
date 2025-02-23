import { createBrowserRouter, Navigate } from 'react-router-dom';
import { NewChat } from '@/components/pages/NewChatPage';
import { ChatSession } from '@/components/pages/ChatSession';
import { Layout } from '@/components/page-templates/layout';
import { UsersGroups } from '@/components/organisms/admin-dashboard/users-groups';
import { Evaluations } from '@/components/organisms/admin-dashboard/evaluations';
import { Functions } from '@/components/organisms/admin-dashboard/functions';
import { FunctionEditor } from '@/components/organisms/admin-dashboard/functions/function-editor';
import { SystemSettings } from '@/components/organisms/admin-dashboard/settings';
import { AdminSettings } from '@/components/pages/AdminSettingsPage';
import { FlowView } from '@/components/pages/FlowPage';
import { Login } from '@/components/pages/LoginPage';
import { AppInitPage } from '@/components/pages/AppInitPage';
import { ProtectedRoute } from './guards/protected-route';
import { ProtectedLoginRoute } from './guards/protected-login-route';

const routes = [
  {
    path: '/',
    element: <AppInitPage />,
    children: [
      {
        path: '/',
        element: (
          <ProtectedRoute>
            <Layout />
          </ProtectedRoute>
        ),
        children: [
          {
            index: true,
            element: <NewChat />,
          },
          {
            path: '/c/:chatId',
            element: <ChatSession />,
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
    ],
  },
  {
    path: '/login',
    element: (
      <ProtectedLoginRoute>
        <Login />
      </ProtectedLoginRoute>
    ),
  },
];

export const router = createBrowserRouter(routes);
