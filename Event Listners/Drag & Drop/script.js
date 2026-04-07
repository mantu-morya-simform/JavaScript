let lists = document.querySelectorAll(".list");
let leftBox = document.querySelector(".leftBox");
let rightBox = document.querySelector(".rightBox");

for (let list of lists) {
  list.addEventListener("dragstart", (e) => {
    let selected = e.target;
    rightBox.addEventListener("dragover", (e) => {
      e.preventDefault();
    });
    rightBox.addEventListener("drop", (e) => {
      rightBox.appendChild(selected);
      selected = null;
    });

    leftBox.addEventListener("dragover", (e) => {
      e.preventDefault();
    });
    leftBox.addEventListener("drop", (e) => {
      leftBox.appendChild(selected);
      selected = null;
    });
  });
}
