const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Resolved From P1");
  }, 1000);
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

const resolveRace = (...args) => {
  return new Promise((resolve, reject) => {
    const allPromise = [...args];

    allPromise.forEach((promise, index) => {
      if (!(promise instanceof Promise)) {
        reject(`${promise} is not a Promise`);
        return;
      }
      promise.then(resolve).catch(reject);
    });
  });
};

resolveRace(p1, p2)
  .then((resolveArr) => {
    console.log(resolveArr);
  })
  .catch((err) => {
    console.log("Error ", err.message);
  });

// Promise.race([p1, p2])
//   .then((resolveArr) => {
//     resolveArr.forEach((data) => {
//       console.log(data);
//     });
//   })
//   .catch((error) => {
//     console.log("Error", error.message);
//   });
