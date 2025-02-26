import repository from '@/repositories/chat.repository';
import { useEffect, useState } from 'react';
import { useAppStore } from '@/store/appStore';
import { useParams } from 'react-router-dom';
import { ChatSession } from '@/models/chat/chat-session.class.pm';

export const useChatSessionPresenter = () => {
  const { chatId } = useParams<{ chatId: string }>();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const store = useAppStore();

  useEffect(() => {
    if (chatId) {
      getItem(chatId);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [chatId]);

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

  const presenter = {
    getItem,
    currentChat: store.currentChat,
    isLoading,
  };

  return { presenter };
};
