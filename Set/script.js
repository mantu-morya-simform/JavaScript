let set = new Set();

// 1. add()
set.add(1);
set.add(2);
set.add(2);
set.add(3);

console.log(set);

// 2. Delete()
set.delete(3);
console.log(set);

// 3. has()
console.log(set.has(2));

// 4. size
console.log(set.size);

// 5. Ittaration
console.log("ittration Start");

for (let val of set) {
  console.log(val);
}
set.forEach((x) => {
  console.log(x);
});

console.log("ittration End");

// 6. clear()
// set.clear();
// console.log(set);

// 7. return unique Array

const uniqueArr = (arr) => {
  return [...new Set(arr)];
};

let arr = [1, 2, 3, 3, 4, 4, 5];
console.log(uniqueArr(arr));

//  8. Union

let a = new Set([1, 2, 3]);
let b = new Set([3, 4, 5]);
let union = new Set([...a, ...b]);
console.log(union);

//  8. intersection

let interSectionItems = new Set([...a].filter((x) => b.has(x)));
console.log(interSectionItems);

//  8. difference

let difference = new Set([
  ...[...a].filter((x) => !b.has(x)),
  ...[...b].filter((x) => !a.has(x)),
]);
console.log(difference);
