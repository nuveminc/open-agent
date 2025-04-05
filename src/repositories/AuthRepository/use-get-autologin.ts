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
import { useNavigate } from 'react-router-dom';

// export interface AutoLoginResponse {
//   frontend_timeout: number;
//   auto_saving: boolean;
//   auto_saving_interval: number;
//   health_check_max_retries: number;
// }

export const useGetAutoLogin = () => {
  const navigate = useNavigate();

  const { login, setUser, getUser } = useContext(AuthContext);
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  const isLoginPage = location.pathname.includes('login');
  const [isFetched, setIsFetched] = useState(false);
  console.log('AUTO LOGIN');

  useEffect(() => {
    getAutoLoginFn();
  }, []);

  const getAutoLoginFn = async (): Promise<void> => {
    try {
      // const response = await api.get<Users>(`${getURL("AUTOLOGIN")}`);
      const user: User = await authRepository.getUser();
      // if (user && user["access_token"]) {
      if (user && user.token) {
        // user["refresh_token"] = "auto";
        console.log('user', user);
        login(user.token);
        setUser(user);
      }
    } catch (e) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const error: any = e;
      console.log('error', error);
      if (error.name !== 'CanceledError') {
        if (!isLoginPage) {
          if (!isAuthenticated) {
            // await mutationLogout();
            const currentPath = window.location.pathname;
            const isHomePath = currentPath === '/' || currentPath === '/flows';
            const redirect = (!isHomePath && !isLoginPage) ? '?redirect=' + currentPath : '';
            navigate('/login' + redirect);
          } else {
            getUser();
          }
        }
      }
    }
  };
  return { isFetched };
};
//   const queryResult = query(["useGetAutoLogin"], getAutoLoginFn, {
//     refetchOnWindowFocus: false,
//     ...options,
//   });

//   return queryResult;
// };
