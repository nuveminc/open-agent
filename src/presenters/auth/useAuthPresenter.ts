import { useAuthStore } from '@/store/authStore';
import repository from '@/repositories/AuthRepository';

export const useAuthPresenter = () => {
  const store = useAuthStore();
  const user = useAuthStore((state) => state.user);
  const isAuthenticated = useAuthStore((state) => state.setIsAuthenticated);

  const login = async () => {
    try {
      const items = await repository.getUser();
      console.log('Users:', items);
      store.setIsAuthenticated(true);
      store.setUser(items);
    } catch (error) {
      console.error('Failed to initialize AuthPresenter:', error);
      throw error;
    }
  };

  return { login, user, isAuthenticated };
};
