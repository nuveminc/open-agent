import { ChatPM } from './chat.class.pm';

export class ChatVM {
  id: string;
  title: string;
  createdAt?: string;
  updatedAt?: string;

  constructor(item: ChatPM) {
    this.id = item.id;
    this.title = item.title;
    try {
      this.createdAt = new Date(item.createdAt).toISOString();
      this.updatedAt = new Date(item.updatedAt).toISOString();
    } catch (error) {
      console.error(error);
    }
  }
}
