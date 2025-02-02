import { getTimeRange } from '@/lib/utils';
import { ChatListVM } from '../chat-list.class.vm';
import { ChatPM } from '../chat.class.pm';

// Mock getTimeRange utility
jest.mock('@/lib/utils', () => ({
  getTimeRange: jest.fn(),
}));

describe('ChatListVM', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should create empty ranges when no items provided', () => {
    const chatList = new ChatListVM([]);
    expect(chatList.ranges).toEqual([]);
    expect(chatList.rangeList).toEqual({});
  });

  it('should group items by time range', () => {
    // Mock getTimeRange to return specific values
    (getTimeRange as jest.Mock)
      .mockReturnValueOnce('Today')
      .mockReturnValueOnce('Today')
      .mockReturnValueOnce('Yesterday');

    const items = [
      new ChatPM({
        id: '1',
        title: 'Chat 1',
        createdAt: '2024-03-20T10:00:00Z',
        updatedAt: '2024-03-20T10:00:00Z',
      }),
      new ChatPM({
        id: '2',
        title: 'Chat 2',
        createdAt: '2024-03-20T11:00:00Z',
        updatedAt: '2024-03-20T11:00:00Z',
      }),
      new ChatPM({
        id: '3',
        title: 'Chat 3',
        createdAt: '2024-03-19T10:00:00Z',
        updatedAt: '2024-03-19T10:00:00Z',
      }),
    ];

    const chatList = new ChatListVM(items);

    expect(chatList.ranges).toEqual(['Today', 'Yesterday']);
    expect(Object.keys(chatList.rangeList)).toEqual(['Today', 'Yesterday']);
    expect(chatList.rangeList['Today'].length).toBe(2);
    expect(chatList.rangeList['Yesterday'].length).toBe(1);
  });

  it('should handle invalid date in chat item', () => {
    (getTimeRange as jest.Mock).mockImplementation(() => {
      throw new Error('Invalid date format');
    });

    const items = [
      new ChatPM({
        id: '1',
        title: 'Chat 1',
        createdAt: 'invalid',
        updatedAt: 'invalid',
      }),
    ];

    expect(() => new ChatListVM(items)).toThrow('Invalid date format');
    expect(() => new ChatListVM(items)).toThrow(Error);
  });

  it('should maintain chronological order of ranges', () => {
    (getTimeRange as jest.Mock)
      .mockReturnValueOnce('Today')
      .mockReturnValueOnce('Yesterday')
      .mockReturnValueOnce('Previous 7 days');

    const items = [
      new ChatPM({
        id: '1',
        title: 'Chat 1',
        createdAt: '2024-03-20T10:00:00Z',
        updatedAt: '2024-03-20T10:00:00Z',
      }),
      new ChatPM({
        id: '2',
        title: 'Chat 2',
        createdAt: '2024-03-19T10:00:00Z',
        updatedAt: '2024-03-19T10:00:00Z',
      }),
      new ChatPM({
        id: '3',
        title: 'Chat 3',
        createdAt: '2024-03-15T10:00:00Z',
        updatedAt: '2024-03-15T10:00:00Z',
      }),
    ];

    const chatList = new ChatListVM(items);
    expect(chatList.ranges).toEqual(['Today', 'Yesterday', 'Previous 7 days']);
  });
});
