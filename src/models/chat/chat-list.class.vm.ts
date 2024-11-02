import { getTimeRange } from '@/lib/utils';
import { ChatPM } from './chat.class.pm';
import { ChatVM } from './chat.class.vm';

export class ChatListVM {
  public items: ChatVM[];

  constructor(items: ChatPM[]) {
    this.items = items.map((item) => new ChatVM(item));

    const ranges: { [key: string]: ChatVM[] } = {};
    const rangeList: string[] = [];

    // enumerate items
    items.forEach((item) => {
      // get the time range of the item
      const timerange = getTimeRange(item.createdAt);
      // create the key for the time range
      if (ranges[timerange] === undefined) {
        ranges[timerange] = [] as ChatVM[];
        // add the key to an array of keys
        rangeList.push(timerange);
      }
      const vmItem = new ChatVM(item);
      ranges[timerange].push(vmItem);
    });
    console.log('Created time ranges:', ranges, rangeList);
  }
}
