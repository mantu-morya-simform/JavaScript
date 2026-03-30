let remaningChance = 10;
let winCount = 0;
let loseCount = 0;

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
  let winPointText = document.querySelector(".win_para");
  let losePointText = document.querySelector(".lose_para");

  if (!inputText.value) {
    MessageText.textContent = `Provide An Input`;
    MessageText.style.cssText = "color:#c92a2a; font-weight:600";
    return;
  } else if (!Number.isNaN(Number(inputText.value))) {
    let provideValue = Number(inputText.value);
    console.log(guessedNumber, provideValue);

    // if (remaningChance == 0) {
    //   MessageText.textContent = `Your Chance Is No More Reset The Game to Play Again`;
    //   MessageText.style.cssText = "color:#c92a2a; font-weight:600";
    //   return;
    // }

    if (provideValue > guessedNumber) {
      MessageText.textContent = `Provide Number is Greater! Guess a Smaller Number!`;
      MessageText.style.cssText = "color:#c92a2a; font-weight:600";
      remaningChance--;
    } else if (provideValue < guessedNumber) {
      MessageText.textContent = `Provide Number is Smaller! Guess a Greater Number!`;
      MessageText.style.cssText = "color:#c92a2a; font-weight:600";
      remaningChance--;
    } else {
      reset();
      MessageText.textContent = `You Guessed Exact Number!`;
      MessageText.style.cssText = "color:#40c057; font-weight:600";
      winCount++;
      winPointText.textContent = `Win : ${winCount}`;
      guessedNumber = randomNumber();
    }
  } else {
    MessageText.textContent = `Provide Input As Valid Number`;
    MessageText.style.cssText = "color:#c92a2a; font-weight:600";
  }

  if (remaningChance === 0) {
    loseCount++;
    losePointText.textContent = `Lose : ${loseCount}`;
    reset();
  }

  remaningChanceText.textContent = `Remaning Chance : ${remaningChance}`;
};
guessBtn.addEventListener("click", click);

let resetBtn = document.querySelector(".reset_btn");

const reset = () => {
  let inputText = document.querySelector(".input_text");
  let MessageText = document.querySelector(".message");
  let remaningChanceText = document.querySelector(".remaning_chance");

  inputText.value = "";
  MessageText.textContent = "";
  remaningChance = 10;
  remaningChanceText.textContent = `Remaning Chance : ${remaningChance}`;
};

const resetGame = () => {
  const userResponse = confirm("Are you sure?");

  if (userResponse) {
    let winPointText = document.querySelector(".win_para");
    let losePointText = document.querySelector(".lose_para");
    reset();
    winCount = 0;
    loseCount = 0;
    winPointText.textContent = `Win : ${winCount}`;
    losePointText.textContent = `Lose : ${loseCount}`;
  }
};

resetBtn.addEventListener("click", resetGame);
