class Animal {
  constructor(name) {
    this.name = name;
    this.speed = 0;
  }

  run(speed) {
    this.speed = speed;
    console.log(`${this.name} run at Speed ${this.speed}`);
  }
  stop() {
    console.log(`${this.name} stopped`);
  }
  eat() {
    console.log(`${this.name}  Eat`);
  }
}

class Rabbit extends Animal {
  hide() {
    console.log(`${this.name} hides`);
  }
  //method overriding
  eat() {
    console.log(`${this.name}  Eating...`);
  }
}

const rabbit = new Rabbit("White Rabbit");
rabbit.run(50); // inherited
rabbit.hide(); // own method
rabbit.stop(); // inherited
rabbit.eat(); //method overriding

/*

How it works internally
Rabbit.prototype.__proto__ === Animal.prototype

So lookup chain:

rabbit → Rabbit.prototype → Animal.prototype

*/

console.log(Rabbit.prototype.__proto__ === Animal.prototype); //true

// Using super (Important)

// class Cat extends Animal {
//   stop() {
//     setTimeout(() => {
//       super.stop(); // call parent
//       this.hide();
//     }, 1000);
//   }

//   hide() {
//     console.log(`${this.name} hides`);
//   }
// }

// const cat = new Cat("Brown cat");

// cat.stop();

class Cat extends Animal {
  stop() {
    super.stop(); // call parent
    this.hide();
  }

  hide() {
    console.log(`${this.name} hides`);
  }
}

const cat = new Cat("Brown cat");

cat.stop();

// Constructor in Inheritance

// ❌ Wrong
class Rabbit extends Animal {
  constructor(name) {
    this.name = name; // ❌ Error
  }
}
// ✅ Correct
class Rabbit extends Animal {
  constructor(name) {
    super(name); // must call first
    this.created = Date.now();
  }
}

// Rule:
// Must call super() before using this
// Because parent creates this
