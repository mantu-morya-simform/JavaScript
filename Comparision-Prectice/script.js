console.log(null == +"\n0\n");
console.log("\t \n" + 2);

// Set 1 – Type Conversion with +

console.log("5" + 2);
console.log("5" - 2);
console.log("5" * "2");
console.log("5" / "2");
console.log("5" + true);
console.log("5" - true);

// Set 2 – Boolean Conversion

console.log(true + true);
console.log(true + false);
console.log(false + 10);
console.log(true * 5);
console.log(false * 5);

// Set 3 – null and undefined

console.log(null + 5);
console.log(undefined + 5);
console.log(null == 0);
console.log(null >= 0);
console.log(undefined == null);
console.log(undefined === null);

// Set 4 – Whitespace and Strings

console.log("   " + 2);
console.log("   " - 2);
console.log("\n" + 2);
console.log("\t" - 2);
console.log(" \n\t " * 2);

// Set 5 – Unary + Conversion

console.log(+"5");
console.log(+true);
console.log(+false);
console.log(+null);
console.log(+undefined);
console.log(+"");
console.log(+"   ");
console.log(+"\n");

// Set 6 – Equality Tricky Cases

console.log(false == 0);
console.log(false === 0);
console.log("" == 0);
console.log("" === 0);
console.log("0" == false);
console.log("0" === false);

// Set 7 – Order of Operations

console.log("7" + 2 + 3);
console.log(7 + 2 + "3");
console.log("7" + (2 + 3));
console.log(7 + (2 + "3"));

// Set 8 – Weird Ones (Like Your Question)

console.log(null == +"\n0\n");
console.log("\t \n" + 2);
console.log(+"\t \n");
console.log("\n" == 0);
console.log("\n" == false);
console.log("\n" + 5);

// Set 9 – Advanced Coercion
console.log([] + []);
console.log([] + 1);
console.log([1] + 1);
console.log([1, 2] + 1);
console.log([] == 0);
console.log([] == "");

// Set 10 – Real Brain Teasers
console.log([] == ![]);
console.log("" == false);
console.log("" === false);
console.log([0] == false);
console.log([null] == 0);
