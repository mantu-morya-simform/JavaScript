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

Promise.all([p1(), p2(), p3()])
  .then((responseArray) => {
    console.log("Response Array", responseArray);
  })
  .catch((error) => {
    console.log("Error", error.message);
  });

// 2nd way  (here in promise all if all promsie resolve then its go into the then part otherwise gome to catch part)

const p4 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Data From Promise-4");
    }, 2000);
  });
};

const p5 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("Got Error In Promise-3");
    }, 2000);
  });
};

Promise.all([p4(), p5()])
  .then((resArr) => {
    console.log("Resolve Promsie data", resArr);
  })
  .catch((err) => {
    console.log(err);
  });
