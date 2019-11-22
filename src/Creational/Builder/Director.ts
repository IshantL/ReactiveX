import Builder from "./Builder";

export default class Director {
  private builder: Builder;

  public setBuilder(builder: Builder): void {
    this.builder = builder;
  }

  public buildMinimumViableProduct(): void {
    this.builder.producePartA();
  }

  public buildFullProduct(): void {
    this.builder.producePartA();
    this.builder.producePartB();
    this.builder.producePartC();
  }
}
