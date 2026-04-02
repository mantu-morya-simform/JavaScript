let copyPara = document.querySelector("#cpy-para");
let copyButton = document.querySelector("#cpy-button");
let cutButton = document.querySelector("#cut-button");
let pastArea = document.querySelector("#past-area");

copyButton.addEventListener("click", async () => {
  let text = copyPara.textContent;
  await navigator.clipboard.writeText(text);
  alert("Copied..");
});

cutButton.addEventListener("click", async () => {
  let text = copyPara.textContent;
  await navigator.clipboard.writeText(text);
  copyPara.textContent = "";
  alert("Cut..");
});

pastArea.addEventListener("keydown", async (e) => {
  e.preventDefault();
  if (e.ctrlKey && e.key == "p") {
    let text = await navigator.clipboard.readText();
    pastArea.textContent = text;
  }
});
