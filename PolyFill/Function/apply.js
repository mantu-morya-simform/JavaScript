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
 * Polyfill for Function.prototype.apply
 * Calls a function with a given this value, and arguments provided as an array.
 *
 * @param {Object} dataContext - The value to use as 'this' when executing the function.
 * @param {Array} args - An array-like object specifying the arguments with which the function should be called.
 * @returns {*} The result of calling the function with the specified this value and arguments.
 *
 * How it works:
 * 1. Creates a unique Symbol to use as a temporary property name to avoid conflicts.
 * 2. Assigns the current function ('this') to the dataContext object using the Symbol as property key.
 * 3. Calls the function stored in the dataContext object, passing the args array as spread arguments using (...args).
 * 4. Immediately deletes the temporary property from the dataContext object to avoid pollution.
 * 5. When the function executes, 'this' refers to dataContext because it was called as dataContext[fn]().
 * 6. Using Symbol ensures no accidental property name collisions with existing object properties.
 * 7. Note: This implementation differs from native apply which returns the function result.
 */
//FunctionApply
// printDetail.apply(data, [360003, "India"]);

Function.prototype.myApply = function (dataContext, args) {
  const fn = Symbol("fn");
  dataContext[fn] = this;
  dataContext[fn](...args);
  delete dataContext[fn];
};

printDetail.myApply(data, [360003, "India"]);
