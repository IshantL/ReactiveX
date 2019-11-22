import AbstractFactory from "./AbstractFactor";
import AbstractProductA from "./AbstractProductA";
import AbstractProductB from "./AbstractProductB";
import ConcreateProductA1 from "./ConcreteProductA1";
import ConcreteProductB1 from "./ConcreteProductB1";

export default class ConcreteFactory1 implements AbstractFactory {
  public createProductA(): AbstractProductA {
    return new ConcreateProductA1();
  }

  public createProductB(): AbstractProductB {
    return new ConcreteProductB1();
  }
}
