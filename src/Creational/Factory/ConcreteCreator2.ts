import Creator from "./Creator";
import ConcreateProduct2 from "./ConcreateProduct2";
import Product from "./Product";
export default class ConcreteCreator2 extends Creator {
  public factoryMethod(): Product {
    return new ConcreateProduct2();
  }
}
