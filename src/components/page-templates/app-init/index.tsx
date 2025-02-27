import { useGetAutoLogin } from '@/repositories/AuthRepository/use-get-autologin';
import React from 'react';
import { Outlet } from 'react-router-dom';
import { LoadingPage } from '../../pages/Loading';

type AppInitProps = Readonly<object>;

export const AppInitPage: React.FC<AppInitProps> = () => {
  // const dark = useDarkStore((state) => state.dark);
  // const refreshStars = useDarkStore((state) => state.refreshStars);
  // const isLoading = useFlowsManagerStore((state) => state.isLoading);

  // const { isFetched: isLoaded } = useCustomPrimaryLoading();

  const { isFetched } = useGetAutoLogin();
  console.log('isFetched', isFetched);
  return (
    <>
      {!isFetched && <LoadingPage />}
      {isFetched && <Outlet />}
    </>
  );
};
