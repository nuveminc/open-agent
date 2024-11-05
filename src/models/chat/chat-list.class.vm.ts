import { getTimeRange } from '@/lib/utils';
import { ChatPM } from './chat.class.pm';
import { ChatVM } from './chat.class.vm';

export type RangeList = { [key: string]: ChatVM[] };

export class ChatListVM {
  public items: ChatVM[];
  public ranges: string[];
  public rangeList: RangeList;

  constructor(items: ChatPM[]) {
    this.items = items.map((item) => new ChatVM(item));

    this.rangeList = {};
    this.ranges = [];

    // enumerate items
    items.forEach((item) => {
      // get the time range of the item
      const timerange = getTimeRange(item.createdAt);
      // create the key for the time range
      if (this.rangeList[timerange] === undefined) {
        this.rangeList[timerange] = [] as ChatVM[];
        // add the key to an array of keys
        this.ranges.push(timerange);
      }
      const vmItem = new ChatVM(item);
      this.rangeList[timerange].push(vmItem);
    });
    // console.log('Created time ranges:', this.ranges, this.rangeList);
  }
}
