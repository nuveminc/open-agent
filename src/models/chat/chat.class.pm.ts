import { ChatDTO } from './chat.class.dto';
import { ChatVM } from './chat.class.vm';

export class ChatPM {
  id: string;
  title: string;
  createdAt: Date;
  updatedAt: Date;

  constructor(item: ChatDTO | ChatVM) {
    this.id = item.id;
    this.title = item.title;
    this.createdAt = this._isDTO(item)
      ? this._fromTimestsamp(item.created_at)
      : this._fromISOString(item.createdAt!);
    this.updatedAt = this._isDTO(item)
      ? this._fromTimestsamp(item.updated_at)
      : this._fromISOString(item.updatedAt!);
  }

  private _fromTimestsamp(date: number): Date {
    return new Date(date * 1000);
  }
  private _fromISOString(date: string): Date {
    return new Date(date);
  }
  private _isDTO(item: ChatDTO | ChatVM): item is ChatDTO {
    return 'created_at' in item;
  }
}
