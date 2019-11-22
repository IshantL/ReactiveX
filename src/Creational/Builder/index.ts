import Director from "./Director";

import ConcreteBuilder from "./ConcreteBuilder";

function clientCode(director: Director) {
  const builder = new ConcreteBuilder();
  director.setBuilder(builder);
  console.log("Standard basic product:");
  console.log(director.buildMinimumViableProduct());
  console.log(builder.getProducts().listParts());
  console.log("Full Product");
  console.log(director.buildFullProduct());
  console.log(builder.getProducts().listParts());
  console.log("Custom product:");
  builder.producePartA();
  builder.producePartC();
  builder.getProducts().listParts();
}

const director = new Director();
clientCode(director);
