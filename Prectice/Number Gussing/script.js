let remaningChance = 10;

const randomNumber = () => {
  let number = Math.floor(Math.random() * 100);
  return number;
};
let guessedNumber = randomNumber();

let guessBtn = document.querySelector(".guess_btn");
const click = (e) => {
  let inputText = document.querySelector(".input_text");
  let MessageText = document.querySelector(".message");
  let remaningChanceText = document.querySelector(".remaning_chance");
  remaningChanceText.textContent = `Remaning Chance : ${remaningChance}`;

  if (!inputText.value) {
    MessageText.textContent = `Provide An Input`;
    MessageText.style.cssText = "color:#c92a2a; font-weight:600";
    return;
  } else if (!Number.isNaN(Number(inputText.value))) {
    let provideValue = Number(inputText.value);
    console.log(guessedNumber, provideValue);

    if (remaningChance == 0 || remaningChance < 0) {
      MessageText.textContent = `Your Chance Is No More Reset The Game to Play Again`;
      MessageText.style.cssText = "color:#c92a2a; font-weight:600";
      return;
    }

    if (provideValue > guessedNumber) {
      MessageText.textContent = `Provide Number is Grator! Guess a Smaller Number!`;
      MessageText.style.cssText = "color:#c92a2a; font-weight:600";
      remaningChance--;
    } else if (provideValue < guessedNumber) {
      MessageText.textContent = `Provide Number is Smaller! Guess a Grator Number!`;
      MessageText.style.cssText = "color:#c92a2a; font-weight:600";
      remaningChance--;
    } else {
      MessageText.textContent = `You Guessed Exact Number!`;
      MessageText.style.cssText = "color:#40c057; font-weight:600";
      inputText.textContent = "";
      inputText.value = "";
      MessageText.textContent = "";
      remaningChance = 5;
      remaningChanceText.textContent = `Remaning Chance : ${remaningChance}`;
    }
  } else {
    MessageText.textContent = `Provide Input As Valid Number`;
    MessageText.style.cssText = "color:#c92a2a; font-weight:600";
  }
};
guessBtn.addEventListener("click", click);

let resetBtn = document.querySelector(".reset_btn");

const reset = (e) => {
  const userResponse = confirm("Are you sure?");

  if (userResponse) {
    let inputText = document.querySelector(".input_text");
    let MessageText = document.querySelector(".message");
    let remaningChanceText = document.querySelector(".remaning_chance");
    inputText.textContent = "";
    inputText.value = "";
    MessageText.textContent = "";
    remaningChance = 5;
    remaningChanceText.textContent = `Remaning Chance : ${remaningChance}`;
  }
};
resetBtn.addEventListener("click", reset);
