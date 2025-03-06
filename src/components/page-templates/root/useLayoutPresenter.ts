import chatRepository from '@/repositories/chat.repository';
import modelRepository from '@/repositories/model.repository';
import { useEffect, useMemo, useState } from 'react';
import { useAppStore } from '@/store/appStore';
import { ChatPM } from '@/models/chat';
import { ChatListVM } from '@/models/chat/chat-list.class.vm';
import { ModelCollection } from '@/models/model';

export const useLayoutPresenter = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [initialized, setInitialized] = useState<boolean>(false);
  const store = useAppStore();

  useEffect(() => {
    getChats();
    getModels();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [initialized]);

  const _createChatList = (items: ChatPM[]): ChatListVM => {
    return new ChatListVM(items);
  };

  const getChats = async (): Promise<void> => {
    if (initialized) return;
    setInitialized(true);
    console.log('Initializing ChatPresenter...');
    try {
      const items = await chatRepository.getItems();
      const chatList = _createChatList(items);
      store.setChatList(chatList);
      setIsLoading(false);
    } catch (error) {
      console.error('Failed to initialize ChatPresenter:', error);
      throw error;
    }
  };

  const getModels = async () => {
    if (initialized) return;
    setIsLoading(true);
    setInitialized(true);
    console.log('Initializing Models...');
    try {
      const items: ModelCollection | null = await modelRepository.getItems();
      if (items) {
        store.setModels(items);
      } else {
        console.error('Failed to fetch models');
        return;
      }
      setIsLoading(false);
    } catch (error) {
      console.error('Failed to initialize Models:', error);
      throw error;
    }
  };

  const isTemporaryChat = (): boolean => {
    return store.temporaryChat;
  };

  const getChatList = useMemo(() => {
    return store.chatList;
  }, [store.chatList]);

  const chat = {
    getChatList: () => getChatList,
    models: () => store.models,
    isTemporaryChat,
    currentChat: store.currentChat,
    isLoading,
  };

  const presenter = {
    isTemporaryChat,
  };

  return { chat, presenter };
};
