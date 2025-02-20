import { ChatVM } from '@/models/chat';
import { ChatListVM } from '@/models/chat/chat-list.class.vm';
import { create } from 'zustand';

import languages from '@/i18n/languages.json'; // Import language data
import { User } from '@/models/auth';

export type AppState = Readonly<{
  user: User;
  isAuthenticated: boolean;
  chatList: ChatListVM;
  chats: ChatVM[];
  temporaryChat: boolean;
  modalOpen: boolean;
  languages: { code: string; title: string }[];
}>;

export type AppActions = {
  setChatList: (chatList: ChatListVM) => void;
  addChat: (chat: ChatVM) => void;
  setTemporaryChat: (isTemporary: boolean) => void;
  showModal: (showModal: boolean) => void;
  setIsAuthenticated: (isAuthenticated: boolean) => void;
  setUser: (user: User) => void;
};

export const useAppStore = create<AppState & AppActions>((set) => ({
  user: {} as User,
  chatList: {} as ChatListVM,
  chats: [],
  temporaryChat: false,
  modalOpen: false,
  languages: languages,
  isAuthenticated: false,
  setUser: (user: User) => set({ user }),
  setIsAuthenticated: (isAuthenticated: boolean) => set({ isAuthenticated }),
  setChatList: (chatList: ChatListVM) => {
    console.log('Set ChatList', chatList);
    set({ chatList: chatList });
  },
  addChat: (chat: ChatVM) =>
    set((state) => ({ chats: [...state.chats, chat] })),
  setTemporaryChat: (isTemporary: boolean) =>
    set({ temporaryChat: isTemporary }),
  showModal: (showModal: boolean) => {
    console.log('Show Modal', showModal);
    set((state) => ({ ...state, modalOpen: showModal }));
    console.log('After Show Modal', showModal);
  },
}));
