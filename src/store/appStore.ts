import { create } from 'zustand';
import { ChatVM } from '@/models/chat';
import { ChatListVM } from '@/models/chat/chat-list.class.vm';

import languages from '@/i18n/languages.json'; // Import language data
import { User } from '@/models/auth';
import { ChatSession } from '@/models/chat/chat-session.class.pm';

export type AppState = Readonly<{
  user: User;
  isAuthenticated: boolean;
  chatList: ChatListVM;
  chats: ChatVM[];
  currentChat: ChatSession;
  temporaryChat: boolean;
  modalOpen: boolean;
  languages: { code: string; title: string }[];
}>;

export type AppActions = {
  setChatList: (chatList: ChatListVM) => void;
  setCurrentChat: (chat: ChatSession) => void;
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
  currentChat: {} as ChatSession,
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
  setCurrentChat: (chat: ChatSession) => set({ currentChat: chat }),
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
