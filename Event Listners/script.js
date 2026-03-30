// 1.add event listeners

//target
const firstPara = document.querySelector("#fpara");

//action/ event Listeners
const chengeParaText = () => {
  firstPara.textContent = "Hello! How Are You";
};

//add event Listeners
firstPara.addEventListener("click", chengeParaText);

// 2.remove event listeners
firstPara.removeEventListener("click", chengeParaText);

// 3. get object event and prevent defaultbehaviour

const anchorElement = document.querySelector("#fA");
//event object
const anchorAction = (event) => {
  event.preventDefault(); //prevent Default Behaviou of the anchor tag
  anchorElement.textContent = "Link Clicked ";
};
anchorElement.addEventListener("click", anchorAction);

// add eent listeners to all paras and print when i click on it

// first Approch  not good approch cause here i create multople event listeners for same action

/*
const allPara = document.querySelectorAll("p");

for (let i = 0; i < allPara.length; i++) {
  let para = allPara[i];
  para.addEventListener("click", (e) => {
    alert(`You Clicked ${e.target.textContent}`);
  });
}
*/

// second Approch  not good approch cause apply listners to chlid
/*
const allPara = document.querySelectorAll("p");
const paraClickFn = (e) => {
  alert(`You Clicked ${e.target.textContent}`);
};
for (let i = 0; i < allPara.length; i++) {
  let para = allPara[i];
  para.addEventListener("click", paraClickFn);
}
*/

// third Approch good approch cause apply listners to parent and once

const divElement = document.querySelector("#wrapper");
const paraClickFn = (e) => {
  if (e.target.nodeName === "SPAN") {
    alert(`You Clicked ${e.target.textContent}`);
  }
};

divElement.addEventListener("click", paraClickFn);
