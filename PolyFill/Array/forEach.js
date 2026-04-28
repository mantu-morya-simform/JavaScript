console.log(
  "For Each----------------------------------------------------------------------",
);

let arr = [1, 2, 3, 4, 5];

/**
 * Polyfill for Array.prototype.forEach
 * Executes a provided function once for each array element.
 *
 * @param {function} cb - A function to execute for each element in the array. It does not return a value.
 *   The function is called with three arguments:
 *   - currentValue: The current element being processed in the array.
 *   - index (optional): The index of the current element being processed in the array.
 *   - array (optional): The array forEach was called upon.
 * @throws {TypeError} If the callback is not a function.
 * @returns {undefined} forEach always returns undefined.
 *
 * How it works:
 * 1. Checks if the callback parameter is a function, throws TypeError if not.
 * 2. Gets a reference to the current array using 'this'.
 * 3. Iterates through each element using a for loop from index 0 to array.length - 1.
 * 4. For each element, calls the callback function with the current element, its index, and the entire array.
 * 5. Returns undefined (forEach does not return a new array).
 * 6. Note: Cannot break or continue the loop early like with for...of.
 */
Array.prototype.myForEach = function (cb) {
  if (typeof cb !== "function") {
    throw new TypeError("cb must be a function");
  }

  let protoArr = this;
  for (let i = 0; i < protoArr.length; i++) {
    cb(protoArr[i], i, protoArr);
  }
};

arr.myForEach((el) => {
  console.log(el);
});
