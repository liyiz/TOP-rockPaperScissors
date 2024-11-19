console.log("hello there.")



function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function getComputerChoiceA() {
    const choices = ["rock", "paper", "scissors"];
    let num = 0;
    num = getRandomInt(choices.length);
    return choices[num];
}

function getComputerChoiceB() {
    let choice;
    let num = 0;
    num = getRandomInt(3);

    if (num === 0) {
        choice = "rock";
    }
    if (num === 1) {
        choice = "paper";
    }
    if (num === 2) {
        choice = "scissors";
    }
    return choice;
}


function getHumanChoice() {
    let humanChoice = prompt("Rock, Paper, or Scissors?", "");
    if (humanChoice === null) {
        alert("Aw, not feeling up to it? Afraid a number generator will beat you?");
        return null;
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

function playGame(rounds) {
    let humanScore = 0;
    let computerScore = 0;

    // run rounds
    for (let i = 0 ; i < rounds; i++) {

        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoiceB();

        let winner = playRound(humanSelection, computerSelection);
        if (winner === "human") {
            humanScore++
        }
        if (winner === "computer") {
            computerScore++
        }
    }

    // end the game
    console.log("Game over! Human: " + humanScore + " Computer: " + computerScore);
    if (humanScore > computerScore) {
        console.log("Human wins!");
    } else {
        console.log("Computer wins!");
    }

}

function playRound(humanChoice, computerChoice) {
    alert("You picked " + humanChoice + " and the computer picked " + computerChoice);
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

playGame(5);

// todo: fix bug when player cancels or enters invalid choice