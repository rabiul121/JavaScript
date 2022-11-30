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


// create a function that plays a single round of the game
function playRound(playerSelection, computerSelection) {
    playerSelection = prompt("Type 'rock', 'paper' or 'scissors'").toLocaleLowerCase();
    console.log(playerSelection);
    computerSelection = getComputerChoice();
    console.log(computerSelection);
    if (playerSelection === "rock" && computerSelection === "scissors") {
        return "win";
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        return "win";
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        return "win";
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        return "lose";
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        return "lose";
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        return "lose"
    } else if ((playerSelection === "rock" && computerSelection === "rock") || (playerSelection === "paper" && computerSelection === "paper") || (playerSelection === "scissors" && computerSelection === "scissors")) {
        return "tie"
    }
}

// main game function
function game() {
    let playerWins = 0;
    let computerWins = 0;
    for (let i = 0; i < 5; i++) {
        if (playRound() == "win") {
            playerWins += 1;
        } else if (playRound() == "lose") {
            computerWins += 1;
        } else if (playRound() == "tie") {
            playerWins += 0;
            computerWins += 0;
        }
    }
    if (playerWins > computerWins) {
        console.log(playerWins + "\n" + computerWins + "\n" + "You won the game!");
    } else if (playerWins < computerWins) {
        console.log(playerWins + "\n" + computerWins + "\n" + "You lose the game!");
    } else if (playerWins == computerWins) {
        console.log(playerWins + "\n" + computerWins + "\n" + "The game is a tie!");
    }
}

// test the game
game();
