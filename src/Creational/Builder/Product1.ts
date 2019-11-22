export default class Product1 {
  public parts: string[] = [];
  public listParts(): void {
    console.log(`Product Parts ${this.parts.join(", ")} \n`);
  }
}
