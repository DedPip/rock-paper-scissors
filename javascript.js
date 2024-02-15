// first we get a random number from any of the following: 1,2 & 3
// then we assign each to rock, paper or scissor
// and that's how we get one of the 3 values(rock, paper...) randomly
function getComputerChoice() {
  randNum = Math.floor(Math.random() * 3) + 1;
  if (randNum === 1) {return "rock"}
  else if (randNum === 2) {return "paper"}
  else if (randNum === 3) {return "scissor"}
  else {return "getComputerChoice is not working properly"}
}

// we first recieve the two parameters
// we need to make playerSelection case-insensitive hence the use of playerSelectionLowerCase variable. 
// finally we write the return value for every possible outcome
const youWin = "You win!"
const youLose = "You lose!"
const tie = "It's a tie!"
function playRound(playerSelection, computerSelection) {
  
  const playerSelectionLowerCase = playerSelection.toLowerCase()

  if (playerSelectionLowerCase === computerSelection) {return tie }

  else if (playerSelectionLowerCase === "rock" && computerSelection === "paper" ) {return youLose + " Paper beats Rock"}
  
  else if (playerSelectionLowerCase === "rock" && computerSelection === "scissor") {return youWin + " Rock beats Scissor"}
  
  else if (playerSelectionLowerCase === "paper" && computerSelection === "rock") {return youWin + " Paper beats Rock"}

  else if (playerSelectionLowerCase === "paper" && computerSelection === "scissor") {return youLose + " Scissor beats Paper"}

  else if (playerSelectionLowerCase === "scissor" && computerSelection === "rock") {return youLose + " Rock beats Scissor"}

  else if (playerSelectionLowerCase === "scissor" && computerSelection === "paper") {return youWin + " Scissor beats Paper"} 
  
  else {return "playRound is not working properly"}
}