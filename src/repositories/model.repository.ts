import { IHttpProvider } from '@/api/types/http-provider.interface';
import { GatewayProvider } from '@/api/gateway/gatewayProvider';
import { GatewayType } from '@/types';
import { Model, ModelCollection, ModelDTO } from '@/models/model';

const MODELS = '/models';

export class ModelRepository {
  // Define methods for interacting with data
  constructor(private provider: IHttpProvider) {
    // Initialize any necessary properties
  }

  public async getItems(): Promise<Model[] | null> {
    const response = await this.provider.get<ModelDTO[]>(MODELS);
    let models: ModelCollection | null = null;
    if (Array.isArray(response.data)) {
      models = response.data.map((item: ModelDTO) => new Model(item));
    }
    return models;
  }

  // public async getItem(id: string): Promise<ChatSession> {
  //   const response = await this.provider.get<ChatSessionDTO>(
  //     `${MODELS}/${id}`,
  //     {
  //       isFile: true,
  //     }
  //   );
  //   const chatSession = new ChatSession(response.data!);
  //   console.log('ChatSession:', chatSession);
  //   return chatSession;
  // }

  //   public async addItem(item: ChatPM): Promise<ChatPM> {
  //     const itemDTO = new ChatDTO(item);
  //     const response = await provider.post<ChatDTO>('/chats', itemDTO);
  //     const newItem = new ChatPM(response.data!);
  //     return newItem;
  //   }
}

const provider = GatewayProvider.getProvider(GatewayType.MOCK);
export default new ModelRepository(provider);
