const choices = ["rock", "paper", "scissors"];
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");
const playerScore = document.getElementById("playerScore");
const computerScore = document.getElementById("computerScore");

let playerScore1 = 0;
let computerScore1 = 0;

function playGame(playerChoice) {
    const computerchoice = choices[Math.floor(Math.random() * choices.length)];
    let result = "";
    if (playerChoice === computerchoice) {
        result = "It's a tie !"
    } else {
        switch (playerChoice) {
            case "rock":
                result = (computerchoice === "scissors") ? "You Win !" : "You Lose !"
                break;
            case "paper":
                result = (computerchoice === "rock") ? "You Win !" : "You Lose !"
                break;
            case "scissors":
                result = (computerchoice === "paper") ? "You Win !" : "You Lose !"
                break;

        }
    }

    playerDisplay.textContent = `Player: ${playerChoice}`
    computerDisplay.textContent = `Compter: ${computerchoice}`
    resultDisplay.textContent = result;

    resultDisplay.classList.remove("greentext", "redtext", "bluetext")


    switch (result) {
        case "You Win !":
            resultDisplay.classList.add("greentext")
            playerScore1++;
            playerScore.textContent=playerScore1;

        case "You Lose !":
            resultDisplay.classList.add("redtext")
             computerScore1++;
            computerScore.textContent=computerScore1;
            break;

        case "It's a tie !":
            resultDisplay.classList.add("bluetext")
            break;

    }
}



