export class MicroFront {
  private tag!: string;

  private static instance: MicroFront;
  private constructor() {}
  public static getInstance(): MicroFront {
    if (!MicroFront.instance) {
      MicroFront.instance = new MicroFront();
    }
    return MicroFront.instance;
  }

  get name(): string {
    return this.tag
  }

  set name(name: string) {
     this.tag = name;
  }
}
