// Check if user wins or loses
// Display alert won or loss

function playRound(playerSelection, computerSelection) {

}



const playerSelection = playerInput();
const computerSelection = getComputerChoice();

function playerInput() {
    input = prompt("Rock, Paper, or Scissors");
    choice = input.toLowerCase();
    return choice;
}

function getComputerChoice() {
    options = ["rock", "paper", "scissors"];
    random = Math.floor(Math.random() * options.length);
    computerChoice = options[random];
    return computerChoice;
}

playRound();

console.log(1, playerSelection);
console.log(2, computerSelection);