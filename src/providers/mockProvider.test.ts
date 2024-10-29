import { GatewayProvider } from '@/api/gateway/gatewayProvider';
import chats from '@/api/mock/data/chats.json'; // Import mock data
import { IHttpProvider } from '@/interfaces/IHttpProvider';
import { GatewayType } from '@/types';
// import { IHttpProvider } from '@/interfaces/IHttpProvider';

describe('MockProvider', () => {
  let provider: IHttpProvider;

  beforeEach(() => {
    provider = GatewayProvider.getProvider(GatewayType.MOCK);
  });

  describe('get', () => {
    it('should return all chat entities', async () => {
      const response = await provider.getAll('chats');
      expect(response.data).toEqual(chats);
    });

    it('should return a chat by id', async () => {
      const chatId = chats[0].id;
      const response = await provider.getById('chats', chatId);
      expect(response.data).toEqual(chats[0]);
    });

    it('should return an error if chat not found', async () => {
      await expect(provider.getById('chats', 'nonexistent-id')).rejects.toThrow(
        'Not Found'
      );
    });
  });

  describe('post', () => {
    it('should add a new chat', async () => {
      const newChat = { id: 'new-id', message: 'New chat message' };
      const response = await provider.post('chats', newChat);
      expect(response.data).toEqual(newChat);

      const getResponse = await provider.getById('chats', 'new-id');
      expect(getResponse.data).toEqual(newChat);
    });

    it('should return an error if post fails', async () => {
      await expect(provider.post('invalid-path', {})).rejects.toThrow(
        'Invalid entity type'
      );
    });
  });

  describe('put', () => {
    it('should update a chat entity', async () => {
      const updateChat = chats[0];
      updateChat.title = 'Updated Title';
      const response = await provider.put('chats', updateChat.id, updateChat);
      expect(response.data).toEqual(updateChat);

      const getResponse = await provider.getById('chats', updateChat.id);
      expect(getResponse.data).toEqual(updateChat);
    });

    it('should return an error if put fails', async () => {
      await expect(provider.post('invalid-path', {})).rejects.toThrow(
        'Invalid entity type'
      );
    });
  });

  describe('delete', () => {
    it('should delete a chat by id', async () => {
      const chatId = chats[0].id;
      const response = await provider.delete('chats', chatId);
      expect(response.data).toEqual(chats[0]);

      await expect(provider.getById('chats', chatId)).rejects.toThrow(
        'Not Found'
      );
    });

    it('should return an error if delete fails', async () => {
      await expect(provider.delete('chats', 'nonexistent-id')).rejects.toThrow(
        'Delete failed'
      );
    });

    it('should return an error if entity type is invalid', async () => {
      await expect(provider.delete('invalid-path', 'some-id')).rejects.toThrow(
        'Invalid entity type'
      );
    });
  });
});
