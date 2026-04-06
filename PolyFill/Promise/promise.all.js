const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Resolved From P1");
  }, 2000);
});

const p2 = new Promise((resolve, reject) => {
  let msg = "";
  setTimeout(() => {
    if (msg.length === 0) {
      reject(new Error("Reject From P2"));
    }
    resolve("Resolved From P2");
  }, 2000);
});

const resolveAll = (...args) => {
  return new Promise((resolve, reject) => {
    const allPromise = [...args];
    let resultArr = [];
    let completed = 0;

    allPromise.forEach((promise, index) => {
      if (!(promise instanceof Promise)) {
        reject(`${promise} is not a Promise`);
        return;
      }
      promise
        .then((result) => {
          resultArr[index] = result;
          completed++;
          if (completed === allPromise.length) {
            resolve(resultArr);
          }
        })
        .catch((err) => {
          reject(err);
        });
    });
  });
};

resolveAll(p1, p2)
  .then((resolveArr) => {
    console.log(resolveArr);
  })
  .catch((err) => {
    console.log("Error ", err.message);
  });

// Promise.all([p1, p2])
//   .then((resolveArr) => {
//     resolveArr.forEach((data) => {
//       console.log(data);
//     });
//   })
//   .catch((error) => {
//     console.log("Error", error.message);
//   });
