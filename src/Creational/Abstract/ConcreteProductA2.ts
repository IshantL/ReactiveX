import AbstractProductA from "./AbstractProductA";

export default class ConcreteProductA2 implements AbstractProductA {
  public usefulFunctionA(): string {
    return "The result of the product A2.";
  }
}
