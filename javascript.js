const rockBtn = document.querySelector('#rock');
const paperBtn = document.querySelector('#paper');
const scissorsBtn = document.querySelector('#scissors');

let playerSelection = "0";

rockBtn.addEventListener('click', () => {
    playerSelection = "rock"
    computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
    if (result === "win") {
        playerScore++;
    } else if (result === "lose") {
        computerScore++;
    } else {
        alert("It's a tie!");
    }
})

paperBtn.addEventListener('click', () => {
    playerSelection = "paper"
    computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
})

scissorsBtn.addEventListener('click', () => {
    playerSelection = "scissors"
    computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
})


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

// function playerInput() {
//     input = prompt("Rock, Paper, or Scissors");
//     choice = input.toLowerCase();
//     return choice;
// }

function getComputerChoice() {
    options = ["rock", "paper", "scissors"];
    random = Math.floor(Math.random() * options.length);
    computerChoice = options[random];
    return computerChoice;
}

// function game() {
//     for (i = 0; i < 5; i++) {
//         const computerSelection = getComputerChoice();
//         playRound(playerSelection, computerSelection);
//         if (result === 'tie') {
//             console.log(`Computer: ${computerScore} You: ${playerScore}`)
//         } else if (result === 'win') {
//             playerScore++;
//             console.log(`Computer: ${computerScore} You: ${playerScore}`)
//         } else if (result === 'lose') {
//             computerScore++;
//             console.log(`Computer: ${computerScore} You: ${playerScore}`)
//         }
//     }
//     if (playerScore === computerScore) {
//         alert("After 5 rounds you decided nothing. It's a tie")
//     } else if (playerScore > computerScore) {
//         alert(`That's the game. You've conquered the computer ${playerScore} to ${computerScore}`)
//     } else if (computerScore > playerScore) {
//         alert(` That's the game. You've lost to the computer ${computerScore} to ${playerScore}`)
//     }
// }

// game();
