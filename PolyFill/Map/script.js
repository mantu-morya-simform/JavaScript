let arr = [1, 2, 3, 4, 5];
const dobule = arr.map((x) => {
  return x * 2;
});
console.log(dobule);

// PolyFill

Array.prototype.myMap = function (callback) {
  if (!callback) {
    throw new Error("undefined is not a function");
  }
  let newArr = [];
  let arr = this;
  for (let i = 0; i < arr.length; i++) {
    let result = callback(arr[i], i, arr);
    newArr.push(result);
  }
  return newArr;
};

let myDouble = arr.myMap((x) => {
  return x * 2;
});

console.log(myDouble);
