//  So instanceof checks the entire chain, not just direct parent.

const num = [1, 2, 3, 4, 5];

console.log(num instanceof Array); //true
console.log(num instanceof Object);
console.log(num instanceof Function);

// 2. Simple Example

class Animal {}

const dog = new Animal();

console.log(dog instanceof Animal); // true

/*
Why?
Because internally:

dog.__proto__ === Animal.prototype // true
*/

// 3. With Inheritance
class Animal1 {}
class Dog extends Animal1 {}

const d = new Dog();

console.log(d instanceof Dog); // true
console.log(d instanceof Animal1); // true

/*
Reason:
Prototype chain:

d → Dog.prototype → Animal.prototype → Object.prototype
So instanceof checks the entire chain, not just direct parent.
*/

// 4. With Built-in Objects
const arr = [];

console.log(arr instanceof Array); // true
console.log(arr instanceof Object); // true

/*
Because:

Array.prototype → Object.prototype

*/

// 5. Function Constructors (Old Style)
function Person(name) {
  this.name = name;
}

const p = new Person("Mantu");

console.log(p instanceof Person); // true

// 6. Important: Works Only with Objects
console.log(5 instanceof Number); // false

/*
Because:

5 is a primitive, not an object

But:
*/
console.log(new Number(5) instanceof Number); // true

let b = new Number(10);
console.log(b instanceof Number);

/*

Basic Visualization
class Animal {}
const dog = new Animal();
Memory / Prototype View
dog
 │
 ▼
Animal.prototype
 │
 ▼
Object.prototype
 │
 ▼
null
Check
dog instanceof Animal // true

Why?

JS checks:

dog.__proto__ === Animal.prototype ✅
2. Step-by-Step How It Works

When you run:

dog instanceof Animal

JS internally does:

Step 1: dog.__proto__ === Animal.prototype ?
Step 2: If not → go up
Step 3: next.__proto__ === Animal.prototype ?
Step 4: Repeat until null
3. Inheritance Visualization
class Animal {}
class Dog extends Animal {}

const d = new Dog();
Prototype Chain
d
 │
 ▼
Dog.prototype
 │
 ▼
Animal.prototype
 │
 ▼
Object.prototype
 │
 ▼
null
Checks
d instanceof Dog     // true
d instanceof Animal  // true
Why both are true?

Because both exist in the chain:

Dog.prototype       ✅ found
Animal.prototype    ✅ found

5. Array Example
const arr = [];
Chain
arr
 │
 ▼
Array.prototype
 │
 ▼
Object.prototype
 │
 ▼
null
Checks
arr instanceof Array   // true
arr instanceof Object  // true
6. Failure Case Visualization
class Animal {}
class Car {}

const d = new Animal();
Chain
d
 │
 ▼
Animal.prototype
 │
 ▼
Object.prototype
 │
 ▼
null
Check
d instanceof Car // false
Why?
Car.prototype ❌ NOT FOUND in chain
7. Primitive vs Object
5 instanceof Number // false
Why?
5 → no prototype chain ❌

But:

new Number(5) instanceof Number // true
Chain
Number Object
 │
 ▼
Number.prototype
 │
 ▼
Object.prototype
8. Most Important Mental Model

👉 instanceof does NOT check:

constructor name
variable type

👉 It ONLY checks:

"Is Constructor.prototype present in object's prototype chain?"
9. Real Debug Trick

You can manually verify:

console.log(Object.getPrototypeOf(d) === Dog.prototype);

10. One-Line Summary
instanceof = Prototype Chain Search


*/
