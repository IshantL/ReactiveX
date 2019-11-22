import Builder from "./Builder";
import Product1 from "./Product1";

export default class ConcreteBuilder implements Builder {
  private product: Product1;

  constructor() {
    this.reset();
  }

  public reset(): void {
    this.product = new Product1();
  }

  public producePartA(): void {
    this.product.parts.push("PartA1");
  }

  public producePartB(): void {
    this.product.parts.push("PartB1");
  }

  public producePartC(): void {
    this.product.parts.push("PartC1");
  }

  public getProducts(): Product1 {
    const result = this.product;
    this.reset();
    return result;
  }
}
