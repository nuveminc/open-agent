import { ChatDTO, ChatPM, ChatVM } from '@/models/chat';
import { format } from 'date-fns/format';

// PMFactory.ts
export class ChatPMFactory {
  public static fromDTO(dto: ChatDTO): ChatPM {
    return new ChatPM(
      dto.id,
      dto.title,
      ChatPMFactory._timestampToDate(dto.created_at),
      ChatPMFactory._timestampToDate(dto.updated_at)
    );
  }

  public static toDTO(pm: ChatPM): ChatDTO {
    return new ChatDTO(
      pm.id,
      pm.title,
      ChatPMFactory._dateToTimestamp(pm.createdAt),
      ChatPMFactory._dateToTimestamp(pm.updatedAt)
    );
  }

  public static toPM(vm: ChatVM): ChatPM {
    const date = ChatPMFactory._timestampToDate(Date.now());
    vm.createdAt = vm.createdAt ?? date;
    vm.updatedAt = vm.updatedAt ?? date;
    return new ChatPM(vm.id, vm.title, vm.createdAt, vm.updatedAt);
  }

  private static _dateToTimestamp(date: string): number {
    return new Date(date).getTime();
  }

  private static _timestampToDate(timestamp: number): string {
    return format(new Date(timestamp * 1000), 'yyyy-MM-dd:hh:mm:ss');
  }
}
