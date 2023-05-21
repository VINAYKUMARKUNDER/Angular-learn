
export class Todo {
  id: number;
  title: string;
  desc: string;
  active: boolean;

  constructor(id: number, title: string, desc: string, active: boolean) {
    this.id = id;
    this.title = title;
    this.desc = desc;
    this.active = active;
  }
}
