// create a function that randomly return "rock, paper or scissors"
function getComputerChoice() {
    let number = Math.floor(Math.random() * 3 + 1);
    if (number === 1) {
        return "rock";
    } else if (number === 2) {
        return "paper";
    } else if (number === 3) {
        return "scissors";
    }
}

/* Rock wins against scissors;      playerSelection === "rock" && computerSelection === "scissors"
paper wins against rock;            playerSelection === "paper" && computerSelection === "rock"
and scissors wins against paper.    playerSelection === "scissors" && computerSelection === "paper"
If both players throw the same hand signal, it is considered a tie, and play resumes until there is a clear winner. */

// create a function that plays a single round of the game
function playRound(playerSelection, computerSelection) {
    if (playerSelection === "rock" && computerSelection === "scissors") {
        return "You Win! Rock beats Scissors!";
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        return "You Win! Paper beats Rock!";
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        return "You Win! Scissors beats Paper!";
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        "You Lose! Rock beats Scissors!";
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        return "You Lose! Paper beats Rock!";
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        return "You Lose! Scissors beats Paper!"
    } else if ((playerSelection === "rock" && computerSelection === "rock") || (playerSelection === "paper" && computerSelection === "paper") || (playerSelection === "scissors" && computerSelection === "scissors")) {
        return "The game is a tie! Try again!"
    }
}




// console.log(getComputerChoice());

// const playerSelection = "rock";
// const computerSelection = getComputerChoice();
// console.log("You've selected: " + playerSelection);
// console.log("Computer selected: " + computerSelection);
// console.log(playRound(playerSelection, computerSelection));
