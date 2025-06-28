// make the options

function getComputerChoice() {
    function choiceNumber() {
        return Math.floor(Math.random() * 3 + 1);
    }
    let choice = choiceNumber();
    if (choice == 1) {
        return ("rock");
    } else if (choice == 2) { 
        return ("paper");
    } else if (choice == 3) {
        return ("scissors");
}
 }
    
function getHumanChoice(choice) {
    const computerChoice = getComputerChoice();
    playRound(choice, computerChoice);
}

const rockBtn = document.querySelector("button#rock");
const paperBtn = document.querySelector("button#paper");
const scissorsBtn = document.querySelector("button#scissors");

rockBtn.addEventListener("click", () => getHumanChoice("rock"));
paperBtn.addEventListener("click", () => getHumanChoice("paper"));
scissorsBtn.addEventListener("click", () => getHumanChoice("scissors"));




    let humanScore = 0;
    let computerScore = 0;

    const resultText = document.querySelector("p.result");
    const scoreText = document.querySelector("p.score");

    function playRound(humanChoice , computerChoice) {
        
        if ((humanChoice === "rock" && computerChoice === "scissors") ||
            (humanChoice === "paper" && computerChoice === "rock") ||
            (humanChoice === "scissors" && computerChoice === "paper")) {
                resultText.textContent = "You win! " + humanChoice + " beats " + computerChoice;
                humanScore = humanScore + 1;
                scoreText.textContent = "Human score: " + humanScore + " | " + "Computer score:" + computerScore;

        } else if ((humanChoice === "scissors" && computerChoice === "rock") ||
                   (humanChoice === "rock" && computerChoice === "paper") ||
                   (humanChoice === "paper" && computerChoice === "scissors")) {
                 resultText.textContent = "You lose! " + computerChoice + " beats " + humanChoice;
                computerScore = computerScore + 1;
                scoreText.textContent = "Human score: " + humanScore + " | " + "Computer score:" + computerScore;
                
        } else if (humanChoice === computerChoice) {
                resultText.textContent = "It's a draw";
                scoreText.textContent = "Human score: " + humanScore + " | " + "Computer score:" + computerScore;
        }
        checkGameWinner();
    }

    function checkGameWinner() {
        if (humanScore >= 5) {
            resultText.textContent = "Game Over! You win the game!";
            scoreText.textContent = "Human score: " + humanScore + " | " + "Computer score:" + computerScore;
            playAgain();
        } else if (computerScore >= 5) {
            resultText.textContent = "Game Over! Computer wins the game!";
            scoreText.textContent = "Human score: " + humanScore + " | " + "Computer score:" + computerScore;
            playAgain();
        }
    }


    function playAgain() {
        const playAgainBtn = document.createElement("button");
        playAgainBtn.textContent = "Play Again";
        playAgainBtn.id = "play-again-button";
        playAgainBtn.addEventListener("click", resetGame => {
            humanScore = 0;
            computerScore = 0;
            resultText.textContent = "";
            scoreText.textContent = "Human score: 0 | Computer score: 0";
            if (playAgainBtn) {
                playAgainBtn.remove();
            }
        });
        document.querySelector(".result-container").appendChild(playAgainBtn);
    }








    
