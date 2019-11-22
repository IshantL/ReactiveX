import AbstractProductA from "./AbstractProductA";

export default class ConcreateProductA1 implements AbstractProductA {
  public usefulFunctionA(): string {
    return "The result of Product A1.";
  }
}
