const id = setInterval(() => {
  console.log("Running...");
}, 1000);

setTimeout(() => {
  clearInterval(id); // stops after 3 sec
}, 3000);
