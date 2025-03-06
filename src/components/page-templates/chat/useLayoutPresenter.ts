import { useEffect, useState } from 'react';
import { useModalPresenter } from '@/presenters/app/useModalPresenter';
import { useSidebarStore } from '@/store/sidebarStore';
import { useAppStore } from '@/store/appStore';
import { ModelVM } from '@/models/model';

export const useChatLayoutPresenter = () => {
  const { presenter } = useModalPresenter();
  const { isDisplayed, toggle } = useSidebarStore();
  const [sidebarToggleVisible, setSidebarToggleVisible] = useState(true);
  const store = useAppStore();

  const handleClick = () => {
    const isOpen = presenter.controlPanelOpen;
    presenter.showControlPanel(!isOpen);
  };

  useEffect(() => {
    setSidebarToggleVisible(!isDisplayed);
  }, [isDisplayed]);

  useEffect(() => {
    presenter.showControlPanel(presenter.controlPanelOpen);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSidebarToggle = () => {
    setSidebarToggleVisible(!isDisplayed);
    toggle();
  };

  const getModels = () => {
    if (!store.models) return [];
    return store.models.map((model) => new ModelVM(model));
  };

  const navbar = {
    getModels,
    sidebarToggleVisible,
    controlPanelOpen: presenter.controlPanelOpen,
    handleClickControlPanel: handleClick,
    handleClickSidebarToggle: handleSidebarToggle,
  };

  return { navbar };
};
