import { IHttpProvider } from '@/api/types/http-provider.interface';
import { GatewayProvider } from '@/api/gateway/gatewayProvider';
import { GatewayType } from '@/types';
import { ChatDTO, ChatPM } from '@/models/chat';
import { User, UserDTO } from '@/models/auth';

const AUTH = '/auth';

export class AuthRepository {
  // Define methods for interacting with chat data
  constructor(private provider: IHttpProvider) {
    // Initialize any necessary properties
  }

  public async getUser(): Promise<User> {
    const response = await this.provider.get<UserDTO>(AUTH);
    console.log('Response:', response);
    const item: User = new User(response.data as UserDTO);
    // TODO: Handle token storage - create a storage service
    if (item.token && item.token.length > 0) {
      localStorage.setItem('token', item.token);
    }
    return item;
  }

  public async addItem(item: ChatPM): Promise<ChatPM> {
    const itemDTO = new ChatDTO(item);
    const response = await provider.post<ChatDTO>('/chats', itemDTO);
    const newItem = new ChatPM(response.data!);
    return newItem;
  }
}

const provider = GatewayProvider.getProvider(GatewayType.HTTP);
export default new AuthRepository(provider);
