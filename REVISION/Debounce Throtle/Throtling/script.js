const searchElement = document.querySelector(".search__input__ele");
let callCount = 0;

function apiCall() {
  console.log(
    `Api Call with Query:${searchElement.value} call Count: ${++callCount}`,
  );
}

function betterCall(fn, delay) {
  let flag = true;

  return function (...args) {
    if (flag) {
      flag = false;
      fn(...args);
      setTimeout(() => {
        flag = true;
      }, delay);
    }
  };
}

const throttledSearch = betterCall(apiCall, 2000);
