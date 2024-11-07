import { ChatVM } from '@/models/chat';
import { ChatListVM } from '@/models/chat/chat-list.class.vm';
import { create } from 'zustand';

export enum ModalState {
  OPEN = '',
  CLOSED = 'hidden',
}

export type AppState = {
  chatList: ChatListVM;
  chats: ChatVM[];
  modelSelector: ModalState;
};

export type AppActions = {
  setChatList: (chatList: ChatListVM) => void;
  addChat: (chat: ChatVM) => void;
};

export const useAppStore = create<AppState & AppActions>((set) => ({
  chatList: {} as ChatListVM,
  chats: [],
  modelSelector: ModalState.CLOSED,
  setChatList: (chatList: ChatListVM) => {
    console.log('Set ChatList', chatList);
    set({ chatList: chatList });
  },
  addChat: (chat: ChatVM) =>
    set((state) => ({ chats: [...state.chats, chat] })),
}));
