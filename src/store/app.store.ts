import { ChatVM } from '@/models/chat';
import { create } from 'zustand';

export type AppState = {
  chats: ChatVM[];
};

export type AppActions = {
  setChats: (chatEntities: ChatVM[]) => void;
  addChat: (chat: ChatVM) => void;
};

export const useAppStore = create<AppState & AppActions>((set) => ({
  chats: [],
  setChats: (chatEntities: ChatVM[]) => set({ chats: chatEntities }),
  addChat: (chat: ChatVM) =>
    set((state) => ({ chats: [...state.chats, chat] })),
}));
