export interface ChatDTO {
  id: string;
  title: string;
  created_at?: number;
  updated_at?: number;
}

export interface ChatVM {
  id: string;
  title: string;
  createdAt?: number;
  updatedAt?: number;
}
