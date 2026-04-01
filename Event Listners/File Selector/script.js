const list = document.getElementById("list");
let lastSelectedIndex = null;

list.addEventListener("click", (e) => {
  let items = [...list.children];
  let clickedItem = e.target;

  if (clickedItem.tagName !== "LI") return;
  const index = items.indexOf(clickedItem);

  if (e.ctrlKey) {
    clickedItem.classList.toggle("selected");
    lastSelectedIndex = index;
    return;
  }

  items.forEach((item) => {
    item.classList.remove("selected");
  });
  clickedItem.classList.add("selected");
});

document.addEventListener("keydown", (e) => {
  let items = [...list.children];
  if (e.key === "q") {
    items.forEach((item) => {
      item.classList.remove("selected");
    });
    alert("Style Refress");
  }
});
