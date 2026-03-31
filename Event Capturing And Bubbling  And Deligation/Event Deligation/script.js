// so have three element if i chose normol element listnears then i use three eventListnears but in case of event delegation we only use one that manage three Element
document.querySelector("#category").addEventListener("click", (e) => {
  if (e.target.tagName === "LI") {
    window.location.href = "/" + e.target.id;
  }
});
