export interface User {
  id: string;
  email: string;
  name: string;
  role: string;
  profile_image_url: string;
  token?: string;
  token_type: string;
  expires_at: string | null;
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
  };
}
