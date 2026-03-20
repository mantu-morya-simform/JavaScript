//1.Call

//First Approch

console.log("First Approch");

let name = {
  firstName: "Mantu",
  lastName: "Morya",
  printFullName: function () {
    console.log(`${this.firstName} ${this.lastName}`);
  },
};

name.printFullName();

let name1 = {
  firstName: "Satyam",
  lastName: "Singh",
};

//function borrowing
name.printFullName.call(name1);

console.log("");

//Second Approch

console.log("Second Approch");

let name2 = {
  firstName: "Mantu",
  lastName: "Morya",
};

let name3 = {
  firstName: "Satyam",
  lastName: "Singh",
};

let printFullName = function () {
  console.log(`${this.firstName} ${this.lastName}`);
};

//function borrowing
printFullName.call(name2);
printFullName.call(name3);

console.log("");
