const rockBtn = document.querySelector('#rock');
const paperBtn = document.querySelector('#paper');
const scissorsBtn = document.querySelector('#scissors');
const pScore = document.querySelector('#pScore');
const cScore = document.querySelector('#cScore');
const picture = document.querySelector('.status');
const heading = document.querySelector('h1');
const resetBtn = document.querySelector('.reset');

let playerSelection = "0";

rockBtn.addEventListener('click', () => {
    playerSelection = "rock"
    game();
})

paperBtn.addEventListener('click', () => {
    playerSelection = "paper"
    game();
})

scissorsBtn.addEventListener('click', () => {
    playerSelection = "scissors"
    game();
})

resetBtn.addEventListener('click', () => {
    rockBtn.disabled = false;
    paperBtn.disabled = false;
    scissorsBtn.disabled = false;
    resetBtn.hidden = true;
    playerScore = 0;
    computerScore = 0;
    pScore.textContent = `Player Score: ${playerScore}`;
    cScore.textContent = `Computer Score: ${computerScore}`;
    heading.textContent = "ROCK PAPER SCISSORS"
    picture.src = "images/fight.jpg"
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


function getComputerChoice() {
    options = ["rock", "paper", "scissors"];
    random = Math.floor(Math.random() * options.length);
    computerChoice = options[random];
    return computerChoice;
}

function game() {
    computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
    if (result === "win") {
        playerScore++;
        pScore.textContent = `Player Score: ${playerScore}`;
        if (playerScore === 5) {
            heading.innerText = "YOU WIN!"
            picture.src = "images/trophy.jpg"
            rockBtn.disabled = true;
            paperBtn.disabled = true;
            scissorsBtn.disabled = true;
            resetBtn.hidden = false;
        }
        picture.src = "images/win.jpg"
    } else if (result === "lose") {
        computerScore++;
        cScore.textContent = computerScore;
        cScore.textContent = `Computer Score: ${computerScore}`;
        if (computerScore === 5) {
            heading.innerText = "YOU LOST :("
            picture.src = "images/lose.jpg"
            rockBtn.disabled = true;
            paperBtn.disabled = true;
            scissorsBtn.disabled = true;
            resetBtn.hidden = false;
        }
        picture.src = "images/lose.png"
    } else {
        picture.src = "images/tie.png";
    }
}


