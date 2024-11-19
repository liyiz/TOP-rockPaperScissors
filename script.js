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