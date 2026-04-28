console.log(
  "Map----------------------------------------------------------------------",
);

let arr = [1, 2, 3, 4, 5];

Array.prototype.myMap = function (cb) {
  if (typeof cb !== "function") {
    throw new Error("CB is not a function");
  }

  let protoArr = this;
  let resArr = [];

  for (let i = 0; i < protoArr.length; i++) {
    cb(protoArr[i], i, protoArr);
    resArr.push(protoArr[i]);
  }

  return resArr;
};

let protoMap = arr.myMap((el) => {
  console.log(el);
});

console.log(protoMap);
