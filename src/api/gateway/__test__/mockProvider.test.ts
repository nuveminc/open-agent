import { IHttpProvider } from '@/api/types/http-provider.interface';
import { MockProvider, MockResponse } from './../../providers/mockProvider';
const mockChats = [
  {
    id: '28aa9a11-5245-45df-8afa-4f2204e24879',
    title: 'SOC2 Compliance Checklist 📁',
    updated_at: 1729789654,
    created_at: 1729789317,
  },
  {
    id: 'cf91137e-60f7-4157-b34a-0ead397a6e80',
    title: 'Trustees Key Responsibilities 📚',
    updated_at: 1729731969,
    created_at: 1729731861,
  },
];

describe('MockProvider', () => {
  let provider: IHttpProvider;

  beforeEach(() => {
    provider = new MockProvider();
    // Mock internal data
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (provider as any).jsonData = {
      chats: [...mockChats],
    };
  });

  describe('get', () => {
    it('should return all entities', async () => {
      const response = await provider.get('chats');
      expect(response.data).toEqual(mockChats);
    });

    it('should return entity by id', async () => {
      const id = '28aa9a11-5245-45df-8afa-4f2204e24879';
      const response = await provider.get(`chats/${id}`);
      expect(response.data).toHaveProperty('id', id);
    });

    it('should handle leading slash in path', async () => {
      const response = await provider.get('/chats');
      expect(response.data).toEqual(mockChats);
    });

    it('should reject for invalid entity type', async () => {
      await expect(provider.get('invalid')).rejects.toThrow(
        'Invalid entity type'
      );
    });

    it('should reject for non-existent id', async () => {
      await expect(provider.get('chats/999')).rejects.toThrow('Not Found');
    });
  });

  describe('post', () => {
    it('should add new entity', async () => {
      const newChat = {
        id: 'new',
        title: 'New Chat',
        updated_at: 1729789654,
        created_at: 1729789317,
      };
      const response = await provider.post('chats', newChat);
      expect(response.data).toEqual(newChat);
    });

    it('should reject when no data provided', async () => {
      await expect(provider.post('chats', null)).rejects.toThrow('Post failed');
    });

    it('should reject for invalid entity type', async () => {
      await expect(provider.post('invalid', {})).rejects.toThrow(
        'Invalid entity type'
      );
    });
  });

  describe('put', () => {
    it('should update existing entity', async () => {
      const updatedChat = {
        ...mockChats[0],
        title: 'Updated Chat',
      };
      const response = await provider.put(
        `chats/${mockChats[0].id}`,
        updatedChat
      );
      expect(response.data).toEqual(updatedChat);
    });

    it('should reject when no id provided', async () => {
      await expect(provider.put('chats', {})).rejects.toThrow(
        'Invalid entity id'
      );
    });

    it('should reject for invalid entity type', async () => {
      await expect(provider.put('invalid/1', {})).rejects.toThrow(
        'Invalid entity type'
      );
    });

    it('should reject when no data provided', async () => {
      await expect(provider.put('chats/1', null)).rejects.toThrow(
        'Post failed'
      );
    });
  });

  describe('delete', () => {
    it('should delete existing entity', async () => {
      const id = mockChats[0].id;
      const response = await provider.delete(`chats/${id}`);
      expect(response.data).toHaveProperty('id', id);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      // expect((provider as any).jsonData.chats).not.toContainEqual(mockChats);
    });

    it('should reject for non-existent id', async () => {
      await expect(provider.delete('chats/999')).rejects.toThrow(
        'Delete failed'
      );
    });

    it('should reject for invalid entity type', async () => {
      await expect(provider.delete('invalid')).rejects.toThrow(
        'Invalid entity type'
      );
    });
  });

  describe('MockResponse', () => {
    it('should create response with correct structure', () => {
      const data = { test: 'data' };
      const response = new MockResponse(data);
      expect(response).toEqual({
        data,
        status: 200,
        statusText: 'OK',
      });
    });
  });
});
