console.log(
  "Sort----------------------------------------------------------------------",
);

let arr = [1, 3, 2, 4, 0];

Array.prototype.mySort = function () {
  let protoArr = this;

  for (let i = 0; i < protoArr.length - 1; i++) {
    for (let j = i + 1; j < protoArr.length; j++) {
      if (protoArr[i] > protoArr[j]) {
        let temp = protoArr[i];
        protoArr[i] = protoArr[j];
        protoArr[j] = temp;
      }
    }
  }

  return protoArr;
};

let sortedArray = arr.mySort();

console.log(sortedArray);
