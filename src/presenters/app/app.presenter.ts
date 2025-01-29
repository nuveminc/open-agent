import { ChatRepository } from '@/repositories/chat.repository';
import { ChatVM } from '@/models/chat/chat.class.vm';
import { AppActions, AppState, useAppStore } from '@/store/appStore';
// import { ChatPM } from '@/models/chat';
import { ChatListVM } from '@/models/chat/chat-list.class.vm';
import { ChatPMFactory } from '@/repositories/factories';

export type Listener = (
  state: AppState & AppActions,
  prevState: AppState & AppActions
) => void;

export class AppPresenter {
  public state: AppState & AppActions;

  constructor(
    private repository: ChatRepository,
    private store: typeof useAppStore
  ) {
    this.state = store.getState();
      store.subscribe((state) => {
        this.state = state;
      });
  }

  public isTemporaryChat(): boolean {
    return this.state.temporaryChat;
  }

  public getItems(): ChatVM[] {
    return this.state.chats;
  }

  public getChatList(): ChatListVM {
    return this.state.chatList;
  }

  public async addItem(item: ChatVM): Promise<ChatVM> {
    const itemPM = ChatPMFactory.toPM(item);
    const newItem = await this.repository.addItem(itemPM);
    const itemVM = new ChatVM(newItem);
    this.state.addChat(itemVM);
    return itemVM;
  }

  public setTemporaryChat(isTemporary: boolean): void {
    this.state.setTemporaryChat(isTemporary);
  }

  public setSubscriber(listener: Listener): void {
    this.store.subscribe(listener);
  }

  // private _getAppState(): AppState & AppActions {
  //   return this.store.getState();
  // }
}
