const score0El = document.querySelector('#score--0')
const score1El = document.getElementById('score--1')
const current0El = document.getElementById('current--0')
const current1El = document.getElementById('current--1')
const player0El = document.querySelector('.player--0')
const player1El = document.querySelector('.player--1')
const diceEl = document.querySelector('.dice')
const btnNew = document.querySelector('.btn--new')
const btnRoll = document.querySelector('.btn--roll')
const btnHold = document.querySelector('.btn--hold')


//starting conditions
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden')

//scores
const scores =[0,0]
let currentScore = 0

//current player
let activePlayer = 0

//the state
let playing = true

const switchPlayer = () =>{
     //Switch to next player
     document.getElementById(`current--${activePlayer}`).textContent = 0
     currentScore = 0
     activePlayer = activePlayer === 0 ? 1 :0
      player0El.classList.toggle('player--active')
      player1El.classList.toggle('player--active')
}

//rolling dice functionality
btnRoll.addEventListener('click' , (e) =>{
    if(playing){
    //1. Generating a random dice roll
    const dice = Math.trunc(Math.random() * 6) + 1

    //2 display the dice
     diceEl.classList.remove('hidden')
     diceEl.src =`dice-${dice}.png`

     //3 check if the number is not equall to one

     if(dice !== 1){
           currentScore += dice
            document.getElementById(`current--${activePlayer}`).textContent = currentScore
     }else{
         switchPlayer()
     }
    }
})


btnHold.addEventListener('click' , (e)=>{
    if(playing){
//1 add current score to active player's score
    scores[activePlayer] = currentScore
    //score[1] = scores[1] + currentScore

    document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer]
//2 check if the playeer score  is >=100

if(scores[activePlayer] >= 20){
    playing = false
    diceEl.classList.add('hidden')
 document.querySelector(`.player--${activePlayer}`).classList.add('player--winner')
 document.querySelector(`.player--${activePlayer}`).classList.add('player--active')
 
}else{
    switchPlayer()
}

}
})