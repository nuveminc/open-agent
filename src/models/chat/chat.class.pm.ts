import { format } from 'date-fns/format';

export class ChatPM {
  id: string;
  title: string;
  createdAt: string;
  updatedAt: string;

  constructor(id: string, title: string, createdAt: string, updatedAt: string) {
    this.id = id;
    this.title = title;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }

  private _timestampToDate(timestamp: number): string {
    return format(new Date(timestamp), 'yyyy-MM-dd:hh:mm:ss');
  }
}
