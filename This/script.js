// 1.

// let name = "mantu";
// let user = {
//   name: "Ilya",
//   sayHi: () => {
//     console.log(this.name);
//   },
// };

// user.sayHi();             //mantu

// 2.

// let name = "mantu";
// let user = {
//   name: "Ilya",
//   sayHi() {
//     let arrow = () => console.log(this.name);
//     arrow();
//   },
// };

// user.sayHi();   //Ilya

// 3.

// let name = "mantu";
// let user = {
//   name: "Ilya",
//   sayHi() {
//     console.log(this.name);
//   },
// };

// user.sayHi();       //Ilya

// 4.

// var name = "mantu";
// let user = {
//   name: "Ilya",
//   arrrow: () => {
//     console.log(this.name);
//   },
// };

// user.arrrow();          //mantu
