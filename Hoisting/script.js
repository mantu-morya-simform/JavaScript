var x = 1; //undefined

let c = 10;

a();
console.log(x);
b();

function a() {
  console.log(null == +"\n0\n");
  console.log("\t \n" + 2);
  console.log(x);
}

function b() {
  var x = 100;
  console.log(x);
}
