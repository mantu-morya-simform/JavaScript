const p1 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Data is Present! Data From Promise-1");
    }, 2000);
  });
};

const p2 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("Data is not Present! Got Error In Promise-2");
    }, 2000);
  });
};

Promise.allSettled([p1(), p2()]).then((results) => {
  results.map((result) => {
    if (result.status === "fulfilled") {
      console.log("value :", result.value);
    } else {
      console.log("reasion for Rejection :", result.reason);
    }
  });
});
