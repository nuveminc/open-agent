import { useAuthStore } from '@/store/authStore';
import { Navigate } from 'react-router-dom';

type ProtectedLoginRouteProps = { children: React.ReactNode };

export const ProtectedLoginRoute = ({
  children,
}: ProtectedLoginRouteProps): React.ReactNode => {
  // const autoLogin = useAuthStore((state) => state.autoLogin);
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);

  if (isAuthenticated) {
    const urlParams = new URLSearchParams(window.location.search);
    const redirectPath = urlParams.get('redirect');

    if (redirectPath) {
      return <Navigate to={redirectPath} replace />;
    }
    return <Navigate to="/" replace />;
  }

  return children;
};
