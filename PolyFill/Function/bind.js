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

//FunctionBind
// printDetail.bind(data, 360003, "India");

Function.prototype.myApply = function (dataContext, ...args) {
  const fn = this;
  return function () {
    return fn.apply(dataContext, ...args);
  };
};

printDetail.myApply(data, [360003, "India"])();
