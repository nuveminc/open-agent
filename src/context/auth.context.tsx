import { User } from '@/models/auth';
import authRepository from '@/repositories/AuthRepository';
import { useAuthStore } from '@/store/authStore';
import React, { createContext, useState } from 'react';
// import useAuthStore from "@/stores/authStore";
// import { Cookies } from "react-cookie";
// import { useStoreStore } from "../stores/storeStore";
// import { Users } from "../types/api";
// import { AuthContextType } from "../types/contexts/auth";

export const AUTO_LOGIN_OPTION = 'auto';
export const REFRESH_TOKEN = 'refresh_token';

type AuthContextType = {
  accessToken: string | null;
  user: User | null;
  authenticationErrorCount: number;
  apiKey: string | null;
  login: (
    accessToken: string,
    autoLogin?: string,
    refreshToken?: string
  ) => void;
  setUser: (user: User) => void;
  setApiKey: (apiKey: string | null) => void;
  storeApiKey: (apiKey: string) => void;
  getUser: () => void;
};

const initialValue: AuthContextType = {
  accessToken: null,
  user: null,
  authenticationErrorCount: 0,
  apiKey: null,
  login: () => {},
  setUser: () => {},
  setApiKey: () => {},
  storeApiKey: () => {},
  getUser: () => {},
};

export const AuthContext = createContext<AuthContextType>(initialValue);

type ProviderProps = {
  children: React.ReactNode;
};

export const AuthProvider = ({ children }: ProviderProps) => {
  const [accessToken, setAccessToken] = useState<string | null>(null);
  const [apiKey, setApiKey] = useState<string | null>(null);
  // const cookies = new Cookies();
  const setIsAuthenticated = useAuthStore((state) => state.setIsAuthenticated);
  const setUser = useAuthStore((state) => state.setUser);
  const user = useAuthStore((state) => state.user);

  const getUser = async () => {
    const result = await authRepository.getUser();
    setUser(result);
    return result;
  };

  const login = async (
    accessToken: string
    // autoLogin: string,
    // refreshToken?: string,
  ): Promise<void> => {
    // cookies.set(AUTO_LOGIN_OPTION, autoLogin, { path: "/" });
    // if (refreshToken) {
    //   cookies.set(REFRESH_TOKEN, refreshToken, { path: "/" });
    // }
    setAccessToken(accessToken);
    setIsAuthenticated(true);
    getUser();
    // getGlobalVariables();
  };

  const storeApiKey = (apikey: string): void => {
    setApiKey(apikey);
  };

  return (
    <AuthContext.Provider
      value={{
        accessToken,
        user,
        authenticationErrorCount: 0,
        apiKey,
        login,
        getUser,
        setUser,
        setApiKey,
        storeApiKey,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
