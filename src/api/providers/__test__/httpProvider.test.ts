import { HttpProvider } from '../httpProvider';
import axios, { AxiosError } from 'axios';

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

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('HttpProvider', () => {
  let provider: HttpProvider;
  const baseUrl = 'https://localhost:8080';

  beforeEach(() => {
    provider = new HttpProvider(axios, baseUrl);
    jest.clearAllMocks();
  });

  describe('URL handling', () => {
    it('should handle paths with leading slash', async () => {
      mockedAxios.get.mockResolvedValueOnce({ data: mockChats });
      await provider.get('/test');
      expect(mockedAxios.get).toHaveBeenCalledWith(`${baseUrl}/test`);
    });

    it('should handle paths without leading slash', async () => {
      mockedAxios.get.mockResolvedValueOnce({ data: mockChats });
      await provider.get('test');
      expect(mockedAxios.get).toHaveBeenCalledWith(`${baseUrl}/test`);
    });
  });

  describe('GET requests', () => {
    it('should make successful GET request all objects', async () => {
      const mockData = { id: 1 };
      mockedAxios.get.mockResolvedValueOnce({ data: mockData });

      const response = await provider.get<typeof mockData>('test');
      expect(response.data).toEqual(mockData);
    });

    it('should make successful GET request single objects', async () => {
      const mockData = { id: 1 };
      mockedAxios.get.mockResolvedValueOnce({ data: mockData });

      const response = await provider.get<typeof mockData>('test/1');
      expect(response.data).toEqual(mockData);
    });

    it('should handle network errors', async () => {
      mockedAxios.get.mockRejectedValueOnce(new Error('Network Error'));
      await expect(provider.get('test')).rejects.toThrow('Network Error');
    });

    it('should handle 404 errors', async () => {
      const error = new AxiosError();
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      error.response = { status: 404, data: 'Not Found' } as any;
      mockedAxios.get.mockRejectedValueOnce(error);

      await expect(provider.get('test')).rejects.toThrow('Resource not found');
    });
  });

  describe('PUT requests', () => {
    it('should make successful PUT request', async () => {
      const mockData = { id: 1 };
      mockedAxios.put.mockResolvedValueOnce({ data: mockData });

      const response = await provider.put('test', mockData);
      expect(response.data).toEqual(mockData);
    });

    it('should handle null data', async () => {
      const mockData = { id: 1 };
      mockedAxios.put.mockResolvedValueOnce({ data: mockData });

      await expect(provider.put('test', null)).rejects.toThrow(
        'Invalid request data'
      );
    });
  });

  describe('POST requests', () => {
    it('should make successful POST request', async () => {
      const mockData = { id: 1 };
      mockedAxios.post.mockResolvedValueOnce({ data: mockData });

      const response = await provider.post('test', mockData);
      expect(response.data).toEqual(mockData);
    });

    it('should handle null data', async () => {
      await expect(provider.post('test', null)).rejects.toThrow(
        'Invalid request data'
      );
    });
  });

  describe('DELETE requests', () => {
    it('should make successful DELETE request', async () => {
      mockedAxios.delete.mockResolvedValueOnce({ data: { id: 1 } });

      const response = await provider.delete('test/1');
      expect(response.data).toBeDefined();
    });
  });
});
