let lists = document.querySelectorAll(".list");
let leftBox = document.querySelector(".leftBox");
let rightBox = document.querySelector(".rightBox");

let selected = null;

for (let list of lists) {
  list.addEventListener("dragstart", (e) => {
    selected = e.target;
  });
}

rightBox.addEventListener("dragover", (e) => {
  e.preventDefault();
  // selected.classList.add("partial-add-style");
  // rightBox.appendChild(selected);
  // selected.classList.remove("partial-add-style");
});

rightBox.addEventListener("drop", (e) => {
  rightBox.appendChild(selected);
  selected = null;
});

leftBox.addEventListener("dragover", (e) => {
  e.preventDefault();
});

leftBox.addEventListener("dragover", (e) => {
  e.preventDefault();
});

leftBox.addEventListener("drop", (e) => {
  leftBox.appendChild(selected);
  selected = null;
});
