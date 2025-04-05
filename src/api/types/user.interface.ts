export interface User {
  id: string;
  email: string;
  name: string;
  role: string;
  profile_image_url: string;
  token?: string;
  last_active_at: number;
  created_at: number;
  updated_at: number;
  api_key: string;
  settings: {
    ui: {
      models: string[];
      chatBubble: boolean;
      widescreenMode: boolean;
      splitLargeChunks: boolean;
      speechAutoSend: boolean;
      requestFormat: string;
      chatDirection: string;
      memory: boolean;
      responseAutoPlayback: boolean;
    };
  };
  permissions: {
    workspace: {
      models: boolean;
      knowledge: boolean;
      prompts: boolean;
      tools: boolean;
    };
    chat: {
      file_upload: boolean;
      delete: boolean;
      edit: boolean;
      temporary: boolean;
    };
    oauth_sub: string | null;
  };
}
