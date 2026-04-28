console.log(
  "Filter ----------------------------------------------------------------------",
);

let arr = [1, 2, 3, 4, 5];

/**
 * Polyfill for Array.prototype.filter
 * Creates a new array with all elements that pass the test implemented by the provided function.
 *
 * @param {function} cb - A function to test each element of the array. It should return a boolean value.
 *   The function is called with three arguments:
 *   - currentValue: The current element being processed in the array.
 *   - index (optional): The index of the current element being processed in the array.
 *   - array (optional): The array filter was called upon.
 * @returns {Array} A new array with the elements that pass the test. If no elements pass the test, an empty array is returned.
 * @throws {Error} If the callback is not a function.
 *
 * How it works:
 * 1. Checks if the callback is a function, throws an error if not.
 * 2. Initializes an empty result array.
 * 3. Iterates through each element of the array using a for loop.
 * 4. Calls the callback function for each element with the element, its index, and the original array.
 * 5. If the callback returns true, pushes the element to the result array.
 * 6. Returns the result array containing only the elements that passed the test.
 */
Array.prototype.myFilter = function (cb) {
  if (typeof cb !== "function") {
    throw new Error("CB is not a function");
  }

  let protoArr = this;
  let resArr = [];
  for (let i = 0; i < protoArr.length; i++) {
    if (cb(protoArr[i], i, protoArr)) {
      resArr.push(protoArr[i]);
    }
  }

  return resArr;
};

let filteredArr = arr.myFilter((el) => el > 2);

console.log(filteredArr);
