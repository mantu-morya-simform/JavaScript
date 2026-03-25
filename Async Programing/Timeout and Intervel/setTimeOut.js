const id = setTimeout(() => {
  console.log("Will not run");
}, 2000);
clearInterval(id);
