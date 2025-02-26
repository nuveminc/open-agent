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
  history: ChatHistoryDTO;
  tags: string[];
  timestamp: number;
  files: FileDTO[];
}

export interface ChatMessageDTO {
  id: string;
  parentId: string | null;
  childrenIds: string[];
  role: string;
  content: string;
  timestamp: number;
  models: string[];
  modelIdx: number;
  userContext: string | null;
  lastSentence: string | null;
  usage: ModelUsageDTO;
}

export interface ChatHistoryDTO {
  messages: Record<string, ChatMessageDetailDTO>;
  currentId: string;
}

export interface ChatMessageDetailDTO {
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

export interface ModelUsageDTO {
  response_tokens: number;
  prompt_tokens: number;
  total_duration: number;
  load_duration: number;
  prompt_eval_count: number;
  prompt_eval_duration: number;
  eval_count: number;
  eval_duration: number;
  approximate_total: string;
}
