//Basic Class Creation
class User {
  constructor(name) {
    this.name = name;
  }

  getName() {
    return this.name;
  }

  setName(name) {
    this.name = name;
  }
  sayHi() {
    console.log(`Hello ${this.name}`);
  }
}

const user1 = new User("Ashish");
console.log(user1.getName());
user1.setName("Mantu");
console.log(user1.getName());

console.log(typeof User); //type of class is function because it internally implemented as function  //function
User.prototype.sayHi(); //Hello undefined
User.prototype.sayHi.call({ name: "Mantu" }); //Hello Mantu

console.log(user1.sayHi === User.prototype.sayHi); //true cause both refer to the same instance

//equavalante without class

function User1(name) {
  this.name = name;
}

User1.prototype.sayHi = function () {
  console.log(this.name);
};

User1.prototype.sayHi.call({ name: "mantu" }); //mantu

// Class Expression

const car = class {
  constructor(carName) {
    this.carName = carName;
  }
  getName() {
    console.log(this.carName);
  }
};

const bmw = new car("BMW");
bmw.getName(); //BMW

// Named version

const Animl = class newAnimal {
  constructor(animalName) {
    this.animalName = animalName;
  }
  getAnimalName() {
    console.log(this.animalName);
  }
};

const dog = new Animl("Dog");
dog.getAnimalName(); //Dog

//Dynamic Class Creation

function makeClass(msg) {
  return class {
    sayHi() {
      console.log(msg);
    }
  };
}

const UserClass = makeClass("hello");
const cls = new UserClass();
cls.sayHi(); //hello

//Getters and Setters

class Bike {
  constructor(name) {
    this.name = name;
  }

  get bikeName() {
    return this.name;
  }

  set bikeName(name) {
    this.name = name;
  }
}

const RoyalEnfield = new Bike("Bullet-Classic");
console.log(RoyalEnfield.bikeName); //Bullet-Classic      //get the name by getter function
//chenge the name by setter function
RoyalEnfield.bikeName = "GT-650";
console.log(RoyalEnfield.bikeName); //GT-650

//Class Fields (Important)----------------------------
class A {
  name = "Mantu";
  sayHi() {
    console.log(this.name);
  }
}
const obj = new A();
obj.sayHi(); //Mantu

A.prototype.sayHi(); //undefined    because name Stored in object, not prototype
