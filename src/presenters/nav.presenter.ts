import { ChatVM } from '@/models/chat/chat.class.vm';
import { useAppStore } from '@/store/appStore';
import { ChatListVM } from '@/models/chat/chat-list.class.vm';
// import { ChatPMFactory } from '@/repositories/factories';

export class NavPresenter {
  private initialized: boolean = false;

  constructor(
    private store: typeof useAppStore
  ) {}

  isInitialized(): boolean {
    return this.initialized;
  }

  getItems(): ChatVM[] {
    return this.store.getState().chats;
  }

  getChatList(): ChatListVM {
    return this.store.getState().chatList;
  }

  // async addItem(item: ChatVM): Promise<ChatVM> {
  //   const itemPM = ChatPMFactory.toPM(item);
  //   const newItem = await this.repository.addItem(itemPM);
  //   const itemVM = new ChatVM(newItem);
  //   this.store.getState().addChat(itemVM);
  //   return itemVM;
  // }

  cleanup(): void {
    this.initialized = false;
  }

}
