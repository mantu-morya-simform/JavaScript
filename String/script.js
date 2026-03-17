// JS String Methods

let str = "JavaScript";

// 1.  length :- to check the length of string
console.log(str.length);
// 2. toUpperCase
console.log(str.toUpperCase());
// 3.  toLowerCase
console.log(str.toLowerCase());
// 4.
console.log(str.includes("Script"));
// 5.  indexOf
console.log(str.indexOf("Script"));
// 6.  slice
console.log(str.slice(0, 4));
// 7.  substring
console.log(str.substring(4, 10));
// 8.  trim
let word = " Hello World ";
console.log(word.trim());
// 9.  replace
let sent = "Hello JS";
sent = sent.replace("World", "JavaScript");
console.log(sent);
// 10.  split
let fruts = "apple, Orange, Banana, Mango";
console.log(fruts.split(","));
// 11.  startsWith
console.log(str.startsWith("Java"));
// 12.  endsWith
console.log(str.endsWith("Script"));

// Some Modification

let st = "Hello";
console.log(st);
st[0] = "y"; //not possible
console.log(st);

// Why does this wor
// Because you're not modifying the original string. Instead, you're creating a new string
st = "y" + st.slice(1); //possible
console.log(st);

// Important Rule
// Strings are immutable, but variables holding strings are mutable.
// Meaning:
// Operation	                           Allowed
// Change character inside string	        ❌
// Create a new string and assign it	    ✅
