export interface UserDTO {
  id: string;
  email: string;
  name: string;
  role: string;
  profile_image_url: string;
  token: string;
  token_type: string;
  expires_at: number;
  permissions: { workspace: WorkspacePermissions; chat: ChatPermissions };
}

export class WorkspacePermissions {
  public models: boolean;
  public knowledge: boolean;
  public prompts: boolean;
  public tools: boolean;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  constructor(item: any) {
    this.models = item.models;
    this.knowledge = item.knowledge;
    this.prompts = item.prompts;
    this.tools = item.tools;
  }
}

export class ChatPermissions {
  public file_upload: boolean;
  public delete: boolean;
  public edit: boolean;
  public temporary: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  constructor(item: any) {
    this.file_upload = item.file_upload;
    this.delete = item.delete;
    this.edit = item.edit;
    this.temporary = item.temporary;
  }
}

export class Permissions {
  workspace: WorkspacePermissions;
  chat: ChatPermissions;
  constructor(permissions: {
    workspace: WorkspacePermissions;
    chat: ChatPermissions;
  }) {
    this.workspace = new WorkspacePermissions(permissions.workspace);
    this.chat = new ChatPermissions(permissions.chat);
  }
}

export class User {
  public id: string;
  public email: string;
  public name: string;
  public role: string;
  public profile_image_url: string;
  public token: string;
  public token_type: string;
  public expires_at: Date | null;
  public permissions: Permissions;

  constructor(item: UserDTO) {
    this.id = item.id;
    this.email = item.email;
    this.name = item.name;
    this.role = item.role;
    this.profile_image_url = item.profile_image_url;
    this.token = item.token;
    this.token_type = item.token_type;
    this.expires_at = item.expires_at ? new Date(item.expires_at) : null;
    this.permissions = new Permissions(item.permissions);
  }
}
