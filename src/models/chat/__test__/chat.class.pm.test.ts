import { ChatDTO, ChatPM, ChatVM } from '@/models/chat';

describe('Test ChatPM Instantiation', () => {
  const mockDateString = '2024-01-01:10:00:00Z';
  const mockDate = new Date(mockDateString);
  const mockDateTimestamp = mockDate.getTime() / 1000;
  // const timestamp = 1704132000000;

  beforeEach(() => {
    jest.spyOn(Date, 'now').mockImplementation(() => mockDateTimestamp);
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  describe('convert ChatDTO', () => {
    test('should properly map ChatDTO properties', () => {
      const chatDTO: ChatDTO = {
        id: 'test-id-1',
        title: 'Test Chat DTO',
        created_at: mockDateTimestamp,
        updated_at: mockDateTimestamp,
      };

      const chatPM = new ChatPM(chatDTO);

      expect(chatPM.id).toBe(chatDTO.id);
      expect(chatPM.title).toBe(chatDTO.title);
      expect(chatPM.createdAt).toStrictEqual(mockDate);
      expect(chatPM.updatedAt).toStrictEqual(mockDate);
    });
  });

  describe('convert ChatVM', () => {
    test('should properly map ChatVM properties', () => {
      const chatVM = {
        id: 'test-id-3',
        title: 'Test Chat VM',
        createdAt: mockDateString,
        updatedAt: mockDateString,
      } as ChatVM;

      const chatPM = new ChatPM(chatVM);

      expect(chatPM.id).toBe(chatVM.id);
      expect(chatPM.title).toBe(chatVM.title);
      expect(chatPM.createdAt).toStrictEqual(mockDate);
      expect(chatPM.updatedAt).toStrictEqual(mockDate);
    });
  });
});
