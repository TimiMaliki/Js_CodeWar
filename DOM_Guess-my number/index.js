// to generate a random number to check if the guess number number equall the random
let randomNumber = Math.trunc(Math.random() * 20) + 1;

const check = document.querySelector(".check");
const guess = document.querySelector(".guess");
const number = document.querySelector(".number");
const Label_score = document.querySelector(".label-score");
const highScore = document.querySelector(".highscore");
const again = document.querySelector(".again");

let score = 30;

check.addEventListener("click", (e) => {
  const guessing = Number(guess.value);

  if (!guessing) {
    document.querySelector(".message").textContent = "No Message";
  } else if (guessing === randomNumber) {
    number.textContent = randomNumber;
    document.querySelector(".message").textContent = "Correct Number";
    document.querySelector("body").style.background = "blue";
  } else if (guessing > randomNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "Too high";
      score--;
      Label_score.textContent = `score: ${score}`;
    } else {
      document.querySelector(".message").textContent = 0;
    }
  } else if (guessing < randomNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "Too Low";
      score--;
      Label_score.textContent = `score: ${score}`;
    } else {
      document.querySelector(".message").textContent = 0;
    }
  }
});

//the reset button

  again.addEventListener("click", (e) => {
    number.textContent = "?";
  score = 30;
  Label_score.textContent = `score: ${score}`;
  document.querySelector(".message").textContent = "Start Guessing";
  document.querySelector("body").style.background = "black";
  document.querySelector(".guess").value = ''
});
