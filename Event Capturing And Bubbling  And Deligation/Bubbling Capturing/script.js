//    bubbling Example
/*
document.querySelector("#grandparent").addEventListener(
  "click",
  () => {
    alert("Grandparent Clicked");
    document.querySelector("#grandparent").classList = "grandparent";
  },
  false,
);

document.querySelector("#parent").addEventListener(
  "click",
  () => {
    alert("Parent Clicked");
    document.querySelector("#parent").classList = "parent";
  },
  false,
);

document.querySelector("#child").addEventListener(
  "click",
  () => {
    alert("Child Clicked");
    document.querySelector("#child").classList = "child";
  },
  false,
);
*/

// Capturing Example
/*
document.querySelector("#grandparent").addEventListener(
  "click",
  () => {
    alert("Grandparent Clicked");
    document.querySelector("#grandparent").classList = "grandparent";
  },
  true,
);

document.querySelector("#parent").addEventListener(
  "click",
  () => {
    alert("Parent Clicked");
    document.querySelector("#parent").classList = "parent";
  },
  true,
);

document.querySelector("#child").addEventListener(
  "click",
  () => {
    alert("Child Clicked");
    document.querySelector("#child").classList = "child";
  },
  true,
);
*/

//  and Bubbling Mixed Example

/*
document.querySelector("#grandparent").addEventListener(
  "click",
  () => {
    alert("Grandparent Clicked");
    document.querySelector("#grandparent").classList = "grandparent";
  },
  true,
); //capturing

document.querySelector("#parent").addEventListener(
  "click",
  () => {
    alert("Parent Clicked");
    document.querySelector("#parent").classList = "parent";
  },
  false,
); //bubbling

document.querySelector("#child").addEventListener(
  "click",
  () => {
    alert("Child Clicked");
    document.querySelector("#child").classList = "child";
  },
  true,
); //capturing
*/

//  and Bubbling Mixed Example
/*
document.querySelector("#grandparent").addEventListener(
  "click",
  () => {
    alert("Grandparent Clicked");
    document.querySelector("#grandparent").classList = "grandparent";
  },
  true,
); //capturing

document.querySelector("#parent").addEventListener(
  "click",
  () => {
    alert("Parent Clicked");
    document.querySelector("#parent").classList = "parent";
  },
  false,
); //bubbling

document.querySelector("#child").addEventListener(
  "click",
  () => {
    alert("Child Clicked");
    document.querySelector("#child").classList = "child";
  },
  false,
); //bubbling

*/

//stop propogation to top and down

//Bubbling

/*
document.querySelector("#grandparent").addEventListener(
  "click",
  () => {
    alert("Grandparent Clicked");
    document.querySelector("#grandparent").classList = "grandparent";
  },
  false,
);

document.querySelector("#parent").addEventListener(
  "click",
  () => {
    alert("Parent Clicked");
    document.querySelector("#parent").classList = "parent";
  },
  false,
);

document.querySelector("#child").addEventListener(
  "click",
  (e) => {
    alert("Child Clicked");
    document.querySelector("#child").classList = "child";
    e.stopPropagation();
  },
  false,
);
*/

//Capturing

document.querySelector("#grandparent").addEventListener(
  "click",
  (e) => {
    alert("Grandparent Clicked");
    document.querySelector("#grandparent").classList = "grandparent";
    e.stopPropagation();
  },
  true,
);

document.querySelector("#parent").addEventListener(
  "click",
  () => {
    alert("Parent Clicked");
    document.querySelector("#parent").classList = "parent";
  },
  false,
);

document.querySelector("#child").addEventListener(
  "click",
  () => {
    alert("Child Clicked");
    document.querySelector("#child").classList = "child";
  },
  true,
);
