// usePresenter.ts (Custom Hook)
import repository from '@/repositories/chat.repository';
import { useEffect, useMemo } from 'react';
import { ChatPresenter } from './chat.presenter';
import { useAppStore } from '@/store/app.store';

export const usePresenter = () => {
  const presenter = useMemo(
    () => new ChatPresenter(repository, useAppStore),
    []
  );

  useEffect(() => {
    presenter.initialize();
  }, [presenter]);

  return presenter;
};
