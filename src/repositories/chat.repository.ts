import { GatewayProvider } from '@/api/gateway/gatewayProvider';
import { GatewayType } from '@/types';
import { ChatDTO, ChatPM } from '@/models/chat';
import { ChatPMFactory } from './factories/chat.pmFactory';
import { IHttpProvider } from '@/interfaces/IHttpProvider';

const CHAT_HISTORY = '/chat-history';
const CHATS = '/chats';

export class ChatRepository {
  // Define methods for interacting with chat data
  constructor(private provider: IHttpProvider) {
    // Initialize any necessary properties
  }

  public async getHistory(): Promise<ChatDTO[]> {
    const response = await this.provider.get(CHAT_HISTORY);
    return response.data;
  }

  public async getItems(): Promise<ChatPM[]> {
    const response = await this.provider.get(CHATS);
    let chats: ChatPM[] = [];
    console.log('Response:', response);
    if (Array.isArray(response.data)) {
      chats = response.data.map((chatData: ChatDTO) =>
        ChatPMFactory.fromDTO(chatData)
      );
    }
    return chats;
  }

  public async addItem(item: ChatPM): Promise<ChatPM> {
    const itemDTO = ChatPMFactory.toDTO(item);
    const response = await provider.post('/chats', itemDTO);
    const newItem = ChatPMFactory.fromDTO(response.data);
    return newItem;
  }
}

const provider = GatewayProvider.getProvider(GatewayType.MOCK);
export default new ChatRepository(provider);
