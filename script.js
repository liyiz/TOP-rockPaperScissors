console.log("hello there.")

let humanScore = 0;
let computerScore = 0;

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
    }
    if (humanChoice.toLowerCase() === "rock" && computerChoice.toLowerCase() === "scissors") {
        console.log("You win! Rock smashes Scissors");
    }
    if (humanChoice.toLowerCase() === "paper" && computerChoice.toLowerCase() === "rock") {
        console.log("You win! Paper wraps Rock");
    }
    if (humanChoice.toLowerCase() === "paper" && computerChoice.toLowerCase() === "scissors") {
        console.log("You lose! Scissors cuts Paper");
    }
    if (humanChoice.toLowerCase() === "scissors" && computerChoice.toLowerCase() === "paper") {
        console.log("You win! Scissors cuts Paper");
    }
    if (humanChoice.toLowerCase() === "scissors" && computerChoice.toLowerCase() === "rock") {
        console.log("You lose! Rock smashes Scissors");
    }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoiceB();

playRound(humanSelection, computerSelection);