export class Chat {
  id: string;
  title: string;
  created_at: number;
  updated_at: number;

  constructor(id: string, title: string) {
    this.id = id;
    this.title = title;
    this.created_at = Date.now();
    this.updated_at = Date.now();
  }
}
