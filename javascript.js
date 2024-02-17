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

// global variables added for each outcome because I wanted to use them in functions other than round like playRound

const youWin = "You win!";
const youLose = "You lose!";
const tie = "It's a tie!";

// we first recieve the two parameters
// we need to make playerSelection case-insensitive
// hence the use of playerSelectionLowerCase variable. 
// finally we write the return value for every possible outcome

function round(playerSelection, computerSelection) {

  let playerSelectionLowerCase = playerSelection.toLowerCase();

  if (playerSelectionLowerCase === computerSelection) {return tie }

  else if (playerSelectionLowerCase === "rock" && computerSelection === "paper")
  {return youLose + " Paper beats Rock"}
  
  else if (playerSelectionLowerCase === "rock" && computerSelection === "scissor")
  {return youWin + " Rock beats Scissor"}
  
  else if (playerSelectionLowerCase === "paper" && computerSelection === "rock")
  {return youWin + " Paper beats Rock"}

  else if (playerSelectionLowerCase === "paper" && computerSelection === "scissor")
  {return youLose + " Scissor beats Paper"}

  else if (playerSelectionLowerCase === "scissor" && computerSelection === "rock")
  {return youLose + " Rock beats Scissor"}

  else if (playerSelectionLowerCase === "scissor" && computerSelection === "paper")
  {return youWin + " Scissor beats Paper"} 
  
  else {return "round is not working properly"}
}

// this function plays a single round and returns the result as a string
//containing one of the following : loss, draw or win

function playRound() {
  let playerSelection = 
  prompt("Play with computer: Rock, Paper or Scissor? (5 rounds)");
  
  let computerSelection = getComputerChoice();

  let roundResult = round(playerSelection, computerSelection);

  if (roundResult.includes(youLose)) {return "loss"}
  else if (roundResult.includes(tie)) {return "draw"}
  else if (roundResult.includes(youWin)) {return "win"}
  else {return "playRound function is not working properly"}
}

// 5 rounds are played and each are stored in a variable
// after all of them are played game results are shown
// game scores are given and match result is shown

function playGame() {
  
  let wins = 0;
  let loses = 0;
  let round1 = playRound();
  let round2 = playRound();
  let round3 = playRound();
  let round4 = playRound();
  let round5 = playRound();
  
  alert("Game results: " + " " + round1 + ", " +round2 + 
        ", " + round3 + ", " + round4 + " and " + round5)

  if (round1 === "win") {wins = wins + 1;}
  else if (round1 === "loss") {loses = loses +1;}
  else {}

  if (round2 === "win") {wins = wins + 1;}
  else if (round2 === "loss") {loses = loses +1;}
  else {}

  if (round3 === "win") {wins = wins + 1;}
  else if (round3 === "loss") {loses = loses +1;}
  else {}

  if (round4 === "win") {wins = wins + 1;}
  else if (round4 === "loss") {loses = loses +1;}
  else {}

  if (round5 === "win") {wins = wins + 1;}
  else if (round5 === "loss") {loses = loses +1;}
  else {}

  if (wins > loses) {return "You won the game! congrats"}
  else if (loses > wins) {return "You lost! better luck next time"}
  else {return "It's a draw!"}
  
}

alert(playGame());