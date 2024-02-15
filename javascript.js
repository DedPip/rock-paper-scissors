// first we get a random number from any of the following: 1,2 & 3
// then we assign each to rock, paper or scissor
// and that's how we get one of the 3 values(rock, paper...) randomly
function getComputerChoice() {
 randNum = Math.floor(Math.random() * 3) + 1;
 if (randNum === 1) {return rock}
 else if (randNum === 2) {return paper}
 else if (randNum === 3) {return scissor}
 else {return undefined}
}