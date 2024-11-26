let humanScore = 0;
let computerScore = 0;
let currentRound = 0;
const maxRounds = 5;

document.addEventListener('DOMContentLoaded',() => {
    // handle load event

    // reset global game variables
    resetGame();

    // add events to choice buttons
    const btnRock = document.querySelector('#rock');
    const btnPaper = document.querySelector('#paper');
    const btnScissors = document.querySelector('#scissors');

    btnRock.addEventListener('click', () => { 
        console.log('you picked rock');
        playGame('rock');
    });

    btnPaper.addEventListener('click', () => { 
        console.log('you picked paper'); 
    });

    btnScissors.addEventListener('click', () => { 
        console.log('you picked scissors'); 
    });
});


function resetGame() {
    humanScore = 0;
    computerScore = 0;
    currentRound = 0;
}


function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}


function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    let num = 0;
    num = getRandomInt(choices.length);
    return choices[num];
}


function getHumanChoice() {
    let humanChoice = prompt("Rock, Paper, or Scissors?", "");
    if (humanChoice === null) {
        alert("Aw, not feeling up to it? Afraid a number generator will beat you?");
        return "cancel";
    }

    if (humanChoice.toLowerCase() === "rock") {
        return "rock";
    } else if (humanChoice.toLowerCase() === "paper") {
        return "paper";
    } else if (humanChoice.toLowerCase() === "scissors") {
        return "scissors";
    } else {
        alert("You didn't pick a valid choice, try again");
        getHumanChoice();
    }

}


function playGame(humanSelection) {

    // if new game
    if (currentRound >= maxRounds) {
        resetGame();
    }

    // if mid game
    const computerSelection = getComputerChoice();
    let winner = playRound(humanSelection, computerSelection);
    if (winner === "human") {
        humanScore++
    }
    if (winner === "computer") {
        computerScore++
    }

    if (currentRound < maxRounds) {
        currentRound++;
    }

    if (currentRound === maxRounds) {
        // end the game - switch to reportResults()
        console.log("Game over! Human: " + humanScore + " Computer: " + computerScore);
        if (humanScore > computerScore) {
            console.log("Human wins!");
        } else {
            console.log("Computer wins!");
        }

        reportResults(winner)

    }

}


function reportResults(winner) {
    const container = document.querySelector('#results');

    // <h1>Game Over</h1>
    // <h3>Human: score</h3>
    // <h3>Computer: score</h3>
    // <h2>Winner wins!</h2>

    const title = document.createElement('h1');
    const scoreH = document.createElement('h3');
    const scoreC = document.createElement('h3');
    const whoWinner = document.createElement('h2');

    title.textContent = 'Game over!';
    scoreH.textContent = 'Human: ' + humanScore;
    scoreC.textContent = 'Computer: ' + computerScore;
    whoWinner.textContent = winner + ' wins!';


    container.appendChild(title);
    container.appendChild(scoreH);
    container.appendChild(scoreC);
    container.appendChild(whoWinner);
}


function playRound(humanChoice, computerChoice) {

    if (humanChoice.toLowerCase() === "rock" && computerChoice.toLowerCase() === "rock") {
        console.log("Draw! Rock doesn't do anything to Rock");
    }
    if (humanChoice.toLowerCase() === "paper" && computerChoice.toLowerCase() === "paper") {
        console.log("Draw! Paper doesn't do anything to Paper");
    }
    if (humanChoice.toLowerCase() === "scissors" && computerChoice.toLowerCase() === "scissors") {
        console.log("Draw! Scissors don't do anything to Scissors");
    }
    if (humanChoice.toLowerCase() === "rock" && computerChoice.toLowerCase() === "paper") {
        console.log("You lose! Paper wraps Rock");
        return "computer";
    }
    if (humanChoice.toLowerCase() === "rock" && computerChoice.toLowerCase() === "scissors") {
        console.log("You win! Rock smashes Scissors");
        return "human";
    }
    if (humanChoice.toLowerCase() === "paper" && computerChoice.toLowerCase() === "rock") {
        console.log("You win! Paper wraps Rock");
        return "human";
    }
    if (humanChoice.toLowerCase() === "paper" && computerChoice.toLowerCase() === "scissors") {
        console.log("You lose! Scissors cuts Paper");
        return "computer";
    }
    if (humanChoice.toLowerCase() === "scissors" && computerChoice.toLowerCase() === "paper") {
        console.log("You win! Scissors cuts Paper");
        return "human";
    }
    if (humanChoice.toLowerCase() === "scissors" && computerChoice.toLowerCase() === "rock") {
        console.log("You lose! Rock smashes Scissors");
        return "computer";
    }

}