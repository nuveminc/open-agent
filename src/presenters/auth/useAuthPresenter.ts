// usePresenter.ts (Custom Hook)
import repository from '@/repositories/auth.repository';
import { useEffect, useMemo, useState } from 'react';
import { AuthPresenter } from './auth.presenter';
import { useAppStore } from '@/store/appStore';

export const useAuthPresenter = () => {
  const [isLoading, setIsLoading] = useState(true);
  const presenter = useMemo(
    () => new AuthPresenter(repository, useAppStore),
    []
  );

  useEffect(() => {
    const initializePresenter = async () => {
      try {
        setIsLoading(true);
        await presenter.initialize();
      } catch (error) {
        console.error('Failed to initialize presenter:', error);
      } finally {
        setIsLoading(false);
      }
    };

    if (!presenter.isInitialized()) {
      initializePresenter();
    } else {
      setIsLoading(false);
    }

    return () => presenter.cleanup();
  }, [presenter]);

  return { presenter, isLoading };
};
