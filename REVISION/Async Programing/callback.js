/**
 * CALLBACKS IN JAVASCRIPT
 *
 * @description
 * Callbacks are the original async pattern in JavaScript. You pass a function
 * into another function, and it gets called when the work is done. This works
 * well for one operation, but chains of dependent async tasks can create deeply
 * nested "callback hell" that is hard to read and debug.
 *
 * Most important things to know:
 * - A callback is a function passed as an argument to another function.
 * - The callback is executed after an asynchronous operation completes.
 * - Nested callbacks can lead to pyramid-shaped code and harder error handling.
 * - Error-first callbacks are a common convention: `callback(err, result)`.
 */

/**
 * Simulates an asynchronous operation using a callback.
 *
 * @param {string} taskName - The name of the task.
 * @param {function(Error|null, string=): void} callback - The callback invoked after completion.
 */
function doTaskWithCallback(taskName, callback) {
  setTimeout(() => {
    if (!taskName) {
      return callback(new Error("Task name is required"));
    }
    callback(null, `Completed callback task: ${taskName}`);
  }, 1000);
}

// Example usage
doTaskWithCallback("Load data", (err, result) => {
  if (err) {
    console.error("Callback error:", err.message);
    return;
  }

  console.log(result);

  // Nested callback example
  doTaskWithCallback("Process data", (err2, result2) => {
    if (err2) {
      console.error("Callback error:", err2.message);
      return;
    }

    console.log(result2);
    doTaskWithCallback("Save data", (err3, result3) => {
      if (err3) {
        console.error("Callback error:", err3.message);
        return;
      }

      console.log(result3);
    });
  });
});
