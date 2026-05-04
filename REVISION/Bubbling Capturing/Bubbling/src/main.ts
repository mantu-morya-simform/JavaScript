const grandparent = document.querySelector(".grand-parent");
const parent = document.querySelector(".parent");
const child = document.querySelector(".child");

grandparent.addEventListener("click", () => {
  alert("Grand parent Clicked");
});

parent.addEventListener("click", (e) => {
  alert("Parent Clicked");
  e.stopPropagation();
});

child.addEventListener("click", () => {
  alert("Child Clicked");
});
