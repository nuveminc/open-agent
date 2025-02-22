import { create } from 'zustand';
import { User } from '@/models/auth';

export type AuthState = Readonly<{
  user: User;
  isAuthenticated: boolean;
}>;

export type AuthActions = {
  setUser: (user: User) => void;
  setIsAuthenticated: (isAuthenticated: boolean) => void;
};

export const useAuthStore = create<AuthState & AuthActions>((set) => ({
  user: {} as User,
  isAuthenticated: false,
  setUser: (user: User) => set({ user }),
  setIsAuthenticated: (isAuthenticated: boolean) => set({ isAuthenticated }),
}));
