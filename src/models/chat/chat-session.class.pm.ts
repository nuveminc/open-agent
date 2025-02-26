import { format } from 'date-fns';
import {
  ChatHistoryDTO,
  ChatMessageDetailDTO,
  ChatMessageDTO,
  ChatSessionDTO,
  ChatThreadDTO,
  FileDataDTO,
  FileDTO,
  FileInfoDTO,
  ModelUsageDTO,
} from './chat-session.class.dto';

export class ChatSession {
  id: string;
  userId: string;
  title: string;
  chatThread: ChatThread;
  updatedAt: number;
  createdAt: number;
  shareId: string | null;
  archived: boolean;
  pinned: unknown;
  meta: Record<string, unknown>;
  folderId: string | null;

  constructor(item: ChatSessionDTO) {
    this.id = item.id;
    this.userId = item.user_id;
    this.title = item.title;
    this.chatThread = new ChatThread(item.chat);
    this.updatedAt = item.updated_at;
    this.createdAt = item.created_at;
    this.shareId = item.share_id;
    this.archived = item.archived;
    this.pinned = item.pinned;
    this.meta = item.meta;
    this.folderId = item.folder_id;
  }
}

export class ChatThread {
  id: string;
  title: string;
  models: string[];
  params: Record<string, unknown>;
  messages: ChatMessage[];
  history: ChatHistory;
  tags: string[];
  timestamp: number;
  files: DataFile[];

  constructor(chat: ChatThreadDTO) {
    this.id = chat.id;
    this.title = chat.title;
    this.models = chat.models || [];
    this.params = chat.params || {};
    this.messages = (chat.messages || []).map(
      (msg: ChatMessageDTO) => new ChatMessage(msg)
    );
    this.history = new ChatHistory(chat.history);
    this.tags = chat.tags || [];
    this.timestamp = chat.timestamp;
    this.files = this._createFileList(chat.files);
  }

  private _createFileList(files: FileDTO[]): DataFile[] {
    return files.map((item) => new DataFile(item));
  }
}

export class ChatMessage {
  id: string;
  parentId: string | null;
  childrenIds: string[];
  role: string;
  content: string;
  time: string;
  models: string[];
  modelName: string;
  modelIdx: number;
  userContext: string | null;
  lastSentence: string;
  usage: ModelUsage;

  constructor(msg: ChatMessageDTO) {
    this.id = msg.id;
    this.parentId = msg.parentId;
    this.childrenIds = msg.childrenIds || [];
    this.role = msg.role;
    this.content = msg.content;
    this.time = format(msg.timestamp, 'h:mm aaa');
    this.models = msg.models || [];
    this.modelName = this.models[0] || '';
    this.modelIdx = msg.modelIdx || 0;
    this.userContext = msg.userContext || null;
    this.lastSentence = msg.lastSentence || '';
    this.usage = new ModelUsage(msg.usage);
  }
}

export class ModelUsage {
  responseTokens: number;
  promptTokens: number;
  totalDuration: number;
  loadDuration: number;
  promptEvalCount: number;
  promptEvalDuration: number;
  evalCount: number;
  evalDuration: number;
  approximate_total: string;
  constructor(usage: ModelUsageDTO) {
    this.responseTokens = usage?.response_tokens || 0;
    this.promptTokens = usage?.prompt_tokens || 0;
    this.totalDuration = usage?.total_duration || 0;
    this.loadDuration = usage?.load_duration || 0;
    this.promptEvalCount = usage?.prompt_eval_count || 0;
    this.promptEvalDuration = usage?.prompt_eval_duration || 0;
    this.evalCount = usage?.eval_count || 0;
    this.evalDuration = usage?.eval_duration || 0;
    this.approximate_total = usage?.approximate_total || '';
  }
}

export class ChatHistory {
  messages: Record<string, ChatMessageDetails>;
  currentId: string;

  constructor(history: ChatHistoryDTO) {
    this.messages = {};
    for (const key in history?.messages || {}) {
      this.messages[key] = new ChatMessageDetails(history.messages[key]);
    }
    this.currentId = history?.currentId;
  }
}

export class ChatMessageDetails {
  id: string;
  parentId: string | null;
  childrenIds: string[];
  role: string;
  content: string;
  timestamp: number;
  models: string[];

  constructor(msg: ChatMessageDetailDTO) {
    this.id = msg.id;
    this.parentId = msg.parentId;
    this.childrenIds = msg.childrenIds || [];
    this.role = msg.role;
    this.content = msg.content;
    this.timestamp = msg.timestamp;
    this.models = msg.models || [];
  }
}

export class DataFile {
  type: string;
  file: FileInfo;
  id: string;
  url: string;
  name: string;
  collectionName: string;
  status: string;
  size: number;
  error: string | null;
  itemId: string;

  FileType: { [key: string]: string } = {
    image: 'Image',
    video: 'Video',
    audio: 'Audio',
    file: 'File',
  };

  constructor(item: FileDTO) {
    this.type = this.FileType[item.type];
    this.file = new FileInfo(item.file);
    this.id = item.id;
    this.url = item.url;
    this.name = item.name;
    this.collectionName = item.collectionName;
    this.status = item.status;
    this.size = item.size / 1024;
    this.error = item.error;
    this.itemId = item.itemId;
  }
}

export class FileInfo {
  id: string;
  userId: string;
  hash: string;
  filename: string;
  data: FileData;

  constructor(item: FileInfoDTO) {
    this.id = item.id;
    this.userId = item.userId;
    this.hash = item.hash;
    this.filename = item.filename;
    this.data = new FileData(item.data);
  }
}

export class FileData {
  content: string;
  meta: {
    name: string;
    contentType: string;
    size: number;
    collectionName: string;
  };

  constructor(item: FileDataDTO) {
    this.content = item.content;
    this.meta = item.meta;
  }
}
