// first we get a random number from any of the following: 1,2 & 3
// then we assign each to rock, paper or scissor
// and that's how we get one of the 3 values(rock, paper...) randomly
function getComputerChoice() {
  randNum = Math.floor(Math.random() * 3) + 1;
  if (randNum === 1) {return "rock"}
  else if (randNum === 2) {return "paper"}
  else if (randNum === 3) {return "scissor"}
  else {return undefined}
}

// we first recieve the two parameters
// we need to make playerSelection case-insensitive hence the use of playerSelectionLowerCase variable. 
// finally we write the return value for every possible outcome
function playRound(playerSelection, computerSelection) {
  
  const playerSelectionLowerCase = playerSelection.toLowerCase()

  if (playerSelectionLowerCase === computerSelection) {return "It's a tie"}

  else if (playerSelectionLowerCase === "rock" && computerSelection === "paper" ) {return "You lose! Paper beats Rock"}
  
  else if (playerSelectionLowerCase === "rock" && computerSelection === "scissor") {return "You win! Rock beats Scissor"}
  
  else if (playerSelectionLowerCase === "paper" && computerSelection === "rock") {return "You win! Paper beats Rock"}

  else if (playerSelectionLowerCase === "paper" && computerSelection === "scissor") {return "You lose! Scissor beats Paper"}

  else if (playerSelectionLowerCase === "scissor" && computerSelection === "rock") {return "You lose! Rock beats Scissor"}

  else if (playerSelectionLowerCase === "scissor" && computerSelection === "paper") {return "You win! Scissor beats Paper"} 
  
  else {return "playRound is not working correctly"}
}