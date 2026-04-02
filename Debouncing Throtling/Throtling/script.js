let count = 1;
const apiCall = () => {
  console.log("Expensive Api Call", count++);
};

const expenseApiCall = (fn, delay) => {
  let flag = true;
  return function () {
    if (flag) {
      flag = false;
      fn();
      setTimeout(() => {
        flag = true;
      }, delay);
    }
  };
};

const betterExpenseApiCall = expenseApiCall(apiCall, 500);
