import Creator from "./Creator";
import ConcreteCreator1 from "./ConcreteCreator1";
import ConcreteCreator2 from "./ConcreteCreator2";
import { log } from "../../helpers";
// client
function clientCode(creator: Creator) {
  console.log("I am not aware of the creator's but it still work");
  console.log(creator.someOperation());
}
console.log("");
console.log("");
console.log("");
console.log("The APP launch with Creator1");
console.log(clientCode(new ConcreteCreator1()));

console.log("");

log("The APP launch with Creator2");
console.log(clientCode(new ConcreteCreator2()));
