import AbstractProductA from "./AbstractProductA";
import AbstractProductB from "./AbstractProductB";

export default class ConcreteProductB2 implements AbstractProductB {
  public usefulFunctionB(): string {
    return "The result of the product ConcreProductB2";
  }

  public anotherUsefullFunction(collabrator: AbstractProductA): string {
    const result = collabrator.usefulFunctionA();
    return `The result of the B2 collaborating with the :: ${result}`;
  }
}
