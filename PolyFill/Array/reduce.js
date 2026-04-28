console.log(
  "Filter ----------------------------------------------------------------------",
);

let arr = [1, 2, 3, 4, 5];

Array.prototype.myReduce = function (cb, initialState) {
  if (typeof cb !== "function") {
    throw new Error("CB is not a function");
  }

  let protoArr = this;
  let acc = initialState;
  for (let i = 0; i < protoArr.length; i++) {
    acc = acc ? cb(protoArr[i], acc) : arr[i];
  }

  return acc;
};

let reducedArr = arr.myReduce((curr, acc) => {
  return curr + acc;
}, 0);

console.log(reducedArr);
