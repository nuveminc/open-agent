import React, { useEffect } from 'react';
import { LoadingPage } from '@/components/pages/Loading';
import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import { useGetAutoLogin } from '@/repositories/AuthRepository/use-get-autologin';

export const RootRoute: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isChecking, setIsChecking] = React.useState(true);
  const { isFetched, redirect } = useGetAutoLogin();
  
  async function checkLogin() {
    if(isFetched && redirect)  {
      navigate(redirect);
      return;
    }    
  }
  useEffect(() => {
    checkLogin();
    const checkPython = async () => {
      try {
        const hasPython = await window.python.check();
        if (!hasPython && location.pathname !== '/installer') {
          navigate('/installer');
        }
        await window.python.startFastApi();
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
