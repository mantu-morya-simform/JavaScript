/*
  This file explains how JavaScript primitives are treated as objects through wrapper classes.
  1. Everything in JS is an object; primitives inherit from their wrapper class prototypes.
  2. When you access properties on a primitive, JS temporarily wraps it in its wrapper object.
  3. Example: let fName = new String("mantu Morya"); creates a String object.
  4. The primitive points to its wrapper class prototype.
*/

let fName = "Mantu Kumar";

// Behind the scenes, JS treats primitives as objects with prototypes:
// fName = {
//   __proto__: String.prototype,
// };

console.log(fName.__proto__); // Logs the String prototype with methods like atChar, at, length, etc.
/* JS first checks the primitive itself for properties, then looks in __proto__ for inherited methods */
console.log(fName.at(2)); // Accesses the 'at' method from String.prototype

// This demonstrates how JS handles inheritance and object creation for primitives.
