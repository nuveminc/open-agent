import { IHttpProvider } from '@/api/types/http-provider.interface';
import { GatewayProvider } from '@/api/gateway/gatewayProvider';
import { GatewayType } from '@/types';
import { ChatDTO, ChatPM } from '@/models/chat';

const CHAT_HISTORY = '/chat-history';
const CHATS = '/chats';

export class ChatRepository {
  // Define methods for interacting with chat data
  constructor(private provider: IHttpProvider) {
    // Initialize any necessary properties
  }

  public async getHistory(): Promise<ChatDTO[]> {
    const response = await this.provider.get<ChatDTO[]>(CHAT_HISTORY);
    return response.data as ChatDTO[];
  }

  public async getItems(): Promise<ChatPM[]> {
    const response = await this.provider.get<ChatDTO>(CHATS);
    let chats: ChatPM[] = [];
    console.log('Response:', response);
    if (Array.isArray(response.data)) {
      const data = response.data.sort(
        (a: ChatDTO, b: ChatDTO) => a.updated_at - b.updated_at
      );
      chats = data.map((chatData: ChatDTO) => {
        const chatPM = new ChatPM(chatData);
        return chatPM;
      });
    }
    return chats;
  }

  public async getItem(id: string): Promise<ChatPM> {
    const response = await this.provider.get<ChatDTO>(`${CHATS}/${id}`);
    const chatPM = new ChatPM(response.data!);
    return chatPM;
  }

  public async addItem(item: ChatPM): Promise<ChatPM> {
    const itemDTO = new ChatDTO(item);
    const response = await provider.post<ChatDTO>('/chats', itemDTO);
    const newItem = new ChatPM(response.data!);
    return newItem;
  }
}

const provider = GatewayProvider.getProvider(GatewayType.MOCK);
export default new ChatRepository(provider);
