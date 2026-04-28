const data = {
  name: "Mantu Kumar Morya",
  email: "mantu@gmail.com",
  city: "Jaipur",
};

function printDetail(pin, country) {
  console.log(
    `Name: ${this.name}\nEmail:${this.email}\nCity:${this.city}\nPIN Code:${pin}\nCountry:${country}`,
  );
}

/**
 * Polyfill for Function.prototype.bind
 * Creates a new function that, when called, has its 'this' keyword set to the provided value.
 *
 * @param {Object} dataContext - The value to be passed as 'this' context to the target function when the bound function is called.
 * @param {...*} args - Arguments that will be prepended to the arguments provided to the bound function when it is called (partial application).
 * @returns {Function} A new function with the specified 'this' value and partially applied arguments.
 *
 * How it works:
 * 1. Stores a reference to the current function in 'fn' variable.
 * 2. Returns a new function that, when invoked, will call the original function.
 * 3. The returned function will always have 'this' bound to dataContext using fn.apply().
 * 4. Arguments passed to bind (args) are partially applied - they become default arguments for the returned function.
 * 5. When the bound function is called, it spreads the pre-bound arguments and passes them to apply().
 * 6. This creates a closure where the bound function remembers the context and pre-bound arguments.
 * 7. Multiple calls to the bound function always use the same 'this' context.
 * 8. Key difference: bind returns a new function (doesn't execute immediately), while call/apply execute immediately.
 */
//FunctionBind
// printDetail.bind(data, 360003, "India");

Function.prototype.myBind = function (dataContext, ...args) {
  const fn = this;
  return function () {
    return fn.apply(dataContext, [...args, ...arguments]);
  };
};

// printDetail.myBind(data, 360003, "India")();
