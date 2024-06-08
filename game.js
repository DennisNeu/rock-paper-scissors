let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3);
    return randomNumber;
}

function getHumanChoice() {
    let choice;

    while (isNaN(choice) || choice < 1 || choice > 3) {
        choice = parseInt(prompt("Make a choice. 1 = rock, 2 = paper, 3 = scissors"));
    }

    return choice - 1;
}

function playRound(computerChoice, humanChoice) {
    // 0 = rock
    // 1 = paper
    // 2 = scissors

    computerChoice = getComputerChoice();
    console.log(`Computer Choice = ${computerChoice}`);
    humanChoice = getHumanChoice();

    if (humanChoice === computerChoice) {
        console.log("Its a tie!");
        return;
    }

    switch(humanChoice) {
        case 0:
            if (computerChoice === 1) {
                console.log("You chose rock, computer chose paper. You lose");
                computerScore++;
                return;
            }

            if (computerChoice === 2) {
                console.log("You chose rock, computer chose scissors. You win");
                playerScore++;
                return;
            }
        case 1:
            if (computerChoice === 0) {
                console.log("You chose paper, computer chose rock. You win");
                playerScore++;
                return;
            }

            if (computerChoice === 3) {
                console.log("You chose paper, comupter chose scissors. You lose");
                computerScore++;
                return;
            }

        case 2:
            if (computerChoice === 0) {
                console.log("You chose scissors, computer chose rock. You lose");
                computerScore++;
                return;
            }

            if (computerChoice === 1) {
                console.log("You chose scissors, comupter chose paper. You win");
                playerScore++;
                return;
            }     
    }
}

function playGame() {
    for (i = 0; i < 5; i++) {
        playRound();
    }
    
    if (playerScore < computerScore) {
        console.log("The computer won");
    } else if (playerScore > computerScore) {
        console.log("Player won");
    } else {
        console.log("Tie!")
    }
}

playGame();