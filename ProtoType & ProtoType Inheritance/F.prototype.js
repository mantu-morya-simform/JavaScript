function User(name) {
  this.name = name;
}

User.prototype.sayHi = function () {
  console.log(`Hi, I am ${this.name}`);
};

const u1 = new User("Mantu");
u1.sayHi(); // works
