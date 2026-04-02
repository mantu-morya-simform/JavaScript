let count = 1;
const apiCall = () => {
  console.log("Api Call...", count++);
};

const debounce = (fn, delay) => {
  let timer;
  return function () {
    let context = this;
    let args = ["Mantu Morya", "Simform"];
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(context, args);
    }, delay);
  };
};

const betterDataCall = debounce(apiCall, 300);
