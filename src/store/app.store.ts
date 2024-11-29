import { ChatVM } from '@/models/chat';
import { ChatListVM } from '@/models/chat/chat-list.class.vm';
import { create } from 'zustand';

import languages from '@/i18n/languages.json'; // Import language data

export type ModelStateType = { OPEN: boolean; CLOSED: boolean };
export const ModalState: ModelStateType = {
  OPEN: true,
  CLOSED: false,
};

export type AppState = {
  chatList: ChatListVM;
  chats: ChatVM[];
  temporaryChat: boolean;
  dialogOpen: boolean;
  languages: { code: string; title: string }[];
};

export type AppActions = {
  setChatList: (chatList: ChatListVM) => void;
  addChat: (chat: ChatVM) => void;
  setTemporaryChat: (isTemporary: boolean) => void;
  showDialog: (showDialog: boolean) => void;
};

export const useAppStore = create<AppState & AppActions>((set) => ({
  chatList: {} as ChatListVM,
  chats: [],
  temporaryChat: false,
  dialogOpen: false,
  languages: languages,
  setChatList: (chatList: ChatListVM) => {
    console.log('Set ChatList', chatList);
    set({ chatList: chatList });
  },
  addChat: (chat: ChatVM) =>
    set((state) => ({ chats: [...state.chats, chat] })),
  setTemporaryChat: (isTemporary: boolean) =>
    set({ temporaryChat: isTemporary }),
  showDialog: (showDialog: boolean) => set({ dialogOpen: showDialog }),
}));
