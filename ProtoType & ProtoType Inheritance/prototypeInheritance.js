const p1 = {
  fName: "Mantu",
  lName: "Morya",
  getFullName() {
    console.log(`${this.fName} ${this.lName}`);
  },
  __proto__: {}, //present in each object
};

p1.getFullName();

const p2 = Object.create(p1);
/*
p2 = {
  __proto__: (p1 = {
    fName: "Mantu",
    fName: "Morya",
  }),
}; //the inharit object p2 look like this
*/

//cause p2 has not any properties right now, but it is inharit the p1 so we can easily acess the properties of p1(using the __proto__)prototype
console.log(p2);

console.log(p2.fName); //can easily acess the properties of p1
console.log(p2.lName); //can easily acess the properties of p1

p2.__proto__.lName = "Kumar"; //can easily update the properties of p1 using __proto__
/*
p2 = {
  __proto__: {
    fName: "Mantu",
    fName: "Kumar",
  },
};              //After update p2 object look like this and also chenge the origonal object properties
*/

console.log(p2.lName); //Kumar
console.log(p1.lName); //Kumar

// prototypel Inheritance

const A1 = {
  xp1: "I am inside A1",
};

const A2 = {
  xp2: "I am inside A2",
  __proto__: A1,
};

const A3 = {
  xp3: "I am inside A3",
  __proto__: A2,
};

//i can acess all properties of A1, A2, A3 inside A3 cause i have done here prototypl Inheritance
console.log(A3.xp1);
console.log(A3.xp2);
console.log(A3.xp3);
console.log();

/* Object __proto__:null  so it goes inside proto from one 
 to another object whenever it not get the obj proto null if proto inherit 
  Eg.
      let s="mantu";
      s.__proto__=String.__proto__=Object__proto__=null
      let num=5;
      num.__proto__=Number.__proto__=Object__proto__=null
      Imp:- Thats why Everything in Js is Originate from Object Even function
 */
