import { ChatPMFactory } from '@/repositories/factories';
import { ChatDTO, ChatVM } from '@/models/chat';

describe('ChatPM', () => {
  const mockDate = new Date('2024-01-01:10:00:00').getTime();
  const timestamp = 1704132000000;

  beforeEach(() => {
    jest.spyOn(Date, 'now').mockImplementation(() => mockDate);
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  describe('constructor with ChatDTO', () => {
    test('should properly map ChatDTO properties', () => {
      const chatDTO: ChatDTO = {
        id: 'test-id-1',
        title: 'Test Chat DTO',
        created_at: timestamp,
        updated_at: timestamp,
      };

      const chatPM = ChatPMFactory.fromDTO(chatDTO);

      expect(chatPM.id).toBe(chatDTO.id);
      expect(chatPM.title).toBe(chatDTO.title);
      expect(chatPM.createdAt).toBe(chatDTO.created_at);
      expect(chatPM.updatedAt).toBe(chatDTO.updated_at);
    });

    test('should use Date.now() for missing created_at and updated_at in ChatDTO', () => {
      // @ts-expect-error props
      const chatDTO: ChatDTO = {
        id: 'test-id-2',
        title: 'Test Chat DTO Without Dates',
      };

      const chatPM = ChatPMFactory.fromDTO(chatDTO);

      expect(chatPM.id).toBe(chatDTO.id);
      expect(chatPM.title).toBe(chatDTO.title);
      expect(chatPM.createdAt).toBe(mockDate);
      expect(chatPM.updatedAt).toBe(mockDate);
    });
  });

  describe('constructor with ChatVM', () => {
    test('should properly map ChatVM properties', () => {
      // @ts-expect-error props
      const chatVM: ChatVM = {
        id: 'test-id-3',
        title: 'Test Chat VM',
        createdAt: '2024-10-10:12:00:00',
        updatedAt: '2024-10-10:12:00:00',
      };

      const chatPM = ChatPMFactory.toPM(chatVM);

      expect(chatPM.id).toBe(chatVM.id);
      expect(chatPM.title).toBe(chatVM.title);
      expect(chatPM.createdAt).toBe(chatVM.createdAt);
      expect(chatPM.updatedAt).toBe(chatVM.updatedAt);
    });

    test('should use Date.now() for missing createdAt and updatedAt in ChatVM', () => {
      // @ts-expect-error props
      const chatVM: ChatVM = {
        id: 'test-id-4',
        title: 'Test Chat VM Without Dates',
      };

      const chatPM = ChatPMFactory.toPM(chatVM);

      expect(chatPM.id).toBe(chatVM.id);
      expect(chatPM.title).toBe(chatVM.title);
      expect(chatPM.createdAt).toBe(mockDate);
      expect(chatPM.updatedAt).toBe(mockDate);
    });
  });
});
