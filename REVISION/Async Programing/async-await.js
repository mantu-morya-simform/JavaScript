/**
 * Async/Await in JavaScript
 *
 * @description
 * Async/await was introduced in ES2017 and is built on top of Promises.
 * Mark a function `async` and use `await` to pause execution until a Promise
 * resolves. The code reads top-to-bottom like synchronous code, and error
 * handling uses familiar `try/catch`.
 *
 * Most important things to know:
 * - `await` does not block the thread — it only pauses that one async function
 *   and lets other code run.
 * - Sequential `await` calls (one after another) are slower than `Promise.all()`
 *   when tasks are independent.
 * - `Promise.all()` is "fail-fast" — if any one promise rejects, the whole thing
 *   rejects immediately.
 * - An async function always returns a Promise, even if you return `42`.
 */

/**
 * Demonstrates async/await with a simple delay wrapped in a Promise.
 *
 * @param {string} name - The name to print after the asynchronous delay.
 * @returns {Promise<void>} A promise that resolves after the async work is complete.
 */
async function PrintName(name) {
  console.log("Async Await Start");

  await new Promise((resolve) => {
    setTimeout(() => {
      console.log(name);
      resolve();
    }, 1000);
  });

  console.log("Async Await End");
}

console.log("Before Async Function");
PrintName("Mantu Morya");
console.log("After Async Function");
