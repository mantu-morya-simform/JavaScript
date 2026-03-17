// JS String Methods

let arr = [1, 2, 3, 4];

// 1.  length :- to check the length of Arrays
console.log(arr.length);
// 2. push()
arr.push(5);
console.log(arr);
// 3.  pop()
arr.pop();
console.log(arr);
// 4.  unshift()
arr.unshift(0);
console.log(arr);
// 5.  shift()
arr.shift();
console.log(arr);
// 6.  slice
console.log(arr.slice(0, 2));
// 7.  includes()
console.log(arr.includes(3));
// 8.  indexOf()
console.log(arr.indexOf(4));
// 9.  splice
arr.splice(1, 0, 7, 8);
console.log(arr);
// 10.  concat()
let arr1 = [2, 3, 4];
let arr2 = [5, 6, 7];
let newArr = arr1.concat(arr2);
console.log(newArr);
// 11.  join()
let aftJoinArr = [3, 5, 7, 8];
let joinArr = aftJoinArr.join("-");
console.log(joinArr);
// 12.  reverse()
console.log(aftJoinArr.reverse()); // [8, 7, 5, 3]

// 13.  reverse()
let sortArr = [5, 2, 9, 6];
console.log(sortArr.sort()); // [2, 5, 6, 9]

// 14.  forEach()
arr.forEach((x) => {
  console.log(x);
});

// 15.  map()
dobuleArr = arr.map((x) => {
  return x * 2;
});

console.log(dobuleArr);

// 16.  filter()

evenArr = arr.filter((x) => {
  return x % 2 == 0;
});

console.log(evenArr);

// 17. reduce()
let sumOfArr = arr.reduce((acc, curr) => {
  return acc + curr;
});

console.log(sumOfArr);
