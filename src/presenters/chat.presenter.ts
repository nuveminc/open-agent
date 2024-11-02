import { ChatRepository } from '@/repositories/chat.repository';
import { ChatVM } from '@/models/chat/chat.class.vm';
import { useAppStore } from '@/store/app.store';
import { ChatPM } from '@/models/chat';
import { ChatListVM } from '@/models/chat/chat-list.class.vm';
import { ChatPMFactory } from '@/repositories/factories';

export class ChatPresenter {
  constructor(
    private repository: ChatRepository,
    private store: typeof useAppStore
  ) {}

  async initialize(): Promise<void> {
    console.log('Initializing ChatPresenter...');
    console.log('Fetching chats from repository...');
    const items = await this.repository.getItems();
    const chatItems = items.map((item: ChatPM) => new ChatVM(item));
    this._createChatList(items);
    this.store.getState().setChats(chatItems);
  }

  getItems(): ChatVM[] {
    return this.store.getState().chats;
  }

  async addItem(item: ChatVM): Promise<ChatVM> {
    const itemPM = ChatPMFactory.toPM(item);
    const newItem = await this.repository.addItem(itemPM);
    const itemVM = new ChatVM(newItem);
    this.store.getState().addChat(itemVM);
    return itemVM;
  }

  private _createChatList(items: ChatPM[]): ChatListVM {
    return new ChatListVM(items);
  }
}
