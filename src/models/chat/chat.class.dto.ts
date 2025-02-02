import { ChatPM } from './chat.class.pm';

export class ChatDTO {
  id: string;
  title: string;
  created_at: number;
  updated_at: number;

  constructor(item: ChatPM) {
    this.id = item.id;
    this.title = item.title;
    this.created_at = new Date(item.createdAt).getTime() / 1000;
    this.updated_at = new Date(item.updatedAt).getTime() / 1000;
  }
}
