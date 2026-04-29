function apiCall(e) {
  console.log("Api Call with Query:", e.target.value);
}

function betterCall(fn, delay) {
  let timerID = 0;

  return function (...args) {
    clearTimeout(timerID);
    timerID = setTimeout(() => {
      fn(...args);
    }, delay);
  };
}

const debouncedSearch = betterCall(apiCall, 400);
