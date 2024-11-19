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
        alert("You picked rock.");
        return "rock";
    } else if (humanChoice.toLowerCase() === "paper") {
        alert("You picked paper.");
        return "paper";
    } else if (humanChoice.toLowerCase() === "scissors") {
        alert("You picked scissors.");
        return "scissors";
    } else {
        alert("You didn't pick a valid choice, try again");
        getHumanChoice();
    }

}

function playRound(humanChoice, computerChoice) {
    // how to compare the two choices though?
    if (humanChoice.toLowerCase() === "rock" && computerChoice.toLowerCase() === "rock") {
        console.log("Draw! Rock doesn't do anything to Rock");
    }
    // console.log("You lose! Paper beats Rock");
    // onsole.log("You win! Paper beats Rock");
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerchoiceB();

playRound(humanSelection, computerSelection);