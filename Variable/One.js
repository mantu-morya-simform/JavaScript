// "use strict";

// x = 10;                                    //it give the problem bcause of the "use strict"
// console.log(x);

//variables

/*
// 1. Var : can be chenge and reinitillize and funtional scope

function getName() {
  if (true) {
    var name = "Mantu";
    console.log(name); //Mantu
  }
  console.log(name); //Mantu
}

getName();

*/

/*

// 2. can be chenge but not reinitillize and its Block scope

function getName() {
  if (true) {
    let name = "Mantu";
    console.log(name); //Mantu
  }
  console.log(name); //Error
}

getName();

*/

/*
// 3. Const nither can be chenge and nor reinitillize and its Block scope

function getName() {
  if (true) {
    const name = "Mantu";
    console.log(name); //Mantu
  }
  console.log(name); //Error
}

getName();

*/
