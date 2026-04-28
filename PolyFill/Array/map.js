console.log(
  "Map----------------------------------------------------------------------",
);

let arr = [1, 2, 3, 4, 5];

/**
 * Polyfill for Array.prototype.map
 * Creates a new array populated with the results of calling a provided function on every element in the calling array.
 *
 * @param {function} cb - A function to execute for each element in the array. Its return value is added as a single element in the new array.
 *   The function is called with three arguments:
 *   - currentValue: The current element being processed in the array.
 *   - index (optional): The index of the current element being processed in the array.
 *   - array (optional): The array map was called upon.
 * @returns {Array} A new array with each element being the result of the callback function.
 * @throws {Error} If the callback is not a function.
 *
 * How it works:
 * 1. Checks if the callback is a function, throws an error if not.
 * 2. Initializes an empty result array.
 * 3. Iterates through each element of the array using a for loop.
 * 4. Calls the callback function for each element with the element, its index, and the original array.
 * 5. Pushes the return value of the callback to the result array.
 * 6. Returns the result array containing the transformed elements.
 */
Array.prototype.myMap = function (cb) {
  if (typeof cb !== "function") {
    throw new Error("CB is not a function");
  }

  let protoArr = this;
  let resArr = [];

  for (let i = 0; i < protoArr.length; i++) {
    resArr.push(cb(protoArr[i], i, protoArr));
  }

  return resArr;
};

let protoMap = arr.myMap((el) => {
  return el * 2; // Example: double each element
});

console.log(protoMap);
