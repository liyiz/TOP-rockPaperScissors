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
        playGame('paper');
    });

    btnScissors.addEventListener('click', () => { 
        console.log('you picked scissors');
        playGame('scissors');
    });
});


function resetGame() {
    humanScore = 0;
    computerScore = 0;
    currentRound = 0;
    createScoreboard();
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

    updateScore();

    if (currentRound === maxRounds) {
        // end the game - switch to reportResults()
        console.log("Game over! Human: " + humanScore + " Computer: " + computerScore);
        if (humanScore > computerScore) {
            console.log("Human wins!");
            reportResults('Human');
        } 
        if (humanScore < computerScore) {
            console.log("Computer wins!");
            reportResults('Computer');
        } 
        if (humanScore === computerScore) {
            console.log("It's a draw!");
            reportResults('No one');
        }
    }

}


function reportResults(winner) {
    const title = document.querySelector('#gameStatus');
    const scoreH = document.querySelector('#human');
    const scoreC = document.querySelector('#computer');
    const whoWinner = document.querySelector('#gameMsg');

    title.textContent = 'Game over! ' + winner + ' wins!';
    scoreH.textContent = 'Human: ' + humanScore;
    scoreC.textContent = 'Computer: ' + computerScore;
    // whoWinner.textContent = '';
}


function updateScore() {
    const title = document.querySelector('#gameStatus');
    const scoreH = document.querySelector('#human');
    const scoreC = document.querySelector('#computer');

    title.textContent = 'Round: ' + currentRound;
    scoreH.textContent = 'Human: ' + humanScore;
    scoreC.textContent = 'Computer: ' + computerScore;
}


function createScoreboard() {
    const container = document.querySelector('#results');

    if (!container.hasChildNodes()) {
        const title = document.createElement('h1');
        const scoreH = document.createElement('h3');
        const scoreC = document.createElement('h3');
        const whoWinner = document.createElement('h2');
    
        title.setAttribute('id', 'gameStatus');
        scoreH.setAttribute('id', 'human');
        scoreC.setAttribute('id', 'computer');
        whoWinner.setAttribute('id', 'gameMsg');
    
        title.textContent = 'Round: ' + currentRound;
        scoreH.textContent = 'Human: ' + humanScore;
        scoreC.textContent = 'Computer: ' + computerScore;
        whoWinner.textContent = '';
    
        container.appendChild(title);
        container.appendChild(scoreH);
        container.appendChild(scoreC);
        container.appendChild(whoWinner);
    } else {

        const title = document.querySelector('#gameStatus');
        const scoreH = document.querySelector('#human');
        const scoreC = document.querySelector('#computer');
        const whoWinner = document.querySelector('#gameMsg');

        title.textContent = 'Round: ' + currentRound;
        scoreH.textContent = 'Human: ' + humanScore;
        scoreC.textContent = 'Computer: ' + computerScore;
        whoWinner.textContent = '';
    }

}


function updateGameMsg(message) {
    const whoWinner = document.querySelector('#gameMsg');
    whoWinner.textContent = message;
}


function playRound(humanChoice, computerChoice) {

    if (humanChoice.toLowerCase() === "rock" && computerChoice.toLowerCase() === "rock") {
        updateGameMsg("Draw! Rock doesn't do anything to Rock");
    }
    if (humanChoice.toLowerCase() === "paper" && computerChoice.toLowerCase() === "paper") {
        updateGameMsg("Draw! Paper doesn't do anything to Paper");
    }
    if (humanChoice.toLowerCase() === "scissors" && computerChoice.toLowerCase() === "scissors") {
        updateGameMsg("Draw! Scissors don't do anything to Scissors");
    }
    if (humanChoice.toLowerCase() === "rock" && computerChoice.toLowerCase() === "paper") {
        updateGameMsg("You lose! Paper wraps Rock");
        return "computer";
    }
    if (humanChoice.toLowerCase() === "rock" && computerChoice.toLowerCase() === "scissors") {
        updateGameMsg("You win! Rock smashes Scissors");
        return "human";
    }
    if (humanChoice.toLowerCase() === "paper" && computerChoice.toLowerCase() === "rock") {
        updateGameMsg("You win! Paper wraps Rock");
        return "human";
    }
    if (humanChoice.toLowerCase() === "paper" && computerChoice.toLowerCase() === "scissors") {
        updateGameMsg("You lose! Scissors cuts Paper");
        return "computer";
    }
    if (humanChoice.toLowerCase() === "scissors" && computerChoice.toLowerCase() === "paper") {
        updateGameMsg("You win! Scissors cuts Paper");
        return "human";
    }
    if (humanChoice.toLowerCase() === "scissors" && computerChoice.toLowerCase() === "rock") {
        updateGameMsg("You lose! Rock smashes Scissors");
        return "computer";
    }

}