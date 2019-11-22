import AbstractProductB from "./AbstractProductB";
import AbstractProductA from "./AbstractProductA";

export default class ConcreteProductB1 implements AbstractProductB {
  public usefulFunctionB(): string {
    return "The result of the product ConcreProductB1";
  }

  public anotherUsefullFunction(collabrator: AbstractProductA): string {
    const result = collabrator.usefulFunctionA();
    return `The result of the B1 collaborating with the :: ${result}`;
  }
}
