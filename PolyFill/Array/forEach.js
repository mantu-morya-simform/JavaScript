console.log(
  "For Each----------------------------------------------------------------------",
);

let arr = [1, 2, 3, 4, 5];

Array.prototype.myForEach = function (cb) {
  if (typeof cb !== "function") {
    throw new TypeError("cb must be a function");
  }

  let protoArr = this;
  for (let i = 0; i < protoArr.length; i++) {
    cb(protoArr[i], i, protoArr);
  }
};

arr.myForEach((el) => {
  console.log(el);
});
