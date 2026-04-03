// let btnElement = document.querySelector(".btn");

// let downTime = 0;

// btnElement.addEventListener("mousedown", () => {
//   downTime = Date.now();
//   console.log("Mouse Down At:", new Date(downTime).toLocaleString());
// });

// btnElement.addEventListener("mouseup", () => {
//   let upTime = Date.now();
//   console.log("Mouse Up At:", new Date(upTime).toLocaleString());

//   let duration = (upTime - downTime) / 1000;

//   if (duration > 3) {
//     alert(`Held For: ${duration.toFixed(2)} seconds`);
//   }
// });
/*
const executeOnLongPress = (element, time, callback, ...args) => {
  let downTime = 0;

  element.addEventListener("mousedown", (e) => {
    downTime = e.timeStamp;
  });

  element.addEventListener("mouseup", (e) => {
    let upTime = e.timeStamp;
    let duration = (upTime - downTime) / 1000; //time in second

    if (duration >= time) {
      callback(...args);
    }
  });
};
*/

// import { executeOnLongPress } from "https://cdn.jsdelivr.net/gh/mantu-morya-simform/JS-Questions@main/my-js-utils/longPress.js";
// function callback(name, age) {
//   alert(`${name} is ${age} years old`);
// }

// let btnElement = document.querySelector("button");

// executeOnLongPress(btnElement, 2, callback, "mantu", 21);

// executeOnLongPress("btn");

let flag = false;
function callback() {
  flag = !flag; // toggle true/false
  document.body.style.backgroundColor = flag ? "red" : "white";
}

let btnElement = document.querySelector("button");
// import { executeOnLongPress } from "./longPress.js";
import { executeOnLongPress } from "https://cdn.jsdelivr.net/gh/mantu-morya-simform/JS-Questions@388d31ffc69e59f74332379837fa5ebad97c8ae3/my-js-utils/longPress.js";

executeOnLongPress(btnElement, 2, callback);
