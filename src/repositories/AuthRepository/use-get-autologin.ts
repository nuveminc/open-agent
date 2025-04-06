// import { AuthContext } from "@/contexts/authContext";
// import { useCustomNavigate } from "@/customization/hooks/use-custom-navigate";
// import useAuthStore from "@/stores/authStore";
// import { AxiosError } from "axios";
// import { useContext } from "react";
// import { useQueryFunctionType, Users } from "../../../../types/api";
// import { api } from "../../api";
// import { getURL } from "../../helpers/constants";
// import { UseRequestProcessor } from "../../services/request-processor";
// import { useLogout } from "./use-post-logout";

import authRepository from '.';
import { useAuthStore } from '@/store/authStore';
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '@/context/auth.context';
import { User } from '@/models/auth';


export const useGetAutoLogin = () => {

  const { login, setUser, getUser } = useContext(AuthContext);
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  const isLoginPage = location.pathname.includes('login');
  const [result, setResult] = useState({ isFetched: false, redirect: '' });
  console.log('AUTO LOGIN');

  useEffect(() => {
    async function fetchAutoLogin() {
      const result = await getAutoLoginFn();
      setResult(result);
    }
    fetchAutoLogin();
  }, []);

  const getAutoLoginFn = async (): Promise<{ isFetched: boolean; redirect: string }> => {
    let isFetched = false;
    let redirect = '';
    try {
      const user: User = await authRepository.getUser();
      if (user && user.token) {
        console.log('user', user);
        login(user.token);
        setUser(user);
        isFetched = true;
      }
    } catch (e) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const error = e as any;
      if (error.response) {
        if (error.response.status === 401) {
          if (!isAuthenticated && !isLoginPage) {
            // await mutationLogout();
            const currentPath = window.location.pathname;
            const isHomePath = currentPath === '/' || currentPath === '/flows';
            redirect = (!isHomePath && !isLoginPage) ? '?redirect=' + currentPath : '';
            return { isFetched: true, redirect };
          } else {
            getUser();
          }
        }
      }
    }
    return { isFetched, redirect };
  };

  return result;
};
