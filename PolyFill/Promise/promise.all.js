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

/**
 * Polyfill for Promise.all
 * Returns a single promise that resolves when all of the provided promises have resolved,
 * or rejects as soon as one of them rejects.
 *
 * @param {Array} args - An iterable of promises to wait for.
 * @returns {Promise} A new promise that:
 *   - Resolves with an array of results in the same order as the input promises when ALL resolve.
 *   - Rejects immediately with the reason of the first promise that rejects.
 *
 * How it works:
 * 1. Creates and returns a new Promise that acts as a wrapper.
 * 2. Spreads the input args into an array and initializes a resultArr (to store values), and completed counter.
 * 3. Iterates through each promise using forEach with its index.
 * 4. Validates each item is an instance of Promise (type checking).
 *    - If not a Promise, immediately rejects the returned promise with an error message.
 *    - Returns early to prevent further processing.
 * 5. For each valid promise, chains .then() and .catch():
 *    - .then(): Stores the result at the corresponding index in resultArr, increments completed counter.
 *    - Checks if completed count equals total promises count.
 *    - If all completed, resolves the returned promise with resultArr (preserves order).
 * 6. For each promise's .catch():
 *    - If ANY promise rejects, immediately rejects the returned promise with that error.
 *    - Short-circuits: Ignores other pending promises, does NOT wait for them to settle.
 * 7. If all promises resolve, returns array of their resolved values in original order.
 * 8. If any promise rejects, returns that rejection reason (only first rejection matters).
 * 9. Key difference from Promise.race: all waits for ALL to resolve, race settles on first settlement.
 * 10. Key difference from Promise.any: all rejects if ANY rejects, any rejects only if ALL reject.
 */
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
