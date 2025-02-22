import { useAuthStore } from '@/store/authStore';
import React from 'react';
import { Navigate } from 'react-router-dom';

type ProtectedRouteProps = { children: React.ReactNode };

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
  children,
}): React.ReactNode => {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  console.log('isAuthenticated', isAuthenticated);
  if (!isAuthenticated) {
    // const currentPath = window.location.pathname;
    // const isHomePath = currentPath === "/" || currentPath === "/flows";
    // const isLoginPage = location.pathname.includes("login");
    return <Navigate to={'/login'} />;
  } else {
    return children;
  }
};
