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

import { executeOnLongPress } from "https://cdn.jsdelivr.net/gh/mantu-morya-simform/JS-Questions/my-js-utils/longPress.js?v=1";
function callback(name, age) {
  alert(`${name} is ${age} years old`);
}

let btnElement = document.querySelector("button");
console.log(btnElement);

executeOnLongPress(btnElement, 2, callback, "mantu", 21);

// executeOnLongPress("btn");
