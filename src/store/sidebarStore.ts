import { create } from 'zustand';

export type SidebarState = {
  isDisplayed: boolean;
};
export type SidebarActions = {
  toggle: () => void;
};

export type SidebarStore = SidebarState & SidebarActions;
export const useSidebarStore = create<SidebarStore>((set) => ({
  isDisplayed: false,
  toggle: () => set((state) => ({ isDisplayed: !state.isDisplayed })),
}));
