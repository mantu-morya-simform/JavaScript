//2. Public properties/methods

class user {
  name = "Mantu";
}

// ## 3. Protected properties/methods (`_`)

class CoffeeMachine {
  _waterAmount = 0;
  set waterAmount(value) {
    if (value < 0) value = 0;
    this._waterAmount = value;
  }
  get waterAmount() {
    return this._waterAmount;
  }
}

const coffeeMachine = new CoffeeMachine();
coffeeMachine.waterAmount = 80;
console.log(coffeeMachine.waterAmount);

//## 4. Private properties/methods (`#`)
// This is the modern JavaScript way (ES2022+) of implementing data encapsulation.

class BankAccount {
  #balance = 0; // private field

  deposit(amount) {
    this.#balance += amount;
  }

  getBalance() {
    return this.#balance;
  }
}

const acc = new BankAccount();

acc.deposit(500);

console.log(acc.getBalance()); // 500

/*   can`t do simmiler like this
console.log(acc.#balance); 
// ❌ SyntaxError: Private field '#balance' must be declared in class
*/
