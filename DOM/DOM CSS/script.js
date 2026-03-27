//assign 1 style at a time element
let secondParaElement = document.querySelector("#spara");
secondParaElement.style.backgroundColor = "red";
secondParaElement.style.color = "white";

//assign multiple styles at a time to an element

let secondDivElement = document.querySelector("#sdiv");
console.log(secondDivElement.style.cssText);
secondDivElement.style.cssText =
  "background-color:black; color: white; padding: 0.5rem";

//setAttribute replece old attribute with new one

let firstParaElement = document.querySelector("#fpara");
firstParaElement.setAttribute("class", "para-1");
firstParaElement.setAttribute("style", "font-weight:bold");
console.log(firstParaElement.outerHTML);

//  get className

console.log(firstParaElement.className);
firstParaElement.className = "mantu-para satyam-para";
console.log(firstParaElement.className);
console.log(firstParaElement.outerHTML);
