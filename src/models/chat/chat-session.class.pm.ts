import { format } from 'date-fns';

export interface ChatSessionDTO {
  id: string;
  user_id: string;
  title: string;
  chat: ChatThreadDTO;
  updated_at: number;
  created_at: number;
  share_id: string | null;
  archived: boolean;
  pinned: unknown;
  meta: Record<string, unknown>;
  folder_id: string | null;
}

export interface ChatThreadDTO {
  id: string;
  title: string;
  models: string[];
  params: Record<string, unknown>;
  messages: ChatMessageDTO[];
  history: ChatHistory;
  tags: string[];
  timestamp: number;
  files: File[];
}

export interface ChatMessageDTO {
  id: string;
  parentId: string | null;
  childrenIds: string[];
  role: string;
  content: string;
  timestamp: number;
  models: string[];
}

export interface ChatHistoryDTO {
  messages: Record<string, ChatMessageDetails>;
  currentId: string;
}

export interface ChatMessageDetailsDTO {
  id: string;
  parentId: string | null;
  childrenIds: string[];
  role: string;
  content: string;
  timestamp: number;
  models: string[];
}

export interface FileDTO {
  type: string;
  file: FileInfoDTO;
  id: string;
  url: string;
  name: string;
  collectionName: string;
  status: string;
  size: number;
  error: string | null;
  itemId: string;
}

export interface FileInfoDTO {
  id: string;
  userId: string;
  hash: string;
  filename: string;
  data: FileDataDTO;
}

export interface FileDataDTO {
  content: string;
  meta: {
    name: string;
    contentType: string;
    size: number;
    collectionName: string;
  };
}

export class ChatSession {
  id: string;
  userId: string;
  title: string;
  chat: ChatThread;
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
    this.chat = new ChatThread(item.chat);
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
  files: File[];

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
    this.files = chat.files || [];
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

  constructor(msg: ChatMessageDTO) {
    this.id = msg.id;
    this.parentId = msg.parentId;
    this.childrenIds = msg.childrenIds || [];
    this.role = msg.role;
    this.content = msg.content;
    this.time = format(msg.timestamp, 'h:mm aaa');
    this.models = msg.models || [];
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

  constructor(msg: ChatMessageDetailsDTO) {
    this.id = msg.id;
    this.parentId = msg.parentId;
    this.childrenIds = msg.childrenIds || [];
    this.role = msg.role;
    this.content = msg.content;
    this.timestamp = msg.timestamp;
    this.models = msg.models || [];
  }
}

export class File {
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

  constructor(item: FileDTO) {
    this.type = item.type;
    this.file = new FileInfo(item.file);
    this.id = item.id;
    this.url = item.url;
    this.name = item.name;
    this.collectionName = item.collectionName;
    this.status = item.status;
    this.size = item.size;
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
