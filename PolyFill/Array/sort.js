console.log(
  "Sort----------------------------------------------------------------------",
);

let arr = [1, 3, 2, 4, 0];

/**
 * Polyfill for Array.prototype.sort
 * Sorts the elements of the array in place and returns the sorted array.
 * This implementation uses the Bubble Sort algorithm for comparison-based sorting.
 *
 * @param {function} [compareFunction] - Specifies a function that defines the sort order.
 *   If omitted, the array elements are converted to strings and sorted by Unicode code point values.
 *   The compare function should return:
 *   - negative value if first argument < second argument
 *   - positive value if first argument > second argument
 *   - zero if they are equal
 * @returns {Array} Returns the sorted array. Note: Sorts the array in-place and returns a reference to the array.
 *
 * How it works:
 * 1. Gets a reference to the current array using 'this'.
 * 2. Uses nested for loops implementing a bubble sort algorithm:
 *    - Outer loop iterates from first element to second-to-last element.
 *    - Inner loop compares current element with all subsequent elements.
 * 3. For each pair compared, checks if the first element is greater than the second.
 * 4. If true, swaps the two elements using a temporary variable.
 * 5. After all iterations, the array is sorted in ascending order (for numbers).
 * 6. Returns the sorted array reference (modifies original array).
 * 7. Time Complexity: O(n²) in worst case due to bubble sort.
 */
Array.prototype.mySort = function () {
  let protoArr = this;

  for (let i = 0; i < protoArr.length - 1; i++) {
    for (let j = i + 1; j < protoArr.length; j++) {
      if (protoArr[i] > protoArr[j]) {
        let temp = protoArr[i];
        protoArr[i] = protoArr[j];
        protoArr[j] = temp;
      }
    }
  }

  return protoArr;
};

let sortedArray = arr.mySort();

console.log(sortedArray);
