export class Project {
  static idCounter = 0;

  id: number;
  name: string;
  description: string;
  image: string;

  constructor(name: string, description?: string, image?: string) {
    this.name = name;
    this.description = description === undefined ? '...' : '';
    this.image = image || '';
    this.id = ++Project.idCounter;
  }

}
