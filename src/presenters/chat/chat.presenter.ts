import { ChatRepository } from '@/repositories/chat.repository';
import { ChatVM } from '@/models/chat/chat.class.vm';
import { AppActions, AppState, useAppStore } from '@/store/app.store';
import { ChatPM } from '@/models/chat';
import { ChatListVM } from '@/models/chat/chat-list.class.vm';
import { ChatPMFactory } from '@/repositories/factories';

export type Listener = (
  state: AppState & AppActions,
  prevState: AppState & AppActions
) => void;

export class ChatPresenter {
  private initialized: boolean = false;

  constructor(
    private repository: ChatRepository,
    private store: typeof useAppStore
  ) {}

  async initialize(): Promise<void> {
    if (this.initialized) return;

    console.log('Initializing ChatPresenter...');
    try {
      const items = await this.repository.getItems();
      const chatList = this._createChatList(items);
      this.store.getState().setChatList(chatList);
      this.initialized = true;
    } catch (error) {
      console.error('Failed to initialize ChatPresenter:', error);
      throw error;
    }
  }

  isInitialized(): boolean {
    return this.initialized;
  }

  isTemporaryChat(): boolean {
    return this.store.getState().temporaryChat;
  }

  getItems(): ChatVM[] {
    return this.store.getState().chats;
  }

  getChatList(): ChatListVM {
    return this.store.getState().chatList;
  }

  async addItem(item: ChatVM): Promise<ChatVM> {
    const itemPM = ChatPMFactory.toPM(item);
    const newItem = await this.repository.addItem(itemPM);
    const itemVM = new ChatVM(newItem);
    this.store.getState().addChat(itemVM);
    return itemVM;
  }

  setTemporaryChat(isTemporary: boolean): void {
    this.store.getState().setTemporaryChat(isTemporary);
  }

  setSubscriber(listener: Listener): void {
    this.store.subscribe(listener);
  }

  cleanup(): void {
    this.initialized = false;
  }

  private _createChatList(items: ChatPM[]): ChatListVM {
    return new ChatListVM(items);
  }

  private _getAppState(): AppState & AppActions {
    return this.store.getState();
  }
}
