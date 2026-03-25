/*
// 1.
const p = new Promise((resolve, reejct) => {
  setTimeout(() => {
    resolve("Promise Resolved Value!!");
  }, 5000);
});

async function getData() {
  console.log("Hello World");
  const data1 = await p;
  console.log(data1);
  console.log("i am mantu-1");

  const data2 = await p;
  console.log(data2);
  console.log("i am mantu-2");
}

getData();


// Output :

// Hello World

//after 5 sec
// Promise Resolved Value!!
// i am mantu-1
// Promise Resolved Value!!
// i am mantu-2

*/

/*

// 2.
const p1 = new Promise((resolve, reejct) => {
  setTimeout(() => {
    resolve("Promise Resolved Value!!");
  }, 5000);
});

const p2 = new Promise((resolve, reejct) => {
  setTimeout(() => {
    resolve("Promise Resolved Value!!");
  }, 2000);
});

async function getData() {
  console.log("Hello World");
  const data1 = await p1;
  console.log(data1);
  console.log("i am mantu-1");

  const data2 = await p2;
  console.log(data2);
  console.log("i am mantu-2");
}

getData();

// Output :

// Hello World

//after 5 sec
// Promise Resolved Value!!
// i am mantu-1
// Promise Resolved Value!!
// i am mantu-2

*/

// 3.

const p1 = new Promise((resolve, reejct) => {
  setTimeout(() => {
    resolve("Promise Resolved Value!!");
  }, 2000);
});

const p2 = new Promise((resolve, reejct) => {
  setTimeout(() => {
    resolve("Promise Resolved Value!!");
  }, 5000);
});

async function getData() {
  console.log("Hello World");
  const data1 = await p1;
  console.log(data1);
  console.log("i am mantu-1");

  const data2 = await p2;
  console.log(data2);
  console.log("i am mantu-2");
}

getData();

// Output :

//after 2 sec
// Hello World
// Promise Resolved Value!!

//after 5 sec
// i am mantu-1
// Promise Resolved Value!!
// i am mantu-2
