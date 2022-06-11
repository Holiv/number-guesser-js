let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

//generate a random number to be the target number
function generateTarget(){
  let randomNumber = Math.floor(Math.random() * 10);
  if (randomNumber === 10){
    randomNumber -= 1;
  }
  return randomNumber;
}

//determine the winner by the guess
function compareGuesses(human, computer, target){
  let humanGuess = human - target;
  let computerGuess = computer - target;
  if(humanGuess < 0){
    humanGuess *= -1;
  }
  if(computerGuess < 0){
    computerGuess *= -1;
  }
  if(humanGuess < computerGuess || humanGuess === computerGuess){
    return true;
  }
  else{
    return false;
  }
}

function updateScore(winner){
  if (winner === 'human'){
    humanScore += 1;
  }
  else if(winner = 'computer'){
    computerScore += 1;
  }
  else{
    'Invalid winner'
  }
}
function advanceRound(){
  currentRoundNumber += 1;
}

console.log(compareGuesses(2, 5, 6));
generateTarget();