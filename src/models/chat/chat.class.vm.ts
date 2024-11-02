import { ChatPM } from './chat.class.pm';
import { format } from 'date-fns/format';

export class ChatVM {
  id: string;
  title: string;
  createdAt?: string;
  updatedAt?: string;

  constructor(item: ChatPM) {
    this.id = item.id;
    this.title = item.title;
    this.createdAt = item.createdAt ?? this._formatDate(Date.now());
    this.updatedAt = item.updatedAt ?? this._formatDate(Date.now());
  }

  private _formatDate(timestamp: number): string {
    return format(new Date(timestamp), 'yyyy-MM-dd:hh:mm:ss');
  }
}
