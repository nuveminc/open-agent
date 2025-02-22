// usePresenter.ts (Custom Hook)
import repository from '@/repositories/chat.repository';
import { useEffect, useMemo, useState } from 'react';
import { useAppStore } from '@/store/appStore';
import { ChatPM } from '@/models/chat';
import { ChatListVM } from '@/models/chat/chat-list.class.vm';

export const useChatPresenter = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const store = useAppStore();

  // useEffect(() => {
  //   const initializePresenter = async () => {
  //     try {
  //       setIsLoading(true);
  //       await presenter.initialize();
  //     } catch (error) {
  //       console.error('Failed to initialize presenter:', error);
  //     } finally {
  //       setIsLoading(false);
  //     }
  //   };

  //   if (!presenter.isInitialized()) {
  //     initializePresenter();
  //   } else {
  //     setIsLoading(false);
  //   }

  //   return () => presenter.cleanup();
  // }, [presenter]);

  useEffect(() => {
    const initialize = async (): Promise<void> => {
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
  }, [isLoading, store]);

  const _createChatList = (items: ChatPM[]): ChatListVM => {
    return new ChatListVM(items);
  };

  const getItem = async (id: string) => {
    setIsLoading(true);
    try {
      await repository.getItem(id);
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
    isLoading,
  };

  return { presenter };
};
