import Creator from "./Creator";
import Product from "./Product";
import ConcreateProduct1 from "./ConcreateProduct1";

export default class ConcreteCreator1 extends Creator {
  public factoryMethod(): Product {
    return new ConcreateProduct1();
  }
}
