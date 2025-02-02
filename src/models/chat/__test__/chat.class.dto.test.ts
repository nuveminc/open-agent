import { ChatDTO, ChatPM } from '@/models/chat';

describe('Test ChatDTO Instantiation', () => {
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

  describe('convert ChatPM', () => {
    test('should properly map ChatPM properties', () => {
      const chatPM = {
        id: 'test-id-1',
        title: 'Test Chat PM',
        createdAt: mockDate,
        updatedAt: mockDate,
      } as ChatPM;

      const chatDTO = new ChatDTO(chatPM);

      expect(chatDTO.id).toBe(chatPM.id);
      expect(chatDTO.title).toBe(chatPM.title);
      expect(chatDTO.created_at).toStrictEqual(mockDateTimestamp);
      expect(chatDTO.updated_at).toStrictEqual(mockDateTimestamp);
    });
  });
});
