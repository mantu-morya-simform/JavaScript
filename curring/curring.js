// 1. Uning Bind
let multiply = function (x, y) {
  console.log(x * y);
};

let multiplyByTwo = multiply.bind(this, 2);
multiplyByTwo(5);

let multiplyByThree = multiply.bind(this, 3, 6); //take both refrence from here
multiplyByThree(5); //ignore this value

// 2. Uning Clousere

let mul = function (x) {
  return function (y) {
    console.log(x * y);
  };
};

multiplyByTwo = mul(2);
multiplyByTwo(10);
