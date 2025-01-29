import { create } from 'zustand';

export type SettingsState = {
  modalOpen: boolean;
};

export type SettingsActions = {
  showModal: (showModal: boolean) => void;
};

export const useSettingsStore = create<SettingsState & SettingsActions>((set, get) => ({
  modalOpen: false,
  showModal: (showModal: boolean) => {
    console.log('Show Modal', showModal);
    set((state) => ({ ...state, modalOpen: showModal }));
    console.log('After Show Modal', showModal);
  },
}));
