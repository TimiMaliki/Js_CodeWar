// to generate a random number to check if the guess number number equall the random
let randomNumber = Math.trunc(Math.random() * 20) + 1;

const check = document.querySelector(".check");
const guess = document.querySelector(".guess");
const number = document.querySelector(".number");
const Label_score = document.querySelector(".label-score");
const highScore = document.querySelector(".highscore");
const again = document.querySelector(".again");

let score = 30;
let newHigherscore; 

check.addEventListener("click", (e) => {
  const guessing = Number(guess.value);

  if (!guessing) {
    document.querySelector(".message").textContent = "No Message";
  } else if (guessing === randomNumber) {   //when the guess number is equal to the random number you win!
    number.textContent = randomNumber;
    //changes the text to you are a winner
    document.querySelector(".message").textContent = "Correct Number";
    //changes the bg color
    document.querySelector("body").style.background = "blue";
    //updates the new highscore
    newHigherscore = document.querySelector(".highscore").textContent = `${score}`


  } else if (guessing > randomNumber) {
    if (score > 1) {  //when the guess is greater than the random number
      //changes the text to too high
      document.querySelector(".message").textContent = "Too high";
      //subtracts the score value by 1
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
  document.querySelector(".highscore").textContent = newHigherscore
});
