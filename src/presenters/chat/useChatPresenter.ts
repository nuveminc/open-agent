import repository from '@/repositories/chat.repository';
import { useEffect, useMemo, useState } from 'react';
import { useAppStore } from '@/store/appStore';
import { ChatPM } from '@/models/chat';
import { ChatListVM } from '@/models/chat/chat-list.class.vm';
import { useParams } from 'react-router-dom';
import { ChatSession } from '@/models/chat/chat-session.class.pm';

export const useChatPresenter = () => {
  const { chatId } = useParams<{ chatId: string }>();

  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [initialized, setInitialized] = useState<boolean>(false);
  const store = useAppStore();

  useEffect(() => {
    initialize();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [initialized]);

  useEffect(() => {
    if (chatId) {
      getItem(chatId);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [chatId]);

  const _createChatList = (items: ChatPM[]): ChatListVM => {
    return new ChatListVM(items);
  };

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

  const getItem = async (id: string) => {
    setIsLoading(true);
    try {
      const item: ChatSession = await repository.getItem(id);
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
