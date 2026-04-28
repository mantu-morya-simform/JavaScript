/**
 * CLOSURES AND LEXICAL SCOPE EXAMPLES — QUIZ STYLE
 *
 * Each example below is presented as:
 *   Question
 *   Answer / Explanation
 * followed by the code example.
 */

/**
 * CLOSURES AND LEXICAL SCOPE EXAMPLES — QUIZ STYLE
 *
 * Each example below is presented as a question only.
 * Answers are provided in the section at the bottom.
 */

/* ------------------ Easy Examples ------------------ */

// Question 1: What is a basic closure?
function basicClosure() {
  let secret = "secret";
  return function () {
    console.log(secret);
  };
}
const basicFn = basicClosure();
// basicFn();

// Question 2: How does a counter use closure for private state?
function createCounter() {
  let count = 0;
  return function () {
    count += 1;
    return count;
  };
}
const counter = createCounter();
// counter();
// counter();

// Question 3: What is a function factory with closure?
function multiplier(factor) {
  return function (value) {
    return value * factor;
  };
}
const double = multiplier(2);
// double(5);

// Question 4: How can closure simulate private object state?
function makeSecret(secret) {
  return {
    get() {
      return secret;
    },
    set(value) {
      secret = value;
    },
  };
}
const secretObj = makeSecret("hidden");
// secretObj.get();
// secretObj.set("changed");

// Question 5: Can a closure keep state after the outer function returns?
function outerKeepsState() {
  let value = 42;
  return function () {
    console.log(value);
  };
}
const keepStateFn = outerKeepsState();
// keepStateFn();

// Question 6: Why does `let` behave differently than `var` in loops?
function loopClosureExample() {
  for (let i = 0; i < 3; i += 1) {
    setTimeout(() => console.log("let loop:", i), 0);
  }

  for (var j = 0; j < 3; j += 1) {
    setTimeout(() => console.log("var loop:", j), 0);
  }
}
loopClosureExample();

// Question 7: How can an IIFE create an isolated closure scope?
const add = (function () {
  let total = 0;
  return function (n) {
    total += n;
    return total;
  };
})();
// add(3);
// add(4);

/* ------------------ Medium Examples ------------------ */

// Question 8: What does memoization with closure do?
function memoize(fn) {
  const cache = {};
  return function (x) {
    if (cache[x] !== undefined) {
      return cache[x];
    }
    cache[x] = fn(x);
    return cache[x];
  };
}
const square = memoize((n) => n * n);
// square(5);

// Question 9: How do closures work in event handlers?
function createClickHandler(message) {
  return function clickHandler() {
    console.log("clickHandler:", message);
  };
}
// In a browser, use:
// button.addEventListener("click", createClickHandler("Button clicked"));

// Question 10: What is a once-wrapper pattern?
function once(fn) {
  let called = false;
  let result;
  return function (...args) {
    if (!called) {
      called = true;
      result = fn(...args);
    }
    return result;
  };
}
const initialize = once(() => "initialized");
// initialize();

// Question 11: How does partial application use closures?
function partial(fn, ...preset) {
  return function (...later) {
    return fn(...preset, ...later);
  };
}
const greet = (greeting, name) => `${greeting}, ${name}`;
const sayHello = partial(greet, "Hello");
// sayHello("Alice");

// Question 12: How can closures capture loop values in an array?
function createLoggers() {
  const loggers = [];
  for (let i = 0; i < 3; i += 1) {
    loggers.push(() => console.log("logger:", i));
  }
  return loggers;
}
const loggers = createLoggers();
// loggers[0]();
// loggers[1]();

// Question 13: What is delayed computation with closure?
function delayedAdd(a) {
  return function (b) {
    return a + b;
  };
}
const add5 = delayedAdd(5);
// add5(10);

// Question 14: How does the module pattern use closure?
const counterModule = (function () {
  let count = 0;
  return {
    increment() {
      count += 1;
      return count;
    },
    getCount() {
      return count;
    },
  };
})();
// counterModule.increment();
// counterModule.getCount();

/* ------------------ Hard Examples ------------------ */

// Question 15: Can multiple functions share closure state?
function createPair() {
  let state = 0;
  return {
    inc() {
      state += 1;
      return state;
    },
    dec() {
      state -= 1;
      return state;
    },
    get() {
      return state;
    },
  };
}
const pair = createPair();
// pair.inc();
// pair.dec();

// Question 16: How does closure work with async functions?
function createAsyncCounter() {
  let count = 0;
  return async function () {
    await new Promise((resolve) => setTimeout(resolve, 100));
    count += 1;
    return count;
  };
}
const asyncCount = createAsyncCounter();
// asyncCount().then((value) => console.log(value));

// Question 17: How does recursion use closure for memoization?
function makeFibonacci() {
  const cache = { 0: 0, 1: 1 };
  return function fib(n) {
    if (cache[n] !== undefined) {
      return cache[n];
    }
    cache[n] = fib(n - 1) + fib(n - 2);
    return cache[n];
  };
}
const fib = makeFibonacci();
// fib(10);

// Question 18: How do default parameters work with closure?
function createUser(name) {
  let active = true;
  return function ({ role = "guest" } = {}) {
    return `${name} (${role}) active=${active}`;
  };
}
const user = createUser("Sam");
// user({ role: "admin" });

// Question 19: Can closures build a private bank account?
function createBankAccount(initialBalance = 0) {
  let balance = initialBalance;
  return {
    deposit(amount) {
      if (amount > 0) balance += amount;
      return balance;
    },
    withdraw(amount) {
      if (amount > 0 && amount <= balance) balance -= amount;
      return balance;
    },
    getBalance() {
      return balance;
    },
  };
}
const account = createBankAccount(100);
// account.deposit(30);
// account.withdraw(30);
// account.getBalance();

// Question 20: How can closure create dynamic loggers?
function makeLogger(prefix) {
  return function log(...args) {
    console.log(`[${prefix}]`, ...args);
  };
}
const info = makeLogger("INFO");
const debug = makeLogger("DEBUG");
// info("loaded");
// debug("running");

/* ------------------ Answers and Explanations ------------------ */

/* ------------------ Easy Examples ------------------ */

/*

// Question 1: What is a basic closure?
// Answer:
// A basic closure occurs when an inner function retains access to a variable
// from its outer function even after the outer function has returned.
function basicClosure() {
  let secret = "secret";
  return function () {
    console.log("basicClosure:", secret);
  };
}
const basicFn = basicClosure();
basicFn(); // secret

// Question 2: How does a counter use closure for private state?
// Answer:
// The returned function closes over the `count` variable, allowing it to
// increment and retain value across calls.
function createCounter() {
  let count = 0;
  return function () {
    count += 1;
    return count;
  };
}
const counter = createCounter();
console.log("counter:", counter()); // 1
console.log("counter:", counter()); // 2

// Question 3: What is a function factory with closure?
// Answer:
// A function factory returns a new function that captures parameters from
// the outer scope, producing specialized behavior.
function multiplier(factor) {
  return function (value) {
    return value * factor;
  };
}
const double = multiplier(2);
console.log("double:", double(5)); // 10

// Question 4: How can closure simulate private object state?
// Answer:
// Methods returned in an object share access to the same outer variable,
// keeping it private and accessible only through those methods.
function makeSecret(secret) {
  return {
    get() {
      return secret;
    },
    set(value) {
      secret = value;
    },
  };
}
const secretObj = makeSecret("hidden");
console.log("secretObj.get():", secretObj.get()); // hidden
secretObj.set("changed");
console.log("secretObj.get():", secretObj.get()); // changed

// Question 5: Can a closure keep state after the outer function returns?
// Answer:
// Yes. The inner function keeps the outer variable alive because the function
// still references it.
function outerKeepsState() {
  let value = 42;
  return function () {
    console.log("outerKeepsState:", value);
  };
}
const keepStateFn = outerKeepsState();
keepStateFn(); // 42

// Question 6: Why does `let` behave differently than `var` in loops?
// Answer:
// `let` creates a new block-scoped binding per iteration, while `var` reuses
// the same function-scoped binding, causing closures to capture the final value.
function loopClosureExample() {
  for (let i = 0; i < 3; i += 1) {
    setTimeout(() => console.log("let loop:", i), 0);
  }

  for (var j = 0; j < 3; j += 1) {
    setTimeout(() => console.log("var loop:", j), 0);
  }
}
loopClosureExample(); // let 0..2, var 3..3..3

// Question 7: How can an IIFE create an isolated closure scope?
// Answer:
// An IIFE runs immediately and returns a function that keeps access to private
// variables defined inside it, preventing those variables from leaking globally.
const add = (function () {
  let total = 0;
  return function (n) {
    total += n;
    return total;
  };
})();
console.log("IIFE add:", add(3)); // 3
console.log("IIFE add:", add(4)); // 7


*/

/* ------------------ Medium Examples ------------------ */

/*

// Question 8: What does memoization with closure do?
// Answer:
// It caches results in a closed-over object, allowing repeated calls with the
// same arguments to return stored values instead of recomputing.
function memoize(fn) {
  const cache = {};
  return function (x) {
    if (cache[x] !== undefined) {
      return cache[x];
    }
    cache[x] = fn(x);
    return cache[x];
  };
}
const square = memoize((n) => n * n);
console.log("memoize:", square(5)); // 25
console.log("memoize:", square(5)); // 25 from cache

// Question 9: How do closures work in event handlers?
// Answer:
// The handler keeps access to the values that existed when it was created,
// so it can use that context later when the event fires.
function createClickHandler(message) {
  return function clickHandler() {
    console.log("clickHandler:", message);
  };
}
// In a browser, you could do:
// button.addEventListener("click", createClickHandler("Button clicked"));

// Question 10: What is a once-wrapper pattern?
// Answer:
// The wrapper function tracks whether the original function has been called,
// returning the cached result on subsequent calls.
function once(fn) {
  let called = false;
  let result;
  return function (...args) {
    if (!called) {
      called = true;
      result = fn(...args);
    }
    return result;
  };
}
const initialize = once(() => "initialized");
console.log("once:", initialize()); // initialized
console.log("once:", initialize()); // initialized

// Question 11: How does partial application use closures?
// Answer:
// The returned function closes over preset arguments and adds later arguments
// when invoked.
function partial(fn, ...preset) {
  return function (...later) {
    return fn(...preset, ...later);
  };
}
const greet = (greeting, name) => `${greeting}, ${name}`;
const sayHello = partial(greet, "Hello");
console.log("partial:", sayHello("Alice")); // Hello, Alice

// Question 12: How can closures capture loop values in an array?
// Answer:
// Each function pushed into the array closes over the current loop variable
// binding, preserving it for later invocation.
function createLoggers() {
  const loggers = [];
  for (let i = 0; i < 3; i += 1) {
    loggers.push(() => console.log("logger:", i));
  }
  return loggers;
}
const loggers = createLoggers();
loggers[0](); // 0
loggers[1](); // 1

// Question 13: What is delayed computation with closure?
// Answer:
// The inner function uses the captured argument from the outer call later,
// allowing partial calculation.
function delayedAdd(a) {
  return function (b) {
    return a + b;
  };
}
const add5 = delayedAdd(5);
console.log("delayedAdd:", add5(10)); // 15

// Question 14: How does the module pattern use closure?
// Answer:
// It returns an object with methods that share private state enclosed in the
// outer function, creating a simple module.
const counterModule = (function () {
  let count = 0;
  return {
    increment() {
      count += 1;
      return count;
    },
    getCount() {
      return count;
    },
  };
})();
console.log("counterModule.increment():", counterModule.increment()); // 1
console.log("counterModule.getCount():", counterModule.getCount()); // 1

*/

/* ------------------ Hard Examples ------------------ */

/*

// Question 15: Can multiple functions share closure state?
// Answer:
// Yes. Multiple returned methods can reference the same closed-over variables
// and mutate them together.
function createPair() {
  let state = 0;
  return {
    inc() {
      state += 1;
      return state;
    },
    dec() {
      state -= 1;
      return state;
    },
    get() {
      return state;
    },
  };
}
const pair = createPair();
console.log("pair.inc():", pair.inc()); // 1
console.log("pair.dec():", pair.dec()); // 0

// Question 16: How does closure work with async functions?
// Answer:
// The async inner function still closes over the outer variable, and the
// variable persists across awaited pauses.
function createAsyncCounter() {
  let count = 0;
  return async function () {
    await new Promise((resolve) => setTimeout(resolve, 100));
    count += 1;
    return count;
  };
}
const asyncCount = createAsyncCounter();
asyncCount().then((value) => console.log("asyncCount:", value)); // 1

// Question 17: How does recursion use closure for memoization?
// Answer:
// The recursive function shares access to the cache object, avoiding repeated
// work by storing computed results.
function makeFibonacci() {
  const cache = { 0: 0, 1: 1 };
  return function fib(n) {
    if (cache[n] !== undefined) {
      return cache[n];
    }
    cache[n] = fib(n - 1) + fib(n - 2);
    return cache[n];
  };
}
const fib = makeFibonacci();
console.log("fib(10):", fib(10)); // 55

// Question 18: How do default parameters work with closure?
// Answer:
// The inner function retains the outer variable and can also use destructured
// defaults from its call arguments.
function createUser(name) {
  let active = true;
  return function ({ role = "guest" } = {}) {
    return `${name} (${role}) active=${active}`;
  };
}
const user = createUser("Sam");
console.log("createUser:", user({ role: "admin" })); // Sam (admin) active=true

// Question 19: Can closures build a private bank account?
// Answer:
// Yes. The returned object methods close over the balance variable and control
// how it can be changed.
function createBankAccount(initialBalance = 0) {
  let balance = initialBalance;
  return {
    deposit(amount) {
      if (amount > 0) balance += amount;
      return balance;
    },
    withdraw(amount) {
      if (amount > 0 && amount <= balance) balance -= amount;
      return balance;
    },
    getBalance() {
      return balance;
    },
  };
}
const account = createBankAccount(100);
console.log("account.withdraw(30):", account.withdraw(30)); // 70
console.log("account.getBalance():", account.getBalance()); // 70

// Question 20: How can closure create dynamic loggers?
// Answer:
// Each logger function keeps its own prefix from the outer scope, allowing
// multiple specialized loggers to coexist.
function makeLogger(prefix) {
  return function log(...args) {
    console.log(`[${prefix}]`, ...args);
  };
}
const info = makeLogger("INFO");
const debug = makeLogger("DEBUG");
info("loaded"); // [INFO] loaded
debug("running"); // [DEBUG] running


*/
