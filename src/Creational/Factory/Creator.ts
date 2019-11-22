import Product from "./Product";

export default abstract class Creator {
  public abstract factoryMethod(): Product;

  public someOperation(): string {
    const product = this.factoryMethod();
    return `Creator :: The same creator code has just worked with ${product.operation()}`;
  }
}
