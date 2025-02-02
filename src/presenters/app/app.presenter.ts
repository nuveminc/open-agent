// import { ChatRepository } from '@/repositories/chat.repository';
// import { SettingsStore, useSettingsStore } from '@/store/settingsStore';
// import { ValueType } from '@/types';

// export type Listener = (state: SettingsStore, prevState: SettingsStore) => void;

export class AppPresenter {
  // public state: SettingsStore;
  // constructor(
  //   private repository: ChatRepository,
  //   private store: typeof useSettingsStore
  // ) {
  //   this.state = store.getState();
  //   store.subscribe((state) => {
  //     this.state = state;
  //   });
  // }
  // public async setValue(name: string, value: ValueType): Promise<void> {
  //   // call repository to set value in DB / API
  //   console.log(this.repository);
  //   this.state.setSettingsValue(name, value);
  // }
  // public isTemporaryChat(): boolean {
  //   return this.state.temporaryChat;
  // }
  // public getItems(): ChatVM[] {
  //   return this.state.chats;
  // }
  // public getChatList(): ChatListVM {
  //   return this.state.chatList;
  // }
  // public async addItem(item: ChatVM): Promise<ChatVM> {
  //   const itemPM = ChatPMFactory.toPM(item);
  //   const newItem = await this.repository.addItem(itemPM);
  //   const itemVM = new ChatVM(newItem);
  //   this.state.addChat(itemVM);
  //   return itemVM;
  // }
  // public setTemporaryChat(isTemporary: boolean): void {
  //   this.state.setTemporaryChat(isTemporary);
  // }
  // public setSubscriber(listener: Listener): void {
  //   this.store.subscribe(listener);
  // }
  // private _getAppState(): AppState & AppActions {
  //   return this.store.getState();
  // }
}
