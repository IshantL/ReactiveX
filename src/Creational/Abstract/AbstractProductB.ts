import AbstractProductA from "./AbstractProductA";

export default interface AbstractProductB {
  usefulFunctionB(): string;
  anotherUsefullFunction(collabrator: AbstractProductA): string;
}
