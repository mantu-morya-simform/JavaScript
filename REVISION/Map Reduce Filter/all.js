const users = [
  { firstName: "John", lastName: "Doe", age: 26 },
  { firstName: "Jane", lastName: "Smith", age: 75 },
  { firstName: "Aman", lastName: "Verma", age: 26 },
  { firstName: "Satu", lastName: "Shah", age: 50 },
];

const fullName = users.map((user) => `${user.firstName} ${user.lastName}`);
console.log(fullName);

const ageGrator26 = users.filter((user) => user.age > 26);
console.log(ageGrator26);

const ageCountArr = users.reduce((acc, curr) => {
  if (!acc[curr.age]) {
    acc[curr.age] = 1;
  } else {
    acc[curr.age]++;
  }
  return acc;
}, {});

console.log(ageCountArr);
