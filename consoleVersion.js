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

// Human chosen option
function humanPlay() {
    do {
        playerSelection = prompt(
            "Pick your poison:\n[ROCK] [PAPER] [SCISSORS]"
        );
        playerSelection = playerSelection.toLowerCase();
    } while (
        playerSelection != "rock" &&
        playerSelection != "paper" &&
        playerSelection != "scissors"
    );

    return playerSelection;
}

// Round result decider
function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        return 0;
    } else if (
        (playerSelection == "rock" && computerSelection == "scissors") ||
        (playerSelection == "paper" && computerSelection == "rock") ||
        (playerSelection == "scissors" && computerSelection == "paper")
    ) {
        return 1;
    } else {
        return 2;
    }
}

// Announces final score + winner
function finalGameResult(playerScore, computerScore) {
    if (playerScore > computerScore) {
        console.log(
            `Congratulations, you have won with a score of ${playerScore} to ${computerScore}`
        );
    } else if (playerScore < computerScore) {
        console.log(
            `Oh no! You have lost with a score of ${playerScore} to ${computerScore}. Better luck next time!`
        );
    } else if (playerScore == computerScore) {
        console.log(
            `You both have tied with a score of ${playerScore} to ${computerScore}`
        );
    } else {
        console.log("A fatal error has occured");
    }
}

function game() {
    let playerScore = 0;
    let computerScore = 0;
    var round;
    let computerSelection;
    let playerSelection;
    if (confirm("Are you ready to rumble?!")) {
        console.log("Very well, let us begin");
        for (round = 0; round < 5; round++) {
            let newRound = round + 1;
            console.log(`Round ${newRound} start!`);
            playerSelection = humanPlay();
            computerSelection = computerPlay();
            switch (playRound(playerSelection, computerSelection)) {
                case 0:
                    console.log(
                        `You play ${playerSelection}, while your opponent plays ${computerSelection}`
                    );
                    console.log(
                        `You draw, both of you played ${playerSelection}`
                    );
                    console.log(
                        `The score currently is ${playerScore} for you and ${computerScore} for the opponent`
                    );
                    break;
                case 1:
                    playerScore++;
                    console.log(
                        `You play ${playerSelection}, while your opponent plays ${computerSelection}`
                    );
                    console.log(
                        `You win, ${playerSelection} beats ${computerSelection}`
                    );
                    console.log(
                        `The score currently is ${playerScore} for you and ${computerScore} for the opponent`
                    );
                    break;
                case 2:
                    computerScore++;
                    console.log(
                        `You play ${playerSelection}, while your opponent plays ${computerSelection}`
                    );
                    console.log(
                        `You lose, ${computerSelection} beats ${playerSelection}`
                    );
                    console.log(
                        `The score currently is ${playerScore} for you and ${computerScore} for the opponent`
                    );
                    break;
                default:
                    console.log("A fatal error has occured");
                    break;
            }
        }
        finalGameResult(playerScore, computerScore);
    } else {
        console.log("Get prepared then!");
    }
}
