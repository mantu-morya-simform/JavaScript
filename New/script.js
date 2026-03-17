// 1.
// function User(name) {
//   this.name = name;
//   this.isAdmin = false;
// }

// let user = new User("Jack");

// console.log(user.name); // Jack
// console.log(user.isAdmin); // false

// // Equivalent object:
// // let user = {
// //   name: "Jack",
// //   isAdmin: false,
// // };

// 2.Creating Multiple Objects

// let user1 = new User("Jack");
// let user2 = new User("Ann");
// let user3 = new User("Mike");

// 3. Adding Methods in Constructor

// function User(name) {
//   this.name = name;

//   this.sayHi = function () {
//     console.log("My name is " + this.name);
//   };
// }

// let user = new User("John");

// user.sayHi();

// Result object:
// {
//   name: "John",
//   sayHi: function(){...}
// }

// 4. Return Behavior in Constructors

// function BigUser() {
// this.name = "John";
// return { name: "Godzilla" };
// }
//
// new BigUser().name // "Godzilla"

// function SmallUser() {
//   this.name = "John";
//   return 100;
// }

// new SmallUser().name; // "John"
