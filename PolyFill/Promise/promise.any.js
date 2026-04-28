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

/**
 * Polyfill for Promise.any
 * Returns a promise that fulfills as soon as one of the promises in the iterable fulfills.
 * It will only reject if ALL promises reject.
 *
 * @param {Array} args - An iterable of promises to wait for.
 * @returns {Promise} A new promise that resolves when ANY promise resolves, or rejects with an array of all errors if ALL reject.
 *
 * How it works:
 * 1. Creates and returns a new Promise.
 * 2. Spreads the input args into an array and initializes an empty errors array and rejectCount counter.
 * 3. Iterates through each promise using forEach with its index.
 * 4. Wraps each item with Promise.resolve() to handle non-promise values.
 * 5. For each promise's .then() (success):
 *    - Immediately resolves the returned promise with that value.
 *    - The promise settles as soon as ANY promise resolves (short-circuits).
 * 6. For each promise's .catch() (failure):
 *    - Stores the error at the corresponding index in the errors array.
 *    - Increments the rejectCount counter.
 *    - Checks if rejectCount equals the total number of promises.
 *    - If all have rejected, rejects the returned promise with the errors array.
 * 7. If at least one promise resolves, Promise.any succeeds and ignores other rejections.
 * 8. If all promises reject, the returned promise rejects with an array containing all errors.
 * 9. Key difference from Promise.race: race settles on FIRST settlement (resolve or reject),
 *    while any settles on first RESOLVE only (rejects only if ALL reject).
 */
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
