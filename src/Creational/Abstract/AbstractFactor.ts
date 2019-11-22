import AbstractProductA from "./AbstractProductA";
import AbstractProductB from "./AbstractProductB";

export default interface AbstractFactory {
  createProductA(): AbstractProductA;
  createProductB(): AbstractProductB;
}
