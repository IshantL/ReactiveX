import AbstractFactory from "./AbstractFactor";
import AbstractProductA from "./AbstractProductA";
import AbstractProductB from "./AbstractProductB";
import ConcreteProductA2 from "./ConcreteProductA2";
import ConcreteProductB2 from "./ConcreteProductB2";

export default class ConcreteFactory2 implements AbstractFactory {
  public createProductA(): AbstractProductA {
    return new ConcreteProductA2();
  }

  public createProductB(): AbstractProductB {
    return new ConcreteProductB2();
  }
}
