import { useSettingsStore } from '@/store/settingsStore';

export const useControlPanelPresenter = () => {
  const store = useSettingsStore();

  const presenter = {
    store,
    showControlPanel: store.showControlPanel,
    controlPanelOpen: store.controlPanelOpen,
  };

  return { presenter };
};
