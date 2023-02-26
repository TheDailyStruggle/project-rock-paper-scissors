function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        console.log("It's a tie! Play again!");
        return result = 'tie';
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        console.log("You lose :( Paper covers rock!");
        return result = 'lose';
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        console.log("You Win! Rock smashes scissors!");
        return result = 'win';
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        console.log("You Win! Paper covers rock!");
        return result = 'win';
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        console.log("You Lose :( Scissors cut paper!");
        return result = 'lose';
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        console.log("You Lose :( Rock smashes scissors!");
        return result = 'lose';
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        console.log("You Win! Scissors cut paper!");
        return result = 'win';
    }
}

let playerScore = 0;
let computerScore = 0;

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

function game() {
    for (i = 0; i < 5; i++) {
        const playerSelection = playerInput();
        const computerSelection = getComputerChoice();
        playRound(playerSelection, computerSelection);
        if (result === 'tie') {
            console.log(`Computer: ${computerScore} You: ${playerScore}`)
        } else if (result === 'win') {
            playerScore++;
            console.log(`Computer: ${computerScore} You: ${playerScore}`)
        } else if (result === 'lose') {
            computerScore++;
            console.log(`Computer: ${computerScore} You: ${playerScore}`)
        }
    }
    if (playerScore === computerScore) {
        console.log("After 5 rounds you decided nothing. It's a tie")
    } else if (playerScore > computerScore) {
        console.log(`That's the game. You've conquered the computer ${playerScore} to ${computerScore}`)
    } else if (computerScore > playerScore) {
        console.log(` That's the game. You've lost to the computer ${computerScore} to ${playerScore}`)
    }
}


game();