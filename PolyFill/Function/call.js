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
 * Polyfill for Function.prototype.call
 * Calls a function with a given this value, and arguments provided individually (not as array).
 *
 * @param {Object} dataContext - The value to use as 'this' when executing the function.
 * @param {...*} args - Arguments to pass to the function as individual parameters (not in an array).
 * @returns {*} The result of calling the function with the specified this value and arguments.
 *
 * How it works:
 * 1. Creates a unique Symbol to use as a temporary property name.
 * 2. Assigns the current function ('this') to the dataContext object using the Symbol as property key.
 * 3. Calls the function stored in dataContext, passing individual arguments using rest parameter (...args).
 * 4. Captures the return value of the function in a result variable.
 * 5. Deletes the temporary property from dataContext to clean up.
 * 6. When the function executes, 'this' refers to dataContext because it's called as dataContext[fn]().
 * 7. Using Symbol prevents conflicts with existing object properties.
 * 8. Key difference from apply: call takes individual arguments, not an array.
 */
//Functioncall
// printDetail.call(data, 360003, "India");

Function.prototype.myCall = function (dataContext, ...args) {
  const fn = Symbol("fn");
  dataContext[fn] = this;
  const result = dataContext[fn](...args);
  delete dataContext[fn];
};

printDetail.myCall(data, 360003, "India");
