import { User } from '@/models/auth';
import { AuthRepository } from '@/repositories/auth.repository';
import { AppActions, AppState, useAppStore } from '@/store/appStore';

export type Listener = (
  state: AppState & AppActions,
  prevState: AppState & AppActions
) => void;

export class AuthPresenter {
  public state: AppState & AppActions;
  private initialized: boolean = false;
  constructor(
    private repository: AuthRepository,
    private store: typeof useAppStore
  ) {
    this.state = this.store.getState();
  }

  public async initialize(): Promise<void> {
    if (this.initialized) return;

    console.log('Initializing AuthPresenter...');
    try {
      const items = await this.repository.getUser();
      console.log('Users:', items);
      this.store.getState().setIsAuthenticated(true);
      this.store.getState().setUser(items);
      this.initialized = true;
    } catch (error) {
      console.error('Failed to initialize AuthPresenter:', error);
      throw error;
    }
  }

  public isInitialized(): boolean {
    return this.initialized;
  }

  // public toggleDialog(): void {
  //   return this.store.getState().showModal(true);
  // }

  // public isTemporaryChat(): boolean {
  //   return this.store.getState().temporaryChat;
  // }

  public getUser(): User {
    return this.store.getState().user;
  }

  // public getChatList(): ChatListVM {
  //   return this.store.getState().chatList;
  // }

  // public async addItem(item: ChatVM): Promise<ChatVM> {
  //   const itemPM = new ChatPM(item);
  //   const newItem = await this.repository.addItem(itemPM);
  //   const itemVM = new ChatVM(newItem);
  //   this.store.getState().addChat(itemVM);
  //   return itemVM;
  // }

  // public setTemporaryChat(isTemporary: boolean): void {
  //   this.store.getState().setTemporaryChat(isTemporary);
  // }

  // public setSubscriber(listener: Listener): void {
  //   this.store.subscribe(listener);
  // }

  public cleanup(): void {
    this.initialized = false;
  }
}
