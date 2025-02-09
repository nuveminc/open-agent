import { useSettingsStore } from '@/store/settingsStore';

export const useAppPresenter = () => {
  const store = useSettingsStore();

  // const isTemporaryChat = (): boolean => {
  //   return  store.temporaryChat;
  // }

  // const getItems = (): ChatVM[] => {
  //   return  store.chats;
  // }

  // const getChatList = (): ChatListVM => {
  //   return  store.chatList;
  // }

  // const async =  addItem(item: ChatVM): Promise<ChatVM> => {
  //   const itemPM = ChatPMFactory.toPM(item);
  //   const newItem = await repository.addItem(itemPM);
  //   const itemVM = new ChatVM(newItem);
  //   store.addChat(itemVM);
  //   return itemVM;
  // }

  // const setTemporaryChat = (isTemporary: boolean): void => {
  //   store.setTemporaryChat(isTemporary);
  // }

  // const setSubscriber = (listener: Listener): void => {
  //   store.subscribe(listener);
  // }

  // const chat = {
  //   isTemporaryChat,
  //   getItems,
  //   getChatList,
  //   // addItem,
  //   setTemporaryChat,
  //   // setSubscriber,
  // }

  const presenter = {
    store,
    showModal: store.showModal,
    modalOpen: store.modalOpen,
    setModal: store.setModal,
    currentModal: store.currentModal,
    showControlPanel: store.showControlPanel,
    controlPanelOpen: store.controlPanelOpen,
  };

  return { presenter };
};
