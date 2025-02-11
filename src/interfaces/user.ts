export interface User {
  id: string;
  name: string;
  email: string;
  role: string;
  profile_image_url: string;
  last_active_at: number;
  updated_at: number;
  created_at: number;
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
  info: string | null;
  oauth_sub: string | null;
}
