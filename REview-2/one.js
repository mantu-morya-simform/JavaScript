const palette = [
  "#FF5733",
  "#33FF57",
  "#3357FF",
  "#FF33A8",
  "#33FFF5",
  "#F5FF33",
  "#A833FF",
  "#FF8C33",
  "#33FF8C",
  "#8C33FF",
];

let colorObj = {};

function createColorScale(arr) {
  arr.forEach((element, index) => {
    colorObj[element] = palette[index % palette.length];
  });
}

createColorScale(["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k"]);

function getcolor(param) {
  return colorObj[param];
}

console.log(getcolor("k"));

const users = [
  { userId: 1, city: "Ahmedabad", age: 25, gender: "male", modeOfWork: "wfo" },
  { userId: 2, city: "Mumbai", age: 30, gender: "female", modeOfWork: "wfh" },
  { userId: 3, city: "Delhi", age: 28, gender: "male", modeOfWork: "wfh" },
  {
    userId: 4,
    city: "Bangalore",
    age: 35,
    gender: "female",
    modeOfWork: "wfo",
  },
  { userId: 5, city: "Pune", age: 22, gender: "male", modeOfWork: "wfh" },
  { userId: 6, city: "Chennai", age: 40, gender: "female", modeOfWork: "wfo" },
  { userId: 7, city: "Hyderabad", age: 27, gender: "male", modeOfWork: "wfh" },
  { userId: 8, city: "Kolkata", age: 33, gender: "female", modeOfWork: "wfo" },
  { userId: 9, city: "Jaipur", age: 29, gender: "male", modeOfWork: "wfh" },
  { userId: 10, city: "Surat", age: 31, gender: "female", modeOfWork: "wfo" },
  {
    userId: 11,
    city: "Ahmedabad",
    age: 26,
    gender: "female",
    modeOfWork: "wfh",
  },
  { userId: 12, city: "Mumbai", age: 38, gender: "male", modeOfWork: "wfo" },
  { userId: 13, city: "Delhi", age: 24, gender: "female", modeOfWork: "wfh" },
  { userId: 14, city: "Bangalore", age: 36, gender: "male", modeOfWork: "wfo" },
  { userId: 15, city: "Pune", age: 21, gender: "female", modeOfWork: "wfh" },
];

Array.prototype.groupBy = function (key) {
  return this.reduce((acc, item) => {
    const groupKey = item[key];

    console.log(groupKey);

    if (!acc[groupKey]) {
      acc[groupKey] = [];
    }

    acc[groupKey].push(item);

    return acc;
  }, {});
};

const byCity = users.groupBy("gender");
console.log(byCity);

// new Calculator(50).add(10).sub(5).mul(2).total();

class Calculator {
  #value;
  constructor(value) {
    this.#value = value;
  }

  add(val) {
    this.#value += val;
    return this;
  }

  sub(val) {
    this.#value -= val;
    return this;
  }

  mul(val) {
    this.#value *= val;
    return this;
  }

  total() {
    return this.#value;
  }
}

let cal = new Calculator(0);

let calVal = cal.add(5).sub(1).mul(3).total();
console.log(calVal);

function createCalculator(initial = 0) {
  let value = initial;

  return {
    add(n) {
      value += n;
      return this;
    },
    sub(n) {
      value -= n;
      return this;
    },
    mul(n) {
      value *= n;
      return this;
    },
    total() {
      return value;
    },
  };
}
const c = createCalculator(0);
let cVal = c.add(5).mul(2).total();
console.log(cVal);
