// function apiCall(){
//   console.log("APi Call");
// }

// function debounce(fn,delay){
//   let time;
//   return  function(...args){
//     clearTimeout(time);
//     time=setTimeout(()=> {
//       fn(...args)
//     }, delay);
//   }
// }

// const betterDebounce=debounce(apiCall,400);

// function throtle(fn,delay){
//   let flag=true;
//   return function(...args){
//       if (flag) {
//         flag=false;
//         setTimeout(()=>{
//         fn(...args);
//         flag=true;
//         },delay)
//       }
//   }
// }

// const betterThrotle=throtle(apiCall,400);

// Array polyFill

// 1. forEach

let arr = [1, 2, 3, 4, 5];

Array.prototype.myForEach = function (cb) {
  let polyArr = this;

  for (let i = 0; i < polyArr.length; i++) {
    cb(arr[i], i, polyArr);
  }
};

arr.myForEach((el) => {
  console.log(el);
});

// 2.  Map

Array.prototype.myMap = function (cb) {
  let polyArr = this;
  let resArr = [];

  for (let i = 0; i < polyArr.length; i++) {
    resArr.push(cb(polyArr[i], i, polyArr));
  }
  return resArr;
};

const mapArr = arr.myMap((el) => el * 2);
console.log(mapArr);

// 3.  Filter

Array.prototype.myFilter = function (cb) {
  let polyArr = this;
  let resArr = [];

  for (let i = 0; i < polyArr.length; i++) {
    if (cb(polyArr[i], i, polyArr)) {
      resArr.push(polyArr[i]);
    }
  }
  return resArr;
};

const filterArr = arr.myFilter((el) => el > 2);
console.log(filterArr);

// 4.  Reduce

Array.prototype.myReduce = function (cb, initialval) {
  let polyArr = this;
  let acc = initialval;

  for (let i = 0; i < polyArr.length; i++) {
    acc = acc ? cb(acc, polyArr[i]) : arr[i];
  }
  return acc;
};

const reducedArr = arr.myReduce((acc, curr) => {
  return acc + curr;
}, 0);
console.log(reducedArr);

// Function polyFill

// 1.call

const Mantu = {
  name: "Mantu Morya",
  id: "5",
};

const Satyam = {
  name: "Satyam Singh",
  id: "8",
};

function printDetail(...args) {
  const [city, state] = args;
  console.log(`Id:${this.id}, ${this.name}, From:${city}, ${state}`);
}

Function.prototype.mycall = function (context, ...args) {
  const fn = Symbol("fn");
  context[fn] = this;
  context[fn](...args);
};

printDetail.mycall(Mantu, "jaipur", "Rajsthan");
printDetail.mycall(Satyam, "JamsheadPur", "Jharkhand");

// 2. apply

function printDetailApply(args) {
  const [city, state] = args;
  console.log(`Id:${this.id}, ${this.name}, From:${city}, ${state}`);
}

Function.prototype.myApply = function (context, args) {
  const fn = Symbol("fn");
  context[fn] = this;
  context[fn](args);
};

printDetailApply.myApply(Mantu, ["jaipur", "Rajsthan"]);
printDetailApply.myApply(Satyam, ["JamsheadPur", "Jharkhand"]);

// 3. bind

function printDetail(...args) {
  const [city, state] = args;
  console.log(`Id:${this.id}, ${this.name}, From:${city}, ${state}`);
}

Function.prototype.myBind = function (context, ...args) {
  const fn = this;
  return function () {
    fn.call(context, ...args);
  };
};

printDetail.myBind(Mantu, "jaipur", "Rajsthan")();
printDetail.myBind(Satyam, "JamsheadPur", "Jharkhand")();

// Promise polyFill

// 1. Promise.call

const P1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Resolve From P1");
  }, 5000);
});

const P2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Resolve From P2");
  }, 1000);
});

const P3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Resolve From P3");
  }, 3000);
});

function resolveAll(...args) {
  return new Promise((resolve, reject) => {
    let allPromsie = args;
    let resolvedCount = 0;
    let resArr = [];

    allPromsie.forEach((promise, index) => {
      promise
        .then((data) => {
          resArr[index] = data;
          resolvedCount++;
          if (resolvedCount === allPromsie.length) {
            resolve(resArr);
          }
        })
        .catch((err) => {
          reject(err);
        });
    });
  });
}

resolveAll(P1, P2, P3)
  .then((resArr) => {
    console.log(resArr);
  })
  .catch((err) => {
    console.log(err);
  });

// resolve.any

const P4 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("Reject From P4");
  }, 5000);
});

const P5 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("Reject From P5");
  }, 1000);
});

const P6 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("Reject From P6");
  }, 3000);
});

function resolveAny(...args) {
  return new Promise((resolve, reject) => {
    let allPromsie = args;
    let rejectCount = 0;
    let resArr = [];

    allPromsie.forEach((promise, index) => {
      promise
        .then((data) => {
          resolve(data);
        })
        .catch((err) => {
          resArr[index] = err;
          rejectCount++;
          if (rejectCount === allPromsie.length) {
            reject(resArr);
          }
        });
    });
  });
}

resolveAny(P4, P5, P6)
  .then((res) => {
    console.log(res);
  })
  .catch((errArr) => {
    console.log(errArr);
  });

// resolve.race

const P7 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("Reject From P7");
  }, 5000);
});

const P8 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Resolve From P8");
  }, 6000);
});

const P9 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("Reject From P9");
  }, 3000);
});

function resolveRace(...args) {
  return new Promise((resolve, reject) => {
    let allPromsie = args;

    allPromsie.forEach((promise) => {
      promise
        .then((data) => {
          resolve(data);
        })
        .catch((err) => {
          reject(err);
        });
    });
  });
}

resolveRace(P7, P8, P9)
  .then((res) => {
    console.log(res);
  })
  .catch((errArr) => {
    console.log(errArr);
  });
