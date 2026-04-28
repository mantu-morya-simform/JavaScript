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

//FunctionApply
// printDetail.apply(data, [360003, "India"]);

Function.prototype.myApply = function (dataContext, args) {
  const fn = Symbol("fn");
  dataContext[fn] = this;
  dataContext[fn](...args);
  delete dataContext[fn];
};

printDetail.myApply(data, [360003, "India"]);
