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