import React from 'react';
import { LoadingPage } from '@/components/pages/Loading';
import { Outlet, useNavigate, useLocation } from 'react-router-dom';

export const RootRoute: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isChecking, setIsChecking] = React.useState(true);

  React.useEffect(() => {
    const checkPython = async () => {
      try {
        // const hasPython = await window.python.check();
        const hasPython = false;
        if (!hasPython && location.pathname !== '/installer') {
          navigate('/installer');
        }
      } catch (error) {
        console.error('Failed to check Python:', error);
      } finally {
        setIsChecking(false);
      }
    };

    checkPython();
  }, [navigate, location.pathname]);

  if (isChecking) {
    return <LoadingPage />;
  }

  return <Outlet />;
};
