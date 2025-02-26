import { useSettingsStore } from '@/store/settingsStore';

export const useModalPresenter = () => {
  const store = useSettingsStore();

  const presenter = {
    store,
    showModal: store.showModal,
    modalOpen: store.modalOpen,
    setModal: store.setModal,
    currentModal: store.currentModal,
    showControlPanel: store.showControlPanel,
    controlPanelOpen: store.controlPanelOpen,
  };

  return { presenter };
};
