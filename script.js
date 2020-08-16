const startButton = document.querySelector("#start");
const choiceButton = document.querySelectorAll(".choiceButton");
const h1 = document.querySelector("h1");
const description = document.querySelector("#description-box");
const playerDisplay = document.querySelector("#player-score");
const computerDisplay = document.querySelector("#computer-score");
const roundDisplay = document.querySelector("#round-display");
const resetButton = document.querySelector("#reset-button");

choiceButton.forEach((choiceButton) => {
    choiceButton.addEventListener("click", () => {
        playRound(choiceButton.id, computerPlay());
    });
});

startButton.addEventListener("click", function (e) {
    e.target.setAttribute("style", "display: none");
    choiceButton.forEach((button) => {
        button.classList.toggle("hidden");
    });
    h1.classList.toggle("hidden");
    description.classList.toggle("hidden");
    playerDisplay.classList.toggle("hidden");
    computerDisplay.classList.toggle("hidden");
    roundDisplay.classList.toggle("hidden");
});

resetButton.addEventListener("click", function (e) {
    e.target.classList.toggle("hidden");
    startButton.setAttribute("style", "display: block");
    choiceButton.forEach((button) => {
        button.classList.toggle("hidden");
    });
    h1.classList.toggle("hidden");
    description.classList.toggle("hidden");
    playerDisplay.classList.toggle("hidden");
    computerDisplay.classList.toggle("hidden");
    roundDisplay.classList.toggle("hidden");
    playerScore = 0;
    computerScore = 0;
    round = 0;
    description.textContent = "";
    playerDisplay.textContent = "Player score: 0";
    computerDisplay.textContent = "Computer score: 0";
    roundDisplay.textContent = "Round 1";
});

// Computer chosen option
function computerPlay() {
    let rng = Math.floor(Math.random() * 100);
    if (rng <= 33) {
        return "rock";
    } else if (rng <= 66) {
        return "paper";
    } else {
        return "scissors";
    }
}

// Announces final score + winner
function finalGameResult(playerScore, computerScore) {
    if (playerScore > computerScore) {
        description.textContent =
            description.textContent +
            ` Congratulations, you have won with a score of ${playerScore} to ${computerScore}`;
    } else if (playerScore < computerScore) {
        description.textContent =
            description.textContent +
            ` Oh no! You have lost with a score of ${playerScore} to ${computerScore}. Better luck next time!`;
    } else if (playerScore == computerScore) {
        description.textContent =
            description.textContent +
            ` You both have tied with a score of ${playerScore} to ${computerScore}`;
    } else {
        description.textContent = "A fatal error has occured";
    }
}

let playerScore = 0;
let computerScore = 0;
var round = 0;
// Main game
function playRound(playerSelection, computerSelection) {
    if (round >= 5) {
        return;
    }

    round++;
    if (playerSelection == computerSelection) {
        description.textContent = `You play ${playerSelection}, while your opponent plays ${computerSelection}.
                    You draw, both of you played ${playerSelection}.`;
        playerDisplay.textContent = `Player score:
                    ${playerScore}`;
        computerDisplay.textContent = `Computer score:
                    ${computerScore}`;
        if (round === 5) {
            finalGameResult(playerScore, computerScore);
            roundDisplay.textContent = "Results";
            resetButton.classList.toggle("hidden");
            return;
        }
        roundDisplay.textContent = `Round ${round + 1}`;
        return;
    } else if (
        (playerSelection == "rock" && computerSelection == "scissors") ||
        (playerSelection == "paper" && computerSelection == "rock") ||
        (playerSelection == "scissors" && computerSelection == "paper")
    ) {
        playerScore++;
        description.textContent = `You play ${playerSelection}, while your opponent plays ${computerSelection}.\n
                    You win, ${playerSelection} beats ${computerSelection}.\n`;
        playerDisplay.textContent = `Player score:
                    ${playerScore}`;
        computerDisplay.textContent = `Computer score:
                    ${computerScore}`;
        if (round === 5) {
            finalGameResult(playerScore, computerScore);
            roundDisplay.textContent = "Results";
            resetButton.classList.toggle("hidden");
            return;
        }
        roundDisplay.textContent = `Round ${round + 1}`;
        return;
    } else {
        computerScore++;
        description.textContent = `You play ${playerSelection}, while your opponent plays ${computerSelection}.\n
                    You lose, ${computerSelection} beats ${playerSelection}.\n`;
        playerDisplay.textContent = `Player score:
                    ${playerScore}`;
        computerDisplay.textContent = `Computer score:
                    ${computerScore}`;
        if (round === 5) {
            finalGameResult(playerScore, computerScore);
            roundDisplay.textContent = "Results";
            resetButton.classList.toggle("hidden");
            return;
        }
        roundDisplay.textContent = `Round ${round + 1}`;
        return;
    }
}
