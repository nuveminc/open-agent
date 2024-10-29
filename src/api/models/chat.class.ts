export class Chat {
  public id: string;
  public title: string;
  public updated_at: number;
  public created_at: number;

  constructor(
    id: string,
    title: string,
    updated_at: number,
    created_at: number
  ) {
    this.id = id ? id : '000';
    this.title = title;
    this.updated_at = updated_at;
    this.created_at = created_at;
  }
}
