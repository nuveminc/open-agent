export class ChatDTO {
  id: string;
  title: string;
  created_at: number;
  updated_at: number;

  constructor(
    id: string,
    title: string,
    created_at: number,
    updated_at: number
  ) {
    this.id = id;
    this.title = title;
    this.created_at = created_at;
    this.updated_at = updated_at;
  }
}
