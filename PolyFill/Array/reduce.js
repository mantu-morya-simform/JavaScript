console.log(
  "Filter ----------------------------------------------------------------------",
);

let arr = [1, 2, 3, 4, 5];

/**
 * Polyfill for Array.prototype.reduce
 * Executes a reducer function on each element of the array, resulting in a single output value.
 *
 * @param {function} cb - A function to execute on each element in the array.
 *   The function is called with four arguments:
 *   - accumulator: Accumulates callback's return values; it is the accumulated value previously returned.
 *   - currentValue: The current element being processed in the array.
 *   - index (optional): The index of the current element being processed in the array.
 *   - array (optional): The array reduce was called upon.
 * @param {*} initialState - Value to use as the first argument to the first call of the callback.
 * @returns {*} The single value resulting from the reduction.
 * @throws {Error} If the callback is not a function.
 *
 * How it works:
 * 1. Checks if callback is a function, throws error if not.
 * 2. Initializes accumulator with the provided initialState value.
 * 3. Iterates through each element of the array using a for loop.
 * 4. For each element, calls the callback with the accumulator and current element.
 * 5. Updates accumulator with the return value from the callback.
 * 6. After all elements are processed, returns the final accumulator value.
 * 7. The accumulator persists across iterations, accumulating the result.
 */
Array.prototype.myReduce = function (cb, initialState) {
  if (typeof cb !== "function") {
    throw new Error("CB is not a function");
  }

  let protoArr = this;
  let acc = initialState;
  for (let i = 0; i < protoArr.length; i++) {
    acc = acc ? cb(protoArr[i], acc) : arr[i];
  }

  return acc;
};

let reducedArr = arr.myReduce((curr, acc) => {
  return curr + acc;
}, 0);

console.log(reducedArr);
