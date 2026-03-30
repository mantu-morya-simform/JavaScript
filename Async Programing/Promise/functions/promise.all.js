const p1 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Data From Promise-1");
    }, 2000);
  });
};

const p2 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Data From Promise-3");
    }, 2000);
  });
};

const p3 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Data From Promise-3");
    }, 2000);
  });
};

Promise.all([p1()\, p2(), p3()])
  .then((responseArray) => {
    console.log("Response Array", responseArray);
  })
  .catch((error) => {
    console.log("Error", error.message);
  });
