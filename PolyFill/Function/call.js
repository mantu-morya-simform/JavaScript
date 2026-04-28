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

//Functioncall
// printDetail.call(data, 360003, "India");

Function.prototype.myCall = function (dataContext, ...args) {
  const fn = Symbol("fn");
  dataContext[fn] = this;
  const result = dataContext[fn](...args);
  delete dataContext[fn];
};

printDetail.myCall(data, 360003, "India");
