// class Admin {
//   constructor(userName, password) {
//     this.userName = userName;
//     this.password = password;
//   }

//   encryptPassword() {
//     let newStr = "";
//     for (let i = 0; i < this.password.length - 1; i++) {
//       newStr = newStr + this.password[i] + "$";
//     }
//     return newStr;
//   }
// }

// function Admin() {
//   let userName = "";
//   let password = "";

//   const Action = {
//     setUser(name, pass) {
//       userName = name;
//       password = pass;
//     },
//     encryptPassword() {
//       let newStr = "";
//       for (let i = 0; i < password.length; i++) {
//         newStr += password[i] + "$";
//       }
//       return newStr;
//     },
//   };
//   return Action;
// }

// let admin = Admin();
// admin.setUser("Mantu", "Kumar");
// console.log(admin.encryptPassword());
