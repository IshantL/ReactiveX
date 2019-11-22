import AbstractFactory from "./AbstractFactor";
import ConcreteFactory1 from "./ConcreateFactory1";
import ConcreteFactory2 from "./ConcreateFactory2";

// Client Program
function clientCode(factory: AbstractFactory) {
  const productA = factory.createProductA();
  const productB = factory.createProductB();
  console.log(productB.usefulFunctionB());
  console.log(productB.anotherUsefullFunction(productA));
}

console.log(":::::::::::::::::::::::::::::::::");
console.log(clientCode(new ConcreteFactory1()));
console.log(":::::::::::::::::::::::::::::::::");

console.log(clientCode(new ConcreteFactory2()));
