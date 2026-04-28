const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Resolved From P1");
  }, 4000);
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Resolved From P2");
  }, 2000);
});

const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Resolved From P3");
  }, 2000);
});

const p4 = new Promise((resolve, reject) => {
  let msg = "";
  setTimeout(() => {
    if (msg.length === 0) {
      reject(new Error("Reject From P4"));
    }
    resolve("Resolved From P4");
  }, 2000);
});

const resolveAny = (...args) => {
  return new Promise((resolve, reject) => {
    const allPromise = [...args];
    let errors = [];
    let rejectCount = 0;

    allPromise.forEach((promise, index) => {
      Promise.resolve(promise)
        .then((value) => {
          resolve(value); // if ANY resolves → DONE
        })
        .catch((err) => {
          errors[index] = err;
          rejectCount++;

          // If ALL rejected → give array of errors
          if (rejectCount === allPromise.length) {
            reject(errors);
          }
        });
    });
  });
};

resolveAny(p1, p2, p3, p4)
  .then((resolveArr) => {
    console.log(resolveArr);
  })
  .catch((err) => {
    console.log("Error ", err.message);
  });

// Promise.any([p1, p2])
//   .then((resolveArr) => {
//     resolveArr.forEach((data) => {
//       console.log(data);
//     });
//   })
//   .catch((error) => {
//     console.log("Error", error.message);
//   });
