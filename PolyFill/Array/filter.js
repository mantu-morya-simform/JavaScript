console.log(
  "Filter ----------------------------------------------------------------------",
);

let arr = [1, 2, 3, 4, 5];

Array.prototype.myFilter = function (cb) {
  if (typeof cb !== "function") {
    throw new Error("CB is not a function");
  }

  let protoArr = this;
  let resArr = [];
  for (let i = 0; i < protoArr.length; i++) {
    if (cb(protoArr[i], i, protoArr)) {
      resArr.push(protoArr[i]);
    }
  }

  return resArr;
};

let filteredArr = arr.myFilter((el) => el > 2);

console.log(filteredArr);
