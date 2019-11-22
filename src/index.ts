import * as Rx from 'rxjs';
import Car from './GameObject/Car';
import Creator from "./Creational/Factory/Creator";
import ConcreteCreator1 from "./Creational/Factory//ConcreteCreator1";
import ConcreteCreator2 from "./Creational/Factory//ConcreteCreator2";
export const canvas = document.getElementById("myCanvas");


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
  
  console.log("The APP launch with Creator2");
  console.log(clientCode(new ConcreteCreator2()));

const car =new Car();
car.showCar();
//console.log(Rx);