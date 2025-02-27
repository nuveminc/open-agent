import repository from '@/repositories/chat.repository';
import { useEffect, useMemo, useState } from 'react';
import { useAppStore } from '@/store/appStore';
import { ChatPM } from '@/models/chat';
import { ChatListVM } from '@/models/chat/chat-list.class.vm';

export const useLayoutPresenter = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [initialized, setInitialized] = useState<boolean>(false);
  const store = useAppStore();

  useEffect(() => {
    initialize();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [initialized]);

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

  const isTemporaryChat = (): boolean => {
    return store.temporaryChat;
  };

  const getChatList = useMemo(() => {
    return store.chatList;
  }, [store.chatList]);

  const presenter = {
    getChatList: () => getChatList,
    isTemporaryChat,
    currentChat: store.currentChat,
    isLoading,
  };

  return { presenter };
};
