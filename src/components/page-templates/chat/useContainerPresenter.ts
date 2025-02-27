import { useEffect, useState } from 'react';
import { useModalPresenter } from '@/presenters/app/useModalPresenter';
import { useSidebarStore } from '@/store/sidebarStore';

export const useChatContainerPresenter = () => {
  const { presenter } = useModalPresenter();
  const { isDisplayed, toggle } = useSidebarStore();
  const [sidebarToggleVisible, setSidebarToggleVisible] = useState(true);

  const handleClick = () => {
    const isOpen = presenter.controlPanelOpen;
    presenter.showControlPanel(!isOpen);
  };

  useEffect(() => {
    setSidebarToggleVisible(!isDisplayed);
  }, [isDisplayed]);

  useEffect(() => {
    presenter.showControlPanel(presenter.controlPanelOpen);
  }, []);

  const handleSidebarToggle = () => {
    setSidebarToggleVisible(!isDisplayed);
    toggle();
  };
  const navbar = {
    sidebarToggleVisible,
    controlPanelOpen: presenter.controlPanelOpen,
    handleClickControlPanel: handleClick,
    handleClickSidebarToggle: handleSidebarToggle,
  };

  return { navbar };
};
