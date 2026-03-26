console.log("");
console.log("Acess The Elements");
const firstPara = document.getElementById("p-1");
console.log(firstPara.outerHTML);

const firstHeading = document.getElementById("fhead");
console.log(firstHeading);

const allPara = document.getElementsByClassName("mypara");
console.log(allPara);

const paraTag = document.getElementsByTagName("p");
console.log(paraTag);

const fpara = document.querySelector("p"); //can use class, id , tag  return single selected element
console.log(fpara);

const fheadById = document.querySelector("#fhead"); //can use class, id , tag  return single selected element
console.log(fheadById);

const fparaById = document.querySelector(".mypara"); //can use class, id , tag  return single selected element
console.log(fparaById);

const fparaAll = document.querySelectorAll("p"); //can use class, id , tag  return single selected element
console.log(fparaAll);

const fheadByIdAll = document.querySelectorAll("#fhead"); //can use class, id , tag  return single selected element
console.log(fheadByIdAll);

const fparaByIdAll = document.querySelectorAll(".mypara"); //can use class, id , tag  return single selected element
console.log(fparaByIdAll);

console.log("");
console.log("Set/Update The Elements");

// 1.innerHtml
const button = document.querySelector("#btn-1");
console.log(button.innerHTML); //getting the value of button inner html
button.innerHTML = '<p id="btn-para">Mantu</p>'; //setting the value of button inner html
console.log(button.innerHTML);

// 2.outerHtml
const button_outer = document.querySelector("#btn-1");
console.log(button_outer.outerHTML); //getting the value of button outer html
button.outerHTML = '<input type="submit" id="btn-1"></input>'; //setting the value of button outer html
console.log(button.innerHTML);

// 3.TextContent
const firstDiv = document.querySelector(".fdiv");
console.log(firstDiv);
let textContent = firstDiv.textContent;
console.log(textContent);
firstDiv.textContent = `
        This is My first
         Para Text 
      
       This is My second para`;
textContent = firstDiv.textContent;
console.log(textContent);

// 3.innerText
let paraElement = document.querySelector(".about-para");
console.log("Before :", paraElement.innerText);
paraElement.innerText = "I am Mantu Kumar Morya";
console.log("After :", paraElement.innerText);

console.log("");
console.log("Add The Elements into Dom");

// create element
let newparaElement = document.createElement("p");
newparaElement.textContent = "I am an SDE Trainee";
// Select Parent element
let parentElement = document.querySelector("body");
parentElement.appendChild(newparaElement);
//after adding element
console.log(parentElement);

//add element at preferable position

let newElement = document.createElement("h3");
newElement.textContent = "This is me Mantu Morya";
let divELement = document.querySelector("#myDiv");
divELement.insertAdjacentElement("beforebegin", newElement); //append at before start point
divELement.insertAdjacentElement("beforeend", newElement); //append at before end point
// divELement.insertAdjacentElement("afterbegin", newElement);  //append at immeadate after start point
// divELement.insertAdjacentElement("afterEnd", newElement);    //append at after end point
console.log(divELement);

console.log("");
console.log("Remove The Elements into Dom");

const parent = document.querySelector("#myDiv");
const child = document.querySelector("#fourpara");
parent.removeChild(child);
console.log(parent);
