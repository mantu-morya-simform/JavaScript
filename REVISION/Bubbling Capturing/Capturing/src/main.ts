const grandparent = document.querySelector(".grand-parent");
const parent = document.querySelector(".parent");
const child = document.querySelector(".child");

grandparent.addEventListener(
  "click",
  (e) => {
    alert("Grand parent Clicked");
    e.stopPropagation();
  },
  true,
);

parent.addEventListener(
  "click",
  () => {
    alert("Parent Clicked");
  },
  true,
);

child.addEventListener(
  "click",
  () => {
    alert("Child Clicked");
  },
  true,
);
