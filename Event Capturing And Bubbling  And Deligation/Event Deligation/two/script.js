// so have three element if i chose normol element listnears then i use three eventListnears but in case of event delegation we only use one that manage three Element
document.querySelector("#form").addEventListener("keyup", (e) => {
  if (e.target.dataset.uppercase !== undefined) {
    e.target.value = e.target.value.toUpperCase();
  }
});
