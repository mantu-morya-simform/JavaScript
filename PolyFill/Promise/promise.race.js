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

/**
 * Polyfill for Promise.race
 * Returns a promise that settles (resolves or rejects) as soon as one of the promises in the iterable settles.
 *
 * @param {Array} args - An iterable of promises to race.
 * @returns {Promise} A new promise that settles with the result of whichever promise settles first.
 *
 * How it works:
 * 1. Creates and returns a new Promise that acts as a wrapper.
 * 2. Spreads the input args into an array and stores it.
 * 3. Iterates through each promise using forEach with its index.
 * 4. Checks if each item is an instance of Promise (type validation).
 *    - If not a Promise, immediately rejects the returned promise with an error message.
 *    - Returns early to prevent further processing of non-promise values.
 * 5. For each valid promise, chains .then() and .catch():
 *    - .then(resolve) → if the promise resolves, resolves the returned promise with that value.
 *    - .catch(reject) → if the promise rejects, rejects the returned promise with that error.
 * 6. Only the FIRST promise to settle (either resolve or reject) determines the outcome.
 * 7. All other promises' results are ignored - they may resolve or reject but won't affect the returned promise.
 * 8. The returned promise inherits the settled state of the first promise to complete.
 * 9. Race condition: the order of settlement matters, not the array order.
 */
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
