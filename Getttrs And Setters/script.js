const persion = {
  firstName: "Mantu",
  lastName: "Morya",
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
  set fullName(value) {
    let parts = value.split(" ");
    this.firstName = parts[0];
    this.lastName = parts[1];
  },
};

persion.fullName = "Satyam Singh";
console.log(persion.fullName);
