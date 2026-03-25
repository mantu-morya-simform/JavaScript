/*
 
   1. what is async ?  
    async function always return a promise in any condition if not any promise then it wrap
    it to a promise and then return even if a normol message is there 

   2. What is await ?
    Async and awat both are used to handle async programing / promises before async/awat we are using the
    promise where chaning problem are there so reduce chainig problem we using async/await cause its modern
    and efficient way to handle async prog/promises
    -> and await is only be used inside an async function  and write the await infront promise and it resolves the promise

   3. How Async Await Works behind the seans ?
   4. Examples of using async/await
   5. Error Handling
   6. Interviews
   7. Async Await vs Promise.then/.catch

*/

/*

// 1.

const p = new Promise((resolve, reejct) => {
  resolve("Promise Resolved Value!!");
});

//always returen a promise in any case
async function getData() {
  return p;
}

const dataPromise = getData();

dataPromise.then((data) => {
  console.log(data);
});





*/

// 2.

const p = new Promise((resolve, reejct) => {
  setTimeout(() => {
    resolve("Promise Resolved Value!!");
  }, 1000);
});

/*

  // in promise.then case thats why we use async await 

//always returen a promise in any case
async function getData() {
  //here js Engine is not wait to promise to be resolved moved to next line and perform task present on next line
  p.then((data) => console.log(data));

  console.log("i am mantu");
}

getData(); //Promise Resolved Value!!


*/

//await can only be usedinside async function
//always returen a promise in any case
async function getData() {
  console.log("Hello World");
  //here js Engine is wait to promise to be resolved then moved to next line and perform task present on next line
  const data = await p;
  console.log(data);

  console.log("i am mantu");
}

getData(); //Promise Resolved Value!!
