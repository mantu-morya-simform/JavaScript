/**
 * PROMISES IN JAVASCRIPT
 *
 * @description
 * Promises were introduced in ES6 as a cleaner async abstraction. A Promise
 * represents a future value with three states: pending, fulfilled, or rejected.
 * You chain `.then()` for success and `.catch()` for errors, and use
 * `Promise.all()` to run multiple operations in parallel.
 *
 * Most important things to know:
 * - A Promise is an object representing the eventual completion or failure of an async task.
 * - `.then()` handles fulfillment, `.catch()` handles rejection.
 * - `Promise.all()` is fail-fast: if any promise rejects, the whole result rejects.
 * - Promises make async flow more readable than nested callbacks.
 */

/**
 * Simulates an asynchronous operation returning a Promise.
 *
 * @param {string} taskName - The name of the task.
 * @returns {Promise<string>} A promise that resolves with a result string.
 */
function doTaskWithPromise(taskName) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!taskName) {
        reject(new Error("Task name is required"));
        return;
      }
      resolve(`Completed promise task: ${taskName}`);
    }, 1000);
  });
}

// Example usage
doTaskWithPromise("Load data")
  .then((result) => {
    console.log(result);
    return doTaskWithPromise("Process data");
  })
  .then((result) => {
    console.log(result);
    return doTaskWithPromise("Save data");
  })
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.error("Promise error:", error.message);
  });

// // Parallel example with Promise.all
// Promise.all([doTaskWithPromise("Fetch user"), doTaskWithPromise("Fetch posts")])
//   .then((results) => {
//     console.log("Parallel results:", results);
//   })
//   .catch((error) => {
//     console.error("Promise.all error:", error.message);
//   });
