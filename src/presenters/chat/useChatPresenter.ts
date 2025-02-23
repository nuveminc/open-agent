// usePresenter.ts (Custom Hook)
import repository from '@/repositories/chat.repository';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { useAppStore } from '@/store/appStore';
import { ChatPM, ChatVM } from '@/models/chat';
import { ChatListVM } from '@/models/chat/chat-list.class.vm';
import { ChatSession } from '@/models/chat/chat-session.class.pm';

export const useChatPresenter = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [initialized, setInitialized] = useState<boolean>(false);
  const store = useAppStore();

  useEffect(() => {
    const initialize = async (): Promise<void> => {
      if (initialized) return;
      setInitialized(true);
      console.log('Initializing ChatPresenter...');
      try {
        const items = await repository.getItems();
        const chatList = _createChatList(items);
        store.setChatList(chatList);
        setIsLoading(false);
      } catch (error) {
        console.error('Failed to initialize ChatPresenter:', error);
        throw error;
      }
    };
    initialize();
  }, [initialized]);

  const _createChatList = (items: ChatPM[]): ChatListVM => {
    return new ChatListVM(items);
  };

  const getItem = async (id: string) => {
    setIsLoading(true);
    try {
      const item: ChatSession = await repository.getItem(id);
      console.log('Chat Item:', item.chat.messages);
      store.setCurrentChat(item);
    } catch (error) {
      console.error('Failed to get chat by ID:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const isTemporaryChat = (): boolean => {
    return store.temporaryChat;
  };

  const getChatList = useMemo(() => {
    return store.chatList;
  }, [store.chatList]);

  const presenter = {
    getChatList: () => getChatList,
    getItem,
    isTemporaryChat,
    currentChat: store.currentChat,
    isLoading,
  };

  return { presenter };
};
